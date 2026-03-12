---
title: "Promotion"
domain: loyalty
topic: promotion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.609Z
estimatedTokens: 135
keywords: [Promotion, Output, representation, rule, configuration, APIs, allow, eligibility, rules, limits, choose, template, specific, view, eligible, promotions, customer’s, cart, associated, loyalty]
---

# Promotion

> Represents a promotion associated with the loyalty program. It
      captures the information such as type of the promotion, issue of a voucher or credit points,
      promotion enrollment, and status of the promotion. This object is available in API
    version 51.0 and later.

# Promotion

Represents a promotion associated with the loyalty program. It captures the information such as type of the promotion, issue of a voucher or credit points, promotion enrollment, and status of the promotion. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BusinessUnitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the internal organization unit that contains the details of the Marketing Cloud business unit associated with the promotion.This field is a relationship field.Relationship NameBusinessUnitRelationship TypeLookupRefers ToInternalOrganizationUnit |
| CampaignId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe campaign associated with the promotion.This is a relationship field.Relationship NameCampaignRelationship TypeLookupRefers ToCampaign |
| CumulativeUsageTarget | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of times a member must participate or the amount of money spent to qualify for a reward. |
| CurrentLiabilityAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe liability amount incurred for the promotion until now. This field is available in API version 52.0 and later. |
| CurrentPointCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe liability amount incurred for the promotion until now. This field is available in API version 52.0 and later. |
| DefaultVoucherDefinitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe voucher associated with the promotion.This is a relationship field.Relationship NameDefaultVoucherDefinitionRelationship TypeLookupRefers ToVoucherDefinition |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDescription of the promotion. |
| DisplayName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe display name of the promotion. This field is available in API version 60.0 and later where Global Promotions Management is enabled. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEnd date of the promotion. |
| EndDateTime | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date and time of the promotion. This field is available in API version 60.0 and later where Unified Promotions is enabled. |
| EnrollmentEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe last date to enroll in the promotion. |
| EnrollmentStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe first date to enroll in the promotion. |
| FulfillmentAction | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSelect how a loyalty member is rewarded for fulfilling promotion requirements.Possible values are:CreditPoints—Credit PointsIssueVoucher—Issue Voucher |
| GameDefinitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the game definition associated with the promotion.This field is a relationship field.Relationship NameGameDefinitionRelationship TypeLookupRefers ToGameDefinition |
| ImageUrl | TypeurlPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe URL for the promotion image. This field is available in API version 57.0 and later. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the promotion is active. This field is available in API version 52.0 and later. |
| IsCloned | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the promotion has been created by cloning an existing promotion. This field is available in API version 61.0 and later.The default value is false. |
| IsEnrollmentRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether enrollment is required to participate in the promotion. |
| IsPointsWithFactor | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the promotion is applied by multiplying points with a factor or by using the fixed value in the TotalRewardPoints field. This field is available in API version 52.0 and later.The default value is False. |
| IsQuickPromotion | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the records represent a quick promotion (true) or not (false). This field is available in API version 57.0 and later.The default value is false. |
| IssuedVoucherCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of vouchers issued for the promotion until current date. This field is available in API version 52.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| LoyaltyProgramCurrencyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe loyalty program currency associated with the promotion.This is a relationship field.Relationship NameLoyaltyProgramCurrencyRelationship TypeLookupRefers ToLoyaltyProgramCurrency |
| LoyaltyProgramId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe loyalty program associated with the promotion.This is a relationship field.Relationship NameLoyaltyProgramRelationship TypeLookupRefers ToLoyaltyProgram |
| LoyaltyPromotionType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of promotion.Possible values are:CumulativeStandardJointThis field is available in API version 55.0 and later. |
| MaximumLiabilityAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe maximum liability amount that can be incurred for the promotion. |
| MaximumRewardValue | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe total value that can be accumulated for the promotion. |
| MaximumVoucherCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum number of vouchers that can be issued for the promotion. This field is available in API version 52.0 and later. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionUnique identifier for the promotion. |
| Objective | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionBusiness objective of the promotion. For example, launching a new product, keeping customers satisfied, or clearing stock. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PointFactor | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe factor with which points are multiplied or divided when IsPointsWithFactor is set to true. This field is available in API version 52.0 and later. |
| PriorityNumber | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe priority number of the promotion. This field is available in API version 60.0 and later, where Global Promotions Management is enabled. |
| ProductCatalogId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the product catalog associated with the promotion. This field is available in API version 60.0 and later, where Global Promotions Management is enabled.This field is a relationship field.Relationship NameProductCatalogRelationship TypeLookupRefers ToProductCatalog |
| PromotionCode | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe unique code of the promotion. This field is available in API version 60.0 and later, where Global Promotions Management is enabled. |
| PromotionConfiguration | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe configuration of a quick promotion. This field is available in API version 57.0 and later. |
| RelatedPromotionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the promotion that was cloned to create the promotion.This field is a relationship field.Relationship NameRelatedPromotionRelationship TypeLookupRefers ToPromotion |
| RuleLibraryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the promotion that was cloned to create the promotion. This field is available in API version 62.0 and later.This field is a relationship field.Relationship NameRelatedPromotionRelationship TypeLookupRefers ToPromotion |
| StartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The start date of the promotion. |
| StartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start date and time of the promotion. This field is available in API version 60.0 and later where Global Promotions Management is enabled. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the promotion.Possible values are:CancelledCompleteDraftInProgress |
| TotalRewardPoints | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe points awarded on availing the promotion. |
| TransactionJournalType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe journal type that has been applied for the promotion. This field is available in API version 52.0 and later.Possible values are:AccrualRedemption |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PromotionChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[PromotionFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[PromotionHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[PromotionOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[PromotionShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.

## Related Topics

- Unified Promotions Output (atlas.en-us.loyalty.meta/loyalty/connect_responses_unified_promotions_output.htm)
- Template Configuration (atlas.en-us.loyalty.meta/loyalty/connect_responses_template_configuration.htm)
- Eligible Promotions List (POST) (atlas.en-us.loyalty.meta/loyalty/connect_resources_eligible_promotions.htm)
- Promotion Configuration (GET) (atlas.en-us.loyalty.meta/loyalty/connect_resources_promotion_configuration.htm)
- Promotion Rule Configuration (GET, POST) (atlas.en-us.loyalty.meta/loyalty/connect_resources_promotion_rule_configuration.htm)
- Clone Promotion (POST) (atlas.en-us.loyalty.meta/loyalty/connect_resources_deep_clone_promotion.htm)
- Coupon Usage Increase (POST) (atlas.en-us.loyalty.meta/loyalty/connect_resources_couponusageincrease.htm)
- Coupon Usage Decrease (POST) (atlas.en-us.loyalty.meta/loyalty/connect_resources_coupon_usage_decrease.htm)
- Promotions Creation (POST, PUT) (atlas.en-us.loyalty.meta/loyalty/connect_resources_unified_promotions.htm)
- Promotion Details (GET, PUT) (atlas.en-us.loyalty.meta/loyalty/connect_resources_unified_promotion_details.htm)
