---
title: "WebCartAdjustmentGroup"
domain: object-reference
topic: webcartadjustmentgroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.381Z
estimatedTokens: 946
keywords: [WebCartAdjustmentGroup, Group, price, adjustments, cart, API, version, 52.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# WebCartAdjustmentGroup

> Group of price adjustments for a cart. This object is available in API
  version 52.0 and later.

# WebCartAdjustmentGroup

Group of price adjustments for a cart. This object is available in API version 52.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

The WebCartAdjustmentGroup object is available only if the B2B Commerce or D2C Commerce license is enabled.

## Fields

| Field | Details |
| --- | --- |
| AdjustmentSource | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionPrice adjustment type.Possible values are:DiscretionaryPromotionSystem |
| AdjustmentTargetType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionTarget for the price adjustment (the cart itself or individual items).Possible values are:CartItem |
| AdjustmentType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionIndicates if the price adjustment is applied as percentage or an absolute amount.Possible values are:AdjustmentAmountAdjustmentPercentage |
| AdjustmentValue | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionNumeric value of the adjustment (for example, 10 if the price adjustment is either 10% off or $10 off). |
| CartId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the cart to which the price adjustment belongs.This is a relationship field.Relationship NameCartRelationship TypeLookupRefers ToWebCart |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ISO code for the currency that’s specified on the buyer’s account. Default value is USD.Possible values are:EUR—EuroUSD—U.S. Dollar |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription of the adjustment group. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the adjustment group. |
| PriceAdjustmentCauseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of entity that caused this adjustment (for example, a promotion ID). If unspecified, then Description populates the display name.This is a relationship field.Relationship NamePriceAdjustmentCauseRelationship TypeLookupRefers ToPromotion |
| Priority | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIf there are multiple price adjustments, sequence in which the price adjustments are applied. |
| TaxAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTax on the total adjusted price. |
| TotalAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal price after adjustments. |
| TotalAmountWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal adjusted price plus tax. |

## Associated Objects

This object has the following associated objects. Unless it’s noted, associated objects are available in the same API version as this object.

[WebCartAdjustmentGroupChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 58.0)

Change events are available for the object.

## Related Topics

- WebCartAdjustmentGroupChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
