---
title: "ConnectApi.FeedPollChoice"
domain: apex-reference
topic: connectapifeedpollchoice
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.682Z
keywords: [ConnectApi.FeedPollChoice, See]
---

# ConnectApi.FeedPollChoice

# ConnectApi.FeedPollChoice

Feed poll choice.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| id | String | Poll choice ID. | 28.0 |
| position | Integer | The location in the poll where this poll choice exists. The first poll choice starts at 1. | 28.0 |
| text | String | Label text associated with the poll choice. | 28.0 |
| voteCount | Integer | Total number of votes for this poll choice. | 28.0 |
| voteCountRatio | Double | The ratio of total number of votes for this poll choice to all votes cast in the poll. Multiply the ratio by 100 to get the percentage of votes cast for this poll choice. | 28.0 |

#### See Also

-   [ConnectApi.PollCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_poll_capability.htm "If a feed element has this capability, it includes a poll.")