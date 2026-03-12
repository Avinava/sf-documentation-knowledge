---
title: "Referral Enrollment"
domain: referral-marketing
topic: referral-enrollment
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:35.855Z
estimatedTokens: 949
keywords: [Referral, Enrollment, Enroll, new, customer, promotion, Resource, Input, Sample, Output]
---

# Referral Enrollment

> Enroll an existing or new customer to a referral promotion.

# Referral Enrollment

Enroll an existing or new customer to a referral promotion.

## Resource

```

```

```

```

```

```

## Signature

public func referralEnrollment(membershipNumber: String, promotionCode: String, memberStatus: String = MemberStatus.active.rawValue, version: String = ReferralAPIVersion.defaultVersion, devMode: Bool = false) async throws -> ReferralEnrollmentOutputModel

public func referralEnrollment(contactID: String, promotionCode: String, memberStatus: String = MemberStatus.active.rawValue, version: String = ReferralAPIVersion.defaultVersion, devMode: Bool = false) async throws -> ReferralEnrollmentOutputModel

public func referralEnrollment(firstName: String, lastName: String, email: String, membershipNumber: String, promotionCode: String, enrollmentChannel: ReferralEnrollmentChannel = ReferralEnrollmentChannel.mobile, memberStatus: String = MemberStatus.active.rawValue, tjStatementFrequency: TransactionJournalStatementFrequency = .monthly, tjStatementMethod: TransactionJournalStatementMethod = .email, version: String = ReferralAPIVersion.defaultVersion, devMode: Bool = false) async throws -> ReferralEnrollmentOutputModel

## Input Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| contactID | String | Required. The contact ID of the existing member. Provide either the contact ID, the membership number, or the person account details (first name, last name, and email), and not all. |
| country | String | The name of the country of the member. |
| devMode | Boolean | Indicates whether the method is run in the developer mode (true) or not (false). |
| email | String | Required. The email ID of the member. Provide either the contact ID, the membership number, or the person account details (first name, last name, and email), and not all. |
| enrollmentChannel | String | Channel used to join the referral program. Possible values are:CallCenterEmailFranchiseMobilePartnerPosPrintSocialStoreWebThe default value is Email. |
| firstName | String | Required. The first name of the member. Provide either the contact ID, the membership number, or the person account details (first name, last name, and email), and not all. |
| lastName | String | Required. The last name of the member. Provide either the contact ID, the membership number, or the person account details (first name, last name, and email), and not all. |
| memberStatus | String | Status of the new advocate after enrollment.Possible values are:ActiveInactiveCustom value - Any value defined in your org. For example, if an advocate must be evaluated before confirming enrollment, you can create a status called On Hold and assign it to this field.The default value is Active. |
| membershipNumber | String | Required. The membership number of the existing member. Provide either the contact ID, the membership number, or the person account details (first name, last name, and email), and not all. |
| promotionCode | String | Required. The promotion code to enroll for. |
| state | String | The name of the state of the member. |
| transactionalJournalFrequency | String | Frequency at which transaction statements must be generated for the advocate.Possible values are:MonthlyQuarterlyThe default value is Monthly. |
| transactionalJournalMethod | String | Preferred method of receiving transaction journal statements.Possible values are:EmailMailThe default value is Email. |
| version | String | The API version. |

## Return Value

A ReferralEnrollmentOutputModel instance.

```

```

## Sample Output

```

```

## Output Parameters

[Referral Advocate Enrollment](atlas.en-us.referral_marketing.meta/referral_marketing/connect_responses_referral_member_enrollment_output.htm "Output representation of the request to create a referral program advocate.")

## Code Examples

```
referralEnrollment(membershipNumber:promotionCode:memberStatus:version:devMode)
```

```
referralEnrollment(contactID:promotionCode:memberStatus:version:devMode)
```

```
referralEnrollment(firstName:lastName:email:membershipNumber:promotionCode:enrollmentChannel:memberStatus:tjStatementFrequency:tjStatementMethod:version:devMode)
```

```apex
public struct ReferralEnrollmentOutputModel: Codable
```

```
{
  "contactId": "003RO000003vJeU",
  "memberId": "0lMRO00000000nO",
  "membershipNumber": "DemoJun21",
  "programName": "DemoProgram",
  "promotionReferralCode": "ZB74ANSO-DemoPromo1",
  "transactionJournals": [
    {
      "activityDate": "2023-06-21T13:37:26.000Z",
      "journalSubType": "Member Enrollment",
      "journalType": "Referral",
      "membershipNumber": "DemoJun21",
      "programName": "DemoProgram",
      "status": "Processed",
      "transactionJournalId": "0lVRO00000002wV"
    }
  ]
}
```

## Related Topics

- Referral Advocate Enrollment (atlas.en-us.referral_marketing.meta/referral_marketing/connect_responses_referral_member_enrollment_output.htm)
