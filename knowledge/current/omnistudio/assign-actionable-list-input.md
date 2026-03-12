---
title: "Assign Actionable List Input"
domain: omnistudio
topic: assign-actionable-list-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:48.074Z
estimatedTokens: 159
keywords: [Assign, Actionable, List, Input, representation, assigning, actionable, list.]
---

# Assign Actionable List Input

> Input representation for assigning an actionable list.

# Assign Actionable List Input

Input representation for assigning an actionable list.

JSON Example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actionableListFields | Actionable List Fields Input | Details of the Actionable List fields | Required | 57.0 |
| actionableListMemberFields | Actionable List Member Fields Input | Details of the Actionable List Member fields | Required | 57.0 |
| autoAssignee | Auto Assignee Input | Details of the assignees to whom the new members in an actionable list are automatically assigned. | Optional | 59.0 |

## Code Examples

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
