---
title: "Promotion"
domain: referral-marketing
topic: promotion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.245Z
estimatedTokens: 2907
keywords: [Promotion, referral, API, version, 59.0, later, Calls, Associated, Objects]
---

# Promotion

> Represents information about a referral promotion. This object
      is available in API version 59.0 and later.

# Promotion

Represents information about a referral promotion. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BusinessUnitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the internal organization unit that contains the details of the Marketing Cloud business unit associated with the promotion for a B2C referral programs.This field is a relationship field.Relationship NameBusinessUnitRelationship TypeLookupRefers ToInternalOrganizationUnit |
| CampaignId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the campaign whose members are the promotion’s target audience.This field is a relationship field.Relationship NameCampaignRelationship TypeLookupRefers ToCampaign |
| CumulativeUsageTarget | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReserved for internal use and isn't required for B2C or B2B referral programs. Don't use this field to customize or extend your implementation. |
| CurrentLiabilityAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe liability that’s incurred by the company for the promotion till date. |
| CurrentPointCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReserved for internal use and isn't required for B2C or B2B referral programs. Don't use this field to customize or extend your implementation. |
| DefaultVoucherDefinitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReserved for internal use and isn't required for B2C or B2B referral programs. Don't use this field to customize or extend your implementation.This field is a relationship field.Relationship NameDefaultVoucherDefinitionRelationship TypeLookupRefers ToVoucherDefinition |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description of the promotion. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date until which the referral promotion is run by the company. |
| EnrollmentEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date until which advocates can join the referral promotion. |
| EnrollmentStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from which advocates can join the referral promotion. |
| FulfillmentAction | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionReserved for internal use and isn't required for B2C or B2B referral programs. Don't use this field to customize or extend your implementation.Possible values are:CreditPointsIssueVoucher |
| ImageUrl | TypeurlPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe URL of the file that contains the marketing image of the promotion. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a promotion is active (true) or not (false).The default value is false. |
| IsCloned | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionReserved for internal use and isn't required for B2C or B2B referral programs. Don't use this field to customize or extend your implementation. |
| IsEnrollmentRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether advocates need to join the promotion before they can refer (true) or not (false).The default value is false. |
| IsPointsWithFactor | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionReserved for internal use and isn't required for B2C or B2B referral programs. Don't use this field to customize or extend your implementation.The default value is false. |
| IsQuickPromotion | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionReserved for internal use and isn't required for B2C or B2B referral programs. Don't use this field to customize or extend your implementation.The default value is false. |
| IsReferralPromotion | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIndicates whether the promotion is for a referral program (true) or not (false). Specify true for all the promotions that you create for your referral program.The default value is false. |
| IssuedVoucherCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe count of vouchers that have been issued to advocates and their referred parties as promotion reward. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| LoyaltyProgramId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the referral program that the promotion is a part of.This field is a relationship field.Relationship NameLoyaltyProgramRelationship TypeLookupRefers ToLoyaltyProgram |
| LoyaltyPromotionType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe referral promotion type. For referral promotions, specify the type as Standard.Possible values are:Cumulative—Reserved for internal use and isn't required for B2C or B2B referral programs. Don't use this value to customize or extend your implementation.Joint—Reserved for internal use and isn't required for B2C or B2B referral programs. Don't use this value to customize or extend your implementation.Standard |
| MaximumLiabilityAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe maximum liability that the company can incur for the promotion. |
| MaximumRewardValue | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReserved for internal use and isn't required for B2C or B2B referral programs. Don't use this field to customize or extend your implementation. |
| MaximumVoucherCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum number of vouchers that issued to advocates and their referred parties as promotion rewards. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the promotion. |
| Objective | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe business objective of the promotion. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PointFactor | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionReserved for internal use and isn't required for B2C or B2B referral programs. Don't use this field to customize or extend your implementation. |
| PromotionCode | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe unique code of the promotion. |
| PromotionConfiguration | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe configuration of the promotion. The configuration stores details like the email templates of each promotion stage, the promotion audience, referral rewards, and the reward limits. |
| PromotionPageUrl | TypeurlPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe URL of the Experience Cloud or external page where advocates can sign up for the referral promotion or learn about it. |
| PromotionTemplateId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe referral promotion template that was used to create the promotion.This field is a relationship field.Relationship NamePromotionTemplateRelationship TypeLookupRefers ToPromotionTemplate |
| ReferralType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of referral promotion.Possible value is:Refer Friends |
| RelatedReferralProgramId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe referral program that accounts for the budget of the referral promotion.This field is a relationship field.Relationship NameRelatedReferralProgramRelationship TypeLookupRefers ToLoyaltyProgram |
| StartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The start date of the referral promotion. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionReserved for internal use and isn't required for B2C or B2B referral programs. Don't use this field to customize or extend your implementation.Possible values are:CancelledCompleteDraftInProgress |
| TotalRewardPoints | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReserved for internal use and isn't required for B2C or B2B referral programs. Don't use this field to customize or extend your implementation. |
| TransactionJournalType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionReserved for internal use and isn't required for B2C or B2B referral programs. Don't use this field to customize or extend your implementation.Possible values are:AccrualRedemption |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionReserved for internal use and isn't required for B2C or B2B referral programs. Don't use this field to customize or extend your implementation.Possible values are:LOYALTY—LoyaltyMANUFACTURING—Manufacturing |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PromotionFeed](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PromotionHistory](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PromotionOwnerSharingRule](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[PromotionShare](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PromotionFeed (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_feed.htm)
- PromotionHistory (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_history.htm)
- PromotionOwnerSharingRule (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_ownersharingrule.htm)
- PromotionShare (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_share.htm)
