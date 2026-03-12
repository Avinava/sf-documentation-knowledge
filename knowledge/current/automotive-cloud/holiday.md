---
title: "Holiday"
domain: automotive-cloud
topic: holiday
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:01.336Z
estimatedTokens: 307
keywords: [Holiday, period, service, resource, unavailable, appointment, scheduling, Recurring, holidays, Automotive, Cloud, API, version, 58.0, later]
---

# Holiday

> Represents a period during which a service resource is unavailable for
         appointment scheduling. Recurring holidays are not supported in Automotive Cloud. This
      object is available in API version 58.0 and later.

# Holiday

Represents a period during which a service resource is unavailable for appointment scheduling. Recurring holidays are not supported in Automotive Cloud. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Special Access Rules

Automotive and Automotive Scheduler must be enabled.

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionText description of the holiday. |
| EndTimeInMinutes | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end time of the holiday in minutes. |
| IsAllDay | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the duration of the holiday is all day (true) or not (false).The default value is false. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the holiday. |
| StartTimeInMinutes | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start time of the holiday in minutes. |
