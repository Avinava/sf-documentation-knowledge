---
title: "Data Mapper Details"
domain: omnistudio
topic: data-mapper-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:47.211Z
estimatedTokens: 127
keywords: [Data, Mapper, Input, representation, clear, cache]
---

# Data Mapper Details

> Input representation of the data mapper details to clear the cache for.

# Data Mapper Details

Input representation of the data mapper details to clear the cache for.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| dataMapperName | String | Name of the data mapper to clear the cache for. The execution cache is cleared for the storage that's specified in the cacheStorageType property. | Required | 64.0 |
| input | String | Custom JSON data to clear the cache. | Optional | 64.0 |

## Code Examples

```
{
  "dataMappers": [
    {
      "dataMapperName": "DRWithLoad",
      "input": {
        "Name": "Get Account Details"
      }
    }
  ]
}
```
