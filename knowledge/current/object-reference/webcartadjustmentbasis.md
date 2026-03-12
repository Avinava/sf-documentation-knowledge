---
title: "WebCartAdjustmentBasis"
domain: object-reference
topic: webcartadjustmentbasis
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.373Z
estimatedTokens: 640
keywords: [WebCartAdjustmentBasis, Coupons, trigger, promotions, cart, customer, tries, add, coupon, store, looks, associated, promotion, results, price]
---

# WebCartAdjustmentBasis

> Coupons that trigger promotions for the cart. When a customer tries
         to add a coupon to the cart, the store looks for promotions associated with the coupon. If
         a promotion results in a price adjustment, a WebCartAdjusmentBasis record is created.
      This object is available in API version 54.0 and later.

# WebCartAdjustmentBasis

Coupons that trigger promotions for the cart. When a customer tries to add a coupon to the cart, the store looks for promotions associated with the coupon. If a promotion results in a price adjustment, a WebCartAdjusmentBasis record is created. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the B2B Commerce or D2C Commerce license is enabled.

## Fields

| Field | Details |
| --- | --- |
| AdjustmentBasisDetail | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCoupon code for the coupon associated with the promotion. |
| AdjustmentBasisReferenceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionForeign key reference to the coupon.This field is a relationship field.Relationship NameAdjustmentBasisReferenceRelationship TypeLookupRefers ToCoupon |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe currency ISO code of the cart.Possible values are:EURUSDThe default value is USD. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the WebCartAdjustmentBasis record. |
| WebCartId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the cart.This field is a relationship field.Relationship NameWebCartRelationship TypeLookupRefers ToWebCart |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[WebCartAdjustmentBasisChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

## Related Topics

- WebCartAdjustmentBasisChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
