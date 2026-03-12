---
title: "FulfillmentLineRel"
domain: sfFieldRef
topic: fulfillmentlinerel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:58.737Z
estimatedTokens: 407
keywords: [FulfillmentLineRel, relationship, two, fulfillment, order, lines, API, version, 61.0, later]
---

# FulfillmentLineRel

> Represents a relationship between two fulfillment order lines.
      This object is available in API version 61.0 and later.

# FulfillmentLineRel

Represents a relationship between two fulfillment order lines. This object is available in API version 61.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see FulfillmentLineRel in the Dynamic Revenue Orchestrator Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AssociatedFoItemInventory | Associated Fulfillment Order Item Inventory | picklist |  | 255 |  |  |
| AssociatedFulfillOrderItemId | Fulfillment Order Product ID | reference |  | 18 |  |  |
| AssociatedLineRole | Associated Fulfillment Order Item Role | picklist |  | 255 |  |  |
| AssociatedQuanScaleMethod | Associated Quantity Scale Method | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| FulfillmentOrderId | Fulfillment Order ID | reference |  | 18 |  |  |
| Id | Fulfillment Order Line Relationship ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MainFulfillOrderItemRole | Main Fulfillment Order Item Role | picklist |  | 255 |  |  |
| MainFulfillmentOrderItemId | Fulfillment Order Product ID | reference |  | 18 |  |  |
| Name | Name | string |  | 255 |  |  |
| ProductRelationshipTypeId | Product Relationship Type ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
