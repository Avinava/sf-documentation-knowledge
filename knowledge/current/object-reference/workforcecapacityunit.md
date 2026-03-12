---
title: "WorkforceCapacityUnit"
domain: object-reference
topic: workforcecapacityunit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.627Z
estimatedTokens: 1331
keywords: [WorkforceCapacityUnit, number, resources, allocated, needed, specific, work, items, timestamp, duration, API, version, 51.0, later, Calls]
---

# WorkforceCapacityUnit

> Represents the number of resources allocated or needed for a specific set of
         work items at a timestamp within a specific duration. This object is available in API
      version 51.0 and later.

# WorkforceCapacityUnit

Represents the number of resources allocated or needed for a specific set of work items at a timestamp within a specific duration. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

The org must have the Workforce Engagement license. To view, create, edit, or delete records, the user must have the Workforce Engagement Analyst permission set.

## Fields

| Field | Details |
| --- | --- |
| AssignedTotalCount | TypedoublePropertiesCreate, Filter, Nillable, SortDescriptionThe number of shifts assigned at specific time period. |
| AvailableTotalCount | TypedoublePropertiesCreate, Filter, Nillable, SortDescriptionThe total number of shifts scheduled at a specific time period. |
| Capacity | TypedoublePropertiesCreate, Filter, Nillable, SortDescriptionStaffing prediction for a capacity plan. This field is available in API version 54.0 and later. |
| DateTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe timestamp of the data point. |
| IsOmni | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionDerived from the isOmni field on WorkforceCapacity. Indicates that the workload is Omni-based.The default value is 'false'. |
| IsShiftTemplateNonStandard | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the shift template that’s used at a specific time period is a non-standard shift. This field is available in API version 53.0 and later.The default value is false. |
| JobProfileName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe derived field from the WorkDemographic SkillSet field. |
| MaxCount | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe max number of resources allocated or needed at a specific time period. |
| MeasureUnit | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe time interval (in minutes) used in capacity plans.Possible values are:43200—Monthly for long-term capacity plans. This value is available in API version 54.0 and later.10080—Weekly1440—Daily60—Hourly30—30 minutes. Reserved for future use.15—15 minutes. Reserved for future use.The default value is '1440'. |
| OriginalTotalCount | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe original total number of resources allocated or needed at specific time period calculated from the planning process. |
| ResourceGap | TypeintPropertiesFilter, Group, Nillable, SortDescriptionRepresents the resource gap between the available and required resources. |
| ServiceTerritoryName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe derived field from the WorkDemographic Region field. |
| ShiftTemplateDuration | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe duration of the shift template that’s used at a specific time period. This field is available in API version 53.0 and later. |
| ShiftTemplateDurationType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates whether the duration of the shift template that’s used at a specific time period is in minutes or hours. This field is available in API version 53.0 and later.Possible values are:H—HoursM—MinutesThe default value is H. |
| ShiftTemplateId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the shift template that’s used at a specific time period. This field is available in API version 53.0 and later.This is a relationship field.Relationship NameShiftTemplateRelationship TypeLookupRefers ToShiftTemplate |
| ShiftTemplateJobProfile | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe job profile that relates to the shift template that’s used at a specific time period. This field is available in API version 53.0 and later. |
| ShiftTemplateName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the shift template that’s used at a specific time period. This field is available in API version 53.0 and later. |
| ShiftTemplateStartTime | TypetimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start time of the shift template that’s used at a specific time period. This field is available in API version 53.0 and later. |
| TotalCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total number of resources allocated or needed at specific time period. It represents the updated count after the adjustment. This value is the same as OriginalTotalCount if no adjustments were made.This is a calculated field. |
| WorkDemographicId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe foreign key to WorkDemographic object.This is a relationship field.Relationship NameWorkDemographicRelationship TypeLookupRefers ToWorkDemographic |
| WorkforceCapacityId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe foreign key to WorkCapacity object.This is a relationship field.Relationship NameWorkforceCapacityRelationship TypeLookupRefers ToWorkforceCapacity |
