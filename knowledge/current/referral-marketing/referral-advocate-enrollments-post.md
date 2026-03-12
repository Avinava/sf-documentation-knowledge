---
title: "Referral Advocate Enrollments (POST)"
domain: referral-marketing
topic: referral-advocate-enrollments-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:35.791Z
estimatedTokens: 857
keywords: [Referral, Advocate, Enrollments, POST, Enroll, new, customer, promotion, Special, Access, Rules]
---

# Referral Advocate Enrollments (POST)

> Enroll an existing or new customer as an advocate of a referral promotion.

# Referral Advocate Enrollments (POST)

Enroll an existing or new customer as an advocate of a referral promotion.

## Special Access Rules

To use this resource, your org must have person accounts enabled.

Resource

```

```

Resource example

```

```

Available version

59.0

Requires Chatter

No

HTTP methods

POST

Request body for POST

Root XML tag

referralMemberEnrollmentInput

JSON examples to enroll an existing referral program advocate to a promotion

```

```

```

```

```

```

JSON example to enroll a new customer as an advocate of a promotion

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalMember​FieldValues | Map<String, String> | Custom field values of the advocate. | Optional | 59.0 |
| additionalPerson​AccountFieldValues | Map<String, String> | Custom field values from the advocate's person account. | Optional | 59.0 |
| associatedPerson​AccountDetails | Person Account Input | Details of the advocate's person account. | OptionalThis field is required only if you don’t have the contact ID or the membership number of the advocate. | 59.0 |
| contactId | String | Contact ID of the advocate to enroll to the referral promotion. | OptionalThis field is required only if you don’t have the person account details or the membership number of the advocate. | 59.0 |
| enrollmentChannel | String | Channel that the advocate has used to join the referral program. Possible values are:CallCenterEmailFranchiseMobilePartnerPosPrintSocialStoreWeb | Optional | 59.0 |
| memberStatus | String | Status of the new advocate after enrollment.Possible values are:ActiveInactiveCustom value - Any value you define in your org. For example, if an advocate must be evaluated before confirming enrollment, you can create a status called On Hold and assign it to this field.The default value is Active. | OptionalThis field is required for enrolling a new advocate. | 59.0 |
| membershipEndDate | String | Date the advocate's referral program membership ends. | Optional | 59.0 |
| membershipNumber | String | Unique membership number of the advocate. | OptionalThis field is required only if you don’t have the person account details or the contact ID of the advocate. | 59.0 |
| shouldProcess​TransactionsInRealTime | Boolean | Indicates whether the transaction journals created by the API are processed as soon as they’re created (true) or not (false). The default value is true. | Optional | 59.0 |
| transactionJournal​StatementFrequency | String | Frequency at which transaction statements must be generated for the advocate.Possible values are:MonthlyQuarterly | Optional | 59.0 |
| transactionJournal​StatementMethod | String | Preferred method of receiving transaction journal statements.Possible values are:EmailMail | Optional | 59.0 |
| isAutoEnrolled | Boolean | Indicates whether member is auto-enrolled for referral promotion (true) or not (false). The default value is false. | Optional | 64.0 |
| isEnrollmentActive | Boolean | Indicates if the member is enrolled for the referral promotion (true) or not (false). The default value is true. | Optional | 64.0 |

Response body for POST

[Referral Member Enrollment](atlas.en-us.referral_marketing.meta/referral_marketing/connect_responses_referral_member_enrollment_output.htm "Output representation of the request to create a referral program advocate.")

## Code Examples

```
/referral-programs/${referralProgramName}/promotions/${promotionCode}/member-enrollments
```

```
https://yourInstance.salesforce.com/services/data/v66.0/referral-programs/demoProgram/promotions/DemoPromo1/member-enrollments
```

```
{
   "membershipNumber":"M125"
}
```

```
{
  "contactId": "003xx000004Wsxc"
}
```

```
{
  "associatedPersonAccountDetails": {
    "firstName": "Mac",
    "lastName": "Ray",
    "email": "mray@salesforce.com",
    "allowDuplicateRecords": "false",
    "additionalPersonAccountFieldValues": {
      "attributes": {
        "country__c": "US"
      }
    }
  },
  "memberStatus": "Active",
  "transactionJournalStatementFrequency": "Monthly",
  "transactionJournalStatementMethod": "Mail",
  "enrollmentChannel": "Email",
  "additionalMemberFieldValues": {
    "attributes": {
      "state__c": "California"
    }
  }
}
```

## Related Topics

- Person Account
                        Input (atlas.en-us.referral_marketing.meta/referral_marketing/connect_requests_person_account_input.htm)
- Referral Member Enrollment (atlas.en-us.referral_marketing.meta/referral_marketing/connect_responses_referral_member_enrollment_output.htm)
