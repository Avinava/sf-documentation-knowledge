---
title: "lightning:omniChannelWorkClosed"
domain: service-cloud
topic: lightningomnichannelworkclosed
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:55.394Z
estimatedTokens: 160
keywords: [lightning, omniChannelWorkClosed, status, AgentWork, changed, Closed]
---

# lightning:omniChannelWorkClosed

> Indicates that the status of an AgentWork object is
            changed to Closed.

# lightning:omniChannelWorkClosed

Indicates that the status of an AgentWork object is changed to Closed.

## Response

| Name | Type | Description |
| --- | --- | --- |
| workItemId | string | The ID of the object that’s routed through Omni-Channel. This object becomes a work assignment with a workId when it’s assigned to an agent. |
| workId | string | The ID of a work assignment that’s routed to an agent. |

## Example

This example prints work details to the browser’s developer console when an Omni-Channel user closes a tab in the console that’s associated with a work item.

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
    <aura:handler event="lightning:omniChannelWorkClosed" action="{! c.onWorkClosed }"/>
</aura:component>
```

```
({
    onWorkClosed : function(component, event, helper) {
        console.log("Work closed.");
        var workItemId = event.getParam('workItemId');
        var workId = event.getParam('workId');
        console.log(workItemId);
        console.log(workId);
    }, 
})
```
