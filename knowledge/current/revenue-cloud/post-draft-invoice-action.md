---
title: "Post Draft Invoice Action"
domain: revenue-cloud
topic: post-draft-invoice-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:03.932Z
estimatedTokens: 380
keywords: [Post, Draft, Invoice, Action, Update, status, invoice, Posted, credit, memo, application., Special, Access, Rules, Supported, REST, HTTP, Inputs, Outputs, Example]
---

# Post Draft Invoice Action

> Update the status of an invoice from Draft to Posted for a credit memo
			application.

# Post Draft Invoice Action

Update the status of an invoice from Draft to Posted for a credit memo application.

This action uses the ID of the draft invoice and triggers an asynchronous process to post the invoice. This action is available in API version 62.0 and later.

## Special Access Rules

The Post Draft Invoice action is available in Enterprise, Unlimited, and Developer Editions where Billing is enabled. To use this action, you need the Billing Operations User permission set.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/postDraftInvoice

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| correlationId | TypestringDescriptionSplunk correlation ID to track the messages that are related to the request and are logged in Splunk by the different services involved in the request. If the ID isn’t specified, the service creates a random Universally Unique Identifier (UUID). |
| invoiceId | TypestringDescriptionRequired.ID of the Draft invoice to be posted. |

## Outputs

| Output | Details |
| --- | --- |
| requestIdentifier | TypestringDescriptionUUID that’s used to track the status of the asynchronous action. |
| statusUrl | TypestringDescriptionURL that’s used to check the status of the API request. |

## Example

POST

This example shows a sample request for the Post Draft Invoice action.

```

```

This example shows a sample response for the Post Draft Invoice action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "invoiceId": "3ttDU00000000iZYAQ"
    }
  ]
}
```

```
{
  "actionName": "postDraftInvoice",
  "errors": null,
  "isSuccess": true,
  "outputValues": {
    "requestIdentifier": "4sFDU00000000652AA",
    "statusUrl": "/services/data/v62.0/sobjects/AsyncOperationTracker/16Pxx0000004NhAEAU"
  }
}
```
