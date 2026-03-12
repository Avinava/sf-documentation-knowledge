---
title: "b2bExpress_SubmitSubOrder API"
domain: esm-developer-guide
topic: b2bexpresssubmitsuborder-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:26.892Z
estimatedTokens: 71
keywords: [b2bExpress_SubmitSubOrder, API, Submit, order, b2bExpress, _SubmitSubOrder, URI, HTTP]
---

# b2bExpress_SubmitSubOrder API

> Submit an order.

# b2bExpress\_SubmitSubOrder API

Submit an order.

You can enable either CPQ or OM by making the appropriate element in the Integration Procedure active: CreateAssetsFlow-CPQ or CreateAssetsFlow-OM.

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
/services/apexrest/vlocity_cmt/v1/integrationprocedure/b2bExpress_SubmitSubOrder/
```

```
{
	"ContextId": "8015e0000004DofAAE"
}
```

```
{
	"canSubmitOrder": true,
	"canSubmitOrderMessage": "",
	"cpqCreateAssetsValue": "OM",
	"errorMessage": "{"isOff":false,"isOk":true,"planId":"a2y5e000000bqdV"}",
	"errorStatus": "OK",
	"hasError": false,
	"message": ""
}
```
