---
title: "GiftEntry"
domain: edu-cloud-dev-guide
topic: giftentry
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:25.547Z
estimatedTokens: 3449
keywords: [GiftEntry, gifts, created, individually, batch, they're, processed, logged, their, target, records, processing, serve, audit, trail]
---

# GiftEntry

> Represents gifts created individually or in a batch before they're
         processed and logged in their target records. After processing, these records serve as an
         audit trail for gift transactions. This object is available in API version 59.0 and
      later.

# GiftEntry

Represents gifts created individually or in a batch before they're processed and logged in their target records. After processing, these records serve as an audit trail for gift transactions. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Fundraising Access license is enabled and the Fundraising User system permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| CampaignId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe campaign that's associated with the gift entry.This field is a relationship field.Relationship NameCampaignRelationship TypeLookupRefers ToCampaign |
| CheckDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on the check that is used as the payment method for the gift. |
| City | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe city where the donor resides. |
| Country | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe country where the donor resides. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIdentifies the currency used for the gift transaction.Valid value is:USD—U.S. DollarThe default value is USD. Available in API version 61.0 and later. |
| DonorCoverAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe fee amount that a donor pays in addition to the gift amount. |
| DonorId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe person, household, or organization account associated with the gift.This field is a relationship field.Relationship NameDonorRelationship TypeLookupRefers ToAccount |
| EffectiveStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from when the commitment is in effect. Available in API version 61.0 and later. |
| Email | TypeemailPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe email of the donor. |
| ExpectedEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the total amount of the commitment is expected to be paid. Available in API version 61.0 and later. |
| ExpiryMonth | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe month of the credit card expiration date. This field is available from API version 60.0 and later. |
| ExpiryYear | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe year of the credit card expiration date. This field is available from API version 60.0 and later. |
| FirstName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe first name of the donor. |
| GiftAmount | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionThe amount of the gift. |
| GiftBatchId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe parent gift batch that's associated with the gift entry.This field is a relationship field.Relationship NameGiftBatchRelationship TypeLookupRefers ToGiftBatch |
| GiftCommitmentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe gift commitment that's associated with the gift entry.This field is a relationship field.Relationship NameGiftCommitmentRelationship TypeLookupRefers ToGiftCommitment |
| GiftDesignation1Amount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount to be allocated to designation 1. |
| GiftDesignation1Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the designation 1 to which the gift amount is to be allocated.This field is a relationship field.Relationship NameGiftDesignation1Relationship TypeLookupRefers ToGiftDesignation |
| GiftDesignation1Percent | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of gift amount to be allocated to designation 1 if the direct amount isn’t being allocated. |
| GiftDesignation2Amount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount to be allocated to designation 2. |
| GiftDesignation2Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the designation 2 to which the gift amount is to be allocated.This field is a relationship field.Relationship NameGiftDesignation2Relationship TypeLookupRefers ToGiftDesignation |
| GiftDesignation2Percent | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of gift amount to be allocated to designation 2 if the direct amount isn’t being allocated. |
| GiftDesignation3Amount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount to be allocated to designation 3. |
| GiftDesignation3Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the designation 3 to which the gift amount is to be allocated.This field is a relationship field.Relationship NameGiftDesignation3Relationship TypeLookupRefers ToGiftDesignation |
| GiftDesignation3Percent | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of gift amount to be allocated to designation 3 if the direct amount isn’t being allocated. |
| GiftProcessingResult | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe processing result of the gift entry record. |
| GiftDesignationInformation | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDetails about the gift designation such as the designation name, amount, or percentage of the gift that's allocated to the designation.Available in API version 66.0 and later. |
| GiftProcessingStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the processing status of the gift entry.Possible values are:FailureNewSuccessThe default value is New. |
| GiftReceivedDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date when the gift is received. |
| GiftTransactionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe gift transaction that's associated with the gift entry.This field is a relationship field.Relationship NameGiftTransactionRelationship TypeLookupRefers ToGiftTransaction |
| GiftType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of gift that's associated with the gift entry.Possible values are:IndividualOrganizationalThe default value is Individual. |
| HomePhone | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe home phone number of the donor. |
| IsNewRecurringGift | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the gift is a new recurring gift commitment (true) or not (false).The default value is false. Available in API version 61.0 and later. |
| IsSetAsDefault | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the values in the gift entry are used as default values in other gift entries of the gift batch or not.The default value is false. |
| Last4 | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe last 4 digits of the credit card or bank account. This field is available from API version 60.0 and later. |
| LastName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe last name of the donor. |
| LastProcessedDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the gift entry was last processed. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate isn’t null, the user accessed this record or list view. |
| MobilePhone | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe mobile number of the donor. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the gift entry record. |
| OrganizationName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the donating organization that's associated with the gift entry. |
| OutreachSourceCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe outreach source code that's associated with the campaign for the gift entry record.This field is a relationship field.Relationship NameOutreachSourceCodeRelationship TypeLookupRefers ToOutreachSourceCode |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object. ID of the creator of this object.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PaymentIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the payment method for the gift, such as check number, transaction order number, merchant order number. |
| PaymentMethod | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the payment method used for this gift.Possible values are:ACHAssetCashCheckCredit CardCryptocurrencyIn-KindPayPalStockUnknownVenmo |
| PostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe postal code from the donor's address. |
| Salutation | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the honorific abbreviation, word, or phrase to be used in front of the donor's name in greetings, such as Dr. or Mrs.Possible values are:Dr.Mr.Mrs.Ms.Mx.Prof. |
| SoftCreditInformation | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe information about the soft credit, such as the name of the soft creditor, role, and amount or percentage of soft credit allocated to the soft creditor. |
| State | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the state or province where the donor resides. |
| Street | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe street details from the donor's address. |
| TotalTransactionFeeAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total transaction fees charged by the payment processor for the gift. For example, application fees, processing fees. |
| TransactionDay | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the day of the month to create gift transaction in the future for a monthly transaction period. If you select the day as 29 or 30, the gift transaction will be created on the last day for months that don't have that many days.Valid values are: numerals 1–30 and LastDay (of the month)The default value is 1. Available in API version 61.0 and later. |
| TransactionInterval | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe interval of running the gift commitment schedule. The transaction period and interval define how the schedule is run. For example, if the transaction period is monthly and transaction interval is 3, the schedule is run after every three months. Available in API version 61.0 and later. |
| TransactionPeriod | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe period for which the gift commitment schedule is run. The transaction period and frequency define how the schedule is run. For example, if the transaction period is monthly and transaction frequency is 3, the schedule is run after every three months.Valid values are:CustomDailyMonthlyWeeklyYearlyThe default value is Monthly. Available in API version 61.0 and later. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[GiftEntryChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_change_event.htm)

Change events are available for the object.

[GiftEntryFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_feed.htm)

Feed tracking is available for the object.

[GiftEntryHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm)

History is available for tracked fields of the object.

[GiftEntryOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[GiftEntryShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_share.htm)

Sharing is available for the object.
