---
title: "Inbound Event"
domain: automotive-cloud
topic: inbound-event
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.846Z
estimatedTokens: 157
keywords: [Inbound, Event, Output, representation, events, processing, incoming]
---

# Inbound Event

> Output
    representation of the events processing request during incoming
    events.

# Inbound Event

Output representation of the events processing request during incoming events.

Sample Response

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| action​Response | Action Response[] | Action response of the inbound events. | Small, 60.0 | 60.0 |
| errors | Error Response[] | Error details if the request failed to process. | Small, 59.0 | 59.0 |
| source​System​Identifier | String | Event ID that correlates to the inbound event. | Small, 59.0 | 59.0 |
| status | String | Status of the inbound event API. | Small, 59.0 | 59.0 |

## Code Examples

```
{
  "sourceSystemIdentifier": "123",
  "status": "SUCCESS",
  "errors": [
    {
      "code": "CREATE_OR_UPDATE_RECORD_FAILED",
      "message": "Object: Vehicle, Error Message: duplicate value found: VehicleIdentificationNumber duplicates value on record with id: 0vLxx0000002d7eAI"
    }
  ],
  "actionResponse": [
    {
      "actionName": "action1",
      "actionOutput": {
        "key1": "value1",
        "key2": "value2"
      }
    },
    {
      "actionName": "action2",
      "actionOutput": {
        "key1": "value1",
        "key2": "value2"
      }
    }
  ]
}
```

## Related Topics

- Action
                  Response[] (atlas.en-us.automotive_cloud.meta/automotive_cloud/connect_responses_action_response.htm)
- Error Response[] (atlas.en-us.automotive_cloud.meta/automotive_cloud/connect_responses_error_message.htm)
