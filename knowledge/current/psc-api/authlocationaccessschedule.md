---
title: "AuthLocationAccessSchedule"
domain: psc-api
topic: authlocationaccessschedule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.108Z
estimatedTokens: 435
keywords: [AuthLocationAccessSchedule, operating, hours, period, authorization, place, API, version, 49.0, later, Calls]
---

# AuthLocationAccessSchedule

> Represents the operating hours during a specified period in which authorization
      is valid for a place. This object is available in API version 49.0 and later.

# AuthLocationAccessSchedule

Represents the operating hours during a specified period in which authorization is valid for a place. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert(), search()

## Fields

| Field | Details |
| --- | --- |
| AuthApplPlaceId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe associated authorization and place. |
| AuthEndDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionEnd date of the authorization period. |
| AuthStartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionStart date of the authorization period. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the authorization location access schedule. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the authorization location access schedule record owner. |
| WorkDay | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionDays during which the authorization is valid. |
| WorkEndTime | TypetimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTime when the authorization ends. |
| WorkStartTime | TypetimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTime when the authorization starts. |
