---
title: "GiftCommitment"
domain: edu-cloud-dev-guide
topic: giftcommitment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.477Z
estimatedTokens: 2741
keywords: [GiftCommitment, commitment, made, donor, API, version, 59.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# GiftCommitment

> Represents the commitment made by a donor. This object is available in
      API version 59.0 and later.

# GiftCommitment

Represents the commitment made by a donor. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Fundraising Access license is enabled and the Fundraising User system permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| CampaignId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe campaign associated with this commitment.This field is a relationship field.Relationship NameCampaignRelationship TypeLookupRefers ToCampaign |
| CurrentGiftCmtScheduleId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe current, active schedule of the commitment.This field is a relationship field.Relationship NameCurrentGiftCmtScheduleRelationship TypeLookupRefers ToGiftCommitmentSchedule |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description about the gift commitment. |
| DonorId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe person, household, or organization account associated with this commitment.This field is a relationship field.Relationship NameDonorRelationship TypeLookupRefers ToAccount |
| DonorGiftConceptId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe gift concept associated with the gift commitment.This field is a relationship field.Relationship NameDonorGiftConceptRelationship TypeLookupRefers ToDonorGiftConcept |
| EffectiveStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from when the commitment is in effect. |
| EffectiveTransactionInterval | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe transaction interval that's applicable based on the currently active schedule. |
| EffectiveTransactionPeriod | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe transaction period that's applicable based on the currently active schedule. |
| ExpectedAssetMaturityDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe expected maturity date of all the committed assets for a commitment. |
| ExpectedAssetTransferDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe expected date of transferring all the committed assets for a commitment. |
| ExpectedEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the total amount of the commitment is expected to be fully paid. |
| ExpectedTotalCmtAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total donation amount that's expected for this commitment. |
| FormalCommitmentType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the formality type of the commitment.Possible values are:VerbalWrittenThe default value is Verbal. |
| FulfillmentType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies whether the commitment fulfillment depends on one or more conditions or is unconditional.Possible values are:ConditionalUnconditionalThe default value is Unconditional. |
| GiftAgreementId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe gift agreement associated with the gift commitment.This field is a relationship field.Relationship NameGiftAgreementRelationship TypeLookupRefers ToGiftAgreement |
| GiftVehicle | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the vehicle that's used to fulfill a gift commitment.Possible values are:BequestCharitable Gift AnnuityDonor Advised FundLife InsuranceOtherPooled Income FundTrust |
| GiftVehicleType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of gift vehicle that fulfills the gift commitment.Possible values are:Charitable Lead TrustCharitable Remainder TrustDeferred Gift AnnuityFlexible Gift AnnuityImmediate Gift AnnuityOther |
| IsAssetTransferExpected | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the donor intends to transfer non-monetary assets or not.The default value is false. |
| LastPaidTransactionDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date of the last paid transaction for the commitment. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate isn’t null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the gift commitment. |
| NextTransactionAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected amount of the next gift transaction in the commitment schedule. This is calculated automatically based on the currently active schedule. |
| NextTransactionDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date of the next gift transaction in the commitment schedule. This is calculated automatically based on the currently active schedule. |
| OpportunityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe opportunity associated with this commitment.This field is a relationship field.Relationship NameOpportunityRelationship TypeLookupRefers ToOpportunity |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PartyPhilanthropicRsrchPrflId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe research profile related to the gift commitment.This field is a relationship field.Relationship NamePartyPhilanthropicRsrchPrflRelationship TypeLookupRefers ToPartyPhilanthropicRsrchPrfl |
| PlannedGiftId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe planned gift associated with the gift commitment.This field is a relationship field.Relationship NamePlannedGiftRelationship TypeLookupRefers ToPlannedGift |
| RecurrenceType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of recurrence of a commitment.Possible values are:Fixed LengthOpen EndedThe default value is Open Ended. |
| ScheduleType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the schedule and type of the commitment.Possible values are:CustomRecurringThe default value is Recurring. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the commitment.Possible values are:ActiveClosedDraftFailingLapsedPausedThe default value is Draft. |
| TotCommitmentScheduleAmt | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total expected donation amount that's calculated across all schedules in this commitment.This field is a calculated field. |
| TotExpcAssetMaturityVal | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected maturity value of all the committed assets for a commitment. |
| TotExpcAssetTransferVal | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total expected value of all the committed assets when they're transferred for a commitment. |
| TotalAssetPresentValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total current value of all the committed assets for a commitment. |
| TotalCurrentMonth | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total value of all gift commitments made for the current month. This field is available from API version 62.0 and later. |
| TotalCurrentQuarter | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total value of all gift commitments made for the current quarter. This field is available from API version 62.0 and later. |
| TotalCurrentYear | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total value of all gift commitments made for the current year. This field is available from API version 62.0 and later. |
| TotalNextYear | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total value of all gift commitments made for the next year. This field is available from API version 62.0 and later. |
| TotalPaidTransactionAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total amount of paid gift transactions for the commitment. |
| TransactionPaymentCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of paid gift transactions for the commitment. |
| WrittenOffAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total amount of written-off gift transactions for this commitment. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[GiftCommitmentChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_change_event.htm "HTML (New Window)") (API Version 62.0)

Change events are available for the object.

[GiftCommitmentFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_feed.htm)

Feed tracking is available for the object.

[GiftCommitmentHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm)

History is available for tracked fields of the object.

[GiftCommitmentOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_ownersharingrule.htm) (API Version 64.0)

Sharing rules are available for the object.

[GiftCommitmentShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_share.htm)

Sharing is available for the object.
