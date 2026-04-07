---
title: "Configuring Advanced Authentication in iOS Apps"
domain: mobile-sdk
topic: configuring-advanced-authentication-in-ios-apps
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:29.819Z
estimatedTokens: 667
keywords: [Configuring, Advanced, Authentication, iOS, Apps, support, auth, require, custom, configuration, Standard, Versus, App]
---

# Configuring Advanced Authentication in iOS Apps

> To support advanced auth, all iOS apps require some custom configuration.

# Configuring Advanced Authentication in iOS Apps

To support advanced auth, all iOS apps require some custom configuration.

Advanced auth in iOS uses the latest iOS technology supported by the current Mobile SDK release.

## Standard Authentication Versus Advanced Authentication

Here’s a partial list of differences between standard and advanced auth on iOS. These differences are specific to My Domain browser-based authentication.

-   Standard auth flow: This flow uses WKWebView. This class offers a superior user experience with access to the iOS view toolbar and other compelling features.
-   Advanced auth flow: Advanced auth uses the latest iOS technology supported by the current Mobile SDK release. It’s the more secure option—it doesn’t allow the app to set cookies or inject content into the view without the customer's consent. In advanced mode, the auth flow doesn’t swizzle.

## App Configuration

In iOS apps, the steps are the same for both MDM certificate-based and browser-based approaches. Perform the following steps to guarantee compatibility with all orgs.

-   Add your custom URL schemes for the OAuth redirect URI to your project’s Info.plist file.
    1.  In your app’s Info.plist file, create a key named CFBundleURLTypes.
    2.  Assign the key an array that contains a dictionary with the following keys:

        | Name | Type | Value |
        | --- | --- | --- |
        | CFBundleURLName | String | A unique abstract name of the URL scheme, preferably an identifier in reverse-DNS style. For example:com.acme.myscheme. |
        | CFBundleURLSchemes | Array of strings | URL scheme names, such as http and mailto. |


## Example

If your OAuth callback URI is com.mydomain.myapp://oauth/success, add the following key to your Info.plist file:

```

```

In this example, the URL scheme and URL name are the same, but this matching is not required. You can add as many schemes as your app requires.

## See Also

-   For information on server-side My Domain configuration, see [Customize Your My Domain Login Page with Your Brand](https://help.salesforce.com/articleView?id=domain_name_login_branding.htm&language=en_US "HTML (New Window)") in *Salesforce Help*.
-   For MDM configuration details, see [“Mobile Device Management (MDM)”](https://resources.docs.salesforce.com/sfdc/pdf/salesforce1_mobile_security.pdf "Adobe Acrobat PDF (New Window)") in *Salesforce Mobile App Security Guide*.
-   For information on configuring iOS URL schemes, look up at [“Inter-App Communication” or “Custom URL Schemes” in the *App Programming Guide for iOS* at developer.apple.com/documentation/.](https://developer.apple.com/documentation/).

## Code Examples

```
<key>CFBundleURLTypes</key> 
<array> 
    <dict> 
        <key>CFBundleURLName</key> 
        <string>com.mydomain.myapp</string> 
        <key>CFBundleURLSchemes</key> 
        <array> 
            <string>com.mydomain.myapp</string> 
        </array> 
    </dict> 
</array>
```
