---
title: "Get Dashboard Results"
domain: api-analytics
topic: get-dashboard-results
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.362Z
estimatedTokens: 434
keywords: [Dashboard, Results, metadata, data, status, sending, resource]
---

# Get Dashboard Results

> You can get dashboard metadata, data, and status by sending
a GET request to the Dashboard Results resource.

# Get Dashboard Results

You can get dashboard metadata, data, and status by sending a GET request to the Dashboard Results resource.

Use a GET request to the [Dashboard Results](atlas.en-us.api_analytics.meta/api_analytics/analytics_api_dashboard_results_resource.htm#analytics_api_dashboard_results_resource "Can return metadata, data, and status for the specified dashboard. Can also refresh, save, or delete a dashboard.") resource to retrieve metadata, data, and status for a dashboard and its components. The results response contains:

-   Metadata: information about the dashboard as a whole, including the dashboard ID, name, component metadata, and any dashboard filters.
-   Data: underlying report data for each component, filtered by the optional filter parameters. For more information about filtering, see [Filter Dashboard Results](atlas.en-us.api_analytics.meta/api_analytics/analytics_api_dashboard_filter_results.htm#analytics_api_dashboard_filter_results "You can filter dashboard results, status, or refresh requests, by using filter parameters.").
-   Status: data and refresh status for each component of the dashboard. The data status can be NODATA, DATA, or ERROR. If an error occurs, the component status will contain additional properties with the error code, message, and severity. The refresh status can be IDLE, if components are finished running, or RUNNING, if components are still being refreshed.

Example Usage

```

```

Example Response Body

```

```

#### See Also

-   [Dashboard Results](atlas.en-us.api_analytics.meta/api_analytics/analytics_api_dashboard_results_resource.htm "Can return metadata, data, and status for the specified dashboard. Can also refresh, save, or delete a dashboard.")

## Code Examples

```
/services/data/v31.0/analytics/dashboards/01ZD00000007S89MAE
```

```
{
  "componentData" : [ {
    "componentId" : "01aD0000000a36LIAQ",
    "reportResult" : {
      "attributes" : null,
      "allData" : true,
      "factMap" : {
        "T!T" : {
          "aggregates" : [ {
            "label" : "USD 67,043,365.50",
            "value" : 67043365.50166918337345123291015625
          } ]
        },
        "0!T" : {
          "aggregates" : [ {
            "label" : "USD 10,083.33",
            "value" : 10083.333333333333939663134515285491943359375
          } ]
        },
        "1!T" : {
          "aggregates" : [ {
            "label" : "USD 25,016,768.67",
            "value" : 25016768.670066006481647491455078125
          } ]
        },
        "2!T" : {
          "aggregates" : [ {
            "label" : "USD 42,016,513.50",
            "value" : 42016513.49826984107494354248046875
          } ]
        }
      },
      "groupingsAcross" : null,
      "groupingsDown" : {
        "groupings" : [ {
          "groupings" : [ ],
          "key" : "0",
          "label" : "-",
          "value" : null
        }, {
          "groupings" : [ ],
          "key" : "1",
          "label" : "Existing Business",
          "value" : "Existing Business"
        }, {
          "groupings" : [ ],
          "key" : "2",
          "label" : "New Business",
          "value" : "New Business"
        } ]
      },
      "hasDetailRows" : false,
      "reportExtendedMetadata" : {
        "aggregateColumnInfo" : {
          "s!AMOUNT" : {
            "acrossGroupingContext" : null,
            "dataType" : "currency",
            "downGroupingContext" : null,
            "label" : "Sum of Amount"
          }
        },
        "detailColumnInfo" : { },
        "groupingColumnInfo" : {
          "TYPE" : {
            "dataType" : "picklist",
            "groupingLevel" : 0,
            "label" : "Type"
          }
        }
      },
      "reportMetadata" : {
        "aggregates" : [ "s!AMOUNT" ],
        "chart" : null,
        "currency" : "USD",
        "description" : null,
        "detailColumns" : [ ],
        "developerName" : "Simple_Test",
        "division" : null,         
        "folderId" : "00lR0000000M8IiIAK",
        "groupingsAcross" : [ ],
        "groupingsDown" : [ {
          "dateGranularity" : "None",
          "name" : "TYPE",
          "sortAggregate" : null,
          "sortOrder" : "Asc"
        } ],
        "hasDetailRows" : false,         
        "hasRecordCount" : true,
        "historicalSnapshotDates" : [ ],
        "id" : "00OD0000001g2nWMAQ",
        "name" : "Simple Test",
        "reportBooleanFilter" : null,
        "reportFilters" : [ ],
        "reportFormat" : "SUMMARY",
        "reportType" : {
          "label" : "Opportunities",
          "type" : "Opportunity"
        },
        "scope" : "organization",         
        "showGrandTotal" : true,         
        "showSubtotals" : true,         
        "sortBy" : [ ],         
        "standardDateFilter" : { "column" : "CLOSE_DATE", "durationValue" : "CUSTOM", "endDate" : null, "startDate" : null },
        "standardFilters" : [ 
          { "name" : "open", "value" : "all" }, 
          { "name" : "probability", "value" : ">0" } ]
      }
    },
    "status" : {
      "dataStatus" : "DATA",
      "errorCode" : null,
      "errorMessage" : null,
      "errorSeverity" : null,
      "refreshDate" : "2014-04-09T00:28:16.000+0000",
      "refreshStatus" : "IDLE"
    }
  } ],
  "dashboardMetadata" : {
    "attributes" : {
      "dashboardId" : "01ZD00000007S89MAE",
      "dashboardName" : "Simple Dashboard",
      "statusUrl" : "/services/data/v31.0/analytics/dashboards/01ZD00000007S89MAE/status",
      "type" : "Dashboard"
    },
    "canChangeRunningUser" : false,
    "components" : [ {
      "componentData" : 0,
      "footer" : null,
      "header" : null,
      "id" : "01aD0000000a36LIAQ",
      "properties" : {
        "aggregates" : [ { "name" : "s!AMOUNT" } ],
        "autoSelectColumns" : false,         
        "groupings" : null,
        "maxRows" : null,
        "sort" : { "column" : "TYPE", "sortOrder" : "asc" },
        "useReportChart" : false,
        "visualizationProperties" : { 
          "breakPoints" : [ {             
            "aggregateName" : "s!AMOUNT",             
            "breaks" : [ 
              { "color" : "000000", "lowerBound" : null, "upperBound" : -1 }, 
              { "color" : "000000", "lowerBound" : -1, "upperBound" : 0 }, 
              { "color" : "000000", "lowerBound" : 0, "upperBound" : null } ]           
            } ],           
            "metricLabel" : null },         
          "visualizationType" : "Metric" },
      "reportId" : "00OD0000001g2nWMAQ",
      "title" : null,
      "type" : "Report"
    } ],
    "description" : null,
    "developerName" : "Simple_Dashboard",
    "filters" : [ {
      "name" : "Amount",
      "options" : [ {
        "alias" : null,
        "endValue" : null,
        "id" : "0ICD00000004CBiOAM",
        "operation" : "greaterThan",
        "startValue" : null,
        "value" : "USD 2000000"
      } ],
      "selectedOption" : null
    } ],
    "folderId" : "00lR0000000DrojIAC",
    "id" : "01ZD00000007S89MAE",
    "layout" : {
      "columns" : [ {
        "components" : [ 0 ]
      } ]
    },
    "name" : "Simple Dashboard",
    "runningUser" : {
      "displayName" : "Allison Wheeler",
      "id" : "005D00000016V2qIAE"
    }
  }
}
```

## Related Topics

- Dashboard Results (atlas.en-us.api_analytics.meta/api_analytics/analytics_api_dashboard_results_resource.htm)
- Filter Dashboard Results (atlas.en-us.api_analytics.meta/api_analytics/analytics_api_dashboard_filter_results.htm)
