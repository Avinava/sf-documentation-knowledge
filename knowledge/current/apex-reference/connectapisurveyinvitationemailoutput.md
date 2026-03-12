---
title: "ConnectApi.SurveyInvitationEmailOutput"
domain: apex-reference
topic: connectapisurveyinvitationemailoutput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:29.100Z
estimatedTokens: 126
keywords: [ConnectApi.SurveyInvitationEmailOutput, Survey, invitation, email.]
---

# ConnectApi.SurveyInvitationEmailOutput

> Survey invitation email.

# ConnectApi.SurveyInvitationEmailOutput

Survey invitation email.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| errorCode | Integer | Error code for the failed call. | 50.0 |
| errorMessage | String | Details explaining why the call failed. | 50.0 |
| status | ConnectApi.​SurveyEmailStatus​Enum | Status of a survey invitation email. Values are:Failed—The survey invitation email wasn't sent.Queued—The survey invitation email is queued for sending. | 50.0 |

## Related Topics

- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​SurveyEmailStatus​Enum (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
