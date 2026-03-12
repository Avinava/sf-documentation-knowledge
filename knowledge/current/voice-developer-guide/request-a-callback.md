---
title: "Request a Callback"
domain: voice-developer-guide
topic: request-a-callback
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:21.803Z
estimatedTokens: 332
keywords: [Callback, Creates, voice, call, Omni-Channel, Unified, Routing, enabled, URI, HTTP]
---

# Request a Callback

> Creates a callback request for a voice call if Omni-Channel Unified Routing is
  enabled.

# Request a Callback

Creates a callback request for a voice call if Omni-Channel Unified Routing is enabled.

Invoke this API to request a callback from Salesforce by creating a ContactRequest record and returning its recordId. The ContactRequest can then be routed through Omni-Channel Unified Routing in Salesforce.

The Request a Callback API will only be processed if the call belongs to a contact center which has Unified Routing with Omni-Channel enabled.

## URI

/telephony/v1/voiceCalls/{CALL ID}/requestCallback

Where {CALL ID} is the Salesforce voiceCallId or the telephony vendor’s contact ID.

## HTTP Method

POST

## Headers

Authorization: Bearer <token>

String. Standard header. The authorization token, where <token> is the JSON Web Token (JWT). Required.

Content-Type: <format>

String. Standard header. The format of the request body. Valid format is JSON. For example, application/json. Required.

Telephony-Provider-Name: <telephony provider name>

String. Custom header. The name of the telephony provider that calls this API. For example, Amazon Connect.

## Parameters

| Property Name | Type | Description | Required |
| --- | --- | --- | --- |
| callbackNumber | string | Set the number that the customer requested to be called back at. | Yes |

## Example

Request:

```

```

Response:

```

```

## Code Examples

```
POST /telephony/v1/voiceCalls/89328b83-ff42-4c85-a2af-e948124365de/requestCallback

{
  "callbackNumber": "+18445791189"
}
```

```
{
  "recordId": "0LQRM0000006CSz"
}
```
