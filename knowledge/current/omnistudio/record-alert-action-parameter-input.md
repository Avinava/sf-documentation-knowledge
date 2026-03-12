---
title: "Record Alert Action Parameter Input"
domain: omnistudio
topic: record-alert-action-parameter-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:47.660Z
estimatedTokens: 116
keywords: [Record, Alert, Action, Input, representation]
---

# Record Alert Action Parameter Input

> Input representation of the record alert action
    parameters.

# Record Alert Action Parameter Input

Input representation of the record alert action parameters.

Root XML tag

RecordAlertActionInput

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| name | String | The parameter name.NoteYou can specify effectiveDate when the action type is snooze. | Optional | 54.0 |
| value | String | The parameter value. | Optional | 54.0 |

## Code Examples

```
{
   "actionParameters": [ {
      "name": "effectiveDate",
      "value": "2021-12-11T02:16:35.477Z"
   } ]
}
```
