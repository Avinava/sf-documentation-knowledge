---
title: "setServicePresenceStatus for Lightning Experience for Lightning Experience"
domain: service-cloud
topic: setservicepresencestatus-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.073Z
estimatedTokens: 289
keywords: [setServicePresenceStatus, Lightning, Experience, agent's, presence, status, particular, agent, already, logged, log, removes, calls, Arguments, Sample]
---

# setServicePresenceStatus for Lightning Experience for Lightning Experience

> Sets an agent's presence status to a status with a particular ID. If the specified
        agent is not already logged in, we log in the agent with the presence status. This method
        removes the need for you to make more calls.

# setServicePresenceStatus for Lightning Experience for Lightning Experience

Sets an agent's presence status to a status with a particular ID. If the specified agent is not already logged in, we log in the agent with the presence status. This method removes the need for you to make more calls.

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| statusId | string | The ID of the presence status to which you want to set the agent. Agents must be given access to this presence status through their associated profile or permission set. |

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
| statusName | string | The name of the agent’s current presence status. |
| statusApiName | string | The API name of the agent’s current presence status. |
| statusId | string | The ID of the agent’s current presence status. |
| channels | JSON string of channel objects | Returns the IDs and API names of the channels associated with the presence status. |

## Code Examples

```apex
<aura:component implements="flexipage:availableForAllPageTypes" access="global" >
    <lightning:omniToolkitAPI aura:id="omniToolkit" />
    <lightning:button label="Set Status" onclick="{! c.setStatus }" />
</aura:component>
```

```
({
    setStatus: function(cmp, evt, hlp) {
        var omniAPI = cmp.find("omniToolkit");
        omniAPI.setServicePresenceStatus({statusId: "0N5xx0000000002"}).then(function(result) {
            console.log('Current statusId is: ' + result.statusId);
            console.log('Channel list attached to this status is: ' + result.channels); 
        }).catch(function(error) {
            console.log(error);
        });
    }
})
```
