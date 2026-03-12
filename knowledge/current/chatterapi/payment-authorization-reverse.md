---
title: "Payment Authorization, Reverse"
domain: chatterapi
topic: payment-authorization-reverse
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.110Z
estimatedTokens: 656
keywords: [Payment, Authorization, Reverse, authorized]
---

# Payment Authorization, Reverse

> Reverse an authorized payment.

# Payment Authorization, Reverse

Reverse an authorized payment.

To access Salesforce Payments resources, you need one of the following permissions:

-   PaymentsAPIUser user permission. This permission is available with the Salesforce Order Management License. Your Salesforce admin assigns it to your user profile.
-   Capture and Reverse Payment user permission. This permission is available with the Salesforce Payment License. Your Salesforce admin assigns it to your user profile.

Resource

```

```

Available version

51.0

HTTP methods

POST

Request body for POST

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

Supports JSON only. XML is not supported.

JSON example (without idempotency key)

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
| accountId | String | Account for the payment authorization reversal. Must match the payment authorization's account. | Optional | 51.0 |
| additionalData | Map<String, String> | Allows users to enter additional data, if needed for a payment request. The additionalData object consists of entries, each of which includes a key and value. Supports up to five key-value pairs. Each key and each value can contain up to 255 characters. | Optional | 51.0 |
| amount | Double | Amount of adjustment applied to the payment authorization. | Required | 51.0 |
| comments | String | Users can add comments to provide additional details about a record. Maximum of 1,000 characters. | Optional | 51.0 |
| effectiveDate | String | Date that the adjustment takes effect on the authorization. | Required | 51.0 |
| email | String | Email of the client that initiated the request. | Optional | 51.0 |
| idempotencyKey | String | Idempotency key used for the payment request. Can be provided in the payload or the header, but not in both places at once. | Optional | 51.0 |
| ipAddress | String | IP address of the client who made the request. | Optional | 51.0 |
| macAddress | String | MAC address of the client who made the request. | Optional | 51.0 |
| phone | String | Phone number of the client that initiated the request. | Optional | 51.0 |

Response body for POST

[Authorization Reversal Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_auth_reversal_output.htm "Authorization reversal output representation.")

## Code Examples

```
/commerce/payments/authorizations/authorizationId/reversals
```

```
"paymentAuthReversal": {
  "accountId": "0000000032",  
  "amount": "19.39",
  "effectiveDate": "2020-11-02T08:59:59+08:00"
}
```

```
{
"accountId":"",
"amount":"5000",
"idempotencyKey":"qw",
"comments":"Sale of 20 renewed licenses",
"currencyIsoCode:"USD",
"effectiveDate":"05-01-2020",
"paymentGatewayId":"0000000",
"paymentGroup":"",
"paymentMethod":"SamplePaymentMethod"
}
```

```
{
"accountId":"",
"amount":"5000",
"comments":"Sale of 20 renewed licenses",
"currencyIsoCode:"USD",
"effectiveDate":"05-01-2020",
"paymentGatewayId":"0000000",
"paymentGroup":"",
"paymentMethod":"SamplePaymentMethod"
}
```

```
Content-Type: application/json; charset=UTF-8
Accept: application/json
sfdc-Payments-Idempotency-Key: UniqueIdempotencyKey
```

## Related Topics

- Authorization Reversal
              Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_auth_reversal_output.htm)
