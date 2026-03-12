---
title: "Engagement Interactions (POST)"
domain: omnistudio
topic: engagement-interactions-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:49.040Z
estimatedTokens: 203
keywords: [Engagement, Interactions, POST, Create, engagement, interaction, attendee, topic, records.]
---

# Engagement Interactions (POST)

> Create engagement interaction, engagement attendee, and engagement
      topic records.

# Engagement Interactions (POST)

Create engagement interaction, engagement attendee, and engagement topic records.

Resource

```

```

Resource Example

```

```

Available version

55.0

Requires Chatter

No

HTTP methods

POST

Request body for POST

Root XML tag

<engagementContainer>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| engagementInteraction | Engagement Interaction Create Input | Create an engagement interaction record. | Required | 55.0 |

Response body for POST

[Engagement Interaction Create Output](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_engagement_interaction_create_output.htm "Output representation for creating an engagement interaction record.")

## Code Examples

```
/connect/service-excellence/engagement-interactions
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/service-excellence/engagement-interactions
```

```
{
  "engagementInteraction": {
    "initiatingAttendeeId": "testattendeeid",
    "attendeeAuthenticated": true,
    "attendeeVerified": true,
    "startDateTime": "2022-04-17T12:00:00.000Z",
    "endDateTime": "2022-04-17T12:04:00.000Z",
    "communicationChannel": "Voice Call",
    "sentiment": "Positive",
    "contextId": "testcontextid",
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
    ],
    "engagementAttendees": [
      {
        "startDateTime": "2022-04-17T12:00:00.000Z",
        "endDateTime": "2022-04-17T12:04:00.000Z",
        "externalAttendeeId": "testattendeeid",
        "internalAttendeeId": "INTERNAL_ATTENDEE_ID",
        "role": "Self",
        "verificationTime": "2022-04-17T12:02:00.000Z",
        "isAuthenticated": true,
        "isVerified": true,
        "customFieldsList": [
          {
            "key": "sampleCheckBox__c",
            "value": true
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
            "key": "sampleLocation__c",
            "value": {
              "latitude": 12,
              "longitude": 17
            }
          }
        ]
      }
    ],
    "engagementTopics": [
      {
        "topicId": "testtopicid",
        "relatedPersonId": "testrelatedpersonid",
        "name": "fee reversal",
        "parentTopicId": "testparenttopicid",
        "processName": "Card Fee Reversal",
        "processType": "Flow",
        "processStatus": "Completed",
        "interactionSummary": "Summary",
        "processFailureReason": "unknown",
        "customFieldsList": [
          {
            "key": "sampleCheckbox__c",
            "value": true
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
            "key": "sampleLocation__c",
            "value": {
              "latitude": 12,
              "longitude": 17
            }
          },
          {
            "key": "sampleNumber__c",
            "value": 1706
          },
          {
            "key": "samplePercentage__c",
            "value": 17
          },
          {
            "key": "samplePhoneNumber__c",
            "value": "1234567890"
          }
        ]
      }
    ]
  }
}
```

## Related Topics

- Engagement Interaction Create Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_engagement_interaction_create_input.htm)
- Engagement Interaction Create Output (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_engagement_interaction_create_output.htm)
