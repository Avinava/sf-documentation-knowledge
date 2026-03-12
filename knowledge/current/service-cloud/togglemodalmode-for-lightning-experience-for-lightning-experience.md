---
title: "toggleModalMode() for Lightning Experience for Lightning Experience"
domain: service-cloud
topic: togglemodalmode-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.994Z
estimatedTokens: 282
keywords: [toggleModalMode, Lightning, Experience, Toggles, modal, mode, utility., While, overlay, blocks, users, console, while, utility, panel, visible., isn’t, supported, Web, Components]
---

# toggleModalMode() for Lightning Experience for Lightning Experience

> Toggles modal mode for a utility. While in modal mode, an overlay blocks users from
  using the console while the utility panel is visible. This method isn’t supported for Lightning
  Web Components (LWC).

# toggleModalMode() for Lightning Experience for Lightning Experience

Toggles modal mode for a utility. While in modal mode, an overlay blocks users from using the console while the utility panel is visible. This method isn’t supported for Lightning Web Components (LWC).

For LWC usage, see [enableModal()](atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_enableModal.htm "Toggles modal mode for a utility. While in modal mode, an overlay blocks users from using the console while the utility panel is visible. This method is available for Lightning Web Components (LWC) only.").

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| utilityId | string | The ID of the utility to open. Optional when called within a utility. |
| enableModalMode | boolean | Whether to enable modal mode. |

## Aura Components Sample Code

This component, when added to a single-column Lightning page used in a utility bar, has a button that, when pressed, toggles modal mode.

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
    <lightning:button label="Toggle Modal Mode" onclick="{! c.handleToggleModalMode }" />
</aura:component>
```

```
({
    handleToggleModalMode : function(component, event, helper) {
        var utilityAPI = component.find("utilitybar");
        utilityAPI.toggleModalMode({
            enableModalMode: true
        });
    }
})
```

## Related Topics

- enableModal() (atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_enableModal.htm)
