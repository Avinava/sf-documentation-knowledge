---
title: "Experience Cloud Sites Externally Managed Accounts"
domain: chatterapi
topic: experience-cloud-sites-externally-managed-accounts
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.645Z
estimatedTokens: 244
keywords: [Experience, Cloud, Sites, Externally, Managed, Accounts, context, user, across]
---

# Experience Cloud Sites Externally Managed Accounts

> Get externally managed accounts available to the context user across
      all Experience Cloud sites.

# Experience Cloud Sites Externally Managed Accounts

Get externally managed accounts available to the context user across all Experience Cloud sites.

Resource

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

Regardless of the ID specified, this resource returns all the externally managed accounts available to the context user across all sites.

Available version

50.0

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
/connect/communities/communityId/external-managed-accounts
```

## Related Topics

- External Managed Account Collection Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_external_managed_account_collection_output.htm)
