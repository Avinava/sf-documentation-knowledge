---
title: "Configuring Advanced Authentication in Android Apps"
domain: mobile-sdk
topic: configuring-advanced-authentication-in-android-apps
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:25.124Z
estimatedTokens: 680
keywords: [Configuring, Advanced, Authentication, Android, Apps, Salesforce, orgs, Domain, Mobile, SDK, requires, small, amount, configuration, client, app, certificate-based, don’t, require, Implementation, Certificated-Based, Browser-Based]
---

> In Salesforce orgs
        that use My Domain for advanced authentication, Mobile SDK requires a
        small amount of configuration in the client app. Android apps that use certificate-based
        authentication don’t require configuration within the Mobile SDK
        app.

# Configuring Advanced Authentication in Android Apps

In Salesforce orgs that use My Domain for advanced authentication, Mobile SDK requires a small amount of configuration in the client app. Android apps that use certificate-based authentication don’t require configuration within the Mobile SDK app.

## Android Implementation

For advanced authentication support in Android applications, Mobile SDK uses a Chrome custom tab. If Chrome isn’t available at runtime, Mobile SDK uses the default system browser. Browser-based authentication requires the following.

-   A browser must be installed on the device.
-   If you use MDM, the browser must be installed in the work partition.

Optionally, you can configure which browser the application selects by using this method.

```

```

To see the currently selected custom tab browser, use this method.

```

```

## Certificated-Based App Configuration

Certificate-based authentication relies on an MDM vendor. This vendor brokers identification services between Salesforce and the client mobile device. Certificate-based authentication doesn’t require configuration in Mobile SDK Android projects.

## Browser-Based App Configuration

1.  In Android Studio, open your app’s AndroidManifest.xml file.
2.  In the LoginActivity declaration, uncomment the following lines:

    ```

    ```

3.  Replace the values for android:scheme, android:host, and android:path with their corresponding values from your connected app. Here's a couple of examples.

    If the callback URL of your connected app is testsfdc:///mobilesdk/detect/oauth/done:

    -   android:scheme is testsfdc.
    -   android:host is \*, meaning that it doesn't exist.
    -   android:path is /mobilesdk/detect/oauth/done.

    If the callback URL of your connected app is sfdc://login.salesforce.com/oauth/done:
    -   android:scheme is sfdc.
    -   android:host is login.salesforce.com.
    -   android:path is /oauth/done.

Here’s the updated portion of your AndroidManifest.xml, using the testsfdc:///mobilesdk/detect/oauth/done scheme.

```

```

You're all set!

## See Also

-   [Customize Your My Domain Login Page with Your Brand](https://help.salesforce.com/articleView?id=domain_name_login_branding.htm&language=en_US "HTML (New Window)") in *Salesforce Help*.
-   [“Mobile Device Management (MDM)”](https://resources.docs.salesforce.com/sfdc/pdf/salesforce1_mobile_security.pdf "Adobe Acrobat PDF (New Window)") in *Salesforce Mobile App Security Guide*.
-   For information on configuring iOS URL schemes, see [“Inter-App Communication” or “Custom URL Schemes” in the *App Programming Guide for iOS* at developer.apple.com/documentation/.](https://developer.apple.com/documentation/).

## Code Examples

```
SalesforceSDKManager.getInstance().setCustomTabBrowser(browserPackage);
```

```
browserPackage = SalesforceSDKManager.getInstance().getCustomTabBrowser();
```

```
<activity android:name="com.salesforce.androidsdk.ui.LoginActivity"
    android:theme="@style/SalesforceSDK.ActionBarTheme"
    android:launchMode="singleInstance">

    <!--
    <intent-filter>
        <data android:scheme="testsfdc"
            android:host="*"
            android:path="/mobilesdk/detect/oauth/done" />
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.BROWSABLE" />
        <category android:name="android.intent.category.DEFAULT" />
    </intent-filter>
    -->
</activity>
```

```
<!-- Login activity -->
  <!--
     Launch mode of "singleInstance" ensures that the activity isn't restarted 
     by a callback from Chrome custom tab when auth flow is complete. This is
     required for the Chrome custom tab auth flow to work correctly.
  -->

  <!--
     To enable browser bath authentication, uncomment the lines below and replace
     'scheme', 'host' and 'path' with their corresponding values from your connected app.

     For example, if the callback URL of your connected app is
     "testsfdc:///mobilesdk/detect/oauth/done",
     'scheme' would be "testsfdc", 'host' would be "*" since it doesn't exist, and
     'path' would be "/mobilesdk/detect/oauth/done".

     If the callback URL is "sfdc://login.salesforce.com/oauth/done",
     'scheme' would be "sfdc", 'host' would be "login.salesforce.com",   
     and 'path' would be "/oauth/done".
  -->
<activity android:name="com.salesforce.androidsdk.ui.LoginActivity"
  android:theme="@style/SalesforceSDK.ActionBarTheme"
  android:launchMode="singleInstance">
  <intent-filter>
    <data android:scheme="testsfdc"
      android:host="*"
      android:path="/mobilesdk/detect/oauth/done" />
    <action android:name="android.intent.action.VIEW" />
    <category android:name="android.intent.category.BROWSABLE" />
    <category android:name="android.intent.category.DEFAULT" />
  </intent-filter>
</activity>
```
