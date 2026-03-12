---
title: "OperatingHoursHoliday"
domain: psc-api
topic: operatinghoursholiday
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:35.044Z
estimatedTokens: 599
keywords: [OperatingHoursHoliday, day, hours, provider, practitioner, facility, unavailable, offer, service, Calls, Special, Access, Rules, Associated, Objects]
---

# OperatingHoursHoliday

> Represents the day or hours for which a provider or practitioner
         facility is unavailable to offer service.

# OperatingHoursHoliday

Represents the day or hours for which a provider or practitioner facility is unavailable to offer service.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Special Access Rules

This object is available if Provider Management is enabled in your org. To access the object, you need the Provider Management Access permission set or the Provider Management permission set license. Partner users need the Provider Management for Partner permission set or permission set license.

## Fields

| Field | Details |
| --- | --- |
| DateAndTime | TypestringPropertiesFilter, Group, Nillable, SortDescription(Read-Only) The date or time for the holiday. |
| HolidayId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the holiday that’s related to the operating hours indicated in the OperatingHoursId field.This is a relationship field.Relationship NameHolidayRelationship TypeLookupRefers ToHoliday |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| OperatingHoursHolidayNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescription(Read-Only) An auto-generated number identifying the operating hours holiday. |
| OperatingHoursId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the operating hours that’s related to the holiday indicated in the HolidayId field.This is a relationship field.Relationship NameOperatingHoursRelationship TypeLookupRefers ToOperatingHours |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, the associated objects are either available in the same API versions as the OperatingHoursHoliday object or in the specified API version and later.

[OperatinghoursholidayFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.
