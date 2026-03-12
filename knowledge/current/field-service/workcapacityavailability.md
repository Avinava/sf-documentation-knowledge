---
title: "WorkCapacityAvailability"
domain: field-service
topic: workcapacityavailability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:54.966Z
estimatedTokens: 697
keywords: [WorkCapacityAvailability, work, capacity, specific, time, service, territory, API, version, 59.0, later, Calls, Associated, Objects]
---

# WorkCapacityAvailability

> Represents
         the available work capacity for a specific time and service
         territory. This object is available in API version 59.0 and later.

# WorkCapacityAvailability

Represents the available work capacity for a specific time and service territory. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AvailCapacityHours | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of available capacity in hours in the time frame the user defined for a service territory. |
| AvailCapacityMinutes | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of available capacity in minutes in the time frame the user defined for a service territory. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the total available capacity. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate isn’t null, the user accessed this record or list view indirectly. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ServiceTerritoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the service territory of the work capacity availability calculation.This field is a relationship field.Relationship NameServiceTerritoryRelationship TypeLookupRefers ToServiceTerritory |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the total available capacity. |
| TimePeriod | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe time period the user selected when creating the work capacity limit. The value is copied from the TimePeriod field of the WorkCapacityLimit object.Possible values are:DayThe default value is Day. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

WorkCapacityAvailabilityFeed

Feed tracking is available for the object.

WorkCapacityAvailabilityShare

Sharing is available for the object.
