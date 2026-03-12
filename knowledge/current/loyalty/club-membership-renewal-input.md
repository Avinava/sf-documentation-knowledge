---
title: "Club Membership Renewal Input"
domain: loyalty
topic: club-membership-renewal-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:50.863Z
estimatedTokens: 270
keywords: [Club, Membership, Renewal, Input, representation]
---

# Club Membership Renewal Input

> The input representation for club membership renewal.

# Club Membership Renewal Input

The input representation for club membership renewal.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| club​Membership​EndDate | String | The end date of the club membership. |  | 64.0 |
| club​Membership​Number | String | The membership number of the club member. |  | 64.0 |
| external​Identifier | String | The external identifier of the club member. |  | 64.0 |
| loyalty​Membership​Number | String | The membership number of the loyalty program member. |  | 64.0 |
| notes | String | Additional information about the club membership renewal. |  | 64.0 |
| order​ItemId | String | The order associated with the club membership. This field is a relationship field. |  | 64.0 |
| renewal​Period | Integer | The specific time period during which a club membership can be renewed. |  | 64.0 |
| renewal​Period​Type | String | The unit of time used to measure the renewal period for a club membership. For example, Days , Months, or Years. |  | 64.0 |

## Code Examples

```
{
    "clubMembershipNumber": "ARC0001",
    "renewalPeriodType":"months",
    "renewalPeriod":"3",
    "notes":"",
    "externalIdentifier":"",
    "OrderItemId" : ""
}
```
