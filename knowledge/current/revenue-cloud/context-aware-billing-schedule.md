---
title: "Context-Aware Billing Schedule"
domain: revenue-cloud
topic: context-aware-billing-schedule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:05.939Z
estimatedTokens: 181
keywords: [Context-Aware, Billing, Schedule, Input, representation, billing, transaction, details., Output, context-aware, schedule.]
---

# Context-Aware Billing Schedule

> Output representation of the context-aware billing schedule.

# Context-Aware Billing Schedule

Output representation of the context-aware billing schedule.

JSON example

This request shows a sample success response.

```

```

This request shows a sample error response.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Context Aware Billing Schedule Error[] | Error response if the generation of the billing schedule fails. | Big, 62.0 | 62.0 |
| request​Identifier | String | Unique request identifier that you can use to poll the asynchronous request. | Big, 62.0 | 62.0 |
| statusURL | String | Status URL to track the operation. | Big, 62.0 | 62.0 |
| success | Boolean | Indicates whether the processing of the billing schedule is successful (true) or not (false). | Big, 62.0 | 62.0 |

## Code Examples

```
{
    "billingTransactionIds": [ "801xx000003H1H9AAK"]
}
```

```
{ 
    "errors": null, 
    "requestIdentifier": "16Pxx0000004CaS", 
    "statusURL": "/services/data/v66.0/sobjects/AsyncOperationTracker/16Pxx0000004CaSEAU", 
    "success": true 
}
```

```
{ 
    "errors": [ 
        { 
            "errorCode": "REQUIRED_FIELD_MISSING",
            "errorMessage": "Required fields are missing: billToContact", 
            "referenceId": "802xx000001nmb5"
        } 
    ],
    "requestIdentifier": "16Pxx0000004CYq", 
    "statusURL": "/services/data/v66.0/sobjects/AsyncOperationTracker/16Pxx0000004CYqEAM", 
    "success": false 
}
```

## Related Topics

- Context Aware Billing Schedule Error (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_context_aware_billing_schedule_error.htm)
