---
title: "disableUtilityPopOut() for Lightning Experience for
            Lightning Experience"
domain: service-cloud
topic: disableutilitypopout-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.791Z
estimatedTokens: 318
keywords: [disableUtilityPopOut, Lightning, Experience, Disables, pop-out, utility, isn’t, Web, Components, LWC, Arguments, Aura, Sample, Code]
---

# disableUtilityPopOut() for Lightning Experience for
            Lightning Experience

> Disables pop-out for a utility. This method isn’t supported for Lightning Web
        Components (LWC).

# disableUtilityPopOut() for Lightning Experience for Lightning Experience

Disables pop-out for a utility. This method isn’t supported for Lightning Web Components (LWC).

For LWC usage, see [enablePopout()](atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_enablePopout.htm "Toggles pop-out mode on a utility. Enabling pop-out mode on a utility displays the utility in a separate child window. This method is available for Lightning Web Components (LWC) only.").

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| utilityId | string | The ID of the utility to disable pop-out for. Optional when called within a utility. |
| disabled | boolean | If true, disables pop-out and removes the pop-out icon for a utility that isn’t popped out. If the utility is already popped out, the pop-out icon is disabled.If disabledText is provided, the pop-out icon isn’t removed, but it’s disabled. |
| disabledText | string | Hover text for the pop-out and pop-in icons if disabled is set to true. Optional. |

## Aura Components Sample Code

This component has a button that, when pressed, disables utility pop-out.

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
    <lightning:button label="Disable Utility Pop-Out" onclick="{! c.handleDisableUtilityPopOut }" />
</aura:component>
```

```
({
    handleDisableUtilityPopOut : function(component, event, helper) {
        var utilityAPI = component.find("utilitybar");
        utilityAPI.disableUtilityPopOut({
            disabled: true,
            disabledText: "Pop-out is disabled"
        });
    }
})
```

## Related Topics

- enablePopout() (atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_enablePopout.htm)
