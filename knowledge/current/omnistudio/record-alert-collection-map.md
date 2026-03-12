---
title: "Record Alert Collection Map"
domain: omnistudio
topic: record-alert-collection-map
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:49.317Z
estimatedTokens: 125
keywords: [Record, Alert, Collection, Map, Output, representation, bulk, alerts]
---

# Record Alert Collection Map

> Output representation of the bulk record alerts
    request.

# Record Alert Collection Map

Output representation of the bulk record alerts request.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| hasErrors | Boolean | Indicates whether at least one of the results in the result set contains an error (true) or not (false). | Small, 55.0 | 55.0 |
| results | Map<String, Record Alert Collection> | Represents the collection of record alerts. | Small, 55.0 | 55.0 |

## Code Examples

```
{
  "hasErrors": true,
  "results": {
    "001RO000003KPW0YAO": {
      "recordAlertErrors": [
        {}
      ],
      "recordAlerts": [
        {
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
          "effectiveDate": "2022-03-10T20:00:00.000Z",
          "id": "0qZRO000000008o",
          "severity": "Error",
          "snoozeUntilDate": "2022-03-12T19:09:06.000Z",
          "source": "Internal",
          "subject": "Alert Subject",
          "validUntilDate": "2022-03-30T19:00:00.000Z",
          "whatId": "001RO000003KPW0"
        }
      ],
      "status": "SUCCESS"
    },
    "001RO000003NJJrYAO": {
      "recordAlertErrors": [
        {
          "errorCode": "Apex_Execution_Error",
          "errorMessage": "Insufficient access to record"
        }
      ],
      "recordAlerts": [
        {
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
      ]
    },
    "status": "PARTIAL_SUCCESS"
  }
}
```

## Related Topics

- Record Alert Collection (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_record_alert_collection.htm)
