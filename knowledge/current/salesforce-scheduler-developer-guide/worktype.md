---
title: "WorkType"
domain: salesforce-scheduler-developer-guide
topic: worktype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:43.911Z
estimatedTokens: 2205
keywords: [WorkType, work, performed, Salesforce, Scheduler, API, version, 38.0, later, Calls, Special, Access, Rules, Usage, Associated]
---

# WorkType

> Represents a type of work to be performed in Salesforce
			Scheduler. This object is available in API version 38.0 and later.

# WorkType

Represents a type of work to be performed in Salesforce Scheduler. This object is available in API version 38.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

Work types are templates representing an appointment topic (work type group) with an appointment location (service territory). Defines key appointment parameters such as appointment duration, prep and wrap-up buffers, and availability timings.

## Special Access Rules

Salesforce Scheduler must be enabled.

## Fields

| Field Name | Details |
| --- | --- |
| AppointmentCategoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the appointment category that’s assigned to the work type. This field is available in API version 58.0 and later.This field is a relationship field.Relationship NameAppointmentCategoryRelationship TypeLookupRefers ToAppointmentCategory |
| ApptStartTimeIntvlInMin | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecify the time interval in minutes between appointment start times. For example, if you set the interval as 15, appointments can then begin at the top of the hour and at 15-minute intervals thereafter (10:00 AM, 10:15 AM, 10:30 AM). Valid values can be between 5 through 720.NoteIf you don’t specify a value for this field, Salesforce Scheduler considers the value specified in the default scheduling policy.This field is available in API version 57.0 and later. |
| AttendeeLimit | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe maximum number of attendees for a group service appointment in a shift. This field is considered when the appointment mode is Group. Available in API version 61.0 and later. |
| BlockTimeAfterAppointment | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecify the after buffer time for the service appointment.NoteIn Salesforce Scheduler, during appointment scheduling, the number of available time slots is automatically adjusted to accommodate the after buffer time. |
| BlockTimeAfterUnit | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecify the unit of time for BlockTimeAfterAppointment.Possible values are:HoursMinutesThe default value is 'Minutes'. |
| BlockTimeBeforeAppointment | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecify the before buffer time for the service appointment.NoteIn Salesforce Scheduler, during appointment scheduling, the number of available time slots is automatically adjusted to accommodate the before buffer time. |
| BlockTimeBeforeUnit | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecify the unit of time for BlockTimeBeforeAppointment.Possible values are:HoursMinutesThe default value is 'Minutes'. |
| DefaultAppointmentType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe default appointment type of the work type.Possible values are:PhoneAt BranchVideoIn Lobby Management, the Scheduled Service Appointments list only shows appointments that are set to At Branch. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the work type. Try to add details about the task or tasks that this work type represents. |
| DurationType | TypepicklistPropertiesCreate, Filter, Group, Defaulted on create, Restricted picklist, Sort, UpdateDescriptionThe unit of the Estimated Duration: Minutes or Hours. |
| EstimatedDuration | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe estimated length of the work. The estimated duration is in minutes or hours based on the value selected in the Duration Type field. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the work type was last modified. Its label in the user interface is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the work type was last viewed by the current user. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the work type. |
| OperatingHoursId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the operating hours that’s assigned to the work type. If a service resource needs special operating hours, create them in Setup and select them in the Operating Hours lookup field on the member’s detail page.This is a relationship field.Relationship NameOperatingHoursRelationship TypeLookupRefers ToOperatingHours |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe work type’s owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences the product associated with the work type.This field is available in API version 63.0 and later.This field is a relationship field.Relationship NameProductRefers ToProduct2 |
| TimeFrameEndUnit | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecify the unit of time for TimeFrame End.Possible values are:DaysHoursThe default value is 'Days'. |
| TimeFrameStartUnit | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecify the unit of time for TimeFrame Start.Possible values are:DaysHoursThe default value is 'Days'. |
| TimeframeEnd | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecify the timeframe end to show only time slots that end before the duration that is set in Timeframe End. |
| TimeframeStart | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecify the timeframe start to show only time slots that start after the duration that is set in Timeframe Start. |

## Usage

You can specify meeting preparation and wrap-up time by specifying BlockTimeBeforeAppointment and BlockTimeAfterAppointment. Specify the units of time as minutes or hours. During appointment scheduling, the number of available time slots is automatically adjusted to accommodate the before and after buffer time. By default, the before and after appointment buffers aren’t reflected on the service resource’s Salesforce calendar. Enable the [Block Resource Availability setting](https://help.salesforce.com/s/articleView?id=ls_turn_on_block_resource.htm&type=5&language=en_US) to reflect the before and after appointment buffers on the Salesforce calendar.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_scheduler_developer_guide)

#### Note

Don’t specify more than 24 hours as buffer time.

Timeframe Start and Timeframe End show time slots in a dynamic time frame based on when a user books an appointment. Salesforce Scheduler shows only time slots that start after the duration that is set in Timeframe Start and end before the duration that is set in Timeframe End. For example, you’ve set Timeframe Start to 2 days and Timeframe End to 5 days and a user schedules an appointment on Sep 13, 10:00 AM. Then, only time slots that start on or after Sep 15, 10:00 AM and end on or before Sep 18, 10:00 AM are shown.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[WorkTypeChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_change_event.htm "HTML (New Window)") (API version 48.0)

Change events are available for the object.

[WorkTypeFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_feed.htm "HTML (New Window)")

Feed tracking is available for the object.

[WorkTypeHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.

[WorkTypeOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_ownersharingrule.htm "HTML (New Window)")

Sharing rules are available for the object.

[WorkTypeShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_share.htm "HTML (New Window)")

Sharing is available for the object.
