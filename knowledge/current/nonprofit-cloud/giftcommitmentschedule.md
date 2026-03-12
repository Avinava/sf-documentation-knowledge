---
title: "GiftCommitmentSchedule"
domain: nonprofit-cloud
topic: giftcommitmentschedule
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:01.540Z
estimatedTokens: 2092
keywords: [GiftCommitmentSchedule, schedule, fulfilling, commitment, API, version, 59.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# GiftCommitmentSchedule

> Represents the schedule for fulfilling the commitment. This
      object is available in API version 59.0 and later.

# GiftCommitmentSchedule

Represents the schedule for fulfilling the commitment. This object is available in API version 59.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=nonprofit_cloud)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Fundraising Access license is enabled and the Fundraising User system permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| CampaignId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe campaign associated with this gift commitment schedule. All gift transactions associated with this gift commitment schedule are associated with this campaign.This field is a relationship field.Relationship NameCampaignRelationship TypeLookupRefers ToCampaign |
| CampaignName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the campaign associated with the gift commitment schedule. |
| CommitmentUpdateReason | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason the gift commitment schedule changed.Possible values are:Payment Method DeclinedFinancial Hardship |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the new schedule for this gift commitment. |
| GiftCommitmentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe commitment associated with this gift commitment schedule. A value is always required in this field to save the record.This field is a relationship field.Relationship NameGiftCommitmentRelationship TypeMaster-DetailRefers ToGiftCommitment |
| GiftCommitmentName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the related gift commitment. |
| GiftCommitmentSchdBefEditId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe schedule that's associated with the current gift commitment schedule before it was editedThis field is a relationship field.Relationship NameGiftCommitmentSchdBefEditRelationship TypeLookupRefers ToGiftCommitmentSchedule |
| GiftCommitmentStatus | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionThe status of the gift commitment that's fulfilled by the schedule.Possible values are:ActiveClosedDraftFailingLapsedPausedThe default value is Draft. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate isn’t null, the user accessed this record or list view. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the gift commitment schedule. |
| OutreachSourceCodeId | TypelookupPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe outreach source code associated with the gift transaction.This field is a relationship field. This field is available from API version 60.0 and later.Relationship NameOutreachSourceCodeRelationship TypeLookupRefers ToOutreachSourceCode |
| PaymentInstrumentId | TypelookupPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Payment Instrument used to complete the transaction. This field is available from API version 60.0 and later.This field is a relationship field.Relationship NamePaymentInstrumentRelationship TypeLookupRefers ToPaymentInstrument |
| PaymentMethod | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe payment method for the transactions associated with this gift commitment schedule. All transactions associated with the commitment schedule default to this gift payment method.Possible values are:ACHAssetCashCheckCredit CardCryptocurrencyIn-KindPayPalStockUnknownVenmo |
| ProcessorReference | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reference of the payment processor associated with the payment instrument. This field is available from API version 60.0 and later. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe start date of the new schedule for this gift commitment. A value is always required in this field to save the record. |
| TotalScheduleAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected total amount of all gift transactions associated with the gift commitment schedule. |
| TransactionAmount | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionThe gift amount of each transaction associated with the gift commitment schedule. A value is always required in this field to save the record. |
| TransactionDay | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe day of the month to create gift transaction in the future for a monthly or yearly transaction period. If you select the day as 29 or 30, the gift transaction will be created on the last day for months that don't have that many days.Possible values are the numbers 1 through 30 or the value LastDay.The default value is 1.Always required when the Transaction Period is Monthly. |
| TransactionInterval | TypeintPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe interval of running the gift commitment schedule. The transaction period and interval define how the schedule is run. For example, if the transaction period is monthly and the transaction interval is 3, the schedule is run after every three months. |
| TransactionPeriod | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe period for which the gift commitment schedule is run. The transaction period and frequency define how the schedule is run. For example, if the transaction period is monthly and the transaction frequency is 3, the schedule is run after every three months. A value is always required in this field to save the record.Possible values are:CustomDailyMonthlyWeeklyYearlyThe default value is Monthly. |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of gift commitment schedule. A value is always required in this field to save the record.Possible values are:Create TransactionsPause TransactionsThe default value is Create Transactions. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[GiftCommitmentScheduleChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_change_event.htm "HTML (New Window)") (API Version 62.0)

Change events are available for the object.

[GiftCommitmentScheduleFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_feed.htm)

Feed tracking is available for the object.

[GiftCommitmentScheduleHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm)

History is available for tracked fields of the object.

[GiftCommitmentScheduleOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_ownersharingrule.htm) (API Version 64.0)

Sharing rules are available for the object.

[GiftCommitmentScheduleShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_share.htm) (API Version 64.0)

Sharing is available for the object.
