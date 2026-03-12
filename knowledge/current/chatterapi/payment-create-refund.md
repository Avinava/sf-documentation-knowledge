---
title: "Payment, Create Refund"
domain: chatterapi
topic: payment-create-refund
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.118Z
estimatedTokens: 696
keywords: [Payment, Refund]
---

# Payment, Create Refund

> Create a refund for a payment.

# Payment, Create Refund

Create a refund for a payment.

To access Salesforce Payments resources, you need one of the following permissions:

-   PaymentsAPIUser user permission. This permission is available with the Salesforce Order Management License. Your Salesforce admin assigns it to your user profile.
-   Refund Payment user permission. This permission is available with the Salesforce Payments License. Your Salesforce admin assigns it to your user profile.

Resource

```

```

The paymentId parameter represents a payment record.

Available version

48.0

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
| accountId | String | ID of the account which must be linked to this referenced refund request. | Optional | 48.0 |
| additionalData | Map<String, String> | Allows users to enter additional data, if needed a payment request. The additionalData object consists of entries, each of which includes a key and value. Supports up to five key-value pairs. Each key and each value can contain up to 255 characters. | Optional | 48.0 |
| amount | Double | Amount that must be refunded. | Required | 48.0 |
| clientContext | String | Provides context for payment APIs. Used for a payment caller to reestablish context. | Optional | 49.0 |
| comments | String | Comments for the refund. | Optional | 48.0 |
| effectiveDate | String | Date that the refund becomes effective. | Optional | 48.0 |
| email | String | Email of the client that initiated the request. | Optional | 48.0 |
| idempotencyKey | String | Idempotency key used for the payment request. Can be provided in the payload or the header, but not in both places at once. | Optional | 48.0 |
| ipAddress | String | IP address of the client that made the request. | Optional | 48.0 |
| macAddress | String | MAC address of the client that made the request. | Optional | 48.0 |
| paymentGroup | Payment Group Input | Payment group details associated with the refund request. | Optional | 48.0 |
| phone | String | Phone number of the client that initiated the request. | Optional | 48.0 |

Response body for POST

[Referenced Refund Service Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_referenced_refund_service_output.htm "Response received as part of the referenced refund service.")

## Code Examples

```
/commerce/payments/payments/paymentId/refunds
```

```
{
  "accountId":"",
  "amount": 150,
  "comments": "refund request",
  "paymentGroup":{
      "createPaymentGroup":"true",
      "sourceObjectId":"",
      "currencyIsoCode":"USD"
  },
  "effectiveDate":"2019-10-18T11:32:27.000Z",
  "ipAddress": "202.95.77.70",
  "macAddress": "00-14-22-01-23-45",
  "phone": "100-456-67",
  "email": "test@ccs.org",
  "additionalData":{
      "key1":"value1",
      "key2":"value2",
      "key3":"value3",
      "key4":"value4",
      "key5":"value5"
    }
}
```

```
{
  "accountId":"",
  "amount": 150,
  "idempotencyKey":"UniqueIdempotencyKey",
  "comments": "capture request",
  "paymentGroup":{
      "createPaymentGroup":"true",
      "sourceObjectId":"",
      "currencyIsoCode":"USD"
  },
  "effectiveDate":"2019-10-18T11:32:27.000Z",
  "ipAddress": "202.95.77.70",
  "macAddress": "00-14-22-01-23-45",
  "phone": "100-456-67",
  "email": "test@ccs.org",
  "additionalData":{
      "key1":"value1",
      "key2":"value2",
      "key3":"value3",
      "key4":"value4",
      "key5":"value5"
    }
}
```

```
{
  "accountId":"",
  "amount": 150,
  "comments": "capture request",
  "paymentGroup":{
      "createPaymentGroup":"true",
      "sourceObjectId":"",
      "currencyIsoCode":"USD"
  },
  "effectiveDate":"2019-10-18T11:32:27.000Z",
  "ipAddress": "202.95.77.70",
  "macAddress": "00-14-22-01-23-45",
  "phone": "100-456-67",
  "email": "test@ccs.org",
  "additionalData":{
      "key1":"value1",
      "key2":"value2",
      "key3":"value3",
      "key4":"value4",
      "key5":"value5"
    }
}
```

```
Content-Type: application/json; charset=UTF-8
Accept: application/json
sfdc-Payments-Idempotency-Key: UniqueIdempotencyKey
```

## Related Topics

- Payment Group Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_payment_group_input.htm)
- Referenced Refund Service Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_referenced_refund_service_output.htm)
