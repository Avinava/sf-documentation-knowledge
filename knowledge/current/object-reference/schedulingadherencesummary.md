---
title: "SchedulingAdherenceSummary"
domain: object-reference
topic: schedulingadherencesummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.600Z
estimatedTokens: 1171
keywords: [SchedulingAdherenceSummary, daily, shift, adherence, data, service, resource, territory, job, profile, specific, date, API, version, 54.0]
---

# SchedulingAdherenceSummary

> Represents daily shift adherence data for a service resource in a service
         territory and job profile on a specific date. This object is available in API version
      54.0 and later.

# SchedulingAdherenceSummary

Represents daily shift adherence data for a service resource in a service territory and job profile on a specific date. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

The org requires a Workforce Engagement license, and both Workforce Engagement and Omni-Channel must be enabled. The user requires the Workforce Engagement Planner or Workforce Engagement Admin permission set.

## Fields

| Field | Details |
| --- | --- |
| AdherencePercentage | TypedoublePropertiesFilter, SortDescriptionPercentage of time that the agent was present during the scheduled shift time.This is a calculated field.FormulaAdherencePercentage =  TotalAdherenceMinutes / TotalScheduledMinutes |
| ConformancePercentage | TypedoublePropertiesFilter, SortDescriptionPercentage of time when the agent was present versus the duration of scheduled shifts. The time that the agent is present can extend beyond the scheduled shift.This is a calculated field.FormulaConformancePercentage =  TotalPresenceMinutes / TotalScheduledMinutes |
| Date | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionDate for which the adherence data is calculated. |
| JobProfileId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the job profile.This is a relationship field.Relationship NameJobProfileRelationship TypeLookupRefers ToJobProfile |
| JobProfileName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the job profile. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionA number that identifies this summary record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who owns the schedule adherence summary.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ServiceResourceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the service resource.This is a relationship field.Relationship NameServiceResourceRelationship TypeLookupRefers ToServiceResource |
| ServiceResourceName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the service resource. |
| ServiceTerritoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the service territory.This is a relationship field.Relationship NameServiceTerritoryRelationship TypeLookupRefers ToServiceTerritory |
| ServiceTerritoryName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the service territory. |
| TotalAdherenceMinutes | TypeintPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionTotal minutes that the agent was present during a shift. |
| TotalInteractionMinutes | TypeintPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionTotal minutes that the agent was actively receiving work. |
| TotalPresenceMinutes | TypeintPropertiesFilter, Group, Nillable, SortDescriptionTotal minutes of agent presence time.This is a calculated field.FormulaTotalPresenceMinutes =  TotalInteractionMinutes + TotalShrinkageMinutes |
| TotalScheduledMinutes | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionTotal minutes of scheduled shift time for the agent. |
| TotalShrinkageMinutes | TypeintPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionTotal minutes that the agent was present but not receiving work, such as break times. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[SchedulingAdherenceSummaryOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[SchedulingAdherenceSummaryShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Code Examples

```
AdherencePercentage = 
TotalAdherenceMinutes / TotalScheduledMinutes
```

```
ConformancePercentage = 
TotalPresenceMinutes / TotalScheduledMinutes
```

```
TotalPresenceMinutes = 
TotalInteractionMinutes + TotalShrinkageMinutes
```

## Related Topics

- SchedulingAdherenceSummaryOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- SchedulingAdherenceSummaryShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
