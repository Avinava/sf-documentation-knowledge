---
title: "Lens Bundle Resource"
domain: bi-dev-guide-rest
topic: lens-bundle-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.769Z
estimatedTokens: 304
keywords: [Lens, Bundle, Resource, updates, API, URL, Formats, Version, HTTP, PUT]
---

# Lens Bundle Resource

> Returns or updates the lens bundle with the specified ID or
  API name.

# Lens Bundle Resource

Returns or updates the lens bundle with the specified ID or API name.

## Resource URL

```

```

## Formats

JSON

## Available Version

43.0

## HTTP Methods

GET PUT

## GET Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| history​Id | ID | Get a bundled lens resource representation for a specific lens history. | Optional | 43.0 |
| is​Update​Mru | Boolean | Indicates whether to retrieve the bundle if the MRU is updated (true) or not (false). | Optional | 58.0 |

## GET Response Body

[Wave Asset Bundle](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_asset_bundle.htm "The Analytics asset bundled with the associated metadata.")

## PUT Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| history | Asset​Revert​History​Input | Revert a lens to a previous historical record. | Required | 45.0 |

## PUT Response Body

[Wave Asset Bundle](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_asset_bundle.htm "The Analytics asset bundled with the associated metadata.")

## Code Examples

```
/wave/lenses/<lensIdOrApiName>/bundle
```

## Related Topics

- Wave Asset Bundle (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_asset_bundle.htm)
- Asset​Revert​History​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_asset_revert_history_input.htm)
