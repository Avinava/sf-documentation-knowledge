---
title: "lowerAgentWorkFlag for Lightning Experience for
            Lightning Experience"
domain: service-cloud
topic: loweragentworkflag-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.267Z
keywords: [lowerAgentWorkFlag, Lightning, Experience, Arguments, Sample, Code, Response, Note, See]
---

# lowerAgentWorkFlag for Lightning Experience for
            Lightning Experience

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