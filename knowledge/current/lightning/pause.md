---
title: "pause()"
domain: lightning
topic: pause
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.785Z
estimatedTokens: 84
keywords: [pause, Pauses, event, handlers, aren’t, processed, until, Event.resume, handling, process, current, position, handler, processing, sequence]
---

# pause()

> Pauses an event. Event handlers aren’t processed until Event.resume() is called. The handling process pauses in the
   current position of the event handler processing sequence. If the event is already paused, this
   method does nothing. This method throws an error if it’s called in the "default" phase.

# pause()

Pauses an event. Event handlers aren’t processed until Event.resume() is called. The handling process pauses in the current position of the event handler processing sequence. If the event is already paused, this method does nothing. This method throws an error if it’s called in the "default" phase.

## Signature

pause()
