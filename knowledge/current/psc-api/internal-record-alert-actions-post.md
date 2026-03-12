---
title: "Internal Record Alert Actions (POST)"
domain: psc-api
topic: internal-record-alert-actions-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:30.567Z
estimatedTokens: 262
keywords: [Internal, Record, Alert, Actions, POST, Snooze, alerts, time, period, dismiss]
---

# Internal Record Alert Actions (POST)

> Snooze internal record alerts for a specified time period or dismiss
      them.

# Internal Record Alert Actions (POST)

Snooze internal record alerts for a specified time period or dismiss them.

Resource

```

```

Resource Examples

```

```

Available version

54.0

Requires Chatter

No

HTTP methods

POST

Request body for POST

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

Response body for POST

[Record Alert](atlas.en-us.psc_api.meta/psc_api/connect_responses_record_alert.htm "Output representation of the details of a record alert.")

## Code Examples

```
/recordalerts/id/${alertId}/actions
```

```
https://yourInstance.salesforce.com/services/data/vXX.X/recordalerts
/id/0qZRO000000005a2AA/actions
```

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
- Record Alert (atlas.en-us.psc_api.meta/psc_api/connect_responses_record_alert.htm)
