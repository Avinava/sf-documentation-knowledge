---
title: "PriceAdjustmentSchedule"
domain: revenue-cloud
topic: priceadjustmentschedule
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:10.855Z
estimatedTokens: 990
keywords: [PriceAdjustmentSchedule, Represents, series, tiered, discounts, based, number, items, purchased., API, version, 60.0, later., Supported, Calls, Fields, Associated, Objects]
---

# PriceAdjustmentSchedule

> Represents a series of tiered discounts based on the number of items
         purchased.  This object is available in API version 60.0 and later.

# PriceAdjustmentSchedule

Represents a series of tiered discounts based on the number of items purchased.  This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdjustmentMethod | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe method for applying tiered pricing. Possible values are:Range—All items receive the discount of the highest tier the quantity falls in.Slab—Items receive the discount defined for the tier they fall in.Possible values are:RangeSlabThe default value is Range. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAvailable only if the multicurrency feature is enabled. Contains the ISO code for any currency allowed by the organization.Possible values are:BHD—Bahraini DinarJPY—Japanese YenUSD—U.S. DollarThe default value is USD. |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionText description of the price adjustment schedule. |
| EffectiveFrom | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the price adjustment schedule comes into effect. |
| EffectiveTo | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the price adjustment schedule remains effective. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the price adjustment schedule is active (true) or not (false). You can change this field’s value as often as necessary. Label is Active. Default value is False. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionIndicates whether the price adjustment schedule has been archived (true) or not (false). This field is read-only. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The name of the price adjustment schedule. This field is read-only. Label is Price Adjustment Schedule Name. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe Salesforce ID of the sales representative who owns the price adjustment schedule.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Pricebook2Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe price book associated with this price adjustment schedule record.This field is a relationship field.Relationship NamePricebook2Relationship TypeLookupRefers ToPricebook2 |
| ScheduleType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of price adjustment schedule.Possible values are:AttributeBundleCustomTermVolumeThe default value is Volume. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PriceAdjustmentScheduleShare](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PriceAdjustmentScheduleShare (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm)
