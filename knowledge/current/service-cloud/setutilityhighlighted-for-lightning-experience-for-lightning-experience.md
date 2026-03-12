---
title: "setUtilityHighlighted() for Lightning Experience for
    Lightning Experience"
domain: service-cloud
topic: setutilityhighlighted-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.057Z
estimatedTokens: 292
keywords: [setUtilityHighlighted, Lightning, Experience, utility, highlighted, giving, badge, prominent, background, color, isn’t, Web, Components, LWC, Arguments]
---

# setUtilityHighlighted() for Lightning Experience for
    Lightning Experience

> Sets a utility as highlighted, giving it a badge and a more prominent background color.
  This method isn’t supported for Lightning Web Components (LWC).

# setUtilityHighlighted() for Lightning Experience for Lightning Experience

Sets a utility as highlighted, giving it a badge and a more prominent background color. This method isn’t supported for Lightning Web Components (LWC).

For LWC usage, see [updateUtility() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_updateUtility.htm "Specifies a label and icon on the utility bar, and sets a utility as highlighted. This method is available for Lightning Web Components (LWC) only.").

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| utilityId | string | The ID of the utility to highlight. Optional when called within a utility. |
| highlighted | boolean | Whether the utility is highlighted. Makes a utility more prominent by giving it a different background color. |

## Aura Components Sample Code

This component, when added to a single-column Lightning page used in a utility bar, sets a utility as highlighted when the button is pressed.

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
    <lightning:button label="Set Utility Highlighted" onclick="{! c.handleSetUtilityHighlighted}" />
</aura:component>
```

```
({
    handleSetUtilityHighlighted : function(component, event, helper) {
        var utilityAPI = component.find("utilitybar");
        utilityAPI.setUtilityHighlighted({
            highlighted: true
        });
    }
})
```

## Related Topics

- updateUtility() for Lightning Experience for Lightning Experience (atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_updateUtility.htm)
