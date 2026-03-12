---
title: "PrivacyHold"
domain: object-reference
topic: privacyhold
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.075Z
estimatedTokens: 698
keywords: [PrivacyHold, Privacy, Hold, record, preserved, masking, deletion, Data, Management, policies, Center, API, version, 59.0, later]
---

# PrivacyHold

> Represents a Privacy Hold that indicates that a record should be
         preserved from masking or deletion by Data Management policies in Privacy Center. This
      object is available in API version 59.0 and later.

# PrivacyHold

Represents a Privacy Hold that indicates that a record should be preserved from masking or deletion by Data Management policies in Privacy Center. This object is available in API version 59.0 and later.

Use Privacy Hold with Data Management policies in Privacy Center. Add a condition to your policy to exclude records with an active Privacy Hold status from masking or deletion actions.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available for users with the Privacy Center license and the Manage Privacy Hold user permission.

## Fields

| Field | Details |
| --- | --- |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date the Privacy Hold ends. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if Privacy Hold is active on the record.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the Privacy Hold. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the account associated with this customer.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PrivacyHoldReasonId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the associated Privacy Hold Reason.This field is a relationship field.Relationship NamePrivacyHoldReasonRelationship TypeLookupRefers ToPrivacyHoldReason |
| ReferenceRecordId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the record marked for the Privacy Hold.This field is a polymorphic relationship field.Relationship NameReferenceRecordRelationship TypeLookupRefers ToAccount, Contact, Individual, Lead, User |
| ReferenceRecordType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of object the record with the Privacy Hold is associated with.Possible values are:AccountContactIndividualLeadUser |
| RegisteredDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date the Privacy Hold was added to the record. |
