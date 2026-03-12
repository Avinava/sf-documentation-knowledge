---
title: "AdDigitalAvailability"
domain: media-developer-guide
topic: addigitalavailability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.408Z
estimatedTokens: 865
keywords: [AdDigitalAvailability, daily, weekly, monthly, view, offered, booked, forecasted, units, Digital, media, calendar, API, version, 59.0]
---

# AdDigitalAvailability

> Represents the daily, weekly, or monthly view of offered, available,
         booked, and forecasted units for the Digital media type calendar view. This object is
      available in API version 59.0 and later.

# AdDigitalAvailability

Represents the daily, weekly, or monthly view of offered, available, booked, and forecasted units for the Digital media type calendar view. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Media Cloud license is enabled.

## Fields

| Field | Details |
| --- | --- |
| AdAvailabilityDimensionsId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Ad Availability Dimension that's associated with the digital availability.This field is a relationship field.Relationship NameAdAvailabilityDimensionsRelationship TypeLookupRefers ToAdAvailabilityDimensions |
| AdPlacementPriorityType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of priority assigned to a digital advertisement slot.Possible values are:SponsorshipStandard |
| CalendarPeriodType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe period that used to filter the unit count for a selected unit type.Possible values are:ContinuousDailyMonthlyWeekly |
| CreativeSize | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe creative size of the digital advertisement slot. |
| FromDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the availability of the digital advertisement slot. |
|  |  |
|  |  |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of ad digital availability. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who created the relationship record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ToDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the availability of the digital advertisement slot. |
| Units | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total number of units assigned for the digital advertisement slot. |
| UnitsStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the unit type for the digital advertisement slot.Possible values are:AvailableBookedOfferedTotal |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AdDigitalAvailabilityFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[AdDigitalAvailabilityHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[AdDigitalAvailabilityShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
