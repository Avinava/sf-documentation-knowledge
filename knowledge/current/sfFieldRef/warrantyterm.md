---
title: "WarrantyTerm"
domain: sfFieldRef
topic: warrantyterm
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:17.024Z
estimatedTokens: 696
keywords: [WarrantyTerm, warranty, terms, defining, labor, parts, expenses, covered, along, any, exchange, options, provided, rectify, issues]
---

# WarrantyTerm

> Represents warranty terms defining the labor, parts, and expenses covered,
      along with any exchange options, provided to rectify issues with products. This object is
    available in API version 50.0 and later.

# WarrantyTerm

Represents warranty terms defining the labor, parts, and expenses covered, along with any exchange options, provided to rectify issues with products. This object is available in API version 50.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [WarrantyTerm](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_warrantyterm.htm "HTML (New Window)") in the Automotive Cloud Developer Guide, Field Service Developer Guide, Manufacturing Cloud Developer Guide, and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Code | Code | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| EffectiveStartDate | Effective Start Date | picklist |  | 40 |  |  |
| ExchangeType | Exchange Type | picklist |  | 40 |  |  |
| Exclusions | Exclusions | textarea |  | 32000 |  |  |
| ExpensesCovered | Expenses Covered | percent |  |  | 5 | 2 |
| ExpensesCoveredDuration | Expenses Covered Duration | int | 4 |  |  |  |
| ExpensesCoveredUnitOfTime | Expenses Covered Unit of Time | picklist |  | 255 |  |  |
| Id | Warranty Term ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsTransferable | Transferable | boolean |  |  |  |  |
| LaborCovered | Labor Covered | percent |  |  | 5 | 2 |
| LaborCoveredDuration | Labor Covered Duration | int | 4 |  |  |  |
| LaborCoveredUnitOfTime | Labor Covered Unit of Time | picklist |  | 255 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PartsCovered | Parts Covered | percent |  |  | 5 | 2 |
| PartsCoveredDuration | Parts Covered Duration | int | 4 |  |  |  |
| PartsCoveredUnitOfTime | Parts Covered Unit of Time | picklist |  | 255 |  |  |
| Pricebook2Id | Price Book ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| WarrantyDuration | Warranty Duration | int | 4 |  |  |  |
| WarrantyTermName | Warranty Term Name | string |  | 255 |  |  |
| WarrantyType | Warranty Type | picklist |  | 40 |  |  |
| WarrantyUnitOfTime | Warranty Unit Of Time | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
