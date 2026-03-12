---
title: "Stock Rotation Output Error"
domain: channel-revenue-management-dev-guide
topic: stock-rotation-output-error
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.918Z
estimatedTokens: 111
keywords: [Stock, Rotation, Output, Error, action, including, code, message, explaining, failure]
---

# Stock Rotation Output Error

> Represents an error returned by a stock rotation action, including the error code and a
    message explaining the failure.

# Stock Rotation Output Error

Represents an error returned by a stock rotation action, including the error code and a message explaining the failure.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| code | String | The error code for the failure. | Big, 66.0 | 66.0 |
| message | String | The error message for the failure. | Big, 66.0 | 66.0 |

## Code Examples

```
{
 "errorDetails": [
    {
      "code": "VALIDATION_ERROR",
      "message": "Action type is required"
    }
  ]
}
```
