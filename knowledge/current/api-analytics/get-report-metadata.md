---
title: "Get Report Metadata"
domain: api-analytics
topic: get-report-metadata
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:58.798Z
estimatedTokens: 266
keywords: [Report, Metadata, gives, includes, filters, groupings, detailed, data, summaries, several, things]
---

# Get Report Metadata

> Report metadata gives information about a report and its
report type. It includes information on fields used in the report
for filters, groupings, detailed data, and summaries. You can use
the metadata to do several things.

# Get Report Metadata

Report metadata gives information about a report and its report type. It includes information on fields used in the report for filters, groupings, detailed data, and summaries. You can use the metadata to do several things.

-   Find out what fields in the report type you can filter on and by what values.
-   Build custom chart visualizations using the metadata information on fields, groupings, detailed data, and summaries.
-   Change filters in the report metadata during a report run.

To get report metadata, send a GET request to the Describe resource.

## Example

This GET request, /services/data/v29.0/analytics/reports/00OD0000001ZbP7MAK/describe, to the Describe resource returns metadata for a matrix report. This includes a bucket field, groupings, summaries, and a custom summary formula.

```

```

#### See Also

-   [Describe](atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_getbasic_reportmetadata.htm "Retrieves report, report type, and related metadata for a tabular, summary, or matrix report.")

## Code Examples

```
{
    "reportTypeMetadata": {
        "categories": [
            {
                "label": "Opportunity Information",
                "columns": {
                    "CREATED": {
                        "filterValues": [],
                        "label": "Created By",
                        "dataType": "string",
                        "filterable": true
                    },
...
                    "TYPE": {
                        "filterValues": [
                            {
                                "name": "Add-On Business",
                                "label": "Add-On Business"
                            },
                            {
                                "name": "New Business",
                                "label": "New Business"
                            },
                            {
                                "name": "Services",
                                "label": "Services"
                            }
                        ],
                        "label": "Type",
                        "dataType": "picklist",
                        "filterable": true
                    },
        }
...
    },
    "reportExtendedMetadata": {
        "detailColumnInfo": {
            "OPPORTUNITY_NAME": {
                "label": "Opportunity Name",
                "dataType": "string"
            },
            "PROBABILITY": {
                "label": "Probability (%)",
                "dataType": "percent"
            },
            "EXP_AMOUNT": {
                "label": "Expected Revenue",
                "dataType": "currency"
            },
            "NEXT_STEP": {
                "label": "Next Step",
                "dataType": "string"
            },
            "BucketField_34840671": {
                "label": "Industry",
                "dataType": "string"
            }
        },
        "aggregateColumnInfo": {
            "RowCount": {
                "label": "Record Count",
                "dataType": "int",
                "downGroupingContext": null,
                "acrossGroupingContext": null
            },
            "FORMULA1": {
                "label": "formula1",
                "dataType": "double",
                "downGroupingContext": "ALL_SUMMARY_LEVELS",
                "acrossGroupingContext": "ALL_SUMMARY_LEVELS"
            },
            "s!EXP_AMOUNT": {
                "label": "Sum of Expected Revenue",
                "dataType": "currency",
                "downGroupingContext": null,
                "acrossGroupingContext": null
            }
        },
        "groupingColumnInfo": {
            "CLOSE_DATE": {
                "label": "Close Date",
                "dataType": "date",
                "groupingLevel": 1
            },
            "STAGE_NAME": {
                "label": "Stage",
                "dataType": "picklist",
                "groupingLevel": 0
            },
            "ACCOUNT_NAME": {
                "label": "Account Name",
                "dataType": "string",
                "groupingLevel": 0
            },
            "ACCOUNT_LAST_ACTIVITY": {
                "label": "Account: Last Activity",
                "dataType": "date",
                "groupingLevel": 1
            }
        }
    },
    "reportMetadata": {
        "name": "Stuck Opportunities",
        "id": "00OD0000001ZbP7MAK",
        "currency": null,
        "developerName": "StuckOpportunities",
        "groupingsDown": [
            {
                "name": "ACCOUNT_NAME",
                "sortOrder": "Asc",
                "dateGranularity": "None"
            },
            {
                "name": "CLOSE_DATE",
                "sortOrder": "Desc",
                "dateGranularity": "FiscalQuarter"
            }
        ],
        "groupingsAcross": [
            {
                "name": "STAGE_NAME",
                "sortOrder": "Desc",
                "dateGranularity": "None"
            },
            {
                "name": "ACCOUNT_LAST_ACTIVITY",
                "sortOrder": "Asc",
                "dateGranularity": "Week"
            }
        ],
        "reportType": {
            "type": "Opportunity",
            "label": "Opportunities"
        },
        "aggregates": [
            "s!EXP_AMOUNT",
            "FORMULA1",
            "RowCount"
        ],
        "reportFormat": "MATRIX",
        "reportBooleanFilter": null,
        "reportFilters": [
            {
                "value": "Closed Won,Closed Lost",
                "column": "STAGE_NAME",
                "operator": "notEqual"
            },
            {
                "value": "50",
                "column": "PROBABILITY",
                "operator": "greaterThan"
            }
        ],
        "detailColumns": [
            "OPPORTUNITY_NAME",
            "PROBABILITY",
            "EXP_AMOUNT",
            "NEXT_STEP",
            "BucketField_34840671"
        ]
    }
}
```

## Related Topics

- Describe (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_getbasic_reportmetadata.htm)
