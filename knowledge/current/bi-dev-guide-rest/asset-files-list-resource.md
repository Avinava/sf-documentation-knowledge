---
title: "Asset Files List Resource"
domain: bi-dev-guide-rest
topic: asset-files-list-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.115Z
estimatedTokens: 228
keywords: [Asset, Files, Resource, collection, creates, file, URL, Formats, Version, HTTP, POST]
---

# Asset Files List Resource

> Returns a collection of asset files for an asset and creates an asset file.

# Asset Files List Resource

Returns a collection of asset files for an asset and creates an asset file.

## Resource URL

```

```

## Formats

JSON

## Available Version

57.0

## HTTP Methods

GET POST

## Request parameters for GET and POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| asset​Id​Or​Api​Name | String | The ID or API name of the asset. | Required | 52.0 |

## Response body for GET

[Analytics Data Asset File](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_analytics_data_asset_file.htm "A file used for preview of an Analytics data asset.")

## Request body for POST

A binary preview file.

## Response body for POST

[Analytics Data Asset File](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_analytics_data_asset_file.htm "A file used for preview of an Analytics data asset.")

## Code Examples

```
/analytics​/assetfiles/​<assetIdOrAPiName>/files
```

## Related Topics

- Analytics Data Asset File (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_analytics_data_asset_file.htm)
