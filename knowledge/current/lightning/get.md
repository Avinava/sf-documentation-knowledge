---
title: "get()"
domain: lightning
topic: get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.668Z
estimatedTokens: 60
keywords: [referenced, cmp.get, v.attr, attr, attribute, provider]
---

# get()

> Returns a value from the specified global value provider using
   property syntax.

# get()

Returns a value from the specified global value provider using property syntax.

## Signature

get (String key, function callback)

## Parameters

key

Type: String

The data key to look up. For example, "$Label.c.labelName" for a custom label.

callback

Type: function

The method to call with the result if a server trip occurs.

## Returns

Type: String

The requested value.

#### See Also

-   [set()](atlas.en-us.lightning.meta/lightning/ref_jsapi_component_set.htm "Sets the value referenced using property syntax.")

## Related Topics

- set() (atlas.en-us.lightning.meta/lightning/ref_jsapi_component_set.htm)
