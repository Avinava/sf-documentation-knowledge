---
title: "AccountAccountRelation"
domain: automotive-cloud
topic: accountaccountrelation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.887Z
estimatedTokens: 1098
keywords: [AccountAccountRelation, relationship, accounts, dealer, account, household, API, version, 58.0, later, Calls, Special, Access, Rules, Associated]
---

# AccountAccountRelation

> Represents a relationship between accounts, such as a relationship between a
         dealer account and a household account. This object is available in API version 58.0
      and later.

# AccountAccountRelation

Represents a relationship between accounts, such as a relationship between a dealer account and a household account. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Automotive and Group Membership must be enabled.

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the account associated with this account account relationship.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the relationship ends. |
| HierarchyType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the hierarchy between accounts that are related.Possible values are:ChildParentPeerThe default value is Parent. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the account is actively involved with the related account (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the account account relationship. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PartyRoleRelationId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe relationship between two accounts.This field is a relationship field.Relationship NamePartyRoleRelationRelationship TypeLookupRefers ToPartyRoleRelation |
| RelatedAccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe related account in the relationship.This field is a relationship field.Relationship NameRelatedAccountRelationship TypeLookupRefers ToAccount |
| RelatedInverseRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe record that specifies the inverse relationship between the accounts.This field is a relationship field.Relationship NameRelatedInverseRecordRelationship TypeLookupRefers ToAccountAccountRelation |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the relationship starts. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AccountAccountRelationChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[AccountAccountRelationFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[AccountAccountRelationHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[AccountAccountRelationOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[AccountAccountRelationShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
