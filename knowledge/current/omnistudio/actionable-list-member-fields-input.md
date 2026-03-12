---
title: "Actionable List Member Fields Input"
domain: omnistudio
topic: actionable-list-member-fields-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:47.987Z
estimatedTokens: 84
keywords: [Actionable, List, Member, Fields, Input, representation, updating, actionable, list, member, record.]
---

# Actionable List Member Fields Input

> Input representation for updating an actionable list member record.

# Actionable List Member Fields Input

Input representation for updating an actionable list member record.

JSON Example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| assignee | Assignee Input | Assignee of an actionable list member | Required | 57.0 |

## Code Examples

```
{
 "actionableListMemberFields": {
 "assignee": {
 "type": "RecordOwner",
 "name": ""
 }
 }
}
```

## Related Topics

- Assignee
                      Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_assignee_input.htm)
