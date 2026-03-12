---
title: "Sample Custom Components for Forecasts Pages"
domain: lightning
topic: sample-custom-components-for-forecasts-pages
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.266Z
estimatedTokens: 223
keywords: [Sample, Custom, Components, Forecasts, Pages, Review, samples, Aura, implement, Lightning, don’t, support, any, standard, events]
---

# Sample Custom Components for Forecasts Pages

> Review samples of custom Aura components that you can implement in Lightning
        forecasts pages. Lightning forecasts pages don’t support any standard or custom events
        published from custom components.

# Sample Custom Components for Forecasts Pages

Review samples of custom Aura components that you can implement in Lightning forecasts pages. Lightning forecasts pages don’t support any standard or custom events published from custom components.

Here’s an example of a custom Aura component you can include in your Lightning forecasts page. To appear on the page, custom Aura components implement lightning:availableForForecastingPage. This component applies the context of the selected forecast.

```

```

The component calls a JavaScript controller function, handleMessage(), on initialization.

```

```

#### See Also

-   [*Lightning Web Components Dev Guide*: Use Components in Salesforce Targets](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.use "Lightning Web Components Dev Guide: Use Components
    in Salesforce Targets - HTML (New Window)")

## Code Examples

```
<aura:component implements="lightning:availableForForecastingPage">
    <lightning:messageChannel type="lightning__forecasting_flexipageUpdated"
            onMessage="{!c.handleMessage}" scope="APPLICATION"/>
    
    <aura:attribute name="ownerId" type="string" default="owner"/>
    <aura:attribute name="forecastingTypeId" type="string" />
    <aura:attribute name="user" type="Object"/>
    <aura:attribute name="forecast" type="Object"/>
    <aura:handler name="init" value="{!this}" action="{!c.init}"/>

    <force:recordData aura:id="recordLoader"
    recordId="{!v.ownerId}"
    fields="Name, Email, Phone, Title"
    targetFields="{!v.user}"
    />    
    
     <force:recordData aura:id="recordLoader2"
    recordId="{!v.forecastingTypeId}"
    fields="DateType, RoleType, MasterLabel, IsAmount, IsActive"
    targetFields="{!v.forecast}"
    />    
    
    <div> 
        <lightning:card iconName="standard:user" title="{!v.user.Name}" >
            <div class="slds-p-horizontal--small">
                <p class="slds-truncate">Email : <lightning:formattedText title="Email" value="{!v.user.Email}" /></p>
                <p class="slds-truncate">Phone : <lightning:formattedText title="Phone" value="{!v.user.Phone}" /></p>
                <p class="slds-truncate">Title : <lightning:formattedText title="Title" value="{!v.user.Title}" /></p>
            </div>
        </lightning:card>
    </div>
    
    <div> 
        <lightning:card iconName="standard:forecasts" title="{!v.forecast.MasterLabel}" >
            <div class="slds-p-horizontal--small">
                <p class="slds-truncate">Role Type : <lightning:formattedText aura:id="roleType" title="RoleType" value="{!v.forecast.RoleType}" /></p>
                <p class="slds-truncate">Date Type : <lightning:formattedText title="DateType" value="{!v.forecast.DateType}" /></p>
            </div>
        </lightning:card>
    </div>
</aura:component>
```

```
({
/*
This JavaScript controller is called on component initialization.
It makes a call to the server to run the actions to display information. 
After the server returns the values, it sets the appropriate values to display 
on the client side.
*/
    handleMessage : function(cmp, message, helper) {
        // Read the message argument to get the values in the message payload
        cmp.set("v.ownerId", message.getParam("forecastingOwnerId"));
        cmp.set("v.forecastingTypeId", message.getParam("forecastingTypeId"));
        var record = cmp.find("recordLoader");
        record.set("v.recordId", cmp.get("v.ownerId"));
        record.reloadRecord();
        var record2 = cmp.find("recordLoader2");
        record2.set("v.recordId", cmp.get("v.forecastingTypeId"));
        record2.reloadRecord();
    }
})
```
