---
title: "logout for Lightning Experience for Lightning
            Experience"
domain: service-cloud
topic: logout-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.822Z
estimatedTokens: 68
keywords: [logout, Lightning, Experience, Logs, agent, Omni-Channel., Sample, Code, Response]
---

# logout for Lightning Experience for Lightning
            Experience

> Logs an agent out of Omni-Channel.

# logout for Lightning Experience for Lightning Experience

Logs an agent out of Omni-Channel.

## Sample Code

Component code:

```

```

Controller code:

```

```

## Response

This method returns a promise that, upon success, resolves to true and is rejected on error.

## Code Examples

```apex
<aura:component implements="flexipage:availableForAllPageTypes" access="global" >
    <lightning:omniToolkitAPI aura:id="omniToolkit" />
    <lightning:button label="Logout" onclick="{! c.logout }" />
</aura:component>
```

```
({
    logout: function(cmp, evt, hlp) {
        var omniAPI = cmp.find("omniToolkit");
        omniAPI.logout().then(function(result) {
            if (result) {
                console.log("Logout successful");
            } else {
                console.log("Logout failed");
            }
        }).catch(function(error) {
            console.log(error);
        });
    }
})
```
