---
title: "AddQMQGToWC_CopyToEQBatch API"
domain: esm-developer-guide
topic: addqmqgtowccopytoeqbatch-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:26.855Z
estimatedTokens: 55
keywords: [AddQMQGToWC_CopyToEQBatch, API, Trigger, batch, process, migrate, clone, products, working, cart, enterprise, quote, AddQMQGToWC, _CopyToEQBatch, URI]
---

# AddQMQGToWC_CopyToEQBatch API

> Trigger a batch process to migrate and clone products from the working cart to the enterprise quote.

# AddQMQGToWC\_CopyToEQBatch API

Trigger a batch process to migrate and clone products from the working cart to the enterprise quote.

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
/services/apexrest/vlocity_cmt/v1/integrationprocedure/AddQMQGToWC_CopyToEQBatch/
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
  "SalesQuoteId": "0Q03h000000YkhlCAC",
  "BatchSize": 20
}
```

```
{
	"AddToMemberJobId": "SalesforceJobId"
}
```
