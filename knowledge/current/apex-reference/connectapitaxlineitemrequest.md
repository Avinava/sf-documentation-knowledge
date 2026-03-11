---
title: "ConnectApi.TaxLineItemRequest"
domain: apex-reference
topic: connectapitaxlineitemrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.244Z
keywords: [ConnectApi.TaxLineItemRequest]
---

# ConnectApi.TaxLineItemRequest

# ConnectApi.TaxLineItemRequest

A list of line items passed to the tax engine for tax calculation.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| addresses | ConnectApi.​TaxAddresses​Request | Addresses, including the Bill To address, Ship From address, Ship To address, and Sold To address. | Optional | 55.0 |
| amount | Double | Amount of the line item. | Optional | 55.0 |
| description | String | Description of the line item. | Optional | 55.0 |
| effectiveDate | Datetime | Date to apply the tax calculation to the line item. | Optional | 55.0 |
| legalEntity | String | Legal entity that's related to the tax treatment. | Optional | 63.0 |
| lineNumber | String | Line number of the line item. | Optional | 55.0 |
| productCode | String | Product code of the line item. | Optional | 55.0 |
| productId | String | ID of the product. | Optional | 63.0 |
| productSKU | String | Unique identifier of a product that can be used to identify products that are exempted from tax. | Optional | 64.0 |
| quantity | Double | Quantity of the line item. | Optional | 55.0 |
| taxCode | String | Tax code for the line item. | Optional | 55.0 |
| unitPrice | Double | Unit price of the product. | Optional | 63.0 |