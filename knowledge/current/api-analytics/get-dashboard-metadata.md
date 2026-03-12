---
title: "Get Dashboard Metadata"
domain: api-analytics
topic: get-dashboard-metadata
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:58.344Z
estimatedTokens: 131
keywords: [Dashboard, Metadata]
---

# Get Dashboard Metadata

> Get details about dashboard metadata using a GET request.

# Get Dashboard Metadata

Get details about dashboard metadata using a GET request.

Use a GET request on the [Dashboard Describe](atlas.en-us.api_analytics.meta/api_analytics/analytics_api_dashboard_describe_resource.htm "Returns metadata for the specified dashboard, including dashboard components, filters, layout, and the running user.") resource to get metadata for the specified dashboard, including dashboard components, filters, layout, and the running user.

Example Usage

```

```

Example Response Body

```

```

## Code Examples

```
/services/data/v37.0/analytics/dashboards/01ZR00000004SknMAE/describe
```

```
{
  "canChangeRunningUser" : true,
  "components" : [ {
    "componentData" : 0,
    "footer" : null,
    "header" : null,
    "id" : "01aR00000005kCmIAI",
    "properties" : {
      "aggregates" : [ {
        "name" : "s!AMOUNT"
      } ],
      "autoSelectColumns" : true,
      "filterColumns" : [ {
        "label" : "Closed",
        "name" : "CLOSED"
      }, {
        "label" : "Account Type",
        "name" : "ACCOUNT_TYPE"
      }, {
        "label" : "Annual Revenue",
        "name" : "SALES"
      } ],
      "groupings" : [ {
        "name" : "STAGE_NAME"
      } ],
      "maxRows" : null,
      "sort" : {
        "column" : "STAGE_NAME",
        "sortOrder" : "asc"
      },
      "useReportChart" : false,
      "visualizationProperties" : {
        "axisRange" : {
          "max" : null,
          "min" : null,
          "rangeType" : "auto"
        },
        "groupByType" : "cumulative",
        "legendPosition" : "Bottom",
        "showValues" : false
      },
      "visualizationType" : "Line"
    },
    "reportId" : "00OR0000000JizXMAS",
    "title" : null,
    "type" : "Report"
  }, {
    "componentData" : 1,
    "footer" : null,
    "header" : null,
    "id" : "01aR00000005awVIAQ",
    "properties" : {
      "aggregates" : [ {
        "name" : "s!AMOUNT"
      } ],
      "autoSelectColumns" : true,
      "filterColumns" : [ {
        "label" : "Closed",
        "name" : "CLOSED"
      }, {
        "label" : "Account Type",
        "name" : "ACCOUNT_TYPE"
      }, {
        "label" : "Annual Revenue",
        "name" : "SALES"
      } ],
      "groupings" : [ {
        "name" : "STAGE_NAME"
      } ],
      "maxRows" : null,
      "sort" : {
        "column" : "STAGE_NAME",
        "sortOrder" : "asc"
      },
      "useReportChart" : false,
      "visualizationProperties" : {
        "combineSmallGroups" : true,
        "legendPosition" : "Bottom",
        "showPercentages" : false,
        "showValues" : true
      },
      "visualizationType" : "Funnel"
    },
    "reportId" : "00OR0000000OFXeMAO",
    "title" : null,
    "type" : "Report"
  }, {
    "componentData" : 2,
    "footer" : null,
    "header" : null,
    "id" : "01aR00000005awTIAQ",
    "properties" : {
      "aggregates" : [ {
        "name" : "s!AMOUNT"
      } ],
      "autoSelectColumns" : true,
      "filterColumns" : [ {
        "label" : "Closed",
        "name" : "CLOSED"
      }, {
        "label" : "Account Type",
        "name" : "ACCOUNT_TYPE"
      }, {
        "label" : "Annual Revenue",
        "name" : "SALES"
      } ],
      "groupings" : null,
      "maxRows" : null,
      "sort" : null,
      "useReportChart" : false,
      "visualizationProperties" : {
        "breakPoints" : [ {
          "aggregateName" : "s!AMOUNT",
          "breaks" : [ {
            "color" : "c25454",
            "lowerBound" : 100000,
            "upperBound" : 300000
          }, {
            "color" : "c2c254",
            "lowerBound" : 300000,
            "upperBound" : 800000
          }, {
            "color" : "54c254",
            "lowerBound" : 800000,
            "upperBound" : 1000000
          } ]
        } ],
        "showPercentages" : false,
        "showTotal" : false
      },
      "visualizationType" : "Gauge"
    },
    "reportId" : "00OR0000000JizXMAS",
    "title" : null,
    "type" : "Report"
  }, {
    "componentData" : 3,
    "footer" : null,
    "header" : null,
    "id" : "01aR00000005kCnIAI",
    "properties" : {
      "aggregates" : [ {
        "name" : "s!AMOUNT"
      }, {
        "name" : "a!AMOUNT"
      } ],
      "autoSelectColumns" : false,
      "filterColumns" : [ {
        "label" : "Closed",
        "name" : "CLOSED"
      }, {
        "label" : "Account Type",
        "name" : "ACCOUNT_TYPE"
      }, {
        "label" : "Annual Revenue",
        "name" : "SALES"
      } ],
      "groupings" : [ {
        "name" : "STAGE_NAME"
      }, {
        "name" : "TYPE"
      } ],
      "maxRows" : null,
      "sort" : {
        "column" : "STAGE_NAME",
        "sortOrder" : "asc"
      },
      "useReportChart" : false,
      "visualizationProperties" : {
        "axisRange" : {
          "max" : null,
          "min" : null,
          "rangeType" : "auto"
        },
        "groupByType" : "grouped",
        "legendPosition" : "Bottom"
      },
      "visualizationType" : "Scatter"
    },
    "reportId" : "00OR0000000JizXMAS",
    "title" : null,
    "type" : "Report"
  }, {
    "componentData" : 4,
    "footer" : null,
    "header" : "My Table",
    "id" : "01aR00000005awUIAQ",
    "properties" : {
      "aggregates" : [ {
        "name" : "s!AMOUNT"
      } ],
      "autoSelectColumns" : false,
      "filterColumns" : [ {
        "label" : "Closed",
        "name" : "CLOSED"
      }, {
        "label" : "Account Type",
        "name" : "ACCOUNT_TYPE"
      }, {
        "label" : "Annual Revenue",
        "name" : "SALES"
      } ],
      "groupings" : [ {
        "name" : "INDUSTRY"
      }, {
        "name" : "CLOSE_DATE"
      } ],
      "maxRows" : null,
      "sort" : {
        "column" : "INDUSTRY",
        "sortOrder" : "asc"
      },
      "useReportChart" : false,
      "visualizationProperties" : {
        "breakPoints" : [ {
          "aggregateName" : "s!AMOUNT",
          "breaks" : [ {
            "color" : "c25454",
            "lowerBound" : null,
            "upperBound" : null
          }, {
            "color" : "c2c254",
            "lowerBound" : null,
            "upperBound" : null
          }, {
            "color" : "54c254",
            "lowerBound" : null,
            "upperBound" : null
          } ]
        } ],
        "tableColumns" : [ {
          "column" : "INDUSTRY",
          "isPercent" : false,
          "scale" : null,
          "showTotal" : false,
          "type" : "grouping"
        }, {
          "column" : "CLOSE_DATE",
          "isPercent" : false,
          "scale" : null,
          "showTotal" : false,
          "type" : "grouping"
        }, {
          "column" : "s!AMOUNT",
          "isPercent" : false,
          "scale" : null,
          "showTotal" : true,
          "type" : "aggregate"
        } ]
      },
      "visualizationType" : "Table"
    },
    "reportId" : "00OR0000000OgsOMAS",
    "title" : "My Table",
    "type" : "Report"
  }, {
    "componentData" : 5,
    "footer" : null,
    "header" : null,
    "id" : "01aR00000005kCoIAI",
    "properties" : {
      "aggregates" : [ {
        "name" : "s!AMOUNT"
      } ],
      "autoSelectColumns" : false,
      "filterColumns" : [ {
        "label" : "Closed",
        "name" : "CLOSED"
      }, {
        "label" : "Account Type",
        "name" : "ACCOUNT_TYPE"
      }, {
        "label" : "Annual Revenue",
        "name" : "SALES"
      } ],
      "groupings" : [ {
        "name" : "STAGE_NAME"
      }, {
        "name" : "TYPE"
      } ],
      "maxRows" : null,
      "sort" : {
        "column" : "STAGE_NAME",
        "sortOrder" : "asc"
      },
      "useReportChart" : false,
      "visualizationProperties" : {
        "aggregateVisualizationInfos" : [ {
          "axis" : "Y2",
          "visualizationType" : "Column"
        } ],
        "axisRange" : {
          "max" : null,
          "min" : null,
          "rangeType" : "auto"
        },
        "groupByType" : "grouped",
        "legendPosition" : "Bottom",
        "showValues" : false
      },
      "visualizationType" : "Column"
    },
    "reportId" : "00OR0000000JizXMAS",
    "title" : null,
    "type" : "Report"
  }, {
    "componentData" : 6,
    "footer" : null,
    "header" : null,
    "id" : "01aR00000005kCpIAI",
    "properties" : {
      "aggregates" : [ {
        "name" : "s!AMOUNT"
      }, {
        "name" : "a!AMOUNT"
      } ],
      "autoSelectColumns" : false,
      "filterColumns" : [ {
        "label" : "Closed",
        "name" : "CLOSED"
      }, {
        "label" : "Account Type",
        "name" : "ACCOUNT_TYPE"
      }, {
        "label" : "Annual Revenue",
        "name" : "SALES"
      } ],
      "groupings" : [ {
        "name" : "STAGE_NAME"
      } ],
      "maxRows" : null,
      "sort" : {
        "column" : "STAGE_NAME",
        "sortOrder" : "asc"
      },
      "useReportChart" : false,
      "visualizationProperties" : {
        "axisRange" : {
          "max" : null,
          "min" : null,
          "rangeType" : "auto"
        },
        "groupByType" : "none",
        "legendPosition" : "Bottom",
        "showValues" : false
      },
      "visualizationType" : "Bar"
    },
    "reportId" : "00OR0000000JizXMAS",
    "title" : null,
    "type" : "Report"
  } ],
  "description" : null,
  "developerName" : "Filtered_Dashboard",
  "filters" : [ {
    "errorMessage" : null,
    "id" : "0IBR00000004CElOAM",
    "name" : "Closed",
    "options" : [ {
      "alias" : "Open",
      "endValue" : null,
      "id" : "0ICR00000004CG4OAM",
      "operation" : "equals",
      "startValue" : null,
      "value" : "True"
    }, {
      "alias" : "Closed",
      "endValue" : null,
      "id" : "0ICR00000004CG5OAM",
      "operation" : "equals",
      "startValue" : null,
      "value" : "False"
    } ],
    "selectedOption" : null
  }, {
    "errorMessage" : null,
    "id" : "0IBR00000004CEmOAM",
    "name" : "Account Type",
    "options" : [ {
      "alias" : null,
      "endValue" : null,
      "id" : "0ICR00000004CG6OAM",
      "operation" : "equals",
      "startValue" : null,
      "value" : "Analyst"
    }, {
      "alias" : null,
      "endValue" : null,
      "id" : "0ICR00000004CG7OAM",
      "operation" : "equals",
      "startValue" : null,
      "value" : "Competitor"
    }, {
      "alias" : null,
      "endValue" : null,
      "id" : "0ICR00000004CG8OAM",
      "operation" : "equals",
      "startValue" : null,
      "value" : "Press,Prospect,Reseller"
    }, {
      "alias" : null,
      "endValue" : null,
      "id" : "0ICR00000004CG9OAM",
      "operation" : "notEqual",
      "startValue" : null,
      "value" : "Other"
    }, {
      "alias" : "Outsiders",
      "endValue" : null,
      "id" : "0ICR00000004CGAOA2",
      "operation" : "lessOrEqual",
      "startValue" : null,
      "value" : "Integrator,Partner,Prospect"
    } ],
    "selectedOption" : null
  }, {
    "errorMessage" : null,
    "id" : "0IBR0000000007cOAA",
    "name" : "Annual Revenue",
    "options" : [ {
      "alias" : null,
      "endValue" : null,
      "id" : "0ICR000000000A5OAI",
      "operation" : "lessThan",
      "startValue" : null,
      "value" : ""400,000""
    } ],
    "selectedOption" : null
  } ],
  "folderId" : "00lR0000000DnRZIA0",
  "id" : "01ZR00000004SknMAE",
  "layout" : {
    "columns" : [ {
      "components" : [ 0, 1, 2 ]
    }, {
      "components" : [ 3, 4 ]
    }, {
      "components" : [ 5, 6 ]
    } ],
    "gridLayout" : false
  },
  "name" : "Filtered Dashboard",
  "runningUser" : {
    "displayName" : "Vandelay Art",
    "id" : "005R0000000Hv5rIAC"
  }
}
```

## Related Topics

- Dashboard Describe (atlas.en-us.api_analytics.meta/api_analytics/analytics_api_dashboard_describe_resource.htm)
