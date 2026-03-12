---
title: "How are the Classic and Lightning Console APIs Different?"
domain: service-cloud
topic: how-are-the-classic-and-lightning-console-apis-different
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.709Z
estimatedTokens: 1365
keywords: [How, Classic, Lightning, Console, APIs, Different, user, org, dictates, development, tools, Salesforce, Integration, Toolkit, versus]
---

# How are the Classic and Lightning Console APIs Different?

> The user interface of your org dictates which development tools you can use with the
  Salesforce console.

# How are the Classic and Lightning Console APIs Different?

The user interface of your org dictates which development tools you can use with the Salesforce console.

## Console Integration Toolkit versus Lightning Console JavaScript API

Both the Lightning Console JavaScript API and the Salesforce Console Integration Toolkit are JavaScript APIs that allow you to interact with Classic or Lightning console apps. Methods are implemented differently in each API, however.

Here’s what’s different between the Lightning Console JavaScript API and the Salesforce Console Integration Toolkit.

You Use the Methods in Different Places

-   In Aura components, use the Lightning Console JavaScript API methods in the JavaScript controller of a Lightning component.
-   In Lightning web components, you can use only the utility bar and workspace API methods, wire adapters, and Lightning message channels. Lightning web components don’t currently support working with navigation items.
-   Visualforce or iframed, third-party pages work in both Lightning Experience and Salesforce Classic. For Visualforce and iframe pages, use the Classic methods from the Salesforce Console Integration Toolkit. However, there are limitations regarding which methods you can use. [Classic Console API Methods Supported in the Lightning Console API](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_classic_bridge_methods.htm#sforce_api_console_lightning_classic_bridge_methods "Visualforce pages and third-party web tabs that use some Salesforce Console Integration Toolkit methods work in Lightning Experience as-is. Just point to the latest version of the toolkit script in your Visualforce pages or third-party web tabs. Third-party content must be allowlisted with CSP directives via Trusted URLs. This table lists the Salesforce Console Integration Toolkit methods that you can use in Lightning Console JavaScript API starting with API version 42.0."), provides details on the supported methods.

    When you are using the Salesforce Console Integration Toolkit in Salesforce Classic, you use methods within <script> tags for Visualforce pages or iframed, third-party pages.


The Input Syntax for Methods is Different

Methods in the Lightning Console JavaScript API (Aura components) take a JSON array of arguments:

```

```

Similarly, methods in the Lightning Console JavaScript API (LWC) take a JSON array of arguments:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

For Aura components, required parameters are passed to the method in an object. For LWC, required parameters are explicitly passed to the method.

Methods in the Salesforce Console Integration Toolkit don’t:

```

```

The APIs Provide Different Methods

Although some of the methods in the Lightning Experience methods are similar to the Salesforce Classic methods, they have different names and provide different functionality.

The Lightning Console JavaScript API also provides methods for use with the utility bar, which is available in Lightning Experience only.

-   **[Console API Method Parity—What’s Different Between Lightning Experience and Salesforce Classic?](atlas.en-us.api_console.meta/api_console/sforce_api_console_js_lightning_parity.htm)**
    The Lightning Console JavaScript API provides methods similar to those methods in the Salesforce Console Integration Toolkit.
-   **[Classic Console API Methods Supported in the Lightning Console API](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_classic_bridge_methods.htm)**
    Visualforce pages and third-party web tabs that use some Salesforce Console Integration Toolkit methods work in Lightning Experience as-is. Just point to the latest version of the toolkit script in your Visualforce pages or third-party web tabs. Third-party content must be allowlisted with CSP directives via Trusted URLs. This table lists the Salesforce Console Integration Toolkit methods that you can use in Lightning Console JavaScript API starting with API version 42.0.
-   **[Utility Bar API Method Parity](atlas.en-us.api_console.meta/api_console/sforce_api_console_js_utility_parity.htm)**
    The utility bar API provides methods for Aura Components and Lightning Web Components (LWC) in Lightning Experience only. Salesforce Classic isn’t supported.

#### See Also

-   [Lightning Console JavaScript API](atlas.en-us.api_console.meta/api_console/sforce_api_console_js_getting_started.htm "Lightning console apps allow users to quickly find the information they need, and make edits while viewing multiple records on one screen. The Lightning Console JavaScript API gives you programmatic access to Lightning console apps, so you can fully integrate Lightning console apps with Aura components and Lightning web components while extending them to meet your business needs.")

-   [Salesforce Console Integration Toolkit for Salesforce Classic](atlas.en-us.api_console.meta/api_console/sforce_api_console_intro.htm "The Salesforce Console Integration Toolkit is a browser-based JavaScript API that provides you with programmatic access to the console in Salesforce Classic. The Salesforce Console Integration Toolkit uses browsers as clients to display pages as tabs in the console. For example, the toolkit lets you integrate third-party systems with the console, opening up an external application in the same window, in a tab.")

## Code Examples

```
workspace.openTab({
    url: '#https://salesforce.com', 
    focus: true, 
    label: 'Salesforce',
});
```

```
openTab({
    url: '#/sObject/001R0000003HgssIAC/view',
    label: 'Global Media',
    focus: true
})
```

```
sforce.console.openPrimaryTab(null, 'https://salesforce.com', false, 
                'salesforce', openSuccess, 'salesforceTab');
```

## Related Topics

- Classic Console API Methods Supported in the Lightning Console API (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_classic_bridge_methods.htm)
- Console API Method Parity—What’s Different Between Lightning Experience and Salesforce Classic? (atlas.en-us.api_console.meta/api_console/sforce_api_console_js_lightning_parity.htm)
- Utility Bar API Method Parity (atlas.en-us.api_console.meta/api_console/sforce_api_console_js_utility_parity.htm)
- Lightning Console JavaScript API (atlas.en-us.api_console.meta/api_console/sforce_api_console_js_getting_started.htm)
- Salesforce Console Integration Toolkit for Salesforce Classic (atlas.en-us.api_console.meta/api_console/sforce_api_console_intro.htm)
