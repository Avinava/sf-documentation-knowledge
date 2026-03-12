---
title: "Product Media Input"
domain: chatterapi
topic: product-media-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.522Z
estimatedTokens: 121
keywords: [Product, Media, Input, representation]
---

# Product Media Input

> Input representation of product media details.

# Product Media Input

Input representation of product media details.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| developerName | String | The API name of the product media group. Possible values are:AttachmentProductDetailImageProductListImage | Optional | 61.0 |
| mediaId | String | The Salesforce ID of the managed content record associated with the product. | Optional | 61.0 |

## Code Examples

```
{
  "developerName": "ProductListImage",
  "mediaId": "mediaId1"
}
```
