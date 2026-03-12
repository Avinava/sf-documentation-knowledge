---
title: "minimizeUtility() for Lightning Experience for Lightning Experience"
domain: service-cloud
topic: minimizeutility-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.840Z
estimatedTokens: 189
keywords: [minimizeUtility, Lightning, Experience, Minimizes, utility., isn’t, supported, Web, Components, LWC, Arguments, Aura, Sample, Code, Response]
---

# minimizeUtility() for Lightning Experience for Lightning Experience

> Minimizes a utility. This method isn’t supported for Lightning Web Components
  (LWC).

# minimizeUtility() for Lightning Experience for Lightning Experience

Minimizes a utility. This method isn’t supported for Lightning Web Components (LWC).

For LWC usage, see [minimize()](atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_minimize.htm "Minimizes a utility. This method is available for Lightning Web Components (LWC) only.").

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| utilityId | string | The ID of the utility to minimize. Optional when called within a utility. |

## Aura Components Sample Code

This component minimizes the utility when the button is pressed.

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
    <lightning:button label="Minimize Utility" onclick="{! c.handleMinimizeUtility }" />
</aura:component>
```

```
({
    handleMinimizeUtility : function(component, event, helper) {
        var utilityAPI = component.find("utilitybar");
        utilityAPI.minimizeUtility();
    }
})
```

## Related Topics

- minimize() (atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_minimize.htm)
