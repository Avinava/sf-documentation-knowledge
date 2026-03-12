---
title: "LoyaltyProgramProcess"
domain: loyalty
topic: loyaltyprogramprocess
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:53.308Z
estimatedTokens: 1249
keywords: [LoyaltyProgramProcess, loyalty, program, processes, determine, how, transaction, journals, processed, API, version, 54.0, later, Calls, Associated]
---

# LoyaltyProgramProcess

> Represents information about loyalty program processes that determine how
         transaction journals are processed. This object is available in API version 54.0 and
      later.

# LoyaltyProgramProcess

Represents information about loyalty program processes that determine how transaction journals are processed. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description of the loyalty program process. |
| ExecutionType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, SortDescriptionSpecifies the method used for executing the loyalty program process. Determines how transaction journals are processed. If you select Real Time, incoming transactions are processed as soon as they’re created. If you select Batch, then Run Program Process for Transaction Journal action in Flows is used to schedule when pending transaction journals are processed.Possible values are:BatchBatchAndRealTime—BothRealTimeThe default value is RealTime. |
| JournalSubTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the journal subtype record associated with the loyalty program process record.This is a relationship field.Relationship NameJournalSubTypeRelationship TypeLookupRefers ToJournalSubType |
| JournalTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the journal type record associated with the loyalty program process record.This is a relationship field.Relationship NameJournalTypeRelationship TypeLookupRefers ToJournalType |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| LoyaltyProgramId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe loyalty program associated with the loyalty program process record.This is a relationship field.Relationship NameLoyaltyProgramRelationship TypeLookupRefers ToLoyaltyProgram |
| LoyaltyTierGroup | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe tier group of a program that's associated with the loyalty program process.This field is available in API version 56.0 and later.This is a relationship field.Relationship NameLoyaltyProgramRelationship TypeLookupRefers ToLoyaltyProgram |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The name of the loyalty program process. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ProcessType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionRequired. Specifies the type of loyalty program process.Possible values are:CancelVoucher—This value is available in API version 56.0 and later.CreditPointsToMembers—This value is available in API version 56.0 and later.DebitPointsFromMembers—This value is available in API version 56.0 and later.EnrollInPromotion—This value is available in API version 56.0 and later.GetMemberPromotions—This value is available in API version 56.0 and later.IssueVoucher—This value is available in API version 56.0 and later.OptOutPromotion—This value is available in API version 58.0 and later.TierProcessing—This value is available in API version 56.0 and later.TransactionJournalUnenrollMember—This value is available in API version 56.0 and later.UpdateMemberDetails—This value is available in API version 56.0 and later. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the loyalty program process.Possible values are:ActiveDraftInactiveThe default value is Draft. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LoyaltyProgramProcessHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[LoyaltyProgramProcessOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

Sharing rules are available for the object.

[LoyaltyProgramProcessShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
