---
title: "Get Transcript from Conversation Action"
domain: health-cloud-object-reference
topic: get-transcript-from-conversation-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:32.129Z
estimatedTokens: 283
keywords: [Transcript, Conversation, Action, record, voice, call, messaging, session, chat, Special, Access, Rules, REST, HTTP, Inputs]
---

# Get Transcript from Conversation Action

> Gets the transcript for a specified conversation record such as
            voice call, messaging session, or chat transcript.

# Get Transcript from Conversation Action

Gets the transcript for a specified conversation record such as voice call, messaging session, or chat transcript.

This action is available in API version 64.0 and later.

## Special Access Rules

The Get Transcript from Conversation action is available in Home Health and Service Voice.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/custom/getTranscriptForConversation

Formats

JSON, XML

HTTP Methods

GET

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| conversationRecordId | TypeStringDescriptionRequiredThe ID of the voice call, messaging session, or chat transcript to get the conversation transcript for. |

## Outputs

| Output | Details |
| --- | --- |
| conversationTranscript | TypeStringDescriptionThe conversation transcript that’s associated with the specified voice call, messaging session, or chat transcript record. |

## Example

GET

This sample request is for the Get Transcript from Conversation action.

```

```

This sample response is for the Get Transcript from Conversation action.

```

```

## Code Examples

```
[
  {
    "inputParameters": {
      "conversationRecordId": "003XXXXXXXXXXXXXXX"
    }
  }
]
```

```
{
  "isSuccess": true,
  "outputValues": {
    "conversationTranscript": "Agent: Hello, how can I help you? <br>Customer: I need help with my quotes. <br>"
  },
  "errors": []
}
```
