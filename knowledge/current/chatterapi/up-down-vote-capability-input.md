---
title: "Up Down Vote Capability Input"
domain: chatterapi
topic: up-down-vote-capability-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:10.454Z
estimatedTokens: 91
keywords: [Down, Vote, Capability, Upvote, downvote, comment]
---

> Upvote or downvote a feed element or a comment.

# Up Down Vote Capability Input

Upvote or downvote a feed element or a comment.

Root XML tag

<upDownVoteCapability>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| vote | String | Type of vote for a feed element or comment. Values are:DownNoneUp | Required | 41.0 |

## Code Examples

```
{
   "vote":"Up"
}
```
