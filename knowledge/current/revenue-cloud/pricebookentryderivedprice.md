---
title: "PriceBookEntryDerivedPrice"
domain: revenue-cloud
topic: pricebookentryderivedprice
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:10.901Z
estimatedTokens: 1285
keywords: [PriceBookEntryDerivedPrice, Represents, price, product, that’s, derived, another, source, such, asset., API, version, 61.0, later., Supported, Calls, Fields, Associated, Objects]
---

# PriceBookEntryDerivedPrice

> Represents the price of a product that’s derived from another source
         such as a product or an asset. This object is available in API version 61.0 and
      later.

# PriceBookEntryDerivedPrice

Represents the price of a product that’s derived from another source such as a product or an asset. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ContributingProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionSource product from which the derived price is calculated. The source product is associated with the derived price product.This field is a relationship field.Relationship NameContributingProductRelationship TypeLookupRefers ToProduct2 |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionISO code for any currency allowed by the organization. Available only if the multicurrency feature is enabled.Valid values are:BHD—Bahraini DinarJPY—Japanese YenUSD—U.S. DollarThe default value is USD. |
| DerivedPricingScope | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionScope of the product based on which the derived price is calculated.Valid values are:BothNonTransactionalTransactional |
| EffectiveFrom | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionDate and time when the derived pricing comes into effect. |
| EffectiveTo | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate and time when the derived pricing is no longer in effect. |
| Formula | TypestringPropertiesCreate, Filter, Sort, UpdateDescriptionCoded format of the formula used to calculate the derived price of a product from another product or asset. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp for when the current user last referred to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the derived price record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who created the record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PricebookEntryId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionPrice book entry associated with the source product.This field is a relationship field.Relationship NamePricebookEntryRelationship TypeLookupRefers ToPricebookEntry |
| PricebookId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionPrice book associated with the source product.This field is a relationship field.Relationship NamePricebookRelationship TypeLookupRefers ToPricebook2 |
| PricingSource | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionPricing type used to calculate the derived price of the product.Valid values are:HeaderProduct |
| ProductId | TypereferencePropertiesFilter, Group, SortDescriptionProduct associated with the derived pricing.This field is a relationship field.Relationship NameProductRelationship TypeLookupRefers ToProduct2 |
| ProductSellingModelId | TypereferencePropertiesFilter, Group, SortDescriptionProduct selling model associated with this record.This field is a relationship field.Relationship NameProductSellingModelRelationship TypeLookupRefers ToProductSellingModel |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PriceBookEntryDerivedPriceFeed](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PriceBookEntryDerivedPriceHistory](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PriceBookEntryDerivedPriceShare](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PriceBookEntryDerivedPriceFeed (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm)
- PriceBookEntryDerivedPriceHistory (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)
- PriceBookEntryDerivedPriceShare (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm)
