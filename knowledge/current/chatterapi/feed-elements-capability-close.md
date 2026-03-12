---
title: "Feed Elements Capability, Close"
domain: chatterapi
topic: feed-elements-capability-close
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.158Z
estimatedTokens: 470
keywords: [Feed, Elements, Capability, Close, closed, status, element]
---

# Feed Elements Capability, Close

> Get the closed status of a feed element. Set a feed element to
      closed.

# Feed Elements Capability, Close

Get the closed status of a feed element. Set a feed element to closed.

Users can’t edit (specifically the feed item body or title), comment on, or delete a closed feed element. If the closed feed element is a poll, users can’t vote on it. Users can’t edit (specifically the comment body) or delete a comment on a closed feed element or select or remove it as best answer.

Admins and moderators can edit and delete closed feed elements and comments on closed feed elements. Admins and moderators can select or remove the best answer status on comments on closed feed elements.

Resource

```

```

```

```

Available version

43.0

Requires Chatter

Yes

HTTP methods

GET, PATCH

Request body for PATCH

Root XML tag

<closeCapability>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| isClosed | Boolean | Specifies whether to set the feed element to closed (true) or not (false). | Required | 43.0 |

Request parameters for PATCH

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| isClosed | Boolean | Specifies whether to set the feed element to closed (true) or not (false). | Required | 43.0 |

Response body for GET and PATCH

[Close Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_close_capability.htm "If a feed element has this capability, users with permission can close it.")

If the feed element doesn’t support this capability, the response is [404: Not Found](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

## Code Examples

```
/chatter/feed-elements/feedElementId/capabilities/close
```

```
/connect/communities/communityId/chatter/feed-elements/feedElementId/capabilities/close
```

```
{
   "isClosed": "true"
}
```

## Related Topics

- Close Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_close_capability.htm)
- 404: Not
            Found (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
