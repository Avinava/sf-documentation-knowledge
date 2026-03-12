---
title: "acceptAgentWork for Lightning Experience for
            Lightning Experience"
domain: service-cloud
topic: acceptagentwork-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.627Z
estimatedTokens: 107
keywords: [acceptAgentWork, Lightning, Experience, Accepts, work, item, that’s, assigned, agent., Arguments, Sample, Code, Response]
---

# acceptAgentWork for Lightning Experience for
            Lightning Experience

> Accepts a work item that’s assigned to an agent.

# acceptAgentWork for Lightning Experience for Lightning Experience

Accepts a work item that’s assigned to an agent.

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| workId | string | The ID of the work item the agent accepts. |

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
    <lightning:button label="Accept" onclick="{! c.acceptWork }" />
</aura:component>
```

```
({
    acceptWork: function(cmp, evt, hlp) {
        var omniAPI = cmp.find("omniToolkit");
        omniAPI.getAgentWorks().then(function(result) {
            var works = JSON.parse(result.works);
            var work = works[0];
            omniAPI.acceptAgentWork({workId: work.workId}).then(function(res) {
                if (res) {
                    console.log("Accepted work successfully");
                } else {
                    console.log("Accept work failed");
                }
            }).catch(function(error) {
                console.log(error);
            });
        });        
    }
})
```
