---
title: "Suspend Billing (POST)"
domain: revenue-cloud
topic: suspend-billing-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:08.981Z
estimatedTokens: 218
keywords: [Suspend, Billing, POST, schedule, groups, account, predefined, period]
---

# Suspend Billing (POST)

> Suspend billing for billing schedule groups or an account for a
      predefined period.

# Suspend Billing (POST)

Suspend billing for billing schedule groups or an account for a predefined period.

Resource

```

```

Resource example

```

```

Available version

63.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| referenceIds | Suspend Billing Object Input[] | Input representation of the account or billing schedule group IDs to suspend the billing operation for. | Required | 63.0 |

Response body for POST

[Suspend Resume Billing](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_suspend_resume_billing_output.htm "Output representation of the list of accounts and billing schedule groups, which are suspended or resumed for billing operations.")

## Code Examples

```
/commerce/invoicing/actions/suspend-billing
```

```
https://yourInstance.salesforce.com/services/data/v66.0/commerce/invoicing/actions/suspend-billing
```

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
- Suspend Resume
              Billing (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_suspend_resume_billing_output.htm)
