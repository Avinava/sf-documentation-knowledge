---
title: "lightning:omniChannelWorkAccepted"
domain: service-cloud
topic: lightningomnichannelworkaccepted
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:55.386Z
estimatedTokens: 176
keywords: [lightning, omniChannelWorkAccepted, agent, accepted, work, assignment, automatically]
---

# lightning:omniChannelWorkAccepted

> Indicates that an agent has accepted a work
            assignment, or that a work assignment has been automatically accepted.

# lightning:omniChannelWorkAccepted

Indicates that an agent has accepted a work assignment, or that a work assignment has been automatically accepted.

## Response

| Name | Type | Description |
| --- | --- | --- |
| workItemId | string | The ID of the object that’s routed through Omni-Channel. This object becomes a work assignment with a workId when it’s assigned to an agent. |
| workId | string | The ID of a work assignment that’s routed to an agent. |

## Example

This example prints work details to the browser’s developer console when an Omni-Channel user accepts a work assignment, or when a work assignment is automatically accepted.

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
    <aura:handler event="lightning:omniChannelWorkAccepted" action="{! c.onWorkAccepted }"/>
</aura:component>
```

```
({
    onWorkAccepted : function(component, event, helper) {
        console.log("Work accepted.");
        var workItemId = event.getParam('workItemId');
        var workId = event.getParam('workId');
        console.log(workItemId);
        console.log(workId);
    }, 
})
```
