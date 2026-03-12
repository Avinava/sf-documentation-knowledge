---
title: "AppointmentScheduleAggr"
domain: salesforce-scheduler-developer-guide
topic: appointmentscheduleaggr
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.636Z
estimatedTokens: 511
keywords: [AppointmentScheduleAggr, Records, utilization, service, resource, date, Load, Balancing, appointment, assignment, policy, API, version, 52.0, later]
---

# AppointmentScheduleAggr

> Records the utilization of a service resource, by date, for the Load Balancing appointment assignment policy. This object is available in API version 52.0 and
		later.

# AppointmentScheduleAggr

Records the utilization of a service resource, by date, for the Load Balancing appointment assignment policy. This object is available in API version 52.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AppointmentDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date of the appointment. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name or ID of the AppointmentScheduleAggr object. |
| ResourceUtilizationCount | TypeintegerPropertiesFilter, Group, Nillable, SortDescriptionThe number of appointments scheduled for a service resource. Available in API version 53.0 and later.This is a calculated field. |
| ServiceResourceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe service resource associated with the appointment scheduling aggregate.This is a relationship field.Relationship NameServiceResourceRelationship TypeLookupRefers ToServiceResource |
| TotalResourceUtilization | TypedoublePropertiesFilter, Nillable, SortDescriptionThe number of minutes for which the service resource has scheduled appointments.This is a calculated field. |
| UsageType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecify the usage type of the AppointmentScheduleAggr object.Possible values are:FSL_DailyFSL_MonthlyFSL_WeeklyLightningSchedulerThe default value is 'LightningScheduler'. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

AppointmentScheduleAggrOwnerSharingRule

Sharing rules are available for the object.

AppointmentScheduleAggrShare

Sharing is available for the object.
