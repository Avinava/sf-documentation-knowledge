---
title: "ConnectApi.RecipientEngagementContextInput"
domain: salesforce-feedback-management-dev-guide
topic: connectapirecipientengagementcontextinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:41.364Z
estimatedTokens: 126
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
