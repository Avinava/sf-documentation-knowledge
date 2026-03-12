---
title: "setUtilityLabel() for Lightning Experience for
   Lightning Experience"
domain: service-cloud
topic: setutilitylabel-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.066Z
estimatedTokens: 280
keywords: [setUtilityLabel, Lightning, Experience, label, utility, text, bar, isn’t, Web, Components, LWC, Arguments, Aura, Sample, Code]
---

# setUtilityLabel() for Lightning Experience for
   Lightning Experience

> Sets the label of a utility. This text is displayed in the utility bar. This method
  isn’t supported for Lightning Web Components (LWC).

# setUtilityLabel() for Lightning Experience for Lightning Experience

Sets the label of a utility. This text is displayed in the utility bar. This method isn’t supported for Lightning Web Components (LWC).

For LWC usage, see [updateUtility() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_updateUtility.htm "Specifies a label and icon on the utility bar, and sets a utility as highlighted. This method is available for Lightning Web Components (LWC) only.").

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| utilityId | string | The ID of the utility of which to set the label. Optional when called within a utility. |
| label | string | The label of the utility displayed in the utility bar. |

## Aura Components Sample Code

This component, when added to a single-column Lightning page used in a utility bar, sets the label of the utility to “My Favorite Utility” when the button is pressed.

Component code:

```

```

Controller code:

```

```

## Response

This method returns a promise that, upon success, resolves to true.

## Code Examples

```apex
<aura:component implements="flexipage:availableForAllPageTypes" access="global" >
    <lightning:utilityBarAPI aura:id="utilitybar" />
    <lightning:button label="Set Utility Label" onclick="{! c.handleSetUtilityLabel }" />
</aura:component>
```

```
({
    handleSetUtilityLabel : function(component, event, helper) {
        var utilityAPI = component.find("utilitybar");
        utilityAPI.setUtilityLabel({
            label: "My Favorite Utility"
        });
    }
})
```

## Related Topics

- updateUtility() for Lightning Experience for Lightning Experience (atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_updateUtility.htm)
