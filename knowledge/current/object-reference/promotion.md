---
title: "Promotion"
domain: object-reference
topic: promotion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.578Z
estimatedTokens: 2559
keywords: [Promotion, B2B, D2C, stores, API, version, 52.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# Promotion

> Represents a promotion for B2B or D2C stores. This object is available
      in API version 52.0 and later.

# Promotion

Represents a promotion for B2B or D2C stores. This object is available in API version 52.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Some of the fields on the Promotion object are available only if the B2B Commerce or D2C Commerce license is enabled.

## Fields

| Field | Details |
| --- | --- |
| AreQualItemsExclFromDiscounts | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionExclude qualifying items from discount. You can use this field to create buy-one-get-one promotions. The default value is false. This field is available in API version 56.0 and later. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAvailable only for orgs with the multicurrency feature enabled. Contains the ISO code for any currency allowed by the organization. |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDescription of the promotion. |
| DiscountOrder | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates whether to apply discounts first to the least expensive products or to the most expensive products.Possible values are:LeastExpensiveMostExpensiveThe default value is MostExpensive.This field is available in API version 56.0 and later. |
| DiscountRestriction | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates whether to restrict the products that can be discounted based on the least expensive qualifying product.Possible values are:LeastExpensiveNoneThe default value is None.This field is available in API version 56.0 and later. |
| DisplayName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDisplay name of the promotion. |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate and time when the promotion ends. |
| ExclusivityType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDetermines whether a promotion can be combined with other promotions.Possible values are:No - Can be combined with other promotions.Class - Can’t be combined with a promotion of the same class (product, order, or shipment), but allows for promotions of separate classes to be combined. For example, an order discount on top of a product discount.Global - Only promotion that can be applied to the order, regardless of class.The default value is Class.This field is available in API version 58.0 and later. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the promotion is active (true) or inactive (false).The default value is false. |
| IsApproachingDiscountApplicable | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that the promotion shows an approaching discount message. Set an approaching discount threshold value on the PromotionQualifier object. This field is available in API version 64.0 and later.The default value is false. |
| IsAutomatic | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether the promotion is automatic or manual. If the promotion is automatic, it automatically applies to eligible carts with no buyer action required. if the promotion is manual, the buyer applies a coupon to redeem the promotion.The default value is false. |
| IsCommercePromotion | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if the promotion is a B2B Commerce promotion (true) or not (false).The default value is false. |
| IsTiered | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIndicates whether the promotion uses promotion tiers (true) or not (false). This value can’t be changed.The default value is false.A tiered promotion can have up to 10 associated tiers.This field is available in API version 57.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced and not directly accessed. |
| MaximumUsageCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionMaximum number of times the promotion can be applied to a cart. If left blank, the default value is 1. This field is available in API version 56.0 and later. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the promotion. |
| Objective | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionMore information, if any, about the purpose of the promotion. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who created the promotion.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PriorityNumber | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPriority for the promotion. The priority determines which promotions apply first. The lower the number, the higher the priority. |
| QualifierCriteria | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIf a promotion has multiple qualifiers, this field determines whether all qualifiers must be met or whether any must be met for the promotion to apply.Possible values are:AllAnyThe default value is 'All'.This field is available in API version 53.0 and later. |
| StartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate and time when the promotion begins. |
| TargetCriteria | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIf a promotion has multiple targets, indicates whether a cart must meet the criteria for any target or the criteria for all targets.Possible values are:AllAnyThis field is available in API version 56.0 and later. |
| TermsAndConditions | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionTerms and conditions the buyer accepts before applying the promotion.This field is available in API version 53.0 and later. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PromotionFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PromotionHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PromotionShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

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

- PromotionFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- PromotionHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- PromotionShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
- Promotion (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotion.htm)
- PromotionMarketSegment (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotionmarketsegment.htm)
- PromotionQualifier (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotionqualifier.htm)
- PromotionSegment (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotionsegment.htm)
- PromotionSegmentBuyerGroup (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotionsegmentbuyergroup.htm)
- PromotionSegmentSalesStore (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotionsegmentsalesstore.htm)
- PromotionTarget (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotiontarget.htm)
