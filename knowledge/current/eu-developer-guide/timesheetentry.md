---
title: "TimeSheetEntry"
domain: eu-developer-guide
topic: timesheetentry
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.411Z
estimatedTokens: 781
keywords: [TimeSheetEntry, span, time, service, resource, spends, task, API, version, 62.0, later, Calls]
---

# TimeSheetEntry

> Represents a span of time that a service resource spends on a field service
         task. This object is available in API version 62.0 and later.

# TimeSheetEntry

Represents a span of time that a service resource spends on a field service task. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Category | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe time sheet entry category associated with a work order, work order line item, or a time sheet record.Possible values are:BreakTime—Break TimeDriveTime—Drive TimeIdleTime—Idle TimeMealTime—Meal TimeMeetingTime—Meeting TimeOtherAuto—Other-AutoOtherManual—Other-ManualSpreadTime—Spread TimeWorkTime—Work TimeMandatory Break TimeBereavement LeaveFamily LeaveUnpaid Time Between ShiftsVacationUnpaid VacationThe default value is WorkTime. |
| CostCenterId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe cost center associated with the time sheet entry, if work order and work order line items are not available.This field is a relationship field.Relationship NameCostCenterRefers ToCostCenter |
| JobExpenseTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe job expense type associated with the time sheet entry.This field is a relationship field.Relationship NameJobExpenseTypeRefers ToJobExpenseType |
| UnavailableReason | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the reason that the service resource is unavailable.Possible values are:LunchMeetingOtherSickness |
| VacationType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of vacation time.Possible values are:PersonalTravel |
| VehicleDefinitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of vehicle used by the field service technician, if it is different from the one in the Time Sheet record.This field is a relationship field.Relationship NameVehicleDefinitionRefers ToVehicleDefinition |
| VehicleId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe service resource's vehicle associated with the time sheet entry.This field is a relationship field.Relationship NameVehicleRefers ToVehicle |
|  |  |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionPossible values are:Approval PendingApprovedErrorNewRejectedReviewedSubmittedValidation In ProgressThe default value is New. |
| StatusComment | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe comment added with a status change to a time sheet entry. |
| TimeBlockSequence | TypeintPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe order number of the time sheet entry relative to other time sheet entries, determining the sequence in which the entries are processed or displayed. |
