---
title: "Lightning Console JavaScript API"
domain: service-cloud
topic: lightning-console-javascript-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.670Z
estimatedTokens: 1375
keywords: [Lightning, Console, JavaScript, API, apps, allow, users, quickly, they, edits, viewing, multiple, records, screen, gives]
---

# Lightning Console JavaScript API

> Lightning console apps allow users to quickly find the information they need, and make
    edits while viewing multiple records on one screen. The Lightning Console JavaScript API gives
    you programmatic access to Lightning console apps, so you can fully integrate Lightning console
    apps with Aura components and Lightning web components while extending them to meet your
    business needs.

# Lightning Console JavaScript API

Lightning console apps allow users to quickly find the information they need, and make edits while viewing multiple records on one screen. The Lightning Console JavaScript API gives you programmatic access to Lightning console apps, so you can fully integrate Lightning console apps with Aura components and Lightning web components while extending them to meet your business needs.

| Available in: Lightning Experience |
| --- |
| Available in: Essentials, Professional, Enterprise, Performance, Unlimited, and Developer EditionsLightning console apps are available for an extra cost to users with Salesforce Platform user licenses for certain products. Some restrictions apply. For pricing details, contact your Salesforce account executive. |


The Lightning Console JavaScript API includes three libraries: the navigation item API, the utility bar API, and the workspace API.

-   The navigation item API provides methods that can be used from Aura components to interact with the console’s navigation menu. This API is used in Lightning console apps only.
-   The utility bar API provides methods that can be used from Aura components and Lightning web components in the utility bar to open, resize, or minimize a utility. This API is used in Lightning apps with standard or console navigation.
-   The workspace API provides methods for Aura components and Lightning web components for opening, closing, and getting information about workspace tabs and subtabs. This API is used in Lightning console apps only.

For a full list of methods in each API, see [Methods for](atlas.en-us.api_console.meta/api_console/sforce_api_console_methods_lightning.htm "If your org is using Lightning Experience, use Lightning Console JavaScript API methods.").

You can build Lightning components using two programming models: the Lightning Web Components model and Aura Components model. Although both models can coexist and interoperate on a page, we recommend that you build your apps with Lightning Web Components, which use HTML and modern JavaScript.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

Only the utility bar and workspace APIs are currently supported for Lightning web components.

-   **[Syntax Syntax](atlas.en-us.api_console.meta/api_console/sforce_api_console_js_lightning_syntax.htm)**
    Use Lightning Console JavaScript API methods in the JavaScript file of a Lightning web component or in the JavaScript controller of an Aura component.
-   **[Using Background Utility Items](atlas.en-us.api_console.meta/api_console/sforce_api_console_js_lightning_background_utility_item.htm)**
    Implement the lightning:backgroundUtilityItem interface to create a component that fires and responds to events without rendering in the utility bar.
-   **[Using Pop-Out Utilities](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_utility_popout.htm)**
    Utilities that support pop-out can be “popped out” of the utility bar and into their own separate child windows.
-   **[Using Events with the Lightning Console JavaScript API](atlas.en-us.api_console.meta/api_console/sforce_api_console_js_events.htm)**
    The Lightning framework uses event-driven programming, which allows you to create handlers to respond to interface events as they occur. The Lightning Console JavaScript API provides several events specific to Lightning console apps.
-   **[Use Page Context in the Utility Bar API](atlas.en-us.api_console.meta/api_console/sforce_api_console_js_lightning_utility_bar_page_context.htm)**
    In both Lightning console apps and standard navigation apps, utilities can respond to the context of the current page. For a Lightning web component, use the CurrentPageReference wire adapter. For an Aura component, specify implements="force:hasRecordId" to access the recordId of the record a user is viewing.
-   **[Using Page References to Open Console Workspace Tabs and Subtabs](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_open_pagereference.htm)**
    You can navigate to different page types, including a URL addressable custom component. To make a custom component URL addressable using LWC, use the lightning\_\_UrlAddressable target. To make an Aura component URL addressable, implement the lightning:isUrlAddressable interface on your custom component.
-   **[Debugging](atlas.en-us.api_console.meta/api_console/sforce_api_console_js_best_practices.htm)**
    Use your browser’s console and JavaScript error messages to debug Lightning pages built with the Lightning Console JavaScript API. Here are several recommendations on debugging your Lightning Console API code.
-   **[Methods for](atlas.en-us.api_console.meta/api_console/sforce_api_console_methods_lightning.htm)**
    If your org is using Lightning Experience, use Lightning Console JavaScript API methods.
-   **[Events for](atlas.en-us.api_console.meta/api_console/sforce_api_console_events_lightning.htm)**
    Use events and handlers in your Aura components and controllers to respond to events like workspace tabs opening, closing, or gaining focus. In Lightning web components, subscribe to Aura application events using their corresponding Lightning message channels.

#### See Also

-   [Methods for](atlas.en-us.api_console.meta/api_console/sforce_api_console_methods_lightning.htm "If your org is using Lightning Experience, use Lightning Console JavaScript API methods.")

## Related Topics

- Methods for (atlas.en-us.api_console.meta/api_console/sforce_api_console_methods_lightning.htm)
- Syntax Syntax (atlas.en-us.api_console.meta/api_console/sforce_api_console_js_lightning_syntax.htm)
- Using Background Utility Items (atlas.en-us.api_console.meta/api_console/sforce_api_console_js_lightning_background_utility_item.htm)
- Using Pop-Out Utilities (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_utility_popout.htm)
- Using Events with the Lightning Console JavaScript API (atlas.en-us.api_console.meta/api_console/sforce_api_console_js_events.htm)
- Use Page Context in the Utility Bar API (atlas.en-us.api_console.meta/api_console/sforce_api_console_js_lightning_utility_bar_page_context.htm)
- Using Page References to Open Console Workspace Tabs and Subtabs (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_open_pagereference.htm)
- Debugging (atlas.en-us.api_console.meta/api_console/sforce_api_console_js_best_practices.htm)
- Events for (atlas.en-us.api_console.meta/api_console/sforce_api_console_events_lightning.htm)
