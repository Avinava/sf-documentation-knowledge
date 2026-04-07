---
title: "Update Bill To Contact Action"
domain: revenue-cloud
topic: update-bill-to-contact-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:35:39.646Z
estimatedTokens: 429
keywords: [Inputs, Outputs, Bill, Contact, Action, detail, invoice, ensure, accurate, billing, communication, routing, REST, HTTP]
---

> Update the Bill to Contact detail on an invoice to ensure accurate
            billing communication and routing.

# Update Bill To Contact Action

Update the Bill to Contact detail on an invoice to ensure accurate billing communication and routing.

Specify the invoice ID and the new Bill to Contact detail. Optionally, indicate whether the new contact must be set as the default for future invoices. Use this action to change the contact to be billed on an invoice, for example, when handling a billing dispute.

This action is available in API version 66.0 and later.

## Special Access Rules

The Update Bill To Contact Action is available in Enterprise, Developer, and Unlimited Editions where Dispute Management is enabled in Billing.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/blngSvcUpdateBillToContact

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| invoiceId | TypestringDescriptionID of the invoice whose Bill to Contact detail must be updated. |
| newBill​ToContactId | TypestringDescriptionID of the Bill to Contact record to be updated on the invoice. |
| setAs​Default | TypebooleanDescriptionIndicates whether the new Bill to Contact detail must be set as default for future invoices (true) or not (false). The default value is false. |

## Outputs

| Output | Details |
| --- | --- |
| additional​Information | TypestringDescriptionAny additional information to be included in the response. |
| isSuccess | TypebooleanDescriptionIndicates whether the Bill to Contact detail is updated on the invoice record (true) or not (false). |

## Example

POST

This sample request is for the Update Bill To Contact action.

```

```

This sample response is for the Update Bill To Contact action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "invoiceID": "3ttxx0000000001AAA",
      "newBillToContactid": "003xx000004XYZPAA4",
      "setAsDefault": true
    }
  ]
}
```

```
[
  {
    "actionName": "blngSvcUpdateBillToContact",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "isSuccess": true,
      "additionalInformation": "{"status":"Success","notes":"Default billing contact updated."}"
    },
    "sortOrder": -1,
    "version": 1
  }
]
```
