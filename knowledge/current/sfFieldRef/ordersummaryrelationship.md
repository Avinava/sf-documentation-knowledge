---
title: "OrderSummaryRelationship"
domain: sfFieldRef
topic: ordersummaryrelationship
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:06.088Z
estimatedTokens: 416
keywords: [OrderSummaryRelationship, Junction, track, how, original, order, summary, created, any, exchanges, occurred, relates, objects, chain, exchange]
---

# OrderSummaryRelationship

> Junction object used to track how an original order summary (created before
         any exchanges have occurred) relates to other order summary objects in a chain of exchange
         orders.

# OrderSummaryRelationship

Junction object used to track how an original order summary (created before any exchanges have occurred) relates to other order summary objects in a chain of exchange orders.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [OrderSummaryRelationship](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_ordersummaryrelationship.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AssociatedOrderSummaryId | Order Summary ID | reference |  | 18 |  |  |
| AssociatedOrderSummaryStatus | Associated Order Summary Status | picklist |  | 40 |  |  |
| AssociatedRelationshipType | Relationship Type | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Order Summary Relationship Id | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MainAttachedToId | Main Attached To ID | reference |  | 18 |  |  |
| MainOrderSummaryId | Order Summary ID | reference |  | 18 |  |  |
| Name | Name | string |  | 255 |  |  |
| RootOrderSummaryId | Order Summary ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
