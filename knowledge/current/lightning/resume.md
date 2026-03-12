---
title: "resume()"
domain: lightning
topic: resume
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.788Z
estimatedTokens: 119
keywords: [resume, Resumes, event, handling, position, handler, processing, sequence, previously, paused, isn’t, nothing, throws, error, it’s]
---

# resume()

> Resumes event handling for this event from the same position in the
   event handler processing sequence from which it was previously paused. If the event isn’t paused,
   this method does nothing. This method throws an error if it’s called in the "default" phase. Any remaining event handlers might execute in
   the current call stack or might be deferred and executed in a new call stack. Therefore, the
   exact timing behavior is not predictable.

# resume()

Resumes event handling for this event from the same position in the event handler processing sequence from which it was previously paused. If the event isn’t paused, this method does nothing. This method throws an error if it’s called in the "default" phase. Any remaining event handlers might execute in the current call stack or might be deferred and executed in a new call stack. Therefore, the exact timing behavior is not predictable.

## Signature

resume()
