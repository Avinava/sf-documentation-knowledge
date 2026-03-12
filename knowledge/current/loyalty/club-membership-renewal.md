---
title: "Club Membership Renewal"
domain: loyalty
topic: club-membership-renewal
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.041Z
estimatedTokens: 443
keywords: [Club, Membership, Renewal, Renew, members, manage, their, numbers, periods, end, dates, output, API]
---

# Club Membership Renewal

> Renew the membership of club members and manage their membership details such as
    membership numbers, renewal periods, and end dates.

# Club Membership Renewal

Renew the membership of club members and manage their membership details such as membership numbers, renewal periods, and end dates.

Resource

```

```

Resource Example

```

```

Available version

64.0

HTTP methods

POST

URI Parameters

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| programName | Integer | Name of the loyalty program. In case of an Independent Club, use the value Club Program. | Required | 64.0 |
| clubName | Integer | Name of the club. | Required | 64.0 |

Request body for POST

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

Response body for POST

[Club Membership Renewal](atlas.en-us.loyalty.meta/loyalty/connect_responses_club_membership_renewa.htm "Represents the output for Club Membership Renewal API.")

## Code Examples

```
/loyalty-programs/${loyaltyProgramName}/clubs/${clubName}/membership-renewal
```

```
/loyalty-programs/SampleLoyaltyProgramName/clubs/SampleClubName/membership-renewal
```

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

```
{
    "clubMembershipNumber": "ARC0001",
    "clubMembershipEndDate": "2026-01-01T00:00:00"
}
```

## Related Topics

- Club Membership Renewal (atlas.en-us.loyalty.meta/loyalty/connect_responses_club_membership_renewa.htm)
