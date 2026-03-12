---
title: "Resume Billing Object Input"
domain: revenue-cloud
topic: resume-billing-object-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:08.279Z
estimatedTokens: 180
keywords: [Resume, Billing, Input, representation, account, schedule, group, along, effective, date, start, operation]
---

# Resume Billing Object Input

> Input representation of the details such as the ID of the account or billing schedule
    group along with the effective date. These details are used to start the billing
    operation.

# Resume Billing Object Input

Input representation of the details such as the ID of the account or billing schedule group along with the effective date. These details are used to start the billing operation.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| referenceId | String | ID of the account or billing schedule group to resume the billing operation for. | Required | 63.0 |
| resumeDate | String | Date when the billing operation is resumed. If a date isn’t specified, the default value is today’s date. The billing operation starts immediately and any future suspension dates aren’t applicable. | Required | 63.0 |

## Code Examples

```
{
    "referenceIds":
    [
        {
          "referenceId": "001DU000001o2UwYAI",
          "resumeDate": "2024-11-27"
        }
    ]
 
}
```
