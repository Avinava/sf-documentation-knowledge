---
title: "Reassign Approval Work Item Action"
domain: revenue-cloud
topic: reassign-approval-work-item-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:06.083Z
estimatedTokens: 334
keywords: [Reassign, Approval, Work, Item, Action, hasn't, completed, add, comments, why, admin, reassigned, REST, HTTP, Inputs]
---

# Reassign Approval Work Item Action

> Reassign an approval work item that hasn't been completed. You can
            also add comments about why the approval admin reassigned the approval work
        item.

# Reassign Approval Work Item Action

Reassign an approval work item that hasn't been completed. You can also add comments about why the approval admin reassigned the approval work item.

This action also validates if a user has required permissions to reassign an approval work item and update the assignee. Keep these considerations in mind when you use this invocable action.

-   The user must have the Approval Admin user permission.
-   The status of the approval work item must be in Assigned status.

This action is available in API version 62.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/reassignApprovalWorkItem

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| approvalWorkItemId | TypestringDescriptionRequired.ID of the approval work item to be reassigned. |
| assigneeId | TypestringDescriptionRequired.ID of the user, group, or queue to reassign the approval work item to. |
| comments | TypestringDescriptionComments entered by the approval admin about why they reassigned the approval work item. |

## Outputs

None.

## Example

POST

Here's a sample request for the Reassign Approval Work Item action.

```

```

Here's a sample response for the Reassign Approval Work Item action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "approvalWorkItemId": "9jRDU00000015C22AI",
      "assigneeId": "005DU000000I3zHYAS",
      "comments": "Needs to be reviewed."
    }
  ]
}
```

```
{
  "actionName": "reassignApprovalWorkItem",
  "errors": null,
  "invocationId": null,
  "isSuccess": true,
  "outcome": null,
  "outputValues": null,
  "sortOrder": -1,
  "version": 1
}
```
