---
title: "setPanelWidth() for Lightning Experience for Lightning
   Experience"
domain: service-cloud
topic: setpanelwidth-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.028Z
estimatedTokens: 255
keywords: [setPanelWidth, Lightning, Experience, utility, panel’s, width, isn’t, Web, Components, LWC, Arguments, Aura, Sample, Code]
---

# setPanelWidth() for Lightning Experience for Lightning
   Experience

> Sets a utility panel’s width. This method isn’t supported for Lightning Web Components
  (LWC).

# setPanelWidth() for Lightning Experience for Lightning Experience

Sets a utility panel’s width. This method isn’t supported for Lightning Web Components (LWC).

For LWC usage, see [updatePanel()](atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_updatePanel.htm "Specifies a label and icon on the utility panel, and provides a height and width for the panel. This method is available for Lightning Web Components (LWC) only.").

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| utilityId | string | The ID of the utility of which to set the width. Optional when called within a utility. |
| widthPX | integer | The width of the utility panel in pixels. |

## Aura Components Sample Code

This component, when added to a single-column Lightning page used in a utility bar, sets the width of the utility panel to 800 pixels when the button is pressed.

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
    <lightning:button label="Set Panel Width" onclick="{! c.handleSetPanelWidth }" />
</aura:component>
```

```
({
    handleSetPanelWidth : function(component, event, helper) {
        var utilityAPI = component.find("utilitybar");
        utilityAPI.setPanelWidth({
            widthPX: 800
        });
    }
})
```

## Related Topics

- updatePanel() (atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_updatePanel.htm)
