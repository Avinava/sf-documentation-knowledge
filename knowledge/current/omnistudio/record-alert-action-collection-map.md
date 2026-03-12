---
title: "Record Alert Action Collection Map"
domain: omnistudio
topic: record-alert-action-collection-map
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:49.303Z
estimatedTokens: 126
keywords: [Record, Alert, Action, Collection, Map, Output, representation, bulk, actions]
---

# Record Alert Action Collection Map

> Output representation of the record alert bulk
    actions.

# Record Alert Action Collection Map

Output representation of the record alert bulk actions.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| hasErrors | Boolean | Indicates whether at least one of the results in the result set contains an error (true) or not (false). | Small, 55.0 | 55.0 |
| results | Map<String, Record Alert Action> | Representation of the record alert action. | Small, 55.0 | 55.0 |

## Code Examples

```
{
  "hasErrors": true,
  "results": {
    "0qZRO00000000B1": {
      "status": "SUCCESS",
      "recordAlertErrors": [],
      "recordAlert": {
        "actions": {
          "actionInfoCollection": [
            {
              "actionName": "snooze",
              "parameters": [
                "snoozeUntilDate"
              ]
            },
            {
              "actionName": "dismiss",
              "parameters": []
            }
          ]
        },
        "active": true,
        "description": "Alert Description",
        "effectiveDate": "2022-03-08T20:00:00.000Z",
        "id": "0qZRO00000000BO",
        "severity": "Info",
        "snoozeUntilDate": "2022-03-21T15:26:45.000Z",
        "source": "Internal",
        "subject": "Alert Subject",
        "validUntilDate": "2022-03-31T19:00:00.000Z",
        "whatId": "001RO000003NJJr"
      }
    },
    "0qZRO00000000B2": {
      "recordAlertErrors": [
        {
          "errorCode": "Internal_Error",
          "errorMessage": "Insufficient access to record"
        }
      ],
      "status": "Failure"
    },
    "0qZRO00000000B3": {
      "recordAlertErrors": [
        {
          "errorCode": "Internal_Error",
          "errorMessage": "Insufficient access to record"
        }
      ],
      "status": "Failure"
    }
  }
}
```

## Related Topics

- Record Alert Action (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_record_alert_action_output.htm)
