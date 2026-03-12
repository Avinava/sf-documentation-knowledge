---
title: "PlannedGift"
domain: nonprofit-cloud
topic: plannedgift
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:01.247Z
estimatedTokens: 2687
keywords: [PlannedGift, complex, gift, annuity, bequest, trust, API, version, 64.0, later, Calls, Special, Access, Rules, Associated]
---

# PlannedGift

> A complex gift such as an annuity, bequest, or trust. This object is
      available in API version 64.0 and later.

# PlannedGift

A complex gift such as an annuity, bequest, or trust. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Fundraising Access license is enabled and the Fundraising User system permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| ActuarialFactor | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA factor based on actuarial assumptions that’s used to calculate the gift’s future value. |
| AmountReceived | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount received since the planned gift record was created. |
| BequestRealizationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe expected date when a bequest is likely to be realized. |
| CaseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe case associated with the planned gift.This field is a relationship field.Relationship NameCaseRefers ToCase |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact for the planned gift.This field is a relationship field.Relationship NameContactRefers ToContact |
| CurrentValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe planned gift's current value. |
| DateCommitted | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the gift was committed. |
| DateReceived | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the gift was received. |
| DeferralPeriod | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe time period, in years, after which payments start. |
| DeferredFutureValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe projected value of a deferred gift annuity at maturity. |
| DiscountRate | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe discount rate applied to project the future value of the gift. |
| DonorGiftConceptId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe gift concept associated with the planned gift.This field is a relationship field.Relationship NameDonorGiftConceptRefers ToDonorGiftConcept |
| DonorId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe donor of the planned gift.This field is a relationship field.Relationship NameDonorRefers ToAccount |
| Expectancy | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected number of years to maturity, based on actuarial assumptions. |
| ExpectedAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected value of the planned gift. |
| ExpectedEstateValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total estimated value of a donor's estate. |
| ExpensesAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total management expenses associated with the gift. |
| FaceValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe face value of the gift, if the gift is life insurance. |
| FirstPaymentDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the first payment is made, if the gift is a trust or an annuity. |
| FutureValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe gift's projected value at maturity. |
| GiftAgreementId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe gift agreement associated with the planned gift.This field is a relationship field.Relationship NameGiftAgreementRefers ToGiftAgreement |
| GiftType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of planned gift.Possible values are:BequestBequest Specific AmountBequest Specific PercentageCharitable Gift AnnuityCharitable Lead Annuity TrustCharitable Remainder Annuity TrustCharitable Remainder TrustCharitable Remainder UnitrustDeferred Gift AnnuityDonor Advised FundImmediate Gift AnnuityLife InsuranceLife Insurance Irrevocable InterestOther Planned GiftPersonal PropertyPooled Income FundReal EstateSecurities |
| InvestmentReturnRate | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe return rate on investments related to the gift. |
| IsRevocable | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the gift is revocable (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescription |
| LastValuationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the planned gift value was last updated. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescription |
| MarketValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe gift's current market value. |
| MaturityDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the gift is expected to mature or be realized. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe ID of the planned gift record. |
| NetReturnRate | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected annual net return rate on the gift’s investments. |
| NetValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe net value of the gift after expenses and payouts. |
| OpportunityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe opportunity associated with the planned gift.This field is a relationship field.Relationship NameOpportunityRefers ToOpportunity |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThis field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PayoutFrequency | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe payment frequency.Possible values are:AnnualCustomMonthlyOne-TimeQuarterlySemi-Annual |
| PayoutRate | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe rate at which payouts are made to beneficiaries. |
| PolicyNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe policy number, if the gift is life insurance. |
| PremiumAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe premium amount, if the gift is life insurance. |
| PresentValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA calculated value of future cash flows associated with an asset or planned gift. |
| PrincipalAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe principal amount of the gift. |
| PrincipalPercentage | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of the expected amount that's the principal amount of the gift. |
| ProbabilityFactor | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe probability of receiving the gift. |
| ResiduaryShare | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of the estate allocated to the institution for residuary bequests. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the gift agreement is initiated. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the planned gift.Possible values are:ActiveClosedIn ProbateInactiveMaturedPending ApprovalRealizedUnder Agreement |
| Term | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe term of a trust for calculating future and present value. |
| TermEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the gift matures or the trust term ends. |
| TermType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe term type for the trust, such as fixed number of years, one life, or two lives.Possible values are:Fixed Number of YearsJoint LifeLife of BeneficiaryLife of DonorOne Life Fixed TermSingle LifeTwo Lives Fixed Term |
| TrustName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the trust, if the gift is categorized as a trust. |
| TrustType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of trust.Possible values are:Charitable Lead Annuity TrustCharitable Lead UnitrustCharitable Remainder Annuity TrustCharitable Remainder TrustCharitable Remainder UnitrustIrrevocable TrustRevocable TrustTestamentary Trust |
| TrusteeFees | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionFees paid to the trustee. |
| UnitsHeld | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of units that the donor holds in the pooled income fund. |
| UnitsValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe value of 1 unit in the pooled income fund. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PlannedGiftChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_change_event.htm)

Change events are available for the object.

[PlannedGiftFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_feed.htm)

Feed tracking is available for the object.

[PlannedGiftHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm)

History is available for tracked fields of the object.

[PlannedGiftOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[PlannedGiftShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_share.htm)

Sharing is available for the object.
