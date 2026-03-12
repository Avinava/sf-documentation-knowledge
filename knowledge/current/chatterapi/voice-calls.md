---
title: "Voice Calls"
domain: chatterapi
topic: voice-calls
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:17.017Z
estimatedTokens: 151
keywords: [Voice, Calls, Post, metadata, new, recordings]
---

# Voice Calls

> Post metadata about new voice calls and recordings.

# Voice Calls

Post metadata about new voice calls and recordings.

Resource

```

```

Available version

49.0

HTTP methods

POST

Request body for POST

Root XML tag

<calls>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| calls | Connectors Call Input[] | List of up to 200 voice calls. | Required | 49.0 |

Response body for POST

[Connectors Voice Call List Result](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_connectors_voice_call_list_result.htm "List results of posting a voice call.")

## Code Examples

```
/voicecalls
```

```
{
   "calls":[ 
      { 
         "toPhoneNumber":"+16315122409",
         "fromPhoneNumber":"+15105024190",
         "userId":"005R0000000XTJD",
         "startDateTime":"2019-11-06T19:41:56.000Z",
         "endDateTime":"2019-11-06T19:41:56.000Z",
         "callType":"Outbound",
         "recordingDuration":"300",
         "externalId":"CAXXXXXYYYYY1",
         "recordingFormat":"mp3",
         "activityId":"00Txxxxxxxxxxxx",
         "recordId":"001xxxxxxxxxxxx",
         "mediaProviderId":"0hnxxxxxxxxxxxx",
         "vendorType":"Twilio"
      },
      { 
         "toPhoneNumber":"+16315122409",
         "fromPhoneNumber":"+15105024190",
         "userId":"005R0000000XTJD",
         "startDateTime":"2020-11-06T19:41:56.000Z",
         "endDateTime":"2020-11-06T19:41:56.000Z",
         "callType":"Inbound",
         "recordingDuration":"30",
         "externalId":"CAXXXXXYYYYY2",
         "recordingFormat":"mp3",
         "activityId":"00Txxxxxxxxxxxx",
         "recordId":"001xxxxxxxxxxxx",
         "mediaProviderId":"0hnxxxxxxxxxxxx",
         "vendorType":"AmazonConnect"
      }
 ]
}
```

## Related Topics

- Connectors Call Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_connectors_call_input.htm)
- Connectors Voice Call List Result (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_connectors_voice_call_list_result.htm)
