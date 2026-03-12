---
title: "Feed-Items Polls"
domain: chatterapi
topic: feed-items-polls
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.088Z
estimatedTokens: 338
keywords: [Feed-Items, Polls, poll, vote]
---

# Feed-Items Polls

> Get a poll or a vote on a poll.

# Feed-Items Polls

Get a poll or a vote on a poll.

Resource

```

```

The feedItemId must have the type PollPost.

Available versions

26.0–31.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=chatterapi)

#### Important

In version 32.0 and later, use [Feed Elements Capability, Poll](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_capability_poll.htm "Access a poll for a feed element or vote on a poll.").

Requires Chatter

Yes

HTTP methods

GET, PATCH

Use PATCH to either vote in an existing poll, or change the context user’s vote.

Request body for PATCH

Root XML tag

<feedPoll>

Properties

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| myChoiceId | String | ID of an existing choice on the feed poll. Used to specify the ID of the poll choice that the context user is voting on. | 26.0–31.0 |

Request parameters for PATCH

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| myChoiceId | String | ID of an existing choice on the feed poll. Used to specify the ID of the poll choice that the context user is voting on. | 26.0–31.0 |

Response body for GET and PATCH

[Feed Item Attachment: Poll](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item_attach_poll.htm "Poll feed item attachment.")

## Code Examples

```
/chatter/feed-items/feedItemId/poll
```

## Related Topics

- Feed Elements Capability, Poll (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_capability_poll.htm)
- Feed Item Attachment: Poll (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item_attach_poll.htm)
