---
title: "LifeSciAcctGrpAssignment"
domain: life-sciences-dev-guide
topic: lifesciacctgrpassignment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.243Z
estimatedTokens: 522
keywords: [LifeSciAcctGrpAssignment, junction, account, actionable, API, version, 65.0, later, Calls]
---

# LifeSciAcctGrpAssignment

> Represents a junction between an account and actionable list. This object is
         available in API version 65.0 and later.

# LifeSciAcctGrpAssignment

Represents a junction between an account and actionable list. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActionableListId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe actionable list associated with the group assignment.This field is a relationship field.Relationship NameActionableListRefers ToActionableList |
| AssignmentReferenceRecId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe assortment or provider sample limit template associated with the group assignment.This field is a polymorphic relationship field.Relationship NameAssignmentReferenceRecRefers ToProviderSampleLimitTemplate |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDateis not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the life sciences account group assignment. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe identifier of the record in the source system. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system from which data is loaded into the object. |
