---
title: "Payment Authorization"
domain: chatterapi
topic: payment-authorization
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.093Z
estimatedTokens: 690
keywords: [Payment, Authorization, Authorize]
---

# Payment Authorization

> Authorize a payment.

# Payment Authorization

Authorize a payment.

To access Salesforce Payments resources, you need one of the following permissions:

-   PaymentsAPIUser user permission. This permission is available with the Salesforce Order Management License & B2B Community License. Your Salesforce admin assigns it to your user profile.
-   Authorize Payment user permission. This permission is available with the Salesforce Payment License. Your Salesforce admin assigns it to your user profile.
-   Authorize and Capture Payment user permission. This permission is available with the Salesforce Payment License. Your Salesforce admin assigns it to your user profile.
-   Make Payments user permission. This permission is available with the Salesforce Payment License. Your Salesforce admin assigns it to your buyer profile.

Resource

```

```

Available version

49.0

HTTP methods

POST

Request body for POST

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

Supports JSON only. XML isn’t supported.

JSON example (without idempotency)

```

```

JSON example (idempotency key in JSON payload)

```

```

JSON example (idempotency key in header)

```

```

Header

Name: sfdc-Payments-Idempotency-Key

Data Type: String

Max Length: 255

Example:

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | Salesforce account that contains the payment transaction being authorized. | Required | 49.0 |
| amount | Double | Authorization amount. | Required | 49.0 |
| comments | String | Optional comments for the payment authorization. | Optional | 49.0 |
| currencyIsoCode | String | Three-letter ISO 4217 currency code associated with the payment group record. | Required, if multicurrency is enabled | 49.0 |
| effectiveDate | String | Date that the authorization will be applied to the transaction. | Required | 49.0 |
| idempotencyKey | String | Idempotency key used for the payment request. Can be provided in the payload or the header, but not in both places at once. | Optional | 49.0 |
| paymentGatewayId | String | Payment gateway that processes the authorization. | Required | 49.0 |
| paymentGroup | PaymentGroupInput​Representation | Payment group for the authorization. The payload must reference either a paymentGroup or a paymentGroupId, but not both. | Optional | 49.0 |
| paymentMethod | AuthApiPayment​MethodInput​Representation | Payment method used in the payment gateway for the authorization transaction. | Required | 49.0 |

Response body for POST

[Authorization Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_authorization_output.htm "Payment authorization output representation.")

## Code Examples

```
/commerce/payments/authorizations
```

```
{
"accountId":"000000",
"amount":"5000",
"comments":"Authorization for $5000",
"currencyIsoCode":"USD",
"effectiveDate":"15-01-2020",
"paymentGatewayId":"0000000",

"paymentGroup":{
   "createPaymentGroup":"true",
   "sourceObjectId":"",
   "currencyIsoCode":"USD"
   },

"paymentMethod": {
   "address": "123 Test Street, San Francisco, CA, 94105",
   "cardPaymentMethod": "",
   "id": "0000000" ,
   "saveForFuture": "false"
 }
}
```

```
{
 "accountId":"000000",
 "amount":"5000",
 "idempotencyKey":"qw",
 "comments":"Authorization for $5000",
 "currencyIsoCode":"USD",
 "effectiveDate":"15-01-2020",
 "paymentGatewayId":"0000000",

 "paymentGroup":{
   "createPaymentGroup":"true",
   "sourceObjectId":"",
   "currencyIsoCode":"USD"
 },
 "paymentMethod": {
   "address": "123 Test Street, San Francisco, CA, 94105",
   "cardPaymentMethod": "",
   "id": "0000000" ,
   "saveForFuture": "false"
 }
}
```

```
{
 "accountId":"000000",
 "amount":"5000",
 "comments":"Authorization for $5000",
 "currencyIsoCode":"USD",
 "effectiveDate":"15-01-2020",
 "paymentGatewayId":"0000000",
 "paymentGroup":{ "createPaymentGroup":"true", "sourceObjectId":"", "currencyIsoCode":"USD" },
 "paymentMethod": {
 "address": "123 Test Street,San Francisco, CA, 94105",
 "cardPaymentMethod": "",
 "id": "0000000" ,
 "saveForFuture": "false"
 }
}
```

```
Content-Type: application/json; charset=UTF-8
Accept: application/json
sfdc-Payments-Idempotency-Key: UniqueIdempotencyKey
```

## Related Topics

- PaymentGroupInput​Representation (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_payment_group_input.htm)
- AuthApiPayment​MethodInput​Representation (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_auth_api_payment_method_input.htm)
- Authorization Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_authorization_output.htm)
