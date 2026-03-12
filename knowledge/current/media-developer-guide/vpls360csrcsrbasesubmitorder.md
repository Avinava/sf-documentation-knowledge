---
title: "vpls360csr_CsrBaseSubmitOrder"
domain: media-developer-guide
topic: vpls360csrcsrbasesubmitorder
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:54.277Z
estimatedTokens: 130
keywords: [vpls360csr_CsrBaseSubmitOrder, Integration, Procedure, changes, order, created, agent, console, changing, base, package, subscriber, vpls360csr, _CsrBaseSubmitOrder, Sample]
---

# vpls360csr_CsrBaseSubmitOrder

> This Integration Procedure changes an order created in the
    agent console while changing the base package for a subscriber.

# vpls360csr\_CsrBaseSubmitOrder

This Integration Procedure changes an order created in the agent console while changing the base package for a subscriber.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| cartId | Required |

## Sample Output

```

```

## Called By

-   Flows:

    -   Agent console: Change Base Package

-   Components:

    -   Omniscript: vpls360csrChangeBasePackage


## Calls

-   Remote Action:

    -   Call: vlocity\_cmt.CPQAppHandler

    -   Method: checkout

## Code Examples

```
{
    "cartId": "8014W000000lIYFQA2"
}
```

```
{
  "confirm": {
    "records": [
      {
        "contextOrderId": "8014W000000lIYFQA2",
        "displaySequence": -1,
        "messages": []
      }
    ],
    "messages": [
      {
        "message": "Submission of order 8014W000000lIYFQA2 was successful.",
        "severity": "INFO",
        "code": "200"
      }
    ],
    "totalSize": 1
  }
}
```
