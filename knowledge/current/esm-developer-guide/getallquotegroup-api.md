---
title: "getAll_QuoteGroup API"
domain: esm-developer-guide
topic: getallquotegroup-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:26.952Z
estimatedTokens: 79
keywords: [getAll_QuoteGroup, API, custom, quote, groups, sales, getAll, _QuoteGroup, URI, HTTP]
---

# getAll_QuoteGroup API

> Get all custom quote groups for a sales quote.

# getAll\_QuoteGroup API

Get all custom quote groups for a sales quote.

This API is used with the GetAllQGroupForSQ Vlocity Integration Procedure (VIP) to custom groups for a sales quote based on the SalesQuoteId parameter value.

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
/services/apexrest/vlocity_cmt/v1/integrationprocedure/getAll_QuoteGroup/
```

```
{
 	"SalesQuoteId": "0Q03h000000TuXGCA0"
 }
```

```
{
  "QuoteGroups": [{
    "QuoteGroupId": "a455w000001vak5AAA",
    "GroupName": "ES"
  },
  {
    "QuoteGroupId": "a455w000001vakAAAQ",
    "GroupName": "PS"
  }]
}
```
