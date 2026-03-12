---
title: "find()"
domain: lightning
topic: find
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.666Z
estimatedTokens: 165
keywords: [Locates, component, local, aura]
---

# find()

> Locates a component using its local ID (aura:id).

# find()

Locates a component using its local ID (aura:id).

Returns different types depending on the result.

1.  If the local ID is unique, returns the component.
2.  If there are multiple components with the same local ID, returns an array of the components.
3.  If there is no matching local ID, returns undefined.

## Signature

find(String | Object name)

## Parameters

name

Type: String | Object

If name is an object, return instances of it. Otherwise, finds a component using its aura:id.

#### See Also

-   [Finding Components by ID](atlas.en-us.lightning.meta/lightning/js_cb_find_by_id.htm "Retrieve a component by its ID in JavaScript code.")

## Related Topics

- Finding Components by ID (atlas.en-us.lightning.meta/lightning/js_cb_find_by_id.htm)
