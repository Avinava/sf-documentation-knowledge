---
title: "lowerAgentWorkFlag for Lightning Experience for
            Lightning Experience"
domain: service-cloud
topic: loweragentworkflag-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.826Z
estimatedTokens: 239
keywords: [lowerAgentWorkFlag, Lightning, Experience, Lowers, flag, agent, work, item., Arguments, Sample, Code, Response, Note]
---

# lowerAgentWorkFlag for Lightning Experience for
            Lightning Experience

> Lowers a flag for this agent work item.

# lowerAgentWorkFlag for Lightning Experience for Lightning Experience

Lowers a flag for this agent work item.

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| workId | string | The ID of the work item to lower the flag on. |

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
    <lightning:button label="Lower Flag" onclick="{! c.lowerFlag }" /> 
</aura:component>
```

```
({
lowerFlag: function(cmp, evt, hlp) {
    var omniAPI = cmp.find("omniToolkit");
    omniAPI.getAgentWorks().then(function(result) {           
        var works = JSON.parse(result.works);
        var work = works[0];
        omniAPI.lowerAgentWorkFlag({workId: work.workId}).then(function(res) {
            if (res) {
                console.log("Flag lowered successfully");
            } else {
                console.log("Flag lower failed");
            }
        }).catch(function(error) {
            console.log(error);
        });
    });        
}
})
```
