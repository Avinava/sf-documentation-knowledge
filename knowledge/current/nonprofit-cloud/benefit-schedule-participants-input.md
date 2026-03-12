---
title: "Benefit Schedule Participants Input"
domain: nonprofit-cloud
topic: benefit-schedule-participants-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:00.655Z
estimatedTokens: 125
keywords: [Benefit, Schedule, Participants, Input, representation, add]
---

# Benefit Schedule Participants Input

> Input representation of the request to add participants to a benefit
      schedule.

# Benefit Schedule Participants Input

Input representation of the request to add participants to a benefit schedule.

Root XML tag

<BenefitScheduleParticipantsInputRepresentation>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| enrollees | String[] | The list of enrollees to be added to a benefit schedule. The enrollee can either be a contact, an account, or a program enrollment. | Required | 57.0 |

## Code Examples

```
{
  "enrollees": {
    "enrolleeList": [
        "003xx000004WhKeAAK"
    ]
  }
}
```
