---
title: "Survey Recipient Survey Subjects Input"
domain: salesforce-feedback-management-dev-guide
topic: survey-recipient-survey-subjects-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:41.439Z
estimatedTokens: 121
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

## Code Examples

```
{"recipientId":"003x0000003j8CEAAY","associateRecordIds":["001x0000004EWIZAA4"]}
```
