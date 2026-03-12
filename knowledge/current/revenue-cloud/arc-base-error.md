---
title: "ARC Base Error"
domain: revenue-cloud
topic: arc-base-error
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.072Z
estimatedTokens: 104
keywords: [ARC, Base, Error, Output, representation, amendment, renewal, cancellation, assets]
---

# ARC Base Error

> Output representation of the error response related to the amendment, renewal,
    or
    cancellation of assets.

# ARC Base Error

Output representation of the error response related to the amendment, renewal, or cancellation of assets.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| error​Code | String | Code for the resultant error. | Big, 62.0 | 62.0 |
| error​Message | String | Error message for the resultant error. | Big, 62.0 | 62.0 |

## Code Examples

```
"errors": [ 
        { 
            "errorCode": "REQUIRED_FIELD_MISSING",
            "errorMessage": "Specify a value for quantityChange, and try again."
        } 
    ]
```
