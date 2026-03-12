---
title: "Feed Elements Capability, Poll"
domain: chatterapi
topic: feed-elements-capability-poll
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.226Z
estimatedTokens: 468
keywords: [Feed, Elements, Capability, Poll, Access, element, vote]
---

# Feed Elements Capability, Poll

> Access a poll for a feed element or vote on a poll.

# Feed Elements Capability, Poll

Access a poll for a feed element or vote on a poll.

To create a poll, use the [Feed Elements, Post and Search](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element.htm "Post feed elements and search all feed elements in an organization.") resource. See [Post a Poll](atlas.en-us.chatterapi.meta/chatterapi/quickreference_post_feed_element_poll.htm "Post a poll feed element in Chatter.") for an example.

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

JSON example for voting on a poll

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| choices | String[] | The choices used to create a new poll. You must specify 2–10 poll choices for each poll. | Required for creating a poll | 32.0 |
| myChoiceId | String | ID of an existing choice on the feed poll. Used to vote on an existing poll. | Required for voting on a poll | 32.0 |

Request parameters for PATCH

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| myChoiceId | String | A poll choice ID. | Required | 32.0 |

Response body for GET, PATCH

[Poll Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_poll_capability.htm#connect_responses_poll_capability "If a feed element has this capability, the feed element can include a poll for voting.")

If the feed element doesn’t support this capability, the response is [404: Not Found](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

## Code Examples

```
/chatter/feed-elements/feedElementId/capabilities/poll
```

```
/connect/communities/communityId/chatter/feed-elements/feedElementId/capabilities/poll
```

```
{ 
   "myChoiceId" : "09ATC00000001lh2AA"
}
```

## Related Topics

- Feed Elements, Post and Search (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element.htm)
- Post a Poll (atlas.en-us.chatterapi.meta/chatterapi/quickreference_post_feed_element_poll.htm)
- Poll Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_poll_capability.htm)
- 404: Not
            Found (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
