---
title: "Review Approval Work Item Action"
domain: revenue-cloud
topic: review-approval-work-item-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:03.982Z
estimatedTokens: 497
keywords: [Review, Approval, Work, Item, Action, Update, approval, work, item, status, assignee, reviewer's, decision, any, comments, reviewer, added., Supported, REST, HTTP]
---

# Review Approval Work Item Action

> Update an approval work item status with the assignee or reviewer's
            decision and any comments that the assignee or reviewer added.

# Review Approval Work Item Action

Update an approval work item status with the assignee or reviewer's decision and any comments that the assignee or reviewer added.

Keep these considerations in mind when you use this invocable action.

-   The user must be an assignee of the approval work item or be a member of a group or queue if the approval work item is assigned to the group or queue. Additionally, a user has access to Approval Submissions if they're a delegate of the assignee or has a role higher than the assignee.
-   The status of the approval work item must be in Assigned status.
-   The user can also use this action if inherited access to group or queue membership, nested group membership, roles hierarchy, or delegates is available. See [Public Group Considerations](https://help.salesforce.com/s/articleView?id=platform.user_groups_considerations.htm&language=en_US "HTML (New Window)").

This action is available in API version 62.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/reviewApprovalWorkItem

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| approvalDecision | TypestringDescriptionRequired.Action that the assigned approver made for the approval work item. Valid values are:approvereject |
| approvalWorkItemId | TypestringDescriptionRequired.ID of the approval work item to be reviewed by the assigned approver. |
| channelType | TypepicklistDescriptionType of channel where the request to review the approval work item originated. Valid values are:InvocableActionSlackApprovalRecordThe default value is InvocableAction. Available in API version 65.0 and later. |
| comments | TypestringDescriptionApproval comments for the decision. |

## Outputs

None.

## Example

POST

Here's a sample request for the Review Approval Work Item action.

```

```

Here's a sample response for the Review Approval Work Item action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "approvalWorkItemId": "9jRxx00000001lhEAA",
      "approvalDecision": "Approve",
      "channelType": "InvocableAction",
      "comments": "Looks good."
    }
  ]
}
```

```
{
  "actionName": "reviewApprovalWorkItem",
  "errors": null,
  "invocationId": null,
  "isSuccess": true,
  "outcome": null,
  "outputValues": null,
  "sortOrder": -1,
  "version": 1
}
```
