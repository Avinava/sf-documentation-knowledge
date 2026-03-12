---
title: "Authorization Reversal Input"
domain: chatterapi
topic: authorization-reversal-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.030Z
estimatedTokens: 455
keywords: [Authorization, Reversal, Input, consumed, service]
---

# Authorization Reversal Input

> Authorization reversal input consumed by authorization reversal
      service.

# Authorization Reversal Input

Authorization reversal input consumed by authorization reversal service.

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

## Code Examples

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
