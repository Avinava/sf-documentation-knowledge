---
title: "Payment Authorization Output"
domain: chatterapi
topic: payment-authorization-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.218Z
estimatedTokens: 273
keywords: [Payment, Authorization, Output, representation]
---

# Payment Authorization Output

> Payment authorization output representation.

# Payment Authorization Output

Payment authorization output representation.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | Salesforce account for the payment authorization. | Big, 49.0 | 49.0 |
| amount | Double | Amount that the gateway authorized for the payment transaction. | Big, 49.0 | 49.0 |
| currencyIsoCode | String | Three-letter ISO 4217 currency code associated with the payment group record. | Big, 49.0 | 49.0 |
| effectiveDate | String | Date that the authorization becomes effective. | Big, 49.0 | 49.0 |
| expirationDate | String | Date that the authorization expires. | Big, 49.0 | 49.0 |
| id | String | ID of the payment authorization record. | Big, 49.0 | 49.0 |
| paymentAuthorizationNumber | String | System-defined number for the payment authorization record. | Big, 49.0 | 49.0 |
| requestDate | String | Date that the authorization occurred. | Big, 49.0 | 49.0 |
| status | String | Status of the payment authorization as returned by the gateway. | Big, 49.0 | 49.0 |
