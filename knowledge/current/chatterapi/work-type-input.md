---
title: "Work Type Input"
domain: chatterapi
topic: work-type-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:13.040Z
estimatedTokens: 296
keywords: [Work, Input]
---

# Work Type Input

> Work type.

# Work Type Input

Work type.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| blockTimeAfter​AppointmentIn​Minutes | Integer | Period after the appointment that is typically blocked for this work type. | Optional | 49.0 |
| blockTimeBefore​AppointmentIn​Minutes | Integer | Period before the appointment that is typically blocked for this work type. | Optional | 49.0 |
| durationIn​Minutes | Integer | Duration of the appointment in minutes. | Required if id isn’t provided | 49.0 |
| id | String | ID of the work type. | Required if durationInMinutes isn’t provided | 49.0 |
| operatingHoursId | String | ID of the operating hours. | Optional | 49.0 |
| operatingHours​TimeZone | String | Time zone for the operating hours. | Optional | 49.0 |
| skillRequirements | Skill Requirement Input[] | List of skills required to complete the tasks associated with this work type. | Optional | 49.0 |
| timeFrame​EndInMinutes | Integer | Ending of the appointment in minutes. | Optional | 49.0 |
| timeFrame​StartInMinutes | Integer | Beginning of the appointment in minutes. | Optional | 49.0 |

## Code Examples

```
{
  "id" : "08qRM00000003fkYAA"
}
```

## Related Topics

- Skill Requirement Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_skill_requirement_input.htm)
