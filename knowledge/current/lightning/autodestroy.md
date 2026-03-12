---
title: "autoDestroy()"
domain: lightning
topic: autodestroy
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.659Z
estimatedTokens: 127
keywords: [autoDestroy, flag, tell, rendering, service, whether, destroy, component, removed, facet]
---

# autoDestroy()

> Sets a flag to tell the rendering service whether or not to destroy
   this component when it is removed from its rendering facet.

# autoDestroy()

Sets a flag to tell the rendering service whether or not to destroy this component when it is removed from its rendering facet.

## Signature

autoDestroy(Boolean destroy)

## Parameters

destroy

Type: Boolean

Default is true, which marks the component to be destroyed when it’s orphaned. Set to false to keep a reference to a component after it has been unrendered or removed from a parent facet. We don't recommend setting the value to false. If you do, be careful to avoid memory leaks.
