---
title: "ConnectApi.RecipientEngagementContextInput"
domain: apex-reference
topic: connectapirecipientengagementcontextinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:25.786Z
estimatedTokens: 166
keywords: [Context, survey, invitation, sent, participant]
---

# ConnectApi.RecipientEngagementContextInput

> Context based on which the survey invitation is sent to a
      participant.

# ConnectApi.RecipientEngagementContextInput

Context based on which the survey invitation is sent to a participant.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| recipient​Engagement​Context | Map<String, String> | Map each recipient with the context based on which the survey invitation is emailed. | Required | 50.0 |
| recipientId | String | Participant ID with whom the engagement context should be associated. | Required | 50.0 |

#### See Also

-   [ConnectApi.SurveyInvitationEmailInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_survey_email.htm "Survey invitation email.")

## Related Topics

- Map (atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.SurveyInvitationEmailInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_survey_email.htm)
