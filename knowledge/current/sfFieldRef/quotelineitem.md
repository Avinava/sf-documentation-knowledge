---
title: "QuoteLineItem"
domain: sfFieldRef
topic: quotelineitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:11.142Z
estimatedTokens: 520
keywords: [QuoteLineItem, quote, line, item, member, Product2, products, associated, along, items, API, version, 18.0, later]
---

# QuoteLineItem

> Represents a quote line item, which is a member of the list of Product2
   products associated with a quote, along with other information about those line items on that
   quote. Available in API version 18.0 and later.

# QuoteLineItem

Represents a quote line item, which is a member of the list of Product2 products associated with a quote, along with other information about those line items on that quote. Available in API version 18.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [QuoteLineItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_quotelineitem.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Line Item Description | string |  | 255 |  |  |
| Discount | Discount (Percentage) | percent |  |  | 5 | 2 |
| Id | Quote Line Item ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LineNumber | Line Item Number | string |  | 255 |  |  |
| ListPrice | List Price | currency |  |  | 18 | 2 |
| OpportunityLineItemId | Line Item ID | reference |  | 18 |  |  |
| ParentQuoteLineItemId | Quote Line Item ID | reference |  | 18 |  |  |
| PricebookEntryId | Price Book Entry ID | reference |  | 18 |  |  |
| Product2Id | Product ID | reference |  | 18 |  |  |
| Quantity | Quantity | double |  |  | 12 | 2 |
| QuoteId | Quote ID | reference |  | 18 |  |  |
| ServiceDate | Date | date |  |  |  |  |
| SortOrder | Sort Order | int | 9 |  |  |  |
| Subtotal | Subtotal | currency |  |  | 18 | 2 |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
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
