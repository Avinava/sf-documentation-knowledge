---
title: "Apply Credit Action"
domain: revenue-cloud
topic: apply-credit-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:06.117Z
estimatedTokens: 441
keywords: [Apply, Credit, Action, memo, line, invoice, respectively, Special, Access, Rules, REST, HTTP, Inputs, Outputs]
---

# Apply Credit Action

> Apply a credit memo or credit memo line to an invoice or invoice
			line, respectively.

# Apply Credit Action

Apply a credit memo or credit memo line to an invoice or invoice line, respectively.

This action credits the amount of the credit memo or credit memo line to the corresponding invoice or invoice line, reducing both their balances.

This action is available in API version 62.0 and later.

## Special Access Rules

The Apply Credit action is available in Enterprise, Developer, and Unlimited Editions where Billing is enabled. To use this action, you need the Credit Memo Operations User permission set.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/applyCredit

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| appliedCreditAmount | TypedoubleDescriptionRequired.Credit amount applied to an invoice or invoice line. |
| creditSourceRecordId | TypestringDescriptionRequired.ID of the credit memo or credit memo line that’s applied to an invoice or invoice line. |
| creditTargetRecordId | TypestringDescriptionRequired.ID of the invoice or invoice line record that the credit is applied to. |
| description | TypestringDescriptionAdditional details about the credit memo or credit memo line to be applied to an invoice or invoice line. |
| effectiveDate | TypestringDescriptionDate to use for applying the credit memo to an invoice or invoice line. |

## Outputs

| Output | Details |
| --- | --- |
| recordId | TypestringDescriptionID of the credit memo invoice application or credit memo line invoice line record of type Applied that the action created. |

## Example

POST

This example shows a sample request for the Apply Credit action.

```

```

This example shows a sample response for the Apply Credit action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "appliedCreditAmount": 20,
      "creditTargetRecordId": "3ttDU00000000iZYAQ",
      "creditSourceRecordId": "50gDU000000007NYAQ",
      "description": "Applied credit memo to an invoice",
      "effectiveDate": "2024-08-27"
    }
  ]
}
```

```
{
  "actionName": "applyCredit",
  "errors": null,
  "invocationId": null,
  "isSuccess": true,
  "outputValues": {
    "recordId": "4sFDU00000000652AA"
  },
  "sortOrder": -1,
  "version": 1
}
```
