---
title: "Route a Voice Call"
domain: voice-developer-guide
topic: route-a-voice-call
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:21.833Z
estimatedTokens: 707
keywords: [Route, Voice, Call, Routes, rep, agent, queue, flow, Omni-Channel, Unified, Routing, enabled, URI, HTTP]
---

# Route a Voice Call

> Routes a voice call to a rep, agent, queue, or flow if Omni-Channel Unified Routing is
  enabled.

# Route a Voice Call

Routes a voice call to a rep, agent, queue, or flow if Omni-Channel Unified Routing is enabled.

Use this API to route a voice call or transfer a voice call with Omni-Channel to a rep or agent, queue, or Omni-Channel flow. When a rep selects a transfer target in Omni-Channel, this API passes the call ID (Salesforce VoiceCallId or telephony vendor ContactId) as a parameter. Unlike the [Execute an Omni-Channel Flow API](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_rest_omniflow_execute.htm "Executes the Omni-Channel flow to route voice calls. It passes the call ID (Salesforce VoiceCallId or telephony vendor ContactId) as parameters to the flow and returns the rep or queue routing instructions to the contact flow. By default, Service Cloud Voice uses the Omni-Channel flow (or fallback queue) specified for the phone channel that matches the dialed number. If the dialed number doesn’t match an existing phone channel, you can optionally set a new dialed number, Omni-Channel flow, and fallback queue as input parameters to this API call."), this API provides a single integration point for routing and transferring voice calls with Unified Routing.

The Route a Voice Call API returns only the routing request status of success or failure. Use this API to instruct Omni Channel to route the voice call to a specific target, and don’t depend on the response.

This API is processed if the call belongs to a contact center that has Unified Routing with Omni-Channel enabled.

## URI

/telephony/v1/voiceCalls/{CALL ID}/routeVoiceCall

Where {CALL ID} is the Salesforce voiceCallId or the telephony vendor’s contact ID.

## HTTP Method

POST

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
| routingTarget | string | Specifies the Omni-Channel routing target as a Salesforce agent ID, queue ID, or Omni-Channel flow ID. | Yes |
| fallbackQueue | string | Specifies the fallback queue by its Salesforce queue ID. Used if routing to a flow fails. | No |
| flowInputParameters | string | Specifies more inputs to the Omni-Channel flow, if routingTarget is a flow. | No |

## Example

Request:

```

```

Response:

The API returns the routing status only. The Omni Channel routing engine routes the call to a specific user, queue, or flow.

```

```

## Code Examples

```
POST /telephony/v1/voiceCalls/89328b83-ff42-4c85-a2af-e948124365de/routeVoiceCall

{
  "routingTarget": "300SG000015iJ38YAE",
  "fallbackQueue": "00G111222333444",
  "flowInputParameters": {
      "Input1": "one",
      "Input2": "two"
  }
}
```

```
{
  "status": "Success"
}
```

## Related Topics

- Execute an Omni-Channel Flow
     API (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_rest_omniflow_execute.htm)
