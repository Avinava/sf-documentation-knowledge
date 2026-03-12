---
title: "Commerce Webstore Externally Managed Accounts"
domain: chatterapi
topic: commerce-webstore-externally-managed-accounts
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.363Z
estimatedTokens: 171
keywords: [Commerce, Webstore, Externally, Managed, Accounts, collection]
---

# Commerce Webstore Externally Managed Accounts

> Get a collection of externally managed accounts.

# Commerce Webstore Externally Managed Accounts

Get a collection of externally managed accounts.

Resource

```

```

Available version

49.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| includeMyAccount | Boolean | Specifies whether to return the context user’s account (true) or not (false). The default value is false. | Optional | 53.0 |

Response body for GET

[External Managed Account Collection Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_external_managed_account_collection_output.htm "Collection of externally managed accounts.")

## Code Examples

```
/commerce/webstores/webstoreId/external-managed-accounts
```

## Related Topics

- External Managed Account Collection Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_external_managed_account_collection_output.htm)
