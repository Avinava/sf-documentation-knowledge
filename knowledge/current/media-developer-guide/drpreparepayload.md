---
title: "DRPreparePayload"
domain: media-developer-guide
topic: drpreparepayload
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.032Z
estimatedTokens: 115
keywords: [DRPreparePayload, Omnistudio, Data, Mapper, agent, console, transform, itemI, array, Change, Base, workflow, Sample, Input, Output]
---

# DRPreparePayload

> This Omnistudio Data Mapper is used in the agent console to
    transform the itemI D list in an array format in the Change Base workflow.

# DRPreparePayload

This Omnistudio Data Mapper is used in the agent console to transform the itemI D list in an array format in the Change Base workflow.

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

-   Workflow: Agent console Change Base Package
    -   Omniscript: vpls360csrChangeBasePackage
        -   Integration Procedure: VPL360\_CsrBasePackPosttocart

s

## Code Examples

```
{
  "itemId": "01u4W00000B99DtQAJ"
}
```

```
{
  "items": [
    {
      "itemId": "01u4W00000B99DtQAJ"
    }
  ]
}
```
