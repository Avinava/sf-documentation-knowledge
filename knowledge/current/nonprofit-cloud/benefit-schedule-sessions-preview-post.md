---
title: "Benefit Schedule Sessions Preview (POST)"
domain: nonprofit-cloud
topic: benefit-schedule-sessions-preview-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:00.813Z
estimatedTokens: 428
keywords: [Benefit, Schedule, Sessions, Preview, POST, scheduling, session]
---

# Benefit Schedule Sessions Preview (POST)

> Create a preview of the benefit scheduling session.

# Benefit Schedule Sessions Preview (POST)

Create a preview of the benefit scheduling session. Users can preview the benefit sessions before they are created.

Resource

```

```

Example URI

```

```

Available version

57.0

HTTP methods

POST

Request body for POST

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

Response body for POST

[Preview Benefit Sessions Output](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_responses_preview_benefit_sessions_output.htm "Output representation of the benefit scheduling session preview request.")

## Code Examples

```
/connect/program-mgmt/benefit-schedules
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect​​/program-mgmt/benefit-schedules
```

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

## Related Topics

- Preview Benefit Sessions Output (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_responses_preview_benefit_sessions_output.htm)
