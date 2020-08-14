"""
Copyright 2020 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
"""

"""This module implements detection of the more than just topk oversight
in the top-k intent.

More_than_just_topk is the oversight which arises when the user misses
rows after the kth row that have metric equal-to or close-by the kth row.

Here we use the difference with the kth row normalized by the standard
deviation of top-k to decide if any row is similar to the 

"""

from util import constants, enums

def more_than_just_topk(result_table, k, metric):
    """This function gives suggestions if 'more than just top-k' oversight is
    detected in the results generated by the top-k.

    This function gives suggestions to increasse k if some of the rows after
    the kth row are very similar to the kth row.
    Parameter used to decide if a row is similar to the kth row.
    absolute value of (row - kth_row) / std_dev
    standard deviation is calculated for the top-k rows only
    std_dev -> standard deviation of metric of the top-k rows
    row, kth_row -> value of metric of the considered row

    The cut-off is fixed in the util/constants module

    Args:
        topk_results: Type-pandas dataframe
            contain the results without cropping rows not in top-k.
        k: integer
            It is the number of entries to be taken in the top-k results.
        metric: str
            It is the column name of the metric column

    Returns:
        suggestion : dictonary with keys 'suggestion', 'oversight_name',
                     'change_list', 'confidence_score'.
        change_list is an efficient way of encoding the new suggested query
        json that we suggest the user to try.
    """
    num_rows = result_table.shape[0]

    # No suggestion if all rows already in the result
    if k >= num_rows or k == -1:
        return

    # standard deviation of top k rows
    standard_deviation_topk = None
    if k == 1:
        standard_deviation_topk = 0
    else:
        standard_deviation_topk = result_table[:k][metric].std()

    # lower bound & upper bound for the value of metric 
    val_lower_bound = result_table[metric][k - 1] - standard_deviation_topk * constants.MORE_THAN_JUST_TOPK_THRESHOLD
    val_upper_bound = result_table[metric][k - 1] + standard_deviation_topk * constants.MORE_THAN_JUST_TOPK_THRESHOLD

    # init the k in suggested query as k in original query
    new_k = k
    confidence_score = 0

    for row in range(k, num_rows):
        # value of metric at row 
        val = result_table[metric][row]
        if val_lower_bound <= val and val <= val_upper_bound:
            new_k = row + 1
        else:
            break

    if standard_deviation_topk == 0:
        return

    confidence_score = abs(result_table[metric][new_k - 1] - result_table[metric][k - 1]) / standard_deviation_topk

    print(new_k, k)

    if new_k != k:
        change_list = {'topKLimit':new_k}
        suggestion = {}
        suggestion['change_list'] = change_list
        suggestion['suggestion'] = 'value of ' + metric + ' in some rows after the top-k is similar to the Kth row'
        suggestion['confidence_score'] = confidence_score
        suggestion['oversight'] = enums.Oversights.MORE_THAN_JUST_TOPK
        return suggestion
    else:
        return
