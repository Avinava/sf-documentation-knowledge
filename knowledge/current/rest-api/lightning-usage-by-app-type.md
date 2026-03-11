---
title: "Lightning Usage by App Type"
domain: rest-api
topic: lightning-usage-by-app-type
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:25.399Z
keywords: [Lightning, Usage, App, Type, Syntax, Example]
---

# Lightning Usage by App Type

# Lightning Usage by App Type

Returns the total number of Lightning Experience and Salesforce Mobile users. This resource is available in REST API version 44.0 and later.

Use this object with the following APIs:

-   Platform
-   Metadata API
-   Tooling API

## Syntax

URI

/services/data/vXX.X/sobjects/LightningUsageByAppTypeMetrics

Formats

JSON, XML

HTTP methods

GET

Authentication

Authorization: Bearer token

Request parameters

| Parameter | Description |
| --- | --- |
| AppExperience | The app used:Salesforce MobileLightning Experience |
| MetricsDate | The date the data was recorded. |
| UserID | The user ID. |

## Example

```

```