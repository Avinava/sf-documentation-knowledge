---
title: "PromotionQualifier"
domain: object-reference
topic: promotionqualifier
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.603Z
estimatedTokens: 1951
keywords: [PromotionQualifier, product, category, order, want, target, promotion, qualifier, B2B, D2C, store, API, version, 52.0, later]
---

# PromotionQualifier

> Represents the product, product category, or order that you want to target
         with your promotion qualifier in a B2B or D2C store. This object is available in API
      version 52.0 and later.

# PromotionQualifier

Represents the product, product category, or order that you want to target with your promotion qualifier in a B2B or D2C store. This object is available in API version 52.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

The PromotionQualifier object is available only if the B2B Commerce or D2C Commerce license is enabled.

## Fields

| Field | Details |
| --- | --- |
| ApproachingDiscountThreshold | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount that a customer has to reach before seeing an approaching discount message.For example, if a promotion qualifier minimum is set at $150 and this field is set at $50, then a customer receives a banner notification that they're approaching the discount when they have at least $50 in their cart. This field is available in API version 64.0 and later. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAvailable only for orgs with the multicurrency feature enabled. Contains the ISO code for any currency allowed by the organization. |
| ExternalQualifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA qualifying product or product category stored outside of Salesforce. This field is available in API version 56.0 and later.NoteThis field is available through the API only. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| MinimumAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe minimum dollar amount that a buyer must purchase to qualify for the promotion. |
| MinimumQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe minimum quantity that a buyer must purchase to qualify for the promotion. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the promotion qualifier. |
| PromotionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the promotion that you want to associate with your promotion qualifier.This is a relationship field.Relationship NamePromotionRelationship TypeLookupRefers ToPromotion |
| PromotionTierId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the promotion tier associated with the qualifier. Only used with tiered promotions.This is a relationship field.This field is available in API version 57.0 and later.Relationship NamePromotionTierRelationship TypeLookupRefers ToPromotionTier |
| QualifierId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the qualifier.This is a polymorphic relationship field.Relationship NameQualifierRelationship TypeLookupRefers ToProduct2, ProductCategory |
| QualifierOperator | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionPossible values are:EQUAL_TONONENOT_EQUAL_TO |
| QualifierProductCategoryName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the product category referenced in the qualifier. This field is available in API version 55.0 and later. |
| QualifierProductName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the product referenced in the qualifier. This field is available in API version 55.0 and later. |
| QualifierProductSku | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe stock keeping unit of the product referenced in the qualifier. This field is available in API version 55.0 and later. |
| QualifierRuleCriteriaType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of qualifier rule criteria.Possible values are:AllAny |
| QualifierType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of qualifier that you want to add to the promotion. Product applies the qualifier to a single product, ProductCategory to a predetermined group of products, and TransactionTotal to the entire order.Possible values are:ProductProductCategoryTransactionTotal |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PromotionQualifierFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PromotionQualifierHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

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

- PromotionQualifierFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- PromotionQualifierHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- Promotion (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotion.htm)
- PromotionMarketSegment (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotionmarketsegment.htm)
- PromotionQualifier (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotionqualifier.htm)
- PromotionSegment (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotionsegment.htm)
- PromotionSegmentBuyerGroup (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotionsegmentbuyergroup.htm)
- PromotionSegmentSalesStore (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotionsegmentsalesstore.htm)
- PromotionTarget (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotiontarget.htm)
- PromotionTier (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotiontier.htm)
