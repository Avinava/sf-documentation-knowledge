---
title: "Available Territory Slots Output"
domain: salesforce-scheduler-developer-guide
topic: available-territory-slots-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.402Z
estimatedTokens: 94
keywords: [Territory, Slots, Output, result]
---

# Available Territory Slots Output

> Available territory slots result.

# Available Territory Slots Output

Available territory slots result.

Response example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| result | Available Territory Slots List | All available time slots and resources available for that time slot across each territory. | Small, 49.0 | 49.0 |

## Code Examples

```
{
"result": {
    "territorySlots": [
      {
        "territoryId": "0HhB0000000TO9WKAW",
        "slots": [
          {
            "endTime": "2019-01-23T19:15:00.000+0000",
            "resources": [
              "0HnB0000000D2DsKAK",
              "0HnB0000000D2DsJKL"
            ],
            "startTime": "2019-01-23T16:15:00.000+0000"
          },
          {
            "endTime": "2019-01-23T19:30:00.000+0000",
            "resources": [
              "0HnB0000000D2DsKAK",
              "0HnB0000000D2DsJKL"
            ],
            "startTime": "2019-01-23T16:30:00.000+0000"
          }
        ]
      },
      {
        "territoryId": "0HhB0000000TO9WERT",
        "slots": [
          {
            "endTime": "2019-01-23T19:15:00.000+0000",
            "resources": [
              "0HnB0000000D2DsKAK"
            ],
            "startTime": "2019-01-23T16:15:00.000+0000"
          },
          {
            "endTime": "2019-01-23T19:30:00.000+0000",
            "resources": [
              "0HnB0000000D2DsKAK",
              "0HnB0000000D2DsJKL"
            ],
            "startTime": "2019-01-23T16:30:00.000+0000"
          }
        ]
      }
    ]
  }
}
```

## Related Topics

- Available Territory Slots List (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_responses_available_territory_slots_list.htm)
