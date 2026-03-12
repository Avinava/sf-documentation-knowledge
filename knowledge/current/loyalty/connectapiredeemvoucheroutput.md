---
title: "ConnectApi.RedeemVoucherOutput"
domain: loyalty
topic: connectapiredeemvoucheroutput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:50.777Z
estimatedTokens: 133
keywords: [ConnectApi.RedeemVoucherOutput, Output, representation, voucher, redemption]
---

# ConnectApi.RedeemVoucherOutput

> Output representation of a voucher redemption.

# ConnectApi.RedeemVoucherOutput

Output representation of a voucher redemption.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| remainingAmount | Double | The voucher value after redemption.NoteIf the complete value of the voucher is redeemed, the remaining amount is zero. | 53.0 |
| currencyIsoCode | String | Three-letter ISO 4217 currency code of the remaining voucher value.NoteIf multicurrency isn’t enabled, the currency code is set to the default currency code of an org. | 56.0 |
