---
title: "Lightning Exit by Page Metrics"
domain: rest-api
topic: lightning-exit-by-page-metrics
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:25.394Z
keywords: [Lightning, Exit, Page, Metrics, Syntax, Example]
---

# Lightning Exit by Page Metrics

# Lightning Exit by Page Metrics

Returns frequency metrics about the standard pages within which users switched from Lightning Experience to Salesforce Classic. This resource is available in REST API version 44.0 and later.

Use this object with the following APIs:

-   Platform
-   Metadata API
-   Tooling API

## Syntax

URI

/services/data/vXX.X/sobjects/LightningExitByPageMetrics

Formats

JSON, XML

HTTP methods

GET

Authentication

Authorization: Bearer token

Request parameters

| Parameter | Description |
| --- | --- |
| MetricsDate | The date the data was recorded. |
| PageName | Current Page from which User Switched from Lightning to Aloha |
| RecordCount | The number of records per user and page. |
| UserId | The user ID. |

## Example

```

```