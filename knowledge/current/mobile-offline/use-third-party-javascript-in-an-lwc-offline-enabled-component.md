---
title: "Use Third-Party JavaScript in an LWC Offline-Enabled Component"
domain: mobile-offline
topic: use-third-party-javascript-in-an-lwc-offline-enabled-component
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:57.096Z
estimatedTokens: 859
keywords: [Third-Party, JavaScript, LWC, Offline-Enabled, Component, resources, provide, access, libraries, Lightning, web, components, enable, offline, follow]
---

# Use Third-Party JavaScript in an LWC Offline-Enabled Component

> Use static resources to provide access to third-party JavaScript libraries in your
        Lightning web components. To enable JavaScript libraries in static resources to be used while offline, follow these guidelines.

# Use Third-Party JavaScript in an LWC Offline-Enabled Component

Use static resources to provide access to third-party JavaScript libraries in your Lightning web components. To enable JavaScript libraries in static resources to be used while offline, follow these guidelines.

Loading JavaScript libraries stored in a static resource is straightforward, and fully documented. We present only a simple example here. See [Use Third-Party JavaScript Libraries](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.js_third_party_library "HTML (New Window)") the Lightning Web Component Developer Guide for complete details.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=mobile_offline)

#### Important

LWC Offline doesn’t support archive static resources at this time. This limitation poses a challenge for libraries that consist of many separate JavaScript files. While you can create a separate static resource for each file and load them individually, that’s tedious. Look for a merged, concatenated, or minimized version of your JavaScript library; transformed versions of libraries are often provided by the developer for performance and ease of deployment.

The critical elements of an offline-ready implementation are:

-   Access the URL of the resource by importing it using the @salesforce/resourceUrl module.
-   Load the library using the loadScript() function of the platformResourceLoader module, and then;
-   Call your library’s entry point, initialization or factory function, or otherwise start using the library in a then() block chained from your loadScript() call.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=mobile_offline)

#### Important

While there are other methods for loading JavaScript libraries in an LWC, the preceding elements are required for **offline** access to function. Static resources aren’t primed in advance; users must load (view) a component using the static resource before going offline. This behavior will change in a future release.

## Example

```

```

If you must load multiple separate JavaScript files, wrap them in a Promise, and call the initialization function after all of your calls to loadScript() have resolved. For example:

```

```

#### See Also

-   [*Salesforce Help:* Static Resources](https://help.salesforce.com/s/articleView?id=platform.pages_static_resources.htm&type=5&language=en_US "Salesforce Help: Static Resources - HTML (New Window)")

-   [*Lightning Web Components Developer Guide:* Use Third-Party JavaScript Libraries](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.js_third_party_library "Lightning Web Components Developer Guide: Use Third-Party JavaScript Libraries - HTML (New Window)")

-   [*Lightning Web Components Developer Guide:* @salesforce/resourceUrlin @salesforce Modules](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_salesforce_modules "Lightning Web Components Developer Guide:
    @salesforce/resourceUrlin @salesforce Modules - HTML (New Window)")

-   [*Lightning Web Components Developer Guide:* Platform Resource Loader](https://developer.salesforce.com/docs/component-library/bundle/lightning-platform-resource-loader/documentation "Lightning Web Components Developer Guide:
    Platform Resource Loader - HTML (New Window)")

## Code Examples

```
// javascriptFromStaticResource.js
import { LightningElement } from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';
import myLib from '@salesforce/resourceUrl/myLib';

export default class JavascriptFromStaticResource extends LightningElement {
    loadScript(this, myLib)
    .then(() => {
        let result = myLib.myFunction(2,2);
    });
}
```

```
Promise.all([
    loadScript(this, resourceName1),
    loadScript(this, resourceName2),
    loadScript(this, resourceName3)
]).then(() => { 
    // Start using the library here
});
```
