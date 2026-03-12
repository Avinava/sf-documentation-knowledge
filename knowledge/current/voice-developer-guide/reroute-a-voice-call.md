---
title: "Reroute a Voice Call"
domain: voice-developer-guide
topic: reroute-a-voice-call
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:21.828Z
estimatedTokens: 336
keywords: [Reroute, Voice, Call, Reroutes, Omni-Channel, Unified, Routing, enabled, URI, HTTP]
---

# Reroute a Voice Call

> Reroutes a voice call through Omni-Channel if Unified Routing with Omni-Channel is
    enabled.

# Reroute a Voice Call

Reroutes a voice call through Omni-Channel if Unified Routing with Omni-Channel is enabled.

Use this API to reroute a voice call with Omni-Channel if routing has failed initially. For example, routing may fail if an assigned rep isn’t part of the Amazon Connect routing queue or Amazon Connect isn’t able to start a WebRTC connection with a rep’s browser. This API closes any agentWork that is already accepted and reroutes the call to a different rep. The Reroute a Voice Call API will only be processed if the call belongs to a contact center which has Unified Routing with Omni-Channel enabled.

## URI

/telephony/v1/voiceCalls/{CALL ID}/reroute

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

None

## Example

Request:

```

```

Response:

```

```

## Code Examples

```
POST /telephony/v1/voiceCalls/89328b83-ff42-4c85-a2af-e948124365de/reroute
```

```
{"status": "Success"}
```
