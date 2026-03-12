---
title: "VPL_CSRGetOrderSummaryForAccount"
domain: media-developer-guide
topic: vplcsrgetordersummaryforaccount
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.210Z
estimatedTokens: 94
keywords: [VPL_CSRGetOrderSummaryForAccount, Integration, Procedure, fetches, order, agent, console, VPL, _CSRGetOrderSummaryForAccount, Sample, Input, Output, Calls]
---

# VPL_CSRGetOrderSummaryForAccount

> This Integration Procedure fetches the details of an order
    from the agent console.

# VPL\_CSRGetOrderSummaryForAccount

This Integration Procedure fetches the details of an order from the agent console.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| InteractionId | Required |

## Sample Output

```

```

## Called By

-   Flows:

    -   Agent console: Orders tab.


## Calls

-   Data Mapper: VPL-CSRGetOrderStatusfromAcc2

## Code Examples

```
{
    "InteractionId": "a1S4W000006A1eAUAS"
}
```

```
{
  "OrderSummary": [
    {
      "Status": "Activated",
      "RecurringCharge": 60,
      "OrderTotal": 119,
      "OrderNumber": "00004869",
      "OrderName": "EcommerceOrder",
      "PlacedDate": "2020-12-21",
      "OrchestrationPlanId": "a2y4W0000015uJIQAY",
      "OnetimeCharge": 59,
      "LastModifiedBy": "Manju J",
      "Id": "8014W000000lIY5QAM",
      "FulfilmentStatus": "Activated",
      "CreatedBy": "Subscriber360 Site Guest User",
      "Cancellable": false,
      "AccountName": "John Day"
    }
  ]
}
```
