---
title: "TimeSheet"
domain: eu-developer-guide
topic: timesheet
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.402Z
estimatedTokens: 560
keywords: [TimeSheet, schedule, service, resource’s, time, Workforce, Engagement, API, version, 62.0, later, Calls]
---

# TimeSheet

> Represents a schedule of a service resource’s time in Field Service or
         Workforce Engagement.   This object is available in API version 62.0 and later.

# TimeSheet

Represents a schedule of a service resource’s time in Field Service or Workforce Engagement. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end date and time of a job in the time sheet. |
| HasShiftEnded | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the field service worker's shift has ended.The default value is false. |
| PayGradeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe pay grade associated with the time sheet.This field is a relationship field.Relationship NamePayGradeRefers ToPayGrade |
| ServiceCrewMemberId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe service crew member associated with the time sheet.This field is a relationship field.Relationship NameServiceCrewMemberRefers ToServiceCrewMember |
| StartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start date and time of a job in the time sheet. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the time sheet.Possible values are:Approval PendingApprovedErrorNewRejectedReviewedSubmittedValidation In ProgressThe default value is New. |
| StatusComment | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe comment added with a status change to a time sheet. |
| VehicleDefinitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of vehicle used by the field service technician.This field is a relationship field.Relationship NameVehicleDefinitionRefers ToVehicleDefinition |
| VehicleId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe service resource's vehicle associated with the time sheet.This field is a relationship field.Relationship NameVehicleRefers ToVehicle |
