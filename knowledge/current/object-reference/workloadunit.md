---
title: "WorkloadUnit"
domain: object-reference
topic: workloadunit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.682Z
estimatedTokens: 708
keywords: [WorkloadUnit, number, work, items, average, handle, time, specific, interval, API, version, 49.0, later, Calls, Special]
---

# WorkloadUnit

> Represents the number of work items and average handle time in a specific
         time interval. This object is available in API version 49.0 and later.

# WorkloadUnit

Represents the number of work items and average handle time in a specific time interval. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

The org must have a Workforce Engagement license. To view, create, edit, and delete records, the user must have the Workforce Engagement Analyst permission set.

## Fields

| Field | Details |
| --- | --- |
| AverageHandleTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe average handle time at a specific period of time. |
| Channel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe channel value. |
| CustomWorkType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe derived field of WorkDemographic.CustomWorkType for the custom dimension value. |
| DateTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe timestamp of the single data point in the time series of the workload. |
| IsOmni | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionDerived from isOmni field in workload. Indicates that the workload is Omni-basedThe default value is 'false'. |
| MeasureUnit | TypestringPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe time interval (in minutes) used in the workload.Possible values are:43200—Monthly. Reserved for future use.10080—Weekly1440—Daily60—Hourly30—30 minutes. Reserved for future use.15—15 minutes. Reserved for future use.The default value is '1440'. |
| Region | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe derived field from WorkDemographic.Region for the region value. |
| SkillSet | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe derived field from WorkDemographic.SkillSet for the skill value. |
| TotalCount | TypeintPropertiesCreate, Filter, Group, SortDescriptionThe total number work items at a specific period of time. |
| WorkDemographicId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe foreign key to the WorkDemographic object.This is a relationship field.Relationship NameWorkDemographicRelationship TypeLookupRefers ToWorkDemographic |
| WorkloadId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe foreign key to the Workload object.This is a relationship field.Relationship NameWorkloadRelationship TypeLookupRefers ToWorkload |
| WorkloadType | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe derived field from Workload.WorkloadType to indicate the type of workload, for example, a history or forecast workload.Possible values are:F—ForecastedH—HistoricalThe default value is 'H'. |
