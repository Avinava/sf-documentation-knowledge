---
title: "Record Alert Action Input"
domain: psc-api
topic: record-alert-action-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:30.213Z
estimatedTokens: 176
keywords: [Record, Alert, Action, Input, representation]
---

# Record Alert Action Input

> Input representation of the record alert action.

# Record Alert Action Input

Input representation of the record alert action.

Root XML tag

RecordAlertActionInput

JSON example

Dismiss a record alert:

```

```

Snooze a record alert:

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actionName | String | The action to perform on a record alert.Possible values are:Dismiss—The record alert notification doesn’t appear again.Snooze—The record alert notification reappears after the specified time period. | Required | 54.0 |
| actionParameters | Record Alert Action Parameter Input[] | Represents the parameter specified for the record alert action. | Optional | 54.0 |

## Code Examples

```
{
   "actionName": "dismiss" 
}
```

```
{
   "actionParameters": [ {
      "name": "effectiveDate",
      "value": "2021-12-11T02:16:35.477Z"
   } ],
   "actionName": "snooze" 
}
```

## Related Topics

- Record Alert Action Parameter Input (atlas.en-us.psc_api.meta/psc_api/connect_requests_record_alert_action_parameter_input.htm)
