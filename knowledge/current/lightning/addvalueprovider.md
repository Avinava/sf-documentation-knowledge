---
title: "addValueProvider()"
domain: lightning
topic: addvalueprovider
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.657Z
estimatedTokens: 153
keywords: [addValueProvider, Adds, custom, providers, component]
---

# addValueProvider()

> Adds custom value providers to a component.

# addValueProvider()

Adds custom value providers to a component.

## Signature

addValueProvider(String key, Object valueProvider)

## Parameters

key

Type: String

Key to identify the value provider. Used in expressions in markup.

valueProvider

Type: Object

The object to request data from. Must implement get(expression), can implement set(key,value).

#### See Also

-   [Value Providers](atlas.en-us.lightning.meta/lightning/expr_source.htm "Value providers are a way to access data. Value providers encapsulate related values together, similar to how an object encapsulates properties and methods.")

## Related Topics

- Value Providers (atlas.en-us.lightning.meta/lightning/expr_source.htm)
