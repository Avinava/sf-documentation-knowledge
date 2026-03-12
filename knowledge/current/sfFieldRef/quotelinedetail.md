---
title: "QuoteLineDetail"
domain: sfFieldRef
topic: quotelinedetail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:11.114Z
estimatedTokens: 407
keywords: [QuoteLineDetail, quantity, price, detail, quote, line, item, API, version, 60.0, later]
---

# QuoteLineDetail

> Represents information about the quantity and price detail of a quote line
         item. This object is available in API version 60.0 and later.

# QuoteLineDetail

Represents information about the quantity and price detail of a quote line item. This object is available in API version 60.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see QuoteLineDetail in the Quote and Order Capture Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BillingReference | Billing Reference | string |  | 80 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Quote Line Detail ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LineNumber | Line Number | int | 9 |  |  |  |
| Name | Name | string |  | 255 |  |  |
| NetUnitPrice | Net Unit Price | currency |  |  | 18 | 2 |
| PriceWaterfallIdentifier | Price Waterfall Identifier | string |  | 80 |  |  |
| Quantity | Quantity | double |  |  | 12 | 2 |
| QuoteLineItemId | Quote Line Item ID | reference |  | 18 |  |  |
| ReferenceDate | Reference Date | date |  |  |  |  |
| ReferenceNumber | Reference Number | string |  | 80 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalLineAmount | Total Line Amount | currency |  |  | 18 | 2 |
| TotalPrice | Total Price | currency |  |  | 18 | 2 |
| UnitPrice | Sales Price | currency |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
