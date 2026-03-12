---
title: "@AuraEnabled Annotations for Continuations"
domain: lightning
topic: auraenabled-annotations-for-continuations
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:47.926Z
estimatedTokens: 622
keywords: [@AuraEnabled, Annotations, Continuations, annotation, Apex, code, rules, usage, Caching, Considerations]
---

# @AuraEnabled Annotations for Continuations

> Continuations use the @AuraEnabled annotation
  for Apex code. Here are the rules for usage.

# @AuraEnabled Annotations for Continuations

Continuations use the @AuraEnabled annotation for Apex code. Here are the rules for usage.

@AuraEnabled(continuation=true)

An Apex controller method that returns a continuation must be annotated with @AuraEnabled(continuation=true).

@AuraEnabled(continuation=true cacheable=true)

To cache the result of a continuation action, set cacheable=true on the annotation for the Apex callback method.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

There’s a space, **not a comma**, between continuation=true cacheable=true.

## Caching Considerations

It's best practice to set cacheable=true on all methods involved in the continuation chain, including the method that returns a Continuation object. The cacheable=true setting is available for API version 44.0 and higher. Before API version 44.0, to cache data returned from an Apex method, you had to call setStorable() in JavaScript code on every action that called the Apex method.

In this example, the Apex method that returns the continuation, startRequest(), and the callback, processResponse(), both contain cacheable=true in their @AuraEnabled annotation.

```

```

Here's a table that summarizes the behavior with different settings of the cacheable attribute in @AuraEnabled.

| Method Returning Continuation Object Annotated with cacheable=true | Callback Method Annotated with cacheable=true | Valid? | Action can use setStorable() in JavaScript? | Is Action Response Cached on Client? |
| --- | --- | --- | --- | --- |
| Yes | Yes | Yes | Yes | Yes |
| Yes | No | No (throws an exception) | N/A | N/A |
| No | Yes | Yes | No (all methods must have cacheable=true) | Yes |
| No | No | Yes | No (API version 44.0 and higher)Yes (43.0 and lower) | No (API version 44.0 and higher)Yes (43.0 and lower) |

#### See Also

-   [Make Long-Running Callouts with Continuations](atlas.en-us.lightning.meta/lightning/apex_continuations.htm "Use the Continuation class in Apex to make a long-running request to an external web service. Process the response in a callback method. Continuations are the preferred way to manage callouts because they can provide substantial improvements to the user experience.")

-   [AuraEnabled Annotation Annotation](atlas.en-us.lightning.meta/lightning/controllers_server_apex_auraenabled_annotation.htm "The AuraEnabled annotation enables Lightning components to access Apex methods and properties.")

## Code Examples

```apex
// Action method
@AuraEnabled(continuation=true cacheable=true)
public static Object startRequest() { }

// Callback method
@AuraEnabled(cacheable=true)
public static Object processResponse(List<String> labels,
  Object state) { }
```

## Related Topics

- Make Long-Running Callouts with Continuations (atlas.en-us.lightning.meta/lightning/apex_continuations.htm)
- AuraEnabled Annotation Annotation (atlas.en-us.lightning.meta/lightning/controllers_server_apex_auraenabled_annotation.htm)
