---
title: "Get Report Data without Saving Changes to or Creating a
    Report"
domain: api-analytics
topic: get-report-data-without-saving-changes-to-or-creating-a-report
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:58.997Z
estimatedTokens: 137
keywords: [Report, Data, Saving, Changes, Creating, Run, changing, making, POST, query, resource, filling, org, unnecessary, reports]
---

# Get Report Data without Saving Changes to or Creating a
    Report

> Run a report without creating a report or changing an existing one by making a POST
        request to the query resource. Get report data without
        filling up your org with unnecessary reports.

# Get Report Data without Saving Changes to or Creating a Report

Run a report without creating a report or changing an existing one by making a POST request to the query resource. Get report data without filling up your org with unnecessary reports.

## Example

Get report data using the query resource.

```

```

Include report criteria as reportMetadata in the POST request body. This POST request gets data about Opportunities:

```

```

The response to the POST request returns report data, but doesn’t create or save a report.

```

```

## Code Examples

```
/services/data/v37.0/analytics/reports/query
```

```
{
"reportMetadata" : {
    "aggregates" : [ "RowCount" ],
    "chart" : null,
    "crossFilters" : [ ],
    "currency" : null,
    "description" : null,
    "detailColumns" : [ "OPPORTUNITY_NAME", "TYPE", "LEAD_SOURCE", "AMOUNT", "CLOSE_DATE", "NEXT_STEP", "STAGE_NAME", "PROBABILITY", "FISCAL_QUARTER", "AGE", "CREATED_DATE", "FULL_NAME", "ROLLUP_DESCRIPTION", "ACCOUNT_NAME" ],
    "developerName" : "OpportunityReport",
    "division" : null,
    "folderId" : "00DD000000086ujMAA",
    "groupingsAcross" : [ ],
    "groupingsDown" : [ ],
    "hasDetailRows" : true,
    "hasRecordCount" : true,
    "historicalSnapshotDates" : [ ],
    "id" : "00OD0000001leVCMAY",
    "name" : "Matrix",
    "reportBooleanFilter" : null,
    "reportFilters" : [ ],
    "reportFormat" : "MATRIX",
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
}
```

```
{
  "attributes" : {
    "describeUrl" : "/services/data/v37.0/analytics/reports/null/describe",
    "instancesUrl" : "/services/data/v37.0/analytics/reports/null/instances",
    "reportId" : null,
    "reportName" : "Matrix",
    "type" : "Report"
  },
  "allData" : true,
  "factMap" : {
    "T!T" : {
      "aggregates" : [ {
        "label" : "9",
        "value" : 9
      } ],
      "rows" : [ {
        "dataCells" : [ {
          "label" : "salesforce.com - 5000 Widgets",
          "value" : "006D000000CzmqYIAR"
        }, {
          "label" : "New Business",
          "value" : "New Business"
        }, {
          "label" : "Advertisement",
          "value" : "Advertisement"
        }, {
          "label" : "$500,000.00",
          "value" : {
            "amount" : 500000,
            "currency" : null
          }
        }, {
          "label" : "9/19/2013",
          "value" : "2013-09-19"
        }, {
          "label" : "Closed!",
          "value" : "Closed!"
        }, {
          "label" : "Closed Won",
          "value" : "Closed Won"
        }, {
          "label" : "100%",
          "value" : 100
        }, {
          "label" : "Q2-2007",
          "value" : "Q2-2007"
        }, {
          "label" : "0",
          "value" : 0
        }, {
          "label" : "1/4/2016",
          "value" : "2016-01-04"
        }, {
          "label" : "Fred Williamson",
          "value" : "005D0000001bV42IAE"
        }, {
          "label" : "-",
          "value" : null
        }, {
          "label" : "Global Media",
          "value" : "001D000000KtTTqIAN"
        } ]
      }, {
        "dataCells" : [ {
          "label" : "salesforce.com - 500 Widgets",
          "value" : "006D000000CzmqZIAR"
        }, {
          "label" : "Existing Business",
          "value" : "Existing Business"
        }, {
          "label" : "Advertisement",
          "value" : "Advertisement"
        }, {
          "label" : "$50,000.00",
          "value" : {
            "amount" : 50000,
            "currency" : null
          }
        }, {
          "label" : "9/19/2013",
          "value" : "2013-09-19"
        }, {
          "label" : "Closed!",
          "value" : "Closed!"
        }, {
          "label" : "Closed Won",
          "value" : "Closed Won"
        }, {
          "label" : "100%",
          "value" : 100
        }, {
          "label" : "Q2-2007",
          "value" : "Q2-2007"
        }, {
          "label" : "0",
          "value" : 0
        }, {
          "label" : "1/4/2016",
          "value" : "2016-01-04"
        }, {
          "label" : "Fred Williamson",
          "value" : "005D0000001bV42IAE"
        }, {
          "label" : "-",
          "value" : null
        }, {
          "label" : "Global Media",
          "value" : "001D000000KtTTqIAN"
        } ]
      }, {
        "dataCells" : [ {
          "label" : "Acme - 1,200 Widgets",
          "value" : "006D000000CzmqbIAB"
        }, {
          "label" : "Existing Business",
          "value" : "Existing Business"
        }, {
          "label" : "Trade Show",
          "value" : "Trade Show"
        }, {
          "label" : "$140,000.00",
          "value" : {
            "amount" : 140000,
            "currency" : null
          }
        }, {
          "label" : "10/22/2013",
          "value" : "2013-10-22"
        }, {
          "label" : "Need estimate",
          "value" : "Need estimate"
        }, {
          "label" : "Value Proposition",
          "value" : "Value Proposition"
        }, {
          "label" : "50%",
          "value" : 50
        }, {
          "label" : "Q2-2007",
          "value" : "Q2-2007"
        }, {
          "label" : "134",
          "value" : 134
        }, {
          "label" : "1/4/2016",
          "value" : "2016-01-04"
        }, {
          "label" : "Fred Williamson",
          "value" : "005D0000001bV42IAE"
        }, {
          "label" : "-",
          "value" : null
        }, {
          "label" : "Acme",
          "value" : "001D000000KtTTrIAN"
        } ]
      }, {
        "dataCells" : [ {
          "label" : "salesforce.com - 1,000 Widgets",
          "value" : "006D000000CzmqeIAB"
        }, {
          "label" : "New Business",
          "value" : "New Business"
        }, {
          "label" : "Advertisement",
          "value" : "Advertisement"
        }, {
          "label" : "$100,000.00",
          "value" : {
            "amount" : 100000,
            "currency" : null
          }
        }, {
          "label" : "10/22/2013",
          "value" : "2013-10-22"
        }, {
          "label" : "Close the deal!",
          "value" : "Close the deal!"
        }, {
          "label" : "Negotiation/Review",
          "value" : "Negotiation/Review"
        }, {
          "label" : "90%",
          "value" : 90
        }, {
          "label" : "Q2-2007",
          "value" : "Q2-2007"
        }, {
          "label" : "134",
          "value" : 134
        }, {
          "label" : "1/4/2016",
          "value" : "2016-01-04"
        }, {
          "label" : "Fred Williamson",
          "value" : "005D0000001bV42IAE"
        }, {
          "label" : "-",
          "value" : null
        }, {
          "label" : "salesforce.com",
          "value" : "001D000000KtTTsIAN"
        } ]
      }, {
        "dataCells" : [ {
          "label" : "Global Media - 400 Widgets",
          "value" : "006D000000CzmqaIAB"
        }, {
          "label" : "New Business",
          "value" : "New Business"
        }, {
          "label" : "Partner",
          "value" : "Partner"
        }, {
          "label" : "$40,000.00",
          "value" : {
            "amount" : 40000,
            "currency" : null
          }
        }, {
          "label" : "11/20/2013",
          "value" : "2013-11-20"
        }, {
          "label" : "-",
          "value" : null
        }, {
          "label" : "Id. Decision Makers",
          "value" : "Id. Decision Makers"
        }, {
          "label" : "60%",
          "value" : 60
        }, {
          "label" : "Q3-2007",
          "value" : "Q3-2007"
        }, {
          "label" : "134",
          "value" : 134
        }, {
          "label" : "1/4/2016",
          "value" : "2016-01-04"
        }, {
          "label" : "Fred Williamson",
          "value" : "005D0000001bV42IAE"
        }, {
          "label" : "-",
          "value" : null
        }, {
          "label" : "Global Media",
          "value" : "001D000000KtTTqIAN"
        } ]
      }, {
        "dataCells" : [ {
          "label" : "Acme - 600 Widgets",
          "value" : "006D000000CzmqcIAB"
        }, {
          "label" : "New Business",
          "value" : "New Business"
        }, {
          "label" : "Trade Show",
          "value" : "Trade Show"
        }, {
          "label" : "$70,000.00",
          "value" : {
            "amount" : 70000,
            "currency" : null
          }
        }, {
          "label" : "12/18/2013",
          "value" : "2013-12-18"
        }, {
          "label" : "Need estimate",
          "value" : "Need estimate"
        }, {
          "label" : "Needs Analysis",
          "value" : "Needs Analysis"
        }, {
          "label" : "20%",
          "value" : 20
        }, {
          "label" : "Q3-2007",
          "value" : "Q3-2007"
        }, {
          "label" : "134",
          "value" : 134
        }, {
          "label" : "1/4/2016",
          "value" : "2016-01-04"
        }, {
          "label" : "Fred Williamson",
          "value" : "005D0000001bV42IAE"
        }, {
          "label" : "-",
          "value" : null
        }, {
          "label" : "Acme",
          "value" : "001D000000KtTTrIAN"
        } ]
      }, {
        "dataCells" : [ {
          "label" : "salesforce.com - 2,000 Widgets",
          "value" : "006D000000CzmqfIAB"
        }, {
          "label" : "Existing Business",
          "value" : "Existing Business"
        }, {
          "label" : "Partner",
          "value" : "Partner"
        }, {
          "label" : "$20,000.00",
          "value" : {
            "amount" : 20000,
            "currency" : null
          }
        }, {
          "label" : "12/20/2013",
          "value" : "2013-12-20"
        }, {
          "label" : "Meet at Widget Conference",
          "value" : "Meet at Widget Conference"
        }, {
          "label" : "Value Proposition",
          "value" : "Value Proposition"
        }, {
          "label" : "50%",
          "value" : 50
        }, {
          "label" : "Q3-2007",
          "value" : "Q3-2007"
        }, {
          "label" : "134",
          "value" : 134
        }, {
          "label" : "1/4/2016",
          "value" : "2016-01-04"
        }, {
          "label" : "Fred Williamson",
          "value" : "005D0000001bV42IAE"
        }, {
          "label" : "-",
          "value" : null
        }, {
          "label" : "salesforce.com",
          "value" : "001D000000KtTTsIAN"
        } ]
      }, {
        "dataCells" : [ {
          "label" : "Acme - 200 Widgets",
          "value" : "006D000000CzmqdIAB"
        }, {
          "label" : "Existing Business",
          "value" : "Existing Business"
        }, {
          "label" : "Word of mouth",
          "value" : "Word of mouth"
        }, {
          "label" : "$20,000.00",
          "value" : {
            "amount" : 20000,
            "currency" : null
          }
        }, {
          "label" : "2/20/2014",
          "value" : "2014-02-20"
        }, {
          "label" : "Need estimate",
          "value" : "Need estimate"
        }, {
          "label" : "Prospecting",
          "value" : "Prospecting"
        }, {
          "label" : "10%",
          "value" : 10
        }, {
          "label" : "Q4-2007",
          "value" : "Q4-2007"
        }, {
          "label" : "134",
          "value" : 134
        }, {
          "label" : "1/4/2016",
          "value" : "2016-01-04"
        }, {
          "label" : "Fred Williamson",
          "value" : "005D0000001bV42IAE"
        }, {
          "label" : "-",
          "value" : null
        }, {
          "label" : "Acme",
          "value" : "001D000000KtTTrIAN"
        } ]
      }, {
        "dataCells" : [ {
          "label" : "Fred",
          "value" : "006D000000Czq0uIAB"
        }, {
          "label" : "-",
          "value" : null
        }, {
          "label" : "-",
          "value" : null
        }, {
          "label" : "-",
          "value" : null
        }, {
          "label" : "2/26/2016",
          "value" : "2016-02-26"
        }, {
          "label" : "-",
          "value" : null
        }, {
          "label" : "Id. Decision Makers",
          "value" : "Id. Decision Makers"
        }, {
          "label" : "60%",
          "value" : 60
        }, {
          "label" : "Q1-2016",
          "value" : "Q1-2016"
        }, {
          "label" : "85",
          "value" : 85
        }, {
          "label" : "2/22/2016",
          "value" : "2016-02-22"
        }, {
          "label" : "Fred Williamson",
          "value" : "005D0000001bV42IAE"
        }, {
          "label" : "-",
          "value" : null
        }, {
          "label" : "Fred",
          "value" : "001D000000KtqzeIAB"
        } ]
      } ]
    }
  },
  "groupingsAcross" : {
    "groupings" : [ ]
  },
  "groupingsDown" : {
    "groupings" : [ ]
  },
  "hasDetailRows" : true,
  "reportExtendedMetadata" : {
    "aggregateColumnInfo" : {
      "RowCount" : {
        "dataType" : "int",
        "label" : "Record Count"
      }
    },
    "detailColumnInfo" : {
      "OPPORTUNITY_NAME" : {
        "dataType" : "string",
        "label" : "Opportunity Name"
      },
      "TYPE" : {
        "dataType" : "picklist",
        "label" : "Type"
      },
      "LEAD_SOURCE" : {
        "dataType" : "picklist",
        "label" : "Lead Source"
      },
      "AMOUNT" : {
        "dataType" : "currency",
        "label" : "Amount"
      },
      "CLOSE_DATE" : {
        "dataType" : "date",
        "label" : "Close Date"
      },
      "NEXT_STEP" : {
        "dataType" : "string",
        "label" : "Next Step"
      },
      "STAGE_NAME" : {
        "dataType" : "picklist",
        "label" : "Stage"
      },
      "PROBABILITY" : {
        "dataType" : "percent",
        "label" : "Probability (%)"
      },
      "FISCAL_QUARTER" : {
        "dataType" : "string",
        "label" : "Fiscal Period"
      },
      "AGE" : {
        "dataType" : "int",
        "label" : "Age"
      },
      "CREATED_DATE" : {
        "dataType" : "datetime",
        "label" : "Created Date"
      },
      "FULL_NAME" : {
        "dataType" : "string",
        "label" : "Opportunity Owner"
      },
      "ROLLUP_DESCRIPTION" : {
        "dataType" : "string",
        "label" : "Owner Role"
      },
      "ACCOUNT_NAME" : {
        "dataType" : "string",
        "label" : "Account Name"
      }
    },
    "groupingColumnInfo" : { }
  },
  "reportMetadata" : {
    "aggregates" : [ "RowCount" ],
    "chart" : null,
    "crossFilters" : [ ],
    "currency" : null,
    "description" : null,
    "detailColumns" : [ "OPPORTUNITY_NAME", "TYPE", "LEAD_SOURCE", "AMOUNT", "CLOSE_DATE", "NEXT_STEP", "STAGE_NAME", "PROBABILITY", "FISCAL_QUARTER", "AGE", "CREATED_DATE", "FULL_NAME", "ROLLUP_DESCRIPTION", "ACCOUNT_NAME" ],
    "developerName" : null,
    "division" : null,
    "folderId" : "00DD000000086ujMAA",
    "groupingsAcross" : [ ],
    "groupingsDown" : [ ],
    "hasDetailRows" : true,
    "hasRecordCount" : true,
    "historicalSnapshotDates" : [ ],
    "id" : null,
    "name" : "Matrix",
    "reportBooleanFilter" : null,
    "reportFilters" : [ ],
    "reportFormat" : "TABULAR",
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
}
```
