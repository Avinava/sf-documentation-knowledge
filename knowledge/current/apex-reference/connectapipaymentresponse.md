---
title: "ConnectApi.PaymentResponse"
domain: apex-reference
topic: connectapipaymentresponse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:28.410Z
estimatedTokens: 212
keywords: [ConnectApi.PaymentResponse, Payment, output]
---

# ConnectApi.PaymentResponse

> Payment output.

# ConnectApi.PaymentResponse

Payment output.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| accountId | String | ID of the account related the payment record. | 50.0 |
| amount | Double | Total amount of the payment transaction performed in the payment request. | 50.0 |
| currencyIsoCode | String | Three-letter ISO 4217 currency code associated with the payment output. | 50.0 |
| effectiveDate | Datetime | Date that the payment becomes effective. | 50.0 |
| id | String | ID of the payment record. | 50.0 |
| paymentNumber | String | Number of the payment record created as a result of the request processing. | 50.0 |
| requestDate | Datetime | Date when the payment transaction occurred. | 50.0 |
| status | String | Status of the new payment record. Can be DRAFT, PROCESSED or CANCELLED. | 50.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
