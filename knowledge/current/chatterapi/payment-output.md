---
title: "Payment Output"
domain: chatterapi
topic: payment-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.252Z
estimatedTokens: 238
keywords: [Payment, Output, representation]
---

# Payment Output

> Payment output representation.

# Payment Output

Payment output representation.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | ID of the account related the payment record. | Big, 48.0 | 48.0 |
| amount | Double | Total amount of the payment transaction performed in the payment request. | Big, 48.0 | 48.0 |
| currencyIsoCode | String | Three-letter ISO 4217 currency code associated with the payment output. | Big, 48.0 | 48.0 |
| effectiveDate | String | Date that the payment becomes effective. | Big, 48.0 | 48.0 |
| id | String | ID of the payment record. | Big, 48.0 | 48.0 |
| paymentNumber | String | Number of the payment record created as a result of the request processing. | Big, 48.0 | 48.0 |
| requestDate | String | Date when the payment transaction occurred. | Big, 48.0 | 48.0 |
| status | String | Status of the payment new payment entity record. | Big, 48.0 | 48.0 |
