---
title: "Rules Application"
domain: revenue-cloud
topic: rules-application
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.413Z
estimatedTokens: 253
keywords: [Rules, Application, Output, representation, details, rules, application.]
---

# Rules Application

> Output representation of the details of rules application.

# Rules Application

Output representation of the details of rules application.

JSON example

This example shows the rules application response.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| isSuccess | Boolean | Indicates whether the rules are applied (true) or not (false). | Big, 66.0 | 66.0 |
| rulesApplication​Summary | Rules Application Summary | Summary of the application rule. This includes the number of payments and credit memos for the account, the total number of payments and credit memos that are applied to invoices, and whether all invoices for an account are considered (true) or not (false). | Big, 66.0 | 66.0 |
| applied​Rules | String[] | Rules that were applied. Valid values are:Match IDMatch BalancePrioritize Highest Balance InvoicesPrioritize Oldest Invoices | Big, 66.0 | 66.0 |
| errors | Rules Application Error[] | Details of the errors if the API request was unsuccessful. | Big, 66.0 | 66.0 |

## Code Examples

```
{
  "isSuccess": true,
  "rulesApplicationSummary": {
    "fetchedPaymentsCount": 250,
    "fetchedCreditMemosCount": 250,
    "totalPaymentApplications": 250,
    "totalCreditMemoApplications": 200,
    "areAllInvoicesConsidered": true
  },
  "appliedRules": [
    "Match ID",
    "Match Balance"
  ],
  "errors": []
}
```

## Related Topics

- Rules Application Summary (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_rules_application_summary_output.htm)
- Rules Application Error (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_rules_application_error_output.htm)
