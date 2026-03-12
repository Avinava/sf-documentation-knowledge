---
title: "QuoteLineItemGroupClass"
domain: sfFieldRef
topic: quotelineitemgroupclass
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:11.147Z
estimatedTokens: 293
keywords: [QuoteLineItemGroupClass, association, Quote, Line, Item, GroupClass, entity, large, group, quoting, process, multiple, classes, attributed, Child]
---

# QuoteLineItemGroupClass

> Represents the association of a Quote Line Item to GroupClass. Use this entity for large group quoting process when multiple group classes are attributed on a single quote line item. Child object of Quote.

# QuoteLineItemGroupClass

Represents the association of a Quote Line Item to GroupClass. Use this entity for large group quoting process when multiple group classes are attributed on a single quote line item. Child object of Quote.

For more information, see QuoteLineItemGroupClass in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| GroupClassId | Group Class ID | reference |  | 18 |  |  |
| Id | Quote Line Item Group Class ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| QuoteLineItemId | Quote Line Item ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
