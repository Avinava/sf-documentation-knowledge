---
title: "ProcessInstanceNode"
domain: object-reference
topic: processinstancenode
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.212Z
estimatedTokens: 727
keywords: [ProcessInstanceNode, step, instance, approval, process, Compare, ProcessNode, definition, retrieve, history, Calls]
---

# ProcessInstanceNode

> Represents a step in an instance of an approval process. Compare to ProcessNode, which describes the step in a process definition. Use this object to retrieve approval
			history.

# ProcessInstanceNode

Represents a step in an instance of an approval process. Compare to ProcessNode, which describes the step in a process definition. Use this object to retrieve approval history.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

Exceptions apply to approval history data retrieved with this object and are available only via SOAP API. For each approval process instance that was pending when Summer '14 became available for your organization, some field values are never populated or are populated only after the rollout. Other fields are populated only after the approval process instance is next acted upon—such as when a user approves, rejects, or reassigns an approval request—after the Summer '14 rollout.

ProcessInstanceNode fields are never populated for approval process instances that were completed before the Summer '14 rollout. For approval process instances that were pending during the Summer '14 rollout, all ProcessInstanceNode fields are populated only after the approval process instance is next acted upon after the Summer '14 rollout.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| CompletedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe completion date and time of this step in the approval process. The ElapsedTimeDay, ElapsedTimeHours, and ElapsedTimeMinutes field values are calculated using CompletedDate. |
| ElapsedTimeInDays | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total time in days since this step was started. |
| ElapsedTimeInHours | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total time in hours since this step was started. |
| ElapsedTimeInMinutes | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total time in minutes since this step was started. |
| LastActorId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe last actor that approved or rejected this step.This is a relationship field.Relationship NameLastActorRelationship TypeLookupRefers ToUser |
| NodeStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe status of this approval instance, for example Started, Pending, or Approved. |
| ProcessInstanceId | TypereferencePropertiesFilter, Group, SortDescriptionThe approval process this step is part of.This is a relationship field.Relationship NameProcessInstanceRelationship TypeLookupRefers ToProcessInstance |
| ProcessNodeId | TypereferencePropertiesFilter, Group, SortDescriptionThe identifier for this step.This is a relationship field.Relationship NameProcessNodeRelationship TypeLookupRefers ToProcessNode |
| ProcessNodeName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of this step.The contents of this field can be publicly viewed. |
