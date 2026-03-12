---
title: "CloneModifyTo_SalesQLIsWQPR API"
domain: esm-developer-guide
topic: clonemodifytosalesqliswqpr-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:26.909Z
estimatedTokens: 133
keywords: [CloneModifyTo_SalesQLIsWQPR, API, Clone, modified, working, cart, quote, line, items, QLIs, sales, Product, Rollup, CloneModifyTo, _SalesQLIsWQPR]
---

# CloneModifyTo_SalesQLIsWQPR API

> Clone the modified working cart quote line items (QLIs) to sales QLIs, delete the working cart, and update the Quote Product Rollup object.

# CloneModifyTo\_SalesQLIsWQPR API

Clone the modified working cart quote line items (QLIs) to sales QLIs, delete the working cart, and update the Quote Product Rollup object.

This API is used with the CloneModifyWCToSalesQLIs Vlocity Integration Procedure (VIP) to copy the modified QLIs in the working cart to the sales QLIs, remove the working cart, and update the Quote Product Rollup object. Do not call this API in the bulk pricing flow.

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
/services/apexrest/vlocity_cmt/v1/integrationprocedure/CloneModifyTo_SalesQLIsWQPR/
```

```
{
  "GroupCartId": "0Q03h000000Tu2BCAS",
  "SalesQuoteId": "0Q03h000000TpbH",
  "RootItemIds": [{
    "Id": "0QL3h000000gvHcGAI"
  },
  {
    "Id": "0QL3h000000gvHmGAI"
  }]
}
```

```
{
  "SalesQuoteId": "0Q03h000000TuXGCA0"
}
```
