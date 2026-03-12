---
title: "ConnectApi.FeedPoll"
domain: apex-reference
topic: connectapifeedpoll
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:25.714Z
estimatedTokens: 261
keywords: [ConnectApi.FeedPoll, Attachment, ConnectApi.FeedItem, objects, where, PollPost., Important]
---

# ConnectApi.FeedPoll

> Attachment of ConnectApi.FeedItem objects where
    the type property is PollPost.

# ConnectApi.FeedPoll

Attachment of ConnectApi.FeedItem objects where the type property is PollPost.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

This class isn’t available in version 32.0 and later. In version 32.0 and later, [ConnectApi.PollCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_poll_capability.htm "If a feed element has this capability, it includes a poll.") is used.

Subclass of [ConnectApi.FeedItemAttachment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_item_attachment.htm "Feed item attachment.").

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| choices | List<ConnectApi.​Feed​Poll​Choice> | List of choices for poll. | 28.0–31.0 |
| myChoiceId | String | ID of the poll choice that the context user has voted for in this poll. Returns null if the context user hasn’t voted. | 28.0–31.0 |
| totalVoteCount | Integer | Total number of votes cast on the feed poll item. | 28.0–31.0 |

## Related Topics

- ConnectApi.PollCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_poll_capability.htm)
- ConnectApi.FeedItemAttachment (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_item_attachment.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​Feed​Poll​Choice (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_FeedPollChoice.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
