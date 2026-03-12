---
title: "Social Post Mass Approval Input"
domain: chatterapi
topic: social-post-mass-approval-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.858Z
estimatedTokens: 136
keywords: [Social, Post, Mass, Approval, Input, IDs, action, approve, reject, publishing]
---

# Social Post Mass Approval Input

> List of social post IDs and the action to approve or reject
      publishing them.

# Social Post Mass Approval Input

List of social post IDs and the action to approve or reject publishing them.

Root XML tag

<massApproveReject>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| isApproved | Boolean | Specifies whether to approve (true) or reject (false) publishing the social posts. If unspecified, defaults to false. | Optional | 46.0 |
| socialPost​IdList | String[] | A list of up to 200 social post IDs. | Required | 46.0 |

## Code Examples

```
{
   "isApproved" : "true",
   "socialPostIdList" : {"socialPostIdList": ["0STxx0000004CHG","0STxx0000005THX"]}
}
```
