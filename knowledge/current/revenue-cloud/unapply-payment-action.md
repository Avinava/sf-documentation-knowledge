---
title: "Unapply Payment Action"
domain: revenue-cloud
topic: unapply-payment-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:04.068Z
estimatedTokens: 515
keywords: [Unapply, Payment, Action, Unapplies, payment, that's, already, applied, invoice, line, crediting, amount, back, line., Special, Access, Rules, Supported, REST, HTTP]
---

# Unapply Payment Action

> Unapplies a payment that's already been applied to an invoice or
            invoice line by crediting the amount back to the payment and the invoice or invoice
            line.

# Unapply Payment Action

Unapplies a payment that's already been applied to an invoice or invoice line by crediting the amount back to the payment and the invoice or invoice line.

If the **Apply Payments to Invoices** setting is enabled, payments can be applied to invoices, which creates the PaymentLineInvoice records of type Applied. If the **Apply Payments to Invoices feature** setting is disabled, payments can be applied to invoice lines, which creates the PaymentLineInvoiceLine records of type Applied.

When payments are unapplied, the PaymentLineInvoice or PaymentLineInvoiceLine records of type Applied has the associated PaymentLineInvoice or PaymentLineInvoiceLine records of type Unapplied.

This action is available in API version 64.0 and later.

## Special Access Rules

This action is available in Enterprise, Unlimited, and Developer Editions where Billing is enabled. To use this action, you need the Payment Ops permission set.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/unapplyPayment

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| description | TypestringDescriptionAdditional details about the payment line invoice or payment line invoice line that's processed to unapply the payment. |
| effectiveDateTime | TypedatetimeDescriptionDate and time to use for unapplying the payment from an invoice or invoice line. |
| recordId | TypeidDescriptionRequiredID of the payment line invoice or payment line invoice line record of type Applied that’s processed to unapply the payment. |

## Outputs

| Output | Details |
| --- | --- |
| recordId | TypeidDescriptionID of the payment line invoice or payment line invoice line record of type Unapplied that the action created. |
| unappliedDateTime | TypedatetimeDescriptionDate and time when the payment was unapplied. |

## Example

POST

This sample request is for the Unapply Payment action.

```

```

This sample response is for the Unapply Payment action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "description": "Unapply payment",
      "effectiveDateTime": "2024-08-11T07:53:15.000Z",
      "recordId": "1PLR000000000dDOAQ"
    }
  ]
}
```

```
{
  "actionName": "unapplyPayment",
  "errors": null,
  "isSuccess": true,
  "outputValues": {
    "recordId": "1PLR000000000dDOAQ",
    "unappliedDateTime": "2024-08-11T08:09:01.000Z"
  },
  "sortOrder": -1,
  "version": 1
}
```
