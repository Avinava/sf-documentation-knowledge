---
title: "Survey Invitation Settings Input"
domain: chatterapi
topic: survey-invitation-settings-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.906Z
estimatedTokens: 320
keywords: [Survey, Invitation, Settings, Input, representation, define, participants, respond, expiration, configurations]
---

# Survey Invitation Settings Input

> Input representation of the settings of the survey invitation that
      define the participants who can respond to the survey, its expiration, and other related
      configurations.

# Survey Invitation Settings Input

Input representation of the settings of the survey invitation that define the participants who can respond to the survey, its expiration, and other related configurations.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| allowGuest​UserResponse | Boolean | Indicates whether a guest user can respond to the survey (true) or not (false). | Required | 56.0 |
| allowParticipants​AccessTheirResponse | Boolean | Indicates whether participants with Salesforce accounts can access their responses (true) or not (false). | Required | 56.0 |
| collectAnonymous​Response | Boolean | Indicates whether participants can take the survey without revealing their name or other identifying information (true) or not (false). | Required | 56.0 |
| communityId | String | The ID of the Experience Cloud site related to the survey. | Optional | 56.0 |
| invitation​ExpirationDate | String | The date when the survey invitation expires. | Optional | 56.0 |
| invitationOwner | String | The ID of the survey invitation's owner. The default value is the ID of the user running the API request. | Optional | 56.0 |
| recipientId | String | The ID of the survey recipient. | Optional | 56.0 |
