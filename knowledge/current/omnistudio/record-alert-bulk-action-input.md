---
title: "Record Alert Bulk Action Input"
domain: omnistudio
topic: record-alert-bulk-action-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:48.723Z
estimatedTokens: 100
keywords: [Record, Alert, Bulk, Action, Input, representation, actions, bulk, record, alerts..]
---

# Record Alert Bulk Action Input

> Input representation of the actions on bulk record
    alerts..

# Record Alert Bulk Action Input

Input representation of the actions on bulk record alerts..

Root XML tag

RecordAlertBulkActionInputRepresentation

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actions | Record Alert Action Input[] | Representation of the record alert actions. | Required | 55.0 |

## Code Examples

```
{
  "actions": [
    {
      "recordAlertId": "0qZRO00000000B1",
      "actionParameters": [
        {
          "name": "snoozeUntilDate",
          "value": "2022-03-08T02:16:35.477Z"
        }
      ],
      "actionName": "snooze"
    },
    {
      "recordAlertId": "0qZRO00000000B2",
      "actionParameters": [],
      "actionName": "dismiss"
    },
    {
      "recordAlertId": "0qZRO00000000B3",
      "actionParameters": [
        {
          "name": "snoozeUntilDate",
          "value": "2022-03-08T02:16:35.477Z"
        }
      ],
      "actionName": "snooze"
    }
  ]
}
```

## Related Topics

- Record Alert Action Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_record_alert_action_input.htm)
