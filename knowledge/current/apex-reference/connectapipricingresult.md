---
title: "ConnectApi.PricingResult"
domain: apex-reference
topic: connectapipricingresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.628Z
keywords: [ConnectApi.PricingResult]
---

# ConnectApi.PricingResult

# ConnectApi.PricingResult

Product pricing result.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| currencyIsoCode | String | Three-letter ISO 4217 currency code associated with the product. | 49.0 |
| error | ConnectApi.​ErrorResponse | Error code and message. | 49.0 |
| pricingLine​ItemResults | List<ConnectApi.​PricingResultLineItem> | Pricing result line Items. | 49.0 |
| success | Boolean | Specifies whether the execution was successful (true) or not (false). | 49.0 |