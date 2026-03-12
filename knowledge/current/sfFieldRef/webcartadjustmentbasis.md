---
title: "WebCartAdjustmentBasis"
domain: sfFieldRef
topic: webcartadjustmentbasis
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:17.113Z
estimatedTokens: 371
keywords: [WebCartAdjustmentBasis, Coupons, trigger, promotions, cart, customer, tries, add, coupon, store, looks, associated, promotion, results, price]
---

# WebCartAdjustmentBasis

> Coupons that trigger promotions for the cart. When a customer tries
         to add a coupon to the cart, the store looks for promotions associated with the coupon. If
         a promotion results in a price adjustment, a WebCartAdjusmentBasis record is created.
      This object is available in API version 54.0 and later.

# WebCartAdjustmentBasis

Coupons that trigger promotions for the cart. When a customer tries to add a coupon to the cart, the store looks for promotions associated with the coupon. If a promotion results in a price adjustment, a WebCartAdjusmentBasis record is created. This object is available in API version 54.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [WebCartAdjustmentBasis](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_webcartadjustmentbasis.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AdjustmentBasisDetail | Adjustment Basis Detail | string |  | 255 |  |  |
| AdjustmentBasisReferenceId | Coupon ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Cart Adjustment Basis ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Cart Adjustment Basis Name | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| WebCartId | Cart ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
