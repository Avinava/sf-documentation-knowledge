---
title: "Using Advanced Authentication"
domain: mobile-sdk
topic: using-advanced-authentication
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:25.116Z
estimatedTokens: 1773
keywords: [Advanced, Authentication, Mobile, SDK, automatically, uses, standard, server, side, however, Salesforce, orgs, choose, configuring, either, Domain, MDM, auth, requires, small, amount, configuration, apps, User, Flow, iOS, Development, Requirements, Connected, App, Settings, Login, Session, Management]
---

> By default, Mobile SDK
        automatically uses standard authentication. On the server side, however, Salesforce orgs can choose
        to use advanced authentication by configuring either My Domain or MDM. Advanced auth
        requires a small amount of configuration in most Mobile SDK
        apps.

# Using Advanced Authentication

By default, Mobile SDK automatically uses standard authentication. On the server side, however, Salesforce orgs can choose to use advanced authentication by configuring either My Domain or MDM. Advanced auth requires a small amount of configuration in most Mobile SDK apps.

## Which Type of Auth Will Mobile SDK Use?

At runtime, Mobile SDK bases its authentication type on the login org’s configuration.

-   If browser-based authentication is configured for the org’s My Domain, Mobile SDK conforms to the My Domain setting.
-   If browser-based authentication hasn’t been configured for the org’s My Domain, Mobile SDK uses advanced auth only if the org uses MDM certificate-based auth.
-   If the org doesn’t use My Domain browser-based authentication or MDM certificate-based auth, Mobile SDK uses standard auth.

## Advanced Auth User Flow on iOS

For browser-based authentication, customers log in through the familiar Salesforce web view, followed by an authorization screen.

For certificate-based authentication, instead of a login screen, the operating system prompts the customer to choose a certificate for authentication. The customer does not enter credentials. After choosing the certificate, the customer sees the authorization screen.

## Development Requirements

Mobile SDK requirements for implementing advanced auth are minimal. Most apps require only a small amount of configuration. Android apps that use MDM certificate-based auth do not require client-side configuration.

## Configuring a Connected App

-   In a Salesforce connected app, under API (Enable OAuth Settings):
    -   Apply the typical OAuth settings for Mobile SDK apps. See [API (Enable OAuth Settings)](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/connected_apps_howto.htm#oauth).
    -   Make sure that **Require Secret for Web Server Flow** is *not* selected.

## Configuring My Domain Settings

An org administrator can require advanced auth through My Domain settings. To take advantage of advanced auth:

1.  From Setup, in the Quick Find box, enter My Domain, and then select **My Domain**.
2.  In My Domain settings, under Authentication Configuration, the administrator selects one or both of the following options:

    -   **Use the native browser for user authentication on Android**
    -   **Use the native browser for user authentication on iOS**

    See [“Customize Your My Domain Login Page for Mobile Auth Methods” in Salesforce Help](https://help.salesforce.com/articleView?id=domain_name_login_mobile_auth_methods.htm&language=en_US "HTML (New Window)").

## Configuring MDM Settings

For logins managed through MDM, Mobile SDK uses advanced auth only if the org’s MDM settings specify certificate-based auth. An org’s MDM suite must:

-   Set the RequireCertAuth property to true.
-   **Android only:** Set the ManagedAppCertAlias property to an alias name.

## Login Session Management with Advanced Authentication

With advanced auth, logging out of an app can cause surprising behavior. How this behavior can affect your app depends on the type of login your app uses.

Certificate-Based (MDM) Login

With certificates, a customer remains authenticated until the certificate is revoked. A certificate remains valid until the issuer revokes it. If a customer logs out of the app while the certificate is valid, the Salesforce login screen appears briefly. However, because the certificate automatically supplies the customer’s credentials, the flow goes directly to the authorization (”Allow Access”) screen. By choosing **Allow**, the customer obtains new access and refresh tokens and can continue using the app. In effect, a customer can’t log out until the MDM issuer revokes the certificate.

Web Server OAuth Login

During OAuth 2.0 authentication, Salesforce creates a temporary short-term session to bridge the gap between login and the Salesforce authorization (”Allow Access”) screen. This temporary session, which uses a cookie, is not tied to the OAuth refresh or access token and therefore isn’t invalidated at logout. Instead, the session remains valid until it expires. The most recently authenticated customer remains logged in until the temporary session expires. These sessions have an intentionally short lifetime, after which the user can log in normally.

The following unexpected behavior can occur during the lifetime of the temporary session: If the customer tries to log out and log in again before the cookie expires, the flow skips the login prompt. Instead, it goes directly to Salesforce authorization. By choosing **Allow**, the customer automatically obtains new access and refresh tokens and can continue using the app.

This behavior doesn’t occur with standard web view authentication because the web view doesn’t preserve cookies from previous authentications. It also doesn’t occur if the customer logs out after the temporary session expires. Mobile SDK apps, including the Salesforce app, can’t control cookies from the Salesforce service.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=mobile_sdk)

#### Important

Although advanced auth doesn’t use swizzling, the login page remains full-screen. This presentation can give customers the impression that they've temporarily left your app.

## See Also

-   [Using MDM with Apps Apps](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/oauth_mdm.htm "Mobile Device Management (MDM) can facilitate app configuration, updating, and authentication. Salesforce and Mobile SDK support the use of MDM for connected apps.").
-   For information on server-side My Domain configuration, see [Customize Your My Domain Login Page with Your Brand](https://help.salesforce.com/articleView?id=domain_name_login_branding.htm&language=en_US "HTML (New Window)") in *Salesforce Help*.
-   For connected app details, see [Create a Connected App](https://help.salesforce.com/articleView?id=connected_app_create.htm&language=en_US) in *Salesforce Help*.
-   For MDM configuration details, see [“Mobile Device Management (MDM)”](https://resources.docs.salesforce.com/sfdc/pdf/salesforce1_mobile_security.pdf "Adobe Acrobat PDF (New Window)") in *Salesforce Mobile App Security Guide*.
-   For information on configuring iOS URL schemes, look up at [“Inter-App Communication” or “Custom URL Schemes” in the *App Programming Guide for iOS* at developer.apple.com/documentation](https://developer.apple.com/documentation/).

-   **[Configuring Advanced Authentication in iOS Apps](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/auth_ios_advanced.htm)**
    To support advanced auth, all iOS apps require some custom configuration.
-   **[Configuring Advanced Authentication in Android Apps](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/auth_android_advanced.htm)**
    In Salesforce orgs that use My Domain for advanced authentication, Mobile SDK requires a small amount of configuration in the client app. Android apps that use certificate-based authentication don’t require configuration within the Mobile SDK app.

## Related Topics

- API (Enable OAuth Settings) (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/connected_apps_howto.htm)
- Using MDM with Apps Apps (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/oauth_mdm.htm)
- Configuring Advanced Authentication in iOS Apps (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/auth_ios_advanced.htm)
- Configuring Advanced Authentication in Android Apps (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/auth_android_advanced.htm)
