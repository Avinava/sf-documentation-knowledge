---
title: "ConnectApi.EngagementInteractionCreateInput"
domain: psc-api
topic: connectapiengagementinteractioncreateinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:29.610Z
estimatedTokens: 849
keywords: [Input, representation, engagement, interaction, record]
---

# ConnectApi.EngagementInteractionCreateInput

> Input representation to create an engagement interaction
    record.

# ConnectApi.EngagementInteractionCreateInput

Input representation to create an engagement interaction record.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attendeeAuthenticated | Boolean | Indicates whether the initiating attendee of an engagement interaction was authenticated through interactive voice response (IVR) or Web channel (true) or not (false).The default value is false. | Optional | 55.0 |
| attendeeVerificationTime | String | The time when the attendee was verified for an engagement interaction. You can manually set this time. If isAttendeeVerified is set to true, then if you don’t manually set this time, it is set based on the current system date and time. | Optional | 55.0 |
| attendeeVerified | Boolean | Indicates whether the initiating attendee of an engagement interaction was verified (true) or not (false). | Required | 55.0 |
| communicationChannel | String | The communication channel through which an engagement interaction occurred. Possible values are:In PersonVideo CallVoice CallWeb ChatYou can set custom values. | Required | 55.0 |
| contextId | String | The ID of the record that’s considered as the context for an engagement interaction. For example, when a customer initiates an engagement interaction by booking a service appointment for an inquiry, the service appointment is the context for that engagement interaction. | Optional | 55.0 |
| customFieldsList | List<ConnectApi.EngagementCustomFieldsInput> | The custom fields and their values for engagement interactions. | Optional | 56.0 |
| endDateTime | String | The date and time when an engagement interaction ended. | Optional | 55.0 |
| engagementAttendees | List<ConnectApi.EngagementAttendeeCreateInput> | Create engagement attendee records. |  | 55.0 |
| engagementTopics | List<ConnectApi.EngagementTopicCreateInput> | Create engagement topic records. |  | 55.0 |
| externalIdentifierId | String | The unique external identifier of an engagement interaction. | Optional | 55.0 |
| id | String | The ID of an engagement interaction. | Required | 55.0 |
| initiatingAttendeeId | String | The attendee who has initiated the engagement interaction. | Optional | 55.0 |
| mappedState | String | The state of an engagement interaction that changes when the status of the interaction gets updated. Possible values are:CompletedIn ProgressNewThe default value is New. | Optional | 55.0 |
| phoneNumber | String | The phone number of the caller who initiates an engagement interaction.NoteThe phone number is used to get the context of the previous engagement. | Optional | 57.0 |
| reason | String | The reason for an engagement as stated by a customer during the engagement interaction. | Optional | 56.0 |
| sentiment | String | The sentiment of an engagement interaction attendee about the engagement interaction. Possible values are:NegativeNeutralPositiveYou can set custom values. | Optional | 55.0 |
| startDateTime | String | The date and time when an engagement interaction started. | Required | 55.0 |
| status | String | The current status of an engagement interaction, which also impacts the interaction state. | Optional | 55.0 |
| type | String | The type of interaction that was initiated by the attendee. Possible values are:Inbound InteractionOutbound InteractionYou can set custom values. | Optional | 55.0 |

## Related Topics

- ConnectApi.EngagementCustomFieldsInput (atlas.en-us.psc_api.meta/psc_api/apex_connectapi_input_custom_fields.htm)
- ConnectApi.EngagementAttendeeCreateInput (atlas.en-us.psc_api.meta/psc_api/apex_connectapi_input_custom_fields.htm)
- ConnectApi.EngagementTopicCreateInput (atlas.en-us.psc_api.meta/psc_api/apex_connectapi_input_engagement_topic_create.htm)
