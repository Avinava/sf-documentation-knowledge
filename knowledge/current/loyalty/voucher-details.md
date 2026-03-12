---
title: "Voucher Details"
domain: loyalty
topic: voucher-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.740Z
estimatedTokens: 255
keywords: [Voucher, that's, issued, customer]
---

# Voucher Details

> The details of the voucher that's issued to the customer.

# Voucher Details

The details of the voucher that's issued to the customer.

JSON example

This example shows a sample response.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| discountPercent | Integer | Discount percentage associated with the voucher. | Big, 65.0 | 65.0 |
| effectiveDate | String | Date when the voucher goes into effect. | Big, 65.0 | 65.0 |
| expirationDate | String | Date on which the voucher expires. | Big, 65.0 | 65.0 |
| faceValue | Double | Value of the voucher. | Big, 65.0 | 65.0 |
| productId | String | The ID of the product in the voucher issued. | Big, 65.0 | 65.0 |
| promotionId | String | The ID of the promotion associated with the voucher. | Big, 65.0 | 65.0 |
| voucherCode | String | Code of the voucher issued. | Big, 65.0 | 65.0 |
| voucherDefinitionName | String | Name of the voucher definition. | Big, 65.0 | 65.0 |
| voucherId | String | The ID of the voucher issued. | Big, 65.0 | 65.0 |

## Code Examples

```
"voucherIssuedList": [
        {
          "discountPercent":10,
          "effectiveDate": "2025-10-09T00:00:00.000Z",
          "expirationDate": "2025-10-10T00:00:00.000Z",
          "faceValue": 100,
          "productId":"01txx0000006iTsAAI",
          "promotionId": "0c8SB000000HASn",
          "voucherCode": "SALE-4F8G-RT2P",
          "voucherDefinitionName": "$100 off",
          "voucherId": "0kDSB0000000LNp"
        }
      ]
```
