---
title: "ConnectApi.Vote"
domain: apex-reference
topic: connectapivote
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:40.208Z
keywords: [ConnectApi.Vote, See]
---

# ConnectApi.Vote

# ConnectApi.Vote

An upvote or downvote on a feed element or comment.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| type | ConnectApi.​UpDownVoteValue | Type of vote for a feed element or comment.DownUp | 42.0 |
| user | ConnectApi.​UserSummary | User who voted on the feed element or comment. | 42.0 |
| votedItem | ConnectApi.​Reference | Reference to the feed element or comment that was voted on. | 42.0 |

#### See Also

-   [ConnectApi.VotePage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_vote_collection.htm "A page of upvotes or downvotes on a feed element or comment.")