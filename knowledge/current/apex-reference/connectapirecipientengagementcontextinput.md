---
title: "ConnectApi.RecipientEngagementContextInput"
domain: apex-reference
topic: connectapirecipientengagementcontextinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.608Z
keywords: [ConnectApi.RecipientEngagementContextInput, See]
---

# ConnectApi.RecipientEngagementContextInput

# ConnectApi.RecipientEngagementContextInput

Context based on which the survey invitation is sent to a participant.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| recipient​Engagement​Context | Map<String, String> | Map each recipient with the context based on which the survey invitation is emailed. | Required | 50.0 |
| recipientId | String | Participant ID with whom the engagement context should be associated. | Required | 50.0 |

#### See Also

-   [ConnectApi.SurveyInvitationEmailInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_survey_email.htm "Survey invitation email.")