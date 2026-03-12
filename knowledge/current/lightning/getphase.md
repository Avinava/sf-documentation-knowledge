---
title: "getPhase()"
domain: lightning
topic: getphase
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.775Z
estimatedTokens: 88
keywords: [getPhase, current, phase, event, hasn’t, fired, yet, Possible, application, component, events, capture, bubble, once, it’s]
---

# getPhase()

> Returns the current phase of an event. Returns undefined if the event hasn’t been fired yet. Possible return
   values for application and component events are "capture", "bubble", and "default" once fired. A value event returns "default" once it’s fired.

# getPhase()

Returns the current phase of an event. Returns undefined if the event hasn’t been fired yet. Possible return values for application and component events are "capture", "bubble", and "default" once fired. A value event returns "default" once it’s fired.

## Signature

getPhase()

## Returns

Type: String

The current phase of the event.
