---
title: "Feed Elements Capability, Upvote and Downvote Items"
domain: chatterapi
topic: feed-elements-capability-upvote-and-downvote-items
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.280Z
estimatedTokens: 348
keywords: [Feed, Elements, Capability, Upvote, Downvote, Items, users, upvoted, downvoted, element]
---

# Feed Elements Capability, Upvote and Downvote Items

> Get a list of users who upvoted or downvoted a feed
    element.

# Feed Elements Capability, Upvote and Downvote Items

Get a list of users who upvoted or downvoted a feed element.

Resource

```

```

```

```

Available version

42.0

Requires Chatter

Yes

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| page | Integer | Number of the page you want returned. Starts at 0. If you don’t specify a value or if you specify 0, the first page is returned. | Optional | 42.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 100. If you don’t specify a value, the default size is 25. | Optional | 42.0 |
| vote | String | Specifies the value of the vote for the feed element. Values are:DownUpYou can’t specify None. | Required | 42.0 |

Response body for GET

[Vote Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_vote_collection.htm "A collection of upvotes or downvotes for a feed element or comment.")

If the feed element doesn’t support this capability, the response is [404: Not Found](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

## Code Examples

```
/chatter/feed-elements/feedElementId/capabilities/up-down-vote/items
```

```
/connect/communities/communityId/chatter/feed-elements/feedElementId/capabilities/up-down-vote/items
```

## Related Topics

- Vote Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_vote_collection.htm)
- 404: Not
            Found (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
