---
title: "CloneModifyTo_SalesQLIs API"
domain: esm-developer-guide
topic: clonemodifytosalesqlis-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:26.906Z
estimatedTokens: 94
keywords: [CloneModifyTo_SalesQLIs, API, Clone, modified, working, cart, quote, line, items, QLIs, sales, CloneModifyTo, _SalesQLIs, URI, HTTP]
---

# CloneModifyTo_SalesQLIs API

> Clone modified working cart quote line items (QLIs) to sales QLIs and delete the working cart.

# CloneModifyTo\_SalesQLIs API

Clone modified working cart quote line items (QLIs) to sales QLIs and delete the working cart.

This API is used with the CloneModifyWorkingCartToSalesQLIs Vlocity Integration Procedure (VIP) to copy the modified QLIs in the working cart to the sales QLIs.

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
/services/apexrest/vlocity_cmt/v1/integrationprocedure/CloneModifyTo_SalesQLIs/
```

```
{
  "SalesQuoteId": "0Q03h000000Tu4q",
  "RootItemIds": [{
    "Id": "0QL3h000000gv5UGAQ"
  },
  {
    "Id": "0QL3h000000gv5eGAA"
  }]
}
```

```
{
  "SalesQuoteId": "0Q03h000000Tu4q"
}
```
