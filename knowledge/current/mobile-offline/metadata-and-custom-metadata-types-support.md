---
title: "Metadata and Custom Metadata Types Support"
domain: mobile-offline
topic: metadata-and-custom-metadata-types-support
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:56.430Z
estimatedTokens: 264
keywords: [Metadata, Custom, Support, LWC, Offline, uses, UI-API, access, standard]
---

# Metadata and Custom Metadata Types Support

> LWC Offline uses the UI-API to access standard metadata.

# Metadata and Custom Metadata Types Support

LWC Offline uses the UI-API to access standard metadata.

Metadata for entities, layouts and other customizations, and Lightning web components is automatically primed or loaded when used, and is cached for offline use. However, the UI-API doesn’t support loading custom metadata types. As a consequence, custom metadata isn’t primed or cached automatically. This affects features that use custom metadata, such as Flows.

If you must retrieve custom metadata, you can do that using Apex requests. If your Apex request methods are cacheable, the custom metadata you access is available while offline. See [Use Apex While Mobile and Offline](atlas.en-us.mobile_offline.meta/mobile_offline/apex.htm "Use Apex-backed wire adapters and imperative Apex in your Lightning web components to call Apex methods in your org.").

#### See Also

-   [*User Interface API Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.uiapi.meta/uiapi/ "User Interface API Developer Guide - HTML (New Window)")

## Related Topics

- Use Apex While Mobile and Offline (atlas.en-us.mobile_offline.meta/mobile_offline/apex.htm)
