---
title: "Survey Recipient Survey Subjects Input"
domain: chatterapi
topic: survey-recipient-survey-subjects-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.921Z
estimatedTokens: 155
keywords: [Survey, Recipient, Subjects, Input, Records, associated, invitation]
---

# Survey Recipient Survey Subjects Input

> Records associated with the survey invitation.

# Survey Recipient Survey Subjects Input

Records associated with the survey invitation.

Root XML tag

<SurveyRecipientSurveySubjectsInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| associateRecord​Ids | String[] | ID of the associated records. | Required | 50.0 |
| recipientId | String | Participant ID with whose invitation the record should be associated. | Required | 50.0 |

#### See Also

-   [Survey Email Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_survey_email_input.htm "Survey email.")

## Code Examples

```
{"recipientId":"003x0000003j8CEAAY","associateRecordIds":["001x0000004EWIZAA4"]}
```

## Related Topics

- Survey Email Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_survey_email_input.htm)
