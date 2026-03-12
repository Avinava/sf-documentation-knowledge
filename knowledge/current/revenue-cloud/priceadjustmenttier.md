---
title: "PriceAdjustmentTier"
domain: revenue-cloud
topic: priceadjustmenttier
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:10.868Z
estimatedTokens: 1489
keywords: [PriceAdjustmentTier, Represents, discount, tier, price, adjustment, schedule., API, version, 60.0, later., Supported, Calls, Fields, Usage, Associated, Objects]
---

# PriceAdjustmentTier

> Represents a discount tier in a price adjustment schedule.  This object
      is available in API version 60.0 and later.

# PriceAdjustmentTier

Represents a discount tier in a price adjustment schedule.  This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdjustmentType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of price adjustment. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAvailable only if the multicurrency feature is enabled. Contains the ISO code for any currency allowed by the organization.Possible values are:BHD—Bahraini DinarJPY—Japanese YenUSD—U.S. DollarThe default value is USD. |
| EffectiveFrom | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the price adjustment tier comes into effect. |
| EffectiveTo | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the price adjustment tier remains effective. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionIndicates when the user last referred to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LowerBound | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe minimum quantity the discount can be applied to. It must be a positive integer and less than or equal to the upper bound of the tier. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the price adjustment tier. |
| PriceAdjustmentScheduleId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the price adjustment schedule that the discount is applied to.This field is a relationship field.Relationship NamePriceAdjustmentScheduleRelationship TypeLookupRefers ToPriceAdjustmentSchedule |
| PricingTerm | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of pricing term units in the pricing term. Used with PricingTermUnit to define the length of the pricing term. For example, if PricingTermUnit is Months and this field is 1, the subscription is priced monthly.If the selling model is one-time, this field must be null. |
| PricingTermUnit | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe unit of time used to define the pricing term. Used with PricingTerm to define the length of the pricing term. For example, if this field is Months and PricingTerm is 1, the subscription is priced monthly. If the selling model is one-time, this field must be null.Possible values are:Annual—YearsMonths |
| Product2Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the product associated with the price adjustment tier.This field is a relationship field.Relationship NameProduct2Relationship TypeLookupRefers ToProduct2 |
| ProductSellingModelId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the ProductSellingModel record associated with this price adjustment tier record.This field is a relationship field.Relationship NameProductSellingModelRelationship TypeLookupRefers ToProductSellingModel |
| SellingModelType | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionIndicates whether the product is sold as a one-time sale, an evergreen subscription, or a subscription with a defined term.Possible values are:EvergreenOneTime—One TimeTermDefined—Term-DefinedThe default value is OneTime. |
| TierType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe unit of the discount. Possible values are:AdjustmentAmount—An amount discounted from an item’s list priceAdjustmentPercentage—A percentage discounted from an item’s list pricePossible values are:AdjustmentAmount—AmountAdjustmentPercentage—PercentageOverrideAmount—Override |
| TierValue | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe value of the discount. |
| UpperBound | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe maximum quantity the discount can be applied to. Must be a positive integer. Not inclusive. Set this value one digit higher than the quantity you want the tier to include. For example, if a tier’s upper bound is 99, set the value of UpperBound to 100. For the last tier, the value is optional. |

## Usage

To use PriceAdjustmentTiers, associate them with a PriceAdjustmentSchedule.

Tiers can’t overlap, and no gaps are allowed between tiers.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PriceAdjustmentTierFeed](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PriceAdjustmentTierHistory](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- PriceAdjustmentTierFeed (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm)
- PriceAdjustmentTierHistory (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)
