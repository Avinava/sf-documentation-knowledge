---
title: "ProviderActvtyPlanAdjusment"
domain: life-sciences-dev-guide
topic: provideractvtyplanadjusment
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:46.933Z
estimatedTokens: 1363
keywords: [ProviderActvtyPlanAdjusment, adjustment, requests, activity, plan, API, version, 65.0, later, Calls, Associated, Objects]
---

# ProviderActvtyPlanAdjusment

> Represents the details of the adjustment requests for an activity
         plan. This object is available in API version 65.0 and later.

# ProviderActvtyPlanAdjusment

Represents the details of the adjustment requests for an activity plan. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account associated with the activity plan adjustment request.This field is a relationship field.Relationship NameAccountRefers ToAccount |
| ActivityPlanId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe activity plan associated with the activity plan adjustment request.This field is a relationship field.Relationship NameActivityPlanRefers ToActivityPlan |
| AdjustmentReason | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason for the activity plan adjustment request. |
| AdjustmentType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe purpose of the activity plan adjustment request.Possible values are:AddResetUpdate |
| AssigneeGoal | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAssignee's activity goals set by the assignee. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp when the current user last viewed the record or list view. If this value is null, and LastReferenceDate isn’t null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the activity plan adjustment request. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the provider activity plan adjustment.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ProviderActivityMeasureTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of activity associated with the activity plan adjustment request.This field is a relationship field.Relationship NameProviderActivityMeasureTypeRefers ToProviderActivityMeasureType |
| ProviderActvtyGoalMeasureId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe provider activity goal measure associated with the activity plan adjustment request.This field is a relationship field.Relationship NameProviderActvtyGoalMeasureRefers ToProviderActivityGoalMeasure |
| ReviewerGoal | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAssignee's activity goals set by the reviewer. |
| ShouldRsetActvtyGoalMeas | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether the account must be removed from all activity plans.The default value is false. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe identifier of the record in the source system. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system from which data is loaded into this object. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the activity plan adjustment request.Possible values are:ApprovedRejectedSubmitted |
| StatusChangeReason | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason for the rejected activity plan adjustment request. |
| TerritoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe territory associated with the activity plan being adjusted.This field is a relationship field.Relationship NameTerritoryRefers ToTerritory2 |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProviderActvtyPlanAdjusmentFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ProviderActvtyPlanAdjusmentHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ProviderActvtyPlanAdjusmentShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ProviderActvtyPlanAdjusmentFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- ProviderActvtyPlanAdjusmentHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- ProviderActvtyPlanAdjusmentShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
