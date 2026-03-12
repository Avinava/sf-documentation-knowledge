---
title: "ConnectApi.DatacloudPurchaseUsage"
domain: apex-reference
topic: connectapidatacloudpurchaseusage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:26.997Z
estimatedTokens: 207
keywords: [ConnectApi.DatacloudPurchaseUsage, Information, Data.com, point, usage, monthly, list, pool, users.]
---

# ConnectApi.DatacloudPurchaseUsage

> Information about Data.com point usage for monthly
      and list pool users.

# ConnectApi.DatacloudPurchaseUsage

Information about Data.com point usage for monthly and list pool users.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| listpoolCreditsAvailable | Integer | The points or credits that are available in a pool of credits for your organization. This pool of credits can be used by any List Pool User in your organization. | 32.0 |
| listpoolCreditsUsed | Integer | The points or credits that have been used from a pool of credits that are used by List Pool Users to purchase records. | 32.0 |
| monthlyCreditsAvailable | Integer | The total credits that are assigned to a Monthly User. Unused credits expire at the end of each month. | 32.0 |
| monthlyCreditsUsed | Integer | The credits that are used by a Monthly User for the current month. | 32.0 |

## Related Topics

- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
