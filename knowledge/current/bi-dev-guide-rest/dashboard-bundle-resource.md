---
title: "Dashboard Bundle Resource"
domain: bi-dev-guide-rest
topic: dashboard-bundle-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.582Z
estimatedTokens: 269
keywords: [Dashboard, Bundle, Resource, updates, API, URL, Formats, Version, HTTP, PUT]
---

# Dashboard Bundle Resource

> Returns or updates the dashboard bundle with the specified ID or
  API name.

# Dashboard Bundle Resource

Returns or updates the dashboard bundle with the specified ID or API name.

## Resource URL

```

```

## Formats

JSON

## Available Version

41.0

## HTTP Methods

GET PUT

## GET Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| history​Id | ID | Get a bundled dashboard resource representation | Optional | 41.0 |

## GET Response Body

[Wave Asset Bundle](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_asset_bundle.htm "The Analytics asset bundled with the associated metadata.")

## PUT Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| history | Asset​Revert​History​Input | Revert a dashboard to a previous historical record. | Required | 45.0 |

## PUT Response Body

[Wave Asset Bundle](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_asset_bundle.htm "The Analytics asset bundled with the associated metadata.")

## Code Examples

```
/wave/dashboards/<dashboardIdOrApiName>/bundle
```

## Related Topics

- Wave Asset Bundle (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_asset_bundle.htm)
- Asset​Revert​History​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_asset_revert_history_input.htm)
