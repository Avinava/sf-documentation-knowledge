---
title: "PushNotification(payload)"
domain: pushImplGuide
topic: pushnotificationpayload
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:35.561Z
estimatedTokens: 91
keywords: [PushNotification, payload, Creates, new, instance, Messaging.PushNotification, key-value, pairs, don’t, call, setPayload]
---

# PushNotification(payload)

> Creates a new instance of the Messaging.PushNotification class using
the specified payload parameters as key-value pairs. When you use
this constructor, you don’t need to call setPayload to set the payload.

# PushNotification(payload)

Creates a new instance of the Messaging.PushNotification class using the specified payload parameters as key-value pairs. When you use this constructor, you don’t need to call setPayload to set the payload.

## Signature

```

```

## Parameters

payload

Type:Map<String, Object>

The payload, expressed as a map of key-value pairs.

## Code Examples

```apex
public PushNotification(Map<String,Object> payload)
```
