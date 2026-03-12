---
title: "Connectors Call List Input"
domain: chatterapi
topic: connectors-call-list-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.391Z
estimatedTokens: 82
keywords: [Connectors, Call, Input, voice, calls, recording]
---

# Connectors Call List Input

> List of voice calls and recording properties.

# Connectors Call List Input

List of voice calls and recording properties.

Root XML tag

<calls>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| calls | Connectors Call Input[] | List of up to 200 voice calls. | Required | 49.0 |

## Code Examples

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
