---
title: "getEnclosingUtilityId() for Lightning Experience for
    Lightning Experience"
domain: service-cloud
topic: getenclosingutilityid-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.755Z
estimatedTokens: 209
keywords: [getEnclosingUtilityId, Lightning, Experience, enclosing, utility, false, within, utility., isn’t, supported, Web, Components, LWC, Arguments, Aura, Sample, Code, Response]
---

# getEnclosingUtilityId() for Lightning Experience for
    Lightning Experience

> Returns the ID of the enclosing utility, or false if not within a utility. This method
        isn’t supported for Lightning Web Components (LWC).

# getEnclosingUtilityId() for Lightning Experience for Lightning Experience

Returns the ID of the enclosing utility, or false if not within a utility. This method isn’t supported for Lightning Web Components (LWC).

For LWC usage, see [EnclosingUtilityId context wire adapter](atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_enclosingUtilityId.htm "Determines if the component is within a utility. This wire adapter is available for Lightning Web Components (LWC) only.").

## Arguments

None.

## Aura Components Sample Code

This component has a button that, when pressed, retrieves the enclosing utility’s ID.

Component code:

```

```

Controller code:

```

```

## Response

This method returns a promise that, upon success, resolves to the utilityId of the enclosing utility or false if not within a utility.

## Code Examples

```apex
<aura:component implements="flexipage:availableForAllPageTypes" access="global" >
    <lightning:utilityBarAPI aura:id="utilitybar" />
    <lightning:button label="Get Enclosing Utility ID" onclick="{! c.handleGetEnclosingUtilityId }" />
</aura:component>
```

```
({
    handleGetEnclosingUtilityId : function(component, event, helper) {
        var utilityAPI = component.find("utilitybar");
        utilityAPI.getEnclosingUtilityId().then(function(utilityId) {
            console.log(utilityId);
        })
        .catch(function(error) {
            console.log(error);
        });
    }
})
```

## Related Topics

- EnclosingUtilityId context wire adapter (atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_enclosingUtilityId.htm)
