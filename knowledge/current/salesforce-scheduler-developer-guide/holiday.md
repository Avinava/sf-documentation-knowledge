---
title: "Holiday"
domain: salesforce-scheduler-developer-guide
topic: holiday
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.703Z
estimatedTokens: 391
keywords: [Holiday, Salesforce, Scheduler, period, service, resource, unavailable, appointment, scheduling, Calls]
---

# Holiday

> Represents the fields in the Holiday
        object that are used by Salesforce Scheduler. A holiday is a period during which your
        service resource is unavailable for appointment scheduling.

# Holiday

Represents the fields in the Holiday object that are used by Salesforce Scheduler. A holiday is a period during which your service resource is unavailable for appointment scheduling.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActivityDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIf the Holiday IsAllDay flag is set to true (indicating that it is an all-day holiday), then the holiday due date information is contained in the ActivityDate field. This field is a date field with a timestamp that is always set to midnight in the Coordinated Universal Time (UTC) time zone. The timestamp is not relevant, and you must not attempt to alter it to account for any time zone differences. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionText description of the holiday. |
| EndTimeInMinutes | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end time of the holiday in minutes. |
| IsAllDay | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the duration of the holiday is all day (true) or not (false). |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the holiday. |
| StartTimeInMinutes | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start time of the holiday in minutes. |
