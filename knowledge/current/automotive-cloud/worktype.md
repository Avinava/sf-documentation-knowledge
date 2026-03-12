---
title: "WorkType"
domain: automotive-cloud
topic: worktype
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:01.752Z
estimatedTokens: 1377
keywords: [WorkType, work, performed, dealer, location, templates, associate, group, service, territory, API, version, 58.0, later, Calls]
---

# WorkType

> Represents a type of work to be performed for a dealer location. Work types
         are templates that associate a work group to a service territory. This object is
      available in API version 58.0 and later.

# WorkType

Represents a type of work to be performed for a dealer location. Work types are templates that associate a work group to a service territory. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Automotive and Automotive Scheduler must be enabled.

## Fields

| Field | Details |
| --- | --- |
| ApptStartTimeIntvlInMin | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecify the time interval in minutes between appointment start times. |
| BlockTimeAfterAppointment | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecify the after buffer time for the service appointment. |
| BlockTimeAfterUnit | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecify the unit of time for BlockTimeAfterAppointment.Possible values are:Hours—Hour(s)Minutes—Minute(s)The default value is Minutes. |
| BlockTimeBeforeAppointment | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecify the before buffer time for the service appointment. |
| BlockTimeBeforeUnit | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecify the unit of time for BlockTimeBeforeAppointment.Possible values are:Hours—Hour(s)Minutes—Minute(s)The default value is Minutes. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the work type. |
| DurationInMinutes | TypedoublePropertiesFilter, Nillable, SortDescription |
| DurationType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe unit of the Estimated Duration: Minutes or Hours.Possible values are:HoursMinutesThe default value is Hours. |
| EstimatedDuration | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe estimated length of the work. The estimated duration is in minutes or hours based on the value selected in the Duration Type field. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the work type was last modified. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the work type was last viewed by the current user. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the work type. |
| OperatingHoursId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the operating hours that’s assigned to the work type. If a service resource needs special operating hours, create them in Setup and select them in the Operating Hours lookup field on the member’s detail page.This field is a relationship field.Relationship NameOperatingHoursRelationship TypeLookupRefers ToOperatingHours |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe work type’s owner.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| TimeFrameEndUnit | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecify the unit of time for TimeFrame End.Possible values are:Days—Day(s)Hours—Hour(s)The default value is Days. |
| TimeFrameStartUnit | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecify the unit of time for TimeFrame Start.Possible values are:Days—Day(s)Hours—Hour(s)The default value is Days. |
| TimeframeEnd | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecify the timeframe end to show only time slots that end before the duration that is set in Timeframe End. |
| TimeframeStart | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecify the timeframe start to show only time slots that start after the duration that is set in Timeframe Start. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[WorkTypeChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[WorkTypeFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[WorkTypeHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[WorkTypeOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[WorkTypeShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
