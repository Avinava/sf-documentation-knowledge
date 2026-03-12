---
title: "VPL_UpdateInteractionTopics"
domain: media-developer-guide
topic: vplupdateinteractiontopics
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.225Z
estimatedTokens: 94
keywords: [VPL_UpdateInteractionTopics, Integration, Procedure, interaction, topics, VPL, _UpdateInteractionTopics, Sample, Input, Output, Calls]
---

# VPL_UpdateInteractionTopics

> This Integration Procedure is used to update interaction
      topics.

# VPL\_UpdateInteractionTopics

This Integration Procedure is used to update interaction topics.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| interactionTopicId | Required |
| outcome | Required |

## Sample Output

```

```

## Called By

-   Flows:

    -   Agent console: Home page


## Calls

-   Data Mapper: VPL-UpdateInteractionTopic

## Code Examples

```
{
    "interactionTopicId": "a1R5w000006mvWFEAY",
    "outcome": "Verified"
}
```

```
{
  "ineractionStatus": {
    "UpsertSuccess": true,
    "vlocity_cmt__Outcome__c": "Verified",
    "Id": "a154x000000f4gMAAQ"
  }
}
```
