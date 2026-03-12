---
title: "Context-Aware Billing Schedule Error"
domain: revenue-cloud
topic: context-aware-billing-schedule-error
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.293Z
estimatedTokens: 133
keywords: [Context-Aware, Billing, Schedule, Error, Output, representation, generation]
---

# Context-Aware Billing Schedule Error

> Output representation of the error response related to the generation of the billing
    schedule.

# Context-Aware Billing Schedule Error

Output representation of the error response related to the generation of the billing schedule.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errorCode | String | Code for the resultant error. | Big, 62.0 | 62.0 |
| errorMessage | String | Error message for the resultant error. | Big, 62.0 | 62.0 |
| referenceId | String | Reference ID of the source item that resulted in the error. | Big, 62.0 | 62.0 |

## Code Examples

```
"errors": [ 
        { 
            "errorCode": "REQUIRED_FIELD_MISSING",
            "errorMessage": "Required fields are missing: billToContact", 
            "referenceId": "802xx000001nmb5"
        } 
    ]
```
