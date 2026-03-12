---
title: "Social Posts Intents, Mass Approval"
domain: chatterapi
topic: social-posts-intents-mass-approval
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.690Z
estimatedTokens: 208
keywords: [Social, Posts, Intents, Mass, Approval, Approve, reject, publishing, large, number]
---

# Social Posts Intents, Mass Approval

> Approve or reject the publishing of a large number of social
      posts.

# Social Posts Intents, Mass Approval

Approve or reject the publishing of a large number of social posts.

Resource

```

```

Available version

46.0–61.0

HTTP methods

PATCH

Request body for PATCH

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

Response body for PATCH

[Social Post Mass Approval](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_social_post_mass_approval.htm "Approval or rejection of a large number of social posts.")

## Code Examples

```
/connect/social-engagement/social-posts/intents/approvals
```

```
{
   "isApproved" : "true",
   "socialPostIdList" : {"socialPostIdList": ["0STxx0000004CHG","0STxx0000005THX"]}
}
```

## Related Topics

- Social Post Mass Approval (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_social_post_mass_approval.htm)
