---
title: "lightning:omniChannelLogout"
domain: service-cloud
topic: lightningomnichannellogout
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:55.378Z
estimatedTokens: 124
keywords: [lightning, omniChannelLogout, agent, logged, Omni-Channel]
---

# lightning:omniChannelLogout

> Indicates that an agent has logged out of
            Omni-Channel.

# lightning:omniChannelLogout

Indicates that an agent has logged out of Omni-Channel.

## Response

| Name | Type | Description |
| --- | --- | --- |
| reason | string | The reason why the agent is logged out. Possible values are:DuplicateLoginDuplicateLoginInSameBrowserMaintenanceLogoutOmniSupervisorLogout |

## Example

This example prints a line to the browser’s developer console when an Omni-Channel user logs out of Omni-Channel.

Component code:

```

```

Controller code:

```

```

## Code Examples

```apex
<aura:component implements="flexipage:availableForAllPageTypes" access="global" >
    <lightning:omniToolkitAPI aura:id="omniToolkit" />  
    <aura:handler event="lightning:omniChannelLogout" action="{! c.onLogout }"/>
</aura:component>
```

```
({
    onLogout : function(component, event, helper) {
        console.log("Logout success.");
        var reason = event.getParam('reason');
        console.log(reason);
    }, 
})
```
