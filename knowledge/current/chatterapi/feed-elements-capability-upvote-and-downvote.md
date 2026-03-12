---
title: "Feed Elements Capability, Upvote and Downvote"
domain: chatterapi
topic: feed-elements-capability-upvote-and-downvote
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.275Z
estimatedTokens: 349
keywords: [Feed, Elements, Capability, Upvote, Downvote, upvotes, downvotes, element]
---

# Feed Elements Capability, Upvote and Downvote

> Get the upvotes and downvotes for a feed element. Upvote or downvote
      a feed element.

# Feed Elements Capability, Upvote and Downvote

Get the upvotes and downvotes for a feed element. Upvote or downvote a feed element.

Resource

```

```

```

```

Available version

41.0

Requires Chatter

Yes

HTTP methods

GET, PATCH

Request body for PATCH

Root XML tag

<upDownVoteCapability>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| vote | String | Type of vote for a feed element or comment. Values are:DownNoneUp | Required | 41.0 |

Request parameters for PATCH

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| vote | String | Type of vote for a feed element or comment. Values are:DownNoneUp | Required | 41.0 |

Response body for GET and PATCH

[Up Down Vote Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_up_down_vote_capability.htm "If a feed post or comment has this capability, users can upvote or downvote it.")

If the feed element doesn’t support this capability, the response is [404: Not Found](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

## Code Examples

```
/chatter/feed-elements/feedElementId/capabilities/up-down-vote
```

```
/connect/communities/communityId/chatter/feed-elements/feedElementId/capabilities/up-down-vote
```

```
{
   "vote":"Up"
}
```

## Related Topics

- Up Down Vote Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_up_down_vote_capability.htm)
- 404: Not
            Found (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
