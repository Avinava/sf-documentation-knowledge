---
title: "Feed Item Attachment: Poll"
domain: chatterapi
topic: feed-item-attachment-poll
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.765Z
estimatedTokens: 258
keywords: [Feed, Item, Attachment, Poll]
---

# Feed Item Attachment: Poll

> Poll feed item attachment.

# Feed Item Attachment: Poll

Poll feed item attachment.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=chatterapi)

#### Important

This response body isn’t available in version 32.0 and later. In version 32.0 and later, [Poll Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_poll_capability.htm "If a feed element has this capability, the feed element can include a poll for voting.") is used.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| choices | Feed Poll Choice[] | Collection of feed poll choices that make up the poll | Small, 29.0 | 26.0–31.0 |
| myChoiceId | String | 18-character ID of the poll choice that the context user has voted for in this poll. Returns null if the context user hasn’t voted. | Small, 29.0 | 26.0–31.0 |
| totalVoteCount | Integer | Total number of votes cast on the feed poll item | Small, 29.0 | 26.0–31.0 |
| type | String | Poll | Small, 29.0 | 27.0–31.0 |

## Related Topics

- Poll Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_poll_capability.htm)
- Feed Poll Choice (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_poll.htm)
