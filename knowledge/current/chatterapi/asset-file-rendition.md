---
title: "Asset File Rendition"
domain: chatterapi
topic: asset-file-rendition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.359Z
estimatedTokens: 393
keywords: [Asset, File, Rendition, streamed, renditions, binary, preview]
---

# Asset File Rendition

> Get up to 25 streamed renditions of an asset file. A rendition is a
      binary preview of the file.

# Asset File Rendition

Get up to 25 streamed renditions of an asset file. A rendition is a binary preview of the file.

Resource

```

```

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

The fullyQualifiedName is the namespace prefix, if there is one, followed by the developer name of the ContentAsset.

Available version

42.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| format | String | Specify the format of the file, either jpg or png. If unspecified, BMP and JPG files default to JPG, and PNG files default to PNG. | Optional | 60.0 |
| height | Integer | Specify the height of the image file in pixels.You must specify a dimension greater than 24 pixels and smaller than the original image dimension. You can specify up to 25 image dimension combinations. If only height or width is specified, the original image dimension is returned. | Optional | 42.0 |
| versionNumber | Integer | Specify an existing version number for the file. If not specified, the latest version is returned. | Optional | 42.0 |
| width | Integer | Specify the width of the image file in pixels.You must specify a dimension greater than 24 pixels and smaller than the original image dimension. You can specify up to 25 image dimension combinations. If only height or width is specified, the original image dimension is returned. | Optional | 42.0 |

Response body for GET

Binary stream of the rendition

## Code Examples

```
/connect/file-assets/fullyQualifiedName/rendition
```

```
/connect/communities/communityId/file-assets/fullyQualifiedName/rendition
```
