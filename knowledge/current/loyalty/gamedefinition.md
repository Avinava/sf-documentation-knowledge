---
title: "GameDefinition"
domain: loyalty
topic: gamedefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:52.997Z
estimatedTokens: 872
keywords: [GameDefinition, game, loyalty, program, offers, members, API, version, 60.0, later, Calls, Associated, Objects]
---

# GameDefinition

> Represents information about a game that the loyalty program offers
         to its members. This object is available in API version 60.0 and later.

# GameDefinition

Represents information about a game that the loyalty program offers to its members. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description of the game. |
| EndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date till which the game can be offered to members. |
| ExpirationPeriod | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of days or months for which a game is valid for a member to play after the game is assigned to them. |
| ExpirationPeriodUnit | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit of measure for the ExpirationPeriod field.Possible values are:DaysMonths |
| IsGameAssignmentRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether members are eligible to play the game only if they are assigned the game (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the game. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| StartDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date from which the game can be offered to members. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the game.Possible values are:ActiveDraftInactive |
| TimeoutDuration | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe duration the game is valid for after a participant starts to play it. The value is specified in seconds. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of game.Possible values are:ScratchcardSpintheWheel—Spin The Wheel |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[GameDefinitionFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[GameDefinitionHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[GameDefinitionShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
