---
title: "Get Measure Exports Output"
domain: retail-api
topic: get-measure-exports-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.943Z
estimatedTokens: 25
keywords: [Measure, Exports, Output, API]
---

# Get Measure Exports Output

> Response body for Get Measure Exports API.

# Get Measure Exports Output

Response body for Get Measure Exports API.

Response Body

```

```

## Code Examples

```
[
    {
        "Status": "Ready",
        "RequestDate": "2025-03-19T06:35:04.000Z",
        "csvGuid": "25439edc-3b83-44ed-a15c-f122af21335c",
        "salesorg": "0001",
        "MetaName": "PromotionDataExportCustom",
        "BusinessYear": 2024,
        "Statistics": {
            "csvGuid": "25439edc-3b83-44ed-a15c-f122af21335c",
            "jobStartTime": "Wed, 19 Mar 2025 12:05:30 GMT",
            "hasDelta": false,
            "deltaToCsvGuid": null,
            "metaName": "PromotionDataExportCustom",
            "metaVersion": 3,
            "totalAccounts": 1,
            "totalCategories": 6,
            "dimDataRetrievalDuration": 557,
            "numRecords": 1554,
            "numAccountCategoryKeys": 6,
            "runDuration": 1016,
            "processedAccountCategories": 6,
            "jobCompletionTime": "Wed, 19 Mar 2025 12:05:32 GMT",
            "jobDuration": 2255
        },
        "FullExport": "full/25439edc-3b83-44ed-a15c-f122af21335c.csv.gz",
        "DeltaExport": "delta/25439edc-3b83-44ed-a15c-f122af21335c.csv.gz"
    },
    {
        "Status": "Queued",
        "RequestDate": "2025-03-19T09:01:50.000Z",
        "MetaName": "PromotionDataExportCustom",
        "csvGuid": "25439edc-3b83-44ed-a15c-f122af21335c",
        "salesorg": "0001",
        "BusinessYear": 2024,
        "Statistics": null
    }
]
```
