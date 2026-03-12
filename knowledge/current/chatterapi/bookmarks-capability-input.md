---
title: "Bookmarks Capability Input"
domain: chatterapi
topic: bookmarks-capability-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.063Z
estimatedTokens: 156
keywords: [Bookmarks, Capability, Input, bookmark, feed, element]
---

# Bookmarks Capability Input

> Create or update a bookmark on a feed element.

# Bookmarks Capability Input

Create or update a bookmark on a feed element.

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

#### See Also

-   [Feed Element Capabilities Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_element_capabilities_input.htm "A container for all capabilities that can be included when creating a feed element.")

## Code Examples

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

- Feed Element Capabilities Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_element_capabilities_input.htm)
