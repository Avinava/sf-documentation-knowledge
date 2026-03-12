---
title: "Calculate Taxes Line Item"
domain: chatterapi
topic: calculate-taxes-line-item
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.439Z
estimatedTokens: 291
keywords: [Calculate, Taxes, Line, Item, tax]
---

# Calculate Taxes Line Item

> Calculate tax line item.

# Calculate Taxes Line Item

Calculate tax line item.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| error | Error Response Output | Error code and message. | Big, 58.0 | 58.0 |
| lineId | String | Line ID for the product. | Small, 58.0 | 58.0 |
| netUnitPrice | String | Net unit price for the product. | Small, 58.0 | 58.0 |
| productId | String | ID of the product. | Small, 58.0 | 58.0 |
| success | Boolean | Specifies whether the execution was successful (true) or not (false). | Small, 58.0 | 58.0 |
| taxAdjustments | Tax Adjustment[] | List of tax adjustments. | Small, 58.0 | 58.0 |
| taxInfoList | Calculate Taxes Info[] | List of calculated tax output. | Small, 58.0 | 58.0 |
| totalAdjustmentTaxAmount | String | Total adjustment tax amount. | Small, 58.0 | 58.0 |
| totalLineTaxAmount | String | Total line item tax excluding adjustment taxes. | Small, 58.0 | 58.0 |
| totalPriceTaxAmount | String | Total tax amount including adjustment taxes. | Small, 58.0 | 58.0 |
| totalTieredAdjustment​TaxAmount | String | Total tax amount for tiered adjustments. | Small, 58.0 | 58.0 |

## Related Topics

- Error Response Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_response.htm)
- Tax Adjustment (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_tax_adjustment.htm)
- Calculate Taxes Info (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_calculate_taxes_info.htm)
