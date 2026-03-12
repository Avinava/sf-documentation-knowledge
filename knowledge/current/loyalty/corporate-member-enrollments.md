---
title: "Corporate Member Enrollments"
domain: loyalty
topic: corporate-member-enrollments
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.080Z
estimatedTokens: 800
keywords: [Corporate, Member, Enrollments, Enroll, members, loyalty, program, business, account, record, new]
---

# Corporate Member Enrollments

> Enroll corporate members in a loyalty program. Create a business
      account and a Corporate type loyalty program member record for the new
    member.

# Corporate Member Enrollments

Enroll corporate members in a loyalty program. Create a business account and a Corporate type loyalty program member record for the new member.

To use this resource, Person Accounts must be enabled in your org. The profile of the user who executes the resource must have Business Account selected as the default record type for business accounts. If the profile of the user has a different record type selected as the default record type for business accounts, an Account record of the selected record type is created for the member.

Resource

```

```

Example

```

```

Available version

55.0

Requires Chatter

No

HTTP methods

POST

Request body for POST

Root XML tag

<corporateMemberEnrollment>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalMember​FieldValues | Map<String, String> | The custom attributes of the member in the loyalty program member record.KeysValues | Optional | 55.0 |
| associatedAccountDetails | Loyalty Account Input | The business account details of the member. | Required | 55.0 |
| canReceivePartner​Promotions | Boolean | Indicates whether the member can receive partner promotions for the program (true) or not (false). | Optional | 55.0 |
| canReceivePromotions | Boolean | Indicates whether the member can receive promotions for the program. | Optional | 55.0 |
| createTransaction​Journals | Boolean | Indicates whether to create the transaction journal records (true) or not (false) :The transaction journal records are created to:Credit points to the member for enrolling.Credit points to the member who has referred the new member. | Optional | 55.0 |
| enrollmentChannel | String | The channel used by members to enroll into a loyalty program.Possible values are:CallCenterEmailFranchiseMobilePartnerPosPrintSocialStoreWeb | Optional | 55.0 |
| enrollmentDate | String | The date on which a member is enrolled. | Required | 55.0 |
| memberStatus | String | Status of the member. Possible values are:ActiveInactiveCustom value | Required | 55.0 |
| membershipEndDate | String | The date on which the loyalty program member's membership ends. | Optional | 55.0 |
| membershipNumber | String | The unique membership number of the loyalty program member. | Required | 55.0 |
| referredBy | String | The ID of the loyalty program member who has referred the member. | Optional | 55.0 |
| referredByMemberReferralCode | String | The referral code of the loyalty program member who has referred the member. | Optional | 57.0 |
| transactionJournal​StatementFrequency | String | The frequency at which transaction journal statements must be delivered to the member. Possible values are:DailyMonthlyYearly | Optional | 55.0 |
| transactionJournal​StatementMethod | String | The method used to deliver transaction journal statements to the member.Possible values are:EmailMail | Optional | 55.0 |

Response body for POST

[Corporate Member Enrollment Output](atlas.en-us.loyalty.meta/loyalty/connect_responses_corporate_member_enrollment_output.htm "Output representation of the corporate member enrollment create request.")

## Code Examples

```
/loyalty-programs/${loyaltyProgramName}/corporate-member-enrollments
```

```
https://yourInstance.salesforce.com/services/data/vXX.X
/loyalty-programs/program1/corporate-member-enrollments
```

```
{
    "enrollmentDate" : "2021-01-01T05:05:05",
    "membershipNumber" : "Member123",
    "associatedAccountDetails" : {
        "name" : "Name1",
        "phone" : "908989898",
        "website" : "www.ab.com",
        "allowDuplicateRecords" : "false",
        "additionalAccountFieldValues" : {
            "attributes" : {
                "CustomNumber__c" : "20.0"
            }
        }
    },
    "memberStatus" : "Active",
    "referredBy" : "Member12", 
    "referredByMemberReferralCode" : "MPX12adf",
    "createTransactionJournals" : "true", 
    "transactionJournal​StatementFrequency" : "Monthly", 
    "additionalMember​FieldValues" : {
        "attributes" : {
            "CustomBoolean__c" : "true"
        }
    }
}
```

## Related Topics

- Loyalty Account
                                            Input (atlas.en-us.loyalty.meta/loyalty/connect_requests_loyalty_account_input.htm)
- Corporate Member Enrollment Output (atlas.en-us.loyalty.meta/loyalty/connect_responses_corporate_member_enrollment_output.htm)
