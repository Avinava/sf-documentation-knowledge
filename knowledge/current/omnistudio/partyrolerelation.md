---
title: "PartyRoleRelation"
domain: omnistudio
topic: partyrolerelation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:54.168Z
estimatedTokens: 963
keywords: [PartyRoleRelation, Represents, information, relationship, between, participants., API, version, 57.0, later., Supported, Calls, Fields, Associated, Objects]
---

# PartyRoleRelation

> Represents information about the type of relationship between the
         participants. This object is available in API version 57.0 and later.

# PartyRoleRelation

Represents information about the type of relationship between the participants. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the party role relationship. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RelatedInverseRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe record that specifies the inverse relationship between the roles.This field is a relationship field.Relationship NameRelatedInverseRecordRelationship TypeLookupRefers ToPartyRoleRelation |
| RelatedRoleName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe role that's related to another role in the relationship. |
| RelationshipObjectName | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe object that's associated with the relationship.Possible values are:Account_Account_Relationship—Account Account RelationshipContact_Contact_Relationship—Contact Contact RelationshipThe default value is Account_Account_Relationship. |
| RoleName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the role in the relationship. |
| ShouldCreaInversRoleAuto | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIndicates whether a role record should be created automatically for the relationship (true) or not (false).The default value is false. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PartyRoleRelationChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm "HTML (New Window)") (API Version 63.0)

Change events are available for the object.

[PartyRoleRelationFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm "HTML (New Window)")

Feed tracking is available for the object.

[PartyRoleRelationHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for the object.

[PartyRoleRelationOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm "HTML (New Window)")

Sharing rules are available for the object.

[PartyRoleRelationShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm "HTML (New Window)")

Sharing is available for the object.
