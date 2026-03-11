---
title: "Engagement Interaction Output"
domain: omnistudio
topic: engagement-interaction-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:09.411Z
keywords: [Engagement, Interaction, Output]
---

# Engagement Interaction Output

# Engagement Interaction Output

Output representation to fetch an engagement interaction record.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| attendeeAuthenticated | Boolean | Checks if the initiating attendee is authenticated. | Small, 55.0 | 55.0 |
| attendeeVerificationTime | String | The attendee verification time. | Small, 55.0 | 55.0 |
| attendeeVerified | Boolean | Checks if the initiating attendee is verified. | Small, 55.0 | 55.0 |
| communicationChannel | String | The communication channel for an engagement interaction. | Small, 55.0 | 55.0 |
| contextId | String | The context ID for an engagement interaction. | Small, 55.0 | 55.0 |
| customFields | Engagement Custom Fields Output | The list of custom fields. | Small, 56.0 | 56.0 |
| duration | String | The duration of an engagement interaction. | Small, 55.0 | 55.0 |
| endDateTime | String | The end date and time of an engagement interaction. | Small, 55.0 | 55.0 |
| engagementAttendees | Engagement Attendee Details Output[] | The engagement attendee details. | Small, 55.0 | 55.0 |
| engagementTopics | Engagement Topic Output[] | The engagement topic details. | Small, 55.0 | 55.0 |
| externalIdentifierId | String | The external identifier ID of an engagement interaction. | Small, 55.0 | 55.0 |
| id | String | The engagement interaction ID. | Small, 55.0 | 55.0 |
| initiatingAttendeeId | String | The initiating attendee ID. | Small, 55.0 | 55.0 |
| mappedState | String | The mapped state for an engagement interaction. | Small, 55.0 | 55.0 |
| ownerId | String | The owner ID of an engagement interaction. | Small, 55.0 | 55.0 |
| phoneNumber | String | The phone number of the caller.NoteThe phone number is used to get the context of the previous engagement. | Small, 57.0 | 57.0 |
| reason | String | The reason of the engagement interaction. | Small, 55.0 | 55.0 |
| sentiment | String | The sentiment of an initiating attendee. | Small, 55.0 | 55.0 |
| startDateTime | String | The start date and time of an engagement interaction. | Small, 55.0 | 55.0 |
| status | String | The status of an engagement interaction. | Small, 55.0 | 55.0 |
| type | String | The type of an engagement interaction. | Small, 55.0 | 55.0 |