---
title: "b2bExpress_CreateSubOrder API"
domain: esm-developer-guide
topic: b2bexpresscreatesuborder-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:26.884Z
estimatedTokens: 55
keywords: [b2bExpress_CreateSubOrder, API, sub-orders, quote, member, record, sub-order, created, b2bExpress, _CreateSubOrder, URI, HTTP]
---

# b2bExpress_CreateSubOrder API

> Create sub-orders for a given quote member. This API returns the record ID of the sub-order created.

# b2bExpress\_CreateSubOrder API

Create sub-orders for a given quote member. This API returns the record ID of the sub-order created.

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
/services/apexrest/vlocity_cmt/v1/integrationprocedure/b2bExpress_CreateSubOrder/
```

```
{
	"AccountId": "0014x000006rsc1AAA",
	"MasterOrderId": "8014x000000PSFBAA4",
	"QuoteId": "0Q04x000000Y4d8CAC",
	"QuoteLineItems": {
		"Ids": [{
			"Id": "0QL4x000000YR3hGAG"
		}]
	},
	"SubOrderRecordTypeId": "0124x000000PXJUAA4"
}
```

```
{
	"SubOrderId": "8014x000000PSFaAAO"
}
```
