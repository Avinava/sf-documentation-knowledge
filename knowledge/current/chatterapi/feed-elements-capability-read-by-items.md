---
title: "Feed Elements Capability, Read By Items"
domain: chatterapi
topic: feed-elements-capability-read-by-items
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.246Z
estimatedTokens: 331
keywords: [Feed, Elements, Capability, Items, element]
---

# Feed Elements Capability, Read By Items

> Get information about who read a feed element and
    when.

# Feed Elements Capability, Read By Items

Get information about who read a feed element and when.

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
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25. | Optional | 40.0 |

Response body for GET

[Read By Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_read_by_collection.htm "A collection of information about who read the feed element and when.")

If the feed element doesn’t support this capability, the response is [404: Not Found](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

## Code Examples

```
/chatter/feed-elements/feedElementId/capabilities/read-by/items
```

```
/connect/communities/communityId/chatter/feed-elements/feedElementId/capabilities/read-by/items
```

## Related Topics

- Read By Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_read_by_collection.htm)
- 404: Not
            Found (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
