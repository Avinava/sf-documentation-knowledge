---
title: "Actionable List Fields Input"
domain: omnistudio
topic: actionable-list-fields-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:47.005Z
estimatedTokens: 226
keywords: [Actionable, Input, representation, updating, record]
---

# Actionable List Fields Input

> Input representation for updating an actionable list record.

# Actionable List Fields Input

Input representation for updating an actionable list record.

JSON Example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| omniScriptKey | String | OmniScript key for associating an OmniScript with the actionable list. The format of the OmniScript key is: CheckType/CheckSubType/Language. | Optional | 57.0 |
| priority | String | Priority assigned to the actionable list:HighMediumLow | Required | 57.0 |
| sortField | String | The criteria in which the actionable list is sorted. | Optional | 58.0 |
| sortOrder | String | The sequence in which actionable lists should be displayed (ascending, descending). | Optional | 58.0 |
| isAutoAssignmentAllowed | Boolean | Indicates whether automatic assignment of new actionable list members is allowed (true) or not (false). | Optional | 59.0 |

## Code Examples

```
{
 "actionableListFields": {
  "priority": "medium",
  "omniScriptKey": "type/subtype/English",
  "sortField": "Phone",
  "sortOrder": "Ascending",
  "isAutoAssignmentAllowed": true
 }
}
```
