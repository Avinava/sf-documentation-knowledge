---
title: "Using MDM with  Apps Apps"
domain: mobile-sdk
topic: using-mdm-with-apps-apps
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:26.733Z
estimatedTokens: 1560
keywords: [MDM, Apps, Mobile, Device, Management, facilitate, app, configuration, updating, authentication, Salesforce, SDK, support, connected, Runtime, Flow, Certificate-Based, Automatic, Host, Provisioning, Additional, Security, Enhancements]
---

> Mobile Device Management (MDM) can facilitate app configuration, updating, and
  authentication. Salesforce and Mobile SDK support the use of MDM for
  connected apps.

# Using MDM with Apps Apps

Mobile Device Management (MDM) can facilitate app configuration, updating, and authentication. Salesforce and Mobile SDK support the use of MDM for connected apps.

To use MDM, you work with a Salesforce administrator and an MDM provider. The Salesforce administrator configures your connected app to suit your use case. The MDM provider is a trusted third party who distributes your mobile app settings to your customers’ devices. For example, you can use MDM to configure custom login URLs for your app. You can also use MDM for certificate-based authentication. In this case, you upload certificates to the MDM provider.

MDM enablement does not require changes to your Mobile SDK app code.

The following outline explains the basic MDM runtime flow.

## Authentication and Configuration Runtime Flow

1.  To download an MDM-enabled Mobile SDK app, a customer first installs the MDM provider’s app.
2.  The MDM provider uses its app to push the following items to the device:
    -   Your Mobile SDK app
    -   Any configuration details you’ve specified, such as custom login URLs or enhanced security settings
    -   A user certificate if you’re also using MDM for authentication
3.  When the customer launches your app, behavior varies according to the mobile operating system.
    -   **Android:** If you’re supporting for certificate-based authentication, the login server requests a certificate. Android launches a web view and presents a list of one or more available certificates for the customer’s selection.
    -   **iOS:** The Mobile SDK app checks whether the Salesforce connected app definition enables certificate-based authentication. If so, the app navigates to a Safari window. Safari retrieves the stored MDM certificate and transparently authenticates the device.
4.  After it accepts the certificate, the login server sends access and refresh tokens to the app.
5.  Salesforce posts a standard screen requesting access to the customer’s data.

The following sections describe the MDM configuration options that Mobile SDK supports.

## Certificate-Based Authentication

Using certificates to authenticate simplifies provisioning your mobile users, and your day-to-day mobile administration tasks by eliminating usernames and passwords. Salesforce uses X.509 certificates to authenticate users more efficiently, or as a second factor in the login process.

MDM Settings for Certificate-Based Authentication

To enable certificate-based authentication for your mobile users, you need to configure key-value pair assignments through your MDM suite. Here are the supported keys:

| Key | Data Type | Platform | Description |
| --- | --- | --- | --- |
| RequireCertAuth | Boolean | Android, iOS | If true, the certificate-based authentication flow initiates.Android: Uses the user certificate on the device for authentication inside a webview.iOS: Redirects the user to Safari for all authentication requests. |
| ManagedAppCertAlias | String | Android | Alias of the certificate deployed on the device picked by the application for user authentication. Required for Android only. |

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

There’s a minimum device OS version requirement to use certificate-based authentication. For Android, the minimum supported version is 5.0. For iOS, the minimum supported version is 7.0.

Once you save your key-value pair assignments, you can push the mobile app with the updated certificate-based authentication flow to your users via your MDM suite.

## Automatic Custom Host Provisioning

You can now push custom login host settings to your mobile users. This spares your mobile users from having to manually type long URLs for login hosts—typically a frustrating and error-prone activity. You can configure key-value pair assignments through your MDM to define multiple custom login hosts for your mobile users.

MDM Settings for Automatic Custom Host Provisioning

To push custom login host configurations to your mobile users, you need to configure key-value pair assignments through your MDM suite. Here are the supported keys:

| Key | Data Type | Platform | Description |
| --- | --- | --- | --- |
| AppServiceHosts | String, String Array | Android, iOS | Login hosts. First value in the array is the default host.Android: Requires https:// in the host URL.iOS: Doesn't require https:// in the host URL. |
| AppServiceHostLabels | String, String Array | Android, iOS | Labels for the hosts.The number of AppServiceHostLabels entries must match the number of AppServiceHosts entries. |
| OnlyShowAuthorizedHosts | Boolean | Android, iOS | If true, prevents users from modifying the list of hosts that the Salesforce mobile app can connect to. |

## Additional Security Enhancements

You can add an extra layer of security for your iOS users by clearing the contents of their clipboard whenever the mobile app is in the background. Users may copy and paste sensitive data as a part of their day-to-day operations, and this enhancement ensures any data they copy onto their clipboards are cleared whenever they background the app.

MDM Settings for More Security Enhancements

To clear the clipboards of your iOS users when the mobile app is in the background, you need to configure key-value pair assignments through your MDM suite. Here is the supported key:

| Key | Data Type | Platform | Description |
| --- | --- | --- | --- |
| ClearClipboardOnBackground | Boolean | iOS | If true, the contents of the iOS clipboard are cleared when the mobile app is backgrounded. This prevents the user from accidentally copying and pasting sensitive data outside of the application. |

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

If the mobile app stops working unexpectedly, the copied data can remain on the clipboard. The contents of the clipboard are cleared once the user starts and backgrounds the mobile app.

This security functionality is available through Android for Android devices running OS 5.0 and greater, and that have Android for Work set up. Contact your MDM provider to configure this functionality for your Android users.
