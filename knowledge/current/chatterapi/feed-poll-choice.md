---
title: "Feed Poll Choice"
domain: chatterapi
topic: feed-poll-choice
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.803Z
estimatedTokens: 241
keywords: [Feed, Poll, Choice]
---

# Feed Poll Choice

> Feed poll choice.

# Feed Poll Choice

Feed poll choice.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| id | String | 18-character ID of the poll choice | Small, 29.0 | 26.0 |
| position | Integer | The location in the poll where this poll choice exists. The first poll choice starts at 1. | Small, 29.0 | 26.0 |
| text | String | Label text associated with the poll choice | Small, 29.0 | 26.0 |
| voteCount | Integer | Total number of votes for this poll choice | Small, 29.0 | 26.0 |
| voteCountRatio | Double | The ratio of total number of votes for this poll choice to all votes cast in the poll. Multiply the ratio by 100 to get the percentage of votes cast for this poll choice. | Small, 29.0 | 26.0 |

#### See Also

-   [Poll Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_poll_capability.htm "If a feed element has this capability, the feed element can include a poll for voting.")

## Related Topics

- Poll Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_poll_capability.htm)
