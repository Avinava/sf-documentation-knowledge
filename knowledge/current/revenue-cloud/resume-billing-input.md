---
title: "Resume Billing Input"
domain: revenue-cloud
topic: resume-billing-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:06.433Z
estimatedTokens: 116
keywords: [Resume, Billing, Input, representation, details, request, resume, billing, operation, account, schedule, group.]
---

# Resume Billing Input

> Input representation of the details of the request to resume the billing operation for an
    account or a billing schedule group.

# Resume Billing Input

Input representation of the details of the request to resume the billing operation for an account or a billing schedule group.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| referenceIds | Resume Billing Object Input[] | Input representation of the account or billing schedule group IDs to resume the billing operation for. | Required | 63.0 |

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

## Related Topics

- Resume Billing Object Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_resume_billing_entity_input.htm)
