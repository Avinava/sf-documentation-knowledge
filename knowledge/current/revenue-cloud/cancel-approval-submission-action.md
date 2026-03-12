---
title: "Cancel Approval Submission Action"
domain: revenue-cloud
topic: cancel-approval-submission-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:03.652Z
estimatedTokens: 308
keywords: [Cancel, Approval, Submission, Action, Cancels, approval, submission, child, work, items, haven't, completed., add, comments, why, admin, made, cancellation., Supported, REST]
---

# Cancel Approval Submission Action

> Cancels an approval submission and all child approval work items
            that haven't been completed. You can also add comments about why the approval admin made
            the cancellation.

# Cancel Approval Submission Action

Cancels an approval submission and all child approval work items that haven't been completed. You can also add comments about why the approval admin made the cancellation.

This action also validates if a user has required permissions to cancel an approval submission. Keep these considerations in mind when you use this invocable action.

-   The user must have the Approval Admin user permission.
-   The status of the approval submission must be in In progress or Suspended status.

This action is available in API version 62.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/cancelApprovalSubmission

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| approvalSubmissionId | TypestringDescriptionRequired.ID of the Approval Submission to be canceled. |
| comments | TypestringDescriptionComments entered by the approval admin about why they canceled the Approval Submission. |

## Outputs

None.

## Example

POST

Here's a sample request for the Cancel Approval Submission action.

```

```

Here's a sample response for the Cancel Approval Submission action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "approvalSubmissionId": "9iPxx00000001lhEBA",
      "comments": "Cancellation comments."
    }
  ]
}
```

```
{
  "actionName": "cancelApprovalSubmission",
  "errors": null,
  "invocationId": null,
  "isSuccess": true,
  "outcome": null,
  "outputValues": null,
  "sortOrder": -1,
  "version": 1
}
```
