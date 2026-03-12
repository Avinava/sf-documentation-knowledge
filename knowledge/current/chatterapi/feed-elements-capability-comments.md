---
title: "Feed Elements Capability, Comments"
domain: chatterapi
topic: feed-elements-capability-comments
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.162Z
estimatedTokens: 373
keywords: [Feed, Elements, Capability, Comments, Access, element]
---

# Feed Elements Capability, Comments

> Access the comments capability for a feed element.

# Feed Elements Capability, Comments

Access the comments capability for a feed element.

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

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| sort | String | Order of comments. Values are:CreatedDateLatestAsc—Sorts by most recently created comments in ascending order.CreatedDateOldestAsc—Sorts by oldest comments in ascending order.Relevance—Sorts by most relevant content.The default value is CreatedDateLatestAsc.Sorting in descending order isn’t supported. | Optional | 41.0 |
| threaded​Comments​Collapsed | Boolean | Specifies whether to return threaded comments in a collapsed style (true) or not (false). If you don’t specify, the default is false. | Optional | 44.0 |

Response body for GET

[Comments Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_comments_capability.htm#connect_responses_comments_capability "If a feed element or comment has this capability, the context user can add a comment.")

If the feed element doesn’t support this capability, the response is [404: Not Found](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

## Code Examples

```
/chatter/feed-elements/feedElementId/capabilities/comments
```

```
/connect/communities/communityId/chatter/feed-elements/feedElementId/capabilities/comments
```

## Related Topics

- Comments Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_comments_capability.htm)
- 404: Not
            Found (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
