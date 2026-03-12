---
title: "CaseMilestone"
domain: object-reference
topic: casemilestone
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.296Z
estimatedTokens: 911
keywords: [CaseMilestone, milestone, step, customer, support, process, Case, API, version, 18.0, later, Calls, Usage]
---

# CaseMilestone

> Represents a milestone (required step in a customer support process)
      on a Case. This object is available in API version 18.0 and later.

# CaseMilestone

Represents a milestone (required step in a customer support process) on a Case. This object is available in API version 18.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), query(), retrieve(), update()

## Fields

| Field | Details |
| --- | --- |
| BusinessHoursId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the BusinessHours associated with the CaseMilestone. |
| CaseId | TypereferencePropertiesFilterDescriptionID of the case. |
| CompletionDate | TypedateTimePropertiesFilter, Nillable, UpdateDescriptionThe date and time the milestone was completed. |
| ElapsedTimeInDays | TypedoublePropertiesFilter, NillableDescriptionThe time required to complete a milestone in days. |
| ElapsedTimeInHrs | TypedoublePropertiesFilter, NillableDescriptionThe time required to complete a milestone in hours. |
| ElapsedTimeInMins | TypeintPropertiesFilter, NillableDescriptionThe time required to complete a milestone in minutes. |
| IsCompleted | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether the milestone is completed (true) or not (false). |
| IsViolated | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether the milestone is violated (true) or not (false). |
| MilestoneTypeId | TypereferencePropertiesFilter, NillableDescriptionThe ID of the milestone on the case. |
| StartDate | TypedateTimePropertiesFilter, Nillable, UpdateDescriptionThe date and time the milestone started on the case. |
| TargetDate | TypedateTimePropertiesFilterDescriptionThe date and time the milestone must be completed. |
| TargetResponseInDays | TypedoublePropertiesFilter, Nillable, SortDescriptionThe time to complete the milestone in days. |
| TargetResponseInHrs | TypedoublePropertiesFilter, Nillable, SortDescriptionThe time to complete the milestone in hours. |
| TargetResponseInMins | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe time to complete the milestone in minutes. |
| TimeRemainingInDays | TypedoublePropertiesGroup, Nillable, SortDescriptionTime remaining to reach the milestone target, measured in days. |
| TimeRemainingInHrs | TypetextPropertiesNillableDescriptionTime remaining to reach the milestone target, measured in hours. |
| TimeRemainingInMins | TypetextPropertiesGroup, Nillable, SortDescriptionTime remaining to reach the milestone target. The format is minutes and seconds. |
| TimeSinceTargetInDays | TypedoublePropertiesNillable, SortDescriptionThe time elapsed since the milestone target, measured in days. |
| TimeSinceTargetInHrs | TypestringPropertiesGroup, Nillable, SortDescriptionThe time elapsed since the milestone target, measured in hours. |
| TimeSinceTargetInMins | TypestringPropertiesGroup, Nillable, SortDescriptionThe time elapsed since the milestone target. The format is minutes and seconds. |

## Usage

This object lets you view a milestone on a case. It also lets you view if the milestone was completed and when it must be completed.

#### See Also

-   [Case](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_case.htm "Represents a case, which is a customer issue or problem.")

-   [MilestoneType](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_milestonetype.htm "Represents a milestone (required step in a customer support process). This object is available in API version 18.0 and later.")

-   [SlaProcess](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_slaprocess.htm "Represents an entitlement process associated with an Entitlement. This object is available in API version 19.0 and later.")

## Related Topics

- Case (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_case.htm)
- MilestoneType (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_milestonetype.htm)
- SlaProcess (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_slaprocess.htm)
