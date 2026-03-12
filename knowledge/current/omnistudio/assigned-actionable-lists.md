---
title: "Assigned Actionable Lists"
domain: omnistudio
topic: assigned-actionable-lists
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:48.427Z
estimatedTokens: 89
keywords: [Assigned, Actionable, Output, representation]
---

# Assigned Actionable Lists

> Output representation of the assigned actionable lists
        request.

# Assigned Actionable Lists

Output representation of the assigned actionable lists request.

JSON Example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| actionableLists | Assigned Actionable List[] | List of actionable lists assigned to an agent. | Small, 58.0 | 58.0 |

## Code Examples

```
{
  "actionableLists": [
    {
      "id": "0woSG00000000knYAA",
      "memberSortBy": "ReferenceRecord.Industry",
      "memberSortOrder": "Ascending",
      "name": "Sales List",
      "objectName": "Account",
      "priority": "High"
    },
    {
      "id": "0woSG00000000mPYAQ",
      "memberSortBy": "ReferenceRecord.Industry",
      "memberSortOrder": "Ascending",
      "name": "Patient List",
      "objectName": "Account",
      "priority": "High"
    },
    {
      "id": "0woSG00000000zJYAQ",
      "memberSortBy": "ReferenceRecord.BillingCity",
      "memberSortOrder": "Ascending",
      "name": "Target List",
      "objectName": "Account",
      "priority": "High"
    }
}
```

## Related Topics

- Assigned
                  Actionable List[] (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_assigned_actionable_list.htm)
