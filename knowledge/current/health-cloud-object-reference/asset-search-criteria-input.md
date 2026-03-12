---
title: "Asset Search Criteria Input"
domain: health-cloud-object-reference
topic: asset-search-criteria-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:32.759Z
estimatedTokens: 146
keywords: [Asset, Search, Criteria, Input, assets]
---

# Asset Search Criteria Input

> Criteria used to search for assets.

# Asset Search Criteria Input

Criteria used to search for assets.

JSON Example

```

```

Properties

| Property Name | Type | Description | Required |
| --- | --- | --- | --- |
| assetName | String | The name of the asset. | Optional |
| assetTypeIds | Array of Strings | A list of IDs corresponding to the asset's types. | Optional |
| assetCategories | Array of Strings | A list of the names of the asset's categories. | Optional |
| status | String | The current status of the asset. | Optional |
| productCode | String | The product code associated with the asset. | Optional |

## Code Examples

```
{
  "assetSearchCriteria": {
    "assetName": "MRI Scanner",
    "assetTypeIds": [
      "DI-001",
      "IM-005"
    ],
    "assetCategories": [
      "Diagnostic Imaging",
      "Large Equipment"
    ],
    "status": "Available",
    "productCode": "SIEMENS-MAGNETOM-S"
  }
}
```
