---
title: "lightning:omniChannelWorkDeclined"
domain: service-cloud
topic: lightningomnichannelworkdeclined
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:57.269Z
estimatedTokens: 148
keywords: [lightning, omniChannelWorkDeclined, Indicates, agent, declined, work, assignment., Response, Example]
---

# lightning:omniChannelWorkDeclined

> Indicates that an agent has declined a work
            assignment.

# lightning:omniChannelWorkDeclined

Indicates that an agent has declined a work assignment.

## Response

| Name | Type | Description |
| --- | --- | --- |
| workItemId | string | The ID of the object that’s routed through Omni-Channel. This object becomes a work assignment with a workId when it’s assigned to an agent. |
| workId | string | The ID of a work assignment that’s routed to an agent. |

## Example

This example prints work details to the browser’s developer console when an Omni-Channel user declines a work assignment.

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
    <aura:handler event="lightning:omniChannelWorkDeclined" action="{! c.onWorkDeclined }"/>
</aura:component>
```

```
({
    onWorkDeclined : function(component, event, helper) {
        console.log("Work declined.");
        var workItemId = event.getParam('workItemId');
        var workId = event.getParam('workId');
        console.log(workItemId);
        console.log(workId);
    }, 
})
```
