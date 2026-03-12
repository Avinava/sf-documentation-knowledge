---
title: "FlowOrchestrationInstance"
domain: object-reference
topic: floworchestrationinstance
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.344Z
estimatedTokens: 1302
keywords: [FlowOrchestrationInstance, run-time, instance, orchestration, API, version, 53.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# FlowOrchestrationInstance

> Represents a run-time instance of an orchestration. This object is
      available in API version 53.0 and later.

# FlowOrchestrationInstance

Represents a run-time instance of an orchestration. This object is available in API version 53.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update()

## Special Access Rules

If sharing rules are defined for FlowOrchestrationInstance, they determine access to specific orchestration run records. Or the user must have the View All Data permission.

## Fields

| Field | Details |
| --- | --- |
| CurrentStage | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe API name of the stage that was running when the orchestration run was paused or failed because of an error in an action called by a step. This field is available in API version 62.0 and later. |
| Duration | TypelongPropertiesFilter, Group, Nillable, SortDescriptionThe duration of the orchestration instance in seconds. Durations are incremented until the orchestration is completed, canceled, or ends in an error. This field is available in API version 62.0 and later. |
| InterviewId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe globally unique flow interview ID associated with the orchestration instance.This field is a relationship field.Relationship NameInterviewRelationship TypeLookupRefers ToFlowInterview |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent time a user viewed a record related to the orchestration run. This field is available in API version 55.0 and later. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent time a user viewed the orchestration run. This field is available in API version 55.0 and later. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name for the orchestration instance. |
| OrchestrationDeveloperName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe developer name of the flow definition associated with the orchestration run. This field is available in API version 55.0 and later. |
| OrchestrationLabel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe label of the orchestration. This field is available in API version 63.0 and later. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the automated process user. This field is available in API version 56.0 and later.Relationship NameOwnerRelationship TypeLookupRefers ToUser |
| Status | TypepicklistPropertiesFilter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the orchestration run. Valid values are:Canceled—The orchestration instance was canceled.Completed—The orchestration instance completed.Error—The orchestration instance, or a stage or step within the orchestration instance, encountered an error.InProgress—The orchestration instance is in progress.Suspended—The orchestration instance was suspended. |
| TriggeringRecord | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the record that triggered the record-triggered orchestration. This field is available in API version 62.0 and later. |
| TriggeringRecordType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the Salesforce object configured to trigger the orchestration. This field is available in API version 64.0 and later. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[FlowOrchestrationInstanceFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[FlowOrchestrationInstanceHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[FlowOrchestrationInstanceOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object. This object is available in API version 56.0 and later.

[FlowOrchestrationInstanceShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object. This object is available in API version 56.0 and later.

## Related Topics

- FlowOrchestrationInstanceFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- FlowOrchestrationInstanceHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- FlowOrchestrationInstanceOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- FlowOrchestrationInstanceShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
