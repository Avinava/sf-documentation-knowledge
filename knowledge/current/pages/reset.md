---
title: "reset()"
domain: pages
topic: reset
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.548Z
estimatedTokens: 106
keywords: [reset, Forces, controller, reacquire, access, newly, referenced, Any, changes, made, record, prior, call, discarded, Usage]
---

# reset()

> Forces the controller to reacquire access to newly referenced
fields. Any changes made to the record prior to this method call are
discarded.

# reset()

Forces the controller to reacquire access to newly referenced fields. Any changes made to the record prior to this method call are discarded.

## Signature

public Void reset()

## Return Value

Type: Void

## Usage

This method is only used if addFields is called outside the constructor, and it must be called directly before addFields.

This method is only for controllers used by dynamicVisualforce bindings.
