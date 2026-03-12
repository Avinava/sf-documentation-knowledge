---
title: "ESM_validateRecords API"
domain: esm-developer-guide
topic: esmvalidaterecords-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:26.947Z
estimatedTokens: 103
keywords: [ESM_validateRecords, API, Validate, quote, line, items, ESM, _validateRecords, URI, HTTP]
---

# ESM_validateRecords API

> Validate quote line items.

# ESM\_validateRecords API

Validate quote line items.

This API is used to check if any of the specified line items has a product for which the Location Depend option is selected. If this option is selected for a product in any of the selected line items, this API checks if a connection date is provided for those line items.

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
/services/apexrest/vlocity_cmt/v1/integrationprocedure/ESM_validateRecords/
```

```
{
	"recordIds": [
		"0QLB0000000cH3LOAU",
		"0QLB0000000cH3ROAU",
		"0QLB0000000cH3XOAU",
		"0QLB0000000cH3jOAE",
		"0QLB0000000cH3pOAE",
		"0QLB0000000cH3vOAE",
		"0QLB0000000cH41OAE",
		"0QLB0000000cH4POAU",
		"0QLB0000000cH4VOAU",
		"0QLB0000000cH4bOAE",
		"0QLB0000000cH4hOAE"
	],
	"objectType": "QuoteLineItem"
}
```

```
{
	"response": {},
	"ResponseActionStatus": true,
	"ValidateRecordsByBatch": {
		"errorCode": "INVOKE-200",
		"error": "OK"
	},
	"ValidateRecordsByBatchStatus": true,
	"ValidateRecordsStatus": false,
	"options": {
		"useQueueableApexRemoting": false,
		"queueableChainable": false,
		"ignoreCache": true,
		"resetCache": false,
		"chainable": false
	},
	"objectType": "QuoteLineItem",
	"recordIds": [
		"0QLB0000000cH3LOAU",
		"0QLB0000000cH3ROAU",
		"0QLB0000000cH3XOAU",
		"0QLB0000000cH3jOAE",
		"0QLB0000000cH3pOAE",
		"0QLB0000000cH3vOAE",
		"0QLB0000000cH41OAE",
		"0QLB0000000cH4POAU",
		"0QLB0000000cH4VOAU",
		"0QLB0000000cH4bOAE",
		"0QLB0000000cH4hOAE"
	]
}
```
