---
title: "Submit Exchange Order"
domain: api-action
topic: submit-exchange-order
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.225Z
estimatedTokens: 543
keywords: [Submit, Exchange, Order, Submits, REST, HTTP, Inputs, Outputs]
---

# Submit Exchange Order

> Submits an exchange order based on the specified information.

# Submit Exchange Order

Submits an exchange order based on the specified information.

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
| exchangeCartId | TypeIDDescriptionRequired. The ID of the cart record containing the items in the exchange order. |
| orderNumber | TypeIDDescriptionOptional. Order number for the created exchange order summary. |
| orderSummaryId | TypeIDDescriptionRequired. The ID of the order summary record associated with the list of exchanges. |
| paymentInfoInputs | TypeCollectionDescriptionOptional. A collection of Apex ConnectApi.PaymentInfoInputRepresentation records, each containing payment details when the exchange order amount is greater than the original order amount. |
| referenceId | TypeIDDescriptionRequired. The ID of the record that's related to the specified order summary. Only IDs from a return order record are supported. |
| sequenceList | TypeCollectionDescriptionOptional. A collection of Apex ConnectApi.SequenceOrderPaymentSummaryInputRepresentation records to reserve a balance from. Each record contains an order summary payment ID and an amount. |

## Outputs

| Output | Details |
| --- | --- |
| changeBalances | TypestringDescriptionA string that contains the calculated amounts resulting from the exchange order. |
| errors | TypestringDescriptionFollowing a 400 error response, the error objects show information about the error that occurred. Contains a status code, message, and list of fields. |
| exchangeOrderSummaryId | TypeIDDescriptionThe ID of the order summary record associated with the list of exchanges. |
| isSuccess | TypebooleanDescriptionThe ID of the order summary record created for the exchanges. |
| orderSummaryID | TypeIDDescriptionThe ID of the order summary record associated with the list of exchanges. |
