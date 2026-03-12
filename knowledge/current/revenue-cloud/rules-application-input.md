---
title: "Rules Application Input"
domain: revenue-cloud
topic: rules-application-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:08.286Z
estimatedTokens: 150
keywords: [Rules, Application, Input, representation, applying, payments, credits, invoices]
---

# Rules Application Input

> Input representation for applying payments and credits to invoices based on rules.

# Rules Application Input

Input representation for applying payments and credits to invoices based on rules.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | ID of the account to perform the settlement of payments and credits against invoices in adherence with the applied rules. | Required | 66.0 |
| targetDate | String | The date used to select invoices and invoice lines with a posted date equal to or later than the target date to apply payments and credits. | Optional | 66.0 |

## Code Examples

```
{
  "accountId": "001xx000003DGbQAAW",
  "targetDate": "2024-01-15"
}
```
