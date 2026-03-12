---
title: "Use Apex in Lightning Web Components While Online"
domain: mobile-offline
topic: use-apex-in-lightning-web-components-while-online
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:56.397Z
estimatedTokens: 332
keywords: [Apex, Lightning, Web, Components, Online, essentials, described, Call, Developer, features, behave, documented, client, device, there]
---

# Use Apex in Lightning Web Components While Online

> The essentials of using Apex within Lightning web components are described in "Call Apex
  Methods" in the Lightning Web Components Developer Guide. While Apex features behave as
  documented when a client device is online, there are additional features available within an
  offline-enabled mobile app.

# Use Apex in Lightning Web Components While Online

The essentials of using Apex within Lightning web components are described in "Call Apex Methods" in the *Lightning Web Components Developer Guide*. While Apex features behave as documented when a client device is online, there are additional features available within an offline-enabled mobile app.

To take advantage of these features, you need to know the basics of using Apex within Lightning web components. In particular, there are two different ways of calling an Apex method from a Lightning web component.

-   **[Reactive Apex Wires](atlas.en-us.mobile_offline.meta/mobile_offline/apex_reactive_wire.htm)**
    Reading data via a wire adapter is the “natural” way to access data in Lightning web components. To add a read-only Apex method to a Lightning web component, first import the Apex method from the @salesforce/apex module, and then use the @wire annotation to connect that method to a property or function in your component.
-   **[Imperative Apex](atlas.en-us.mobile_offline.meta/mobile_offline/apex_imperative.htm)**
    Imperative Apex is the more traditional way to call an Apex method, as a network-based API call. Imperative Apex allows you to control exactly when the method is called. You’re in control of the invocation, rather than the framework.

## Related Topics

- Reactive Apex Wires (atlas.en-us.mobile_offline.meta/mobile_offline/apex_reactive_wire.htm)
- Imperative Apex (atlas.en-us.mobile_offline.meta/mobile_offline/apex_imperative.htm)
