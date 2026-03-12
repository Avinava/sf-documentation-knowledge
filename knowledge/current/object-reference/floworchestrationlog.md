---
title: "FlowOrchestrationLog"
domain: object-reference
topic: floworchestrationlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.356Z
estimatedTokens: 1595
keywords: [FlowOrchestrationLog, logging, data, FlowOrchestrationInstance, API, version, 54.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# FlowOrchestrationLog

> Represents logging data for a FlowOrchestrationInstance. This object is available in API version 54.0 and later.

# FlowOrchestrationLog

Represents logging data for a FlowOrchestrationInstance. This object is available in API version 54.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()update()

## Special Access Rules

If sharing rules are defined for FlowOrchestrationInstance and the Inherit orchestration run sharing rules to control orchestration run log record access setting is enabled, then orchestration run log record access is inherited from related orchestration run records. If the Inherit orchestration run sharing rules to control orchestration run log record access setting isn’t enabled, a user must have the Manage Flow permission. Or the user must have the View All Data permission.

## Fields

| Field | Details |
| --- | --- |
| Actor | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionFor an interactive step, the user that completed the work item.For a background or MuleSoft step, the username of the user that the step ran as. |
| Assignee | TypestringPropertiesFilter, Group, Nillable, SortDescriptionFor an interactive step, the user, group, or queue assigned to a work item when the FlowOrchestrationLog relates to an interactive FlowOrchestrationStep. |
| AssigneeType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionFor an interactive step, the assignee type associated with an interactive step's work item. Valid values are:GroupInvalidQueueUser |
| Comments | TypestringPropertiesFilter, Nillable, SortDescriptionThe string stored in an output variable with the API name of Comments from a flow called by a completed orchestration step. |
| Context | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the record where the assigned user completed the flow associated with an interactive step in the Work Guide component. |
| Duration | TypelongPropertiesFilter, Group, Nillable, SortDescriptionA long number that indicates the duration, in seconds, of the associated FlowOrchestrationInstance, FlowOrchestrationStage, FlowOrchestrationStep, or FlowOrchestrationWorkItem. |
| Kind | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe milestone associated with the FlowOrchestrationLog. Valid values are:CancelInstance—The associated FlowOrchestrationInstance was canceled.DiscontinueStage—The associated FlowOrchestrationStage was discontinued.DiscontinueStep—The associated FlowOrchestrationStep was discontinued.EndInstance—The associated FlowOrchestrationInstance was completed successfully.EndStage—The associated FlowOrchestrationStage was exited successfully.EndStep—The associated FlowOrchestrationStep was exited successfully.EndWorkItem—The associated FlowOrchestrationWorkItem was completed successfully.FailInstance—The associated FlowOrchestrationInstance encountered an error.FailStage—The associated FlowOrchestrationStage encountered an error.FailStep—The associated FlowOrchestrationStep encountered an error.ResumeInstance—A failed or paused orchestration instance was resumed.ReassignWorkItem—The associated FlowOrchestrationWorkItem was reassigned.RunRecallPath—The associated approval submission was recalled.StartInstance—The associated FlowOrchestrationInstance started.StartStage—The associated FlowOrchestrationStage started.StartStep—The associated FlowOrchestrationStep started.StartWorkItem—The associated FlowOrchestrationWorkItem started.SuspendInstance—The associated FlowOrchestrationInstance was suspended.SuspendStage—The associated FlowOrchestrationStage was suspended. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, SortDescriptionThe name for the FlowOrchestrationLog record. |
| OrchestationInstanceId | TypereferencePropertiesFilter, Sort, GroupDescriptionThe FlowOrchestrationInstance associated with the FlowOrchestrationLog.This field is a relationship field.Relationship NameOrchestrationInstanceRelationship TypeLookupRefers ToFlowOrchestrationInstance |
| OrchestrationName | TypestringPropertiesFilter, Group, idLookup , SortDescriptionThe API name of the orchestration. |
| OrchestrationVersion | TypeintPropertiesFilter, Group, SortDescriptionAn integer for the FlowDefinitionVersion of the orchestration associated with the FlowOrchestrationLog. |
| StageName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe API name of the stage in the associated orchestration. |
| StepName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe API name of the step in the associated orchestration. |
| Timestamp | TypedateTimePropertiesFilter, SortDescriptionThe date and time when the FlowOrchestrationLog milestone occured. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[FlowOrchestrationLogFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[FlowOrchestrationLogHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[FlowOrchestrationLogOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[FlowOrchestrationLogShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- FlowOrchestrationLogFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- FlowOrchestrationLogHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- FlowOrchestrationLogOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- FlowOrchestrationLogShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
