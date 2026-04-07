---
title: "List of Asset Attributes"
domain: mc-apis
topic: list-of-asset-attributes
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:15.200Z
estimatedTokens: 378
keywords: [Asset, Attributes, possible, creating, manipulating, likely, few]
---

> This table lists possible attributes used when creating or manipulating an asset. Each asset will likely need no more than a few of these attributes.

# List of Asset Attributes

This table lists possible attributes used when creating or manipulating an asset. Each asset will likely need no more than a few of these attributes.

| Key | Type | Required for | Read-only | Searchable |
| --- | --- | --- | --- | --- |
| id | number |  | ✔ | ✔ |
| customerKey | string |  |  | ✔ |
| objectID | string |  | ✔ | ✔ |
| name | string |  |  | ✔ |
| description | string |  |  | ✔ |
| owner | object |  | ✔ | ✔ |
| createdDate | string |  | ✔ | ✔ |
| createdBy | object |  | ✔ | ✔ |
| modifiedDate | string |  | ✔ | ✔ |
| modifiedBy | object |  | ✔ | ✔ |
| enterpriseID | number |  | ✔ | ✔ |
| memberID | number |  | ✔ | ✔ |
| activeDate | string |  |  | ✔ |
| expirationDate | string |  |  | ✔ |
| contentType | string |  |  | ✔ |
| assetType | object |  |  | ✔ |
| category | object |  |  | ✔ |
| content | string |  |  | ✔ |
| design | string |  |  | ✔ |
| superContent | string |  |  | ✔ |
| file | object |  |  | ✔ |
| views | object |  |  | ✔ |
| generateFrom | string |  |  | ✔ |
| slots | object |  |  | ✔ |
| blocks | object |  |  | ✔ |
| minBlocks | number |  |  | ✔ |
| maxBlocks | number |  |  | ✔ |
| allowedBlocks | array |  |  | ✔ |
| template | object |  |  | ✔ |
| meta | object |  |  |  |
| customFields | object |  |  | ✔ |
| data | object |  |  | ✔ |
| channels | object |  |  | ✔ |
| version | number |  | ✔ | ✔ |
| locked | boolean |  |  | ✔ |
| status | string |  |  | ✔ |
| tags | array |  |  | ✔ |
| businessUnitAvailability | object |  |  | ✔ |
