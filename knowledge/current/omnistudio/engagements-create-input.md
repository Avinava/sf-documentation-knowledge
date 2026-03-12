---
title: "Engagements Create Input"
domain: omnistudio
topic: engagements-create-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:47.358Z
estimatedTokens: 97
keywords: [Engagements, Input, representation]
---

# Engagements Create Input

> Input representation of the engagements create
    request.

# Engagements Create Input

Input representation of the engagements create request.

Root XML tag

<engagementContainer>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| engagementInteraction | Engagement Interaction Create Input | Create an engagement interaction record. | Required | 55.0 |

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
