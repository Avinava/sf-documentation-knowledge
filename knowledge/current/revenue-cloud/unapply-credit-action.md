---
title: "Unapply Credit Action"
domain: revenue-cloud
topic: unapply-credit-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:04.020Z
estimatedTokens: 433
keywords: [Unapply, Credit, Action, credit, memo, line, invoice, respectively., Special, Access, Rules, Supported, REST, HTTP, Inputs, Outputs, Example]
---

# Unapply Credit Action

> Unapply a credit memo or credit memo line from an invoice or invoice
			line, respectively.

# Unapply Credit Action

Unapply a credit memo or credit memo line from an invoice or invoice line, respectively.

This action unapplies the credit from an invoice or invoice line. This process involves crediting the applied amount of the credit memo invoice application or credit memo line invoice line record to the related credit memo or credit memo line and invoice or invoice line.

This action is available in API version 62.0 and later.

## Special Access Rules

The Apply Credit action is available in Enterprise, Developer, and Unlimited Editions where Billing is enabled. To use this action, you need the Credit Memo Operations User permission set.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/unapplyCredit

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| effectiveDate | TypestringDescriptionDate when the credit is unapplied from an invoice or invoice line. |
| description | TypestringDescriptionAdditional details about the credit memo invoice application or credit memo line invoice line record of type Applied that’s processed. |
| recordId | TypestringDescriptionRequired. ID of the credit memo invoice application or credit memo line invoice line record of type Applied that’s processed to unapply the credit. |

## Outputs

| Output | Details |
| --- | --- |
| recordId | TypestringDescriptionID of the credit memo invoice application or credit memo line invoice line record of type Unapplied that the action created. |

## Example

POST

This example shows a sample request for the Unapply Credit action.

```

```

This example shows a sample response for the Unapply Credit action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "recordId": "4sFDU000000005g2AA",
      "description": "Unapplied credit memo from an invoice",
      "effectiveDate": "2024-08-27"
    }
  ]
}
```

```
{
    "actionName": "unapplyCredit",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outputValues": {
      "recordId": "4sFDU00000000602AA"
    },
    "sortOrder": -1,
    "version": 1
  }
```
