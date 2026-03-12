---
title: "login for Lightning Experience for Lightning
            Experience"
domain: service-cloud
topic: login-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.911Z
estimatedTokens: 132
keywords: [login, Lightning, Experience, Logs, agent, Omni-Channel, specific, presence, status, Arguments, Sample, Code]
---

# login for Lightning Experience for Lightning
            Experience

> Logs an agent in to Omni-Channel with a specific presence status.

# login for Lightning Experience for Lightning Experience

Logs an agent in to Omni-Channel with a specific presence status.

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| statusId | string | The ID of the presence status. Agents must be given access to this presence status through their associated profile or permission set. |

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
    <lightning:button label="Login" onclick="{! c.login }" />
</aura:component>
```

```
({
    login: function(cmp, evt, hlp) {
        var omniAPI = cmp.find("omniToolkit");
        omniAPI.login({statusId: "0N5xx0000000001"}).then(function(result) {
            if (result) {
                console.log("Login successful");
            } else {
                console.log("Login failed");
            }
        }).catch(function(error) {
            console.log(error);
        });
    }
})
```
