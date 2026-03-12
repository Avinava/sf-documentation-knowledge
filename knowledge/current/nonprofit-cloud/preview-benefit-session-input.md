---
title: "Preview Benefit Session Input"
domain: nonprofit-cloud
topic: preview-benefit-session-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:00.751Z
estimatedTokens: 327
keywords: [Preview, Benefit, Session, Input, representation, scheduling]
---

# Preview Benefit Session Input

> Input representation of the benefit scheduling session preview
      request.

# Preview Benefit Session Input

Input representation of the benefit scheduling session preview request.

Root XML tag

<PreviewBenefitSessionInputRepresentation>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| benefitScheduleName | String | The name of the benefit schedule. | Required | 57.0 |
| firstSessionEndDate | String | The date and time when the first session ends in the benefit schedule. | Required | 57.0 |
| firstSessionStartDate | String | The date and time when the first session starts in the benefit schedule. | Required | 57.0 |
| mode | String | The mode of the benefit schedule. The dryRun mode indicates that no data is created. | Optional | 57.0 |
| noOfSessions | Integer | The maximum number of participants in a session. Default value is 5. | Optional | 57.0 |
| scheduleDays | Integer | The number of days in a week when the benefit schedule is executed. | Optional | 57.0 |
| scheduleEndDate | String | The date when the benefit schedule ends. | Optional | 57.0 |
| scheduleFrequency | String | The frequency at which the benefit schedule is executed. | Optional | 57.0 |
| totalRecurrencesCount | Integer | The number of times the benefit schedule is executed. | Optional | 57.0 |

## Code Examples

```
{
  "benefitScheduleName": "Nov Weekday schedule",
  "firstSessionStartDate": "2022-11-14T14:30:00.000",
  "firstSessionEndDate": "2022-11-14T15:00:00.000",
  "scheduleFrequency": "Weekly",
  "scheduleDays": 96,
  "mode": "dryRun",
  "noOfSessions": 5,
  "totalRecurrencesCount": 10
}
```
