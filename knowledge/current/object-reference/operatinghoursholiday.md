---
title: "OperatingHoursHoliday"
domain: object-reference
topic: operatinghoursholiday
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:13.457Z
estimatedTokens: 424
keywords: [OperatingHoursHoliday, day, hours, service, territory, resources, exclusive, unavailable, Salesforce, Scheduler, API, version, 54.0, later, Calls]
---

# OperatingHoursHoliday

> Represents the day or hours for which a service territory and service
         resources exclusive to the service territory are unavailable in Salesforce Scheduler.
      This object is available in API version 54.0 and later.

# OperatingHoursHoliday

Represents the day or hours for which a service territory and service resources exclusive to the service territory are unavailable in Salesforce Scheduler. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Special Access Rules

Salesforce Scheduler must be enabled.

## Fields

| Field | Details |
| --- | --- |
| DateAndTime | TypestringPropertiesFilter, Group, Nillable, SortDescription(Read-Only) The date or time for the holiday. |
| HolidayId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the holiday that’s related to the operating hours indicated in the OperatingHoursId field.This is a relationship field.Relationship NameHolidayRelationship TypeLookupRefers ToHoliday |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time that the current user last viewed a record related to this object. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this object. |
| OperatingHoursHolidayNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescription(Read-Only) An auto-generated number identifying the operating hours holiday. |
| OperatingHoursId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the operating hours that’s related to the holiday indicated in the HolidayId field.This is a relationship field.Relationship NameOperatingHoursRelationship TypeLookupRefers ToOperatingHours |
