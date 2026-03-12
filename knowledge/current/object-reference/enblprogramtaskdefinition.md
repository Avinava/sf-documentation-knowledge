---
title: "EnblProgramTaskDefinition"
domain: object-reference
topic: enblprogramtaskdefinition
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:08.624Z
estimatedTokens: 1552
keywords: [EnblProgramTaskDefinition, outcome, milestone, exercise, Enablement, program, task, known, item, API, version, 60.0, later, Calls, Special]
---

# EnblProgramTaskDefinition

> Represents an outcome, a milestone, or an exercise in an Enablement
         program. A program task is also known as a program item. This object is available in
      API version 60.0 and later.

# EnblProgramTaskDefinition

Represents an outcome, a milestone, or an exercise in an Enablement program. A program task is also known as a program item. This object is available in API version 60.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

-   For Enablement admins to create, update, and delete Enablement programs, the Design and Deliver Enablement Programs permission is required. This permission is enabled by default as part of the Manage Enablement Essentials permission set, which comes with the Enablement add-on license.
-   For users who take Enablement programs, the Take Enablement Programs permission is required. This permission is enabled by default as part of the Use Enablement Programs permission set, which comes with the Enablement add-on license.
-   For partner users who take Partner Enablement programs, the Take Partner Enablement Programs permission is required. This permission is enabled by default as part of the Use Partner Enablement Programs permission set, which comes with the Enablement add-on license. Partner Enablement also requires a [supported Partner Relationship Management (PRM) add-on license](https://help.salesforce.com/s/articleView?id=slack.prm_support_license_template.htm&type=5&language=en_US "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| CompositeMilestoneType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of logic to use for evaluating the activity from two Enablement measures in a composite milestone.Possible values are:AdditionDivisionPercentageAvailable in API version 61.0 and later. |
| CustomEnblPgmTaskSubCategoryId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the EnblProgramTaskSubCategory record associated with a custom exercise type. This field is required when the TaskSubCategory field’s value is CustomExercise.This field is a relationship field.Available in API version 62.0 and later.Relationship NameCustomEnblPgmTaskSubCategoryRelationship TypeLookupRefers ToEnblProgramTaskSubCategory |
| Day | TypeintPropertiesFilter, Group, SortDescriptionThe day of the program when the item is due, relative to the program's start date. For example, if a user is expected to complete an exercise where they watch a product demo by day 2, this field’s value is 2. For an outcome, this field specifies the number of days the full program takes. For example, if your program lasts 60 days, the value of this field is 60 for the outcome. This field’s value contributes to the program’s due date that users see when they take the program. |
| Description | TypetextareaPropertiesCreateDescriptionA summary of the outcome, milestone, or exercise that’s visible to users when they take the program. |
| EnablementProgramId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the Enablement program that contains the outcome, milestone, or exercise. This field is a relationship field.Relationship NameEnablementProgramRelationship TypeLookupRefers ToEnablementProgram |
| EnblProgramSectionId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of an optional program section that contains the milestone or exercise. This field is a relationship field.Relationship NameEnblProgramSectionRelationship TypeLookupRefers ToEnblProgramSection |
| IsMilestoneAnOutcome | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the program item is the program’s final outcome (true) or an incremental milestone (false). The default value is false. |
| LearningItemId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the learning item record for the outcome, milestone, or exercise. This field is a relationship field.Relationship NameLearningItemRelationship TypeLookupRefers ToLearningItem |
| MilestoneTarget | TypedoublePropertiesFilter, Nillable, SortDescriptionThe target value for a user to achieve to get credit for completing the outcome or milestone. The unit depends on the specific measure used with the outcome or milestone. For example, if the measure is the dollar amount of all closed opportunities, then the field value is measured in dollars. |
| MinimumSampleSize | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of records to evaluate when calculating progress for an outcome or milestone that uses an average-based measure. Use this field with MilestoneTarget. For example, if you want users to achieve an average deal size of $50,000 after closing 4 deals, then this field’s value is 4 and MilestoneTarget is 50000. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe title of the outcome, milestone, or exercise that’s visible to users when they take the program. |
| SequenceNumber | TypeintPropertiesFilter, Group, SortDescriptionA number that specifies the order of the milestone or exercise, relative to other milestones or exercises that have the same due date in the program or in the same section, starting at 0. This number determines the order of items that users see for that day in the program. |
| StandardCustomExerciseType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionReserved for future use. |
| TaskCategory | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of program item. Possible values are:ExerciseMilestoneMilestone is used for both the program’s final outcome and incremental milestones. |
| TaskSubCategory | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of exercise. This value determines the content associated with the exercise. For example, if the field value is Video, the exercise must reference video content from the Enablement workspace in the Digital Experiences app. The LearningItemId field specifies the reference to that video content. Possible values are:ActionItemAudioRecordingCustomExercise—Available in API version 62.0 and later.DocumentFeedbackRequestOtherOtherExerciseScheduledEventStandardCustomExercise—Reserved for future use.TextLessonTrailheadVideo |
