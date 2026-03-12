---
title: "EnblProgramTaskProgress"
domain: object-reference
topic: enblprogramtaskprogress
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:08.636Z
estimatedTokens: 1009
keywords: [EnblProgramTaskProgress, user’s, progress, towards, completing, outcome, milestone, exercise, Enablement, program, API, version, 60.0, later, Calls]
---

# EnblProgramTaskProgress

> Represents a user’s progress towards completing an outcome, a
         milestone, or an exercise in an Enablement program. This object is available in API
      version 60.0 and later.

# EnblProgramTaskProgress

Represents a user’s progress towards completing an outcome, a milestone, or an exercise in an Enablement program. This object is available in API version 60.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

-   For Enablement admins to create, update, and delete Enablement programs, the Design and Deliver Enablement Programs permission is required. This permission is enabled by default as part of the Manage Enablement Essentials permission set, which comes with the Enablement add-on license.
-   For users who take Enablement programs, the Take Enablement Programs permission is required. This permission is enabled by default as part of the Use Enablement Programs permission set, which comes with the Enablement add-on license.
-   For partner users who take Partner Enablement programs, the Take Partner Enablement Programs permission is required. This permission is enabled by default as part of the Use Partner Enablement Programs permission set, which comes with the Enablement add-on license. Partner Enablement also requires a [supported Partner Relationship Management (PRM) add-on license](https://help.salesforce.com/s/articleView?id=slack.prm_support_license_template.htm&type=5&language=en_US "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| CompletedDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date that the user completed the outcome, milestone, or exercise. |
| CompletedOnDay | TypeintPropertiesFilter, Group, Nillable, SortDescriptionNumber of days that the user took to complete the outcome, milestone, or exercise. |
| CompletedPercent | TypepercentPropertiesFilter, Nillable, SortDescriptionPercentage of the outcome, milestone, or exercise that’s complete. |
| ContributingRecordCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of records that qualify for a user’s progress towards completing an outcome or milestone. To qualify, the activity must meet the criteria that the corresponding Enablement measure defines for specific objects, fields, and field values.Available in API version 61.0 and later. |
| DueDate | TypedatePropertiesFilter, Group, SortDescriptionThe date the outcome, milestone, or exercise is due. |
| EnblProgramTaskDefinitionId | TypereferencePropertiesFilter, Group, SortDescriptionID of the outcome, milestone, or exercise definition. This field is a relationship field.Relationship NameEnblProgramTaskDefinitionRelationship TypeLookupRefers ToEnblProgramTaskDefinition |
| IsCompleted | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionWhether the outcome, milestone, or exercise is complete (true) or not (false). The default value is false. |
| IsNoLongerTracking | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf the user hasn’t completed the outcome or milestone and 30 days have elapsed since the program’s due date, the value is true. Otherwise, the value is false. The default value is false. For details, see Completion Statuses in Enablement Analytics. |
| LearningItemProgressId | TypereferencePropertiesFilter, Group, SortDescriptionID of the record that tracks the user's progress through the program that includes this outcome, milestone, or exercise. This field is a relationship field.Relationship NameLearningItemProgressRelationship TypeLookupRefers ToLearningItemProgress |
| MilestoneComputationResult | TypedoublePropertiesFilter, Nillable, SortDescriptionDerived from the associated EnblProgramTaskDefinition record. For example, if a milestone has a single measure A with a result of 5, this field’s value is 5. |
| ProgressStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionStatus of the outcome, milestone, or exercise progress. Possible values are:BehindCompleted LateCompleted On TimeNo Longer TrackingNot CompletedOverdueFor details, see Completion Statuses in Enablement Analytics. |
