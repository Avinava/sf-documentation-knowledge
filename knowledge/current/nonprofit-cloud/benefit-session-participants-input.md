---
title: "Benefit Session Participants Input"
domain: nonprofit-cloud
topic: benefit-session-participants-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:38:20.404Z
estimatedTokens: 124
keywords: [Benefit, Session, Participants, add]
---

> Input representation of the request to add participants to a benefit
      session.

# Benefit Session Participants Input

Input representation of the request to add participants to a benefit session.

Root XML tag

<BenefitSessionParticipantsInputRepresentation>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| enrollees | String[] | The list of enrollees to be added to a benefit session. The enrollee can either be a contact, an account, or a program enrollment. | Required | 57.0 |

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
