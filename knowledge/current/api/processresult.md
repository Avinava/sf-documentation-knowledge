---
title: "ProcessResult"
domain: api
topic: processresult
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:57.446Z
estimatedTokens: 318
keywords: [ProcessResult, process, call, depending, submit, approval, already, submitted]
---

# ProcessResult

> The process() call returns a
   ProcessResult object, which has the following properties, depending on the type of call (submit
   for approval or process object already submitted to for approval):

# ProcessResult

The [process()](atlas.en-us.api.meta/api/sforce_api_calls_process.htm "Submits an array of approval process instances for approval, or processes an array of approval process instances to be approved, rejected, or removed. For more information, see Set Up an Approval Process in Salesforce Help.") call returns a ProcessResult object, which has the following properties, depending on the type of call (submit for approval or process object already submitted to for approval):

| Name | Type | Description |
| --- | --- | --- |
| actorIds | ID | IDs of the users who are currently assigned to this approval step. |
| entityId | ID | The object being processed. |
| errors | Error[] | The set of errors returned if the request failed. |
| instanceId | ID | The ID of the ProcessInstance associated with the object submitted for processing. |
| instanceStatus | string | The status of the current process instance (not an individual object but the entire process instance). The valid values are “Approved,” “Rejected,” “Removed,” or “Pending.” |
| newWorkItemIds | ID[] | Case-insensitive IDs that point to ProcessInstanceWorkitem items (the set of pending approval requests). |
| success | boolean | true if processing or approval completed successfully. |

## Related Topics

- process() (atlas.en-us.api.meta/api/sforce_api_calls_process.htm)
