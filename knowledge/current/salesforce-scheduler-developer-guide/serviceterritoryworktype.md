---
title: "ServiceTerritoryWorkType"
domain: salesforce-scheduler-developer-guide
topic: serviceterritoryworktype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.808Z
estimatedTokens: 582
keywords: [ServiceTerritoryWorkType, relationship, ServiceTerritory, WorkType, Salesforce, Scheduler, appointments, API, version, 45.0, later, Calls, Associated, Objects]
---

# ServiceTerritoryWorkType

> Represents the relationship between a ServiceTerritory object and a
			WorkType object for Salesforce Scheduler appointments. This object is available in
		API version 45.0 and later.

# ServiceTerritoryWorkType

Represents the relationship between a ServiceTerritory object and a WorkType object for Salesforce Scheduler appointments. This object is available in API version 45.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| IsSlotPublished | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicate whether records in the Shift object are created for the selected Service Territory and Work Type.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time that the current user last viewed a record related to this object. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this object. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of this service territory-work type relationship. |
| ServiceTerritoryId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the service territory that’s related to the work type indicated in the WorkTypeId field.This is a relationship field.Relationship NameServiceTerritoryRelationship TypeLookupRefers ToServiceTerritory |
| TeamId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the team associated with the service territory for a specific work type.This field is a relationship field and is available in API version 58.0 and later.Relationship NameTeamRelationship TypeLookupRefers ToTeam |
| WorkTypeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the work type that’s related to the service territory indicated in the ServiceTerritoryId field.This is a relationship field.Relationship NameWorkTypeRelationship TypeLookupRefers ToWorkType |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

ServiceTerritoryWorkTypeFeed

Feed tracking is available for the object.

ServiceTerritoryWorkTypeHistory

History is available for tracked fields of the object.
