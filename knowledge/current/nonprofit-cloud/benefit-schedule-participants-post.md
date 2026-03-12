---
title: "Benefit Schedule Participants (POST)"
domain: nonprofit-cloud
topic: benefit-schedule-participants-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:00.805Z
estimatedTokens: 211
keywords: [Benefit, Schedule, Participants, POST, Asynchronously, add]
---

# Benefit Schedule Participants (POST)

> Asynchronously add participants to a benefit
    schedule.

# Benefit Schedule Participants (POST)

Asynchronously add participants to a benefit schedule.

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

<BenefitScheduleParticipantsInputRepresentation>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| enrollees | String[] | The list of enrollees to be added to a benefit schedule. The enrollee can either be a contact, an account, or a program enrollment. | Required | 57.0 |

Response body for POST

[Benefit Schedule Participants Output](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_responses_benefit_schedule_participants_output.htm "Output representation of the request to add participants to a benefit schedule.")

## Code Examples

```
/connect/program-mgmt/benefit-schedules/${benefitScheduleId}/participants
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect​​/program-mgmt/benefit-schedules/${benefitScheduleId}/participants
```

```
{
  "enrollees": {
    "enrolleeList": [
        "003xx000004WhKeAAK"
    ]
  }
}
```

## Related Topics

- Benefit Schedule Participants Output (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_responses_benefit_schedule_participants_output.htm)
