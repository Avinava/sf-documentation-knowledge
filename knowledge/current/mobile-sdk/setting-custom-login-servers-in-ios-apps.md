---
title: "Setting Custom Login Servers in iOS Apps"
domain: mobile-sdk
topic: setting-custom-login-servers-in-ios-apps
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:26.708Z
estimatedTokens: 776
keywords: [Setting, Login, Servers, iOS, Apps, cases—for, you’re, Salesforce, partner, Trialforce—you, redirect, user’s, requests, URI]
---

> For special cases—for example, if you’re a Salesforce partner using
    Trialforce—you can redirect your user’s login requests to a custom login URI.

# Setting Custom Login Servers in iOS Apps

For special cases—for example, if you’re a Salesforce partner using Trialforce—you can redirect your user’s login requests to a custom login URI.

In iOS apps, login servers are often called login hosts. Mobile SDK defines standard login URIs for production and sandbox servers in the SalesforceSDKCore project. These two login hosts appear in the Choose Connection login screen.

For iOS, the default login host can potentially be set through any of the following means.

1.  MDM enforced
    -   At startup, your app’s MDM provider configures the login URI.
    -   The MDM policy can also hide the navigation bar and Settings icon to prevent users from changing the login host.
2.  App configuration through the info.plist file
    -   Your app can configure the default login URI in the project’s info.plist properties file. The login host property name is SFDCOAuthLoginHost.
    -   At startup, the SFDCOAuthLoginHost setting overrides user-defined login hosts.
    -   By default, SFDCOAuthLoginHost property is set to “login.salesforce.com”.
    -   Do not use a protocol prefix such as “https://” when specifying the login URI.
3.  User configuration through the Add Connection screen

    Here’s how a user can configure a custom login server.

    1.  Start the app without logging in.
    2.  In the login screen, tap the Settings, or ”gear,” icon ![Settings icon](/docs/resources/img/en-us/noversion?doc_id=dev_guides%2Fmobile_sdk%2Fimages%2Fgear-icon.png&folder=mobile_sdk) in the top navigation bar.
    3.  In the Choose Connection screen, tap the Plus icon ![Plus icon](/docs/resources/img/en-us/noversion?doc_id=dev_guides%2Fmobile_sdk%2Fimages%2Fplus-icon.png&folder=mobile_sdk).
    4.  (Optional but recommended) To help identify this configuration in future visits, enter a label.
    5.  Enter your custom login host’s URI. Be sure to omit the https:// prefix. For example, here’s how you enter a typical Experience Cloud site URI:

        ```

        ```


    Mobile SDK enables this functionality by default. You can disable the Add Connection option by setting SFLoginHostViewController properties.


![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=mobile_sdk)

#### Important

-   At startup, MDM runtime configuration overrides compile-time settings.
-   Before version 4.1, Mobile SDK apps for iOS defined their custom login URIs in the app’s Settings bundle. In Mobile SDK 4.1 and later, iOS apps lose the Settings bundle. Instead, you can use the SFDCOAuthLoginHost property in the app’s info.plist file to build in a custom login URI.

#### See Also

-   [Customizing the iOS Login Screen Programmatically](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/oauth_hide_gear_icon.htm "Mobile SDK for iOS provides extensive options for customizing the style and behavior of the login screen's navigation bar. You can make simple declarative changes to control widget appearance and visibility, or you can reimagine the navigation bar by extending the login view controller class.")

## Code Examples

```
MyDomainName.my.site.com/fineapps
```

## Related Topics

- Customizing the iOS Login Screen Programmatically (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/oauth_hide_gear_icon.htm)
