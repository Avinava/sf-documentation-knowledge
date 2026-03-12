---
title: "HealthScoreActionLog"
domain: health-cloud-object-reference
topic: healthscoreactionlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:37.318Z
estimatedTokens: 1083
keywords: [HealthScoreActionLog, log, actions, triggered, Dynamic, Unified, Health, Scoring, component, feature, API, version, 55.0, later, Calls]
---

# HealthScoreActionLog

> Represents the log of actions triggered from the Dynamic Actions for Unified
         Health Scoring component in the Unified Health Scoring feature. This object is
      available in API version 55.0 and later.

# HealthScoreActionLog

Represents the log of actions triggered from the Dynamic Actions for Unified Health Scoring component in the Unified Health Scoring feature. This object is available in API version 55.0 and later.

Records in this object are automatically created when actions are triggered by your users.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActionDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time when the action was triggered by an end user. |
| ActionDescription | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the triggered action, as defined by the admin. |
| ActionIconUrl | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe URL of triggered action’s icon, as defined by the admin. |
| ActionLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label of the triggered action, as defined by the admin. |
| ActionName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe API name of the triggered action, as defined by the admin. |
| ActionStatus | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe status of the triggered action. The default value is ‘triggered’. To update the status to another value, set up a custom trigger or process.Possible values are:AbortedCompletedFailedIn ProgressTriggered |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time the record was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the log record. |
| PerformedById | TypeLookupPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user who triggered the action.Refers ToUser |
| Score | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe score of the subject who the action was triggered for. This field isn’t populated in logs by default. Customize the action logging capability of Unified Health Scoring to use this field. |
| ScoreCategoryId | TypeLookupPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe score category of a score of the subject who the action was triggered for. This field isn’t populated in logs by default. Customize the action logging capability of Unified Health Scoring to use this field.Refers ToScoreCategory |
| SubjectId | TypeLookupPropertiesCreate, Filter, Group, SortDescriptionThe subject who the action was triggered for.Refers ToAccount, Contact, Lead |
| TargetAccountId | TypeLookupPropertiesFilter, Group, Nillable, SortDescriptionIf the subject is an account, the account record of the subject.Refers ToAccount |
| TargetContactId | TypeLookupPropertiesFilter, Group, Nillable, SortDescriptionIf the subject is an contact, the contact record of the subject.Refers ToContact |
| TargetLeadId | TypeLookupPropertiesFilter, Group, Nillable, SortDescriptionIf the subject is an lead, the lead record of the subject.Refers ToLead |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[HealthScoreActionLogFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[HealthScoreActionLogHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- HealthScoreActionLogFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- HealthScoreActionLogHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
