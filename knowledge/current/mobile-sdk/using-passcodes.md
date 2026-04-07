---
title: "Using Passcodes"
domain: mobile-sdk
topic: using-passcodes
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:25.014Z
estimatedTokens: 922
keywords: [Passcodes, customer-defined, tokens, provide, extra, layer, login, security, app, Optionally, Salesforce, administrator, connected, require, passcode, setting, requires, backgrounded, prompt, Mobile, Policies, Multi-User, Behavior, Lock, Screen, Disabling, Biometric, Identification]
---

> Passcodes are customer-defined tokens that can provide an extra layer of login security for your
      app. Optionally, a Salesforce administrator can set the connected app to require a passcode
      after login. This setting, for example, requires a backgrounded app to prompt for a passcode
      

# Using Passcodes

Passcodes are customer-defined tokens that can provide an extra layer of login security for your app. Optionally, a Salesforce administrator can set the connected app to require a passcode after login. This setting, for example, requires a backgrounded app to prompt for a passcode when it returns to the foreground. When the connected app requires a mobile app passcode, Mobile SDK 9.2 and later use the device system passcode.

To verify a passcode, Mobile SDK presents a lock screen that uses the customer’s configured verification mode—for example, biometric, pattern, PIN, or password. If no device passcode has been set, Mobile SDK prompts the customer to create one using any secure input mode supported by the device. If the connected app doesn’t require a mobile passcode, Mobile SDK skips the passcode verification step. Mobile SDK handles all login and passcode lock screens and the authentication handshake. Your app doesn’t have to do anything to display these screens.

## Mobile Passcode Policies

Each Mobile SDK app hard-codes a connected app’s consumer key and OAuth callback URL from a specific Salesforce org. Mobile SDK honors the configurable passcode requirement in that org’s designated connected app. Beginning in version 9.2, Mobile SDK ignores org settings such as PIN length, and instead relies on device configuration. Similarly, incorrect passcode entries are handled according to the standard procedure of the mobile operating system.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

Beginning in version 9.2, Mobile SDK ignored the **Lock App After** setting in the org’s Connected App, in favor of the device’s configuration for locking the device after it’s been idle. In version 10.1.1 and later, Mobile SDK again respects the **Lock App After** Connected App setting. When set, the mobile app locks after it has been in the background for longer than the timeout period. Locking occurs when the mobile app is activated. Unlocking the app remains the same.

If a customer uses the app to log into a different org, Mobile SDK can’t retrieve the designated connected app settings. Therefore, that customer never encounters the passcode prompt.

## Multi-User Behavior of the Lock Screen

When multiple users are logged into the same app on the same device, the lock screen behaves as follows.

1.  When resuming an app that requires passcode, the customer is first prompted by a lock screen to authenticate through the mobile operating system.
2.  If the customer cancels authentication, **Logout** and **Retry Unlock** buttons appear on the lock screen.
3.  The **Logout** button works only for customers that require the lock screen.
4.  If the last user that requires the lock screen logs out, Mobile SDK no longer shows the lock screen.

## Disabling Biometric Identification

Apps built with Mobile SDK 9.2 and later ignore biometric settings from Salesforce connected apps. Instead, customers can configure the authentication mode themselves in device settings.

## See Also

-   [Biometric Authentication](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/biometric_auth.htm "Starting in Mobile SDK 11.0, you can configure your app to use the device system biometric authentication to log in. For example, when the app exceeds its timeout period in the background, the login screen appears upon the user’s return to the app. This behavior gives the appearance that the user is logged out, even if the user’s login session hasn’t expired. The user can then log in using their username and password or their device’s biometric authentication if they enabled that option.")

## Related Topics

- Biometric
            Authentication (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/biometric_auth.htm)
