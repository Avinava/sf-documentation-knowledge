---
title: "PromotionTarget"
domain: object-reference
topic: promotiontarget
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:15.636Z
estimatedTokens: 2172
keywords: [PromotionTarget, product, category, order, want, target, promotion, B2B, Store, D2C, API, version, 52.0, later, Calls]
---

# PromotionTarget

> Represents the product, product category, or order that you want to target
			with your promotion in a B2B Store or D2C store. This object is available in API
		version 52.0 and later.

# PromotionTarget

Represents the product, product category, or order that you want to target with your promotion in a B2B Store or D2C store. This object is available in API version 52.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

The PromotionTarget object is available only if the B2B Commerce or D2C Commerce license is enabled.

## Fields

| Field | Details |
| --- | --- |
| AdjustmentAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe promotion discount is expressed as an amount, not as a percentage. |
| AdjustmentPercent | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage discount of the promotion. Valid values include numbers from 1 through 100. |
| AdjustmentType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of adjustment discount applied to the product or group of products.Possible values are:FixedAmountOffLineItemTotal—Fixed amount off the total of all line items.FixedAmountOffTransaction—Fixed amount off the entire transaction. This value is available in API version 56.0 and later.FixedAmountOffUnitPrice—Fixed amount off the unit price.FixedPrice—Fixed price for a product. This value is available in API version 56.0 and later.TotalFixedPrice—Fixed price for a set number of products. Requires a quantity limit. This value is available in API version 56.0 and later.FixedAmountOffUnitPrice—Fixed amount off the unit price.PercentageDiscount—Percentage discount.BonusProduct—Gift product at no additional cost after qualifying purchases. This value is available in API version 64.0 and later. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAvailable only for orgs with the multicurrency feature enabled. Contains the ISO code for any currency allowed by the organization. |
| ExternalTarget | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA target product or product category stored outside of Salesforce. This field is available in API version 56.0 and later.NoteThis field is available through the API only. |
| IsMinItemCountRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf true, the max value in the RestrictionQuantity field must be met before the promotion is applied. The default value is false. This field is available in API version 56.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the promotion target. |
| PromotionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the promotion that you want to reference.This is a relationship field.Relationship NamePromotionRelationship TypeLookupRefers ToPromotion |
| PromotionTierId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the promotion tier associated with the target. Only used with tiered promotions.This is a relationship field.This field is available in API version 57.0 and later.Relationship NamePromotionTierRelationship TypeLookupRefers ToPromotionTier |
| RestrictionQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionMaximum number of times the discount can be applied to the target. This field is available in API version 56.0 and later. |
| TargetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the product or product category that you want to target.This is a polymorphic relationship field.Relationship NameTargetRelationship TypeLookupRefers ToProduct2, ProductCategory |
| TargetOperator | TypeenumPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionFor product and category targets, specify if the qualifying product or item in the qualifying category must be in the cart to determine if the cart satisfies the promotions criteria. For example, a quantity or amount across one or more items. This field is available in API version 59.0 and later.Possible values are:EQUAL_TO—Specifies that the qualifying product or item in the qualifying category must be in the cart.NOT_EQUAL_TO—Specifies that the qualifying product or item in the qualifying category isn’t required to be in the cart.NONE—Specifies that none of the other possible values apply. If the target type is for an order, you must use none. |
| TargetProductCategoryName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the product category referenced in the target. This field is available in API version 55.0 and later. |
| TargetProductName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the product referenced in the target. This field is available in API version 55.0 and later. |
| TargetProductSku | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe stock keeping unit of the product referenced in the target. This field is available in API version 55.0 and later. |
| TargetRuleCriteriaType | TypeenumPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionControls what promotion rules must be met for the promotion to be valid. This field is available in API version 59.0 and later.Possible values are:ALL—Specifies that all of the promotion rules must be met.ANY—Specifies that any of the promotion rules can be met. |
| TargetType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe target of the promotion.Possible values are:Product—Applies the promotion to a single product.ProductCategory—Applies the promotion to a group of products.Shipping—Applies the promotion to all shipping methods on the order.StandardShippingRate—Applies the promotion to a single shipping method on the order.Transaction—Applies the promotion to the entire order. |

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

- Promotion (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotion.htm)
- PromotionMarketSegment (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotionmarketsegment.htm)
- PromotionQualifier (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotionqualifier.htm)
- PromotionSegment (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotionsegment.htm)
- PromotionSegmentBuyerGroup (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotionsegmentbuyergroup.htm)
- PromotionSegmentSalesStore (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotionsegmentsalesstore.htm)
- PromotionTarget (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotiontarget.htm)
- PromotionTier (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotiontier.htm)
