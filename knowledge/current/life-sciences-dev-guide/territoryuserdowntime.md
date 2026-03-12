---
title: "TerritoryUserDowntime"
domain: life-sciences-dev-guide
topic: territoryuserdowntime
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:47.512Z
estimatedTokens: 706
keywords: [TerritoryUserDowntime, blocks, time, normal, business, hours, various, reasons, sales, representatives, their, territories, API, version, 65.0]
---

# TerritoryUserDowntime

> Defines the blocks of time during normal business hours for various types of
         reasons when sales representatives are out of their territories. This object is available
         in API version 65.0 and later.

# TerritoryUserDowntime

Defines the blocks of time during normal business hours for various types of reasons when sales representatives are out of their territories. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DowntimeType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionStores the type of territory user downtime.Possible values are:CivicActivity—Civic ActivityDisciplinaryHolidayPersonalAbsence—Personal AbsenceTrainingUnexcusedVacation |
| EndDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionStores the end date and time of the territory user downtime. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view.If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionTerritory user downtime name. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner or creator of this object.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| SlotType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionStores the selected slot for territory user downtime.Possible values are:AfternoonAllDayEveningMorning |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe ID of the record in the external source system for data integrations. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the external source system from which the record was imported. |
| StartDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionStores the start date and time of the territory user downtime. |
| TerritoryId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionStores the sales representative's territory for the downtime.This field is a relationship field.Relationship NameTerritoryRefers ToTerritory2 |
| UserId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe user who logs the territory user downtime event.This field is a relationship field.Relationship NameUserRefers ToUser |
