---
title: "LoyaltyPgmMbrPromEligView"
domain: loyalty
topic: loyaltypgmmbrpromeligview
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:53.169Z
estimatedTokens: 1680
keywords: [LoyaltyPgmMbrPromEligView, virtual, consolidated, view, loyalty, program, member’s, eligibility, promotion, their, enrollment, status, eligible, promotions, API]
---

# LoyaltyPgmMbrPromEligView

> Represents a virtual object that provides a consolidated view of the
         loyalty program member’s eligibility for a promotion and their enrollment status in
         eligible promotions. This object is available in API version 56.0 and
      later.

# LoyaltyPgmMbrPromEligView

Represents a virtual object that provides a consolidated view of the loyalty program member’s eligibility for a promotion and their enrollment status in eligible promotions. This object is available in API version 56.0 and later.

## Supported Calls

create(), describeSObjects(), query()

LoyaltyPgmMbrPromEligView isn't available in the Object Manager and can't be customized.

## Fields

| Field | Details |
| --- | --- |
| CurrPromotionLiabilityAmt | TypecurrencyPropertiesCreate, Filter, Nillable, SortDescriptionThe current liability amount of the related promotion. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe currency ISO code of the promotion. This field is only available in orgs where multiple currencies are enabled.Possible values are:USD—U.S. DollarThe default value is USD. |
| CurrentPromotionPointsCount | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe liability amount incurred for the related promotion till date. |
| DefaultVoucherDefinitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe voucher definition that's used as the default in the related promotion.This field is a relationship field.Relationship NameDefaultVoucherDefinitionRelationship TypeLookupRefers ToVoucherDefinition |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, SortDescriptionThe description of the LoyaltyPgmMbrPromEligView record. |
| DoesPromHavePtWithFctr | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIndicates whether the related promotion has a point with factor.The default value is false. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe end date of the related promotion. |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, SortDescriptionEnd date and time of the promotion. |
| ExternalId | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionA combination of the related loyalty program member ID and the related promotion ID. |
| FulfillmentAction | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the fulfillment action of the related promotion.Possible values are:CreditPointsIssueVoucher |
| IsMbrEligBsdCmpnOrSgmt | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIndicates if the member who is eligible for a promotion is part of a campaign or segment.The default value is false. |
| IsPromotionEnrollmentRqr | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIndicates whether the related promotion requires member enrollment.The default value is false. |
| IssuedPromotionVoucherCount | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe number of vouchers issued for the related promotion. |
| LoyaltyProgramCurrencyId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe loyalty program currency that’s used to credit points for the related promotion.This field is a relationship field.Relationship NameLoyaltyProgramCurrencyRelationship TypeLookupRefers ToLoyaltyProgramCurrency |
| LoyaltyProgramId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe loyalty program that's associated with the related promotion.This field is a relationship field.Relationship NameLoyaltyProgramRelationship TypeLookupRefers ToLoyaltyProgram |
| LoyaltyProgramMemberId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe loyalty program member associated with the related promotion.This field is a relationship field.Relationship NameLoyaltyProgramMemberRelationship TypeLookupRefers ToLoyaltyProgramMember |
| LoyaltyPromotionType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the type of the related promotion.Possible values are:CumulativeJointStandard |
| MaxPromotionLiabilityAmount | TypecurrencyPropertiesCreate, Filter, Nillable, SortDescriptionThe maximum liability amount that the related promotion can incur. |
| MaxPromotionVoucherCount | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe maximum vouchers that can be issued for the related promotion. |
| MaximumPromotionRewardValue | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe maximum reward value of the related promotion. |
| MemberEligibilityCategory | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies whether the loyalty program member is eligible for the promotion.Possible values are:EligibleEligibleButNotEnrolledIneligible |
| Objective | TypetextareaPropertiesCreate, Filter, Nillable, SortDescriptionThe objective of the related promotion. |
| PromEnrollmentStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe date when the enrollment in the related promotion starts. |
| PromotionCumulativeUsageTgt | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe cumulative usage target of the related promotion. |
| PromotionEnrollmentEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe date when the enrollment in the related promotion ends. |
| PromotionId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe promotion related to the promotion related to the LoyaltyPgmMbrPromEligView record.This field is a relationship field.Relationship NamePromotionRelationship TypeLookupRefers ToPromotion |
| PromotionImageUrl | TypeurlPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe URL of the promotion’s image location. This field is available in API version 58.0 and later. |
| PromotionName | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe name of the related promotion. |
| PromotionPointFactor | TypedoublePropertiesCreate, Filter, Nillable, SortDescriptionThe points factor of the related promotion. |
| PromotionTrxnJournalType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe transaction journal type that's associated with the related promotion.Possible values are:AccrualRedemption |
| StartDate | TypedatePropertiesCreate, Filter, Group, SortDescriptionRequired. The start date of the related promotion. |
| StartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, SortDescriptionThe start date and time of the promotion. |
| TotalPromotionRewardPointsVal | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe total points credited to the loyalty program member for the related promotion. |
