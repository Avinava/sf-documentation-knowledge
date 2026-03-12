---
title: "Accessing Metrics for Your Visualforce Pages"
domain: pages
topic: accessing-metrics-for-your-visualforce-pages
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.267Z
estimatedTokens: 471
keywords: [Accessing, Metrics, Visualforce, Pages, query, org, VisualforceAccessMetrics, Salesforce, SOAP, API]
---

# Accessing Metrics for Your Visualforce Pages

> To query metrics on the Visualforce pages in your org, use the VisualforceAccessMetrics object in the Salesforce SOAP
    API.

# Accessing Metrics for Your Visualforce Pages

To query metrics on the Visualforce pages in your org, use the VisualforceAccessMetrics object in the Salesforce SOAP API.

To query information from the VisualforceAccessMetrics object, use the Query Editor in the Developer Console. If you use Visual Studio Code, you can also make queries with the SOQL Builder, which is part of the Salesforce Extension Pack.

The following is a sample SOQL call:

```

```

| Parameter | Description |
| --- | --- |
| LogDate | This parameter provides the date that the page access was logged. This parameter is available for release 216 and later. |
| ProfileId | The ID of the profile associated with the user who accessed the page. This parameter is available for release 216 and later. |
| ApexPageId | The ID of the tracked Visualforce page |
| DailyPageView | Each VisualforceAccessMetrics object tracks the daily page view count in the DailyPageViewCount field. |
| MetricsDate | The date the metrics were collected is specified in MetricsDate. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

Page views are tallied the day after the page is viewed, and each VisualforceAccessMetrics object is removed after 90 days.

Using VisualforceAccessMetrics, you can track the number of views each Visualforce page in your org receives in a 24-hour time period. To find out how many views a page got over the course of multiple days, you can query multiple VisualforceAccessMetrics objects for the same ApexPageId.

#### See Also

-   [*Object Reference for the Salesforce Platform*: VisualforceAccessMetrics](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_visualforceaccessmetrics.htm "Object Reference for the Salesforce Platform:
    VisualforceAccessMetrics - HTML (New Window)")

## Code Examples

```
SELECT ApexPageId, DailyPageViewCount, Id, ProfileId, MetricsDate, LogDate FROM VisualforceAccessMetrics
```
