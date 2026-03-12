---
title: "CloneSalesQToWC_Discounts API"
domain: esm-developer-guide
topic: clonesalesqtowcdiscounts-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:26.913Z
estimatedTokens: 96
keywords: [CloneSalesQToWC_Discounts, API, Clone, sales, quote, line, items, QLIs, working, cart, discounts, adjustments, CloneSalesQToWC, _Discounts, URI]
---

# CloneSalesQToWC_Discounts API

> Clone sales quote line items (QLIs) to working cart QLIs with discounts and adjustments.

# CloneSalesQToWC\_Discounts API

Clone sales quote line items (QLIs) to working cart QLIs with discounts and adjustments.

This API is used with the CloneSalesQToWCWDiscounts Vlocity Integration Procedure (VIP) to copy the sales QLIs to the working cart QLIs, including discounts and adjustments.

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
/services/apexrest/vlocity_cmt/v1/integrationprocedure/CloneSalesQToWC_Discounts/
```

```
{
  "SalesQuoteId": "0Q03h000000TuXG",
  "RootItemIds": [{
    "Id": "0QL3h000000Pvy4GAC"
  }]
}
```

```
{
  "WorkingCartId": "0Q03h000000TpbH"
}
```
