---
title: "Create Order From Quote Action"
domain: revenue-cloud
topic: create-order-from-quote-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:03.687Z
estimatedTokens: 211
keywords: [Create, Order, Quote, Action, order, quote, record., Special, Access, Rules, Supported, REST, HTTP, Inputs, Outputs, Example]
---

# Create Order From Quote Action

> Create an order from a quote record.

# Create Order From Quote Action

Create an order from a quote record.

This action is available in API version 60.0 and later.

## Special Access Rules

The Create Order From Quote action is available in Enterprise, Unlimited, and Developer Editions of Revenue Cloud.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/createOrderFromQuote

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| quoteRecordId | TypedatetimeDescriptionRequired.ID of the quote record. |

## Outputs

| Output | Details |
| --- | --- |
| requestId | TypestringDescriptionID of the request. |

## Example

POST

This sample request is for the Create Order From Quote action.

```

```

This sample response is for the Create Order From Quote action.

```

```

## Code Examples

```
{
    "inputs": [
        {
        "quoteRecordId": "0Q0D200000000DhKAI"
        }
    ]
}
```

```
[
  {
    "actionName": "createOrderFromQuote",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "orderNumber": "00000122",
      "orderId": "801oB000000DCrNQAW"
    },
    "sortOrder": -1,
    "version": 1
  }
]
```
