---
title: "GiftTransaction"
domain: edu-cloud-dev-guide
topic: gifttransaction
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:25.595Z
estimatedTokens: 3028
keywords: [GiftTransaction, completed, transaction, gift, API, version, 59.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# GiftTransaction

> Represents a completed transaction from a gift. This object is
      available in API version 59.0 and later.

# GiftTransaction

Represents a completed transaction from a gift. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Fundraising Access license is enabled and the Fundraising User system permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| AcknowledgementDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the gift transaction was acknowledged. |
| AcknowledgementStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the acknowledgement that's sent for the gift transaction.Possible values are:Don't SendSentTo Be SentThe default value is To Be Sent. |
| CampaignId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe campaign associated with the gift transaction.This field is a relationship field.Relationship NameCampaignRelationship TypeLookupRefers ToCampaign |
| CheckDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on the check. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIdentifies the currency used for the gift transaction.Valid value is:USD—U.S. DollarThe default value is USD. Available in API version 61.0 and later. |
| CurrentAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThis field is a calculated field. |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the gift transaction. |
| DonorCoverAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount the donor added to their gift to cover fees. Available in API version 61.0 and later. |
| DonorGiftConceptId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe gift concept associated with the gift.This field is a relationship field.Relationship NameDonorGiftConceptRelationship TypeLookupRefers ToDonorGiftConcept |
| DonorId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe person, household, or organization account associated with the gift transaction.This field is a relationship field.Relationship NameDonorRelationship TypeLookupRefers ToAccount |
| GatewayReference | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference of the transaction that the gateway assigned. This field is available from API version 60.0 and later. |
| GatewayTransactionFee | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe transaction fee charged by the payment gateway. This field is available from API version 60.0 and later. |
| GiftAgreementId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe gift agreement associated with the gift transaction.This field is a relationship field.Relationship NameGiftAgreementRelationship TypeLookupRefers ToGiftAgreement |
| GiftCommitmentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe gift commitment associated with the gift transaction.This field is a relationship field.Relationship NameGiftCommitmentRelationship TypeLookupRefers ToGiftCommitment |
| GiftCommitmentScheduleId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe gift commitment schedule associated with the gift transaction.This field is a relationship field.Relationship NameGiftCommitmentScheduleRelationship TypeLookupRefers ToGiftCommitmentSchedule |
| GiftType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of gift that's associated with the gift transaction.Possible values are:IndividualOrganizationalThe default value is Individual. |
| IsFullyRefunded | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSet to true when Status equals Fully Refunded. You can query and filter on this field, but you cannot directly set the value. |
| IsPaid | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSet to true when Status equals Paid and Current Amount equals 0. You can query and filter on this field, but you cannot directly set the value. |
| IsPartiallyRefunded | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSet to true when Status equals Paid and Current Amount is greater than 0. You can query and filter on this field, but you cannot directly set the value. |
| IsWrittenOff | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSet to true when Status equals Written-Off. You can query and filter on this field, but you cannot directly set the value. |
| LastGatewayErrorMessage | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe most recent error message that's received by the gateway. This field is available from API version 60.0 and later. |
| LastGatewayProcessedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time of the last processing attempt by the gateway. This field is available from API version 60.0 and later. |
| LastGatewayResponseCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe most recent response code that's received by the gateway. This field is available from API version 60.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate isn't null, the user accessed this record or list view. |
| MatchingEmployerTransactionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe gift transaction made by the employer that matches the gift transaction.This field is a relationship field.Relationship NameMatchingEmployerTransactionRelationship TypeLookupRefers ToGiftTransaction |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the gift transaction. |
| NonTaxDeductibleAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe portion of the gift transaction amount that can't be claimed as a tax deduction by the donor. Available in API version 61.0 and later. |
| OriginalAmount | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionThe original amount of gift transaction that includes donor cover and excludes the transaction fees. A value is always required in this field to save the record. |
| OutreachSourceCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe outreach source code associated with the gift transaction.This field is a relationship field.Relationship NameOutreachSourceCodeRelationship TypeLookupRefers ToOutreachSourceCode |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PartyPhilanthropicRsrchPrflId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe research profile associated with the gift.This field is a relationship field.Relationship NamePartyPhilanthropicRsrchPrflRelationship TypeLookupRefers ToPartyPhilanthropicRsrchPrfl |
| PaymentIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reference number associated with the payment method for the gift, such as check number, transaction order number, merchant order number. |
| PaymentInstrumentId | TypelookupPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Payment Instrument used to complete the transaction. This field is available from API version 60.0 and later.This field is a relationship field.Relationship NamePaymentInstrumentRelationship TypeLookupRefers ToPaymentInstrument |
| PaymentMethod | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the payment method used to complete the gift transaction. A value is always required in this field to save the record.Possible values are:ACHAssetCashCheckCredit CardCryptocurrencyIn-KindPayPalStockUnknownVenmo |
| ProcessorReference | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reference of the payment processor associated with the payment instrument. This field is available from API version 60.0 and later. |
| ProcessorTransactionFee | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe transaction fee charged by the payment processor. This field is available from API version 60.0 and later. |
| RefundedAmount | TypecurrencyPropertiesDefaulted on create, Filter, Nillable, SortDescriptionThe amount of the original gift transaction that was refunded.This field is a calculated field. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies the status of the gift transaction. A value is always required in this field to save the record.Possible values are:CanceledFailedFully RefundedPaidPendingUnpaidWritten-OffThe default value is Unpaid. |
| TaxReceiptStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the tax receipt for the gift transaction. This field is available from API version 62.0 and later.Possible values are:Don't SendSentTo Be SentThe default value is To Be Sent. |
| TotalTransactionFee | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total amount of fees charged by the payment gateway and processor for this transaction. This field is available from API version 60.0 and later.This field is a calculated field. |
| TransactionDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the donor completed the gift transaction.This field is required if the gift transaction status is set to Paid or Fully Refunded. |
| TransactionDueDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe expected date of the scheduled gift transaction.This field is required if the gift transaction is related to a gift commitment. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[GiftTransactionChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_change_event.htm "HTML (New Window)") (API Version 62.0)

Change events are available for the object.

[GiftTransactionFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_feed.htm)

Feed tracking is available for the object.

[GiftTransactionHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm)

History is available for tracked fields of the object.

[GiftTransactionOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[GiftTransactionShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_share.htm)

Sharing is available for the object.
