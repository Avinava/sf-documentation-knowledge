---
title: "CRM Analytics Aura Events - SelectionChanged Event"
domain: bi-dev-guide-sdk
topic: crm-analytics-aura-events---selectionchanged-event
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:06.926Z
estimatedTokens: 852
keywords: [CRM, Analytics, Aura, Events, SelectionChanged, Event, React, selections, dashboard, row, data, selection, Reacting, Resources]
---

# CRM Analytics Aura Events - SelectionChanged Event

> React to selections in your dashboard and get the row data for the selection.

# CRM Analytics Aura Events - SelectionChanged Event

React to selections in your dashboard and get the row data for the selection.

## Example - Reacting to a Selection with the selectionChanged Event

The dashboard component also generates Lightning events when the user changes a selection. The payload for these events is effectively the row data for the current selection. Datasets can be from many sources, so the actual payload may only be meaningful when the user has knowledge of the datasets being used. This example shows how to receive and iterate through the payload, which is an array of objects representing the current selection.

This example uses the same dashboard used for the update event example, so be sure to follow those steps first.

Using the Developer Console, create an Aura component named recordView. Copy the following markup into the component.

```

```

Add a Controller (recordViewController.js) to the bundle and copy the following JavaScript into it:

```

```

This example references recordId, an Opportunity record identifier. If you don’t use this in your dashboard, substitute a different field.

Payload data can contain other objects, each in turn containing key-value pairs. For example, aside from the Id, you can also get the noun (for example, "dashboard") and the verb (for example, "selection").

Add a Style (recordView.css) to the bundle and copy the following CSS into it:

```

```

For a better experience in Lightning App Builder, add a Design (recordView.design) to the bundle and paste in the following:

```

```

The page you created using Lightning App Builder should now show the Record View component in the palette. Drag this component onto the page, then save the page.

Go back to Lightning Experience, and make a selection in your CRM Analytics Dashboard component. The corresponding Salesforce Opportunity record (or the record type you specified in recordViewController.js) will be displayed in the newly added component.

## Resources

For more information about Aura events and other Lightning development features, see the [Lightning Aura Components Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/intro_framework.htm).

#### See Also

-   [CRM Analytics Aura Events - Update Event](atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example1.htm "Create a custom component to dynamically set filters in a CRM Analytics dashboard embedded in a Lightning page.")

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
  <aura:handler event="wave:selectionChanged" action="{!c.handleSelectionChanged}"/>
  <aura:attribute name="msg" type="String" default="Please make a selection in CRM Analytics that contains a record ID" access="GLOBAL"/>
  <aura:attribute name="recordId" type="String" default="" access="GLOBAL"/>
  <aura:dependency resource="markup://force:navigateToSObject" type="EVENT"/>        
  <div class="container">
    <aura:if isTrue="{!v.recordId == ''}">
      <div class="msg">
        {!v.msg}
      </div>
      <aura:set attribute="else">
        <force:recordView recordId="{!v.recordId}"/> 
      </aura:set>
    </aura:if>
  </div>	
</aura:component>
```

```
({
  handleSelectionChanged: function(component, event, helper) {
    var params = event.getParams();
    var payload = params.payload;
    if (payload) {
      var step = payload.step;
      var data = payload.data;
      data.forEach(function(obj) {
        for (var k in obj) {
          if (k === 'Id') {
            component.set("v.recordId", obj[k]);                        
          }
        }
      });
    }
  }
})
```

```
.THIS.container {
  min-height: 650px;
  min-width: 200px;
  height: 100%;
  width: 100%;
  border: 1px solid #A0A0A0;
  margin: 5px auto;    
}
     
.THIS .msg {
  vertical-align: middle;
  text-align: center;
  margin: 2em auto;
}
```

```
<design:component label="Record View">
  <design:attribute name="recordId" label="Record ID" description="ID of the record"/>
  <design:attribute name="msg" label="Message" description="Message to display"/>
</design:component>
```

## Related Topics

- CRM Analytics Aura Events - Update Event (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example1.htm)
- CRM Analytics Aura Events - Discover Event (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example_discoverdashboard.htm)
- CRM Analytics Aura Events - Discover Response Event (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example_discoverresponse.htm)
- CRM Analytics Aura Events - Page Change Event (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example_pagechange.htm)
- CRM Analytics Aura Events - Asset Loaded Event (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example_assetloaded.htm)
