---
title: "Example: Configure an Experience Cloud Site For Facebook Authentication"
domain: mobile-sdk
topic: example-configure-an-experience-cloud-site-for-facebook-authentication
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:29.916Z
estimatedTokens: 489
keywords: [Configure, Experience, Cloud, Site, Facebook, Authentication, extend, reach, configuring, external, provider, handle, logins]
---

# Example: Configure an Experience Cloud Site For Facebook Authentication

> You can extend the reach of your Experience Cloud site by configuring an external
  authentication provider to handle site logins.

# Example: Configure an Experience Cloud Site For Facebook Authentication

You can extend the reach of your Experience Cloud site by configuring an external authentication provider to handle site logins.

This example extends the previous example to use Facebook as an authentication front end. In this simple scenario, we configure the external authentication provider to accept any authenticated Facebook user into the Experience Cloud site.

If your Experience Cloud site is already configured for mobile app logins, you don’t need to change your mobile app or your connected app to use external authentication. Instead, you define a Facebook app, a Salesforce Auth. Provider, and an Auth. Provider Apex class. You also make a minor change to your Experience Cloud site setup.

-   **[Create a Facebook App](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/communities_create_facebook_app.htm)**
    To enable Experience Cloud site logins through Facebook, start by creating a Facebook app.
-   **[Define a Salesforce Auth. Provider](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/communities_define_auth_provider.htm)**
    To enable external authentication in Salesforce, create an Auth. Provider.
-   **[Configure Your Facebook App](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/communities_configure_facebook_app.htm)**
    Next, you need to configure the Experience Cloud site to use your Salesforce Auth. Provider for logins.
-   **[Customize the Auth. Provider Apex Class](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/communities_customize_auth_provider.htm)**
    Use the Apex class for your Auth. Provider to define filtering logic that controls who may enter your Experience Cloud site.
-   **[Configure Your Experience Cloud Site](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/communities_configure_community_auth.htm)**
    For the final step, configure the Experience Cloud site to use your Salesforce Auth. Provider for logins.

## Related Topics

- Create a Facebook App (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/communities_create_facebook_app.htm)
- Define a Salesforce Auth. Provider (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/communities_define_auth_provider.htm)
- Configure Your Facebook App (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/communities_configure_facebook_app.htm)
- Customize the Auth. Provider Apex Class (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/communities_customize_auth_provider.htm)
- Configure Your Experience Cloud Site (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/communities_configure_community_auth.htm)
