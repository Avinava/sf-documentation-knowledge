---
title: "Reactive Apex Wires"
domain: mobile-offline
topic: reactive-apex-wires
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:56.389Z
estimatedTokens: 623
keywords: [Reactive, Apex, Wires, Reading, data, via, wire, adapter, “natural”, way, access, Lightning, web, components, add]
---

# Reactive Apex Wires

> Reading data via a wire adapter is the “natural” way to access data in Lightning web
  components. To add a read-only Apex method to a Lightning web component, first import the Apex
  method from the @salesforce/apex module, and then use the 
  @wire annotation to connect that method to a property or
  function in your component.

# Reactive Apex Wires

Reading data via a wire adapter is the “natural” way to access data in Lightning web components. To add a read-only Apex method to a Lightning web component, first import the Apex method from the @salesforce/apex module, and then use the @wire annotation to connect that method to a property or function in your component.

Read the details in [Wire Apex Methods to Lightning Web Components](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.apex_wire_method "HTML (New Window)") in the Lightning Web Components Developer Guide.

The important things to understand about this method of using Apex are:

-   @wire adapters are **read-only**.
-   When you use @wire adapters, **you** don’t call your Apex method directly. Instead, *the framework* decides when to call it, when it needs the value of the property or function connected to the @wire. This can happen more or less frequently than you expect.
-   Your Apex method **must not** make server-side changes when called by the @wire service.
-   The result of calling your Apex method is cached on the client. See important details in [Apex Results Are Separate from Other Primed Data](atlas.en-us.mobile_offline.meta/mobile_offline/apex_data_separate_cache.htm "Apex results are saved in the durable store separately from data stored by built-in components, modules, and wires that use Lightning Data Service (LDS) to access data.").

These points are standard behavior for Lightning web components. They aren’t specific to the additional mobile and offline features of an offline-enabled mobile app.

What *is* different is the cache. The mobile app saves the results of @wire calls to Apex methods in a durable store, instead of an in-memory cache. The durable store is longer-lived than the standard cache used by Lightning web components. The standard cache is designed for performance, rather than offline use. The durable store, in contrast, is designed *specifically* for offline use. It survives client app restarts, and even device restarts. Data in the durable store is available to provide a result for an Apex method call, even when offline. Again, see considerations in [Apex Results Are Separate from Other Primed Data](atlas.en-us.mobile_offline.meta/mobile_offline/apex_data_separate_cache.htm "Apex results are saved in the durable store separately from data stored by built-in components, modules, and wires that use Lightning Data Service (LDS) to access data.").

## Related Topics

- Apex Results Are Separate from Other Primed Data (atlas.en-us.mobile_offline.meta/mobile_offline/apex_data_separate_cache.htm)
