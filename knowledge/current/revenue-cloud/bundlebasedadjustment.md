---
title: "BundleBasedAdjustment"
domain: revenue-cloud
topic: bundlebasedadjustment
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:11.126Z
estimatedTokens: 1570
keywords: [BundleBasedAdjustment, association, product, selling, model, price, adjustment, service, sold, bundle, stores, service's, discounts, applied, along]
---

# BundleBasedAdjustment

> Represents the association between the product selling model and the price
         adjustment for a product or service being sold as a bundle. This object stores information
         of the product or service's price, the discounts applied, along with its value for a given
         date range. This object is available in API version 60.0 and later.

# BundleBasedAdjustment

Represents the association between the product selling model and the price adjustment for a product or service being sold as a bundle. This object stores information of the product or service's price, the discounts applied, along with its value for a given date range. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdjustmentType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of pricing adjustment being made.Possible values are:AmountOverridePercentage |
| AdjustmentValue | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe type of pricing adjustment being made. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionISO code of the currency. Must be one of the valid alphabetic, three-letter currency ISO codes defined by the ISO 4217 standard, such as USD, GBP, or JPY. Must be unique within your organization.Possible values are:BHD—Bahraini DinarJPY—Japanese YenUSD—U.S. DollarThe default value is USD. |
| EffectiveFrom | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time when the bundle based adjustment comes into effect. |
| EffectiveTo | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time till when the bundle based adjustment remains effective. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the bundle based adjustment was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the bundle based adjustment was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the bundle based adjustment record. |
| ParentProductId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRepresents the immediate parent in the product bundle that the price is configured for.This field is a relationship field.Relationship NameParentProductRelationship TypeLookupRefers ToProduct2 |
| ParentProductSellingModelId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe immediate parent node of a product selling model when nodes are represented in a hierarchial structure.This field is a relationship field.Relationship NameParentProductSellingModelRelationship TypeLookupRefers ToProductSellingModel |
| PriceAdjustmentScheduleId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe price adjustment schedule associated with the bundle based adjustment record.This field is a relationship field.Relationship NamePriceAdjustmentScheduleRelationship TypeLookupRefers ToPriceAdjustmentSchedule |
| PricingTerm | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of pricing term units in the pricing term. Used with PricingTermUnit to define the length of the pricing term. For example, if PricingTermUnit is Months and this field is 1, the subscription is priced monthly.If the selling model is one-time, this field must be null. |
| PricingTermUnit | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe unit of time used to define the pricing term. Used with PricingTerm to define the length of the pricing term. For example, if this field is Months and PricingTerm is 1, the subscription is priced monthly. If the selling model is one-time, this field must be null.Possible values are:Annual—YearsMonthsQuarterlySemi-Annual |
| ProductId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the product associated with the product bundle set.This field is a relationship field.Relationship NameProductRelationship TypeLookupRefers ToProduct2 |
| ProductSellingModelId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the ProductSellingModel record associated with this bundle based adjustment record.This field is a relationship field.Relationship NameProductSellingModelRelationship TypeLookupRefers ToProductSellingModel |
| RootBundleId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRepresents the structural root product in a product's bundle that the price is configured for.This field is a relationship field.Relationship NameRootBundleRelationship TypeLookupRefers ToProduct2 |
| RootProductSellingModelId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe root product selling model. The primary or base product selling method.This field is a relationship field.Relationship NameRootProductSellingModelRelationship TypeLookupRefers ToProductSellingModel |
| SellingModelType | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionIndicates whether the product is sold as a one-time sale, an evergreen subscription, or a subscription with a defined term.Possible values are:EvergreenOneTime—One TimeTermDefined—Term-DefinedThe default value is OneTime. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[BundleBasedAdjustmentFeed](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[BundleBasedAdjustmentHistory](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- BundleBasedAdjustmentFeed (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm)
- BundleBasedAdjustmentHistory (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)
