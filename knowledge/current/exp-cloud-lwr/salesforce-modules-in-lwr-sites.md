---
title: "@salesforce Modules in LWR Sites"
domain: exp-cloud-lwr
topic: salesforce-modules-in-lwr-sites
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:27.692Z
estimatedTokens: 1257
keywords: [@salesforce, Modules, LWR, Sites, Experience, Cloud, support, add, functionality, Lightning, web, components, runtime]
---

# @salesforce Modules in LWR Sites

> LWR sites in Experience Cloud support @salesforce modules, which add functionality to Lightning web components at
    runtime.

# @salesforce Modules in LWR Sites

LWR sites in Experience Cloud support @salesforce modules, which add functionality to Lightning web components at runtime.

Most of the supported modules also support referential integrity, meaning that when a Lightning web component includes a reference to an object or resource, that dependency is respected. For example:

-   If a Lightning web component in your LWR site contains a reference to a supported module, you can’t delete the referenced object without first removing the Lightning web component.
-   If you modify the name of the referenced object or other relevant data in your org, the system automatically updates the reference in your Lightning web component.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=exp_cloud_lwr)

#### Note

For published LWR sites, the system immediately updates the references. However, unpublished sites rely on the source code of the custom component definition, which can take up to 2 hours to update. During this brief window, sometimes it’s not possible to publish your LWR site because the component’s references are temporarily invalid.

See [@salesforce Modules](https://developer.salesforce.com/docs/component-library/documentation/lwc/lwc.reference_salesforce_modules "HTML (New Window)") in the Lightning Web Components Developer Guide.

| Module | Description and Limitations |
| --- | --- |
| @salesforce/apex | Import Apex methods. Calls to Apex behave the same across LWR and Aura sites. If an Apex method signature changes, you must republish your site. Otherwise, the changes can break existing components. |
| @salesforce/apexContinuation | Import Apex methods that can make a long-running request to an external web service. Calls to Apex behave the same across LWR and Aura sites. If an Apex method signature changes, you must republish your site. Otherwise, the changes can break existing components. |
| @salesforce/client | Get the form factor of the hardware (desktop, tablet, or mobile) that the browser is running on. |
| @salesforce/community | Get information about the site, such as the network ID or the base path. If the base path changes, you’re not required to republish the site. |
| @salesforce/contentAssetUrl | Import content asset files. Content assets behave the same across LWR and Aura sites. The live site always fetches the latest version of the content asset. And if the name of the content asset changes, the live site doesn’t require you to republish the site.NoteThe URL for the content asset isn’t exactly the same as in Aura sites or in Lightning Experience. |
| @salesforce/customPermission | Import a custom permission and check whether it’s assigned to the current user. If the assignment of the referenced permission changes, you’re not required to republish the site. |
| @salesforce/i18n | Import internationalization properties. For LWR sites, the language and locale are mapped to the language configured for the site, and the timezone is determined by the browser’s timezone rather than the user’s personal settings.Additionally, currency, number.currencySymbol, and number.currencyFormat are unsupported.If the site or org language configurations are updated, you must republish the site. |
| @salesforce/label | Reference a label in the org. If the label is updated, you must republish the site.NoteReferential integrity isn’t enforced for labels in a published site, as they’re frozen when the site is published. However, when you preview the LWR site in Experience Builder before publishing it, we always fetch the latest label. |
| @salesforce/messageChannel | Expose the Lightning Message Service API. The Lightning Message Service lets you publish and subscribe to messages across the DOM between different Lightning web components on a page. If updates are made, you must republish the site. |
| @salesforce/resourceUrl | Import static resources in your org. Resource URLs behave the same for LWR and Aura sites. The live site always fetches the latest version of the resource. And if you rename the resource, the live site doesn’t require you to republish the site.The URL for the static resource uses the format /webruntime/org-asset/<hash>/resource/<id>. |
| @salesforce/schema | Reference the name of objects, fields, and relationships in your org. If any of these names change, you’re not required to republish the site. |
| @salesforce/site | Get information about the site, such as the site ID or the active languages. If the site language configuration changes, you must republish the site. |
| @salesforce/user | Get the current user’s ID using the user module’s Id property, or determine whether the current user is a guest using the user module’s isGuest property. If the user is a guest user, the ID is a null value. |
| @salesforce/userPermission | Import a Salesforce permission and check whether it’s assigned to the current user. If the assignment of the referenced permission changes, you’re not required to republish the site. |
