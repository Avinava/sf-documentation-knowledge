---
title: "ProcessInstanceStep"
domain: object-reference
topic: processinstancestep
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.220Z
estimatedTokens: 1179
keywords: [ProcessInstanceStep, work, item, approval, process, ProcessInstance, Calls, Usage, Associated, Objects]
---

# ProcessInstanceStep

> Represents one work item in an approval process (ProcessInstance).

# ProcessInstanceStep

Represents one work item in an approval process (ProcessInstance).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

Exceptions apply to approval history data retrieved with this object and are available only via SOAP API. For each approval process instance that was pending when Summer '14 became available for your organization, some field values are never populated or are populated only after the rollout. Other fields are populated only after the approval process instance is next acted upon—such as when a user approves, rejects, or reassigns an approval request—after the Summer '14 rollout.

ProcessInstanceStep fields are never populated for approval process instances that were completed before the Summer '14 rollout. For approval process instances that were pending during the Summer '14 rollout, all ProcessInstanceStep fields are populated only after the approval process instance is next acted upon after the Summer '14 rollout.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| ActorId | TypereferencePropertiesFilter, Group, SortDescriptionID of the user who’s assigned to this approval step.This is a polymorphic relationship field.Relationship NameActorRelationship TypeLookupRefers ToGroup, User |
| Comments | TypestringPropertiesFilter, Nillable, SortDescriptionLimit: 4,000 bytes.The contents of this field can be publicly viewed. |
| ElapsedTimeInDays | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total time in days since this step was started. |
| ElapsedTimeInHours | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total time in hours since this step was started. |
| ElapsedTimeInMinutes | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total time in minutes since this step was started. |
| OriginalActorId | TypereferencePropertiesFilter, Group, SortDescriptionID of the user who was originally assigned to this approval step.This is a polymorphic relationship field.Relationship NameOriginalActorRelationship TypeLookupRefers ToGroup, User |
| ProcessInstanceId | TypereferencePropertiesFilter, Group, SortDescriptionID of the ProcessInstance that this approval step belongs to.This is a relationship field.Relationship NameProcessInstanceRelationship TypeLookupRefers ToProcessInstance |
| StepNodeId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the node currently assigned to this approval step. |
| StepStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe status of this approval step.ApprovedFaultHeldNoResponsePendingReassignedRejectedRemovedStartedIf the approval step requires unanimous approval and one approver rejects the request, the value of this field for the other approvers changes to NoResponse. Likewise, if approval is based on the first response and an approver responds, the value of this field for the other approvers changes to NoResponse. |

## Usage

Query or retrieve a new step in an approval process (ProcessInstance).

## Associated Objects

This object has the following associated objects. Unless noted, they’re available in the same API version as this object.

[ProcessInstanceStepChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 58.0)

Change events are available for the object.

#### See Also

-   [ProcessInstance](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_processinstance.htm "Represents an instance of a single, end-to-end approval process. Use this and the node, step, and workitem process instance objects to create approval history reports.")

-   [ProcessInstanceHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_processinstancehistory.htm "This read-only object shows all steps and pending approval requests associated with an approval process (ProcessInstance).")

-   [ProcessInstanceWorkitem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_processinstanceworkitem.htm "Represents a user’s pending approval request.")

## Related Topics

- ProcessInstanceStepChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- ProcessInstance (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_processinstance.htm)
- ProcessInstanceHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_processinstancehistory.htm)
- ProcessInstanceWorkitem (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_processinstanceworkitem.htm)
