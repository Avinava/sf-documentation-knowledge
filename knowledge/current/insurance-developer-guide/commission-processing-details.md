---
title: "Commission Processing Details"
domain: insurance-developer-guide
topic: commission-processing-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.541Z
estimatedTokens: 130
keywords: [Commission, Processing, Output, representation]
---

# Commission Processing Details

> Output representation details of the commission processing.

# Commission Processing Details

Output representation details of the commission processing.

JSON example

This example shows a sample success response.

```

```

This example shows a sample error response.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| message | String | Status message of the API execution. | Small, 63.0 | 63.0 |
| status | String | Status of the API execution. Valid values are:SuccessFail | Small, 63.0 | 63.0 |

## Code Examples

```
{
    "status": "Success",
    "message": "The processing has started for the commission statement CS-00000001."
}
```

```
{
    "status": "Fail",
    "message": "Processing failed for the commission statement The processing has started for the commission statement CS-00000001 ."
}
```
