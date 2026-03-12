---
title: "Actionable List Members Assignments"
domain: omnistudio
topic: actionable-list-members-assignments
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:48.243Z
estimatedTokens: 270
keywords: [Actionable, Members, Assignments, priority, OmniScript, key, assignee, Member]
---

# Actionable List Members Assignments

> Update the priority and OmniScript key in the Actionable List object and update the
    assignee in the Actionable List Member object.

# Actionable List Members Assignments

Update the priority and OmniScript key in the Actionable List object and update the assignee in the Actionable List Member object.

Resource

```

```

Resource Example

```

```

Available Version

57.0

Requires Chatter

No

HTTP Methods

POST

Request Body for POST

JSON Example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actionableListFields | Actionable List Fields Input | Details of the Actionable List fields | Required | 57.0 |
| actionableListMemberFields | Actionable List Member Fields Input | Details of the Actionable List Member fields | Required | 57.0 |
| autoAssignee | Auto Assignee Input | Details of the assignees to whom the new members in an actionable list are automatically assigned. | Optional | 59.0 |

Response Body for POST

[Assign Actionable List](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_assign_actionable_list.htm "Output representation of the actionable list assignment request.")

## Code Examples

```
/connect/sales-excellence/actionable-list/assignment/${actionableListId}
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/sales-excellence/actionable-list/assignment/${actionableListId}
```

```
{
  "actionableListFields": {
    "priority": "medium",
    "omniScriptKey": "type/subtype/English",
    "sortField": "Phone",
    "sortOrder": "Ascending",
    "isAutoAssignmentAllowed": true
  },
  "actionableListMemberFields": {
    "assignee": {
      "type": "User",
      "name": "User1"
    }
  },
  "autoAssignee": {
    "type": "RecordOwner",
    "name": "RecordOwnerName"
  }
}
```

## Related Topics

- Actionable
                        List Fields Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_actionable_list_fields_input.htm)
- Actionable List Member Fields Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_actionable_list_member_fields_input.htm)
- Auto Assignee Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_auto_assignee_input.htm)
- Assign
              Actionable List (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_assign_actionable_list.htm)
