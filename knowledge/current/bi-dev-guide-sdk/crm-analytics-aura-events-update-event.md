---
title: "CRM Analytics Aura Events - Update Event"
domain: bi-dev-guide-sdk
topic: crm-analytics-aura-events---update-event
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:06.920Z
estimatedTokens: 1066
namespace: XXXXXXXXXXX
keywords: [CRM, Analytics, Aura, Events, Event, custom, component, dynamically, filters, dashboard, embedded, Lightning, Setting, Filter, Resources]
---

# CRM Analytics Aura Events - Update Event

> Create a custom component to dynamically set filters in a CRM Analytics dashboard
    embedded in a Lightning page.

**Namespace:** `XXXXXXXXXXX`

# CRM Analytics Aura Events - Update Event

Create a custom component to dynamically set filters in a CRM Analytics dashboard embedded in a Lightning page.

## Example - Setting a Filter with the Update Event

This event works with embedded dashboard components. Embed your CRM Analytics dashboard in a Lightning page (see the [Embed CRM Analytics Dashboards in Lightning Pages](https://help.salesforce.com/articleView?id=bi_embed_lightning.htm&language=en_US) help topic for more information). Be sure to save and activate your page.

The CRM Analytics Aura events allow CRM Analytics to interact with the UI container. In this example, we create a custom component to interact with the embedded CRM Analytics dashboard, so you need some familiarity with the Developer Console. See the [Lightning Aura Components Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/components_create_devconsole.htm) for more information.

In the Developer Console, create an Aura Component named filterTest, and copy the following into the component markup definition (filterTest.cmp):

```

```

Replace the XXXXXXXXXXX with the fully qualified developer name of your dashboard. To find the name, use uCRL or Postman to execute the API call /services/data/v47.0/wave/dashboards. The developer name is required and it must be the fully qualified name - <namespace>\_\_<devName>.

For most filters, you need the fully qualified name of the dataset the dashboard is using. To find the name, log in to [Workbench](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/quickstart_using_workbench.htm), click **Utilities** | **REST Explorer**. In the text box, type /services/data/v47.0/wave/datasets and then click **Execute**.

Add a controller (filterTestController.js) to the bundle, then copy the following JavaScript into it. This example JavaScript shows how to construct the payload for the update event—in this case, setting StageName to Closed Won for the dataset used by the dashboard. Replace these names with valid names from your dashboard and dataset, for the filter you wish to set. For more information about creating the filter, see [Filter and Selection Syntax for Embedded Dashboards](https://help.salesforce.com/articleView?id=bi_embed_filters.htm&language=en_US).

```

```

Add a Style (filterTest.css) to the bundle and copy the following CSS into it.

```

```

Finally, add a design (filterTest.design) to the bundle and copy the following into it.

```

```

That's it. You can use your custom component to interact with CRM Analytics. Add your custom component to the Lightning Page with your embedded dashboard. Make sure that the developer name in the filter matches that of the dataset in the dashboard you embedded. Applying your filter by clicking the “Fire” button causes the dashboard to be updated.

## Resources

For more information about Aura events and other Lightning development features, see the [Lightning Aura Components Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/intro_framework.htm).

#### See Also

-   [CRM Analytics Aura Events - SelectionChanged Event](atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example2.htm "React to selections in your dashboard and get the row data for the selection.")

-   [CRM Analytics Aura Events - Discover Event](atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example_discoverdashboard.htm "This event sends a request to CRM Analytics dashboards to identify their assets.")

-   [CRM Analytics Aura Events - Discover Response Event](atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example_discoverresponse.htm "This event provides the response following a request for CRM Analytics dashboards to identify their assets.")

-   [CRM Analytics Aura Events - Page Change Event](atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example_pagechange.htm "This event sends a request to CRM Analytics dashboards to change the displayed page.")

-   [CRM Analytics Aura Events - Asset Loaded Event](atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example_assetloaded.htm "React to the CRM Analytics asset rendering completion event.")

## Code Examples

```apex
<aura:component implements="force:appHostable,
                            flexipage:availableForAllPageTypes,
                            flexipage:availableForRecordHome, 
                            force:hasRecordId,
                            forceCommunity:availableForAllPageTypes,
                            force:lightningQuickAction"
                            access="global" >
  <aura:attribute name="filter" type="String" access="GLOBAL"/>
  <aura:attribute name="developerName" type="String" access="GLOBAL" default="XXXXXXXXXXX"/>
  <aura:handler name="init" value="{!this}" action="{!c.doInit}"/>
  <aura:registerEvent name="update" type="wave:update"/>
  <div class="container">
    <ui:inputText value="{!v.filter}" label="Filter: " size="200"></ui:inputText>
    <ui:button press="{!c.handleSendFilter}" label="Fire"/>
  </div>
</aura:component>
```

```
({
  doInit: function(component, event, helper) {
    component.set('v.filter', '{"datasets" : "<namespace>__<datasetName>": [{"fields": ["StageName"], "selection": ["Closed Won"]}]}}');    
  },
  handleSendFilter: function(component, event, helper) {
    var filter = component.get('v.filter');
    var developerName = component.get('v.developerName');
    var evt = $A.get('e.wave:update');
    evt.setParams({
      value: filter,
      devName: developerName,
      type: "dashboard"
    });
    evt.fire();
  }
})
```

```
.THIS.container {
  border: 1px solid #A0A0A0;
  padding: 5px;
  width: 100%;
  margin: 5px auto;
  background: white;
}
      
.THIS .uiInputText {
  display: inline-block;
  margin-right: 5px;
}
```

```
<design:component label="Filter Test">
  <design:attribute name="filter" label="Filter" description="The initial filter"/>
  <design:attribute name="developerName" 
     label="Dashboard Name"
     description="The CRM Analytics Dashboard to send the filter to"/>
</design:component>
```

## Related Topics

- CRM Analytics Aura Events - SelectionChanged Event (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example2.htm)
- CRM Analytics Aura Events - Discover Event (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example_discoverdashboard.htm)
- CRM Analytics Aura Events - Discover Response Event (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example_discoverresponse.htm)
- CRM Analytics Aura Events - Page Change Event (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example_pagechange.htm)
- CRM Analytics Aura Events - Asset Loaded Event (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example_assetloaded.htm)
