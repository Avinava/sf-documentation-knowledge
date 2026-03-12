---
title: "VPL-CreateInteractionTopic"
domain: media-developer-guide
topic: vpl-createinteractiontopic
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.198Z
estimatedTokens: 98
keywords: [VPL-CreateInteractionTopic, Omnistudio, Data, Mapper, agent, console, load, interaction, topic, account, Sample, Input, Output]
---

# VPL-CreateInteractionTopic

> This Omnistudio Data Mapper is used in the agent console to
    load the interaction topic ID for an account.

# VPL-CreateInteractionTopic

This Omnistudio Data Mapper is used in the agent console to load the interaction topic ID for an account.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| itemId | Required |

## Sample Output

```

```

## Called By

-   Workflow: Agent console; Customer Topic

    -   Integration Procedure: VPL-CreateCustomerInteractionTopicInOS

## Code Examples

```
{
  "interactionId": "a1S4W000006A2DPUA0",
  "outcome": "Initiated",
  "process": "Manage Features"
}
```

```
1- vlocity_cmt__CustomerInteractionTopic__c: a1R4W000004cxQBUAY
```
