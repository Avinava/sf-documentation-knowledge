---
title: "PromotionSegmentSalesStore"
domain: object-reference
topic: promotionsegmentsalesstore
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.623Z
estimatedTokens: 1251
keywords: [PromotionSegmentSalesStore, promotion, segment, associated, store, B2B, Commerce, API, version, 52.0, later, Calls, Special, Access, Rules]
---

# PromotionSegmentSalesStore

> Represents a promotion segment, associated with a store, and used for B2B
         Commerce. This object is available in API version 52.0 and later.

# PromotionSegmentSalesStore

Represents a promotion segment, associated with a store, and used for B2B Commerce. This object is available in API version 52.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

The PromotionSegmentSalesStore object is available only if the B2B Commerce license is enabled.

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionAvailable only for orgs with the multicurrency feature enabled. Contains the ISO code for any currency allowed by the organization. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the promotion segment. |
| PromotionSegmentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the promotion segment you want to associate with your store.This is a relationship field.Relationship NamePromotionSegmentRelationship TypeLookupRefers ToPromotionSegment |
| SalesStoreId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the store you want to include in your promotion segment.This is a relationship field.Relationship NameSalesStoreRelationship TypeLookupRefers ToWebStore |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PromotionSegmentSalesStoreFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PromotionSegmentSalesStoreHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

#### See Also

-   [Promotion](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotion.htm "Represents a promotion for B2B or D2C stores. This object is available in API version 52.0 and later.")

-   [PromotionMarketSegment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotionmarketsegment.htm "Represents a market segment within B2B Commerce that promotions can be assigned to. This object is available in API version 52.0 and later.")

-   [PromotionQualifier](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotionqualifier.htm "Represents the product, product category, or order that you want to target with your promotion qualifier in a B2B or D2C store. This object is available in API version 52.0 and later.")

-   [PromotionSegment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotionsegment.htm "Represents a promotion segment, which you can assign to different stores or buyer groups, allowing them to access the promotion. This object is available in API version 52.0 and later.")

-   [PromotionSegmentBuyerGroup](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotionsegmentbuyergroup.htm "Represents a promotion segment, associated with a buyer group, and used for B2B Commerce. This object is available in API version 52.0 and later.")

-   [PromotionSegmentSalesStore](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotionsegmentsalesstore.htm "Represents a promotion segment, associated with a store, and used for B2B Commerce. This object is available in API version 52.0 and later.")

-   [PromotionTarget](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotiontarget.htm "Represents the product, product category, or order that you want to target with your promotion in a B2B Store or D2C store. This object is available in API version 52.0 and later.")

-   [PromotionTier](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotiontier.htm "Represents a tier of a promotion that includes multiple tiers. A promotion can have up to 10 tiers. This object is available in API version 57.0 and later.")

## Related Topics

- PromotionSegmentSalesStoreFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- PromotionSegmentSalesStoreHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- Promotion (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotion.htm)
- PromotionMarketSegment (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotionmarketsegment.htm)
- PromotionQualifier (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotionqualifier.htm)
- PromotionSegment (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotionsegment.htm)
- PromotionSegmentBuyerGroup (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotionsegmentbuyergroup.htm)
- PromotionSegmentSalesStore (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotionsegmentsalesstore.htm)
- PromotionTarget (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotiontarget.htm)
- PromotionTier (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotiontier.htm)
