---
title: "onUtilityClick() for Lightning Experience for Lightning Experience"
domain: service-cloud
topic: onutilityclick-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.940Z
estimatedTokens: 538
keywords: [onUtilityClick, Lightning, Experience, Registers, eventHandler, utility, clicked, Arguments, LWC, Sample, Code, Aura, Components]
---

# onUtilityClick() for Lightning Experience for Lightning Experience

> Registers an eventHandler for the utility. This
   eventHandler is called when the utility is
  clicked.

# onUtilityClick() for Lightning Experience for Lightning Experience

Registers an eventHandler for the utility. This eventHandler is called when the utility is clicked.

Consider the following guidelines when working with this method.

-   The method is supported in Lightning apps with standard and console navigation.
-   You can use this method to register multiple callbacks per utilityItem when executed sequentially.
-   You can’t remove registered callbacks.

## Arguments

The method provides the same arguments for both Aura Components and Lightning Web Components (LWC).

For LWC, optional parameters are passed into an object as the last argument of the method.

| Name | Type | Description |
| --- | --- | --- |
| utilityId | string | The ID of the utility for which to register the callback. Optional when called within a utility using Aura Components. Always required for LWC. |
| eventHandler | function | The JavaScript function that's called when the utility is clicked. |

## LWC Sample Code

This component handles a utility click using the EnclosingUtilityId wire adapter.

```

```

To make your component available for use in a utility bar, specify the lightning\_\_UtilityBar target in the [component’s configuration file](https://developer.salesforce.com/docs/platform/lwc/guide/use-config-for-utility-bar.html).

## LWC Response

Returns a promise that resolves to true if successful. The promise is rejected on error.

## Aura Components Sample Code

This component has a button that, when pressed, registers an eventHandler function for the enclosing utility.

Component code:

```

```

Controller code:

```

```

## Aura Components Response

This method returns a promise that, upon success, resolves to true, and is rejected on error. The eventHandler expects a response JSON object containing the following fields.

| Name | Type | Description |
| --- | --- | --- |
| utilityId | string | The ID of the utilityBar item button that was clicked. |
| panelVisible | boolean | False if the utility item panel is hidden after the button is clicked. True if the utility item panel is visible after the button is clicked. |

## Code Examples

```
import { LightningElement, wire } from 'lwc';
import { onUtilityClick, EnclosingUtilityId } from 'lightning/platformUtilityBarApi';

export default class UtilityClickExample extends LightningElement {
    @wire(EnclosingUtilityId) utilityId;

    handleUtilityClick() {
        if (!this.utilityId) {
            return;
        }
        onUtilityClick(this.utilityId, () => {
            console.log(`Utility ${this.utilityId} clicked!`);
        });
    }
}
```

```apex
<aura:component implements="flexipage:availableForAllPageTypes" access="global">
    <lightning:utilityBarAPI aura:id="utilitybar" />
    <lightning:button label="Register Event Handler" onclick="{!c.handleOnUtilityClick}"/>
</aura:component>
```

```
({
  handleOnUtilityClick: function(component, event, helper){
        var utilityBarAPI = component.find("utilitybar");
	  var eventHandler = function(response){
            console.log(response);
        };
        
        utilityBarAPI.onUtilityClick({ 
               eventHandler: eventHandler 
        }).then(function(result){
            console.log(result);
        }).catch(function(error){
        	console.log(error);
        });
    }
})
```
