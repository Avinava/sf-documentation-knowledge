---
title: "getServicePresenceStatusId for Lightning Experience for Lightning Experience"
domain: service-cloud
topic: getservicepresencestatusid-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.799Z
estimatedTokens: 149
keywords: [getServicePresenceStatusId, Lightning, Experience, Retrieves, agent’s, current, presence, status., Sample, Code, Response]
---

# getServicePresenceStatusId for Lightning Experience for Lightning Experience

> Retrieves an agent’s current presence status.

# getServicePresenceStatusId for Lightning Experience for Lightning Experience

Retrieves an agent’s current presence status.

## Sample Code

Component code:

```

```

Controller code:

```

```

## Response

This method returns a promise that, upon success, resolves to an object, containing the following fields.

| Name | Type | Description |
| --- | --- | --- |
| statusName | string | The name of the agent’s current presence status. |
| statusApiName | string | The API name of the agent’s current presence status. |
| statusId | string | The ID of the agent’s current presence status. |

## Code Examples

```apex
<aura:component implements="flexipage:availableForAllPageTypes" access="global" >
    <lightning:omniToolkitAPI aura:id="omniToolkit" />
    <lightning:button label="Get Status" onclick="{! c.getStatus }" />
</aura:component>
```

```
({
    getStatus: function(cmp, evt, hlp) {
        var omniAPI = cmp.find("omniToolkit");
        omniAPI.getServicePresenceStatusId().then(function(result) {
            console.log('Status Id is: ' + result.statusId);
        }).catch(function(error) {
            console.log(error);
        });
    }        
})
```
