---
title: "Assigned Actionable List"
domain: omnistudio
topic: assigned-actionable-list
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:49.610Z
estimatedTokens: 229
keywords: [Assigned, Actionable, List, Output, representation, assigned, actionable, list, request.]
---

# Assigned Actionable List

> Output representation of the assigned actionable list
    request.

# Assigned Actionable List

Output representation of the assigned actionable list request.

JSON Example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| id | String | ID of the actionable list. | Small, 58.0 | 58.0 |
| memberSortBy | String | Actionable list field that is used to sort the actionable list members in Outreach List. | Small, 58.0 | 58.0 |
| memberSortOrder | String | Order that is used to sort the actionable list members in Outreach List.Possible values are:AscendingDescending | Small, 58.0 | 58.0 |
| name | String | Name of an actionable list. | Small, 58.0 | 58.0 |
| objectName | String | Name of the object configured in an actionable list, such as Account, Contact, or Lead. | Small, 58.0 | 58.0 |
| priority | String | Priority of an actionable list.Possible values are:HighMediumLow | Small, 58.0 | 58.0 |

## Code Examples

```
{
      "id": "0woSG00000000knYAA",
      "memberSortBy": "ReferenceRecord.Industry",
      "memberSortOrder": "Ascending",
      "name": "Sales List",
      "objectName": "Account",
      "priority": "High"
    }
```
