---
title: "FlowOrchestrationStepInstance"
domain: object-reference
topic: floworchestrationstepinstance
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.371Z
estimatedTokens: 1120
keywords: [FlowOrchestrationStepInstance, run-time, instance, step, stage, orchestration, read-only, API, version, 53.0, later, Calls, Special, Access, Rules]
---

# FlowOrchestrationStepInstance

> Represents a run-time instance of a step in a run-time instance of a
         stage of a run-time instance of an orchestration. This read-only object is available
      in API version 53.0 and later.

# FlowOrchestrationStepInstance

Represents a run-time instance of a step in a run-time instance of a stage of a run-time instance of an orchestration. This read-only object is available in API version 53.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

If sharing rules are defined for FlowOrchestrationStepInstance, they determine access to specific orchestration step run records. Or the user must have the View All Data permission.

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe description of the step. |
| Label | TypestringPropertiesFilter, Group, SortDescriptionThe label of the step. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe API name of the step. |
| OrchestrationInstanceId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the FlowOrchestrationInstance associated with the orchestration step instance.This field is a relationship field.Relationship NameOrchestrationInstanceRelationship TypeLookupRefers ToFlowOrchestrationInstance |
| OwnerId | TypereferencePropertiesFilter, Group, Sort, UpdateDescriptionThe ID of the automated process user. This field is available in API version 56.0 and later.Relationship NameOwnerRelationship TypeLookupRefers ToUser |
| StageInstanceId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the FlowOrchestrationStageInstance associated with the orchestration step instance.This field is a relationship field.Relationship NameStageInstanceRelationship TypeLookupRefers ToFlowOrchestrationStageInstance |
| Status | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe status of the orchestration step instance. Valid values are:Completed—The step instance completed.Discontinued—The step instance was in progress or completed when it’s associated stage instance completed, or the step was in progress or completed when the orchestration instance encountered an error.Error—The step instance encountered an error or the autolaunched flow associated with a step instance encountered an error.InProgress—The step instance is running, the step instance was in progress when its associated stage encountered an error, or the screen flow associated with the step instance encountered an error.NotStarted—The step instance was created, but hasn’t met its entry condition. |
| StepType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of step. Valid values are:InteractiveStep—Interactive StepBackgroundStep—Background StepAynchronousBackgroundStep—Asynchronous Background StepThis value is available in API version 54.0 and later. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[FlowOrchestrationStepInstanceFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[FlowOrchestrationStepInstanceHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[FlowOrchestrationStepInstanceOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[FlowOrchestrationStepInstanceShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- FlowOrchestrationStepInstanceFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- FlowOrchestrationStepInstanceHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- FlowOrchestrationStepInstanceOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- FlowOrchestrationStepInstanceShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
