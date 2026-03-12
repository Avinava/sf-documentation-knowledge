---
title: "AttributeBasedAdjustment"
domain: revenue-cloud
topic: attributebasedadjustment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:10.883Z
estimatedTokens: 1399
keywords: [AttributeBasedAdjustment, association, product, selling, model, price, adjustment, service, sold, attributes, stores, define, discounts, applied, along]
---

# AttributeBasedAdjustment

> Represents the association between the product selling model and the price
         adjustment for product or service being sold based on its attributes. This object stores
         information about the attributes that define the price of the product or service, the
         discounts applied, along with its value for a given date range. This object is
      available in API version 60.0 and later.

# AttributeBasedAdjustment

Represents the association between the product selling model and the price adjustment for product or service being sold based on its attributes. This object stores information about the attributes that define the price of the product or service, the discounts applied, along with its value for a given date range. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdjustmentType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of pricing adjustment being made.Possible values are:AmountOverridePercentage |
| AdjustmentValue | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe value of the adjustment being made based on the adjustment type. |
| AttributeBasedAdjRuleId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe attribute based adjustment rule associated with this attribute based adjustment record.This field is a relationship field.Relationship NameAttributeBasedAdjRuleRelationship TypeLookupRefers ToAttributeBasedAdjRule |
| AttributeCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of attributes. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionISO code of the currency. Must be one of the valid alphabetic, three-letter currency ISO codes defined by the ISO 4217 standard, such as USD, GBP, or JPY. Must be unique within your organization.Possible values are:BHD—Bahraini DinarJPY—Japanese YenUSD—U.S. DollarThe default value is USD. |
| EffectiveFrom | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time when the price list entry comes into effect. |
| EffectiveTo | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time till when the price list entry remains effective. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the attribute based adjustment was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the attribute based adjustment. |
| PriceAdjustmentScheduleId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe price adjustment schedule associated with the attribute based adjustment record.This field is a relationship field.Relationship NamePriceAdjustmentScheduleRelationship TypeLookupRefers ToPriceAdjustmentSchedule |
| PricingTerm | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of pricing term units in the pricing term. Used with PricingTermUnit to define the length of the pricing term. For example, if PricingTermUnit is Months and this field is 1, the subscription is priced monthly.If the selling model is one-time, this field must be null. |
| PricingTermUnit | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe unit of time used to define the pricing term. Used with PricingTerm to define the length of the pricing term. For example, if this field is Months and PricingTerm is 1, the subscription is priced monthly. If the selling model is one-time, this field must be null.Possible values are:Annual—YearsMonthsQuarterlySemi-Annual |
| ProductId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the product associated with the product attribute set.This field is a relationship field.Relationship NameProductRelationship TypeLookupRefers ToProduct2 |
| ProductSellingModelId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the ProductSellingModel record associated with this attribute based adjustment record.This field is a relationship field.Relationship NameProductSellingModelRelationship TypeLookupRefers ToProductSellingModel |
| SellingModelType | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionIndicates whether the product is sold as a one-time sale, an evergreen subscription, or a subscription with a defined term.Possible values are:EvergreenOneTime—One TimeTermDefined—Term-DefinedThe default value is OneTime. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AttributeBasedAdjustmentFeed](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[AttributeBasedAdjustmentHistory](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- AttributeBasedAdjustmentFeed (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm)
- AttributeBasedAdjustmentHistory (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)
