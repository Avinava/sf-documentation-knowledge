---
title: "Lightning Container Component Limits"
domain: lightning
topic: lightning-container-component-limits
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T09:34:48.520Z
estimatedTokens: 766
keywords: [Lightning, Container, Component, Limits, Understand]
---

# Lightning Container Component Limits

> Understand the limits of lightning:container.

# Lightning Container Component Limits

Understand the limits of lightning:container.

lightning:container has known limitations. You might observe performance and scrolling issues associated with the use of iframes. This component isn’t designed for the multi-page model, and it doesn’t integrate with browser navigation history.

If you navigate away from the page and a lightning:container component is on, the component doesn’t automatically remember its state. The content within the iframe doesn’t use the same offline and caching schemes as the rest of Lightning Experience.

Creating a Lightning app that loads a Lightning container static resource from another namespace is not supported. If you install a package, your apps should use the custom Lightning components published by that package, not their static resources directly. Any static resource you use as the lightning:container src attribute should have your own namespace.

Previous versions of lightning:container allowed developers to specify the Content Security Policy (CSP) of the iframed content. We removed this functionality for security reasons. The CSP level of all pages is now set to the highest level to provide the greatest security. Content can only be loaded from secure, approved domains. When lightning:container is used in Experience Cloud, the CSP setting in that Experience Builder site will be respected.

Apps that use lightning:container should work with data, not metadata. Don’t use the session key for your app to manage custom objects or fields. You can use the session key to create and update object records.

Content in lightning:container is served from the Lightning container domain and is available in Lightning Experience, Experience Builder sites, and the Salesforce mobile app. lightning:container can’t be used in Lightning pages that aren’t served from the Lightning domain, such as Visualforce pages or in external apps through Lightning Out.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=lightning)

#### Important

You can’t access the Salesforce REST API from the app inside of lightning:container. See the [Spring ’18 Release Notes](https://help.salesforce.com/articleView?id=release-notes.rn_lc_api_revert_cruc.htm&release=212&type=5&language=en_US) for details.

-   **[Lightning Container Component Security Requirements](atlas.en-us.lightning.meta/lightning/container_security.htm)**
    Ensure that your Lightning container components meet security requirements.

#### See Also

-   [Lightning Container](atlas.en-us.lightning.meta/lightning/container_overview.htm "Upload an app developed with a third-party framework as a static resource, and host the content in an Aura component using lightning:container. Use lightning:container to use third-party frameworks like AngularJS or React within your Lightning pages.")

-   [*Salesforce Help:* Content Security Policy in Experience Builder Sites](https://help.salesforce.com/articleView?id=networks_security_csp_overview.htm&type=5&language=en_US)

## Related Topics

- Lightning Container Component Security Requirements (atlas.en-us.lightning.meta/lightning/container_security.htm)
- Lightning Container (atlas.en-us.lightning.meta/lightning/container_overview.htm)
