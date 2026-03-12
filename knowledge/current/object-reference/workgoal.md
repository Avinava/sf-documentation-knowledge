---
title: "WorkGoal"
domain: object-reference
topic: workgoal
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:19.643Z
estimatedTokens: 2647
keywords: [WorkGoal, components, goal, associated, metrics, deprecated, API, version, 35.0, query, WDC, goals, Calls, Objects]
---

# WorkGoal

> Represents the components of a goal, such as its description and
			associated metrics. This object has been deprecated as of API version 35.0. Use
			the Goal object to query information
			about WDC goals.

# WorkGoal

Represents the components of a goal, such as its description and associated metrics. This object has been deprecated as of API version 35.0. Use the [Goal](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_goal.htm#sforce_api_objects_Goal "The Goal object represents the components of a goal such as its name, description, and status.") object to query information about WDC goals.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

The original WDC feature is unavailable as of Spring ’22. This object isn’t available as of API version 54.0. For more information, see [Phased WDC (legacy Work.com) Feature Retirement](https://help.salesforce.com/s/articleView?id=000356306&type=1&language=en_US).

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Related

[WorkGoalCollaborator](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_workgoalcollaborator.htm "Represents collaborators on a WorkGoal object. This doesn’t include WorkGoal followers, which is handled by Chatter Feed Follow functionality. This object has been deprecated as of API version 35.0. Use the Goal object to query information about WDC goals."), [WorkGoalLink](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_workgoallink.htm "Represents the relationship between two goals (many to many relationship). This object has been deprecated as of API version 35.0. Use the GoalLink object to query information about the relationship between two WDC goals."), [WorkGoalFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_customobject__feed.htm "Represents the feed, specifically posts and feed-tracked changes, on a custom object.")

## Fields

| Field Name | Details |
| --- | --- |
| ActualValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe actual value of the WorkGoal metric. Applicable only to WorkGoal objects of Type: Metric. |
| ActualValueExternalUrl | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionContains a URL that references WDC data synchronization for the actual value of a metric. Applicable only to WorkGoal objects of Type: Metric. |
| CompletionDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe completion date of the goal.NoteField-level security limits access to only administrators and owners by default, and only they can complete a goal. |
| Description | Typetextarea (max length 4000)PropertiesCreate, Nillable, UpdateDescriptionThe description of the goal. |
| DueDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date the WorkGoal object is due (optional). Applicable only to WorkGoal objects of Type: Metric. |
| FlaggedAs | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe progress of the WorkGoal object. Applicable only to WorkGoal objects of Type: Metric.Possible values:On Track: Progress on the metric is on track.Behind: Progress on the metric is behind schedule.Postponed: The metric is postponed.Critical: Progress on the metric is critical. |
| ImageUrl | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe URL for the goal image. The image must be stored in Documents and set as externally available. Applicable only to WorkGoal objects of Type: Goal. |
| InitialValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe initial value of the WorkGoal metric. Applicable only to WorkGoal objects of Type: Metric and MetricType: Progress or Percent. |
| IsKeyCompanyGoal | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionUsed to indicate if the goal is a key company goal. Used for the Company Goal Showcase. Applicable only to WorkGoal objects of Type: Goal. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe time stamp that indicates when the current user last viewed a record that is related to this goal. |
| LastSyncDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe time stamp that indicates when the actual value was last synced with the associated metrics report. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe time stamp that indicates when the current user last viewed this goal. |
| MetricType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of metric that is represented. (See values in the following list). Applies only to WorkGoal objects of Type: Metric.Possible values:Progress: ActualValue / TargetValue as a percentagePercent: the metric as a percentage onlyYesNo: the completed / not completed metric as a milestoneAbsolute: Deprecated |
| MetricTypeDataSource | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies how the metric (ActualValue and CurrentValue) is updated. Applies only to WorkGoal objects of Type: Goal and Metric.Possible values:Manual: indicates that the actual and target value of the metric is updated manually by the userRollup: indicates that the actual and target value of a goal is rolled up automatically by WDC GoalsDataSyncActualOnly: indicates that the actual value of the metric is linked to a Salesforce report |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the WorkGoal object. (Maximum length is 255.) |
| OverallStatus | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe overall calculated status of the WorkGoal based on FlaggedAs and CompletionDate. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who owns the WorkGoal. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the structural parent of the WorkGoal. For example, a goal that has a metric is represented by a WorkGoal of Type Metric, which has a parent of WorkGoal of Type Goal.NoteThe root and the parent must be set to the parent goal for any child metrics. |
| Progress | TypepercentPropertiesFilter, Nillable, SortDescriptionRead Only. The overall progress of the WorkGoal. |
| RootId | Typereference to a WorkGoal objectPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the structural root of the WorkGoal. For example, a goal that has a metric is represented by a WorkGoal of Type Metric, which has a root of WorkGoal of Type Goal. |
| State | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe state of the WorkGoal object. Applies only to WorkGoal objects of Type: Metric.Possible values:Draft: the draft state for the WorkGoalPublished: published state for the WorkGoalArchived: archived state for the WorkGoal (for example, goals that no longer apply) |
| TargetValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe target value of the WorkGoal. Applies only to WorkGoal objects of Type: Metric. |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of the WorkGoal object, used to differentiate between the components of a goal. (This field is used to represent components of a goal such as its description and associated metrics.)Possible values:Goal: a goalMetric: a metric (typically associated with goals)Objective: an objectiveKeyResult: a key result (typically associated with objectivesV2Mom: a V2MOM (pilot feature)Vision: a vision (pilot feature — typically associated with V2MOM)Value: a value (pilot feature - typically associated with V2MOM)Method: a method (pilot feature - typically associated with V2MOM)Obstacle: an obstacle (pilot feature - typically associated with V2MOM)Measure: a measure (pilot feature - typically associated with a method)NoteAdministrators can rename goals and metrics to objectives and key results, respectively. If this preference is enabled, use the Type Objective or KeyResult. Otherwise, use the default Type Goal or KeyResult. |
| Weight | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe weight of the goal or metric. The sum of the weights should equal 100%. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[WorkGoalFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.") (API verison 35.0)

Feed tracking is available for the object.

[WorkGoalHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

The original WDC feature is unavailable as of Spring ’22. This object isn’t available as of API version 54.0. For more information, see [Phased WDC (legacy Work.com) Feature Retirement](https://help.salesforce.com/s/articleView?id=000356306&type=1&language=en_US).

[WorkGoalOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

The original WDC feature is unavailable as of Spring ’22. This object isn’t available as of API version 54.0. For more information, see [Phased WDC (legacy Work.com) Feature Retirement](https://help.salesforce.com/s/articleView?id=000356306&type=1&language=en_US).

[WorkGoalShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- Goal (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_goal.htm)
- WorkGoalCollaborator (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_workgoalcollaborator.htm)
- WorkGoalLink (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_workgoallink.htm)
- WorkGoalFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_customobject__feed.htm)
- WorkGoalFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- WorkGoalHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- WorkGoalOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- WorkGoalShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
