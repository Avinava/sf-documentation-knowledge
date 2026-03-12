---
title: "RecurrenceSchedule"
domain: nonprofit-cloud
topic: recurrenceschedule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:02.565Z
estimatedTokens: 716
keywords: [RecurrenceSchedule, recurrence, schedule, benefit, Program, Management, API, version, 57.0, later, Calls]
---

# RecurrenceSchedule

> Represents the recurrence schedule for a benefit schedule. This
      object is available with Program Management in API version 57.0 and later.

# RecurrenceSchedule

Represents the recurrence schedule for a benefit schedule. This object is available with Program Management in API version 57.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CompletedScheduleCount | TypeintPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of times the schedule was completed. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the schedule ends. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the recurrence schedule. |
| NextScheduleDateTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time when the schedule is executed next. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who owns the object.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ProcessName | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe name of the scheduling process that executes the request.Possible values are:Industries_ActionPlanIndustries_ProgramManagement |
| ReferenceRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe related record for which you’re creating the recurrence schedule. For example, creating a recurrence schedule for a related Benefit Schedule entity.This field is a polymorphic relationship field.Relationship NameReferenceRecordRelationship TypeLookupRefers ToActionPlan, BenefitSchedule |
| ScheduleDayValue | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe days in a week when the schedule is executed. This field contains a bit mask.Monday = 64Tuesday = 32Wednesday = 16Thursday = 8Friday = 4Saturday = 2Sunday = 1Multiple days are represented as the sum of their numerical values. For example, Tuesday and Thursday = 32 + 8 = 40. |
| ScheduleFrequency | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the frequency at which the schedule is executed.Possible values are:BiweeklyHalyearly—Half YearlyMonthlyQuarterlyWeeklyYearly |
| StartDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date when the schedule begins. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the schedule.Possible values are:ActiveInactive |
| TotalRecurrencesCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of times the schedule is executed. |
