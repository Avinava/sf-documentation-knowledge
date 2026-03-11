---
title: "Lightning Usage by Browser"
domain: rest-api
topic: lightning-usage-by-browser
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:25.402Z
keywords: [Lightning, Usage, Browser, Syntax, Example]
---

# Lightning Usage by Browser

# Lightning Usage by Browser

Returns Lightning Experience usage results grouped by browser instance. This resource is available in REST API version 44.0 and later.

Use this object with the following APIs.

-   Platform
-   Metadata API
-   Tooling API

## Syntax

URI

/services/data/vXX.X/sobjects/LightningUsageByBrowserMetrics

Formats

JSON, XML

HTTP methods

GET

Authentication

Authorization: Bearer token

Request body

SOQL Query.

Request parameters

| Parameter | Description |
| --- | --- |
| Browser | The browser used. |
| EptBin3To5 | Number of times that a page loaded between 3-5 seconds. |
| EptBin5To8 | Number of times that a page loaded between 5-8 seconds. |
| EptBin8To10 | Number of times that a page loaded between 8-10 seconds. |
| EptBinOver10 | Number of times that a page loaded over 10 seconds. |
| EptBinUnder3 | Number of times that a page loaded under 3 seconds. |
| MetricsDate | The date the metric was recorded. |
| PageName | The name of the page. |
| RecordCountEPT | Number of records for a page/browser where the valid EPT was recorded. |
| SumEPT | Sum of the EPT values for page/browser. |
| TotalCount | Total records for a page/browser. |

## Example

Example Request Body

```

```