---
title: "ReferralAPIManager"
domain: referral-marketing
topic: referralapimanager
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.040Z
estimatedTokens: 1098
keywords: [ReferralAPIManager, invokes, manages, referral-related, REST, API, requests, interact, Salesforce, Referral, Marketing, APIs, manage, operations, referralEnrollment]
---

# ReferralAPIManager

> The ReferralAPIManager class invokes and manages
    referral-related REST API requests. Use this class to interact with the Salesforce Referral
    Marketing APIs and manage referral-related operations.

# ReferralAPIManager

The ReferralAPIManager class invokes and manages referral-related REST API requests. Use this class to interact with the Salesforce Referral Marketing APIs and manage referral-related operations.

## Methods

## referralEnrollment

Enroll an existing member to a given promotion using the membership number.

public func referralEnrollment(membershipNumber: String, promotionCode: String, memberStatus: String = MemberStatus.active.rawValue, version: String = ReferralAPIVersion.defaultVersion, devMode: Bool = false) async throws -> ReferralEnrollmentOutputModel

Enroll an existing member to a given promotion using the contact ID.

public func referralEnrollment(contactID: String, promotionCode: String, memberStatus: String = MemberStatus.active.rawValue, version: String = ReferralAPIVersion.defaultVersion, devMode: Bool = false) async throws -> ReferralEnrollmentOutputModel

Enroll a new member to a given promotion.

public func referralEnrollment(firstName: String, lastName: String, email: String, membershipNumber: String, promotionCode: String, enrollmentChannel: ReferralEnrollmentChannel = ReferralEnrollmentChannel.mobile, memberStatus: String = MemberStatus.active.rawValue, tjStatementFrequency: TransactionJournalStatementFrequency = .monthly, tjStatementMethod: TransactionJournalStatementMethod = .email, version: String = ReferralAPIVersion.defaultVersion, devMode: Bool = false) async throws -> ReferralEnrollmentOutputModel

| Parameter | Type | Description |
| --- | --- | --- |
| contactID | String | Required. The contact ID of the existing member. Provide either the contact ID, the membership number, or the person account details (first name, last name, and email), and not all. |
| country | String | The name of the country of the member. |
| devMode | Boolean | Indicates whether the method is run in the developer mode (true) or not (false). |
| email | String | Required. The email ID of the member. |
| enrollmentChannel | String | Channel used to join the referral program. Possible values are:CallCenterEmailFranchiseMobilePartnerPosPrintSocialStoreWebThe default value is Email. |
| firstName | String | Required. The first name of the member. Provide either the contact ID, the membership number, or the person account details (first name, last name, and email), and not all. |
| lastName | String | Required. The last name of the member. Provide either the contact ID, the membership number, or the person account details (first name, last name, and email), and not all. |
| memberStatus | String | Status of the new advocate after enrollment.Possible values are:ActiveInactiveCustom value - Any value defined in your org. For example, if an advocate must be evaluated before confirming enrollment, you can create a status called On Hold and assign it to this field.The default value is Active. |
| membershipNumber | String | Required. The membership number of the existing member. Provide either the contact ID, the membership number, or the person account details (first name, last name, and email), and not all. |
| promotionCode | String | Required. The promotion code to enroll for. |
| state | String | The name of the state of the member. |
| transactionalJournalFrequency | String | The frequency at which transaction statements must be generated for the advocate.Possible values are:MonthlyQuarterlyThe default value is Monthly. |
| transactionalJournalMethod | String | Preferred method of receiving transaction journal statements.Possible values are:EmailMailThe default value is Email. |
| version | String | The API version. |

## referralEvent

Send referral emails to the given recipients.

public func referralEvent(emails: \[String\], referralCode: String, eventType: ReferralEventType = .refer, version: String = ReferralAPIVersion.defaultVersion, devMode: Bool = false) async throws -> ReferralEventOutputModel

| Parameter | Type | Description |
| --- | --- | --- |
| devMode | Boolean | Indicates whether the method is run in the developer mode (true) or not (false). |
| emails | String[] | Required. A list of recipient emails to share the referral code with. |
| eventType | String | The type of event. Possible values are:EnrollmentPurchaseReferThe default value is Refer. |
| referralCode | String | Required. The referral code to share with the recipients. |
| version | String | The API version. |
