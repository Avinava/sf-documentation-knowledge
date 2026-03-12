---
title: "Make Long-Running Callouts with Continuations"
domain: lightning
topic: make-long-running-callouts-with-continuations
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:47.909Z
estimatedTokens: 795
keywords: [Long-Running, Callouts, Continuations, Continuation, Apex, external, web, service, Process, callback, preferred, way, manage, because, they]
---

# Make Long-Running Callouts with Continuations

> Use the Continuation class in Apex to make a
    long-running request to an external web service. Process the response in a callback method.
    Continuations are the preferred way to manage callouts because they can provide substantial
    improvements to the user experience.

# Make Long-Running Callouts with Continuations

Use the Continuation class in Apex to make a long-running request to an external web service. Process the response in a callback method. Continuations are the preferred way to manage callouts because they can provide substantial improvements to the user experience.

Using continuations has some advantages, including the capability to make callouts in parallel.

The framework queues up actions before sending them to the server. This mechanism is largely transparent to you when you’re writing code but it enables the framework to minimize network traffic by batching multiple actions into one request (XHR). The batching of actions is also known as boxcar’ing, similar to a train that couples boxcars together. Since continuations can be long-running requests, the framework essentially treats continuations as background actions. Continuations aren't boxcar'ed with other requests so they don't block other actions while they are running.

An asynchronous callout made with a continuation doesn’t count toward the Apex limit of synchronous requests that last longer than five seconds. Since Winter ’20, all callouts are excluded from the long-running request limit so continuations no longer offer an advantage for working with limits compared to regular callouts. However, we recommend using continuations to manage callouts due to the improved user experience.

-   **[Work with a Continuation in an Apex Class](atlas.en-us.lightning.meta/lightning/apex_continuations_apex.htm)**
    To work with a continuation in an Apex class, use the Apex Continuation object.
-   **[@AuraEnabled Annotations for Continuations](atlas.en-us.lightning.meta/lightning/apex_continuations_auraenabled.htm)**
    Continuations use the @AuraEnabled annotation for Apex code. Here are the rules for usage.
-   **[Aura Component Continuations Example](atlas.en-us.lightning.meta/lightning/apex_continuations_aura_example.htm)**
    Here’s the markup for a component with a button that starts the process of calling a continuation.
-   **[Continuation-Specific Limits](atlas.en-us.lightning.meta/lightning/apex_continuations_limits.htm)**
    Because continuations can lead to multiple long-running actions, there are some limits on their usage.

#### See Also

-   [Queuing of Server-Side Actions](atlas.en-us.lightning.meta/lightning/controllers_server_actions_queue.htm "The framework queues up actions before sending them to the server. Actions are grouped together into batches, and then sent to the server together. This process enables the framework to reduce network traffic by batching multiple actions into fewer, more efficient requests.")

-   [*Apex Reference Guide*: Continuation Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_System_Continuation.htm "Apex Reference Guide: Continuation Class - HTML (New Window)")

-   [*Apex Developer Guide*: Named Credentials as Callout Endpoints](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_callouts_named_credentials.htm "Apex Developer Guide: Named Credentials as Callout Endpoints - HTML (New Window)")

## Related Topics

- Work with a Continuation in an Apex Class (atlas.en-us.lightning.meta/lightning/apex_continuations_apex.htm)
- @AuraEnabled Annotations for Continuations (atlas.en-us.lightning.meta/lightning/apex_continuations_auraenabled.htm)
- Aura Component Continuations Example (atlas.en-us.lightning.meta/lightning/apex_continuations_aura_example.htm)
- Continuation-Specific Limits (atlas.en-us.lightning.meta/lightning/apex_continuations_limits.htm)
- Queuing of Server-Side Actions (atlas.en-us.lightning.meta/lightning/controllers_server_actions_queue.htm)
