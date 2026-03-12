---
title: "DifferentialShift"
domain: eu-developer-guide
topic: differentialshift
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.197Z
estimatedTokens: 379
keywords: [DifferentialShift, collection, store, shifts, different, normal, resource, marked, against, timesheet, entries, API, version, 65.0, later]
---

# DifferentialShift

> Represents a collection of fields to store the information about shifts different from the normal shifts of a resource. 
        These shifts are marked against the timesheet entries. This object is available in API version 65.0 and
      later.

# DifferentialShift

Represents a collection of fields to store the information about shifts different from the normal shifts of a resource. These shifts are marked against the timesheet entries. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the differential shift. |
| External ID | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe external ID associated with the differential shift. |
| Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe record ID of the differential shift. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the differential shift. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the differential shift is active (true) or not (false).The default value is false. |
| EffectiveStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the date when the differential shift starts. |
| EffectiveEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the date when the differential shift ends. |
