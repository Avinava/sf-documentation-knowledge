---
title: "ConnectApi.EngagementInteractionDetailsOutput"
domain: omnistudio
topic: connectapiengagementinteractiondetailsoutput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:07.834Z
keywords: [ConnectApi.EngagementInteractionDetailsOutput]
---

# ConnectApi.EngagementInteractionDetailsOutput

# ConnectApi.EngagementInteractionDetailsOutput

Output representation to fetch an engagement interaction record.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| attendeeAuthenticated | Boolean | Checks if the initiating attendee is authenticated. | 55.0 |
| attendeeVerificationTime | String | The attendee verification time. | 55.0 |
| attendeeVerified | Boolean | Checks if the initiating attendee is verified. | 55.0 |
| communicationChannel | String | The communication channel for an engagement interaction. | 55.0 |
| contextId | String | The context ID for an engagement interaction. | 55.0 |
| customFields | List<ConnectApi.EngagementCustomFieldsOutput> | The list of custom fields. | 56.0 |
| duration | String | The duration of an engagement interaction. | 55.0 |
| endDateTime | String | The end date and time of an engagement interaction. | 55.0 |
| engagementAttendees | List<ConnectApi.EngagementAttendeeDetailsOutput> | The engagement attendee details. | 55.0 |
| engagementTopics | List<ConnectApi.EngagementTopicOutput> | The engagement topic details. | 55.0 |
| externalIdentifierId | String | The external identifier ID of an engagement interaction. | 55.0 |
| id | String | The engagement interaction ID. | 55.0 |
| initiatingAttendeeId | String | The initiating attendee ID. | 55.0 |
| mappedState | String | The mapped state for an engagement interaction. | 55.0 |
| ownerId | String | The owner ID of an engagement interaction. | 55.0 |
| phoneNumber | String | The phone number of the caller who initiates an engagement interaction.NoteThe phone number is used to get the context of the previous engagement. | 57.0 |
| reason | String | The reason of the EngagementInteraction. | 56.0 |
| sentiment | String | The sentiment of an initiating attendee. | 55.0 |
| startDateTime | String | The start date and time of an engagement interaction. | 55.0 |
| status | String | The status of an engagement interaction. | 55.0 |
| type | String | The type of an engagement interaction. | 55.0 |