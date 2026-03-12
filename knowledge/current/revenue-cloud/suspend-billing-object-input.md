---
title: "Suspend Billing Object Input"
domain: revenue-cloud
topic: suspend-billing-object-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:06.541Z
estimatedTokens: 181
keywords: [Suspend, Billing, Input, representation, details, such, account, billing, schedule, group, along, effective, dates., used, suspend, operation.]
---

# Suspend Billing Object Input

> Input representation of the details such as the ID of the account or billing schedule
    group along with the effective dates. These details are used to suspend the billing
    operation.

# Suspend Billing Object Input

Input representation of the details such as the ID of the account or billing schedule group along with the effective dates. These details are used to suspend the billing operation.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| referenceId | String | ID of the account or billing schedule group to suspend the billing operation for. | Required | 63.0 |
| resumeDate | String | Date until when the account or billing schedule group is suspended for billing. | Required | 63.0 |
| suspendDate | String | Date when the account or billing schedule group is suspended for billing. | Required | 63.0 |

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
