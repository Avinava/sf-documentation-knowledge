---
title: "Actionable List Members Assignments"
domain: omnistudio
topic: actionable-list-members-assignments
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:08.934Z
keywords: [Actionable, List, Members, Assignments]
---

# Actionable List Members Assignments

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