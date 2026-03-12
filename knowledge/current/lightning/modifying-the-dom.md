---
title: "Modifying the DOM"
domain: lightning
topic: modifying-the-dom
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:49.140Z
estimatedTokens: 281
keywords: [Modifying, DOM, Document, Model, language-independent, representing, interacting, objects, HTML, XML, documents, It’s, know, how, modify]
---

# Modifying the DOM

> The Document Object Model (DOM) is the language-independent model for representing and
    interacting with objects in HTML and XML documents. It’s important to know how to modify the DOM
    safely so that the framework’s rendering service doesn’t stomp on your changes and give you
    unexpected results.

# Modifying the DOM

The Document Object Model (DOM) is the language-independent model for representing and interacting with objects in HTML and XML documents. It’s important to know how to modify the DOM safely so that the framework’s rendering service doesn’t stomp on your changes and give you unexpected results.

-   **[Modifying DOM Elements Managed by](atlas.en-us.lightning.meta/lightning/js_dom_modify_framework.htm)**
    The framework creates and manages the DOM elements owned by a component. If you want to modify these DOM elements created by the framework, modify the DOM elements in the handler for the component’s render event or in a custom renderer. Otherwise, the framework will override your changes when the component is rerendered.
-   **[Modifying DOM Elements Managed by External Libraries](atlas.en-us.lightning.meta/lightning/js_dom_modify_external.htm)**
    You can use different libraries, such as a charting library, to create and manage DOM elements. You don’t have to modify these DOM elements within the render event handler or a renderer because they are managed by the external library.

## Related Topics

- Modifying DOM Elements Managed by (atlas.en-us.lightning.meta/lightning/js_dom_modify_framework.htm)
- Modifying DOM Elements Managed by External Libraries (atlas.en-us.lightning.meta/lightning/js_dom_modify_external.htm)
