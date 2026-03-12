---
title: "Feed Elements Capability, Status"
domain: chatterapi
topic: feed-elements-capability-status
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.262Z
estimatedTokens: 754
keywords: [Feed, Elements, Capability, Status, Access, post]
---

# Feed Elements Capability, Status

> Access the status capability of a feed post or set the status of a
      feed post.

# Feed Elements Capability, Status

Access the status capability of a feed post or set the status of a feed post.

Only users with the Can Approve Feed Post and Comment permission can set the status of a feed post or comment.

Resource

```

```

```

```

Available version

37.0

Requires Chatter

Yes

HTTP methods

GET, HEAD, PATCH

Response body for GET

[Status Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_status_capability.htm "If a feed post or comment has this capability, it has a status that determines its visibility.")

If the feed element doesn’t support this capability, the response is [404: Not Found](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

Request body for PATCH

Root XML tag

statusCapability

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| feedEntityStatus | String | Status of the feed post or comment. Values are:Draft—The feed post isn’t published but is visible to the author and users with Modify All Data or View All Data permission. Comments can’t be drafts.Isolated—The feed post or comment is isolated, and only admins can see it.PendingReview—The feed post or comment isn’t approved yet and therefore isn’t published or visible.Published—The feed post or comment is approved and visible.Posts that have a status of PendingReview or Published can’t be changed to a status of Draft and vice versa. Only admins can change the status of a post or comment to or from Isolated status. | Required | 37.0 |

Request parameters for PATCH

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| feedEntityStatus | String | Status of the feed post or comment. Values are:Draft—The feed post isn’t published but is visible to the author and users with Modify All Data or View All Data permission. Comments can’t be drafts.Isolated—The feed post or comment is isolated, and only admins can see it.PendingReview—The feed post or comment isn’t approved yet and therefore isn’t published or visible.Published—The feed post or comment is approved and visible. | Required | 37.0 |

Response body for PATCH

[Status Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_status_capability.htm "If a feed post or comment has this capability, it has a status that determines its visibility.")

If the feed element doesn’t support this capability, the response is [404: Not Found](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

## Code Examples

```
/chatter/feed-elements/feedElementId/capabilities/status
```

```
/connect/communities/communityId/chatter/feed-elements/feedElementId/capabilities/status
```

```
{
   "feedEntityStatus":"Published"
}
```

## Related Topics

- Status Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_status_capability.htm)
- 404: Not
            Found (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
