---
title: "CRM Analytics Aura Events - Discover Event"
domain: bi-dev-guide-sdk
topic: crm-analytics-aura-events---discover-event
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:06.936Z
estimatedTokens: 675
keywords: [CRM, Analytics, Aura, Events, Discover, Event, dashboards, identify, their, assets, Setting, Receiving, Resources]
---

# CRM Analytics Aura Events - Discover Event

> This event sends a request to CRM Analytics dashboards to identify their
    assets.

# CRM Analytics Aura Events - Discover Event

This event sends a request to CRM Analytics dashboards to identify their assets.

## Example - Setting Up Your Request and Receiving a Response

The wave:discover event sends a global request to listening CRM Analytics dashboard assets to respond with their identifying information (via the wave:discoverResponse event). You can include your own parameter in the response.

The wave:discover and wave:discoverResponse events work hand-in-hand. They’re particularly useful for discovering when a dashboard is being added dynamically to the page, or whether the page has multiple dashboards.

Using the Developer Console, create an Aura component and copy the following markup into the component. The markup sets up the handlers for the events, and adds buttons for adding a dashboard and for discovering dashboards.

```

```

Add a controller to the bundle, then copy the following JavaScript into it. This code shows how to fire the discover event, and how to use the result when the discoverResponse event is fired. The code also shows how to create dashboard components.

```

```

That's it! You can use these events to get some context about available dashboard components, and then interact with them via the Update and selectionChanged events.

## Resources

For more information about Aura events and other Lightning development features, see the [Lightning Aura Components Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/intro_framework.htm).

#### See Also

-   [CRM Analytics Aura Events - Update Event](atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example1.htm "Create a custom component to dynamically set filters in a CRM Analytics dashboard embedded in a Lightning page.")

-   [CRM Analytics Aura Events - SelectionChanged Event](atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example2.htm "React to selections in your dashboard and get the row data for the selection.")

-   [CRM Analytics Aura Events - Discover Response Event](atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example_discoverresponse.htm "This event provides the response following a request for CRM Analytics dashboards to identify their assets.")

-   [CRM Analytics Aura Events - Page Change Event](atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example_pagechange.htm "This event sends a request to CRM Analytics dashboards to change the displayed page.")

-   [CRM Analytics Aura Events - Asset Loaded Event](atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example_assetloaded.htm "React to the CRM Analytics asset rendering completion event.")

## Code Examples

```apex
<aura:component implements="flexipage:availableForAllPageTypes" access="global" >
    <aura:handler event="wave:discoverResponse" action="{!c.handleDiscoverResponse}"/>
    <aura:registerEvent name="discoverEvent" type="wave:discover"/>

    <ui:inputText label="Dashboard Name" aura:id="idTextBox"/>
    <ui:button label="Add Dashboard" press="{!c.addDashboard}"/>
    <ui:button label="Are you there?" press="{!c.discoverDashboard}"/>
    {!v.body}
    <ui:outputText aura:id="outName" value="" class="text"/>
</aura:component>
```

```
({
    addDashboard: function(component, event, helper) {
        var selectCmp = component.find("idTextBox");
        var config = {
            "developerName": selectCmp.get("v.value"),
            "showHeader": false,
            "height": 400
        };
        $A.createComponent("wave:waveDashboard", config, 
            function(dashboard, status, err) {
                if (status === "SUCCESS") {
                    dashboard.set("v.rendered", true);
                    dashboard.set("v.showHeader", false);
                    component.set("v.body", dashboard);
                } else if (status === "INCOMPLETE") {
                    console.log("No response from server or client is offline.")
                } else if (status === "ERROR") {
                    console.log("Error: " + err);
                }
            }
        );
    },
    discoverDashboard: function(component, event, helper) {
        $A.get("e.wave:discover").fire();
    },
    handleDiscoverResponse: function(cmp, event, helper) {
        var myText = cmp.find("outName");
        myText.set("v.value", event.getParam("developerName"));
    },
})
```

## Related Topics

- CRM Analytics Aura Events - Update Event (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example1.htm)
- CRM Analytics Aura Events - SelectionChanged Event (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example2.htm)
- CRM Analytics Aura Events - Discover Response Event (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example_discoverresponse.htm)
- CRM Analytics Aura Events - Page Change Event (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example_pagechange.htm)
- CRM Analytics Aura Events - Asset Loaded Event (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example_assetloaded.htm)
