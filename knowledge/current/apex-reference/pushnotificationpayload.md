---
title: "PushNotification(payload)"
domain: apex-reference
topic: pushnotificationpayload
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:19.797Z
estimatedTokens: 162
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

Type:[Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), Object>

The payload, expressed as a map of key-value pairs.

## Code Examples

```apex
public PushNotification(Map<String,Object> payload)
```

## Related Topics

- Map (atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
