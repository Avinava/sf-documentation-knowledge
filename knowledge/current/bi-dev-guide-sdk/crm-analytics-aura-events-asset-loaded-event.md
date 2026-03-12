---
title: "CRM Analytics Aura Events - Asset Loaded Event"
domain: bi-dev-guide-sdk
topic: crm-analytics-aura-events---asset-loaded-event
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:06.930Z
estimatedTokens: 827
keywords: [CRM, Analytics, Aura, Events, Asset, Loaded, Event, React, rendering, completion, Reacting, Dashboard, Resources]
---

# CRM Analytics Aura Events - Asset Loaded Event

> React to the CRM Analytics asset rendering completion event.

# CRM Analytics Aura Events - Asset Loaded Event

React to the CRM Analytics asset rendering completion event.

## Example - Reacting to Dashboard Rendering Completion with the Asset Loaded Event

For this example, the CRM Analytics asset used is a dashboard. The dashboard component generates a Lightning event when it has fully loaded and rendered its state (widgets, steps, and queries). This event is sent: on the initial load of a dashboard, when a user resets to dashboard to the initial view, and when the user selects a dashboard view. The payload for this completion event is the asset type and asset id. This example shows how to receive the payload and display the results.

This event works with embedded dashboard components. Embed your CRM Analytics dashboard in a Lightning page (see the [Embed CRM Analytics Dashboards in Lightning Pages](https://help.salesforce.com/articleView?id=bi_embed_lightning.htm&language=en_US) help topic for more information). Be sure to save and activate your page.

Using the Developer Console, create an Aura component named assetLoaded. Copy the following markup into the component.

```

```

Add a Controller (assetLoaded.js) to the bundle and copy the following JavaScript into it:

```

```

This example listens for any asset to be loaded and then displays the type and id of the asset. For greater functionality, combine this code with the wave:selectionChanged event example code to build a component that listens for asset loaded events and informs the user of the dashboard status so the user knows when to safely make updates to the dashboard.

You can now use your custom component to interact with a CRM Analytics dashboard component. In the Lightning App Builder, add your custom component to the Lightning Page with your embedded dashboard. That's it. Save and view the page to see the wave:assetLoaded event in action.

## Resources

For more information about Aura events and other Lightning development features, see the [Lightning Aura Components Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/intro_framework.htm).

#### See Also

-   [CRM Analytics Aura Events - Update Event](atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example1.htm "Create a custom component to dynamically set filters in a CRM Analytics dashboard embedded in a Lightning page.")

-   [CRM Analytics Aura Events - SelectionChanged Event](atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example2.htm "React to selections in your dashboard and get the row data for the selection.")

-   [CRM Analytics Aura Events - Discover Event](atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example_discoverdashboard.htm "This event sends a request to CRM Analytics dashboards to identify their assets.")

-   [CRM Analytics Aura Events - Discover Response Event](atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example_discoverresponse.htm "This event provides the response following a request for CRM Analytics dashboards to identify their assets.")

-   [CRM Analytics Aura Events - Page Change Event](atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example_pagechange.htm "This event sends a request to CRM Analytics dashboards to change the displayed page.")

## Code Examples

```apex
<aura:component 
     implements="force:appHostable,flexipage:availableForAllPageTypes,
     flexipage:availableForRecordHome,force:hasRecordId" 
     access="global" >
  <aura:attribute name="dashboardStatus" type="String" access="GLOBAL" 
      default="Loading dashboard..."/>
  <aura:attribute name="assetType" type="String" default=""/>
  <aura:attribute name="assetId" type="String" default=""/>

  <aura:handler event="wave:assetLoaded" action="{!c.handleAssetLoaded}"/>
     
  <div class="container">
    <div class="slds-form-element">
      <label class="slds-form_element__label" for="filter">Dashboard Status:</label>
      <ui:inputText value="{!v.dashboardStatus}" />
    </div>
    <div class="slds-form-element">
      <label class="slds-form_element__label" for="assetType">Loaded Asset Type:</label>
      <ui:inputText value="{!v.assetType}" />
    </div>
    <div class="slds-form-element">
      <label class="slds-form_element__label" for="assetId">Loaded Asset Id:</label>
      <ui:inputText value="{!v.assetId}" />
    </div>
  </div>
</aura:component>
```

```
({
  handleAssetLoaded: function(component, event, helper){
    component.set("v.dashboardStatus", "Dashboard is loaded");
    component.set("v.assetType", event.getParam("type"));
    component.set("v.assetId", event.getParam("id"));
  }
})
```

## Related Topics

- CRM Analytics Aura Events - Update Event (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example1.htm)
- CRM Analytics Aura Events - SelectionChanged Event (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example2.htm)
- CRM Analytics Aura Events - Discover Event (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example_discoverdashboard.htm)
- CRM Analytics Aura Events - Discover Response Event (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example_discoverresponse.htm)
- CRM Analytics Aura Events - Page Change Event (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example_pagechange.htm)
