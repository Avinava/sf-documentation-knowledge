---
title: "b2bExpress_SubOrders API"
domain: esm-developer-guide
topic: b2bexpresssuborders-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:26.896Z
estimatedTokens: 40
keywords: [b2bExpress_SubOrders, API, sub-orders, quote, member, b2bExpress, _SubOrders, URI, HTTP]
---

# b2bExpress_SubOrders API

> Create sub-orders for a given quote member.

# b2bExpress\_SubOrders API

Create sub-orders for a given quote member.

## URI

```

```

## HTTP Method

POST

## Request

```

```

## Response

```

```

## Code Examples

```
/services/apexrest/vlocity_cmt/v1/integrationprocedure/b2bExpress_SubOrders/
```

```
{
	"AccountId": "0014x000002P0arAAC",
	"MasterOrderId": "8014x000000QEldAAG",
	"QuoteId": "0Q04x000000YcYbCAK",
	"QuoteMember": {
		"City": "Gaithersburg",
		"Country": "United States",
		"Id": "a4t4x000000cxPgAAI",
		"Name": "7769 Nec Street",
		"QuoteLineItems": [{
			"Id": "0QL4x000000Z0OmGAK"
		}, {
			"Id": "0QL4x000000Z0OnGAK"
		}, {
			"Id": "0QL4x000000Z0OoGAK"
		}, {
			"Id": "0QL4x000000Z0OpGAK"
		}, {
			"Id": "0QL4x000000Z0OqGAK"
		}, {
			"Id": "0QL4x000000Z0OrGAK"
		}, {
			"Id": "0QL4x000000Z0OsGAK"
		}, {
			"Id": "0QL4x000000Z0OtGAK"
		}, {
			"Id": "0QL4x000000Z0OuGAK"
		}],
		"State": "MD"
	},
	"SARecordTypeId": "0124x000000PXJLAA4",
	"SORecordTypeId": "0124x000000PXJUAA4"
}
```

```
{
	"SubOrderCreated": {
		"RecordId": "8014x000000QEldAAG"
	}
}
```
