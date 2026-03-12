---
title: "Prepare to Install Loyalty Management Mobile SDK"
domain: loyalty
topic: prepare-to-install-loyalty-management-mobile-sdk
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:52.734Z
estimatedTokens: 878
keywords: [Prepare, Install, Loyalty, Management, Mobile, SDK, org, ensure, Salesforce, Experience, Cloud, enabled]
---

# Prepare to Install Loyalty Management Mobile SDK

> Prepare your org before you install Loyalty Management Mobile SDK. Before you install
    Loyalty Management Mobile SDK, ensure you have a Salesforce org that has Loyalty Management and
    Experience Cloud enabled.

# Prepare to Install Loyalty Management Mobile SDK

Prepare your org before you install Loyalty Management Mobile SDK. Before you install Loyalty Management Mobile SDK, ensure you have a Salesforce org that has Loyalty Management and Experience Cloud enabled.

| Available in: all editions that have Loyalty Management enabled |
| --- |


| User Permissions Needed |
| --- |
| To enable experience cloud: | Customize Application |
| To read, create, update, or delete connected apps: | Customize ApplicationANDModify All DataORManage Connected Apps |
| To create a loyalty program process: | Loyalty Management |

1.  Get a Salesforce [Developer Edition organization](https://developer.salesforce.com/docs/atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/dev_de.htm) that has Loyalty Management enabled.
2.  To use another program, modify the program name in the Loyalty Management Mobile SDK configuration file.
3.  Create an Experience Cloud site user profile for your loyalty program. See [Create Community User Profile](https://help.salesforce.com/s/articleView?id=ind.admin_create_comm_user_profile.htm&type=5&language=en_US).
4.  [Create a connected app](atlas.en-us.loyalty.meta/loyalty/mobile_sdk_connected_app.htm "Create an external client app for Loyalty Management Mobile SDK to request access to Salesforce APIs and to enable secure integration with the APIs. To request access, integrate the app with the Salesforce API by using the OAuth 2.0 protocol.") and enable an external application to integrate with Salesforce by using APIs and standard protocols.
5.  Create and activate loyalty program processes and process rules for GetMemberPromotions, EnrollInPromotion, and OptOutFromPromotion APIs. See [Create Loyalty Program Processes by Using Promotion Setup](https://help.salesforce.com/s/articleView?id=xcloud.promotion_setup.htm&type=5&language=en_US).
6.  Access the [Loyalty Management Mobile SDK API References for iOS](atlas.en-us.loyalty.meta/loyalty/mobile_sdk_api_reference.htm "These API references describe the functions, classes, methods, parameters, and return values of the Loyalty Management Mobile SDK. If your admin has enabled Receipt Make API requests to Salesforce from the POS system to enroll members, view member details, view transactions, manage vouchers, create orders, and accrue and redeem points and vouchers.") and [Loyalty Management Mobile SDK API References for Android](atlas.en-us.loyalty.meta/loyalty/mobile_sdk_android_api_reference.htm "The Loyalty Management Mobile SDK for Android interacts with Salesforce Loyalty Management APIs and retrieves member benefits, transactions, profiles, promotions, vouchers, enrolls an individual member, opts a member out of a promotion.").
7.  Review iOS and Android Native requirements, see [Development Prerequisites for iOS and Android](https://developer.salesforce.com/docs/atlas.en-us.mobile_sdk.meta/mobile_sdk/dev_prereq.htm).
8.  Install the required iOS and Android software. See [iOS Basic Requirements](https://developer.salesforce.com/docs/atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_requirements.htm) and [Native Android Requirements](https://developer.salesforce.com/docs/atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/android_requirements.htm).
9.  To set up the Loyalty Management Sample App for Mobile SDK in Android Studio, see [Setting Up Sample Projects in Android Studio](https://developer.salesforce.com/docs/atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/android_project_setup.htm).

## Related Topics

- Create a
            connected app (atlas.en-us.loyalty.meta/loyalty/mobile_sdk_connected_app.htm)
- Loyalty Management
            Mobile SDK API References for iOS (atlas.en-us.loyalty.meta/loyalty/mobile_sdk_api_reference.htm)
- Loyalty Management Mobile SDK API References
            for Android (atlas.en-us.loyalty.meta/loyalty/mobile_sdk_android_api_reference.htm)
