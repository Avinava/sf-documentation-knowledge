---
title: "Connectors Call Input"
domain: chatterapi
topic: connectors-call-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.387Z
estimatedTokens: 604
keywords: [Connectors, Call, Input, Voice, recording]
---

# Connectors Call Input

> Voice call and recording properties.

# Connectors Call Input

Voice call and recording properties.

Root XML tag

<call>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| activityId | String | ID of task logged. | Optional | 49.0 |
| callType | String | Type of call. Values are:InboundOutbound | Required | 49.0 |
| consented | Boolean | Specifies whether the caller for inbound calls or the recipient for outbound calls consented to recording (true) or not (false). | Optional | 49.0 |
| endDateTime | String | Call end time. | Required | 49.0 |
| externalId | String | External ID of call. | Required | 49.0 |
| fromPhoneNumber | String | Phone number that initiated the call. | Required | 49.0 |
| mediaProviderId | String | ID of media provider. | Required | 49.0 |
| numberChannels | Integer | Number of audio channels in call recording. | Optional | 49.0 |
| recordId | String | Salesforce account, case, contact, or lead ID. | Optional | 49.0 |
| recordingDuration | Integer | Duration of call recording in seconds. | Required | 49.0 |
| recordingFormat | String | Recording format. Values are:FlacMp3Wav | Required | 49.0 |
| sourceType | String | Specifies whether a call is related to a sales or service use case. Values are:SalesServiceValues are case-sensitive. If no value is provided, it is set to “Sales” by default. | Optional | 51.0 |
| startDateTime | String | Call start time. | Required | 49.0 |
| toPhoneNumber | String | Phone number that received the call. | Required | 49.0 |
| userChannel | Integer | Audio channel number for user's side of call recording. Value is 0 or 1, where 0 means left channel for dual channel recording. | Optional | 49.0 |
| userEmail | String | Salesforce user email address of the person who initiated or received the call. | Required if userId isn’t specified | 49.0 |
| userId | String | Salesforce user ID of the person who initiated or received the call. | Required if userEmail isn’t specified | 49.0 |
| vendorType | String | Specifies the call vendor. Values are:AmazonConnectCustomDialPadRingCentralTwilioTwilioTrialIf the vendor isn’t specified or is unknown, the default value is Custom. | Optional | 57.0 |

#### See Also

-   [Connectors Call List Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_connectors_call_input_list.htm "List of voice calls and recording properties.")

## Code Examples

```
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
   "sourceType":"Sales",
   "mediaProviderId":"0hnxxxxxxxxxxxx"
   "vendorType":"Twilio"

}
```

## Related Topics

- Connectors Call List Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_connectors_call_input_list.htm)
