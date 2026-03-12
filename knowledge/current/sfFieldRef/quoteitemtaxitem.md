---
title: "QuoteItemTaxItem"
domain: sfFieldRef
topic: quoteitemtaxitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:11.106Z
estimatedTokens: 356
keywords: [QuoteItemTaxItem, tax, applied, quote, line, item, API, version, 55.0, later]
---

# QuoteItemTaxItem

> The tax that is applied to a quote line item. This object is available
      in API version 55.0 and later.

# QuoteItemTaxItem

The tax that is applied to a quote line item. This object is available in API version 55.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [QuoteItemTaxItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_quoteitemtaxitem.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Amount | Amount | currency |  |  | 18 | 2 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 2000 |  |  |
| Id | Quote Item Tax Item ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Tax Name | string |  | 255 |  |  |
| QuoteLineItemId | Quote Line Item ID | reference |  | 18 |  |  |
| Rate | Rate | percent |  |  | 5 | 2 |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TaxEffectiveDate | Effective Date | date |  |  |  |  |
| Type | Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
