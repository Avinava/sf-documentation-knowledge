---
title: "Return Details About Dashboard Components"
domain: api-analytics
topic: return-details-about-dashboard-components
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:58.349Z
estimatedTokens: 177
keywords: [Dashboard, Components, POST]
---

# Return Details About Dashboard Components

> Get details about one or more dashboard components using a POST request.

# Return Details About Dashboard Components

Get details about one or more dashboard components using a POST request.

Use a POST request on the [Dashboard Results](atlas.en-us.api_analytics.meta/api_analytics/analytics_api_dashboard_results_resource.htm#analytics_api_dashboard_results_resource "Can return metadata, data, and status for the specified dashboard. Can also refresh, save, or delete a dashboard.") resource to get details about one or more dashboard components. Specify which dashboard components you want details about using componentIds in the request body. Available in API versions 36.0 and later.

Example Usage

```

```

Example Request Body

```

```

Example Response Body

```

```

## Code Examples

```
/services/data/v36.0/analytics/dashboards/01ZR00000008h2EMAQ
```

```
{
 "componentIds": ["01aR00000005aT4IAI", "01aR00000005aT5IAI"]
}
```

```
{
  "attributes" : {
    "dashboardId" : "01ZR00000008h2EMAQ",
    "dashboardName" : "Liz's Sales Manager Dashboard",
    "describeUrl" : "/services/data/v37.0/analytics/dashboards/01ZR00000008h2EMAQ/describe",
    "statusUrl" : "/services/data/v37.0/analytics/dashboards/01ZR00000008h2EMAQ/status",
    "type" : "Dashboard"
  },
  "componentData" : [ {
    "componentId" : "01aR00000005aT4IAI",
    "reportResult" : {
      "attributes" : null,
      "allData" : true,
      "factMap" : {
        "0!T" : {
          "aggregates" : [ {
            "label" : "$10,000.00",
            "value" : 10000
          } ]
        },
        "1!T" : {
          "aggregates" : [ {
            "label" : "$110,000.00",
            "value" : 110000
          } ]
        },
        "0_0!T" : {
          "aggregates" : [ {
            "label" : "$10,000.00",
            "value" : 10000
          } ]
        },
        "2_2!T" : {
          "aggregates" : [ {
            "label" : "$143.00",
            "value" : 143
          } ]
        },
        "2!T" : {
          "aggregates" : [ {
            "label" : "$400,398.00",
            "value" : 400398
          } ]
        },
        "0_1!T" : {
          "aggregates" : [ {
            "label" : "$0.00",
            "value" : 0
          } ]
        },
        "2_3!T" : {
          "aggregates" : [ {
            "label" : "$100,017.00",
            "value" : 100017
          } ]
        },
        "T!T" : {
          "aggregates" : [ {
            "label" : "$520,398.00",
            "value" : 520398
          } ]
        },
        "2_0!T" : {
          "aggregates" : [ {
            "label" : "$138.00",
            "value" : 138
          } ]
        },
        "1_0!T" : {
          "aggregates" : [ {
            "label" : "$110,000.00",
            "value" : 110000
          } ]
        },
        "2_1!T" : {
          "aggregates" : [ {
            "label" : "$300,100.00",
            "value" : 300100
          } ]
        }
      },
      "groupingsAcross" : null,
      "groupingsDown" : {
        "groupings" : [ {
          "groupings" : [ {
            "groupings" : [ ],
            "key" : "0_0",
            "label" : "-",
            "value" : null
          }, {
            "groupings" : [ ],
            "key" : "0_1",
            "label" : "-",
            "value" : null
          } ],
          "key" : "0",
          "label" : "January 2016",
          "value" : "January 2016"
        }, {
          "groupings" : [ {
            "groupings" : [ ],
            "key" : "1_0",
            "label" : "-",
            "value" : null
          } ],
          "key" : "1",
          "label" : "February 2016",
          "value" : "February 2016"
        }, {
          "groupings" : [ {
            "groupings" : [ ],
            "key" : "2_0",
            "label" : "-",
            "value" : null
          }, {
            "groupings" : [ ],
            "key" : "2_1",
            "label" : "-",
            "value" : null
          }, {
            "groupings" : [ ],
            "key" : "2_2",
            "label" : "-",
            "value" : null
          }, {
            "groupings" : [ ],
            "key" : "2_3",
            "label" : "-",
            "value" : null
          } ],
          "key" : "2",
          "label" : "March 2016",
          "value" : "March 2016"
        } ]
      },
      "hasDetailRows" : false,
      "reportExtendedMetadata" : {
        "aggregateColumnInfo" : {
          "s!AMOUNT" : {
            "dataType" : "currency",
            "label" : "Sum of Amount"
          }
        },
        "detailColumnInfo" : { },
        "groupingColumnInfo" : {
          "ACCOUNT_NAME" : {
            "dataType" : "string",
            "groupingLevel" : 0,
            "label" : "Account Name"
          },
          "CLOSE_DATE" : {
            "dataType" : "date",
            "groupingLevel" : 0,
            "label" : "Close Date"
          }
        }
      },
      "reportMetadata" : {
        "aggregates" : [ "s!AMOUNT" ],
        "buckets" : [ {
          "bucketType" : "picklist",
          "devloperName" : "BucketField_47575792",
          "label" : "Industry",
          "nullTreatedAsZero" : false,
          "otherBucketLabel" : null,
          "sourceColumnName" : "INDUSTRY",
          "values" : [ {
            "label" : "Technology",
            "rangeUpperBound" : null,
            "sourceDimensionValues" : [ "Agriculture", "Apparel", "Banking", "Biotechnology", "Chemicals", "Communications", "Construction", "Consulting", "Education", "Electronics" ]
          }, {
            "label" : "Energy",
            "rangeUpperBound" : null,
            "sourceDimensionValues" : [ "Energy", "Engineering", "Entertainment", "Environmental", "Finance", "Food & Beverage", "Government", "Healthcare", "Hospitality", "Insurance", "Machinery", "Manufacturing" ]
          }, {
            "label" : "Healthcare",
            "rangeUpperBound" : null,
            "sourceDimensionValues" : [ "Media", "Not For Profit", "Other", "Recreation", "Retail", "Shipping", "Technology", "Telecommunications", "Transportation", "Utilities" ]
          } ]
        }, {
          "bucketType" : "picklist",
          "devloperName" : "BucketField_36625466",
          "label" : "Stage",
          "nullTreatedAsZero" : false,
          "otherBucketLabel" : null,
          "sourceColumnName" : "STAGE_NAME",
          "values" : [ {
            "label" : "Early",
            "rangeUpperBound" : null,
            "sourceDimensionValues" : [ "Prospecting", "Qualification", "Needs Analysis" ]
          }, {
            "label" : "Late",
            "rangeUpperBound" : null,
            "sourceDimensionValues" : [ "Value Proposition", "Id. Decision Makers", "Perception Analysis", "Proposal/Price Quote", "Negotiation/Review" ]
          }, {
            "label" : "Won",
            "rangeUpperBound" : null,
            "sourceDimensionValues" : [ "Closed Won" ]
          }, {
            "label" : "Lost",
            "rangeUpperBound" : null,
            "sourceDimensionValues" : [ "Closed Lost" ]
          } ]
        } ],
        "chart" : null,
        "crossFilters" : [ ],
        "currency" : null,
        "description" : null,
        "detailColumns" : [ ],
        "developerName" : "Deals_Closing_This_Quarter",
        "division" : null,
        "folderId" : "00lR0000000M8IiIAK",
        "groupingsAcross" : [ ],
        "groupingsDown" : [ {
          "dateGranularity" : "None",
          "name" : "ACCOUNT_NAME",
          "sortAggregate" : null,
          "sortOrder" : "Asc"
        }, {
          "dateGranularity" : "Month",
          "name" : "CLOSE_DATE",
          "sortAggregate" : null,
          "sortOrder" : "Asc"
        } ],
        "hasDetailRows" : false,
        "hasRecordCount" : true,
        "historicalSnapshotDates" : [ ],
        "id" : "00OR0000000K2UeMAK",
        "name" : "Deals Closing This Quarter",
        "reportBooleanFilter" : null,
        "reportFilters" : [ {
          "column" : "BucketField_36625466",
          "isRunPageEditable" : true,
          "operator" : "equals",
          "value" : "Early,Late"
        }, {
          "column" : "TYPE",
          "isRunPageEditable" : true,
          "operator" : "equals",
          "value" : "Existing Business,New Business"
        } ],
        "reportFormat" : "SUMMARY",
        "reportType" : {
          "label" : "Opportunities",
          "type" : "Opportunity"
        },
        "scope" : "organization",
        "showGrandTotal" : true,
        "showSubtotals" : true,
        "sortBy" : [ ],
        "standardDateFilter" : {
          "column" : "CLOSE_DATE",
          "durationValue" : "THIS_FISCAL_QUARTER",
          "endDate" : "2016-06-30",
          "startDate" : "2016-04-01"
        },
        "standardFilters" : [ {
          "name" : "open",
          "value" : "all"
        }, {
          "name" : "probability",
          "value" : ">0"
        } ]
      }
    },
    "status" : {
      "dataStatus" : "DATA",
      "errorCode" : null,
      "errorMessage" : null,
      "errorSeverity" : null,
      "refreshDate" : "2016-03-22T18:24:39.000+0000",
      "refreshStatus" : "IDLE"
    }
  }, {
    "componentId" : "01aR00000005aT5IAI",
    "reportResult" : {
      "attributes" : null,
      "allData" : true,
      "factMap" : {
        "0!T" : {
          "aggregates" : [ {
            "label" : "$634,493.00",
            "value" : 634493
          } ]
        },
        "1!T" : {
          "aggregates" : [ {
            "label" : "$590,036.00",
            "value" : 590036
          } ]
        },
        "0_0!T" : {
          "aggregates" : [ {
            "label" : "$14.00",
            "value" : 14
          } ]
        },
        "2!T" : {
          "aggregates" : [ {
            "label" : "$1,330,035.00",
            "value" : 1330035
          } ]
        },
        "0_1!T" : {
          "aggregates" : [ {
            "label" : "$36,021.00",
            "value" : 36021
          } ]
        },
        "0_2!T" : {
          "aggregates" : [ {
            "label" : "$5,000.00",
            "value" : 5000
          } ]
        },
        "1_3!T" : {
          "aggregates" : [ {
            "label" : "$500,000.00",
            "value" : 500000
          } ]
        },
        "T!T" : {
          "aggregates" : [ {
            "label" : "$2,554,564.00",
            "value" : 2554564
          } ]
        },
        "0_3!T" : {
          "aggregates" : [ {
            "label" : "$440,000.00",
            "value" : 440000
          } ]
        },
        "1_4!T" : {
          "aggregates" : [ {
            "label" : "$13.00",
            "value" : 13
          } ]
        },
        "0_4!T" : {
          "aggregates" : [ {
            "label" : "$20,000.00",
            "value" : 20000
          } ]
        },
        "1_1!T" : {
          "aggregates" : [ {
            "label" : "$11.00",
            "value" : 11
          } ]
        },
        "0_5!T" : {
          "aggregates" : [ {
            "label" : "$90,000.00",
            "value" : 90000
          } ]
        },
        "1_2!T" : {
          "aggregates" : [ {
            "label" : "$40,000.00",
            "value" : 40000
          } ]
        },
        "0_6!T" : {
          "aggregates" : [ {
            "label" : "$43,320.00",
            "value" : 43320
          } ]
        },
        "0_7!T" : {
          "aggregates" : [ {
            "label" : "$138.00",
            "value" : 138
          } ]
        },
        "1_0!T" : {
          "aggregates" : [ {
            "label" : "$50,012.00",
            "value" : 50012
          } ]
        },
        "2_2!T" : {
          "aggregates" : [ {
            "label" : "$100,017.00",
            "value" : 100017
          } ]
        },
        "2_3!T" : {
          "aggregates" : [ {
            "label" : "$20,018.00",
            "value" : 20018
          } ]
        },
        "2_4!T" : {
          "aggregates" : [ {
            "label" : "$0.00",
            "value" : 0
          } ]
        },
        "2_0!T" : {
          "aggregates" : [ {
            "label" : "$100,000.00",
            "value" : 100000
          } ]
        },
        "2_1!T" : {
          "aggregates" : [ {
            "label" : "$1,110,000.00",
            "value" : 1110000
          } ]
        }
      },
      "groupingsAcross" : null,
      "groupingsDown" : {
        "groupings" : [ {
          "groupings" : [ {
            "groupings" : [ ],
            "key" : "0_0",
            "label" : "March 2013",
            "value" : "2013-03-01"
          }, {
            "groupings" : [ ],
            "key" : "0_1",
            "label" : "July 2015",
            "value" : "2015-07-01"
          }, {
            "groupings" : [ ],
            "key" : "0_2",
            "label" : "August 2015",
            "value" : "2015-08-01"
          }, {
            "groupings" : [ ],
            "key" : "0_3",
            "label" : "September 2015",
            "value" : "2015-09-01"
          }, {
            "groupings" : [ ],
            "key" : "0_4",
            "label" : "October 2015",
            "value" : "2015-10-01"
          }, {
            "groupings" : [ ],
            "key" : "0_5",
            "label" : "November 2015",
            "value" : "2015-11-01"
          }, {
            "groupings" : [ ],
            "key" : "0_6",
            "label" : "December 2015",
            "value" : "2015-12-01"
          }, {
            "groupings" : [ ],
            "key" : "0_7",
            "label" : "March 2016",
            "value" : "2016-03-01"
          } ],
          "key" : "0",
          "label" : "Manufacturing",
          "value" : "Manufacturing"
        }, {
          "groupings" : [ {
            "groupings" : [ ],
            "key" : "1_0",
            "label" : "February 2013",
            "value" : "2013-02-01"
          }, {
            "groupings" : [ ],
            "key" : "1_1",
            "label" : "February 2015",
            "value" : "2015-02-01"
          }, {
            "groupings" : [ ],
            "key" : "1_2",
            "label" : "September 2015",
            "value" : "2015-09-01"
          }, {
            "groupings" : [ ],
            "key" : "1_3",
            "label" : "February 2016",
            "value" : "2016-02-01"
          }, {
            "groupings" : [ ],
            "key" : "1_4",
            "label" : "April 2016",
            "value" : "2016-04-01"
          } ],
          "key" : "1",
          "label" : "Media",
          "value" : "Media"
        }, {
          "groupings" : [ {
            "groupings" : [ ],
            "key" : "2_0",
            "label" : "November 2015",
            "value" : "2015-11-01"
          }, {
            "groupings" : [ ],
            "key" : "2_1",
            "label" : "December 2015",
            "value" : "2015-12-01"
          }, {
            "groupings" : [ ],
            "key" : "2_2",
            "label" : "March 2016",
            "value" : "2016-03-01"
          }, {
            "groupings" : [ ],
            "key" : "2_3",
            "label" : "May 2016",
            "value" : "2016-05-01"
          }, {
            "groupings" : [ ],
            "key" : "2_4",
            "label" : "June 2016",
            "value" : "2016-06-01"
          } ],
          "key" : "2",
          "label" : "Technology",
          "value" : "Technology"
        } ]
      },
      "hasDetailRows" : false,
      "reportExtendedMetadata" : {
        "aggregateColumnInfo" : {
          "s!AMOUNT" : {
            "dataType" : "currency",
            "label" : "Sum of Amount"
          }
        },
        "detailColumnInfo" : { },
        "groupingColumnInfo" : {
          "INDUSTRY" : {
            "dataType" : "picklist",
            "groupingLevel" : 0,
            "label" : "Industry"
          },
          "CLOSE_DATE" : {
            "dataType" : "date",
            "groupingLevel" : 0,
            "label" : "Close Date"
          }
        }
      },
      "reportMetadata" : {
        "aggregates" : [ "s!AMOUNT" ],
        "buckets" : [ {
          "bucketType" : "picklist",
          "devloperName" : "BucketField_47575792",
          "label" : "Industry",
          "nullTreatedAsZero" : false,
          "otherBucketLabel" : null,
          "sourceColumnName" : "INDUSTRY",
          "values" : [ {
            "label" : "Technology",
            "rangeUpperBound" : null,
            "sourceDimensionValues" : [ "Agriculture", "Apparel", "Banking", "Biotechnology", "Chemicals", "Communications", "Construction", "Consulting", "Education", "Electronics" ]
          }, {
            "label" : "Energy",
            "rangeUpperBound" : null,
            "sourceDimensionValues" : [ "Energy", "Engineering", "Entertainment", "Environmental", "Finance", "Food & Beverage", "Government", "Healthcare", "Hospitality", "Insurance", "Machinery", "Manufacturing" ]
          }, {
            "label" : "Healthcare",
            "rangeUpperBound" : null,
            "sourceDimensionValues" : [ "Media", "Not For Profit", "Other", "Recreation", "Retail", "Shipping", "Technology", "Telecommunications", "Transportation", "Utilities" ]
          } ]
        }, {
          "bucketType" : "picklist",
          "devloperName" : "BucketField_36625466",
          "label" : "Stage",
          "nullTreatedAsZero" : false,
          "otherBucketLabel" : null,
          "sourceColumnName" : "STAGE_NAME",
          "values" : [ {
            "label" : "Early",
            "rangeUpperBound" : null,
            "sourceDimensionValues" : [ "Prospecting", "Qualification", "Needs Analysis" ]
          }, {
            "label" : "Late",
            "rangeUpperBound" : null,
            "sourceDimensionValues" : [ "Value Proposition", "Id. Decision Makers", "Perception Analysis", "Proposal/Price Quote", "Negotiation/Review" ]
          }, {
            "label" : "Won",
            "rangeUpperBound" : null,
            "sourceDimensionValues" : [ "Closed Won" ]
          }, {
            "label" : "Lost",
            "rangeUpperBound" : null,
            "sourceDimensionValues" : [ "Closed Lost" ]
          } ]
        } ],
        "chart" : null,
        "crossFilters" : [ ],
        "currency" : null,
        "description" : null,
        "detailColumns" : [ ],
        "developerName" : "Pipeline_By_Industry1",
        "division" : null,
        "folderId" : "005R0000000Hv5rIAC",
        "groupingsAcross" : [ ],
        "groupingsDown" : [ {
          "dateGranularity" : "None",
          "name" : "INDUSTRY",
          "sortAggregate" : null,
          "sortOrder" : "Asc"
        }, {
          "dateGranularity" : "Month",
          "name" : "CLOSE_DATE",
          "sortAggregate" : null,
          "sortOrder" : "Asc"
        } ],
        "hasDetailRows" : true,
        "hasRecordCount" : false,
        "historicalSnapshotDates" : [ ],
        "id" : "00OR0000000OgsOMAS",
        "name" : "Copy of Pipeline By Industry",
        "reportBooleanFilter" : null,
        "reportFilters" : [ {
          "column" : "ACCOUNT_TYPE",
          "isRunPageEditable" : false,
          "operator" : "lessOrEqual",
          "value" : "Integrator,Partner,Prospect"
        }, {
          "column" : "INDUSTRY",
          "isRunPageEditable" : true,
          "operator" : "notEqual",
          "value" : ""
        } ],
        "reportFormat" : "SUMMARY",
        "reportType" : {
          "label" : "Opportunities",
          "type" : "Opportunity"
        },
        "scope" : "organization",
        "showGrandTotal" : true,
        "showSubtotals" : true,
        "sortBy" : [ ],
        "standardDateFilter" : {
          "column" : "CLOSE_DATE",
          "durationValue" : "CUSTOM",
          "endDate" : null,
          "startDate" : null
        },
        "standardFilters" : [ {
          "name" : "open",
          "value" : "all"
        }, {
          "name" : "probability",
          "value" : ">0"
        } ]
      }
    },
    "status" : {
      "dataStatus" : "DATA",
      "errorCode" : null,
      "errorMessage" : null,
      "errorSeverity" : null,
      "refreshDate" : "2016-03-22T18:24:39.000+0000",
      "refreshStatus" : "IDLE"
    }
  } ],
  "dashboardMetadata" : {
    "canChangeRunningUser" : false,
    "components" : [ {
      "componentData" : 0,
      "footer" : null,
      "header" : "Pipeline This Quarter",
      "id" : "01aR00000005aT4IAI",
      "properties" : {
        "aggregates" : [ {
          "name" : "s!AMOUNT"
        } ],
        "autoSelectColumns" : false,
        "filterColumns" : [ ],
        "groupings" : null,
        "maxRows" : null,
        "sort" : null,
        "useReportChart" : false,
        "visualizationProperties" : {
          "breakPoints" : [ {
            "aggregateName" : "s!AMOUNT",
            "breaks" : [ {
              "color" : "c23934",
              "lowerBound" : 0,
              "upperBound" : 200000
            }, {
              "color" : "ffb75d",
              "lowerBound" : 200000,
              "upperBound" : 400000
            }, {
              "color" : "00716b",
              "lowerBound" : 400000,
              "upperBound" : 600000
            } ]
          } ],
          "showPercentages" : true,
          "showTotal" : true
        },
        "visualizationType" : "Gauge"
      },
      "reportId" : "00OR0000000K2UeMAK",
      "title" : null,
      "type" : "Report"
    }, {
      "componentData" : 1,
      "footer" : null,
      "header" : "Pipeline by Industry",
      "id" : "01aR00000005aT5IAI",
      "properties" : {
        "aggregates" : [ {
          "name" : "s!AMOUNT"
        } ],
        "autoSelectColumns" : false,
        "filterColumns" : [ ],
        "groupings" : [ {
          "name" : "INDUSTRY"
        } ],
        "maxRows" : null,
        "sort" : {
          "column" : "INDUSTRY",
          "sortOrder" : "asc"
        },
        "useReportChart" : false,
        "visualizationProperties" : {
          "combineSmallGroups" : false,
          "legendPosition" : "Bottom",
          "showPercentages" : false,
          "showTotal" : false,
          "showValues" : false
        },
        "visualizationType" : "Donut"
      },
      "reportId" : "00OR0000000OgsOMAS",
      "title" : null,
      "type" : "Report"
    } ],
    "description" : null,
    "developerName" : "yTtOilrkFGewFKpFUOscDuukUApfxH",
    "filters" : [ ],
    "folderId" : "00lR0000000DnRZIA0",
    "id" : "01ZR00000008h2EMAQ",
    "layout" : {
      "components" : [ {
        "colspan" : 3,
        "column" : 0,
        "row" : 0,
        "rowspan" : 4
      }, {
        "colspan" : 3,
        "column" : 0,
        "row" : 4,
        "rowspan" : 4
      } ],
      "gridLayout" : true,
      "numColumns" : 9,
      "rowHeight" : 80
    },
    "name" : "Liz's Sales Manager Dashboard",
    "runningUser" : {
      "displayName" : "Vandelay Art",
      "id" : "005R0000000Hv5rIAC"
    }
  }
}
```

## Related Topics

- Dashboard Results (atlas.en-us.api_analytics.meta/api_analytics/analytics_api_dashboard_results_resource.htm)
