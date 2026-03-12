---
title: "b2bExpress_getAssetsFromAccount API"
domain: esm-developer-guide
topic: b2bexpressgetassetsfromaccount-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:26.888Z
estimatedTokens: 115
keywords: [b2bExpress_getAssetsFromAccount, API, child, assets, account, root, asset, size, b2bExpress, _getAssetsFromAccount, URI, HTTP]
---

# b2bExpress_getAssetsFromAccount API

> Get child assets for a given account ID, root asset ID, and page size.

# b2bExpress\_getAssetsFromAccount API

Get child assets for a given account ID, root asset ID, and page size.

This API is used to get child assets for a given account ID, root asset ID, and page size. This API uses the getAssetsByAccount() method from the CpqAppHandler class.

## URI

```

```

## HTTP Method

POST

## Request

```

```

## Response

This API returns the details of the assets in an account. The response can run into hundreds of lines.

## Code Examples

```
/services/apexrest/vlocity_cmt/v1/integrationprocedure/b2bExpress_getAssetsFromAccount/
```

```
{
	"accountId": "0015Y00002doyzqQAA",
	"lastAssetId": "02i5Y00000Xrw0QQAR",
	"pageSize": "1"
}
```
