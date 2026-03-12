---
title: "VPL-CreateCustomerInteractionTopicInOS"
domain: media-developer-guide
topic: vpl-createcustomerinteractiontopicinos
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.195Z
estimatedTokens: 130
keywords: [VPL-CreateCustomerInteractionTopicInOS, Integration, Procedure, creates, topic, customer, interaction, Sample, Input, Output, Calls]
---

# VPL-CreateCustomerInteractionTopicInOS

> This Integration Procedure creates a topic ID for a customer
                      interaction.

# VPL-CreateCustomerInteractionTopicInOS

This Integration Procedure creates a topic ID for a customer interaction.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| interactionId | Required |
| outcome | Required |
| process | Required |
| reason | Required |
| subscriptionId | Required |
| VLocityNoRootNode | Required |
| ws | Required |

## Sample Output

```

```

## Called By

-   Flows:

    -   Agent console: Customer topic


## Calls

-   Data Mapper: VPL-CreateInteractionTopic

## Code Examples

```
{
    "VLocityNoRootNode": {},
    "interactionId": "a1S4W000006A1aIUAS",
    "outcome": "Canceled",
    "process": "Buy Add-On",
    "reason": "",
    "subscriptionId": "",
    "ws": "/lightning/r/vlocity_cmt__CustomerInteraction__c/a1S4W000006A1aIUAS/view"
}
```

```
{
  "AccountId": "",
  "ContactId": "",
  "interactionId": "a1S4W000006A1aIUAS",
  "interactionTopicId": "a1R4W000004cw9UUAQ"
}
```
