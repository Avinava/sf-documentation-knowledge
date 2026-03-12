---
title: "getAgentWorkload for Lightning Experience"
domain: service-cloud
topic: getagentworkload-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.719Z
estimatedTokens: 229
keywords: [getAgentWorkload, Lightning, Experience, Retrieves, agent’s, currently, assigned, workload., reroute, work, agents., Sample, Code, Response]
---

# getAgentWorkload for Lightning Experience

> Retrieves an agent’s currently assigned workload. Use this method to reroute work to
        available agents.

# getAgentWorkload for Lightning Experience

Retrieves an agent’s currently assigned workload. Use this method to reroute work to available agents.

## Sample Code

Component code:

```

```

Controller code:

```

```

## Response

This method returns a promise that, upon success, resolves to an object containing the following fields.

| Name | Type | Description |
| --- | --- | --- |
| configuredCapacity | number | The agent’s configured primary capacity (work that’s assigned to the current user) through Presence Configuration. |
| currentWorkload | number | The agent’s currently assigned primary workload. |
| configuredInterruptibleCapacity | Number | Indicates the agent’s configured interruptible capacity (that is, work that’s assigned to the current user) through Presence Configuration. |
| currentInterruptibleWorkload | Number | Indicates the agent’s currently assigned interruptible workload. |

## Code Examples

```apex
<aura:component implements="flexipage:availableForAllPageTypes" access="global" >
    <lightning:omniToolkitAPI aura:id="omniToolkit" />
    <lightning:button label="Get workload" onclick="{! c.getAgentWorkload }" /> 
</aura:component>
```

```
({
    getAgentWorkload: function(cmp, evt, hlp) {
        var omniAPI = cmp.find("omniToolkit");
        omniAPI.getAgentWorkload().then(function(result) {
            console.log('Retrieved Agent Configured Capacity and Current Workload successfully');
            console.log('Agent\'s configured capacity is: ' + result.configuredCapacity);
            console.log('Agent\'s currently assigned workload is: ' + result.currentWorkload);
        }).catch(function(error) {
            console.log(error);
        });
    }
})
```
