---
title: "Submit, Approve, or Reject Process Approvals"
domain: rest-api
topic: submit-approve-or-reject-process-approvals
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:25.513Z
keywords: [Submit, Approve, Reject, Process, Approvals, Syntax, Example]
---

# Submit, Approve, or Reject Process Approvals

# Submit, Approve, or Reject Process Approvals

Submits a particular record both if its entity supports an approval process and the entity has a defined approval process. Records can be approved and rejected if the current user is an assigned approver. This resource is available in REST API version 30.0 and later.

When using a POST request to do bulk approvals, the requests that succeed are committed and the requests that don’t succeed send back an error.

## Syntax

URI

/services/data/vXX.X/process/approvals/

Formats

JSON, XML

HTTP methods

POST

Authentication

Authorization: Bearer token

Request parameters

None required

Request body

The request body contains an array of process requests that contain the following information:

| Name | Type | Description |
| --- | --- | --- |
| actionType | string | Represents the kind of action to take: Submit, Approve, or Reject. |
| contextActorId | ID | The ID of the submitter who’s requesting the approval record. |
| contextId | ID | The ID of the record to submit for approval. |
| comments | string | The comment to add to the history step associated with this request. |
| nextApproverIds | ID[] | If the process requires specification of the next approval, the ID of the user to be assigned the next request. |
| processDefinitionNameOrId | string | The developer name or ID of the process definition. |
| skipEntryCriteria | boolean | Determines whether to evaluate the entry criteria for the process (true) or not (false) if the process definition name or ID isn’t null. If the process definition name or ID isn’t specified, this argument is ignored, and standard evaluation is followed based on process order. By default, the entry criteria isn’t skipped if it’s not set by this request. |

Response body

The response contains an array of process results that contain the following information:

| Name | Type | Description |
| --- | --- | --- |
| actorIds | ID[] | IDs of the users who are currently assigned to this approval step. |
| entityId | ID | The object being processed. |
| errors | Error[] | The set of errors returned if the request failed. |
| instanceId | ID | The ID of the ProcessInstance associated with the object submitted for processing. |
| instanceStatus | string | The status of the current process instance (not an individual object but the entire process instance). The valid values are “Approved,” “Rejected,” “Removed,” or “Pending.” |
| newWorkItemIds | ID[] | Case-insensitive IDs that point to ProcessInstanceWorkitem items (the set of pending approval requests) |
| success | boolean | true if processing or approval completed successfully. |

## Example

-   See [Submit a Record for Approval](atlas.en-us.api_rest.meta/api_rest/dome_process_approvals_submit.htm "Use the *** resource to submit a record or a collection of records for approval. Each call takes an array of requests.").
-   See [Approve a Record](atlas.en-us.api_rest.meta/api_rest/dome_process_approvals_approve.htm "Use the *** resource to approve a record or a collection of records. Each call takes an array of requests. The current user must be an assigned approver. The contextId is ID of the record to submit for approval..").
-   See [Reject a Record](atlas.en-us.api_rest.meta/api_rest/dome_process_approvals_reject.htm "Use the *** resource to reject a record or a collection of records. Each call takes an array of requests. The current user must be an assigned approver.").
-   See [Bulk Approvals](atlas.en-us.api_rest.meta/api_rest/dome_process_approvals_bulk.htm "Use the *** resource to do bulk approvals. You can specify a collection of different Process Approvals requests to have them all executed in bulk.").