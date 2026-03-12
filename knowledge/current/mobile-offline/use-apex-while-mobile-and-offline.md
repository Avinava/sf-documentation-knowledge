---
title: "Use Apex While Mobile and Offline"
domain: mobile-offline
topic: use-apex-while-mobile-and-offline
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:56.371Z
estimatedTokens: 935
keywords: [Apex, Mobile, Offline, Apex-backed, wire, adapters, imperative, Lightning, web, components, call, org]
---

# Use Apex While Mobile and Offline

> Use Apex-backed wire adapters and imperative Apex in your Lightning web components to
  call Apex methods in your org.

# Use Apex While Mobile and Offline

Use Apex-backed wire adapters and imperative Apex in your Lightning web components to call Apex methods in your org.

When you use Apex in an LWC Offline-enabled mobile app, there are considerations to keep in mind so that you make efficient use of network resources, data caching, and handle offline behavior correctly.

First, when the client device is online, Apex-based features of Lightning web components, including Apex continuations, “just work.” You can use all of the features as documented in [Call Apex Methods](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.apex "HTML (New Window)") in the Lightning Web Components Developer Guide.

When a client device is offline, Apex-based features can **read** data that was cached while online, but changes (writing data) can’t be saved back to the server. Nor can a change via Apex methods be enqueued as a draft into the Offline Queue. A Lightning web component that uses Apex must be prepared to handle a network connection error as a normal response, for both reading and writing operations.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=mobile_offline)

#### Important

Before you make plans to reuse existing Apex custom code in your offline features, read important details about offline caching for Apex in [Apex Results Are Separate from Other Primed Data](atlas.en-us.mobile_offline.meta/mobile_offline/apex_data_separate_cache.htm "Apex results are saved in the durable store separately from data stored by built-in components, modules, and wires that use Lightning Data Service (LDS) to access data.").

-   **[Use Apex in Lightning Web Components While Online](atlas.en-us.mobile_offline.meta/mobile_offline/apex_use_while_online.htm)**
    The essentials of using Apex within Lightning web components are described in "Call Apex Methods" in the *Lightning Web Components Developer Guide*. While Apex features behave as documented when a client device is online, there are additional features available within an offline-enabled mobile app.
-   **[Enable Caching of Apex Results](atlas.en-us.mobile_offline.meta/mobile_offline/apex_enable_caching_of_results.htm)**
    To allow results of Apex calls to be saved for offline use, enable caching on Apex methods used in your offline-enabled mobile apps.
-   **[Apex Results Are Separate from Other Primed Data](atlas.en-us.mobile_offline.meta/mobile_offline/apex_data_separate_cache.htm)**
    Apex results are saved in the durable store **separately** from data stored by built-in components, modules, and wires that use Lightning Data Service (LDS) to access data.
-   **[Understand Apex Behavior While Offline](atlas.en-us.mobile_offline.meta/mobile_offline/apex_use_while_offline.htm)**
    Additional features that are built into offline-enabled apps allow the app, including Lightning web components and even Apex, to continue to function. Knowing these features, and their limitations, is critical to writing LWCs that function well, even without a connection to the Salesforce service.
-   **[Additional Considerations for Apex in an Offline-Enabled Mobile App](atlas.en-us.mobile_offline.meta/mobile_offline/apex_additional_considerations.htm)**
    The following differences in behavior compared to Apex run from a browser-based connection apply to Apex when used in Lightning web components in an offline-enabled mobile app.
-   **[Additional Documentation for Apex in Lightning Web Components](atlas.en-us.mobile_offline.meta/mobile_offline/apex_additional_documentation.htm)**
    Learn more about how to use Apex, including continuations, from Lightning web components documentation resources.

## Related Topics

- Apex Results Are Separate from Other Primed Data (atlas.en-us.mobile_offline.meta/mobile_offline/apex_data_separate_cache.htm)
- Use Apex in Lightning Web Components While Online (atlas.en-us.mobile_offline.meta/mobile_offline/apex_use_while_online.htm)
- Enable Caching of Apex Results (atlas.en-us.mobile_offline.meta/mobile_offline/apex_enable_caching_of_results.htm)
- Understand Apex Behavior While Offline (atlas.en-us.mobile_offline.meta/mobile_offline/apex_use_while_offline.htm)
- Additional Considerations for Apex in an Offline-Enabled Mobile App (atlas.en-us.mobile_offline.meta/mobile_offline/apex_additional_considerations.htm)
- Additional Documentation for Apex in Lightning Web Components (atlas.en-us.mobile_offline.meta/mobile_offline/apex_additional_documentation.htm)
