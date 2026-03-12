---
title: "Member Engagement Trail"
domain: loyalty
topic: member-engagement-trail
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.132Z
estimatedTokens: 245
keywords: [Member, Engagement, Trail, Fetches, current, target, milestones, defined, rewards, received, achieving]
---

# Member Engagement Trail

> Fetches current and target values of the milestones defined in an engagement trail
        and the rewards received after achieving milestones.

# Member Engagement Trail

Fetches current and target values of the milestones defined in an engagement trail and the rewards received after achieving milestones.

Resource

```

```

Examples

```

```

```

```

Available version

63.0

Requires Chatter

No

HTTP methods

GET

Query Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| promotionId | String | The ID of the promotion. | Required | 63.0 |

Path Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| programName | String | Name of the loyalty program. | Required | 63.0 |
| membershipNumber | String | The membership number of the loyalty program member. | Required | 63.0 |

Response Body

[Member Engagement Trail Output](atlas.en-us.loyalty.meta/loyalty/connect_response_get_member_engagement_trail.htm "Output representation of member engagement trail API.")

## Code Examples

```
/services/data/vXX.X/loyalty/programs/${programName}/members/${membershipNumber}/engagement-trail?$promotionId={promotionId}
```

```
https://yourInstance.salesforce.com/services/data/vXX.X
/loyalty/programs/${programName}/members/${membershipNumber}/engagement-trail?$promotionId={promotionId}
```

```
https://yourInstance.salesforce.com/services/data/vXX.X
/loyalty/programs/${programName}/members/${membershipNumber}/engagement-trail?$promotionId={promotionId}
```

## Related Topics

- Member Engagement Trail Output (atlas.en-us.loyalty.meta/loyalty/connect_response_get_member_engagement_trail.htm)
