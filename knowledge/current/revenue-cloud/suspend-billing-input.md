---
title: "Suspend Billing Input"
domain: revenue-cloud
topic: suspend-billing-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:08.372Z
estimatedTokens: 117
keywords: [Suspend, Billing, Input, representation, operation, account, schedule, group]
---

# Suspend Billing Input

> Input representation of the details of the request to suspend the billing operation for
    an account or a billing schedule group.

# Suspend Billing Input

Input representation of the details of the request to suspend the billing operation for an account or a billing schedule group.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| referenceIds | Suspend Billing Object Input[] | Input representation of the account or billing schedule group IDs to suspend the billing operation for. | Required | 63.0 |

## Code Examples

```
{
    "referenceIds": 
    [
        {
            "referenceId": "001DU000001o2UwYAI",
            "suspendDate": "2024-11-27",
            "resumeDate": "2024-12-27"
        }
    ]
}
```

## Related Topics

- Suspend Billing Object Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_suspend_billing_entity_input.htm)
