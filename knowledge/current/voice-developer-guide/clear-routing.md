---
title: "Clear Routing"
domain: voice-developer-guide
topic: clear-routing
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:21.805Z
estimatedTokens: 330
keywords: [Clear, Routing, Deletes, PendingServiceRouting, PSR, record, voice, call, API, doesn’t, scenarios, automatically, deleted, longer, routed]
---

# Clear Routing

> Deletes the PendingServiceRouting (PSR) record for a voice call. This
      API doesn’t need to be called for most scenarios; the PSR record is automatically deleted when
      the call is no longer being routed. However, there are some scenarios, like for missed or
      abandoned calls when using partner telephony systems (excluding Amazon Connect), where you
      must explicitly call this API to clear the PSR record.

# Clear Routing

Deletes the PendingServiceRouting (PSR) record for a voice call. This API doesn’t need to be called for most scenarios; the PSR record is automatically deleted when the call is no longer being routed. However, there are some scenarios, like for missed or abandoned calls when using partner telephony systems (excluding Amazon Connect), where you must explicitly call this API to clear the PSR record.

## URI

/telephony/v1/voiceCalls/{CALL ID}/clearRouting

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

None.

#### See Also

-   [*Salesforce Help:* The Routing Lifecycle](https://help.salesforce.com/s/articleView?id=service.omnichannel_psr_lifecycle.htm&type=5&language=en_US "Salesforce Help: The Routing Lifecycle - HTML (New Window)")
