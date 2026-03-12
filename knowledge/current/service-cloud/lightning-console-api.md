---
title: "Lightning Console API"
domain: service-cloud
topic: lightning-console-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.623Z
estimatedTokens: 771
keywords: [Lightning, Console, API, console, apps, allow, users, quickly, find, information, they, need, edits, while, viewing, multiple, records, screen., JavaScript, gives]
---

# Lightning Console API

> Lightning console apps allow users to quickly find the information they need, and make
    edits while viewing multiple records on one screen. The Lightning Console JavaScript API gives
    you programmatic access to Lightning console apps, so you can fully integrate Lightning console
    apps with Aura components and Lightning web components while extending them to meet your
    business needs.

# Lightning Console API

Lightning console apps allow users to quickly find the information they need, and make edits while viewing multiple records on one screen. The Lightning Console JavaScript API gives you programmatic access to Lightning console apps, so you can fully integrate Lightning console apps with Aura components and Lightning web components while extending them to meet your business needs.

| Available in: Lightning Experience |
| --- |
| Available in: Essentials, Professional, Enterprise, Performance, Unlimited, and Developer EditionsLightning console apps are available for an extra cost to users with Salesforce Platform user licenses for certain products. Some restrictions apply. For pricing details, contact your Salesforce account executive. |


The Lightning Console JavaScript API includes three libraries, the navigation item API, the utility bar API, and the workspace API.

-   The navigation item API provides methods that can be used from Aura components to interact with the console’s navigation menu. This API is used in Lightning console apps only.
-   The utility bar API provides methods that can be used from Aura components and Lightning web components in the utility bar to open, resize, or minimize a utility. This API is used in Lightning apps with standard or console navigation.
-   The workspace API provides methods for Aura components and Lightning web components for opening, closing, and getting information about workspace tabs and subtabs. This API is used in Lightning console apps only.

For a full list of methods in each API, see [Methods for Lightning Console JavaScript API](atlas.en-us.api_console.meta/api_console/sforce_api_console_methods_lightning.htm "If your org is using Lightning Experience, use Lightning Console JavaScript API methods.").

You can build Lightning components using two programming models: the Lightning Web Components model and Aura Components model. Although both models can coexist and interoperate on a page, we recommend that you build your apps with Lightning Web Components, which use HTML and modern JavaScript.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

Only the utility bar and workspace APIs are currently supported for Lightning web components.

-   **[How are the Classic and Lightning Console APIs Different?](atlas.en-us.api_console.meta/api_console/sforce_api_console_js_lightning_ui_matters.htm)**
    The user interface of your org dictates which development tools you can use with the Salesforce console.
-   **[Lightning Console JavaScript API](atlas.en-us.api_console.meta/api_console/sforce_api_console_js_getting_started.htm)**
    Lightning console apps allow users to quickly find the information they need, and make edits while viewing multiple records on one screen. The Lightning Console JavaScript API gives you programmatic access to Lightning console apps, so you can fully integrate Lightning console apps with Aura components and Lightning web components while extending them to meet your business needs.

## Related Topics

- Methods for Lightning Console JavaScript API (atlas.en-us.api_console.meta/api_console/sforce_api_console_methods_lightning.htm)
- How are the Classic and Lightning Console APIs Different? (atlas.en-us.api_console.meta/api_console/sforce_api_console_js_lightning_ui_matters.htm)
- Lightning Console JavaScript API (atlas.en-us.api_console.meta/api_console/sforce_api_console_js_getting_started.htm)
