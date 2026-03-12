---
title: "Override Approval Work Item Action"
domain: revenue-cloud
topic: override-approval-work-item-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:03.921Z
estimatedTokens: 439
keywords: [Override, Approval, Work, Item, Action, Update, approval, work, item, status, admin, decision, any, comments, added., Supported, REST, HTTP, Inputs, Outputs]
---

# Override Approval Work Item Action

> Update an approval work item status with the approval admin decision
            and any comments that the approval admin added.

# Override Approval Work Item Action

Update an approval work item status with the approval admin decision and any comments that the approval admin added.

This action also validates if a user has required permissions to override an approval work item and update its status. Keep these considerations in mind when you use this invocable action.

-   The user must have the Approval Admin user permission.
-   This action enables approval admins to interject the approval decision for any assignee.
-   The status of the approval work item must be in Assigned status.

This action is available in API version 62.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/overrideApprovalWorkItem

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| approvalDecision | TypestringDescriptionRequired.Action that the overriding approval admin made for the unreviewed approval work item. Valid values are:approvereject |
| approvalWorkItemId | TypestringDescriptionRequired.ID of the unreviewed approval work item to be reviewed by an approval admin. |
| channelType | TypepicklistDescriptionType of channel where the request to review the approval work item originated. Valid values are:InvocableActionSlackApprovalRecordThe default value is InvocableAction. Available in API version 65.0 and later. |
| comments | TypestringDescriptionComments entered by the approval admin about their decision to approve or reject an unreviewed approval work item. |

## Outputs

None.

## Example

POST

Here's a sample request for the Override Approval Work Item action.

```

```

Here's a sample response for the Override Approval Work Item action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "approvalWorkItemId": "9jRxx00000001lhEAA",
      "approvalDecision": "Reject",
      "channelType": "InvocableAction",
      "comments": "Needs to be reviewed."
    }
  ]
}
```

```
{
  "actionName": "overrideApprovalWorkItem",
  "errors": null,
  "invocationId": null,
  "isSuccess": true,
  "outcome": null,
  "outputValues": null,
  "sortOrder": -1,
  "version": 1
}
```
