---
title: "closeAgentWork for Lightning Experience for
            Lightning Experience"
domain: service-cloud
topic: closeagentwork-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.677Z
estimatedTokens: 123
keywords: [closeAgentWork, Lightning, Experience, Changes, status, work, item, Closed, removes, list, items, Omni-Channel, utility., Arguments, Sample, Code, Response]
---

# closeAgentWork for Lightning Experience for
            Lightning Experience

> Changes the status of a work item to Closed and removes it from the list of
        work items in the Omni-Channel utility.

# closeAgentWork for Lightning Experience for Lightning Experience

Changes the status of a work item to *Closed* and removes it from the list of work items in the Omni-Channel utility.

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| workId | string | The ID of the work item that’s closed. |

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
    <lightning:button label="Close" onclick="{! c.closeWork }" /> 
</aura:component>
```

```
({
    closeWork: function(cmp, evt, hlp) {
        var omniAPI = cmp.find("omniToolkit");
        omniAPI.getAgentWorks().then(function(result) {
            var works = JSON.parse(result.works);
            var work = works[0];
            omniAPI.closeAgentWork({workId: work.workId}).then(function(res) {
                if (res) {
                    console.log("Closed work successfully");
                } else {
                    console.log("Close work failed");
                }
            }).catch(function(error) {
                console.log(error);
            });
        });        
    }        
})
```
