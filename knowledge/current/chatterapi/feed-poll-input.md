---
title: "Feed Poll Input"
domain: chatterapi
topic: feed-poll-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.694Z
estimatedTokens: 168
keywords: [Feed, Poll, Input]
---

# Feed Poll Input

> Feed poll input.

# Feed Poll Input

Feed poll input.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=chatterapi)

#### Important

This request body isn’t available in version 32.0 and later. In version 32.0 and later, use [Poll Capability Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_poll_capability_input.htm "Create or vote on a poll feed element.").

Root XML tag

<feedPoll>

Properties

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| myChoiceId | String | ID of an existing choice on the feed poll. Used to specify the ID of the poll choice that the context user is voting on. | 26.0–31.0 |

## Related Topics

- Poll Capability Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_poll_capability_input.htm)
