---
title: "ReferralsRepository"
domain: referral-marketing
topic: referralsrepository
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.017Z
estimatedTokens: 1024
keywords: [ReferralsRepository, invokes, manages, referral-related, REST, API, requests, interact, Salesforce, Referral, Marketing, APIs, manage, operations, enrollNewCustomerAsAdvocateOfPromotion]
---

# ReferralsRepository

> The ReferralsRepository interface invokes and
    manages referral-related REST API requests. Use this class to interact with the Salesforce
    Referral Marketing APIs and manage referral-related operations.

# ReferralsRepository

The ReferralsRepository interface invokes and manages referral-related REST API requests. Use this class to interact with the Salesforce Referral Marketing APIs and manage referral-related operations.

## Methods

## enrollNewCustomerAsAdvocateOfPromotion

Enroll a new member to a given promotion.

val result: ApiResponse<ReferralEnrollmentResponse> = repository.enrollNewCustomerAsAdvocateOfPromotion(firstName = "John", lastName = "Doe", email = "john.doe@example.com", promotionName = "Referral Program", promotionCode = "PromoCode" )

| Parameter | Type | Description |
| --- | --- | --- |
| country | String | The name of the country of the member. |
| email | String | Required. The email ID of the member. |
| enrollmentChannel | String | Channel used to join the referral program. Possible values are:CallCenterEmailFranchiseMobilePartnerPosPrintSocialStoreWebThe default value is Email. |
| firstName | String | Required. The first name of the member. |
| lastName | String | Required. The last name of the member. |
| memberStatus | String | Status of the new advocate after enrollment.Possible values are:ActiveInactiveCustom value - Any value defined in your org. For example, if an advocate must be evaluated before confirming enrollment, you can create a status called On Hold and assign it to this field.The default value is Active. |
| promotionName | String | Required. The promotion name to enroll for. |
| promotionCode | String | Required. The promotion code to enroll for. |
| state | String | The name of the state of the member. |
| transactionalJournalFrequency | String | Frequency at which transaction statements must be generated for the advocate.Possible values are:MonthlyQuarterlyThe default value is Monthly. |
| transactionalJournalMethod | String | Preferred method of receiving transaction journal statements.Possible values are:EmailMailThe default value is Email. |

## enrollExistingAdvocateToPromotionWithMembershipNumber

Enroll an existing member to a given promotion using the membership number.

val result: ApiResponse<ReferralEnrollmentResponse> = repository.enrollExistingAdvocateToPromotionWithMembershipNumber( promotionName = "Referral Program", promotionCode = "PromoCode", membershipNumber = "1234567890" )

| Parameter | Type | Description |
| --- | --- | --- |
| promotionName | String | Required. The promotion name to enroll for. |
| promotionCode | String | Required. The promotion code to enroll for. |
| membershipNumber | String | Required. The membership number of the existing member. |

## enrollExistingAdvocateToPromotionWithContactId

Enroll an existing member to a given promotion using the contact ID.

val result: ApiResponse<ReferralEnrollmentResponse> = repository.enrollExistingAdvocateToPromotionWithContactId( promotionName = "Referral Program", promotionCode = "PromoCode", contactId = "0c12sed3456kpPl" )

| Parameter | Type | Description |
| --- | --- | --- |
| promotionName | String | Required. The promotion name to enroll for. |
| promotionCode | String | Required. The promotion code to enroll for. |
| contactId | String | Required. The contact ID of the existing member. |

## enrollExistingAdvocateToNewPromotion

Enroll an existing member to a new promotion.

val result: ApiResponse<ReferralEnrollmentResponse> = repository.enrollExistingAdvocateToNewPromotion( promotionName = "Referral Program", promotionCode = "PromoCode"" )

| Parameter | Type | Description |
| --- | --- | --- |
| promotionName | String | Required. The promotion name to enroll for. |
| promotionCode | String | Required. The promotion code to enroll for. |

## sendReferrals

Send referral emails to the given recipients.

val eventOutput: ApiResponse<ReferralEventResponse> = repository.sendReferrals(referralCode = "ReferralCode", emails = listOf("john.doe@example.com")

| Parameter | Type | Description |
| --- | --- | --- |
| referralCode | String | Required. The referral code to share with the recipients. |
| emails | List<String> | Required. A list of recipient emails to share the referral code with. |
