---
title: "Club Member Enrollment Input"
domain: loyalty
topic: club-member-enrollment-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:50.857Z
estimatedTokens: 269
keywords: [Club, Member, Enrollment, Input, representation, enroll]
---

# Club Member Enrollment Input

> The input representation to enroll a club member.

# Club Member Enrollment Input

The input representation to enroll a club member.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | The ID of the associated account record. |  | 64.0 |
| associated​Account​Details | Loyalty Account Input | The business account details of the member. |  | 64.0 |
| associated​Contact​Details | Loyalty Contact Input | The contact associated with the club member. |  | 64.0 |
| club​Membership​Number | String | The membership number of the club member. |  | 64.0 |
| contact​Id | String | The contact details of the member. |  | 64.0 |
| enrollment​Date | String | The date on which a member is enrolled into the club. |  | 64.0 |
| loyalty​Membership​Number | String | The membership number of the loyalty program member. |  | 64.0 |
| member​Status | String | The status of the club member. |  | 64.0 |
| membership​By | String | Member enrolled based on. |  | 64.0 |
| membership​EndDate | String | The end date of the club membership. |  | 64.0 |

## Related Topics

- Loyalty Account Input (atlas.en-us.loyalty.meta/loyalty/connect_requests_loyalty_account_input.htm)
- Loyalty Contact Input (atlas.en-us.loyalty.meta/loyalty/connect_requests_loyalty_contact_input.htm)
