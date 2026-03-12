---
title: "VPL-CSRGetOrderStatusfromAcc2"
domain: media-developer-guide
topic: vpl-csrgetorderstatusfromacc2
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.208Z
estimatedTokens: 101
keywords: [VPL-CSRGetOrderStatusfromAcc2, Omnistudio, Data, Mapper, agent, console, extract, order, status, account, Sample, Input, Output]
---

# VPL-CSRGetOrderStatusfromAcc2

> This Omnistudio Data Mapper is used in the agent console to
    extract the order information and status for an account.

# VPL-CSRGetOrderStatusfromAcc2

This Omnistudio Data Mapper is used in the agent console to extract the order information and status for an account.

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

-   Workflow: Agent console Orders tab

    -   Integration Procedure: VPL\_CSRGetOrderSummaryForAccount

## Code Examples

```
{
    "InteractionId": "a1S4W000006A2DPUA0"
}
```

```
{
  "Order": [
    {
      "Status": "Ready To Submit",
      "RecurringCharge": 7.5,
      "PlacedDate": "2020-12-22",
      "OrderTotal": 7.5,
      "OrderNumber": "00004888",
      "OnetimeCharge": 0,
      "LastModifiedBy": "Manju J",
      "Id": "8014W000000lIaQQAU",
      "FulfilmentStatus": "Draft",
      "CreatedBy": "Manju J",
      "Cancellable": false,
      "AccountName": "Jhonny Villiers"
    },
    {
      "Status": "Scheduled",
      "RecurringCharge": 10,
      "PlacedDate": "2020-12-21",
      "OrderTotal": 10,
      "OrderNumber": "00004881",
      "OnetimeCharge": 0,
      "LastModifiedBy": "Manju J",
      "Id": "8014W000000lIZmQAM",
      "FulfilmentStatus": "Draft",
      "CreatedBy": "Manju J",
      "Cancellable": true,
      "AccountName": "Johnny Villiers"
    }
]
}
```
