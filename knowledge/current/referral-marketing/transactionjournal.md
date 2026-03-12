---
title: "TransactionJournal"
domain: referral-marketing
topic: transactionjournal
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.317Z
estimatedTokens: 1389
keywords: [TransactionJournal, advocate, their, referred, party's, activity, API, version, 49.0, later, Calls]
---

# TransactionJournal

> Represents the details of an advocate or their referred party's
         activity. This object is available in API version 49.0 and later.

# TransactionJournal

Represents the details of an advocate or their referred party's activity. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActivityDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionRequired. The date of the event. |
| ExternalTransactionNumber | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe reference number of event from an external system. |
| JournalSubTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the journal subtype associated with the transaction journal. The associated journal subtype specifies the type of event for which the transaction journal is created.This field is a relationship field.Relationship NameJournalSubTypeRelationship TypeLookupRefers ToJournalSubType |
| JournalTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the journal type associated with the transaction journal. In Referral Marketing, the journal type is always Referral.This field is a relationship field.Relationship NameJournalTypeRelationship TypeLookupRefers ToJournalType |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| LoyaltyProgramId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the referral program for which the transaction journal was created.This field is a relationship field.Relationship NameLoyaltyProgramRelationship TypeLookupRefers ToLoyaltyProgram |
| MemberId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the advocate’s Loyalty Program Member record that’s associated with the transaction journal.This field is a polymorphic relationship field.Relationship NameMemberRelationship TypeLookupRefers ToLoyaltyProgramMember |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe unique number of the transaction journal. |
| PromotionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the promotion for which the transaction journal was created.This field is a relationship field.Relationship NamePromotionRelationship TypeLookupRefers ToPromotion |
| ReferralCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe referral code that was used by a referred party to sign up as a new customer. |
| ReferralId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the Referral record associated with the referred party.This field is a relationship field.Relationship NameReferralRelationship TypeLookupRefers ToReferral |
| ReferredMemberId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReserved for internal use and isn't required for B2C or B2B referral programs. Don't use this field to customize or extend your implementation.This field is a relationship field.Relationship NameReferredMemberRelationship TypeLookupRefers ToLoyaltyProgramMember |
| ReferredPartyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the Contact or Person Account associated with the referred friend for a B2C referral program.The ID of the Lead or Business Account associated with the referred party for a B2B referral program.This field is a polymorphic relationship field.Relationship NameReferredPartyRelationship TypeLookupRefers ToAccount, Contact |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The status of the transaction journal.Possible values are:CancelledErrorPendingProcessedApproved—Reserved for internal use and isn't required for B2C or B2B referral programs. Don't use this field to customize or extend your implementation.ProcessingError—Reserved for internal use and isn't required for B2C or B2B referral programs. Don't use this field to customize or extend your implementation.SystemApproved—Reserved for internal use and isn't required for B2C or B2B referral programs. Don't use this field to customize or extend your implementation.SystemRejected—Reserved for internal use and isn't required for B2C or B2B referral programs. Don't use this field to customize or extend your implementation.The default value is Pending. |
| TransactionAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionReserved for internal use and isn't required for B2C or B2B referral programs. Don't use this field to customize or extend your implementation. |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies which Salesforce product created the record.Possible values are:Loyalty—Reserved for internal use and isn't required for B2C or B2B referral programs. Don't use this value to customize or extend your implementation.Rebates—Reserved for internal use and isn't required for B2C or B2B referral programs. Don't use this value to customize or extend your implementation.Referral—Use this value for Referral Marketing activities. |
