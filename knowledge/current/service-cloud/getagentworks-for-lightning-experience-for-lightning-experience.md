---
title: "getAgentWorks for Lightning Experience for Lightning
            Experience"
domain: service-cloud
topic: getagentworks-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.884Z
estimatedTokens: 198
keywords: [getAgentWorks, Lightning, Experience, work, items, assigned, agent, open, agent’s, workspace, Sample, Code]
---

# getAgentWorks for Lightning Experience for Lightning
            Experience

> Returns a list of work items that are assigned to an agent and open in the agent’s
        workspace.

# getAgentWorks for Lightning Experience for Lightning Experience

Returns a list of work items that are assigned to an agent and open in the agent’s workspace.

## Sample Code

Component code:

```

```

Controller code:

```

```

## Response

This method returns a promise that, upon success, resolves to an array of work objects, containing the following fields.

| Name | Type | Description |
| --- | --- | --- |
| workItemId | String | The ID of the object that’s routed through Omni-Channel. This object becomes a work assignment with a workId when it’s assigned to an agent. |
| workId | String | The ID of a work assignment that’s routed to an agent. |
| isEngaged | Boolean | Indicates whether an agent is working on a work item that’s been assigned to them (true) or not (false). |

## Code Examples

```apex
<aura:component implements="flexipage:availableForAllPageTypes" access="global" >
    <lightning:omniToolkitAPI aura:id="omniToolkit" />
    <lightning:button label="Get Agent works" onclick="{! c.getAgentWorks }" /> 
</aura:component>
```

```
({
    getAgentWorks: function(cmp, evt, hlp) {
        var omniAPI = cmp.find("omniToolkit");
        omniAPI.getAgentWorks().then(function(result) {
            var works = JSON.parse(result.works);
            console.log('First Agent Work ID is: ' +  works[0].workId);
            console.log('Assigned Entity Id of the first Agent Work is: ' + works[0].workItemId);
            console.log('Is first Agent Work Engaged: ' + works[0].isEngaged);
        }).catch(function(error) {
            console.log(error);
        });
    }
})
```
