---
title: "Apply Payments and Credits by Rules Action"
domain: revenue-cloud
topic: apply-payments-and-credits-by-rules-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:05.820Z
estimatedTokens: 365
keywords: [Apply, Payments, Credits, Rules, Action, posted, invoices, adhering, REST, HTTP, Inputs, Outputs]
---

# Apply Payments and Credits by Rules Action

> Apply payments and credits to posted invoices by adhering to the specified
        rules.

# Apply Payments and Credits by Rules Action

Apply payments and credits to posted invoices by adhering to the specified rules.

This action uses predefined logic to allocate payments and credits, reducing any manual intervention and errors.

This action is available in API version 66.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/applyPaymentsAndCreditsByRules

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| accountId | TypereferenceDescriptionRequired. The ID of the account to perform the settlement of payments and credits against invoices in adherence with the applied rules. |
| targetDate | TypedateDescriptionOptional. The date used to select invoices and invoice lines with a posted date equal to or later than the target date to apply payments and credits. |

## Outputs

| Output | Details |
| --- | --- |
| rulesApplicationResponse | TypeApex-definedDescriptionThe Apex RulesApplicationResponse record that contains the results of rules application including the list of applied rules, application details, and any errors. |

## Example

POST

Here's a sample request for the Apply Payments and Credits by Rules action.

```

```

Here's a sample success response for the Apply Payments and Credits by Rules action.

```

```

Here's a sample error response for the Apply Payments and Credits by Rules action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "accountId": "001AAC0001NmajhYBB",
      "targetDate": "2025-08-27"
    }
  ]
}
```

```
[
  {
    "actionName": "applyPaymentsAndCreditsByRules",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "rulesApplicationResponse": {
        "rulesApplicationSummary": {
          "totalPaymentApplications": 1,
          "totalCreditMemoApplications": 1,
          "fetchedPaymentsCount": 1,
          "fetchedCreditMemosCount": 1,
          "areAllInvoicesConsidered": true
        },
        "isSuccess": true,
        "errors": null,
        "appliedRules": [
          "Match Balance",
          "Prioritize Highest Balance Invoices"
        ]
      }
    },
    "sortOrder": -1,
    "version": 1
  }
]
```

```
[
  {
    "actionName": "applyPaymentsAndCreditsByRules",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "rulesApplicationResponse": {
        "rulesApplicationSummary": null,
        "isSuccess": false,
        "errors": [
          {
            "message": "We couldn't find eligible invoices to apply rules-based credits and payments. ",
            "errorCode": null
          }
        ],
        "appliedRules": null
      }
    },
    "sortOrder": -1,
    "version": 1
  }
]
```
