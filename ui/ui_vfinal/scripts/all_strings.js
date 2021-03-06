// Stores all the strings of UI

var addOnText = {
  'homeSidebarTitle': 'Debiased Analysis',
  'tableRange': {
    'selectTableHeading': 'Select Table',
  	'dataRangeHeading': 'DATA RANGE',
  	'editHoverText': 'Edit',
  	'dataRangeLabel': 'Data Range: ',
  	'headerRangeLable': 'Header Range: ',
	  'editDialog': {
      'dialogHeading': 'EDIT DATA RANGE',
      'rangeLabel': 'Range',
      'rangePlaceholder': 'ex: A1:F10',
      'headerRowLabel': 'Header Row',
      'headerRowPlaceholder': 'ex: 1',
      'selectEntireTableLabel': 'Select entire table - ',
      'selectRangeIcon': {
        'onHover': 'Get data range',
		    'onClick': 'Selecting'
      },
      'primaryBtnContent': 'Update',
      'primaryBtnActiveContent': 'Updating',
      'secondaryBtnContent': 'Cancel',
	  },
	  'errorMsgs': {
      'errorHeader': 'Please enter a valid header row.',
      'errorHeaderOnUpdate': 'Please select a header at top of table.',
      'errorRange': 'Please select a valid range.',
      'errorRangeOnUpdate': 'Plese select a larger range.',
      'errorEmptyRange': 'Please select a data range.'
	  }
  },
  'intentPicker': {
    'pickIntentHeading': 'Pick Intent',
    'showSampleQuery': 'Show Sample Query',
  	'hideSampleQuery': 'Hide Sample Query',
  	'selectIntentBtn': 'Select',
  	'selectIntentBtnActive': 'Selecting'
  },
  'intents': {
    'show': {
      'sidebarTitle': 'Show',
      'intentName': 'Show',
      'description': 'Displays data based on user\'s requirements',
      'queryFilledWords': {
        'show': 'Show ',
        'for': ' for ',
        'where': ' where ',
        'from': ' from '
      },
      'queryPlaceholders': {
        'metric': '<values>',
        'dimension': '<column(s)>',
        'slice': '<filter(s)>',
        'dateRange': '<date range>'
      },
      'querySampleValues': {
        'metric': 'Sum of Amount paid',
        'dimension': 'Customer',
        'slice': 'Payment mode is In Ewallet, Credit card',
        'dateRange': 'Date of purchase 2019-01-01 to 2019-12-31'
      },
      'cardHeading': {
        'metric': 'Values',
        'dimension': 'Column(s)',
        'slice': 'Filter(s)',
        'dateRange': 'Date Range'
      },
      'errorMsgs': {
        'errorNoDimensionMetric': 'Please select a value or column.'
      }
    },
    'topK': {
      'sidebarTitle': 'Top-K',
      'intentName': 'Top-K',
      'description': 'Display top-k items based on provided criterion',
      'queryFilledWords': {
        'findThe': 'Find the ',
        'space': ' ',
        'with': ' with ',
        'where': ' where ',
        'from': ' from '
      },
      'queryPlaceholders': {
        'limit': '<top-k>',
        'sortOrder': '<maximum/minimum>',
        'metric': '<value>',
        'dimension': '<column(s)>',
        'slice': '<filter(s)>',
        'dateRange': '<date range>'
      },
      'querySampleValues': {
        'limit': 'top-10',
        'sortOrder': 'maximum',
        'metric': 'Sum of Amount paid',
        'dimension': 'Customer',
        'slice': 'Product category is Equal to Home and lifestyle',
        'dateRange': 'Date of purchase 2019-01-01 to 2019-12-31'
      },
      'queryPrefilledValues': {
        'limit': 'top-10',
        'sortOrder': 'maximum'
      },
      'cardHeading': {
        'limit': 'K',
        'sortOrder': 'Sort Order',
        'metric': 'Value',
        'dimension': 'Column(s)',
        'slice': 'Filter(s)',
        'dateRange': 'Date Range'
      },
      'errorMsgs': {
        'errorNoDimensionMetric': 'Please select a value and column.',
        'errorNoDimension': 'Please select a value.',
        'errorNoMetric': 'Please select a column.'
      }
    },
    'sliceCompare': {
      'sidebarTitle': 'Compare Subgroups',
      'intentName': 'Compare Subgroups',
      'description': 'Compare 2 subgroups based on provided criterion',
      'queryFilledWords': {
        'compareThe': 'Compare the ',
        'for': ' for ',
        'by': ' by ',
        'where': ' where ',
        'from': ' from '
      },
      'queryPlaceholders': {
        'metric': '<data>',
        'compareValue': '<value1 and value2>',
        'dimension': '<column(s)>',
        'slice': '<filter(s)>',
        'dateRange': '<date range>'
      },
      'querySampleValues': {
        'metric': 'Sum of Amount paid',
        'compareValue': 'Product category Electronic accessories and Fashion accessories',
        'dimension': 'Payment mode',
        'slice': 'Payment mode is Not equal to Cash',
        'dateRange': 'Date of purchase 2019-01-01 to 2019-12-31'
      },
      'cardHeading': {
        'metric': 'Data',
        'compareValue': 'Value1 and Value2',
        'dimension': 'Column(s)',
        'slice': 'Filter(s)',
        'dateRange': 'Date Range'
      },
      'errorMsgs': {
        'errorNoMetric': 'Please select data - column name and the operation.',
        'errorNoSummaryOperation': 'Please select operation for the data column',
        'errorNoCompareValues': 'Please select values to compare'
      }
    },
    'timeCompare': {
      'sidebarTitle': 'Time-Compare',
      'intentName': 'Time-Compare',
      'description': 'Compare the data of 2 given date ranges',
      'queryFilledWords': {
        'compareThe': 'Compare the ',
        'for': ' for ',
        'by': ' by ',
        'where': ' where '
      },
      'queryPlaceholders': {
        'metric': '<data>',
        'compareDateRange': '<date range 1 and date range 2>',
        'dimension': '<column(s)>',
        'slice': '<filter(s)>'
      },
      'querySampleValues': {
        'metric': 'Sum of Gross income',
        'compareDateRange': 'Date of purchase 2019-01-01 to 2019-06-30 and 2019-07-01 to 2019-12-31',
        'dimension': 'Product category',
        'slice': 'Product category is Not equal to Food and beverages'
      },
      'cardHeading': {
        'metric': 'Data',
        'compareValue': 'Date Ranges',
        'dimension': 'Column(s)',
        'slice': 'Filter(s)'
      },
      'errorMsgs': {
        'errorNoMetric': 'Please select data - column name and the operation.',
        'errorNoSummaryOperation': 'Please select operation for the data column',
        'errorNoCompareDateRange': 'Please select date ranges to compare'
      }
    },
    'trend': {
      'sidebarTitle': 'Trend',
      'intentName': 'Trend',
      'description': 'Displays trend of given data over the provided period of time',
      'queryFilledWords': {
        'trendOf': ' trend of ',
        'where': ' where ',
        'from': ' from '
      },
      'queryPlaceholders': {
        'timeGranularity': '<Periodic>',
        'metric': '<values>',
        'slice': '<filter(s)>',
        'dateRange': '<date range>'
      },
      'querySampleValues': {
        'timeGranularity': 'Monthly',
        'metric': 'Sum of Gross income',
        'slice': 'Product category is Not in Sports and travel, Health and beauty',
        'dateRange': 'Date of purchase 2019-01-01 to 2019-12-31'
      },
      'cardHeading': {
        'timeGranularity': 'Periodic',
        'metric': 'Values',
        'slice': 'Filter(s)',
        'dateRange': 'Date Range'
      },
      'errorMsgs': {
        'errorNoMetric': 'Please select values - column name and the operation.',
        'errorNoSummaryOperation': 'Please select operation for the values.',
        'errorNoGranularity': 'Please select period for trend',
        'errorNoDateRange': 'Please enter date column'
      }
    },
    'correlation': {
      'sidebarTitle': 'Correlation',
      'intentName': 'Correlation',
      'description': 'Calculates the correlation between the two variables provided. Note that the correlation ranges from -1 to 1',
      'queryFilledWords': {
        'correlationBetween': 'Correlation between ',
        'forEach': ' for each ',
        'where': ' where ',
        'from': ' from '
      },
      'queryPlaceholders': {
        'metricsCorrelation': '<value1 and value2>',
        'dimension': '<column(s)>',
        'slice': '<filter(s)>',
        'dateRange': '<date range>'
      },
      'querySampleValues': {
        'metricsCorrelation': 'Amount paid and Gross income',
        'dimension': 'Product category',
        'slice': 'Payment mode is Equal to Credit card',
        'dateRange': 'Date of purchase 2019-01-01 to 2019-12-31'
      },
      'cardHeading': {
        'metricsCorrelation': 'Value1 and Value2',
        'dimension': 'Column(s)',
        'slice': 'Filter(s)',
        'dateRange': 'Date Range'
      },
      'errorMsgs': {
        'errorNoCorrelationMetrics': 'Please select values to apply correlation.'
      }
    },
    'madlibCardHeading': 'Query',
    'computeBtn': 'Compute',
    'computeBtnActive': 'Computing'
  },
  'errorAlertHeading': 'Error'
}