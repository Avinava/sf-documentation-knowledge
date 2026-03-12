---
title: "isUtilityPoppedOut() for Lightning Experience for
   Lightning Experience"
domain: service-cloud
topic: isutilitypoppedout-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.812Z
estimatedTokens: 215
keywords: [isUtilityPoppedOut, Lightning, Experience, Determines, whether, utility, popped-out, state., isn’t, supported, Web, Components, LWC, Arguments, Sample, Code, Response]
---

# isUtilityPoppedOut() for Lightning Experience for
   Lightning Experience

> Determines whether the utility is in a popped-out state. This method isn’t supported for
        Lightning Web Components (LWC).

# isUtilityPoppedOut() for Lightning Experience for Lightning Experience

Determines whether the utility is in a popped-out state. This method isn’t supported for Lightning Web Components (LWC).

To check if a utility is in a popped-out state with LWC, use [getInfo() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_getInfo.htm "Returns the state of the current utility as a utilityInfo object. This method is available for Lightning Web Components (LWC) only.").

## Arguments

None

## Sample Code

This component has a button that, when pressed, states whether the current utility is popped out or not.

Component code:

```

```

Controller code:

```

```

## Response

This method returns a promise that, upon success, resolves to true if the utility is popped out, and false otherwise.

## Code Examples

```apex
<aura:component implements="flexipage:availableForAllPageTypes" access="global" >
    <lightning:utilityBarAPI aura:id="utilitybar" />
    <lightning:button label="Is Utility popped out?" onclick="{! c.handleIsUtilityPoppedOut }" />
    <lightning:textarea label="Popped out?" aura:id="textarea" />
</aura:component>
```

```
({
    handleIsUtilityPoppedOut : function(component, event, helper) {
        var utilityBarAPI = component.find("utilitybar");
        utilityBarAPI.isUtilityPoppedOut().then(function(response) {
            component.find('textarea').set('v.value', response);
        })
        .catch(function(error) {
            console.log(error);
        });
    }
})
```

## Related Topics

- getInfo() for Lightning Experience for Lightning Experience (atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_getInfo.htm)
