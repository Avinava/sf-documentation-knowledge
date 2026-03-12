---
title: "lightning:omniChannelWorkAssigned"
domain: service-cloud
topic: lightningomnichannelworkassigned
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:55.390Z
estimatedTokens: 149
keywords: [lightning, omniChannelWorkAssigned, agent, assigned, new, work, item]
---

# lightning:omniChannelWorkAssigned

> Indicates that an agent has been assigned a new work
            item.

# lightning:omniChannelWorkAssigned

Indicates that an agent has been assigned a new work item.

## Response

| Name | Type | Description |
| --- | --- | --- |
| workItemId | string | The ID of the object that’s routed through Omni-Channel. This object becomes a work assignment with a workId when it’s assigned to an agent. |
| workId | string | The ID of a work assignment that’s routed to an agent. |

## Example

This example prints work details to the browser’s developer console when an Omni-Channel user is assigned a new work item.

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
    <aura:handler event="lightning:omniChannelWorkAssigned" action="{! c.onWorkAssigned }"/>
</aura:component>
```

```
({
    onWorkAssigned : function(component, event, helper) {
        console.log("Work assigned.");
        var workItemId = event.getParam('workItemId');
        var workId = event.getParam('workId');
        console.log(workItemId);
        console.log(workId);
    }, 
})
```
