---
title: "OpportunityLineItem"
domain: sfFieldRef
topic: opportunitylineitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:05.533Z
estimatedTokens: 476
keywords: [OpportunityLineItem, opportunity, line, item, member, Product2, products, associated]
---

# OpportunityLineItem

> Represents an opportunity line item, which is a member of the list
			of Product2 products associated with an Opportunity.

# OpportunityLineItem

Represents an opportunity line item, which is a member of the list of Product2 products associated with an Opportunity.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [OpportunityLineItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_opportunitylineitem.htm "HTML (New Window)") in the Design Registration Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Line Description | string |  | 255 |  |  |
| Id | Line Item ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| ListPrice | List Price | currency |  |  | 18 | 2 |
| Name | Opportunity Product Name | string |  | 376 |  |  |
| OpportunityId | Opportunity ID | reference |  | 18 |  |  |
| PricebookEntryId | Price Book Entry ID | reference |  | 18 |  |  |
| Product2Id | Product ID | reference |  | 18 |  |  |
| ProductCode | Product Code | string |  | 255 |  |  |
| Quantity | Quantity | double |  |  | 12 | 2 |
| ServiceDate | Date | date |  |  |  |  |
| SortOrder | Sort Order | int | 9 |  |  |  |
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
