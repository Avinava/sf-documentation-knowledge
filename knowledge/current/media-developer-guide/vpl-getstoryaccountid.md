---
title: "VPL-GetStoryAccountId"
domain: media-developer-guide
topic: vpl-getstoryaccountid
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.219Z
estimatedTokens: 100
keywords: [VPL-GetStoryAccountId, Omnistudio, Data, Mapper, agent, console, fetch, account, user, context, customer, story, Sample, Input, Output]
---

# VPL-GetStoryAccountId

> This Omnistudio Data Mapper is used in the agent console
        to fetch the account ID for a user based on the context ID of the customer
        story.

# VPL-GetStoryAccountId

This Omnistudio Data Mapper is used in the agent console to fetch the account ID for a user based on the context ID of the customer story.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| Id | Required |

## Sample Output

```

```

## Called By

-   Workflow: Agent console Customer Story

    -   Integration Procedure: vpls360csr\_GetUserStory

## Code Examples

```
{
    "Id": "a1S4W000006A2DPUA0"
}
```

```
{
  "AccountId": "0014W00002BvqD1QAJ"
}
```
