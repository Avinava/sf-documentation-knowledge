---
title: "Benefit Session Participants (POST)"
domain: nonprofit-cloud
topic: benefit-session-participants-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:00.808Z
estimatedTokens: 206
keywords: [Benefit, Session, Participants, POST, Add]
---

# Benefit Session Participants (POST)

> Add participants to a benefit session.

# Benefit Session Participants (POST)

Add participants to a benefit session.

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

<BenefitSessionParticipantsInputRepresentation>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| enrollees | String[] | The list of enrollees to be added to a benefit session. The enrollee can either be a contact, an account, or a program enrollment. | Required | 57.0 |

Response body for POST

[Benefit Session Participants Output](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_responses_benefit_session_participants_output.htm "Output representation of the request to add participants to a benefit session.")

## Code Examples

```
/connect/program-mgmt/benefit-schedules/${benefitScheduleId}/benefit-sessions/${benefitSessionId}/participants
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect​​/program-mgmt/benefit-schedules/${benefitScheduleId}/benefit-sessions/${benefitSessionId}/participants
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

- Benefit Session Participants Output (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_responses_benefit_session_participants_output.htm)
