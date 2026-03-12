---
title: "declineAgentWork for Lightning Experience for
            Lightning Experience"
domain: service-cloud
topic: declineagentwork-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.681Z
estimatedTokens: 129
keywords: [declineAgentWork, Lightning, Experience, Declines, work, item, that’s, assigned, agent., Arguments, Sample, Code, Response]
---

# declineAgentWork for Lightning Experience for
            Lightning Experience

> Declines a work item that’s assigned to an agent.

# declineAgentWork for Lightning Experience for Lightning Experience

Declines a work item that’s assigned to an agent.

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| workId | string | The ID of the work item that the agent declines. |
| declineReason | string | The reason that the agent declined the work request. |

## Sample Code

Component code:

```

```

Controller code:

```

```

## Response

This method returns a promise that, upon success, resolves to true and is rejected on error.

## Code Examples

```apex
<aura:component implements="flexipage:availableForAllPageTypes" access="global" >
    <lightning:omniToolkitAPI aura:id="omniToolkit" />
    <lightning:button label="Decline" onclick="{! c.declineWork }" />        
</aura:component>
```

```
({
    declineWork: function(cmp, evt, hlp) {
        var omniAPI = cmp.find("omniToolkit");
        omniAPI.getAgentWorks().then(function(result) {
            var works = JSON.parse(result.works);
            var work = works[0];
            omniAPI.declineAgentWork({workId: work.workId}).then(function(res) {
                if (res) {
                    console.log("Declined work successfully");
                } else {
                    console.log("Decline work failed");
                }
            }).catch(function(error) {
                console.log(error);
            });
        });        
    }
})
```
