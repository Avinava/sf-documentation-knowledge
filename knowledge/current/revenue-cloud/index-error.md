---
title: "Index Error"
domain: revenue-cloud
topic: index-error
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.457Z
estimatedTokens: 174
keywords: [Index, Error, Output, representation]
---

# Index Error

> Output representation of the error details related to an index.

# Index Error

Output representation of the error details related to an index.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| error​FileId | String | ID of the exported error file that contains the index errors. | Small, 63.0 | 63.0 |
| indexCreated​Date | String | Date on which the index was created. | Small, 63.0 | 63.0 |
| index​ErrorsCount | Integer | Number of index-level errors. | Small, 63.0 | 63.0 |
| indexLast​UpdatedDate | String | Date on which the index was last updated. | Small, 63.0 | 63.0 |
| itemLevel​ErrorsCount | Integer | Number of item-level errors. | Small, 63.0 | 63.0 |

## Code Examples

```
"indexErrorDetails": {
    "errorFileId": "069xx0000004C92AAE",
    "indexCreatedDate": "2024-10-03T05:24:18.000Z",
    "indexErrorsCount": 1,
    "indexLastUpdatedDate": "2024-10-03T05:27:00.000Z",
    "itemLevelErrorsCount": 1
  }
```
