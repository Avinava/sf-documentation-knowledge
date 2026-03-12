---
title: "AppointmentScheduleLog"
domain: salesforce-scheduler-developer-guide
topic: appointmentschedulelog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.644Z
estimatedTokens: 770
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

AppointmentScheduleLogChangeEvent

Change events are available for the object.

AppointmentScheduleLogFeed

Feed tracking is available for the object.

AppointmentScheduleLogHistory

History is available for tracked fields of the object.

AppointmentScheduleLogOwnerSharingRule

Sharing rules are available for the object.

AppointmentScheduleLogShare

Sharing is available for the object.
