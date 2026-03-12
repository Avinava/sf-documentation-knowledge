---
title: "Feed Elements Capability, Bookmarks"
domain: chatterapi
topic: feed-elements-capability-bookmarks
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.128Z
estimatedTokens: 373
keywords: [Feed, Elements, Capability, Bookmarks, whether, element, bookmarked, add]
---

# Feed Elements Capability, Bookmarks

> Get information about whether a feed element is bookmarked, or add
      bookmarks to feed elements.

# Feed Elements Capability, Bookmarks

Get information about whether a feed element is bookmarked, or add bookmarks to feed elements.

Resource

```

```

```

```

Available version

32.0

Requires Chatter

Yes

HTTP methods

GET, PATCH

Request body for PATCH

Root XML tag

```

```

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| isBookmarked​ByCurrentUser | Boolean | Specifies if the feed element should be bookmarked for the user (true) or not (false). | Required | 32.0 |

Request parameter for PATCH

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| isBookmarked​ByCurrentUser | Boolean | Specifies if the feed element should be bookmarked for the user (true) or not (false). | Required | 32.0 |

Response body for GET, PATCH

[Bookmarks Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_bookmarks_capability.htm#connect_responses_bookmarks_capability "If a feed element has this capability, the context user can bookmark it.")

If the feed element doesn’t support this capability, the response is [404: Not Found](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

## Code Examples

```
/chatter/feed-elements/feedElementId/capabilities/bookmarks
```

```
/connect/communities/communityId/chatter/feed-elements/feedElementId/capabilities/bookmarks
```

```
<bookmarksCapability>
   <isBookmarkedByCurrentUser>true</isBookmarkedByCurrentUser>
</bookmarksCapability>
```

```
{
   "isBookmarkedByCurrentUser": true
}
```

## Related Topics

- Bookmarks Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_bookmarks_capability.htm)
- 404: Not
            Found (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
