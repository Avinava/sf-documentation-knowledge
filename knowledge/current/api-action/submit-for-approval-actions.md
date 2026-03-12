---
title: "Submit for Approval Actions"
domain: api-action
topic: submit-for-approval-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.231Z
estimatedTokens: 649
keywords: [Submit, Approval, Actions, Salesforce, record, process, defined, current, entity, REST, HTTP, Inputs, Outputs]
---

# Submit for Approval Actions

> Submit a Salesforce record for approval if an approval process is
   defined for the current entity.

# Submit for Approval Actions

Submit a Salesforce record for approval if an approval process is defined for the current entity.

For more information about creating submit for approval actions, see [Creating Approval Actions](https://help.salesforce.com/HTViewHelpDoc?id=approvals_creating_approval_actions.htm&language=en_US "HTML (New Window)"), and to learn more about approval processes, see [Approval Process Overview](https://help.salesforce.com/apex/HTViewHelpDoc?id=what_are_approvals.htm&language=en_US "HTML (New Window)"), in Salesforce Help.

This object is available in API version 32.0 and later.

## Supported REST HTTP Methods

URI

Get a list of actions:

/services/data/vXX.X/actions/standard/submit

Formats

JSON, XML

HTTP Methods

GET, HEAD, POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| comment | TypestringDescriptionOptional. Comments that accompany the Approval submission. |
| nextApproverIds | TypereferenceDescriptionOptional. An array of one ID of the next approver, which can be a user or a group. This input is optional because some approval processes have the next approver specified in the approval process definition. You can’t specify more than 2,000 approvers. |
| objectId | TypereferenceDescriptionRequired. The ID of the record being submitted for approval. |
| processDefinitionNameOrId | TypestringDescriptionOptional. The ID or name of the approval process to run against the record. If none is specified, the first approval process whose entry criteria the record satisfies is used. Names can’t be longer than 120 characters. |
| skipEntryCriteria | TypebooleanDescriptionOptional. A Boolean value controlling whether the entry criteria for the specified approval process must be evaluated for the record (true) or not (false). If set to true, also specify processDefinitionNameOrId. |
| submitterId | TypestringDescriptionOptional. The ID of the user submitting the record for approval. If none is specified, the submitter is the current user. |

## Outputs

| Output | Details |
| --- | --- |
| actorIds | TypereferenceDescriptionAn array of the IDs of the next approvers. |
| entityId | TypereferenceDescriptionThe ID of the record submitted for approval. |
| instanceId | TypereferenceDescriptionThe ID of the approval process instance. |
| instanceStatus | TypestringDescriptionThe status of the approval. The valid values areApprovedPendingRejectedRemoved |
| newWorkItemIds | TypereferenceDescriptionAn array of the IDs of the work items created for the next step in this approval process. |
