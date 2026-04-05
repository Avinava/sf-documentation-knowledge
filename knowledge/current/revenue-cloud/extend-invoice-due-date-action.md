---
title: "Extend Invoice Due Date Action"
domain: revenue-cloud
topic: extend-invoice-due-date-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-05T00:23:11.437Z
estimatedTokens: 348
keywords: [Extend, Invoice, Due, Date, Action, accommodate, payment, extensions, resolve, billing, disputes, Special, Access, Rules, REST]
---

# Extend Invoice Due Date Action

> Update the due date on an invoice to accommodate payment extensions
            or resolve billing disputes.

# Extend Invoice Due Date Action

Update the due date on an invoice to accommodate payment extensions or resolve billing disputes.

Specify the invoice ID and the revised due date to adjust the payment timeline. Use this action to extend or change the due date on an invoice.

This action is available in API version 66.0 and later.

## Special Access Rules

The Extend Invoice Due Date Action is available in Enterprise, Developer, and Unlimited Editions where Dispute Management is enabled in Billing.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/blngSvcExtendInvoiceDueDate

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| invoiceId | TypestringDescriptionID of the invoice whose due date must be revised. |
| revisedDue​DateTime | TypedateDescriptionDate and time that’s to be updated as the new due date on the invoice. |

## Outputs

| Output | Details |
| --- | --- |
| additional​Information | TypestringDescriptionAny additional information to be included in the response. |
| isSuccess | TypebooleanDescriptionIndicates whether the due date is updated on the invoice record (true) or not (false). |

## Example

POST

This sample request is for the Extend Invoice Due Date action.

```

```

This sample response is for the Extend Invoice Due Date action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "invoiceID": "801xx000003GYexAAG",
      "revisedDueDate": "2025-03-31"
    }
  ]
}
```

```
[
  {
    "actionName": "blngSvcExtendInvoiceDueDate",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "isSuccess": true,
      "additionalInformation": "{"status":"Due date updated successfully"}"
    },
    "sortOrder": -1,
    "version": 1
  }
]
```
