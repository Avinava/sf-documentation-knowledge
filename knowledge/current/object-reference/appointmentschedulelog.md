---
title: "AppointmentScheduleLog"
domain: object-reference
topic: appointmentschedulelog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:04.703Z
estimatedTokens: 1208
keywords: [AppointmentScheduleLog, Stores, service, appointments, Resource, calculate, utilization, AppointmentScheduleAggr, API, version, 52.0, later, Calls, Associated, Objects]
---

# AppointmentScheduleLog

> Stores service appointments of each service Resource. This object is used to calculate the utilization of a service resource for the AppointmentScheduleAggr object.
		This object is available in API version 52.0 and later.

# AppointmentScheduleLog

Stores service appointments of each service Resource. This object is used to calculate the utilization of a service resource for the AppointmentScheduleAggr object. This object is available in API version 52.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AppointmentDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date of the appointment. |
| AppointmentScheduleAggrId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe appointment scheduling aggregate associated with the appointment scheduling log.This is a relationship field.Relationship NameAppointmentScheduleAggrRelationship TypeLookupRefers ToAppointmentScheduleAggr |
| IsUsedForResourceUtilization | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the appointment scheduling log is used for deriving the appointment scheduling aggregate.The default value is 'false'. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name or ID of the AppointmentScheduleLog object. |
| RelatedRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe service appointment, resource absence, event, or any other related record associated with the appointment scheduling log.This is a polymorphic relationship field.Relationship NameRelatedRecordRelationship TypeLookupRefers ToEvent, ServiceAppointment |
| ResourceUtilization | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of minutes the service resource already has scheduled appointments for. |
| ServiceResourceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe service resource associated with the appointment scheduling log.This is a relationship field.Relationship NameServiceResourceRelationship TypeLookupRefers ToServiceResource |
| UsageType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecify the product associated with the AppointmentScheduleLog object.Possible values are:FSL_Daily—FSL - DailyFSL_Monthly—FSL - MonthlyFSL_Weekly—FSL - WeeklyLightningScheduler—Lightning SchedulerThe default value is 'LightningScheduler'. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AppointmentScheduleLogChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[AppointmentScheduleLogFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[AppointmentScheduleLogHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[AppointmentScheduleLogOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[AppointmentScheduleLogShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- AppointmentScheduleLogChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- AppointmentScheduleLogFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- AppointmentScheduleLogHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- AppointmentScheduleLogOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- AppointmentScheduleLogShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
