---
title: "Modifying DOM Elements Managed by External Libraries"
domain: lightning
topic: modifying-dom-elements-managed-by-external-libraries
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:49.143Z
estimatedTokens: 365
keywords: [Modifying, DOM, Elements, Managed, External, Libraries, different, charting, library, manage, don’t, modify, render, event, handler]
---

# Modifying DOM Elements Managed by External Libraries

> You can use different libraries, such as a charting library, to create and manage DOM
    elements. You don’t have to modify these DOM elements within the render event handler or a renderer because they are managed by the external
    library.

# Modifying DOM Elements Managed by External Libraries

You can use different libraries, such as a charting library, to create and manage DOM elements. You don’t have to modify these DOM elements within the render event handler or a renderer because they are managed by the external library.

A render event handler or a renderer are used only to customize DOM elements created and managed by the Aura Components programming model.

To use external libraries, use <ltng:require>. The afterScriptsLoaded attribute enables you to interact with the DOM after your libraries have loaded and the DOM is ready. <ltng:require> tag orchestrates the loading of your library of choice with the rendering cycle of the Aura Components programming model to ensure that everything works in concert.

#### See Also

-   [Using External JavaScript Libraries](atlas.en-us.lightning.meta/lightning/js_libs_platform.htm "To reference a JavaScript library, upload it as a static resource and use a <ltng:require> tag in your .cmp or .app markup.")

-   [Modifying DOM Elements Managed by](atlas.en-us.lightning.meta/lightning/js_dom_modify_framework.htm "The framework creates and manages the DOM elements owned by a component. If you want to modify these DOM elements created by the framework, modify the DOM elements in the handler for the component’s render event or in a custom renderer. Otherwise, the framework will override your changes when the component is rerendered.")

## Related Topics

- Using External JavaScript Libraries (atlas.en-us.lightning.meta/lightning/js_libs_platform.htm)
- Modifying DOM Elements Managed by (atlas.en-us.lightning.meta/lightning/js_dom_modify_framework.htm)
