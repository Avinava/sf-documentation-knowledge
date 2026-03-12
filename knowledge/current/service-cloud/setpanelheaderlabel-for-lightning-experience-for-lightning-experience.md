---
title: "setPanelHeaderLabel() for Lightning Experience for Lightning Experience"
domain: service-cloud
topic: setpanelheaderlabel-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.942Z
estimatedTokens: 277
keywords: [setPanelHeaderLabel, Lightning, Experience, label, utility’s, panel., displayed, utility, panel, header., isn’t, supported, Web, Components, LWC, Arguments, Aura, Sample, Code, Response]
---

# setPanelHeaderLabel() for Lightning Experience for Lightning Experience

> Sets the label of a utility’s panel. This label is displayed in the utility panel
  header. This method isn’t supported for Lightning Web Components (LWC).

# setPanelHeaderLabel() for Lightning Experience for Lightning Experience

Sets the label of a utility’s panel. This label is displayed in the utility panel header. This method isn’t supported for Lightning Web Components (LWC).

For LWC usage, see [updatePanel()](atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_updatePanel.htm "Specifies a label and icon on the utility panel, and provides a height and width for the panel. This method is available for Lightning Web Components (LWC) only.").

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| utilityId | string | The ID of the utility to set the panel header label on. Optional when called within a utility. |
| label | string | The label of the utility displayed in the panel header. |

## Aura Components Sample Code

This component, when added to a single-column Lightning page used in a utility bar, sets the label of the utility panel to “My Utility” when the button is pressed.

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
    <lightning:button label="Set Panel Header Label" onclick="{! c.handleSetPanelHeaderLabel }" />
</aura:component>
```

```
({
    handleSetPanelHeaderLabel : function(component, event, helper) {
        var utilityAPI = component.find("utilitybar");
        utilityAPI.setPanelHeaderLabel({
            label: "My Utility"
        });
    }
})
```

## Related Topics

- updatePanel() (atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_updatePanel.htm)
