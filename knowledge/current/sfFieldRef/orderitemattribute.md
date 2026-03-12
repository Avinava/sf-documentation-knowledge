---
title: "OrderItemAttribute"
domain: sfFieldRef
topic: orderitemattribute
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:05.793Z
estimatedTokens: 284
keywords: [OrderItemAttribute, virtual, associated, Attribute, Store, API, version, 60.0, later]
---

# OrderItemAttribute

> Represents a virtual object which is associated with the Attribute Value
         Store object. This object is available in API version 60.0 and later.

# OrderItemAttribute

Represents a virtual object which is associated with the Attribute Value Store object. This object is available in API version 60.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see OrderItemAttribute in the Quote and Order Capture Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AttributeDefinitionId | Attribute Definition ID | reference |  | 18 |  |  |
| AttributeName | Name | string |  | 255 |  |  |
| AttributePicklistValueId | Attribute Picklist Value ID | reference |  | 18 |  |  |
| AttributeValue | Value | string |  | 150 |  |  |
| CreatedById | User ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| ExternalId | External ID | string |  | 255 |  |  |
| Id | Order Product Attribute ID | id |  | 18 |  |  |
| LastModifiedById | User ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| OrderItemId | Order Product ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
