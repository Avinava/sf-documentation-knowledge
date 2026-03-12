---
title: "LoyaltyAPIManager"
domain: loyalty
topic: loyaltyapimanager
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:52.708Z
estimatedTokens: 3412
keywords: [LoyaltyAPIManager, Manage, requests, loyalty, program, interactions, application, APIs, Define, Authentication, Instance, URL, Initialize, Sort, Results]
---

# LoyaltyAPIManager

> Manage requests related to loyalty program and interactions between the application and
  the APIs.

# LoyaltyAPIManager

Manage requests related to loyalty program and interactions between the application and the APIs.

Use this signature to define the LoyaltyAPIManager class.

```

```

## Define Authentication

Create an instance of ForceAuthenticator for authentication by using this resource and signature.

auth

```

```

## Create a Loyalty Program Name

Create a loyalty program name variable by using this resource and signature.

loyaltyProgramName

```

```

## Create an Instance URL

Provide the base URL of the loyalty program API by using this resource and signature. Base URL is the root address of your Salesforce instance. For example, if the URL in your browser’s address bar is https://na35.salesforce.com/home/home.jsp, your base URL is https://na35.salesforce.com.

instanceURL

```

```

## Initialize the LoyaltyAPIManager Class

Initialize a LoyaltyAPIManager that contains the necessary parameters such as auth, loyalty program name, instance URL, and forceclient by using this resource and signature.

init(auth:loyaltyProgramName:instanceURL:forceClient:)

```

```

## Sort Requests

Sort the requests by a specific field by using this resource and signature.

SortBy

```

```

Use the parameters in this table to create a sort request.

| Parameter | Definition | Description |
| --- | --- | --- |
| expirationDate | case expirationDate | Sorts the requests by the expiration date of the authentication token. |
| effectiveDate | case effectiveDate | Sorts the requests by the effective date of the authentication token. |
| createdDate | case createdDate | Sorts the requests by the created date of the authentication token. |

## Sort Results

Specify if you want to view the sort results in ascending or descending order by using this resource and signature.

```

```

Use the parameters in this table to create a sort order request.

| Parameter | Definition | Description |
| --- | --- | --- |
| ascending | case ascending | Sorts the results in ascending order. |
| descending | case descending | Sorts the results in descending order. |

## Define Voucher Status

Define the possible statuses of a voucher by using this resource and signature.

VoucherStatus

```

```

Use the parameters in this table to define the voucher statuses.

| Parameter | Definition | Description |
| --- | --- | --- |
| issued | case issued | Represents the vouchers that are issued. |
| cancelled | case cancelled | Represents the vouchers that are cancelled. |
| expired | case expired | Represents the vouchers that have expired. |

## Identify Resource Type

Identify the type of resource to request by using this resource and signature. Use these resources to create secure and scalable mobile applications.

Resource

```

```

Use the methods in this table to get resources for a loyalty program.

| Method | Definition | Description |
| --- | --- | --- |
| individualEnrollment(programName:version:) | case individualEnrollment(programName: String, version: String) | Creates an individual enrollment for the loyalty program. The individualEnrollment method takes two parameters: programName, which represents the name of the loyalty program for which the individual enrollment is being created, and version, which represents the API version. |
| getMemberBenefits(memberId:version:) | case getMemberBenefits(memberId: String, version: String) | Retrieves benefits related to the member ID. The getMemberBenefits method takes two parameters: memberId, which represents the unique identifier of the member whose benefits are being retrieved, and version, which represents the API version. |
| getMemberProfile(programName:version:) | case getMemberProfile(programName: String, version: String) | Retrieves program name related to the member ID. The getMemberProfile method takes two parameters: programName, which represents the program membership name, and version, which represents the API version. |
| getTransactionHistory(programName:memberId:version:) | case getTransactionHistory(programName: String, memberId: String, version: String) | Retrieves the transaction history associated with the member ID. The getTransactionHistory method takes three parameters: programName, which represents the loyalty program name, memberId, which represents the unique identifier of the member whose transaction history is being retrieved, and version, which represents the API version. |
| getPromotions(programName:version:) | case getPromotions(programName: String, version: String) | Retrieves a member’s existing promotions. The getPromotions method takes two parameters: programName, which represents the name of the loyalty program, and version, which represents the API version. |
| enrollInPromotion(programName:version:) | case enrollInPromotion(programName: String, version: String) | Enrolls the member in a promotion. The enrollInPromotion method takes two parameters: programName, which represents the name of the loyalty program, and version, which represents the API version. |
| unenrollPromotion(programName:version:) | case unenrollPromotion(programName: String, version: String) | Opts out a member from an available promotion. The unenrollInPromotion method takes two parameters: programName, which represents the name of the loyalty program, and version, which represents the API version. |
| getVouchers(programName:membershipNumber:version:) | case getVouchers(programName: String, membershipNumber: String, version: String) | Retrieves vouchers available to the member ID. The getVouchers method takes three parameters: programName, which represents the name of the loyalty program, membershipNumber, which represents the unique identifier of the member whose vouchers are being retrieved, and version, which represents the API version. |

## Get API Resource Path

Get the path for the API resource by using this resource and signature. The function uses a resource parameter as input and returns the URL path of the resource as a string.

getPath(for:)

```

```

## Get Member Benefits

Retrieve the benefits associated with a loyalty program member for the specified API version, while asynchronously requesting data from the Member Benefits API. Use this resource and signature to get member benefits.

getMemberBenefits(for:version:devMode:)

```

```

The getMemberBenefits method takes three parameters: memberId, which represents the unique identifier of the member whose benefits are being retrieved, version, which represents the API version, and the devMode parameter, which determines if the request is run in developer mode.

## Get Member Profile

Get the profile details of a loyalty program member, while asynchronously requesting data from the Member Profile API. Use this resource and signature to get member profile details.

getMemberProfile(for:version:devMode:)

```

```

The getMemberProfile method takes three parameters:memberId , which represents the unique identifier of the member whose profile is being retrieved, version, which represents the API version, and the devMode parameter, which determines if the request is run in developer mode.

## Get Community Member Profile

Retrieve the Experience Cloud user profile associated with a loyalty program member for the specified API version, while asynchronously requesting data from Salesforce. Use this resource and signature to get the Experience Cloud user profile details.

getCommunityMemberProfile(version:devMode:)

```

```

The getCommunityMemberProfile method takes two parameters: version, which represents the default version of the mobile SDK, and the devMode parameter, which determines if the request is run in developer mode.

## Enroll a Member

Enroll a member to a loyalty program, while asynchronously sending data to the Individual Member Enrollments API. Use this resource and signature to enroll a member.

postEnrollment(membershipNumber:firstName:lastName:email:phone:emailNotification:version:)

```

```

This table shows the parameters in the method.

| Parameter | Description |
| --- | --- |
| membershipNumber | Membership number of the member being enrolled. |
| firstName | First name of the member being enrolled. |
| lastName | Last name of the member being enrolled. |
| email | Email address of the member being enrolled. |
| phone | Phone number of the member being enrolled. |
| emailNotification | Indicates whether the member wants to receive email notifications. |
| version | The default API version. |

After the enrollment, the request returns the membership number and program member ID.

## Opt In For a Promotion

Enroll a loyalty member to a promotion, while asynchronously sending data to the Enroll for Promotions API. Use this resource and signature to enroll a member.

enrollIn(promotion:for:version:)

```

```

The enrollIn method takes three parameters:promotionName , which represents the promotion name the member is being enrolled to, membershipNumber, which represents the membership number of the member being enrolled, and version, which represents the API version

## Use Promotion ID to Opt Out of a Promotion

Opt out a loyalty member from a promotion by using the promotion ID. Use this resource and signature to opt out of a promotion.

unenroll(promotionId:for:version:devMode:)

```

```

The unenroll method takes two parameters: promotionID, which represents the promotion ID from which the member is being unenrolled, membershipNumber, which represents the membership number of the member being unenrolled, and version, which represents the API version.

## Use Promotion Name to Opt Out of a Promotion

Opt out a loyalty member from a promotion by using the promotion name. Use this resource and signature to opt out of a promotion.

unenroll(promotionName:for:version:devMode:)

```

```

This table shows the parameters in the unenroll method.

| Parameter | Description |
| --- | --- |
| promotionName | Name of the promotion from which the member is being unenrolled. |
| membershipNumber | Membership number of the member being unenrolled. |
| version | Version of the mobile SDK. |
| devMode | Determines if the request is run in developer mode. |

## Use Member ID to Get Enrolled Promotions

Get the promotions that the member is enrolled to, by using the loyalty program member ID while asynchronously requesting data from the Enroll for Promotions API. Use this resource and signature to get the enrolled promotions.

getPromotions(memberId:version:devMode:)

```

```

The getPromotions method takes three parameters: memberID, which represents the unique identifier of the member whose promotions are being retrieved, version, which represents the default API version, and devMode, which determines if the request is run in developer mode.

## Use Membership Number to Get Enrolled Promotions

Get the promotions that the member is enrolled to, by using the loyalty program membership number while asynchronously requesting data from the Enroll for Promotions API. Use this resource and signature to get the enrolled promotions.

getPromotions(membershipNumber:version:devMode:)

```

```

The getPromotions method takes three parameters: membershipNumber, which represents the membership number of the member whose promotions are being retrieved, version, which represents the default API version, and devMode, which determines if the request is run in developer mode.

## Get Transaction Journals

Get transaction journals of a loyalty member. Obtain either accrual or redemption transaction journal records. Use this resource and signature to get transactions.

getTransactions(for:pageNumber:journalTypeName:journalSubTypeName:periodStartDate:periodEndDate:version:devMode:)

```

```

The getTransactions method takes the pageNumber parameter that represents the number of the page you want returned. If you don’t specify a value, the first page is returned. Each page contains 200 transaction journals and the transaction journals are sorted based on the activity date.

## Get Vouchers

Retrieve the vouchers issued to a loyalty member by using this resource and signature.

```

```

```

```

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
| sortBy | Specifies the field used to sort the vouchers you want to retrieve. The default value is ExpirationDate. |
| sortOrder | Specifies the sort order of the vouchers you want to retrieve. The default value is Ascending. |
| version | Version of the API. |
| devMode | Determines if the request is run in developer mode. |

-   **[Create an Instance of LoyaltyAPIManager Class](atlas.en-us.loyalty.meta/loyalty/mobile_sdk_loyaltyapimanager_instance.htm)**
    Create an instance of LoyaltyAPIManager class and interact with the Loyalty Management APIs.

## Code Examples

```apex
public class LoyaltyAPIManager
```

```apex
public var auth: ForceAuthenticator
```

```apex
public var loyaltyProgramName: String
```

```apex
public var instanceURL: String
```

```apex
public init(auth: ForceAuthenticator, loyaltyProgramName: String, instanceURL: String, forceClient: ForceClient)
```

## Related Topics

- Create an Instance of LoyaltyAPIManager Class (atlas.en-us.loyalty.meta/loyalty/mobile_sdk_loyaltyapimanager_instance.htm)
