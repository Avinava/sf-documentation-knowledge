---
title: "Payment Authorization, Capture"
domain: chatterapi
topic: payment-authorization-capture
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.102Z
estimatedTokens: 701
keywords: [Payment, Authorization, Capture, authorized]
---

# Payment Authorization, Capture

> Capture an authorized payment.

# Payment Authorization, Capture

Capture an authorized payment.

To access Salesforce Payments resources, you need one of the following permissions:

-   PaymentsAPIUser user permission. This permission is available with the Salesforce Order Management License. Your Salesforce admin assigns it to your user profile.
-   Capture and Reverse Payment user permission. This permission is available with the Salesforce Payment License. Your Salesforce admin assigns it to your user profile.
-   Authorize and Capture Payment user permission. This permission is available with the Salesforce Payment License. Your Salesforce admin assigns it to your user profile.

Resource

```

```

The authorizationId is a unique ID associated with the payment authorization record.

Available version

48.0

HTTP methods

POST

Request body for POST

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
| accountId | String | ID of the account that must be linked to this capture request. | Optional | 48.0 |
| additionalData | Map<String, String> | Allows users to enter additional data, if needed for a payment request. The additionalData object consists of entries, each of which includes a key and value. Supports up to five key-value pairs. Each key and each value can contain up to 255 characters. | Optional | 48.0 |
| amount | Double | Amount that must be captured. | Required | 48.0 |
| clientContext | String | Provides context for payment APIs. Used for a payment caller to reestablish context. | Optional | 49.0 |
| comments | String | Comments for payment capture request. | Optional | 48.0 |
| effectiveDate | String | Date that the payment becomes effective. | Optional | 48.0 |
| email | String | Email of the client that initiated the request. | Optional | 48.0 |
| idempotencyKey | String | Idempotency key used for the payment request. Can be provided in the payload or the header, but not in both places at once. | Optional | 48.0 |
| ipAddress | String | IP address of the client who made the request. | Optional | 48.0 |
| macAddress | String | MAC address of the client who made the request. | Optional | 48.0 |
| paymentGroup | Payment Group Input | Payment group details associated with the payment request. | Optional | 48.0 |
| phone | String | Phone number of the client that initiated the request. | Optional | 48.0 |

Response body for POST

[Capture Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_capture_output.htm "Capture output representation.")

## Code Examples

```
/commerce/payments/authorizations/authorizationId/captures
```

```
{
{
  "accountId":"",
  "amount": 150,
  "comments": "capture request",
  "paymentGroup":{
      "createPaymentGroup":"true",
      "sourceObjectId":"",
      "currencyIsoCode":"USD"
  },
{
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
  "idempotencyKey":"qw",
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
- Capture Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_capture_output.htm)
