---
title: "CRM Analytics Aura Events - Page Change Event"
domain: bi-dev-guide-sdk
topic: crm-analytics-aura-events---page-change-event
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:06.942Z
estimatedTokens: 871
namespace: XXXXXXXXXXX
keywords: [CRM, Analytics, Aura, Events, Change, Event, dashboards, Updating, Dashboard, Resources]
---

# CRM Analytics Aura Events - Page Change Event

> This event sends a request to CRM Analytics dashboards to change the displayed
        page.

**Namespace:** `XXXXXXXXXXX`

# CRM Analytics Aura Events - Page Change Event

This event sends a request to CRM Analytics dashboards to change the displayed page.

## Example - Updating the Displayed Dashboard Page

The wave:pageChange event sends a global request to a listening CRM Analytics dashboard to update the page that is displayed.

This event works with embedded dashboard components. Embed your CRM Analytics dashboard in a Lightning page (see the [Embed CRM Analytics Dashboards in Lightning Pages](https://help.salesforce.com/articleView?id=bi_embed_lightning.htm&language=en_US) help topic for more information). Be sure to save and activate your page.

The CRM Analytics Aura events allow CRM Analytics to interact with the UI container. In this example, we create a custom component to interact with the embedded CRM Analytics dashboard, so you need some familiarity with the Developer Console. See the [Lightning Aura Components Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/components_create_devconsole.htm) for more information.

Using the Developer Console, create an Aura component and copy the following markup into the component. The markup sets up the handler for the event, input fields for the event parameters, and adds a button for firing the pageChange event.

```

```

Replace the XXXXXXXXXXX with the fully qualified developer name of your dashboard. To find the name, use cURL or Postman to execute the REST API call /services/data/v47.0/wave/dashboards. The developer name is required and it must be the fully qualified name - <namespace>\_\_<devName>.

Add a controller to the bundle, then copy the following JavaScript into it. This code shows how to fire the pageChange event.

```

```

That's it. You can use your custom component to interact with a CRM Analytics dashboard. Add your custom component to the Lightning Page with your embedded dashboard. Make sure that the pageId matches that of a pageId in the dashboard you embedded. Change the dashboard pages by clicking the “Fire” button and watch the dashboard update.

## Resources

For more information about Aura events and other Lightning development features, see the [Lightning Aura Components Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/intro_framework.htm).

#### See Also

-   [CRM Analytics Aura Events - Update Event](atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example1.htm "Create a custom component to dynamically set filters in a CRM Analytics dashboard embedded in a Lightning page.")

-   [CRM Analytics Aura Events - SelectionChanged Event](atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example2.htm "React to selections in your dashboard and get the row data for the selection.")

-   [CRM Analytics Aura Events - Discover Event](atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example_discoverdashboard.htm "This event sends a request to CRM Analytics dashboards to identify their assets.")

-   [CRM Analytics Aura Events - Discover Response Event](atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example_discoverresponse.htm "This event provides the response following a request for CRM Analytics dashboards to identify their assets.")

-   [CRM Analytics Aura Events - Asset Loaded Event](atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example_assetloaded.htm "React to the CRM Analytics asset rendering completion event.")

## Code Examples

```apex
<aura:component implements="flexipage:availableForAllPageTypes" access="global" >
    <aura:attribute name="pageId" type="String" access="GLOBAL" default="page_one"/>
    <aura:attribute name="developerName" type="String" access="GLOBAL" default="XXXXXXXXXXXXXXX"/>
    <aura:registerEvent name="pageChange" type="wave:pageChange"/>
    
    <div class="container">
        <div class="slds-form-element">
            <label class="slds-form_element__label" for="developerName">Developer Name: </label>
            <lightning:textarea name="developerName" value="{!v.developerName}"/>
        </div>
        <div class="slds-form-element">
            <label class="slds-form_element__label" for="pageId">Page Id: </label>
            <lightning:textarea name="pageId" value="{!v.pageId}"/>
        </div>
        <div class="slds-form-element">
            <lightning:button onclick="{!c.handleSendPageChange}" label="Fire"/>
        </div>
    </div/>
</aura:component>
```

```
({
    handleSendPageChange : function(component, event, helper) {
        var pageId = component.get(’v.pageId’);
        var developerName = component.get(’v.developerName’);

        var evt = $A.get(’e.wave:pageChange’)’
        var params = {
            devName: developerName,
            pageid: pageId
        };
        evt.setParams(params);
        evt.fire();
    }
})
```

## Related Topics

- CRM Analytics Aura Events - Update Event (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example1.htm)
- CRM Analytics Aura Events - SelectionChanged Event (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example2.htm)
- CRM Analytics Aura Events - Discover Event (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example_discoverdashboard.htm)
- CRM Analytics Aura Events - Discover Response Event (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example_discoverresponse.htm)
- CRM Analytics Aura Events - Asset Loaded Event (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example_assetloaded.htm)
