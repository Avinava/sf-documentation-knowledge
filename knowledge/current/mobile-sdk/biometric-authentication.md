---
title: "Biometric Authentication"
domain: mobile-sdk
topic: biometric-authentication
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:29.849Z
estimatedTokens: 797
keywords: [Biometric, Authentication, Starting, Mobile, SDK, 11.0, configure, app, device, system, log, exceeds, timeout, period, background]
---

# Biometric Authentication

> Starting in Mobile SDK 11.0, you can configure your app to use the device system
    biometric authentication to log in. For example, when the app exceeds its timeout period in the
    background, the login screen appears upon the user’s return to the app. This behavior gives the
    appearance that the user is logged out, even if the user’s login session hasn’t expired. The
    user can then log in using their username and password or their device’s biometric
    authentication if they enabled that option.

# Biometric Authentication

Starting in Mobile SDK 11.0, you can configure your app to use the device system biometric authentication to log in. For example, when the app exceeds its timeout period in the background, the login screen appears upon the user’s return to the app. This behavior gives the appearance that the user is logged out, even if the user’s login session hasn’t expired. The user can then log in using their username and password or their device’s biometric authentication if they enabled that option.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

Alternatively, you can configure your app to require a passcode after login to achieve a similar effect. This feature is presented as a lock screen, while the biometric authentication introduced in Mobile SDK 11.0 presents a login screen. See also:

-   [About Login and Passcodes](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_native_login_passcodes.htm)
-   [Using Passcodes](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/android_passcodes.htm)

## Connected App Configuration

To configure biometric authentication, go to your org’s connected app.

1.  Add a custom attribute to your connected app with the key ENABLE\_BIOMETRIC\_AUTHENTICATION.
2.  To change the timeout period, add the BIOMETRIC\_AUTHENTICATION\_TIMEOUT key. You can adjust its value to the number of minutes that you want the app to be backgrounded for before it locks. If you choose not to add this key, the default value is set for 15 minutes.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

The user’s authentication token doesn’t refresh while the app is locked. We recommend that admins enable a session timeout in the connected app and set the Lock App After attribute to the same value.

## API and Customization

To manage biometric opt-in from within the app, use SalesforceSDKManager to get the BiometricAuthenticationManager instance. You can use this instance to:

-   Check whether the user has opted in to biometric authentication.
-   Prompt the user to opt in or out of biometric authentication and update the SDK with their response.
-   Check whether the app is locked.
-   Lock the app immediately.
-   Disable the native biometric unlock button entirely.

To opt the user in to biometric authentication, you can use the Mobile SDK-provided prompts or create your own.

To use the Mobile SDK-provided prompts, implement one of these lines.

Android (Kotlin)

```

```

iOS (Swift)

```

```

If you choose to create a custom prompt, implement one of these lines to pass the user’s response to Mobile SDK.

Android (Kotlin)

```

```

iOS (Swift)

```

```

If the user enables biometric authentication, a native button is added to the login screen so that they can trigger the OS prompt.

To create a custom button within the app’s web view, you can use an API found in BiometricAuthenticationManager to disable the native button. Then, configure the button to redirect to mobilesdk://biometric/authentication/prompt. Mobile SDK automatically ignores this redirect and presents the native OS prompt.

## Code Examples

```
SalesforceSDKManager.getInstance().biometricAuthenticationManager.presentOptInDialog(fragmentManager)
```

```
SalesforceManager.shared.biometricAuthenticationManager().presentOptInDialog(viewController: viewController)
```

```
SalesforceSDKManager.getInstance().biometricAuthenticationManager.biometricOptIn(userResponse)
```

```
SalesforceManager.shared.biometricAuthenticationManager().biometricOptIn(optIn: userResponse)
```

## Related Topics

- About Login
            and Passcodes (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_native_login_passcodes.htm)
- Using
            Passcodes (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/android_passcodes.htm)
