---
title: "AccountContactRelation"
domain: omnistudio
topic: accountcontactrelation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:51.717Z
estimatedTokens: 849
keywords: [AccountContactRelation, Standard, custom, extend, Account, Sector, Solutions, represent, members, household, API, version, 56.0, later, Calls]
---

# AccountContactRelation

> Standard and custom fields extend the standard Account object for use in
         Public Sector Solutions to represent information of members in a household. This
      object is available in API version 56.0 and later.

# AccountContactRelation

Standard and custom fields extend the standard Account object for use in Public Sector Solutions to represent information of members in a household. This object is available in API version 56.0 and later.

For more information, see [AccountContactRelation](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_accountcontactrelation.htm).

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionLookup to the Account object.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| ContactId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionLookup to the Contact object.This field is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |
| DataRollupCategories | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionSpecifies the categories in which the data associated with a group is aggregated. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date a relationship between a contact and account ended. Use with the Start Date to keep a history of the relationship. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether relationship is active (true) or not (false).The default value is false. |
| IsDirect | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether relationship is direct (true) or not (false).The default value is false. |
| IsIncludedInGroup | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the data of a group or a business account is included in the Household (true) or not (false).The default value is false. |
| IsPrimaryGroup | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the group is a primary group for the member (yes) or not (no).The default value is false. |
| IsPrimaryMember | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the member is a primary contact of a group (true) or not (false).The default value is false. |
| Roles | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionThe contact’s participating role in the account.Possible values are:DaughterFatherHusbandMotherOtherSonWife |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date a relationship between a contact and account began. Use with the End Date to keep a history of the relationship |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AccountContactRelationChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm) (API Version 59.0)

Change events are available for the object.
