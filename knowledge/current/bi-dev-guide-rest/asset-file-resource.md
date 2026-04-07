---
title: "Asset File Resource"
domain: bi-dev-guide-rest
topic: asset-file-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:36:55.421Z
estimatedTokens: 205
keywords: [Formats, Asset, File, Resource, preview, updates, URL, HTTP, PUT]
---

> Returns a preview file for an asset and updates the file.

# Asset File Resource

Returns a preview file for an asset and updates the file.

## Resource URL

```

```

## Formats

JSON

## Available Version

57.0

## HTTP Methods

GET PUT

## Request parameters for GET and PUT

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| asset​Id​Or​Api​Name | String | The ID or API name of the asset. | Required | 52.0 |
| file​Id | String | The ID of the file. | Required | 52.0 |

## Response body for GET

A binary stream of the contents for the specified file.

## Request body for PUT

A binary preview file.

## Response body for PUT

[Analytics Data Asset File](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_analytics_data_asset_file.htm "A file used for preview of an Analytics data asset.")

## Code Examples

```
/analytics​/assetfiles/​<assetIdOrAPiName>/files/​<fileId>
```

## Related Topics

- Analytics Data Asset File (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_analytics_data_asset_file.htm)
