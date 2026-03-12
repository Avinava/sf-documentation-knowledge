---
title: "ActivityPlan"
domain: life-sciences-dev-guide
topic: activityplan
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:44.964Z
estimatedTokens: 1772
keywords: [ActivityPlan, user's, activity, goals, cycle, API, version, 65.0, later, Calls, Associated, Objects]
---

# ActivityPlan

> Represents the user's activity goals for the cycle. This object is
      available in API version 65.0 and later.

# ActivityPlan

Represents the user's activity goals for the cycle. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActivityChgRvwThresholdPct | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe maximum percentage by which an account's overall activity goal can be changed during the review of a future activity plan. |
| AssigneeDueDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe due date for the activity plan assignee to review the activity plan. |
| AssigneePlanAdjEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date by which the assignee must complete the activity plan adjustments. |
| AssigneePlanAdjStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the assignee can start making adjustments to the activity plan. |
| Comment | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionStores the comments or observations on the activity plan. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether the activity plan is active (true) or not (false).The default value is false. |
| IsCalculationEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether plan calculations are enabled for this activity plan (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp when the current user last viewed the record or list view. If this value is null, and LastReferenceDate isn’t null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the activity plan. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the activity plan.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ParentRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe parent activity plan for this activity plan.This field is a relationship field.Relationship NameParentRecordRefers ToActivityPlan |
| ReviewerDueDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe due date for the activity plan reviewer to approve any changes made by the assignee. |
| ReviewerPlanAdjEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date by which the approver must complete approving the assignee's activity plan adjustments. |
| ReviewerPlanAdjStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the reviewer can start approving the assignee's activity plan adjustments. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe identifier of the record in the source system. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system from which data is loaded into this object. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the activity plan.Possible values are:AdminReview—Admin ReviewApprovedEmployeeReview—Employee ReviewInProgress—In ProgressManagerReview—Manager ReviewRejectedSubmitted |
| TerritoryList | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA list of territories included in this activity plan. |
| TimePeriodId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe period of the activity plan, for example, FY 2024.This field is a relationship field.Relationship NamePeriodRefers ToPeriod |
| TotalAcctAdjThresholdPct | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe maximum percentage by which the total number of accounts in an active activity plan can be changed during the adjustment phase. |
| TotalAcctChgThresholdPct | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe maximum percentage by which the total number of accounts in the activity plan can be changed during the review of a future activity plan. |
| TotalActvtyChgThresholdPct | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe maximum percentage by which the combined overall goals of all accounts can be changed during the review of a future activity plan. |
| TotalAllowAdjRequestCount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total number of approved plan adjustment requests allowed for an active activity plan. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionIndicates the type of the activity plan.Possible values are:AccountGoal—Account GoalAccountGoalShared—Account Goal SharedWeightedTerritoryGoals—Weighted Territory Goals |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionIndicates the usage type of the activity plan.Possible values are:ProviderPlanCycle—Provider Plan Cycle |
| WorkingDayCount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of working days available for the activity plan. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ActivityPlanFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ActivityPlanHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ActivityPlanShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ActivityPlanFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- ActivityPlanHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- ActivityPlanShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
