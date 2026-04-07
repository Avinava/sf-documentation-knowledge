---
title: "Configuring an iOS App as an Identity Provider Client"
domain: mobile-sdk
topic: configuring-an-ios-app-as-an-identity-provider-client
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:25.183Z
estimatedTokens: 581
keywords: [Configuring, iOS, App, Identity, Provider, Client, configure, any, built, Mobile, SDK, 11.0, identify, itself, specify, rest, IDP, Keychain, Customizing, Login, Flow, Selection, View]
---

> You can configure any app built on Mobile SDK 11.0 or later as
    an identity provider client. You configure it to identify itself as an identity provider client
    and to specify its identity provider. Mobile SDK does the
    rest.

# Configuring an iOS App as an Identity Provider Client

You can configure any app built on Mobile SDK 11.0 or later as an identity provider client. You configure it to identify itself as an identity provider client and to specify its identity provider. Mobile SDK does the rest.

1.  In the init() method of your AppDelegate class, specify the URI scheme for the identity provider you’re using:

    Swift

    ```

    ```

    Objective-C

    ```

    ```

2.  In your app's info.plist file, add the URI scheme defined in your identity provider clients’ connected app:

    ```

    ```

3.  In your AppDelegate class implementation, find the following method and reinstate the commented code as follows:

    Swift

    ```

    ```

    Objective-C

    ```

    ```


Your app is now ready for use as an identity provider client.

## (Optional) Configure Your IDP Client App to Use Keychain

After you set up your IDP app to initiate authentication, update the client to complete the flow. You can use these methods to handle the incoming IDP URL.

Swift

```

```

Objective-C

```

```

## (Optional) Customizing the Login Flow Selection View in the Client App

Mobile SDK provides template apps for both identity providers and their client apps. The client template defines a view that lets the user choose to log in through an identity provider or the Salesforce login screen. When a user opens an app built from the client template, the app presents this view if

-   the user hasn’t yet logged in,  or
-   the current user hasn't been set.

To customize the login style selection view, a client app extends the UIViewController class and also must implement the SFSDKLoginFlowSelectionView protocol.

```

```

```

```

During the client app’s identity provider flow, Mobile SDK sets up an instance of the selectionFlowDelegate and appOptions properties defined in this protocol. You use these artifacts in your view controller to notify Mobile SDK of the user's login method selection. For example, assume that you’ve implemented the SFSDKUserSelectionView protocol in a UIViewController class named IDPLoginNavViewController. You then can use that view controller as the user selection dialog box by setting the idpLoginFlowSelectionAction on the SalesforceSDKManager shared instance, as follows:

```

```

## Code Examples

```
SalesforceManager.shared.identityProviderURLScheme = "sampleidpapp"
```

```
[SalesforceSDKManager sharedManager].idpAppURIScheme = @"sampleidpapp";
```

```
<key>CFBundleURLTypes</key>
<array>
    <dict>
        <key>CFBundleURLSchemes</key>
        <array>
            <string>sampleidpclientapp</string>
        </array>
    </dict>
</array>
```

```
func application(_ app: UIApplication, 
              open url: URL, 
               options: [UIApplication.OpenURLOptionsKey : Any] = [:]) -> Bool {
    return UserAccountManager.shared.handleIdentityProviderCommand(
        from: url, with: options)
}
```

```
- (BOOL)application:(UIApplication *)app 
            openURL:(NSURL *)url
            options:(NSDictionary<UIApplicationOpenURLOptionsKey,id>*)options {

    return [[SFUserAccountManager sharedInstance] 
        handleIDPAuthenticationResponse:url options:options];
}
```
