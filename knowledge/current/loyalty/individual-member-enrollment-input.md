---
title: "Individual Member Enrollment Input"
domain: loyalty
topic: individual-member-enrollment-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.903Z
estimatedTokens: 750
keywords: [Individual, Member, Enrollment, Input, representation, creating, person, account, Loyalty, Program, record]
---

# Individual Member Enrollment Input

> Input representation for creating a person account and an Individual
      type Loyalty Program Member record for the member.

# Individual Member Enrollment Input

Input representation for creating a person account and an Individual type Loyalty Program Member record for the member.

Root XML tag

<individualMemberEnrollment>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalMember​FieldValues | Map<String, String> | The custom attributes of the member in the loyalty program member record.KeysValues | Required | 55.0 |
| associatedContactDetails | Loyalty Contact Input | The person account record details of the individual type member. | Required | 55.0 |
| canReceivePartner​Promotions | Boolean | Indicates whether the member can receive partner promotions for the program (true) or not (false). | Optional | 55.0 |
| canReceivePromotions | Boolean | Indicates whether the loyalty program member can receive promotions. | Optional | 55.0 |
| createTransaction​Journals | Boolean | Indicates whether to create the transaction journal records (true) or not (false) :The transaction journal records are created to:Credit points to the member for enrolling.Credit points to the member who has referred the new member. | Optional | 55.0 |
| enrollmentChannel | String | The channel used to by loyalty program member to enroll in to the loyalty program. Possible values are:PosWebEmailCallCenterSocialMobileStoreFranchisePartnerPrint | Optional | 55.0 |
| enrollmentDate | Date | The date on which the loyalty program member is enrolled in to the loyalty program.The format is: YYYY-MM-DDTHH:mm:ss. For example: 2020-09-08T00:00:00.This field must be provided in the org’s configured timezone, not in Central UTC. The system doesn't convert this value from UTC to org timezone internally. In other words, the provided datetime already represents the correct org-local enrollment date and time. | Required | 55.0 |
| memberStatus | String | The status of the loyalty program member. Possible values are:ActiveInactiveCustom | Required | 55.0 |
| membershipEndDate | String | The date on which the loyalty program member's membership ends. | Optional | 55.0 |
| membershipNumber | String | The unique membership number of the loyalty program member. | Required | 55.0 |
| referredBy | String | The membership number of the loyalty program member who has referred the member. | Optional | 55.0 |
| referredByMemberReferralCode | String | The referral code of the loyalty program member who has referred the member. | Optional | 57.0 |
| relatedCorporate​MembershipNumber | String | External corporate membership number of the member. | Optional | 55.0 |
| transactionJournal​StatementFrequency | String | The frequency at which transaction journal statements must be delivered to the member. Possible values are:MonthlyQuarterly | Optional | 55.0 |
| transactionJournal​StatementMethod | String | The method used to deliver transaction journal statements to the member. Possible values are:MailEmail | Optional | 55.0 |

## Code Examples

```
{
  "enrollmentDate" : "2021-01-01T00:00:00",
  "membershipNumber" : "Member1",
  "associatedContactDetails" : {
    "firstName" : "Name1",
    "lastName" : "Name2",
    "email" : "ab@email.com",
    "allowDuplicateRecords" : "false",
    "additionalContactFieldValues" : {
      "attributes" : {
        "PersonMailingCity" : "Delhi",
        "CustomNumber__c" : "20.0"      }
    }
  },

  "memberStatus" : "Active",
  "referredBy" : "Member2",
  "referredByMemberReferralCode" : "MPX12adf",
  "createTransactionJournals" : "true",
  "transactionJournalStatementFrequency" : "Monthly",
  "transactionJournalStatementMethod" : "Mail",
  "enrollmentChannel" : "Email",
  "canReceivePromotions": "true",
  "canReceivePartnerPromotions" : "true",
  "membershipEndDate" : "2022-01-01T00:00:00",
  "relatedCorporateMembershipNumber" : "Member3",
  "additionalMemberFieldValues" : {
    "attributes" : {
      "CustomBoolean__c" : "true"    }
  }
}
```

## Related Topics

- Contact (atlas.en-us.loyalty.meta/loyalty/connect_requests_loyalty_contact_input.htm)
- Loyalty Contact
                        Input (atlas.en-us.loyalty.meta/loyalty/connect_requests_loyalty_contact_input.htm)
