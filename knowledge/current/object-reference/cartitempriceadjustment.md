---
title: "CartItemPriceAdjustment"
domain: object-reference
topic: cartitempriceadjustment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.211Z
estimatedTokens: 1315
keywords: [CartItemPriceAdjustment, Price, adjustment, cart, item, API, version, 52.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# CartItemPriceAdjustment

> Price adjustment for a cart item. This object is available in API version
  52.0 and later.

# CartItemPriceAdjustment

Price adjustment for a cart item. This object is available in API version 52.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

The CartItemPriceAdjustment object is available only if the B2B Commerce or D2C Commerce license is enabled.

## Fields

| Field | Details |
| --- | --- |
| AdjustmentAmountScope | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionScope of the adjustment amount for a promotion.Possible values are:Total—The amount off the total price.This field is available in API version 54.0 and later. |
| AdjustmentBasisReferenceId | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCoupon code of the coupon associated with a promotion. This field is available in API version 54.0 and later.This is a relationship field.Relationship NameAdjustmentBasisReferenceRelationship TypeLookupRefers ToCoupon |
| AdjustmentSource | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionPrice adjustment type.Possible values are:DiscretionaryPromotionSystem |
| AdjustmentTargetType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionTarget for the price adjustment (the cart itself or individual items).Possible values are:CartItem |
| AdjustmentType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionIndicates if the price adjustment is applied as percentage or an absolute amount.Possible values are:AdjustmentAmountAdjustmentPercentage |
| AdjustmentValue | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionNumeric value of the adjustment (for example, 10 if the price adjustment is either 10% off or $10 off). |
| CartId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the WebCart that’s associated with a cart item. This field is available in API version 55.0 and later.This is a relationship field.Relationship NameCartRelationship TypeLookupRefers ToWebCart |
| CartItemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the parent cart item to which this adjustment belongs.This is a relationship field.Relationship NameCartItemRelationship TypeLookupRefers ToCartItem |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ISO code for the currency that’s specified on the buyer’s account. Default value is USD.Possible values are:EUR—EuroUSD—U.S. Dollar |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription of the price adjustment. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the price adjustment. |
| PriceAdjustmentCauseId | TypereferencePropertiesCreate, Filter, Group, Sort, Nillable, UpdateDescriptionID of entity that caused this adjustment (for example, a promotion ID). If unspecified, then Description populates the display name.This is a relationship field.Relationship NamePriceAdjustmentCauseRelationship TypeLookupRefers ToPromotion |
| Priority | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIf there are multiple price adjustments, sequence in which the price adjustments are applied. |
| TotalAmount | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionTotal price after applying price adjustments. |
| TotalGrossAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total gross amount (tax inclusive) after applying price adjustments. This field is available in API version 55.0 and later. |
| TotalNetAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total net amount (tax exclusive) after applying price adjustments. This field is available in API version 55.0 and later. |
| TotalTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTax on the total adjusted price. |
| WebCartAdjustmentGroupId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the cart’s adjustment group.This is a relationship field.Relationship NameWebCartAdjustmentGroupRelationship TypeLookupRefers ToWebCartAdjustmentGroup |

## Associated Objects

This object has the following associated objects. Unless it’s noted, associated objects are available in the same API version as this object.

[CartItemPriceAdjustmentChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 58.0)

Change events are available for the object.

## Related Topics

- CartItemPriceAdjustmentChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
