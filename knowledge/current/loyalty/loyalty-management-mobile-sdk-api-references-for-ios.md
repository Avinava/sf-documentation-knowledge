---
title: "Loyalty Management Mobile SDK API References for iOS"
domain: loyalty
topic: loyalty-management-mobile-sdk-api-references-for-ios
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:52.657Z
estimatedTokens: 757
keywords: [Loyalty, Management, Mobile, SDK, API, References, iOS, describe, functions, classes, admin, enabled, Receipt, requests, Salesforce]
---

# Loyalty Management Mobile SDK API References for iOS

> These API references describe the functions, classes, methods, parameters, and return
        values of the Loyalty Management Mobile SDK. If your admin has enabled Receipt Make API
        requests to Salesforce from the POS system to enroll members, view member details, view
        transactions, manage vouchers, create orders, and accrue and redeem points and
        vouchers.

# Loyalty Management Mobile SDK API References for iOS

These API references describe the functions, classes, methods, parameters, and return values of the Loyalty Management Mobile SDK. If your admin has enabled Receipt Make API requests to Salesforce from the POS system to enroll members, view member details, view transactions, manage vouchers, create orders, and accrue and redeem points and vouchers.

| Available in: all editions that have Loyalty Management enabled. |
| --- |


-   **[Individual Member Enrollments](atlas.en-us.loyalty.meta/loyalty/mobile_sdk_api_enrollmember.htm)**
    Enroll an individual member in a loyalty program, while asynchronously sending data to the Individual Member Enrollments API.
-   **[Enroll for Promotions](atlas.en-us.loyalty.meta/loyalty/mobile_sdk_api_enrollforpromo.htm)**
    Enroll loyalty program member to a promotion, while asynchronously sending data to the Enroll for Promotions API.
-   **[Expense Analysis](atlas.en-us.loyalty.meta/loyalty/mobile_sdk_api_expenseanalysis.htm)**
    Stores the product and information from a receipt submitted for review by a member. To get the receipt information, access the LoyaltyProgramMember object reference.
-   **[Get Member Promotions](atlas.en-us.loyalty.meta/loyalty/mobile_sdk_api_geteligiblepromotions.htm)**
    Retrieve a list of promotions that the member is eligible for, while asynchronously requesting data from the Get Member Promotions loyalty program process API.
-   **[Member Benefits](atlas.en-us.loyalty.meta/loyalty/mobile_sdk_api_getmemberbenefits.htm)**
    Retrieve a list of benefits for a member, while asynchronously requesting data from the Member Benefits API.
-   **[Member Profile](atlas.en-us.loyalty.meta/loyalty/mobile_sdk_api_getmemberprofile.htm)**
    Get the profile details of a loyalty program member, while asynchronously requesting data from the Member Profile API.
-   **[Member Vouchers](atlas.en-us.loyalty.meta/loyalty/mobile_sdk_api_getvouchers.htm)**
    Retrieve a list of vouchers issued to the member, while asynchronously requesting data from the Member Vouchers API.
-   **[Receipt Status Updation](atlas.en-us.loyalty.meta/loyalty/mobile_sdk_api_receiptstatusupdation.htm)**
    Update the status of the receipt, reward points, and create a transaction journal for each line item in the receipt.
-   **[Receipt Upload](atlas.en-us.loyalty.meta/loyalty/mobile_sdk_api_receiptupload.htm)**
    Upload and scan a receipt with a receipt scanning app that uses optical character recognition to read and interpret receipts. For the unlocked package, this API uploads the image into the Amazon S3 bucket.
-   **[Transaction History](atlas.en-us.loyalty.meta/loyalty/mobile_sdk_api_gettrandhist.htm)**
    Retrieve member’s transaction history, while asynchronously requesting data from the Transaction History API.
-   **[Opt Out from a Promotion](atlas.en-us.loyalty.meta/loyalty/mobile_sdk_api_optoutpromo.htm)**
    Opt out a loyalty program member from an available promotion.

## Related Topics

- Individual Member Enrollments (atlas.en-us.loyalty.meta/loyalty/mobile_sdk_api_enrollmember.htm)
- Enroll for Promotions (atlas.en-us.loyalty.meta/loyalty/mobile_sdk_api_enrollforpromo.htm)
- Expense Analysis (atlas.en-us.loyalty.meta/loyalty/mobile_sdk_api_expenseanalysis.htm)
- Get Member Promotions (atlas.en-us.loyalty.meta/loyalty/mobile_sdk_api_geteligiblepromotions.htm)
- Member Benefits (atlas.en-us.loyalty.meta/loyalty/mobile_sdk_api_getmemberbenefits.htm)
- Member Profile (atlas.en-us.loyalty.meta/loyalty/mobile_sdk_api_getmemberprofile.htm)
- Member Vouchers (atlas.en-us.loyalty.meta/loyalty/mobile_sdk_api_getvouchers.htm)
- Receipt Status Updation (atlas.en-us.loyalty.meta/loyalty/mobile_sdk_api_receiptstatusupdation.htm)
- Receipt Upload (atlas.en-us.loyalty.meta/loyalty/mobile_sdk_api_receiptupload.htm)
- Transaction History (atlas.en-us.loyalty.meta/loyalty/mobile_sdk_api_gettrandhist.htm)
