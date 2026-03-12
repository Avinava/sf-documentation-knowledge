---
title: "Lightning Toggle Metrics"
domain: rest-api
topic: lightning-toggle-metrics
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.448Z
estimatedTokens: 180
keywords: [Lightning, Toggle, Metrics, users, switched, Salesforce, Classic, Experience, resource, REST, API, version, 44.0, later]
---

# Lightning Toggle Metrics

> Returns details about users who switched between
   Salesforce Classic and Lightning Experience. This resource is available in REST API version
  44.0 and later.

# Lightning Toggle Metrics

Returns details about users who switched between Salesforce Classic and Lightning Experience. This resource is available in REST API version 44.0 and later.

Use this object with the following APIs:

-   Platform
-   Metadata API
-   Tooling API

## Syntax

URI

/services/data/vXX.X/sobjects/LightningToggleMetrics

Formats

JSON, XML

HTTP methods

GET

Authentication

Authorization: Bearer tokens

Request parameters

| Parameter | Description |
| --- | --- |
| UserId | The user ID. |
| RecordCount | The count of records returned. |
| MetricsDate | The date the switch was recorded. |
| Action | Did the user switch to Salesforce Classic or Lightning Experience. |

## Example

```

```

## Code Examples

```
SELECT sum(RecordCount) Total FROM LightningToggleMetrics WHERE MetricsDate = LAST_MONTH AND Action = 'switchToAloha'
```
