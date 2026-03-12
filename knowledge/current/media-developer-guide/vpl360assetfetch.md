---
title: "VPL360_AssetFetch"
domain: media-developer-guide
topic: vpl360assetfetch
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.101Z
estimatedTokens: 116
keywords: [VPL360_AssetFetch, Integration, Procedure, fetches, assets, products, ordered, logged, subscriber, VPL360, _AssetFetch, Sample, Input, Output, Calls]
---

# VPL360_AssetFetch

> This Integration Procedure fetches all the assets and
		products that have been ordered by the logged in subscriber.

# VPL360\_AssetFetch

This Integration Procedure fetches all the assets and products that have been ordered by the logged in subscriber.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| AccountId | Required |

## Sample Output

```

```

## Called By

-   Flows:

    -   Self care: Subscription Page

-   Components:

    -   LWC: vplS360SelfCareLanding.js


## Calls

-   Data Mapper: GetAccountAssets

-   Data Mapper: DROrderFetch

## Code Examples

```
{
	"AccountId": "0014W000021GysX"
}
```

```
{
	"AssetInfo": {
		"Asset": [{
			"TotalCost": "$30.00/Mo",
			"Recurrence": "Monthly",
			"CommitmentEndDate": "N/A",
			"BaseCancellationInProgress": false,
			"Type": "PACKAGE",
			"Subtype": "BASE",
			"ProductCode": "VPL-PlayPlus",
			"Price": "$30.00 /Mo",
			"PossibleAction": "CANCEL-ADDON",
			"Name": "Play Plus",
			"LatestBaseRecord": true,
			"DisableAction": false,
			"CustomAssetStatus": "Active",
			"BillCycleDate": "10-January-2021",
			"AssetId": "02i4W00000GQo5NQAT"
		}],
		"TotalCost": "$30.00/Mo",
		"DeviceCount": 1,
		"AddOnCount": 0
	},
	"OrderItemInfo": [{
		"orderId": "8014W000001v7LvQAI",
		"itemId": "8024W000005eZxvQAE",
		"Subtype": "SERVICE",
		"ProductCode": "VPL-ScreenPlus",
		"Price": "$10.00 /Mo",
		"PossibleAction": "REMOVE-PRODUCT",
		"Name": "Screen Plus",
		"CustomAssetStatus": "In Progress"
	}]
}
```
