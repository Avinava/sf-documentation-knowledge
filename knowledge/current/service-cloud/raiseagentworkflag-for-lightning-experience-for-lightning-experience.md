---
title: "raiseAgentWorkFlag for Lightning Experience for
            Lightning Experience"
domain: service-cloud
topic: raiseagentworkflag-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.978Z
estimatedTokens: 257
keywords: [raiseAgentWorkFlag, Lightning, Experience, Raises, flag, agent, work, item, Arguments, Sample, Code]
---

# raiseAgentWorkFlag for Lightning Experience for
            Lightning Experience

> Raises a flag for this agent work item.

# raiseAgentWorkFlag for Lightning Experience for Lightning Experience

Raises a flag for this agent work item.

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| workId | string | The ID of the work item to raise the flag on. |
| message | string | Optional. The message associated with this flag. |

## Sample Code

Component code:

```

```

Controller code:

```

```

## Response

This method returns a promise that, upon success, resolves to true and is rejected on error.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

When Omni-Channel Fallback Mode is enabled, the raise and lower flag feature isn't supported. If this method is used, it doesn’t perform any operations and always resolves to true.

#### See Also

-   [Knowledge Article: Routing Work with Omni-Channel Fallback Mode](https://help.salesforce.com/s/articleView?id=002186102&type=1&language=en_US "Knowledge Article: Routing Work with Omni-Channel Fallback Mode - HTML (New Window)")

## Code Examples

```apex
<aura:component implements="flexipage:availableForAllPageTypes" access="global" >
    <lightning:omniToolkitAPI aura:id="omniToolkit" />
    <lightning:button label="Raise Flag" onclick="{! c.raiseFlag }" /> 
</aura:component>
```

```
({
raiseFlag: function(cmp, evt, hlp) {
    var omniAPI = cmp.find("omniToolkit");
    omniAPI.getAgentWorks().then(function(result) {           
        var works = JSON.parse(result.works);
        var work = works[0];
        omniAPI.raiseAgentWorkFlag({workId: work.workId, message: "Raise Flag Message"}).then(function(res) {
            if (res) {
                console.log("Flag raised successfully");
            } else {
                console.log("Flag raise failed");
            }
        }).catch(function(error) {
            console.log(error);
        });
    });        
}
})
```
