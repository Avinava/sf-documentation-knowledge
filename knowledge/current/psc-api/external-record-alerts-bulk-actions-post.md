---
title: "External Record Alerts Bulk Actions (POST)"
domain: psc-api
topic: external-record-alerts-bulk-actions-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:30.470Z
estimatedTokens: 236
keywords: [External, Record, Alerts, Bulk, Actions, POST, Snooze, time, period, dismiss]
---

# External Record Alerts Bulk Actions (POST)

> Snooze bulk external record alerts for a specified time period or
      dismiss them.

# External Record Alerts Bulk Actions (POST)

Snooze bulk external record alerts for a specified time period or dismiss them.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=psc_api)

#### Note

You cannot peform multiple actions on a single record alert ID.

Resource

```

```

Resource Examples

```

```

Available version

55.0

Requires Chatter

No

HTTP methods

POST

Request body for POST

Root XML tag

RecordAlertBulkActionInputRepresentation

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actions | Record Alert Action Input[] | Representation of the record alert actions. | Required | 55.0 |

Response body for POST

[Record Alert Action Collection Map](atlas.en-us.psc_api.meta/psc_api/connect_responses_record_alert_action_collection_map.htm "Output representation of the record alert bulk actions.")

## Code Examples

```
/recordalerts/externalIds/actions
```

```
https://yourInstance.salesforce.com/services/data/vXX.X/recordalerts
/externalIds/actions
```

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

- Record Alert Action Input (atlas.en-us.psc_api.meta/psc_api/connect_requests_record_alert_action_input.htm)
- Record Alert Action
              Collection Map (atlas.en-us.psc_api.meta/psc_api/connect_responses_record_alert_action_collection_map.htm)
