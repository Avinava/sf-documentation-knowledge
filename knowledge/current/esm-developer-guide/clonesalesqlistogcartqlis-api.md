---
title: "CloneSalesQLIs_ToGCartQLIs API"
domain: esm-developer-guide
topic: clonesalesqlistogcartqlis-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:26.911Z
estimatedTokens: 80
keywords: [CloneSalesQLIs_ToGCartQLIs, API, Clone, sales, quote, line, items, QLIs, working, cart, CloneSalesQLIs, _ToGCartQLIs, URI, HTTP]
---

# CloneSalesQLIs_ToGCartQLIs API

> Clone sales quote line items (QLIs) to working cart QLIs.

# CloneSalesQLIs\_ToGCartQLIs API

Clone sales quote line items (QLIs) to working cart QLIs.

This API is used with the CloneSalesQuoteToWorkingCart Vlocity Integration Procedure (VIP) to copy the sales QLIs to the working cart QLIs.

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
/services/apexrest/vlocity_cmt/v1/integrationprocedure/CloneSalesQLIs_ToGCartQLIs/
```

```
{
  "SalesQuoteId": "0Q03h000000Tu4q",
  "RootItemIds": [{
    "Id": "0QL3h000000gv5UGAQ"
  },
  {
    "Id": "0QL3h000000gv5eGAA"
  }],
  "MemberId": "a455w000002AMe7AAG"
}
```

```
{
  "GroupCartId": "0Q03h000000TpbH"
}
```
