---
title: "Resume Billing (POST)"
domain: revenue-cloud
topic: resume-billing-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:08.924Z
estimatedTokens: 217
keywords: [Resume, Billing, POST, schedule, groups, account, that’s, currently, hold]
---

# Resume Billing (POST)

> Resume billing for billing schedule groups or an account that’s
      currently on hold.

# Resume Billing (POST)

Resume billing for billing schedule groups or an account that’s currently on hold.

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
| referenceIds | Resume Billing Object Input[] | Input representation of the account or billing schedule group IDs to resume the billing operation for. | Required | 63.0 |

Response body for POST

[Suspend Resume Billing](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_suspend_resume_billing_output.htm "Output representation of the list of accounts and billing schedule groups, which are suspended or resumed for billing operations.")

## Code Examples

```
/commerce/invoicing/actions/resume-billing
```

```
https://yourInstance.salesforce.com/services/data/v66.0/commerce/invoicing/actions/resume-billing
```

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
- Suspend Resume
              Billing (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_suspend_resume_billing_output.htm)
