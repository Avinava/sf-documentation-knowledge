---
title: "ShippingCarrierMethod"
domain: sfFieldRef
topic: shippingcarriermethod
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:13.996Z
estimatedTokens: 423
keywords: [ShippingCarrierMethod, Shipping, service, provided, carrier, Examples, include, Ground, 2Day, NextDay, depends, range, transit, times, API]
---

# ShippingCarrierMethod

> Shipping service provided by a shipping carrier. Examples include
      Ground, 2Day, and NextDay. Service depends on the range of transit times available for each
      carrier. This object is available in API version 61.0 and later.

# ShippingCarrierMethod

Shipping service provided by a shipping carrier. Examples include Ground, 2Day, and NextDay. Service depends on the range of transit times available for each carrier. This object is available in API version 61.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ShippingCarrierMethod](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_shippingcarriermethod.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| ExternalReference | External Reference | string |  | 255 |  |  |
| Id | Shipping Carrier Method ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MaxTransitTime | Maximum Transit Time | int | 9 |  |  |  |
| MinTransitTime | Minimum Transit Time | int | 9 |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ShippingCarrierId | Shipping Carrier ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TransitTimeUnit | Transit Time Unit | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
