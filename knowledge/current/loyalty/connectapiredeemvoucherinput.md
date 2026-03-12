---
title: "ConnectApi.RedeemVoucherInput"
domain: loyalty
topic: connectapiredeemvoucherinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:50.728Z
estimatedTokens: 136
keywords: [ConnectApi.RedeemVoucherInput, Input, representation, redeem, amount, voucher]
---

# ConnectApi.RedeemVoucherInput

> Input representation to redeem amount from a voucher.

# ConnectApi.RedeemVoucherInput

Input representation to redeem amount from a voucher.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| currencyIsoCode | String | Three-letter ISO 4217 currency code of the monetary currency in which the voucher is redeemed. | Optional | 55.0 |
| redeemAmount | Double | The value of the voucher to be redeemed. Specify this amount when the associated voucher definition is partially redeemable and is of the type Fixed Value. | Optional | 53.0 |
