---
title: "Files Connect Repository List"
domain: chatterapi
topic: files-connect-repository-list
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.761Z
estimatedTokens: 263
keywords: [Files, Connect, Repository, repositories]
---

# Files Connect Repository List

> Get a list of Files Connect
    repositories.

# Files Connect Repository List

Get a list of Files Connect repositories.

Resource

```

```

```

```

Available version

32.0

The communities resource is available in version 35.0 and later.

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| canBrowseOnly | Boolean | Retrieves only repositories that support browsing. | Optional | 32.0 |
| canSearchOnly | Boolean | Retrieves only repositories that support searching. | Optional | 32.0 |
| page | Integer | An integer specifying a page of items. The default value is 0, which returns the first page. | Optional | 32.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are between 1 and 100. If you pass in null, the default is 25. | Optional | 32.0 |

Response body for GET

[Files Connect Repository Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_content_hub_repository_collection.htm "A collection of Files Connect repositories.")

## Code Examples

```
/connect/content-hub/repositories
```

```
/connect/communities/communityId/content-hub/repositories
```

## Related Topics

- Files Connect Repository Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_content_hub_repository_collection.htm)
