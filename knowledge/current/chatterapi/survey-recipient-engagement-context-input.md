---
title: "Survey Recipient Engagement Context Input"
domain: chatterapi
topic: survey-recipient-engagement-context-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.916Z
estimatedTokens: 181
keywords: [Survey, Recipient, Engagement, Context, Input, invitation, sent, participant]
---

# Survey Recipient Engagement Context Input

> Context based on which the survey invitation is sent to a
      participant.

# Survey Recipient Engagement Context Input

Context based on which the survey invitation is sent to a participant.

Root XML tag

<SurveyRecipientEngagementContextInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| recipient​Engagement​Context | Map<String, String> | Map each recipient with the context based on which the survey invitation is emailed. | Required | 50.0 |
| recipientId | String | Participant ID with whom the engagement context should be associated. | Required | 50.0 |

#### See Also

-   [Survey Email Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_survey_email_input.htm "Survey email.")

## Code Examples

```
{"recipientId" : "003x0000003j8CEAAY","recipientEngagementContext":{"TestKey" :"TestValue"}}
```

## Related Topics

- Survey Email Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_survey_email_input.htm)
