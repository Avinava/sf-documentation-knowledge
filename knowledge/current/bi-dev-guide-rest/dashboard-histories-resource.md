---
title: "Dashboard Histories Resource"
domain: bi-dev-guide-rest
topic: dashboard-histories-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.584Z
estimatedTokens: 152
keywords: [Dashboard, Histories, Resource, API, URL, Formats, Version, HTTP]
---

# Dashboard Histories Resource

> Returns the dashboard histories with the specified ID or
  API name.

# Dashboard Histories Resource

Returns the dashboard histories with the specified ID or API name.

## Resource URL

```

```

## Formats

JSON

## Available Version

46.0

## HTTP Methods

GET

## GET Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| history​Id | ID | Get a bundled dashboard resource representation | Optional | 41.0 |

## GET Response Body

[Asset History Collection](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_asset_history_collection.htm "A collection of asset histories.")

## Code Examples

```
/wave/dashboards/<dashboardIdOrApiName>/histories
```

## Related Topics

- Asset History Collection (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_asset_history_collection.htm)
