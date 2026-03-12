---
title: "Payment Sale Action"
domain: api-action
topic: payment-sale-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.168Z
estimatedTokens: 563
keywords: [Payment, Sale, Action, Capture, any, prior, authorization, record, transaction, consists, authorize, made, gateway, time, way]
---

# Payment Sale Action

> Capture a payment without any prior authorization and create a payment record. The
  payment sale transaction consists of an authorize request and a capture request made to the
  payment gateway at the same time. This way, the merchant can request funds to be transferred to
  the merchant account in a single command, with no further action required.

# Payment Sale Action

Capture a payment without any prior authorization and create a payment record. The payment sale transaction consists of an authorize request and a capture request made to the payment gateway at the same time. This way, the merchant can request funds to be transferred to the merchant account in a single command, with no further action required.

To access Commerce Payments resources, you need the following permissions.

-   Salesforce Order Management License or Salesforce B2B Commerce License
-   PaymentsAPIUser user permission. This permission is available with the Salesforce Order Management or B2B Commerce License. Your Salesforce admin assigns it to your user profile.

The payment sale API handles only one payment at a time. Bulk requests aren't supported.

This object is available in API version 54.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v54.0/actions/standard/paymentSale

Formats

JSON

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| amount | TypenumberDescriptionRequired. The amount of the payment sale request. |
| paymentGatewayId | TypeIDDescriptionRequired. The ID of the Salesforce payment gateway record that represents the external payment gateway used for processing the sale request. |
| paymentMethodId | TypeIDDescriptionRequired. The ID of the Salesforce payment method that contains customer payment information. |
| currencyIsoCode | TypestringDescriptionRequired for multicurrency orgs. Three-letter ISO 4217 currency code associated with the payment output. |
| idempotencyKey | TypestringDescriptionOptional. Key used to ensure idempotency and avoid duplicate payments. |

## Outputs

| Output | Details |
| --- | --- |
| actionName | TypestringDescriptionThe name of the action performed. Becomes paymentSale following a Payment Sale action. |
| errors | TypestringDescriptionFollowing a 400 error response, the error objects show information about the error that occurred. Contains a status code, message, and list of fields. |
| isSuccess | TypebooleanDescriptionShows whether the payment sale request was successful. |
| outputValues | TypeIDDescriptionThe ID of the new payment request record. |
