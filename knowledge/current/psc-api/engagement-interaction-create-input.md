---
title: "Engagement Interaction Create Input"
domain: psc-api
topic: engagement-interaction-create-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:30.030Z
estimatedTokens: 846
keywords: [Engagement, Interaction, Input, representation, record]
---

# Engagement Interaction Create Input

> Input representation to create an engagement interaction
    record.

# Engagement Interaction Create Input

Input representation to create an engagement interaction record.

Root XML tag

<engagementInteraction>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attendeeAuthenticated | Boolean | Indicates whether the initiating attendee of an engagement interaction was authenticated through interactive voice response (IVR) or Web channel (true) or not (false).The default value is false. | Optional | 55.0 |
| attendeeVerificationTime | String | The time when the attendee was verified for an engagement interaction. You can manually set this time. If isAttendeeVerified is set to true, then if you don’t manually set this time, it is set based on the current system date and time. | Optional | 55.0 |
| attendeeVerified | Boolean | Indicates whether the initiating attendee of an engagement interaction was verified (true) or not (false). | Required | 55.0 |
| communicationChannel | String | The communication channel through which an engagement interaction occurred. Possible values are:In-PersonVideo CallVoice CallWeb ChatYou can set custom values. | Required | 55.0 |
| contextId | String | The ID of the record that’s considered as the context for an engagement interaction. For example, when a customer initiates an engagement interaction by booking a service appointment for an inquiry, the service appointment is the context for that engagement interaction. | Optional | 55.0 |
| customFieldsList | Engagement Custom Fields Input[] | The custom fields and their values for engagement interactions. | Optional | 56.0 |
| endDateTime | String | The date and time when an engagement interaction ended. | Optional | 55.0 |
| engagementAttendees | Engagement Attendee Create Input[] | Create engagement attendee records. | Optional | 55.0 |
| engagementTopics | Engagement Topic Create Input[] | Create engagement topic records. | Optional | 55.0 |
| externalIdentifierId | String | The unique external identifier of an engagement interaction. | Optional | 55.0 |
| id | String | The ID of an engagement interaction. | Required | 55.0 |
| initiatingAttendeeId | String | The attendee who has initiated the engagement interaction. | Optional | 55.0 |
| mappedState | String | The state of an engagement interaction that changes when the status of the interaction gets updated. Possible values are:CompletedIn ProgressNewThe default value is New. | Optional | 55.0 |
| phoneNumber | Phone | The phone number of the caller which is used to determine the context during a subsequent call. | Optional | 57.0 |
| reason | String | The reason for an engagement as stated by a customer during the engagement interaction. | Optional | 55.0 |
| sentiment | String | The sentiment of an engagement interaction attendee about the engagement interaction. Possible values are:NegativeNeutralPositiveYou can set custom values. | Optional | 55.0 |
| startDateTime | String | The date and time when an engagement interaction started. | Required | 55.0 |
| status | String | The current status of an engagement interaction, which also impacts the interaction state. | Optional | 55.0 |
| type | String | The type of interaction that was initiated by the attendee. Possible values are:Inbound InteractionOutbound InteractionYou can set custom values. | Optional | 55.0 |

## Code Examples

```
{
  "engagementInteraction": {
    "initiatingAttendeeId": "testattendeeid",
    "attendeeAuthenticated": true,
    "attendeeVerified": true,
    "startDateTime": "2022-04-17T12:00:00.000Z",
    "endDateTime": "2022-04-17T12:04:00.000Z",
    "communicationChannel": "Voice Call",
    "sentiment": "Test",
    "contextId": "TestContextId",
    "externalIdentifierId": "external_identifier_id",
    "type": "Inbound",
    "mappedState": "New",
    "status": "New",
    "attendeeVerificationTime": "2022-04-17T12:02:00.000Z",
    "reason": "Unknown Charges",
    "phoneNumber": "9999999999",
    "customFieldsList": [
      {
        "key": "sampleLocation__c",
        "value": {
          "latitude": 12,
          "longitude": 17
        }
      },
      {
        "key": "sampleCheckbox__c",
        "value": "true"
      },
      {
        "key": "sampleDate__c",
        "value": "06/17/2022"
      },
      {
        "key": "sampleDateTime__c",
        "value": "2022-04-17T12:00:00.000Z"
      },
      {
        "key": "sampleEmail__c",
        "value": "sample@email.com"
      },
      {
        "key": "samplePercentage__c",
        "value": 17
      },
      {
        "key": "samplePicklist__c",
        "value": "pick1"
      }
    ]
  }
}
```

## Related Topics

- Engagement Custom Fields
                                            Input (atlas.en-us.psc_api.meta/psc_api/connect_requests_custom_fields_input.htm)
- Engagement Attendee Create Input (atlas.en-us.psc_api.meta/psc_api/connect_requests_engagement_attendee_create_input.htm)
- Engagement Topic Create Input (atlas.en-us.psc_api.meta/psc_api/connect_requests_engagement_topic_create_input.htm)
