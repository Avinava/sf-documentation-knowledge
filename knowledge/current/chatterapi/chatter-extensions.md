---
title: "Chatter Extensions"
domain: chatterapi
topic: chatter-extensions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.704Z
estimatedTokens: 216
keywords: [Chatter, Extensions]
---

# Chatter Extensions

> Get extensions.

# Chatter Extensions

Get extensions.

Resource

```

```

```

```

Available version

40.0

Requires Chatter

Yes

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| page | String | Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as currentPageToken or nextPageToken. If you pass in null, the first page is returned. | Optional | 40.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 100. The default size is 15. | Optional | 40.0 |

Response body for GET

[Extension Definition Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_extension_definition_collection.htm "Collection of extension definitions.")

## Code Examples

```
/chatter/extensions
```

```
/connect/communities/communityId/chatter/extensions
```

## Related Topics

- Extension Definition Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_extension_definition_collection.htm)
