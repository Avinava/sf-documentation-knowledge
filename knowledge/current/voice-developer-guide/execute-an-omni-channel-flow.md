---
title: "Execute an Omni-Channel Flow"
domain: voice-developer-guide
topic: execute-an-omni-channel-flow
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:21.816Z
estimatedTokens: 672
keywords: [Execute, Omni-Channel, Flow, Executes, route, voice, calls, passes, call, Salesforce, VoiceCallId, telephony, vendor, ContactId, rep]
---

# Execute an Omni-Channel Flow

> Executes the Omni-Channel flow to route voice calls. It passes the
      call ID (Salesforce VoiceCallId or telephony vendor ContactId) as parameters to the flow and
      returns the rep or queue routing instructions to the contact flow. By default, Service Cloud
      Voice uses the Omni-Channel flow (or fallback queue) specified for the phone channel that
      matches the dialed number. If the dialed number doesn’t match an existing phone channel, you
      can optionally set a new dialed number, Omni-Channel flow, and fallback queue as input
      parameters to this API call.

# Execute an Omni-Channel Flow

Executes the Omni-Channel flow to route voice calls. It passes the call ID (Salesforce VoiceCallId or telephony vendor ContactId) as parameters to the flow and returns the rep or queue routing instructions to the contact flow. By default, Service Cloud Voice uses the Omni-Channel flow (or fallback queue) specified for the phone channel that matches the dialed number. If the dialed number doesn’t match an existing phone channel, you can optionally set a new dialed number, Omni-Channel flow, and fallback queue as input parameters to this API call.

## URI

/telephony/v1/voiceCalls/{CALL ID}/omniFlow

Where {CALL ID} is the Salesforce voiceCallId or the telephony vendor’s contact ID.

## HTTP Method

PATCH

## Headers

Authorization: Bearer <token>

String. Standard header. The authorization token, where <token> is the JSON Web Token (JWT). Required.

Content-Type: <format>

String. Standard header. The format of the request body. Valid formats include JSON and XML. For example, application/json or application/xml. Required.

Telephony-Provider-Name: <telephony provider name>

String. Custom header. The name of the telephony provider that calls this API. For example, Amazon Connect.

## Parameters

| Property Name | Type | Description | Required |
| --- | --- | --- | --- |
| dialedNumber | string | Set a new dialed number to account for a dialed number that doesn’t have a phone channel set up. Dialed number is the phone number called. | Yes |
| flowDevName | string | Set the Omni-Channel flow using its developer name. | No |
| fallbackQueue | string | Set the fallback queue using its Salesforce queue developer name or ID. | No |
| flowInputParameters | string | Set additional inputs to the Omni-Channel flow. | No |

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=voice_developer_guide)

#### Important

Service Cloud Voice uses this order of precedence to route voice calls.

1.  Uses the Omni-Channel Flow and Fallback Queue settings for the phone channel that matches the dialed number. The flow takes precedence. If the flow fails, the fallback queue is used.
2.  Uses the flowDevName and fallbackQueue parameters specified in the Execute Omniflow API call.

If none of this criteria is satisfied or the admin doesn’t map the Salesforce and telephony queues, the call fails.

## Example

Request:

```

```

Response without errors:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=voice_developer_guide)

#### Note

AGENT\_INFO and QUEUE\_INFO correspond to the ExternalId field in the CallCenterRoutingMap

Response with errors:

```

```

## Code Examples

```
PATCH /telephony/v1/voiceCalls/0LQRM0000006CSz/omniFlow
{
    "dialedNumber": "+18445791189"
    "flowDevName": "Route_VoiceCall",
    "fallbackQueue": "00G111222333444",
    "flowInputParameters": {
        "Input1": "one",
        "Input2": "two"
    }
}
```

```
{
  "agent": "[AGENT_INFO]",
  "queue": "[QUEUE_INFO]"}
```

```
{
  "errors": ["error1", "error2"]
}
```
