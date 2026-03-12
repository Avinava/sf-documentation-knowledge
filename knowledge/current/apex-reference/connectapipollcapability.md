---
title: "ConnectApi.PollCapability"
domain: apex-reference
topic: connectapipollcapability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:28.458Z
estimatedTokens: 244
keywords: [ConnectApi.PollCapability, feed, element, capability, includes, poll]
---

# ConnectApi.PollCapability

> If a feed element has this capability, it includes a
    poll.

# ConnectApi.PollCapability

If a feed element has this capability, it includes a poll.

Subclass of [ConnectApi.FeedElementCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capability.htm "A feed element capability, which defines the characteristics of a feed element.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| choices | List<ConnectApi.​FeedPollChoice> | Collection of poll choices that make up the poll. | 32.0 |
| myChoiceId | String | 18-character ID of the poll choice that the context user has voted for in this poll. Returns null if the context user has not voted. | 32.0 |
| totalVoteCount | Integer | Total number of votes cast on the feed poll element. | 32.0 |

#### See Also

-   [ConnectApi.FeedElementCapabilities](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.")

## Related Topics

- ConnectApi.FeedElementCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capability.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​FeedPollChoice (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_FeedPollChoice.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- ConnectApi.FeedElementCapabilities (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm)
