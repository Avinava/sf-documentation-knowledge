---
title: "FlowOrchestrationStageInstance"
domain: object-reference
topic: floworchestrationstageinstance
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:10.362Z
estimatedTokens: 968
keywords: [FlowOrchestrationStageInstance, run-time, instance, stage, orchestration, read-only, API, version, 53.0, later, Calls, Special, Access, Rules, Associated]
---

# FlowOrchestrationStageInstance

> Represents a run-time instance of a stage in a run-time instance of an
         orchestration. This read-only object is available in API version 53.0 and later.

# FlowOrchestrationStageInstance

Represents a run-time instance of a stage in a run-time instance of an orchestration. This read-only object is available in API version 53.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

If sharing rules are defined for FlowOrchestrationStageInstance, they determine access to specific orchestration stage run records. Or the user must have the View All Data permission.

## Fields

| Field | Details |
| --- | --- |
| Label | TypestringPropertiesFilter, Group, SortDescriptionThe label for the flow orchestration stage instance. This label helps users and administrators differentiate between step instances from the same orchestration. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe API name for the flow orchestration stage instance. |
| OrchestrationInstanceId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the FlowOrchestrationInstance associated with the orchestration stage instance.This field is a relationship field.Relationship NameOrchestrationInstanceRelationship TypeLookupRefers ToFlowOrchestrationInstance |
| OwnerId | TypereferencePropertiesFilter, Group, Sort, UpdateDescriptionThe ID of the automated process user. This field is available in API version 56.0 and later.Relationship NameOwnerRelationship TypeLookupRefers ToUser |
| Position | TypeintPropertiesFilter, Group, SortDescriptionFor internal use only. |
| Status | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe run status of the orchestration stage instance. Valid values are:Completed—The stage instance completed.Discontinued—The stage was in progress or completed when the orchestration instance encountered an error.Error—The stage instance encountered an error, an instance of a background step within the stage encountered and error, or an autolaunched flow called by a background step within the stage encountered an error.InProgress—The stage instance is in progress.Suspended—The stage was in progress when the orchestration instance was manually suspended. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[FlowOrchestrationStageInstanceFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[FlowOrchestrationStageInstanceHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[FlowOrchestrationStageInstanceOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[FlowOrchestrationStageInstanceShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- FlowOrchestrationStageInstanceFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- FlowOrchestrationStageInstanceHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- FlowOrchestrationStageInstanceOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- FlowOrchestrationStageInstanceShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
