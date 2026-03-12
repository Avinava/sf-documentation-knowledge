---
title: "TimeSheetWageTypeSummary"
domain: eu-developer-guide
topic: timesheetwagetypesummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.435Z
estimatedTokens: 733
keywords: [TimeSheetWageTypeSummary, summary, wages, earned, service, resource, API, version, 62.0, later, Calls]
---

# TimeSheetWageTypeSummary

> Represents a summary of the type of wages earned by a field service
         resource.  This object is available in API version 62.0 and later.

# TimeSheetWageTypeSummary

Represents a summary of the type of wages earned by a field service resource. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DoubleTimeHours | TypedoublePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of hours that a service resource works during a double-time shift as defined in labor agreements. |
| DoubleTimeMinutes | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of minutes that a service resource works during a double-time shift, as defined in labor agreements. |
| EndTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe time when the time sheet entry ends. |
| RegularTimeHours | TypedoublePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of hours that a service resource works during a regular shift as defined in labor agreements. |
| RegularTimeMinutes | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of minutes that a service resource works during a regular shift, as defined in labor agreements. |
| ServiceResourceId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe service resource associated with the time sheet.This field is a relationship field.Relationship NameServiceResourceRefers ToServiceResource |
| StartTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe time when the time sheet entry starts. |
| TimeAndHalfMinutes | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of minutes that a service resource works during a time-and-a-half shift, as defined in labor agreements. |
| TimeSheetId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe time sheet associated with the time sheet wage type summary.This field is a relationship field.Relationship NameTimeSheetRelationship TypeMaster-detailRefers ToTimeSheet (the master object) |
| TimeandHalfHours | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of hours that a service resource works during a time-and-a-half shift as defined in labor agreements. |
| UnpaidTimeHours | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of unpaid hours when a service resource takes a break during working hours, as defined in labor agreements. This time isn't part of the service resource’s working hours. |
| UnpaidTimeMinutes | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of unpaid minutes when a service resource takes a break during working hours, as defined in labor agreements. This time isn't part of the service resource’s working hours. |
