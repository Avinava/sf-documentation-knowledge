---
title: "Configuring an iOS App as an Identity Provider"
domain: mobile-sdk
topic: configuring-an-ios-app-as-an-identity-provider
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:25.191Z
estimatedTokens: 1054
keywords: [Configuring, iOS, App, Identity, Provider, configure, any, built, Mobile, SDK, 11.0, identify, itself, rest, Convert, Keychain, IDP, Flow, Customizing]
---

> You can configure any app built on Mobile SDK 11.0 or
        later as an identity provider. You configure it to identify itself as an identity provider,
        and Mobile SDK does
        the rest.

# Configuring an iOS App as an Identity Provider

You can configure any app built on Mobile SDK 11.0 or later as an identity provider. You configure it to identify itself as an identity provider, and Mobile SDK does the rest.

The easiest way to create an identity provider app is by using the Mobile SDK Mobile SDK iOSIDPTemplate. This template is available on GitHub in the [github.com/forcedotcom/SalesforceMobileSDK-Templates](https://github.com/forcedotcom/SalesforceMobileSDK-Templates "HTML (New Window)") repo. Use the forceios createwithtemplate command with the URI of the template repo, as shown in the following command-line example.

```

```

## Convert an Existing Mobile SDK iOS App into an Identity Provider

To convert an existing Mobile SDK 11.x (or newer) iOS app into an identity provider:

1.  In the SalesforceSDKManager, set isIdentityProvider to true.
2.  In your AppDelegate class implementation, find the following method and reinstate the commented code as follows:

    Swift

    ```

    ```

    Objective-C

    ```

    ```

3.  Add your custom URI scheme to the info.plist configuration. For example, the following XML defines “sampleidpapp” as a custom URI scheme:

    ```

    ```


To convert an existing Mobile SDK 11.x (or newer) iOS app into an identity provider, go to the SalesforceSDKManager. Then:

1.  Set isIdentityProvider to true.
2.  In SFUserAccountManager, initiate the flow using the following method.

    ```

    ```


## (Optional) Configure Keychain for your IDP Flow

For IDP-initiated login, you can use a shared keychain group to communicate between IDP and IDP client apps, which reduces the number of times a user has to switch between apps.

1.  Add a keychain group in the “Keychain Sharing” section of your Xcode project configuration.

    If you’ve already configured an app group, you can use the keychain group automatically generated from the app group.

    ![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

    #### Note

    The keychain you use for IDP and the keychain you use for other Mobile SDK operations can be set independently.

2.  If you configure the app under the keychain group and want to share only the IDP token without the rest of the keychain items, set KeychainHelper.accessGroup to the app’s private keychain access group. Otherwise, the app defaults to the first keychain group in the list.

## (Optional) Configure Your IDP App to Use Keychain

1.  On the IDP app, go to the SalesforceSDKManager and set isIdentityProvider to true.
2.  Initiate the flow in SFUserAccountManager by using this method.

    ```

    ```


## (Optional) Customizing the Identity Provider UI

When a client app forwards a login request, the identity provider typically presents a selection dialog box. This dialog box, which lists known users, appears only if at least one of the following conditions is true:

-   A user has logged in from any other identity provider client app before this request.
-   A user has directly logged in to the identity provider app before this request.
-   Multiple users are currently logged in.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

Note: If no users have logged in before this request, Mobile SDK displays a login screen and continues to authentication after the user successfully finishes the login flow.

To customize the user selection view, an identity provider app extends the UIViewController class and must also implement the SFSDKUserSelectionView protocol.

```

```

In identity provider client apps, Mobile SDK sets up an instance of the userSelectionDelegate and spAppOptions properties defined in the SFSDKUserSelectionView protocol. You use these objects in your identity provider’s view controller to notify Mobile SDK of the user’s user account selection. For example, assume that you’ve implemented the SFSDKUserSelectionView protocol in a UIViewController class named UserSelectionViewController. You can then use that view controller as the user selection dialog box by setting the idpUserSelectionBlock on the SalesforceSDKManager shared instance, as follows:

```

```

## Code Examples

```
$ forceios createwithtemplate
Enter URI of repo containing template application: IOSIDPTemplate
Enter your application name: MyIDP-iOS
Enter your package name: com.acme.android
Enter your organization name (Acme, Inc.): Acme Systems
Enter output directory for your app (leave empty for the current directory): MyIDP-iOS
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

```
<key>CFBundleURLTypes</key>
<array>
    <dict>
        <key>CFBundleURLSchemes</key>
        <array>
            <string>sampleidpapp</string>
        </array>
    </dict>
</array>
```

```
- (void)kickOffIDPInitiatedLoginFlowForSP:(SFSDKSPConfig *)config
                             statusUpdate:(void(^)(SFSPLoginStatus))statusBlock
                                  failure:(void(^)(SFSPLoginError))failureBlock;
```
