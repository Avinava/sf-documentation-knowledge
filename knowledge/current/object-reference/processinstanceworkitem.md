---
title: "ProcessInstanceWorkitem"
domain: object-reference
topic: processinstanceworkitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.226Z
estimatedTokens: 1034
keywords: [ProcessInstanceWorkitem, user’s, pending, approval, Calls, Usage]
---

# ProcessInstanceWorkitem

> Represents a user’s pending approval request.

# ProcessInstanceWorkitem

Represents a user’s pending approval request.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

Exceptions apply to approval history data retrieved with this object and are available only via SOAP API. For each approval process instance that was pending when Summer '14 became available for your organization, some field values are never populated or are populated only after the rollout. Other fields are populated only after the approval process instance is next acted upon—such as when a user approves, rejects, or reassigns an approval request—after the Summer '14 rollout.

ProcessInstanceWorkitem fields are never populated for approval process instances that were completed before the Summer ’14 rollout. For approval process instances that were pending during the Summer ’14 rollout, all ProcessInstanceWorkitem fields are populated after the approval process instance is next acted upon after the Summer ’14 rollout, with three exceptions. The ElapsedTimeInDays, ElapsedTimeInHours, and ElapsedTimeInMinutes fields are never populated in ProcessInstanceWorkitem records for which equivalent ProcessInstanceStep records were created before the Summer ’14 rollout.

For all other ProcessInstanceWorkitem records, these three fields are populated after the approval process instance is next acted upon after the Summer ’14 rollout.

ProcessInstanceHistory combines fields from ProcessInstanceStep and ProcessInstanceWorkitem. As a result, incorrect elapsed times of 0 can appear in ProcessInstanceHistory records because the elapsed time fields were never populated in the related ProcessInstanceWorkitem record.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

Knowledge articles use ProcessInstanceWorkitem records to track the article history, so ProcessInstanceWorkitems records associated with Knowledge articles can’t be deleted.

## Supported Calls

delete(), describeSObjects(), query(), retrieve(), update()

## Fields

| Field | Details |
| --- | --- |
| ActorId | TypereferencePropertiesFilter, Group, Sort, UpdateDescriptionID of the user responsible for approving an approval request.This field is a polymorphic relationship field.Relationship NameActorRelationship TypeLookupRefers ToGroup, User |
| ElapsedTimeInDays | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total time in days since this approval request was started. |
| ElapsedTimeInHours | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total time in hours since this approval request was started. |
| ElapsedTimeInMinutes | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total time in minutes since this approval request was started. |
| OriginalActorId | TypereferencePropertiesFilter, Group, Sort, UpdateDescriptionID of the user originally assigned this approval request.This field is a polymorphic relationship field.Relationship NameOriginalActorRelationship TypeLookupRefers ToGroup, User |
| ProcessInstanceId | TypereferencePropertiesFilter, Group, Sort, UpdateDescriptionID of the ProcessInstance associated with this approval request.This field is a relationship field.Relationship NameProcessInstanceRelationship TypeLookupRefers ToProcessInstance |

## Usage

Use this object to manage a pending approval request for a user.

#### See Also

-   [ProcessInstance](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_processinstance.htm "Represents an instance of a single, end-to-end approval process. Use this and the node, step, and workitem process instance objects to create approval history reports.")

-   [ProcessInstanceHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_processinstancehistory.htm "This read-only object shows all steps and pending approval requests associated with an approval process (ProcessInstance).")

-   [ProcessInstanceStep](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_processinstancestep.htm "Represents one work item in an approval process (ProcessInstance).")

## Related Topics

- ProcessInstance (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_processinstance.htm)
- ProcessInstanceHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_processinstancehistory.htm)
- ProcessInstanceStep (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_processinstancestep.htm)
