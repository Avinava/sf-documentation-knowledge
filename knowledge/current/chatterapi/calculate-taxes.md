---
title: "Calculate Taxes"
domain: chatterapi
topic: calculate-taxes
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.431Z
estimatedTokens: 182
keywords: [Calculate, Taxes, tax, classes]
---

# Calculate Taxes

> List tax classes.

# Calculate Taxes

List tax classes.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| classTax | Class Taxes | A tax class. | Small, 58.0 | 58.0 |
| error | Error Response Output | Error code and message. | Big, 58.0 | 58.0 |
| lineItems | Calculate Taxes Line Item[] | List of calculate taxes line item. | Small, 58.0 | 58.0 |
| success | Boolean | Specifies whether the execution was successful (true) or not (false). | Small, 58.0 | 58.0 |
| taxLocaleType | String | Tax types of the store. Values are:Gross – Prices include tax.Net – Prices don’t include tax. | Small, 58.0 | 58.0 |
| totalTaxAmount | String | Total tax amount. | Small, 58.0 | 58.0 |

## Related Topics

- Class Taxes (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_class_taxes.htm)
- Error Response Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_response.htm)
- Calculate Taxes Line Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_calculate_taxes_line_item.htm)
