---
title: "setPanelHeight() for Lightning Experience for Lightning
   Experience"
domain: service-cloud
topic: setpanelheight-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.938Z
estimatedTokens: 255
keywords: [setPanelHeight, Lightning, Experience, utility, panel’s, height., isn’t, supported, Web, Components, LWC, Arguments, Aura, Sample, Code, Response]
---

# setPanelHeight() for Lightning Experience for Lightning
   Experience

> Sets a utility panel’s height. This method isn’t supported for Lightning Web Components
  (LWC).

# setPanelHeight() for Lightning Experience for Lightning Experience

Sets a utility panel’s height. This method isn’t supported for Lightning Web Components (LWC).

For LWC usage, see [updatePanel()](atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_updatePanel.htm "Specifies a label and icon on the utility panel, and provides a height and width for the panel. This method is available for Lightning Web Components (LWC) only.").

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| utilityId | string | The ID of the utility of which to set the height. Optional when called within a utility. |
| heightPX | integer | The height of the utility panel in pixels. |

## Aura Components Sample Code

This component, when added to a single-column Lightning page used in a utility bar, sets the height of the utility to 500 pixels when the button is pressed.

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
    <lightning:button label="Set Panel Height" onclick="{! c.handleSetPanelHeight }" />
</aura:component>
```

```
({
    handleSetPanelHeight : function(component, event, helper) {
        var utilityAPI = component.find("utilitybar");
        utilityAPI.setPanelHeight({
            heightPX: 500
        });
    }
})
```

## Related Topics

- updatePanel() (atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_updatePanel.htm)
