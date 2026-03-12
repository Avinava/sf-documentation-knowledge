---
title: "OAuth Usage"
domain: chatterapi
topic: oauth-usage
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.780Z
estimatedTokens: 208
keywords: [OAuth, Usage, external, client, apps, data]
---

# OAuth Usage

> Get a list of external client apps that have OAuth usage
    data.

# OAuth Usage

Get a list of external client apps that have OAuth usage data.

Resource

```

```

Available version

59.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| page | Integer | Number of the page you want returned. Starts at 0. If you don’t specify a value or if you specify 0, the first page is returned.If you enter a page number that comes after the last page of items, an empty array is returned. | Optional. | 59.0 |
| pageSize | Integer | Number of usage entries per page. Defaults to 100. | Optional. | 59.0 |

Response body for GET

[App OAuth Usage Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_app_oauth_usage_collection.htm "OAuth usage information for a list of apps.")

## Code Examples

```
/apps/oauth/usage
```

## Related Topics

- App OAuth Usage Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_app_oauth_usage_collection.htm)
