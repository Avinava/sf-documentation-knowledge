---
title: "removeQM_FromQuoteGroup API"
domain: esm-developer-guide
topic: removeqmfromquotegroup-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:26.978Z
estimatedTokens: 94
keywords: [removeQM_FromQuoteGroup, API, Remove, quote, member, record, group, removeQM, _FromQuoteGroup, URI, HTTP]
---

# removeQM_FromQuoteGroup API

> Remove a quote member record from the quote group.

# removeQM\_FromQuoteGroup API

Remove a quote member record from the quote group.

This API is used with the RemoveQMFromQuoteGroup Vlocity Integration Procedure (VIP) to remove the specified quote member from the quote group. This API does not delete the quote member from the system.

## URI

```

```

## HTTP Method

POST

## Request Body

```

```

## Response

```

```

## Code Examples

```
/services/apexrest/vlocity_cmt/v1/integrationprocedure/removeQM_FromQuoteGroup/
```

```
{
  "SalesQuoteId": "0Q05w000001xko7",
  "MemberIds": [{
    "Id": "a5X5w000000KWkc"
  },
  {
    "Id": "a5X5w000000KWkd"
  }]
}
```

```
{
  "SalesQuoteId": "0Q05w000001xko7"
}
```
