---
title: "Refund Output"
domain: chatterapi
topic: refund-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.891Z
estimatedTokens: 244
keywords: [Refund, Output, representation]
---

# Refund Output

> Refund output representation.

# Refund Output

Refund output representation.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | ID of the account related to the refund record. | Big, 48.0 | 48.0 |
| amount | Double | Total amount of the refund transaction performed in the payment request. | Big, 48.0 | 48.0 |
| currencyIsoCode | String | Three-letter ISO 4217 currency code associated with the payment group record. | Big, 48.0 | 48.0 |
| effectiveDate | String | Date that the refund becomes effective. | Big, 48.0 | 48.0 |
| id | String | ID of the refund record. | Big, 48.0 | 48.0 |
| refundNumber | String | Number of the refund record that was created as a result of the request processing. | Big, 48.0 | 48.0 |
| requestDate | String | Date when the refund occurred. | Big, 48.0 | 48.0 |
| status | String | Indicates the results of processing the refund transaction in the gateway. | Big, 48.0 | 48.0 |
