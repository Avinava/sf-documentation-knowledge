---
title: "Example: Configure an Experience Cloud Site For Mobile SDK App
   Access"
domain: mobile-sdk
topic: example-configure-an-experience-cloud-site-for-mobile-sdk-app-access
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:29.950Z
estimatedTokens: 789
keywords: [Configure, Experience, Cloud, Site, Mobile, SDK, App, Access, Configuring, support, logins, apps, tricky, tutorial, helps]
---

# Example: Configure an Experience Cloud Site For Mobile SDK App
   Access

> Configuring your Experience Cloud site to support logins from Mobile SDK apps can be
  tricky. This tutorial helps you see the details and correct sequence first-hand.

# Example: Configure an Experience Cloud Site For Mobile SDK App Access

Configuring your Experience Cloud site to support logins from Mobile SDK apps can be tricky. This tutorial helps you see the details and correct sequence first-hand.

When you configure Experience Cloud site users for mobile access, sequence and protocol affect your success. For example, a user that’s not associated with a contact cannot log in on a mobile device. Here are some important guidelines to keep in mind:

-   Create users only from contacts that belong to accounts. You can’t create the user first and then associate it with a contact later.
-   Be sure you’ve assigned a role to the owner of any account you use. Otherwise, the user gets an error when trying to log in.
-   When you define a custom login host in an iOS app, be sure to remove the http\[s\]:// prefix. The iOS core appends the prefix at runtime. Explicitly including it could result in an invalid address.

1.  [Add Permissions to a Profile](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/communities_tutorial_profile.htm "Create a profile that has API Enabled and Enable Chatter permissions.")
2.  [Create an Experience Cloud Site](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/communities_tutorial_community.htm "Create an Experience Cloud site and a site login URL.")
3.  [Add the API User Profile To Your Experience Cloud Site](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/communities_tutorial_addprofile.htm "Add the API User profile to your Experience Cloud site setup on the Members page.")
4.  [Create a New Contact and User](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/communities_tutorial_contact.htm "Instead of creating users directly, create a contact on an account and then create the user from that contact.")
5.  [Test Your New Experience Cloud Site Login](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/communities_tutorial_test.htm "Test your Experience Cloud site setup by logging in to your Mobile SDK native or hybrid local app as your new contact.")

-   **[Add Permissions to a Profile](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/communities_tutorial_profile.htm)**
    Create a profile that has API Enabled and Enable Chatter permissions.
-   **[Create an Experience Cloud Site](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/communities_tutorial_community.htm)**
    Create an Experience Cloud site and a site login URL.
-   **[Add the API User Profile To Your Experience Cloud Site](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/communities_tutorial_addprofile.htm)**
    Add the API User profile to your Experience Cloud site setup on the Members page.
-   **[Create a New Contact and User](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/communities_tutorial_contact.htm)**
    Instead of creating users directly, create a contact on an account and then create the user from that contact.
-   **[Test Your New Experience Cloud Site Login](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/communities_tutorial_test.htm)**
    Test your Experience Cloud site setup by logging in to your Mobile SDK native or hybrid local app as your new contact.

## Related Topics

- Add Permissions to a Profile (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/communities_tutorial_profile.htm)
- Create an Experience Cloud Site (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/communities_tutorial_community.htm)
- Add the API User Profile To Your Experience Cloud Site (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/communities_tutorial_addprofile.htm)
- Create a New Contact and User (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/communities_tutorial_contact.htm)
- Test Your New Experience Cloud Site Login (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/communities_tutorial_test.htm)
