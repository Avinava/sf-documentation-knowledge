---
title: "clearReference()"
domain: lightning
topic: clearreference
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.661Z
estimatedTokens: 100
keywords: [clearReference, Clears, live, passed, aura, later, want, reset, component.set, clear, resetting]
---

# clearReference()

> Clears a live reference for the value passed in using property
   syntax. For example, if you use aura:set to set a value and
   later want to reset the value using component.set(),
   clear the reference before resetting the value.

# clearReference()

Clears a live reference for the value passed in using property syntax. For example, if you use aura:set to set a value and later want to reset the value using component.set(), clear the reference before resetting the value.

## Signature

clearReference(String key)

## Parameters

key

Type: String

The data key for which to clear the reference. For example, "v.attributeName".
