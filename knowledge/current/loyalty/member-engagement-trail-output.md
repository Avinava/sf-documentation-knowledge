---
title: "Member Engagement Trail Output"
domain: loyalty
topic: member-engagement-trail-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.245Z
estimatedTokens: 252
keywords: [Member, Engagement, Trail, Output, representation, API]
---

# Member Engagement Trail Output

> Output representation of member engagement trail API.

# Member Engagement Trail Output

Output representation of member engagement trail API.

Sample Response

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=loyalty)

#### Note

The field remainingResetCount and totalResetCount may show null if the set limit is 1.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| status | Boolean | Indicates whether the request succeeded (true) or failed (false). | Small, 62.0 | 62.0 |
| message | String | The message explaining why the request failed. | Small, 62.0 | 62.0 |
| engagementAttribute |  | Indicates the event that is tracked for a member. | Small, 62.0 | 62.0 |
| totalResetCount | Integer | The maximum number of times a member can complete the engagement trail and earn rewards. | Small, 62.0 | 62.0 |
| remainingResetCount | Integer | The number of times a member can still complete the engagement trail and earn rewards. | Small, 62.0 | 62.0 |

## Code Examples

```
{
  "memberEngagementAttributeOutputRepresentations": [
    {
      "attributeStatus": "Active",
      "currentValue": null,
      "defaultValue": "0",
      "description": null,
      "endDate": "2025-01-31",
      "name": "Book A Cab",
      "startDate": "2024-11-01",
      "targetValue": "2.0"
    },
    {
      "attributeStatus": "Active",
      "currentValue": null,
      "defaultValue": "0",
      "description": null,
      "endDate": "2025-01-31",
      "name": "Book A Hotel Room",
      "startDate": "2024-11-01",
      "targetValue": "1.0"
    },
    {
      "attributeStatus": "Active",
      "currentValue": null,
      "defaultValue": "0",
      "description": null,
      "endDate": "2025-01-31",
      "name": "Book A Flight",
      "startDate": "2024-11-01",
      "targetValue": "1.0"
    }
  ],
  "message": null,
  "promotionName": "Engagement Trail",
  "remainingResetCount": null,
  "rewards": [
    {
      "badgeReward": [],
      "pointsRewards": [
        {
          "currencyName": "Reward Points",
          "points": 200
        },
        {
          "currencyName": "Tier Points",
          "points": 100
        }
      ],
      "voucherRewards": []
    }
  ],
  "status": true,
  "totalResetCount": null
}
```
