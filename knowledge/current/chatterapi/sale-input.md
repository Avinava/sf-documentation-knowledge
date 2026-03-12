---
title: "Sale Input"
domain: chatterapi
topic: sale-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:12.747Z
estimatedTokens: 513
keywords: [Sale, Input, Payment, consumed, service]
---

# Sale Input

> Payment Sale input consumed by the payment sale
    service.

# Sale Input

Payment Sale input consumed by the payment sale service.

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
| accountId | String | Salesforce account that contains the payment for the sale request. | Optional | 54.0 |
| additionalData | Map<String, String> | Additional data that can be passed with a payment request. This property can include a maximum of five key-value pair entries. Each key and value can contain up to 255 characters. | Optional | 54.0 |
| amount | Double | The amount of the sale. | Required | 54.0 |
| comments | String | Optional comments for the payment sale request. | Optional | 54.0 |
| currencyIsoCode | String | A three-letter ISO 4217 currency code associated with the payment group record. | Required, if multi-currency is enabled | 54.0 |
| effectiveDate | String | The date that the sale request takes effect. | Optional | 54.0 |
| email | String | Email of the client that initiated the request. | Optional | 54.0 |
| idempotencyKey | String | Idempotency key used for the payment request. The key can be in the payload or the header but not both. | Optional | 54.0 |
| ipAddress | String | IP address of the client that made the request. | Optional | 54.0 |
| macAddress | String | MAC address of the client that made the request. | Optional | 54.0 |
| paymentGatewayId | String | The gateway that evaluates the payment sale request. | Required | 54.0 |
| paymentGroup | Payment Group Input | Represents a group of payment requests. | Optional | 54.0 |
| paymentMethod | Sale API Payment Method Input | Represents a payment method for a payment sale transaction. | Required | 54.0 |
| phone | String | Phone number of the client that initiated the request. | Optional | 54.0 |

## Code Examples

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

- Payment Group Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_payment_group_input.htm)
- Sale API Payment Method Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_sale_api_payment_method_input.htm)
