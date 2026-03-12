---
title: "Preview Cart to Exchange Order"
domain: api-action
topic: preview-cart-to-exchange-order
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.180Z
estimatedTokens: 386
keywords: [Preview, Cart, Exchange, Order, Generate, summary, record, REST, HTTP, Inputs, Outputs]
---

# Preview Cart to Exchange Order

> Generate preview details of an exchange order for specified order summary, exchange cart
  ID, and reference record ID.

# Preview Cart to Exchange Order

Generate preview details of an exchange order for specified order summary, exchange cart ID, and reference record ID.

To access, you need the following permissions.

-   Salesforce Order Management License or Salesforce B2B Commerce License

This object is available in API version 60.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v59.0/actions/standard/previewCartToExchangeOrder

Formats

JSON, XML

HTTP Methods

GET, HEAD, POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| orderSummaryId | TypeIDDescriptionRequired. The ID of the order summary record associated with the list of exchanges. |
| exchangeCartId | TypeIDDescriptionRequired. The ID of the cart record containing the items for the exchange order. |
| referenceId | TypeIDDescriptionRequired. The ID of the record that's related to the specified order summary. Only IDs from a return order record are supported. |

## Outputs

| Output | Details |
| --- | --- |
| changeBalances | TypestringDescriptionA string that contains the calculated amounts resulting from the exchange order. |
| errors | TypestringDescriptionFollowing a 400 error response, the error objects show information about the error that occurred. Contains a status code, message, and list of fields. |
| isSuccess | TypebooleanDescriptionShows whether the payment sale request was successful. |
| orderSummaryID | TypeIDDescriptionThe ID of the order summary record associated with the list of exchanges. |
