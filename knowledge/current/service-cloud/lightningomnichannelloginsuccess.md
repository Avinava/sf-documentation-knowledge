---
title: "lightning:omniChannelLoginSuccess"
domain: service-cloud
topic: lightningomnichannelloginsuccess
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:57.243Z
estimatedTokens: 109
keywords: [lightning, omniChannelLoginSuccess, Indicates, agent, logged, Omni-Channel, successfully., Response, Example]
---

# lightning:omniChannelLoginSuccess

> Indicates that an agent has been logged into
            Omni-Channel successfully.

# lightning:omniChannelLoginSuccess

Indicates that an agent has been logged into Omni-Channel successfully.

## Response

| Name | Type | Description |
| --- | --- | --- |
| statusId | string | The ID of the agent’s current presence status. |

## Example

This example prints a line to the browser’s developer console when an Omni-Channel user logs into Omni-Channel successfully.

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
    <aura:handler event="lightning:omniChannelLoginSuccess" action="{! c.onLoginSuccess }"/>
</aura:component>
```

```
({
    onLoginSuccess : function(component, event, helper) {
        console.log("Login success.");
        var statusId = event.getParam('statusId');
        console.log(statusId);
    }, 
})
```
