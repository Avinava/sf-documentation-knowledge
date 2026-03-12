---
title: "AddMem_ToQG API"
domain: esm-developer-guide
topic: addmemtoqg-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:26.852Z
estimatedTokens: 70
keywords: [AddMem_ToQG, API, Add, members, quote, group, AddMem, _ToQG, URI, HTTP]
---

# AddMem_ToQG API

> Add members to a quote group.

# AddMem\_ToQG API

Add members to a quote group.

This API is used with the AddMembersToQGroup Vlocity Integration Procedure (VIP) to add locations or subscribers to the specified quote group.

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
/services/apexrest/vlocity_cmt/v1/integrationprocedure/AddMem_ToQG/
```

```
{
  "SalesQuoteId": "0Q05w000001ls3PCAQ",
  "QuoteGroupId": "a453h000000QRgF",
  "Members": [{
    "Id": "a5X5w000002CQ4c"
  },
  {
    "Id": "a5X5w000002DFEd"
  },
  {
    "Id": "a5X5w000002DFEi"
  },
  {
    "Id": "a5X5w000002CQ4b"
  }]
}
```

```
{
  "QuoteGroupId": "0Q03h000000TpbH"
}
```
