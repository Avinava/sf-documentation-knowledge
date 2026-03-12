---
title: "Rules Application (POST)"
domain: revenue-cloud
topic: rules-application-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:07.176Z
estimatedTokens: 278
keywords: [Rules, Application, POST, Apply, payments, credits, account's, invoices, based, specified, rules, defined, Billing, Settings, page.]
---

# Rules Application (POST)

> Apply payments and credits to an account's invoices based on specified
      rules defined on the Billing Settings page.

# Rules Application (POST)

Apply payments and credits to an account's invoices based on specified rules defined on the Billing Settings page.

This API uses predefined logic to allocate payments and credits, reducing any manual intervention and errors.

Resource

```

```

Resource example

```

```

Available version

66.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | ID of the account to perform the settlement of payments and credits against invoices in adherence with the applied rules. | Required | 66.0 |
| targetDate | String | The date used to select invoices and invoice lines with a posted date equal to or later than the target date to apply payments and credits. | Optional | 66.0 |

Response body for POST

[Rules Application](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_rules_application_output.htm "Output representation of the details of rules application.")

## Code Examples

```
/revenue/billing/transactions/actions/apply
```

```
https://yourInstance.salesforce.com/services/data/v66.0/revenue/billing/transactions/actions/apply
```

```
{
  "accountId": "001xx000003DGbQAAW",
  "targetDate": "2024-01-15"
}
```

## Related Topics

- Rules
              Application (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_rules_application_output.htm)
