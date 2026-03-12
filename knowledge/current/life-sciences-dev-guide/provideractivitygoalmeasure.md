---
title: "ProviderActivityGoalMeasure"
domain: life-sciences-dev-guide
topic: provideractivitygoalmeasure
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.900Z
estimatedTokens: 2115
keywords: [ProviderActivityGoalMeasure, goal, measurement, activity, API, version, 65.0, later, Calls, Associated, Objects]
---

# ProviderActivityGoalMeasure

> Represents the goal measurement for an activity type. This
      object is available in API version 65.0 and later.

# ProviderActivityGoalMeasure

Represents the goal measurement for an activity type. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActivityAttainmentPercentage | TypedoublePropertiesFilter, Nillable, SortDescriptionStores the percentage of the activity goal that has been attained.This field is a calculated field. |
| ActivityProratedAtmtGoal | TypedoublePropertiesFilter, Nillable, SortDescriptionThe portion of the attained goal adjusted for the current date within the plan cycle. Shows the target goal considering the elapsed time.This field is a calculated field. |
| ActivityProratedGoal | TypedoublePropertiesFilter, Nillable, SortDescriptionThe activity goal attainment that is capped at 100 percent.This field is a calculated field. |
| ActivityWeightValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionStores the weightage of the activity. |
| ActualActivityCappedValue | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe capped count of actual activities.This field is a calculated field. |
| ActualActivityWeightedValue | TypedoublePropertiesFilter, Nillable, SortDescriptionStores the weighted value of all actual activities.This field is a calculated field. |
| ActvtyAtmtDifferenceValue | TypedoublePropertiesFilter, Nillable, SortDescriptionThe difference between the Expected and Actual Attainment of what has been completed against the Goal.This field is a calculated field. |
| ActvtyAttainmentCappedPct | TypedoublePropertiesFilter, Nillable, SortDescriptionStores the percentage of the activity goal that has been attained, capped at 100 percent.This field is a calculated field. |
| AdditionalInformation | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionProvides context for how an account's planned activity is used. |
| AdjustedOverallGoal | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionStores the adjusted overall activity goal. |
| AssigneeGoal | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAssignee's activity goals set by the reviewer. |
| ExpectedActvtyPrrtAtmtVal | TypedoublePropertiesFilter, Nillable, SortDescriptionThe portion of the goal expected to be attained by the current date within the activity plan cycle.This field is a calculated field. |
| GoalAdjustmentType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of adjustment requested for the activity goal. |
| IsProductWeightagePopulated | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether product weightage is populated.The default value is false. |
| IsSuggestedActivity | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether the activity plan is suggested to the account without a goal.The default value is false. |
| LastProcessingDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionStores the latest date when the activity plan calculation job was run. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp when the current user last viewed the record or list view. If this value is null, and LastReferenceDate isn’t null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the provider activity goal measure. |
| OverallGoal | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe overall goal for the provider activity. |
| ProcessingJobIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the unique identifier for the activity plan calculation jobs. |
| ProductList | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionList of products included in the activity plan. |
| ProviderActivityGoalId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe activity goal associated with the provider activity goal measure.This field is a relationship field.Relationship NameProviderActivityGoalRelationship TypeMaster-detailRefers ToProviderActivityGoal (the master object) |
| ProviderActivityMeasureTypeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe type of the provider activity goal measure.This field is a relationship field.Relationship NameProviderActivityMeasureTypeRefers ToProviderActivityMeasureType |
| ReviewerGoal | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAssignee's activity goals set by the assignee. |
| SchdTotalProdtActvtyWtVal | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionStores the weighted value for all scheduled activities associated with the products. |
| ScheduledActvtyCappedValue | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe capped count of scheduled activities.This field is a calculated field. |
| ScheduledActvtyWeightedVal | TypedoublePropertiesFilter, Nillable, SortDescriptionStores the weighted value of all scheduled activities.This field is a calculated field. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe identifier of the record in the source system. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system from which data is loaded into this object. |
| TotalActivityValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total number of utilized activities for an account in a plan cycle. |
| TotalActlProdtActvtyWtVal | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionStores the weighted value for all actual activities associated with the products. |
| TotalActualActivityValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total number of actual activities. |
| TotalCommittedActivityValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total number of planned or scheduled activities for an account. |
| TotalExpenseAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total amount of money spent, approved, and estimated to be spent for an account. |
| TotalProjActvtyCappedValue | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe capped number of projected activities, which include actual and scheduled activities.This field is a calculated field. |
| TotalProjectedActivityValue | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total number of projected activities, which include actual and scheduled activities.This field is a calculated field. |
| TotalScheduledActivityValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total number of scheduled activities. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionType of the activity goal.Possible values are:GoalWeightedGoal—Weighted Goal |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProviderActivityGoalMeasureFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ProviderActivityGoalMeasureHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ProviderActivityGoalMeasureFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- ProviderActivityGoalMeasureHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
