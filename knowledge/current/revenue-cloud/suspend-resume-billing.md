---
title: "Suspend Resume Billing"
domain: revenue-cloud
topic: suspend-resume-billing
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.559Z
estimatedTokens: 119
keywords: [Suspend, Resume, Billing, Output, representation, list, accounts, billing, schedule, groups, which, suspended, resumed, operations.]
---

# Suspend Resume Billing

> Output representation of the list of accounts and billing schedule groups, which are
    suspended or resumed for billing operations.

# Suspend Resume Billing

Output representation of the list of accounts and billing schedule groups, which are suspended or resumed for billing operations.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| result | Suspend Resume Billing Object[] | Details of the accounts or billing schedule groups that the suspend or resume billing request is initiated for. | Big, 63.0 | 63.0 |

## Code Examples

```
{
    "result":{
        {
            "referenceId": "001DU000001o2UwYAI",
            "success": true,
            "errorcode": null,
            "errorMessage":null
        },
        {
            "referenceId": "001DU000001o2UuYAI",
            "success": false,
            "errorcode": "INVALID_API_INPUT",
            "errorMessage":"Billing is already suspended for 9Wsxx000000006TCAQ."
        }
    }
}
```

## Related Topics

- Suspend Resume Billing Object (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_suspend_resume_billing_entity_output.htm)
