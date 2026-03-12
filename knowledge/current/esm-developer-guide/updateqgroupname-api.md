---
title: "update_QGroupName API"
domain: esm-developer-guide
topic: updateqgroupname-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:26.984Z
estimatedTokens: 69
keywords: [update_QGroupName, API, quote, group, _QGroupName, URI, HTTP]
---

# update_QGroupName API

> Update the name of the quote group.

# update\_QGroupName API

Update the name of the quote group.

This API is used with the UpdateQuoteGroupName Vlocity Integration Procedure (VIP) to change the name of the quote group.

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
/services/apexrest/vlocity_cmt/v1/integrationprocedure/update_QGroupName/
```

```
{
  "SalesQuoteId": "0Q03h000000Tu4q",
  "QuoteGroupId": "Exec-East",
  "NewGroupName": "Exec-East1"
}
```

```
{
  "QuoteGroupId": "a5L3h0000004nDsEAI",
  "GroupName": "Exec-East1"
}
```
