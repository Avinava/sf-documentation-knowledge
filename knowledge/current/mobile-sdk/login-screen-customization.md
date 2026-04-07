---
title: "Login Screen Customization"
domain: mobile-sdk
topic: login-screen-customization
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:25.134Z
estimatedTokens: 619
keywords: [Login, Screen, Customization, Although, Mobile, SDK, doesn’t, control, Salesforce, customize, brand, certain, cases, Appearance, Customizing, Server]
---

> Although Mobile SDK doesn’t control the Salesforce
  login page, you can still customize and brand it in certain cases.

# Login Screen Customization

Although Mobile SDK doesn’t control the Salesforce login page, you can still customize and brand it in certain cases.

## Customize the Login Screen Appearance through Mobile SDK

On iOS, you can also configure some properties of the login page, including the navigation bar and Settings icon. See [Customizing the iOS Login Screen Programmatically](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/oauth_hide_gear_icon.htm "Mobile SDK for iOS provides extensive options for customizing the style and behavior of the login screen's navigation bar. You can make simple declarative changes to control widget appearance and visibility, or you can reimagine the navigation bar by extending the login view controller class.")

## Customizing the Login Screen through the Salesforce Server

Salesforce Mobile SDK provides an OAuth implementation for its client apps, but it doesn’t define or control the login page. Instead, it requests the page from the Salesforce server. Salesforce itself then presents a web view that gathers your customer’s credentials. The login web view is not part of your Mobile SDK app.

To change the login web view on the server side, use either your My Domain login URL or an Experience Cloud site.

Both of these features provide handy utilities for login page branding and customization. To use your branded page, you set the default login URL of your Mobile SDK app to the Experience Cloud site or My Domain login URL. Your app then displays your customized login page.

Use the following links to learn about these features.

-   [Use Your Branded Login Page](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/communities_branded_login.htm "Starting with Mobile SDK 5.2, you can display a branded Experience Cloud site login page on your client app.")
-   [Customize Login, Self-Registration, and Password Management for Your Experience Cloud Site](https://help.salesforce.com/articleView?id=networks_customize_login.htm&language=en_US "HTML (New Window)")
-   [My Domain](https://help.salesforce.com/articleView?id=domain_name_overview.htm&language=en_US "HTML (New Window)")
-   [Customize Your My Domain Login Page with Your Brand](https://help.salesforce.com/articleView?id=domain_name_login_branding.htm&language=en_US "HTML (New Window)")
-   Sample My Domain customized login page—[https://github.com/salesforceidentity/MyDomain-Sample](https://github.com/salesforceidentity/MyDomain-Sample "HTML (New Window)")

## Related Topics

- Customizing the iOS Login Screen Programmatically (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/oauth_hide_gear_icon.htm)
- Use Your Branded Login Page (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/communities_branded_login.htm)
