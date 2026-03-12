---
title: "StandardShippingRate"
domain: sfFieldRef
topic: standardshippingrate
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:14.378Z
estimatedTokens: 430
keywords: [StandardShippingRate, Standard, shipping, rate, store, API, version, 59.0, later]
---

# StandardShippingRate

> Standard shipping rate for a store. This object is available in API
      version 59.0 and later.

# StandardShippingRate

Standard shipping rate for a store. This object is available in API version 59.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [StandardShippingRate](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_standardshippingrate.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ConditionFactor | Condition Factor | picklist |  | 255 |  |  |
| ConditionRangeMax | Condition Range Max | double |  |  | 18 | 0 |
| ConditionRangeMin | Condition Range Min | double |  |  | 18 | 0 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Standard Shipping Rate ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Standard Shipping Rate Name | string |  | 255 |  |  |
| Price | Price | currency |  |  | 18 | 0 |
| ShippingCarrierMethodId | Shipping Carrier Method ID | reference |  | 18 |  |  |
| ShippingZoneId | Shipping Rate Area ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TransitTimeMax | Maximum Transit Time | int | 9 |  |  |  |
| TransitTimeMin | Minimum Transit Time | int | 9 |  |  |  |
| TransitTimeUnit | Unit of Transit Time | picklist |  | 255 |  |  |
| WeightUnit | Unit of Weight | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
