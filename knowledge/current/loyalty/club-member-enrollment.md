---
title: "Club Member Enrollment"
domain: loyalty
topic: club-member-enrollment
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.031Z
estimatedTokens: 429
keywords: [Club, Member, Enrollment, Enroll, members, manage, their, including, membership, numbers, renewal, periods, end, dates]
---

# Club Member Enrollment

> Enroll members in a club and manage their details, including membership numbers,
    renewal periods, and end dates.

# Club Member Enrollment

Enroll members in a club and manage their details, including membership numbers, renewal periods, and end dates.

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
| programName | Integer | Name of the loyalty program. | Required | 64.0 |
| clubName | Integer | Name of the club. | Required | 64.0 |

Request body for POST

```

```

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

Response body for POST

[Club Member Enrollment Details](atlas.en-us.loyalty.meta/loyalty/connect_response_club_member_enrollment_detail.htm "Represents the output for Club Member Enrollment API.")

## Code Examples

```
loyalty-programs/{programName}/clubs/{clubName}/member-enrollment
```

```
loyalty-programs/SampleProgramName/clubs/SampleClubName/member-enrollment
```

```
Enroll an Existing Loyalty Program Member

 
{
    "enrollmentDate": "2025-03-10T00:00:00",
    "clubMembershipNumber": "NAME1",
    "loyaltyMembershipNumber":"ARC0001",
    "memberStatus": "Active",
    "membershipEndDate": "2025-03-25T00:00:00"
}


Enroll an Existing Contact (Person Account is Not needed)

{
    "enrollmentDate": "2025-03-10T00:00:00",
    "clubMembershipNumber": "NAME2",
    "contactId":"003xx000004WhFrAAK",
    "memberStatus": "Active",
    "membershipEndDate": "2025-03-25T00:00:00"
}


Enroll a New Person (Person Account is Not needed)
 
{
    "enrollmentDate": "2025-03-10T00:00:00",
    "clubMembershipNumber": "NAME3",
    "associatedContactDetails": {
        "firstName": "Name3",
        "lastName": "Name3",
        "email": "Name3@email.com",
        "allowDuplicateRecords": "false"
    },
    "memberStatus": "Active",
    "membershipEndDate": "2025-03-25T00:00:00"
}


Enroll an Existing Account

{
    "enrollmentDate": "2025-03-10T00:00:00",
    "clubMembershipNumber": "NAME4",
    "accountId":"001xx000003GYiBAAW",
    "memberStatus": "Active",
    "membershipEndDate": "2025-03-25T00:00:00"
}


Enroll a New Account (Person Account is Not needed)
 
{
    "enrollmentDate": "2025-03-10T00:00:00",
    "clubMembershipNumber": "NAME5",
    "associatedAccountDetails": {
        "name": "NAME5",
        "phone": "0123456789",
        "website": "www.name5.com",
        "allowDuplicateRecords": "false"
    },
    "memberStatus": "Active",
    "membershipEndDate": "2025-03-25T00:00:00"
}
```

## Related Topics

- Loyalty Account Input (atlas.en-us.loyalty.meta/loyalty/connect_requests_loyalty_account_input.htm)
- Loyalty Contact Input (atlas.en-us.loyalty.meta/loyalty/connect_requests_loyalty_contact_input.htm)
- Club Member Enrollment Details (atlas.en-us.loyalty.meta/loyalty/connect_response_club_member_enrollment_detail.htm)
