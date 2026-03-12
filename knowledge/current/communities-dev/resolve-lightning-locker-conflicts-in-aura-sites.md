---
title: "Resolve Lightning Locker Conflicts in Aura Sites"
domain: communities-dev
topic: resolve-lightning-locker-conflicts-in-aura-sites
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:23.495Z
estimatedTokens: 1795
keywords: [Resolve, Lightning, Locker, Conflicts, Aura, Sites, enabled, new, Experience, Cloud, However, occasionally, third-party, component, custom]
---

# Resolve Lightning Locker Conflicts in Aura Sites

> Lightning Locker is enabled by default for all new Aura sites in Experience Cloud.
    However, occasionally a third-party component on the page or custom code in your head markup doesn’t work as expected due to a conflict with
    Lightning Locker. In such a situation, Salesforce recommends using one of the workarounds
    described here.

# Resolve Lightning Locker Conflicts in Aura Sites

Lightning Locker is enabled by default for all new Aura sites in Experience Cloud. However, occasionally a third-party component on the page or custom code in your head markup doesn’t work as expected due to a conflict with Lightning Locker. In such a situation, Salesforce recommends using one of the workarounds described here.

## Use JavaScript Custom Events

Lightning Locker protects third-party components and custom code from interacting with resources from other namespaces, but not from the head markup. This limitation means that your head markup can contain custom code that bypasses Lightning Locker and introduces security vulnerabilities. Third-party scripts in the head element can also conflict with Salesforce platform code, leading to unpredictable issues.

To address this limitation, isolate your third-party Aura and Lightning web components and custom code by using the CustomEvent constructor in your head markup. Third-party components and custom code can then interact with your resources without being responsible for loading or referencing that resource directly.

Any data that must be passed through the event to the listener is passed in the detail property, which is created when initializing the event. The detail property is mapped to the dataLayer in your head markup listener. The custom events are then dispatched to any resource that extends EventTarget. For an example of using custom events, see [Adobe Analytics and Lightning Locker](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_security_locker_example.htm "Because Adobe Analytics interacts with components in your Aura site, Lightning Locker can produce unexpected results. The recommended workaround is to isolate Adobe Analytics by using JavaScript Custom Events in your head markup. Adobe Analytics can then interact with components without being responsible for loading or referencing that resource directly.").

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=communities_dev)

#### Warning

Be aware of the data that you’re passing with the JavaScript CustomEvent constructor, and ensure that your usage is secure. Any JavaScript running on your page, including any third-party App Exchange components that you’re using, can potentially listen for your event names and read this data.

## Set an Aura Component to API 39.0

If your third-party component or custom code doesn’t interact with an Aura component as expected, you can set the Aura component to Salesforce API version 39.0, which disables Lightning Locker for the component. See [Disable Lightning Locker for a Component](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/security_ls_disable.htm) in the Lightning Aura Components Developer Guide.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=communities_dev)

#### Warning

Disabling Lightning Locker for an Aura component can introduce security flaws into your site and prevent the component from being available at design time or rendering at runtime.

For consistency and ease of debugging, avoid having a parent Aura component and a child component on different API versions. Therefore, don’t use any Aura component set to API version 39.0 in a component hierarchy, such as a component within a component or a component that’s extending another component.

If LWS is enabled in the org, setting API version 39.0 in the component doesn’t disable LWS for the component. However, LWS is likely to allow behaviors of components that Lightning Locker blocks, removing the need to disable it.

## Turn Off Lightning Locker

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=communities_dev)

#### Warning

Use this workaround only as a last resort.

If you turn off Lightning Locker in your site, you disable it for *all* your site’s third-party components and custom code. The ramifications can be far-ranging and unexpected, such as introducing security flaws into your site. And if a third-party component hasn’t been [enabled to work without Lightning Locker](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_security_locker_off_components.htm "If you turn off Lightning Locker in your Experience Builder site, any third-party components installed from a managed package must be configured to be available at design time and render at runtime."), it can prevent that component from being available at design time and rendering at runtime. When Lightning Locker is turned off, components from different namespaces can interact with and access each other’s Document Object Model (DOM), and restrictions around custom resources interacting with your site are relaxed.

For more information on disabling Lightning Locker, see [Select a Security Level in Experience Builder Sites](https://help.salesforce.com/articleView?id=experience.networks_security_csp_scriptlevel.htm&type=5&language=en_US) in Salesforce Help.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=communities_dev)

#### Note

If LWS is enabled in the org, when you disable Lightning Locker in an Aura site, you actually disable LWS in the site. If you disable Lightning Locker in the LWR site, the site’s instance of LWS is disabled, even if LWS is enabled in the org.

#### See Also

-   [ExperienceBundle for Experience Builder Sites](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_migrate_expbundle.htm "The ExperienceBundle metadata type provides text-based representations of the different settings and components, such as pages, branding sets, and themes, that make up an Experience Builder site. Whether it’s for your own org or you’re a consulting partner or ISV, you can quickly update and deploy sites programmatically using your preferred development tools, including Salesforce Extensions for VS Code, Salesforce CLI, or your favorite IDE or text editor.")

-   [*Experience Cloud Help*: Select a Security Level in Experience Builder Sites](https://help.salesforce.com/s/articleView?id=experience.networks_security_csp_scriptlevel.htm&type=5&language=en_US "Experience Cloud Help: Select a Security Level in Experience Builder
    Sites - HTML (New Window)")

-   [*Salesforce Help*: Add Markup to the Page <head\> to Customize Your Experience Builder Site](https://help.salesforce.com/articleView?id=experience.community_builder_page_head.htm&type=5&language=en_US "Salesforce Help: Add Markup to the Page <head> to Customize Your Experience Builder Site - HTML (New Window)")

-   [*Lightning Web Components Dev Guide*: Communicate with Events](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/events "Lightning Web Components Dev Guide: Communicate with Events - HTML (New Window)")

-   [*Lightning Aura Components Developer Guide*: Communicating with Events](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/events_intro.htm?search_text=events "Lightning Aura Components Developer Guide: Communicating with
    Events - HTML (New Window)")

## Related Topics

- Adobe Analytics and Lightning Locker (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_security_locker_example.htm)
- enabled to work without Lightning Locker (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_security_locker_off_components.htm)
- ExperienceBundle for Experience Builder Sites (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_migrate_expbundle.htm)
