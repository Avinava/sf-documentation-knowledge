---
title: "Prepare Experience Cloud Users for Loyalty Management Mobile SDK"
domain: loyalty
topic: prepare-experience-cloud-users-for-loyalty-management-mobile-sdk
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:52.731Z
estimatedTokens: 883
keywords: [Prepare, Experience, Cloud, Users, Loyalty, Management, Mobile, SDK, user, install, register, log, sample, app, it’s]
---

# Prepare Experience Cloud Users for Loyalty Management Mobile SDK

> Prepare your Experience Cloud user before you install Loyalty Management Mobile SDK. To
  register or log in to the sample app for Loyalty Management Mobile SDK, it’s recommended that you
  set up Experience Cloud for your loyalty program member profile.

# Prepare Experience Cloud Users for Loyalty Management Mobile SDK

Prepare your Experience Cloud user before you install Loyalty Management Mobile SDK. To register or log in to the sample app for Loyalty Management Mobile SDK, it’s recommended that you set up Experience Cloud for your loyalty program member profile.

| Available in: all editions that have Loyalty Management enabled |
| --- |


| User Permissions Needed |
| --- |
| To read, create, update, or delete connected apps: | Customize ApplicationANDModify All DataORManage Connected Apps |
| To create, edit, and delete profiles: | Manage ProfilesANDPermission Sets |

Create an external client app and an Experience Cloud site user for your loyalty program.

1.  Enable your Experience Cloud site user to access the external client app.
    1.  From Setup, in the Quick Find box, enter External Client Apps Manager, and then select **External Client Apps Manager**.
    2.  From the actions list for the external client app, select **Edit Policies**.
    3.  Select your Experience Cloud site user profile.
    4.  Save your changes.
2.  Enable the person account record type to the Experience Cloud site user profile.
    1.  From Setup, click **Users** | **Profiles**.
    2.  Click your Experience Cloud site user profile.
    3.  In Record Type Settings, find the Accounts entity, and click **Edit**.
    4.  Move the Person Account record type from Available Record Types to Selected Record Types.
    5.  Save your changes.
3.  Create Loyalty Program Processes for the GetMemberPromotions, EnrollInPromotion, and OptOutFromPromotion APIs.
4.  Provide the Experience Cloud site user the permission to join or to opt out of promotions from the Experience Cloud site.
    1.  From Setup, in the Quick Find box, enter Loyalty Management, and then select **Loyalty Management Settings**.
    2.  Turn on Customers and Members Join and Opt Out from Experience Cloud Site.
5.  Enable API access for Experience Cloud users.
    1.  From Setup, click **Users** | **Profiles**.
    2.  Click your Experience Cloud site user profile.
    3.  Under Administrative Permissions, select **API Enabled**.
    4.  Save your changes.
6.  Add permissions for Salesforce Objects.
    1.  From Setup, click **Users** | **Profiles**.
    2.  Click your Experience Cloud site user profile.
    3.  Under Standard Object Permissions, enable permissions for standard objects.
    4.  Save your changes.
7.  Add the sharing rules.
    1.  From Setup, in the Quick Find box, enter Sharing, and then select **Sharing Settings**.
    2.  Under Sharing Rules, click **New**.
    3.  Add rules for Journal Type, Loyalty Program, Loyalty Program Process, Promotion, Voucher, Voucher Definition, and Voucher Code.
    4.  Save your changes.

-   **[Supported Standard Objects for Experience Cloud Site User Setup](atlas.en-us.loyalty.meta/loyalty/mobile_sdk_object_ref.htm)**
    To set up Experience Cloud for your loyalty program member profile, enable permissions for these standard objects.

#### See Also

-   [*Salesforce Help*: Create a Loyalty Program Process](https://help.salesforce.com/s/articleView?id=xcloud.loyalty_program_process.htm&type=5&language=en_US "Salesforce Help: Create a Loyalty Program Process - HTML (New Window)")

-   [Supported Standard Objects for Experience Cloud Site User Setup](atlas.en-us.loyalty.meta/loyalty/mobile_sdk_object_ref.htm "To set up Experience Cloud for your loyalty program member profile, enable permissions for these standard objects.")

## Related Topics

- Supported Standard Objects for Experience Cloud Site User Setup (atlas.en-us.loyalty.meta/loyalty/mobile_sdk_object_ref.htm)
