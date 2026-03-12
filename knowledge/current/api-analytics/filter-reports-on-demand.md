---
title: "Filter Reports on Demand"
domain: api-analytics
topic: filter-reports-on-demand
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:58.781Z
estimatedTokens: 402
keywords: [Filter, Reports, Demand, specific, results, fly, API, changes, made, affect, source, report, definition, custom, filters]
---

# Filter Reports on Demand

> To get specific results on the fly, filter reports through the API. Filter changes
                made through the API does not affect the source report definition. Using the API,
                you can filter with up to 20 custom field filters and add filter logic (such as AND,
                OR

# Filter Reports on Demand

To get specific results on the fly, filter reports through the API. Filter changes made through the API does not affect the source report definition. Using the API, you can filter with up to 20 custom field filters and add filter logic (such as AND, OR). But standard filters (such as range), filtering by row limit, and cross filters are unavailable.

Before you filter a report, it’s helpful to check these properties in the metadata that tell you if a field can be filtered, the values and criteria you can filter by, and filters that already exist in the report.

-   filterable
-   filterValues
-   dataTypeFilterOperatorMap
-   reportFilters

You can filter reports during synchronous or asynchronous report runs by making a POST request to the Execute Sync or Execute Async resource.

## Example

In a POST request, an accounts report is filtered synchronously by these passing filters with filter logic in the metadata to the Execute Sync resource.

1.  Account Name not equal to Data Mart
2.  Account Owner not equal to Admin User
3.  Annual Revenue greater than "100,000"
4.  Industry not equal to Manufacturing,Recreation

Filter logic: (1 OR 4) AND 2 AND 3.

```

```

In response to the POST request, the report returns data that meets the given criteria.

```

```

#### See Also

-   [Execute Sync](atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_getreportrundata.htm "Runs a report immediately with or without changing filters, groupings, or aggregates and returns the latest summary data with or without details for your level of access.")

## Code Examples

```
{
    "reportMetadata": {
        "name": "FilterAcctsReport",
        "id": "00OD0000001cw27MAA",
        "reportFormat": "SUMMARY",
        "reportBooleanFilter": "(1OR4)AND2AND3",
        "reportFilters": [
            {
                "value": "DataMart",
                "operator": "notEqual",
                "column": "ACCOUNT.NAME"
            },
            {
                "value": "AdminUser",
                "operator": "notEqual",
                "column": "USERS.NAME"
            },
            {
                "value": ""100,000"",
                "operator": "greaterThan",
                "column": "SALES"
            },
            {
                "value": "Manufacturing,Recreation",
                "operator": "notEqual",
                "column": "INDUSTRY"
            }
        ],
        "detailColumns": [
            "RATING",
            "LAST_UPDATE",
            "SALES"
        ],
        "developerName": "Filter_Accts_Report",
        "reportType": {
            "type": "AccountList",
            "label": "Accounts"
        },
        "currency": null,
        "aggregates": [
            "s!SALES",
            "RowCount"
        ],
        "groupingsDown": [
            {
                "name": "USERS.NAME",
                "sortAggregate": "s!SALES",
                "sortOrder": "Desc",
                "dateGranularity": "None"
            },
            {
                "name": "ACCOUNT.NAME",
                "sortAggregate": null,
                "sortOrder": "Asc",
                "dateGranularity": "None"
            },
            {
                "name": "DUE_DATE",
                "sortAggregate": null,
                "sortOrder": "Asc",
                "dateGranularity": "Month"
            }
        ],
        "groupingsAcross": []
    }
}
```

```
{
    "hasDetailRows": false,
    "attributes": {
        "describeUrl": "/services/data/v29.0/analytics/reports/00OD0000001cw27MAA/describe",
        "instancesUrl": "/services/data/v29.0/analytics/reports/00OD0000001cw27MAA/instances",
        "type": "Report",
        "reportName": "Filter Accts Report",
        "reportId": "00OD0000001cw27MAA"
    },
    "factMap": {
        "1_0!T": {
            "aggregates": [
                {
                    "value": 56000000,
                    "label": "$56,000,000"
                },
                {
                    "value": 1,
                    "label": "1"
                }
            ]
        },
        "7_1!T": {
            "aggregates": [
                {
                    "value": 24000000,
                    "label": "$24,000,000"
                },
                {
                    "value": 1,
                    "label": "1"
                }
            ]
        },
...
    "allData": true,
    "reportMetadata": {
        "name": "Filter Accts Report",
        "id": "00OD0000001cw27MAA",
        "reportFormat": "SUMMARY",
        "reportBooleanFilter": "(1 OR 4) AND 2 AND 3",
        "reportFilters": [
            {
                "value": "Data Mart",
                "operator": "notEqual",
                "column": "ACCOUNT.NAME"
            },
            {
                "value": "Admin User",
                "operator": "notEqual",
                "column": "USERS.NAME"
            },
            {
                "value": ""100,000"",
                "operator": "greaterThan",
                "column": "SALES"
            },
            {
                "value": "Manufacturing,Recreation",
                "operator": "notEqual",
                "column": "INDUSTRY"
            }
        ],
        "detailColumns": [
            "RATING",
            "LAST_UPDATE",
            "SALES"
        ],
...
    }
}
```

## Related Topics

- Execute Sync (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_getreportrundata.htm)
