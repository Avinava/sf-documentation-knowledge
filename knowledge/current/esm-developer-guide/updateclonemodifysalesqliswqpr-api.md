---
title: "UpdateCloneModify_SalesQLIsWQPR API"
domain: esm-developer-guide
topic: updateclonemodifysalesqliswqpr-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:26.986Z
estimatedTokens: 81
keywords: [UpdateCloneModify_SalesQLIsWQPR, API, Updates, clones, modifies, quote, line, items, cart, group, member, UpdateCloneModify, _SalesQLIsWQPR, URI, HTTP]
---

# UpdateCloneModify_SalesQLIsWQPR API

> Updates, clones, or modifies the quote line items for a given cart ID, group ID, quote member ID, or quote ID.

# UpdateCloneModify\_SalesQLIsWQPR API

Updates, clones, or modifies the quote line items for a given cart ID, group ID, quote member ID, or quote ID.

This API moves quote line items for editing from the working cart to the sales cart.

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
/services/apexrest/vlocity_cmt/v1/integrationprocedure/UpdateCloneModify_SalesQLIsWQPR/
```

```
{
	"GroupCartId": "0Q03g000000XiIaCAK",
	"GroupId": null,
	"MemberId": "a5X3g000000CjX0EAK",
	"SalesQuoteId": "0Q03g000000XiI6CAK",
	"itemIds": [{
		"Id": "0QL3g000000TbEXGA0"
	}]
}
```
