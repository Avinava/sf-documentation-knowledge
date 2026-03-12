---
title: "ProviderActivityGoal"
domain: life-sciences-dev-guide
topic: provideractivitygoal
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.879Z
estimatedTokens: 2292
keywords: [ProviderActivityGoal, goals, provider, accounts, API, version, 65.0, later, Calls, Associated, Objects]
---

# ProviderActivityGoal

> Represents the goals for the provider accounts. This object is available
      in API version 65.0 and later.

# ProviderActivityGoal

Represents the goals for the provider accounts. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe account associated with the activity goal.This field is a relationship field.Relationship NameAccountRefers ToAccount |
| ActivityAttainmentPercentage | TypedoublePropertiesFilter, Nillable, SortDescriptionStores the percentage of the overall goal achieved by the completed activities for this account. Shows the progress towards the target.This field is a calculated field. |
| ActivityPlanId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe activity plan associated with the activity goal.This field is a relationship field.Relationship NameActivityPlanRelationship TypeMaster-detailRefers ToActivityPlan (the master object) |
| ActivityPlanType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type or the category of the activity plan.Possible values are:AccountGoal—Account GoalAccountGoalShared—Account Goal SharedWeightedTerritoryGoals—Weighted Territory Goals |
| ActlNonProdtActvtyCapVal | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total value of the completed non-product activities, which is capped at a limit. |
| ActualActivityCappedValue | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total number of completed activities, which is capped at a limit.This field is a calculated field. |
| ActualNonProdtActvtyValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total value of the completed activities that aren’t related to any product associated with this account. |
| ActualProdtActvtyCapValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total value of the completed product-related activities, which is capped at a limit. |
| ActualProductActivityValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total value of the completed activities related to products within this account. |
| ActvtyAttainmentCappedPct | TypedoublePropertiesFilter, Nillable, SortDescriptionStores the percentage of the overall goal achieved, which is capped at 100 percent.This field is a calculated field. |
| AssigneeChangeReason | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason for the change in the account goal, made by the assignee, during the review stage. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp when the current user last viewed the record or list view. If this value is null, and LastReferenceDate isn’t null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the provider activity goal. |
| NonProdtActvtyProratedVal | TypedoublePropertiesFilter, Nillable, SortDescriptionThe portion of the non-product goal adjusted for the current date within the activity plan. Shows the target value for the non-product activities considering the elapsed time.This field is a calculated field. |
| NonProdtAttainmentCapPct | TypedoublePropertiesFilter, Nillable, SortDescriptionStores the percentage of the non-product goal achieved, which is capped at 100 percent.This field is a calculated field. |
| NonProductAttainmentPct | TypedoublePropertiesFilter, Nillable, SortDescriptionStores the percentage of the non-product goal achieved through the completed activities. Indicates the progress towards the non-product target.This field is a calculated field. |
| NonProductGoal | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe target number for activities that aren't related to any products associated with this account. |
| OverallGoal | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total target number for all activities associated with the account. |
| ProdtActvtyAttainmentPct | TypedoublePropertiesFilter, Nillable, SortDescriptionStores the percentage of the product-specific goal achieved through the completed activities. Indicates the progress towards the product target.This field is a calculated field. |
| ProductActivityAtmtCapPct | TypedoublePropertiesFilter, Nillable, SortDescriptionStores the percentage of the product-specific goal achieved, which is capped at 100 percent.This field is a calculated field. |
| ProductActvtyProratedValue | TypedoublePropertiesFilter, Nillable, SortDescriptionThe portion of the product-specific goal adjusted for the current date within the activity plan. Shows the target value for products considering the elapsed time.This field is a calculated field. |
| ProductLevelGoal | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe target number for activities related to the products associated with the account. |
| ProratedOverallGoal | TypedoublePropertiesFilter, Nillable, SortDescriptionThe portion of the overall goal adjusted for the current date within the plan cycle. Shows the target value considering the elapsed time.This field is a calculated field. |
| ReviewerChangeReason | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason for the change in the account goal made by the reviewer during the review stage. |
| SchdNonProdtActvtyCapVal | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total value of scheduled non-product activities, which is capped at a limit. |
| SchdProdtActvtyCappedValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total value of the scheduled product-related activities, which is capped at a certain limit. |
| ScheduledActvtyCappedValue | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total number of scheduled activities, which is capped at a limit.This field is a calculated field. |
| ScheduledNonProdtActvtyVal | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal value of all scheduled activities that aren’t related to any product associated with this account. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe identifier of the record in the source system. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system from which data is loaded into this object. |
| TotalActlActvtyWeightedVal | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total value of the completed activities for this account adjusted by weights. Shows the difference in the importance of various activities. |
| TotalActualActivityValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal number of all completed activities associated with this account. |
| TotalProjectedActivityValue | TypedoublePropertiesFilter, Nillable, SortDescriptionThe projected total number of activities associated with this account. Aggregates the values of completed and scheduled activities.This field is a calculated field. |
| TotalSchdActvtyWeightedVal | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total value of scheduled activities for this account adjusted by weights. Shows the changes in the importance of different activities. |
| TotalSchdProdtActvtyValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal value of all scheduled activities related to the products associated with this account. |
| TotalScheduledActivityValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal number of all scheduled activities associated with this account. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProviderActivityGoalFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ProviderActivityGoalHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ProviderActivityGoalFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- ProviderActivityGoalHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
