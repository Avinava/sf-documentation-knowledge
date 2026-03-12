---
title: "AddQMQGToWC_CopyToEQ API"
domain: esm-developer-guide
topic: addqmqgtowccopytoeq-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:26.854Z
estimatedTokens: 99
keywords: [AddQMQGToWC_CopyToEQ, API, Add, members, quote, group, working, cart, copy, enterprise, AddQMQGToWC, _CopyToEQ, URI, HTTP]
---

# AddQMQGToWC_CopyToEQ API

> Add members and a quote group to the working cart and copy it to the enterprise quote.

# AddQMQGToWC\_CopyToEQ API

Add members and a quote group to the working cart and copy it to the enterprise quote.

This API is used with the AddQMQGToWCQLIsCopyToEQ Vlocity Integration Procedure (VIP) to add locations or subscribers and a quote group to the working cart and copy it to the enterprise quote.

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
/services/apexrest/vlocity_cmt/v1/integrationprocedure/AddQMQGToWC_CopyToEQ/
```

```
{
  "MemberIds": [{
    "Id": "a5X3h000000xugJ"
  },
  {
    "Id": "a5X3h000000xugE"
  }],
  "QuoteGroupIds": [{
    "Id": "a453h000000I0i2"
  },
  {
    "Id": "a453h000000I0i7"
  }],
  "WorkingCartId": "0Q03h000000Yki5CAC",
  "SalesQuoteId": "0Q03h000000YkhlCAC"
}
```

```
{
  "SalesQuoteId": "0Q03h000000TpbH"
}
```
