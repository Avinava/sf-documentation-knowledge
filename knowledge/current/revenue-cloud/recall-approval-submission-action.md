---
title: "Recall Approval Submission Action"
domain: revenue-cloud
topic: recall-approval-submission-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:06.087Z
estimatedTokens: 320
keywords: [Recall, Approval, Submission, Action, isn't, completed, add, comments, submitter, admin, made, REST, HTTP, Inputs, Outputs]
---

# Recall Approval Submission Action

> Recall an approval submission that isn't completed. You can also add
            comments that the submitter or approval admin made the recall.

# Recall Approval Submission Action

Recall an approval submission that isn't completed. You can also add comments that the submitter or approval admin made the recall.

This action also validates if a user has required permissions to recall an approval submission. Keep these considerations in mind when you use this invocable action.

-   The user must have the Approval Admin user permission.
-   The user must also be a submitter of this approval submission.
-   The status of the approval submission must be in In progress or Suspended status.

This action is available in API version 62.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/recallApprovalSubmission

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| approvalSubmissionId | TypestringDescriptionRequired.ID of the approval submission to be recalled. |
| comments | TypestringDescriptionComments entered by the approval admin or approval submitter about why they recalled the approval submission. |

## Outputs

None.

## Example

POST

Here's a sample request for the Recall Approval Submission action.

```

```

Here's a sample response for the Recall Approval Submission action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "approvalSubmissionId": "9iPxx00000001lhEBA",
      "comments": "Recall comments."
    }
  ]
}
```

```
{
  "actionName": "recallApprovalSubmission",
  "errors": null,
  "invocationId": null,
  "isSuccess": true,
  "outcome": null,
  "outputValues": null,
  "sortOrder": -1,
  "version": 1
}
```
