---
title: "Example: Adobe Analytics and Lightning Locker in
    Aura
    Sites"
domain: communities-dev
topic: example-adobe-analytics-and-lightning-locker-in-aura-sites
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:23.508Z
estimatedTokens: 850
keywords: [Adobe, Analytics, Lightning, Locker, Aura, Sites, Because, interacts, components, site, produce, unexpected, results, recommended, workaround]
---

# Example: Adobe Analytics and Lightning Locker in
    Aura
    Sites

> Because Adobe Analytics interacts with components in your
    Aura
    site, Lightning Locker can produce unexpected results. The recommended workaround is to isolate
    Adobe Analytics by using JavaScript Custom Events in your head markup. Adobe Analytics can then interact with components without being
    responsible for loading or referencing that resource directly.

# Example: Adobe Analytics and Lightning Locker in Aura Sites

Because Adobe Analytics interacts with components in your Aura site, Lightning Locker can produce unexpected results. The recommended workaround is to isolate Adobe Analytics by using JavaScript Custom Events in your head markup. Adobe Analytics can then interact with components without being responsible for loading or referencing that resource directly.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=communities_dev)

#### Tip

LWR sites can include analytics by using a different strategy. For more information, see [Integrate Third-Party Libraries Using the Privileged Script Tag](https://developer.salesforce.com/docs/atlas.en-us.260.0.exp_cloud_lwr.meta/exp_cloud_lwr/advanced_privileged_script.htm "HTML (New Window)") in LWR Sites for Experience Cloud.

## Include Adobe Analytics in Your Aura Site

Add the Adobe Analytics script and applicable event listeners to your site’s head markup using the script tag.

```

```

## Use Custom Events

For any component you want to interact with Adobe Analytics, implement a custom event using the detail property. This property passes data through the event to the listener and is mapped to the dataLayer in your head markup listener. The custom events can then be dispatched to any resource that extends EventTarget.

```

```

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=communities_dev)

#### Warning

Be aware of the data you’re passing with the JavaScript CustomEvent constructor, and ensure that your usage is secure. Any JavaScript running on your page, including Adobe Analytics, can potentially listen for your event names and read this data.

## Implement Additional Events for Aura Components

If Adobe Analytics interacts with an Aura component, you also must implement the forceCommunity:routeChange and aura:locationChange events.

forceCommunity:routeChange tracks view changes within the Lightning Component Framework.

```

```

```

```

aura:locationChange indicates that the hash part of the URL in the browser's location bar has been modified. However, changing the hash part of a location URL is used only rarely—for example, to implement a tab change in the Tabs component.

#### See Also

-   [*Salesforce Help*: Add Markup to the Page <head\> to Customize Your Experience Builder Site](https://help.salesforce.com/articleView?id=experience.community_builder_page_head.htm&type=5&language=en_US "Salesforce Help: Add Markup to the Page <head> to Customize Your Experience Builder Site - HTML (New Window)")

-   [*Lightning Web Components Reference*: Route Change](https://developer.salesforce.com/docs/component-library/bundle/forceCommunity:routeChange/documentation "Lightning Web Components Reference: Route Change - HTML (New Window)")

-   [*Lightning Web Components Reference*: Location Change](https://developer.salesforce.com/docs/component-library/bundle/aura:locationChange/documentation "Lightning Web Components Reference: Location Change - HTML (New Window)")

-   [*Lightning Aura Components Developer Guide*: What is the Lightning Component Framework?](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/intro_framework.htm "Lightning Aura Components Developer Guide: What is the Lightning Component
    Framework? - HTML (New Window)")

## Code Examples

```
<script> 
    document.addEventListener('analyticsEvent', function(e) {
        //add logic here to tell your dataLayer about the event
        //dataLayer.action = e.detail.action;
        //dataLayer.label = e.detail.label;
        //or map payload to an AA library event
    });
    
    document.addEventListener('analyticsViewChange', function() {
    });
</script>
<script src="full-url-to-your-adobe-script" async></script>
```

```
document.dispatchEvent(new CustomEvent('analyticsEvent', {'detail': {action: 'click', label: 'Submitted Case'}}));
```

```
<aura:component implements="forceCommunity:availableForAllPageTypes">
    <aura:handler event="forceCommunity:routeChange" action="{!c.handleRouteChange}" />
</aura:component>
```

```
handleRouteChange : function(component, event, helper) {
    document.dispatchEvent(new Event('analyticsViewChange'));
}
```
