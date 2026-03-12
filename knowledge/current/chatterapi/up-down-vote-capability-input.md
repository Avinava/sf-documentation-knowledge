---
title: "Up Down Vote Capability Input"
domain: chatterapi
topic: up-down-vote-capability-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.980Z
estimatedTokens: 91
keywords: [Down, Vote, Capability, Input, Upvote, downvote, feed, element, comment]
---

# Up Down Vote Capability Input

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
