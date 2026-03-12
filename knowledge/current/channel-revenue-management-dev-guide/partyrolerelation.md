---
title: "PartyRoleRelation"
domain: channel-revenue-management-dev-guide
topic: partyrolerelation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.471Z
estimatedTokens: 574
keywords: [PartyRoleRelation, relationship, participants, API, version, 58.0, later, Calls]
---

# PartyRoleRelation

> Represents information about the type of relationship between the
         participants in a relationship. This object is available in API version 58.0 and
      later.

# PartyRoleRelation

Represents information about the type of relationship between the participants in a relationship. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the party role relationship. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RelatedInverseRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe record that specifies the inverse relationship between the roles.This field is a relationship field.Relationship NameRelatedInverseRecordRelationship TypeLookupRefers ToPartyRoleRelation |
| RelatedRoleName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe role that's related to another role in the relationship. |
| RelationshipObjectName | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe object that's associated with the relationship.Possible values are:Account_Account_Relationship—Account Account RelationshipContact_Contact_Relationship—Contact Contact RelationshipThe default value is Account_Account_Relationship. |
| RoleName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the role in the relationship. |
| ShouldCreaInversRoleAuto | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIndicates whether a role record should be created automatically for the relationship (true) or not (false).The default value is false. |
