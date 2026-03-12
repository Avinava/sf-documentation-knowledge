---
title: "LoyaltyAPIManager for Android"
domain: loyalty
topic: loyaltyapimanager-for-android
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:52.560Z
estimatedTokens: 2252
keywords: [LoyaltyAPIManager, Android, Manage, requests, loyalty, program, interactions, application, APIs, manages, programs, Force, API, authentication, instance]
---

# LoyaltyAPIManager for Android

> Manage requests related to loyalty program and interactions between the application and
    the APIs. The LoyaltyAPIManager class manages requests
    related to loyalty programs using the Force API and manages
    authentication by using the instance of ForceAuthenticator that was injected at the time of
    initialization. Use this class to manage asynchronous requests by using Retrofit and Kotlin
    coroutines.

# LoyaltyAPIManager for Android

Manage requests related to loyalty program and interactions between the application and the APIs. The LoyaltyAPIManager class manages requests related to loyalty programs using the Force API and manages authentication by using the instance of ForceAuthenticator that was injected at the time of initialization. Use this class to manage asynchronous requests by using Retrofit and Kotlin coroutines.

Use this signature to define the LoyaltyAPIManager class.

public final class LoyaltyAPIManager

## Method Summary

| Method | Description |
| --- | --- |
| enrollInPromotions | Enroll a loyalty member to a promotion, while asynchronously sending data to the Enroll for Promotions API. |
| getEligiblePromotions | Get promotions that a member is eligible to enroll for. |
| getMemberBenefits | Retrieve the benefits associated with a loyalty program member for the specified API version, while asynchronously requesting data from the Member Benefits API. |
| getMemberProfile | Get the profile details of a loyalty program member by using this code. |
| getTransactions | Get transaction journals of a loyalty member. Obtain either accrual or redemption transaction journal records. |
| getVouchers | Retrieve the vouchers issued to a loyalty member by using this code. |
| postEnrollment | Enroll a member to a loyalty program, while asynchronously sending data to the Individual Member Enrollments API. |
| unEnrollPromotion | Opt out a loyalty member from a promotion. |

## enrollInPromotions Method

Enroll a loyalty member to a promotion, while asynchronously sending data to the Enroll for Promotions API. Use this code to enroll a member.

final Result<EnrollPromotionsResponse> enrollInPromotions(String membershipNumber, String promotionName)

| Parameter | Type | Description | Required or Optional |
| --- | --- | --- | --- |
| memberShipNumber | String | The membership number of the loyalty program member. | Required |
| promotionName | String | The promotion name the member is being enrolled to | Required |

## getEligiblePromotions Method

Get promotions that a member is eligible to enroll for. Use this code to get eligible promotions.

final Result<PromotionsResponse> getEligiblePromotions(String membershipNumber, String memberId)

| Parameter | Type | Description | Required or Optional |
| --- | --- | --- | --- |
| memberId | Boolean | The identifier of the member whose eligible promotions are being retrieved. | Optional |
| memberShipNumber | String | The membership number of the loyalty program member. | Required |

## getMemberBenefits Method

Retrieve the benefits associated with a loyalty program member for the specified API version, while asynchronously requesting data from the Member Benefits API. Use this code to get member benefits.

final Result<MemberBenefitsResponse> getMemberBenefits(String memberId, String membershipNumber)

| Parameter | Type | Description | Required or Optional |
| --- | --- | --- | --- |
| memberId | Boolean | Identifier of the member whose benefits are being retrieved. | Optional |
| memberShipNumber | String | The membership number of the loyalty program member. | Required |

## getMemberProfile Method

Get the profile details of a loyalty program member by using this code.

final Result<MemberProfileResponse> getMemberProfile(String memberId, String memberShipNumber, String programCurrencyName)

| Parameter | Type | Description | Required or Optional |
| --- | --- | --- | --- |
| memberId | Boolean | Identifier of the member whose profile is being retrieved. | Optional |
| memberShipNumber | String | The membership number of the loyalty program member. | Required |
| programCurrencyName | String | The name of the loyalty program currency associated with the member. | Optional |

## getTransactions Method

Get transaction journals of a loyalty member. Obtain either accrual or redemption transaction journal records. Use this code to get transactions.

final Result<MemberBenefitsResponse> getMemberBenefits(String memberId, String membershipNumber)

| Parameter | Type | Description | Required or Optional |
| --- | --- | --- | --- |
| journalSubTypeName | String | The subtype of the transaction journal record. | Optional |
| journalTypeName | String | The type of the transaction journal record. Possible values are:AccrualRedemption | Optional |
| pageNumber | Integer | The page number to be returned. If you don’t specify a value, the first page is returned. Each page contains 200 transactions, sorted by their date of creation. | Optional |
| memberShipNumber | String | The membership number of the loyalty program member. | Required |
| periodStartDate | String | Retrieve transaction journals starting on this date. | Optional |
| periodEndDate | String | Retrieve transaction journals until this date. | Optional |

## getVouchers Method

Retrieve the vouchers issued to a loyalty member by using this code.

final Result<VoucherResult> getVouchers(String membershipNumber, Array<String> voucherStatus, Integer pageNumber, Array<String> productId, Array<String> productCategoryId, Array<String> productName, Array<String> productCategoryName)

This table shows the parameters in the getVouchers method.

| Parameter | Description |
| --- | --- |
| membershipNumber | Membership number of the member whose vouchers are being retrieved. |
| voucherStatus | The status of a voucher. |
| pageNumber | Number of the page you want returned. If you don’t specify a value, the first page is returned. By default, each page contains 200 vouchers, which are sorted based on the voucher creation date. |
| productId | The ID of the product related to the vouchers that you want to retrieve. You can specify the ID of up to 20 products. |
| productCategoryId | The ID of the product categories related to the vouchers that you want to retrieve. You can specify the ID of up to 20 product categories. |
| productName | The product name related to the voucher. |
| productCategoryName | The name of the product categories related to the vouchers that you want to retrieve. You can specify the ID of up to 20 product category names. |

## postEnrollment Method

Enroll a member to a loyalty program, while asynchronously sending data to the Individual Member Enrollments API. Use this code to enroll a member.

final Result<EnrollmentResponse> postEnrollment(String firstName, String lastName, String email, Map<String, Object> additionalContactAttributes, Boolean emailNotification, MemberStatus memberStatus, Boolean createTransactionJournals, TransactionalJournalStatementFrequency transactionalJournalStatementFrequency, TransactionalJournalStatementMethod transactionalJournalStatementMethod, EnrollmentChannel enrollmentChannel, Boolean canReceivePromotions, Boolean canReceivePartnerPromotions)

This table shows the parameters in the postEnrollment method.

| Parameter | Description |
| --- | --- |
| additionalContactAttributes | The person account record details of the individual type member. |
| canReceivePartnerPromotions | Indicates whether the member can receive partner promotions for the program (true) or not (false). |
| canReceivePromotions | Indicates whether the loyalty program member can receive promotions. |
| createTransactionJournals | Indicates whether to create the transaction journal records true) or not (false). |
| email | The email address of the member being enrolled. |
| emailNotification | Indicates whether the member wants to receive email notifications. |
| enrollmentChannel | The channel used to by loyalty program members to enroll in to the loyalty program. Possible values are:PosWebEmailCallCenterSocialMobileStoreFranchisePartnerPrint |
| firstName | The first name of the member being enrolled. |
| lastName | The last name of the member being enrolled. |
| memberStatus | The status of the loyalty program member. Possible values are:ActiveInactiveCustom |
| transactionalJournalStatementFrequency | The frequency at which transaction journal statements must be delivered to the member. Possible values are:MonthlyQuarterly |
| transactionalJournalStatementMethod | The method used to deliver transaction journal statements to the member. Possible values are:MailEmail |

## unEnrollPromotion Method

Opt out a loyalty member from a promotion. Use this code to opt out of a promotion.

final Result<UnenrollPromotionResponse> unEnrollPromotion(String membershipNumber, String promotionName)

| Parameter | Type | Description | Required or Optional |
| --- | --- | --- | --- |
| memberShipNumber | String | Unique identifier of the member who wants to opt out of a promotion | Required |
| promotionName | String | Name of the promotion that the member wants to opt out of. | Required |

-   **[Create an Instance of LoyaltyAPIManager Class for Android](atlas.en-us.loyalty.meta/loyalty/mobile_sdk_android_loyaltyapimanager.htm)**
    Create an instance of the LoyaltyAPIManager class and interact with the Loyalty Management APIs.

## Related Topics

- Create an Instance of LoyaltyAPIManager Class for Android (atlas.en-us.loyalty.meta/loyalty/mobile_sdk_android_loyaltyapimanager.htm)
