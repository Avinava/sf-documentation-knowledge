---
title: "Import Status Output"
domain: retail-api
topic: import-status-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.948Z
estimatedTokens: 182
keywords: [Import, Status, Output, ingest, promotions]
---

# Import Status Output

> Represents the details of the ingest promotions import
    status.

# Import Status Output

Represents the details of the ingest promotions import status.

JSON example

```

```

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| txid | String | The transaction ID of the import workflow. | 55 |
| details | List<ImportStatus> | Indicates the state of the promotions. | 55 |
| status | String | Indicates the import status.Possible values are:CalculatedToBeCalculatedWrittenInitialError | 55 |
| nrOfItems | Integer | Indicates the number of promotions that exist in the given status. | 55 |
| sample | List<String> | The list of the first 10 CUD records IDs. | 55 |
| error | String | Indicates the type of error if any, that occurs during the import. | 55 |

## Code Examples

```
{
    "txid": "201d590c-6cbd-4705-8bc6-acbdec5f9bb1",
    "details:[
        {
            "status": "Calculated",
            "nrOfItems": 25
        },
        {
            "status": "ToBeCalculated",
            "nrOfItems": 50
        },
        {
            "status": "Written",
            "nrOfItems": 50
        },
        {
            "status": "Error",
            "error": "ValidationError",
            "nrOfItems": 25
            "sample": ["aX01000000000001", "aX01000000000002", "aX01000000000005", "aX01000000000006", "aX01000000000007", "aX01000000000008", "aX01000000000009", "aX01000000000010", "aX01000000000011", "aX01000000000012"]
        },
        {
            "status": "Error",
            "error": "TransformationError",
            "nrOfItems": 5,
            "sample": ["aX01000000000003", "aX01000000000004", "aX01000000000013", "aX01000000000014", "aX01000000000015" ]
        },
        {
            "status": "Initial",
            "nrOfItems": 325
        }
    ]
}
```
