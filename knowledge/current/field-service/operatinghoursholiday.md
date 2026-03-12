---
title: "OperatingHoursHoliday"
domain: field-service
topic: operatinghoursholiday
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:56.138Z
estimatedTokens: 611
keywords: [OperatingHoursHoliday, Represents, day, hours, which, service, territory, resource, unavailable, Field, Service, Salesforce, Scheduler, Meetings, Sales, Engagement, Workforce, Engagement., API, version]
---

# OperatingHoursHoliday

> Represents the day or hours for which a service territory or service
         resource is unavailable in Field Service, Salesforce Scheduler, Salesforce Meetings, Sales
         Engagement, or Workforce Engagement. This object is available in API version 54.0 and
      later.

# OperatingHoursHoliday

Represents the day or hours for which a service territory or service resource is unavailable in Field Service, Salesforce Scheduler, Salesforce Meetings, Sales Engagement, or Workforce Engagement. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Special Access Rules

Field Service must be enabled.

## Fields

| Field | Details |
| --- | --- |
| DateAndTime | TypestringPropertiesFilter, Group, Nillable, SortDescription(Read-Only) The date or time for the holiday. |
| HolidayId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the holiday that’s related to the operating hours indicated in the OperatingHoursId field.This value is a relationship field.Relationship NameHolidayRelationship TypeLookupRefers ToHoliday |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time that the current user last viewed a record related to this object. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this object. |
| OperatingHoursHolidayNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescription(Read-Only) An auto-generated number identifying the operating hours holiday. |
| OperatingHoursId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the operating hours that’s related to the holiday that’s indicated in the HolidayId field.This value is a relationship field.Relationship NameOperatingHoursRelationship TypeLookupRefers ToOperatingHours |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, the associated objects are either available in the same API versions as the OperatingHoursHoliday object or in the specified API version and later.

[OperatingHoursHolidayChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_change_event.htm) (API version 62.0)

Change events are available for the object.

[OperatingHoursHolidayHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_history.htm;) (API version 62.0)

History is available for tracked fields of the object.
