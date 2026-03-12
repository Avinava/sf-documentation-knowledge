---
title: "LoyaltyProgramProcess"
domain: referral-marketing
topic: loyaltyprogramprocess
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.210Z
estimatedTokens: 1603
keywords: [LoyaltyProgramProcess, process, processes, transaction, journals, referral, promotion’s, advocates, their, referred, party’s, events, API, version, 59.0]
---

# LoyaltyProgramProcess

> Represents information about a process that processes transaction
         journals for a referral promotion’s advocates and their referred party’s referral
         events. This object is available in API version 59.0 and later.

# LoyaltyProgramProcess

Represents information about a process that processes transaction journals for a referral promotion’s advocates and their referred party’s referral events. This object is available in API version 59.0 and later.

When a marketing manager activates a referral promotion, two processes are automatically created for the promotion. One process is used to process transaction journals of the subtype Referral Signup and the process rewards referrals when they sign up. The second process is used to process transaction journals of the subtype Advocate Reward and the process rewards advocates after their referrals complete their first purchase. Both processes aren’t for the marketing manager to view or edit.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description or the business scenario of the process. |
| ExecutionType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, SortDescriptionRequired. Specifies the mode in which you want transaction journals to be processed by the process.Possible values are:BatchBatchAndRealTimeRealTimeThe default value is RealTime. |
| JournalSubTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the journal subtype associated with the process. The process only processes transaction journals whose journal subtype is the same as the process.This field is a relationship field.Relationship NameJournalSubTypeRelationship TypeLookupRefers ToJournalSubType |
| JournalTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the journal type associated with the process. The process only processes transaction journals whose journal type is the same as the process. For Referral Marketing, transaction journals are always associated with the Referral journal type.This field is a relationship field.Relationship NameJournalTypeRelationship TypeLookupRefers ToJournalType |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| LoyaltyProgramId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The ID of the referral program that the journal type belongs to.This field is a relationship field.Relationship NameLoyaltyProgramRelationship TypeLookupRefers ToLoyaltyProgram |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the journal type. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ProcessType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionRequired. The type of process. For Referral Marketing, the process type is always TransactionJournal.Possible values are:CancelVoucher—Reserved for internal use and isn't required for B2C or B2B referral programs. Don't use this value to customize or extend your implementation.CreditPointsToMembers—Reserved for internal use and isn't required for B2C or B2B referral programs. Don't use this value to customize or extend your implementation.DebitPointsFromMembers—Reserved for internal use and isn't required for B2C or B2B referral programs. Don't use this value to customize or extend your implementation.EnrollInPromotion—Reserved for internal use and isn't required for B2C or B2B referral programs. Don't use this value to customize or extend your implementation.GetMemberPromotions—Reserved for internal use and isn't required for B2C or B2B referral programs. Don't use this value to customize or extend your implementation.IssueVoucher—Reserved for internal use.OptOutPromotion—Reserved for internal use and isn't required for B2C or B2B referral programs. Don't use this value to customize or extend your implementation.TierProcessing—Reserved for internal use and isn't required for B2C or B2B referral programs. Don't use this value to customize or extend your implementation.TransactionJournalUnenrollMember—Reserved for internal use and isn't required for B2C or B2B referral programs. Don't use this value to customize or extend your implementation.UpdateMemberDetails—Reserved for internal use and isn't required for B2C or B2B referral programs. Don't use this value to customize or extend your implementation. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The status of the process.Possible values are:ActiveDraftInactiveThe default value is Draft. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LoyaltyProgramProcessHistory](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[LoyaltyProgramProcessOwnerSharingRule](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[LoyaltyProgramProcessShare](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- LoyaltyProgramProcessHistory (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_history.htm)
- LoyaltyProgramProcessOwnerSharingRule (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_ownersharingrule.htm)
- LoyaltyProgramProcessShare (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_share.htm)
