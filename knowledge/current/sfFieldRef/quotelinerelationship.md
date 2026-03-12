---
title: "QuoteLineRelationship"
domain: sfFieldRef
topic: quotelinerelationship
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:11.241Z
estimatedTokens: 516
keywords: [QuoteLineRelationship, relationship, quote, line, items, bundle, it’s, immutable, can’t, edited, removed, API, version, 58.0, later]
---

# QuoteLineRelationship

> Describes the relationship between quote line items, such as items in a bundle. When you create a QuoteLineRelationship object, it’s immutable: it can’t be edited or
		removed. This object is available in API version 58.0 and later.

# QuoteLineRelationship

Describes the relationship between quote line items, such as items in a bundle. When you create a QuoteLineRelationship object, it’s immutable: it can’t be edited or removed. This object is available in API version 58.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [QuoteLineRelationship](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_quotelinerelationship.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AssociatedQuantScaleMethod | Associated Quantity Scale Method | picklist |  | 255 |  |  |
| AssociatedQuoteLineId | Quote Line Item ID | reference |  | 18 |  |  |
| AssociatedQuoteLinePricing | Associated Quote Line Item Pricing | picklist |  | 255 |  |  |
| AssociatedQuoteLineRole | Associated Quote Line Item Role | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Quote Line Relationship ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MainQuoteLineId | Quote Line Item ID | reference |  | 18 |  |  |
| MainQuoteLineRole | Main Quote Line Item Role | picklist |  | 255 |  |  |
| Name | Quote Line Relationship Name | string |  | 255 |  |  |
| ProductRelatedComponentId | Product Related Component ID | reference |  | 18 |  |  |
| ProductRelationshipTypeId | Product Relationship Type ID | reference |  | 18 |  |  |
| QuoteId | Quote ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
