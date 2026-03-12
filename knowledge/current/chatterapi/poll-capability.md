---
title: "Poll Capability"
domain: chatterapi
topic: poll-capability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.355Z
estimatedTokens: 206
keywords: [Poll, Capability, feed, element, include, voting]
---

# Poll Capability

> If a feed element has this capability,
the feed element can include a poll for voting.

# Poll Capability

If a feed element has this capability, the feed element can include a poll for voting.

| Property Name | Type | Description | Filter and Version | Available Version |
| --- | --- | --- | --- | --- |
| choices | Feed Poll Choice[] | Collection of poll choices that make up the poll. | Small, 32.0 | 32.0 |
| myChoiceId | String | 18-character ID of the poll choice that the context user has voted for in this poll. Returns null if the context user has not voted. | Small, 32.0 | 32.0 |
| totalVoteCount | String | Total number of votes cast on the feed poll element. | Small, 32.0 | 32.0 |

#### See Also

-   [Feed Element Capabilities](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.")

## Related Topics

- Feed Poll Choice (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_poll.htm)
- Feed Element Capabilities (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm)
