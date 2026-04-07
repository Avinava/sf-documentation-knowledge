---
title: "Option 2: Add Mobile SDK Setup Code Manually"
domain: mobile-sdk
topic: option-2-add-mobile-sdk-setup-code-manually
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:31.086Z
estimatedTokens: 4555
keywords: [Option, Add, Mobile, SDK, Setup, Code, Manually, prefer, freedom, writing, scratch, project, copying, template, files]
---

# Option 2: Add Mobile SDK Setup Code Manually

> If you prefer the freedom of writing all your code from scratch, you can create a
    project without copying Mobile SDK template files into your workspace. You can—and
    should—consult the template code to pick up boilerplate implementations for certain
    features.

# Option 2: Add Mobile SDK Setup Code Manually

If you prefer the freedom of writing all your code from scratch, you can create a project without copying Mobile SDK template files into your workspace. You can—and should—consult the template code to pick up boilerplate implementations for certain features.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=mobile_sdk)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

The procedure here creates a basic Mobile SDK Swift app that implements an AppDelegate - SceneDelegate flow.

When you insert Mobile SDK into an iOS project without importing template files, you’re responsible for reconfiguring the app lifecycle according to Mobile SDK guidelines. For example, here are some required tasks:

-   Configure SalesforceApp as the main class
-   Initialize Mobile SDK
-   Call Mobile SDK to prompt for customer login and handle user switching

For a few optional features, Mobile SDK provides specific customizations that you can drop into your code.

As benefits, you have some additional flexibility to suit your development needs:

-   Code in Swift (recommended)

    or

    Objective-C (to support older apps; not described in this procedure)

-   Use AppDelegate for app-level initialization, and SceneDelegate to handle all UI lifecycle events. This path is recommended; it supports multiple windows in iPadOS, clarifies multi-scene handling, and separates app-level and scene-level code.

    or

    Use AppDelegate alone to handle app initialization and UI lifecycle events. This path is an option only for single-window apps that don’t require multiple window support in iPadOS. If you choose this route, it’s up to you to find places in AppDelegate for all Mobile SDK code that’s added here in SceneDelegate. See the [iOS Native Template](https://github.com/forcedotcom/SalesforceMobileSDK-Templates/tree/dev/iOSNativeTemplate) for examples.


![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

These instructions provide minimal steps for enabling Mobile SDK in a runnable Swift app. At the end of this procedure, you can find additional sections on setting up optional features such as push notifications and IDP apps.

## Prerequisites

1.  [Create an Xcode Swift Project](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_new_native_manual_create_xcode_project.htm)
2.  [Add Mobile SDK Libraries to Your Project](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_new_native_manual_clone_sdk.htm)
3.  [Configure Your Project’s Build Settings](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_new_native_manual_configure_build.htm)

## Add or Edit Info.plist

Mobile SDK uses the project’s main Info.plist file to set the default Salesforce login host. In Xcode 12.4, the app wizard creates the Info.plist file for you. In Xcode 13, the app wizard for the SwiftUI interface doesn’t create the file, but you can copy one from a Mobile SDK template app.

Xcode 12.4

1.  In the Project Navigator, control-click **MyMobileSDKApp** | **MyMobileSDKApp** | **Info.plist** and select **Open As** | **Source Code**.
2.  Add the following key-value pair to the top-level dictionary:

    ```

    ```


Xcode 13

Copy the Info.plist file to your project from the [iOS Native Swift template](https://github.com/forcedotcom/SalesforceMobileSDK-Templates/blob/master/iOSNativeSwiftTemplate/iOSNativeSwiftTemplate/Info.plist "HTML (New Window)"). When the file is in place, adjust your Project Settings as follows:

1.  In your Project settings, select **Build Phases**.
2.  Under Copy Bundle Resources, select Info.plist, if it’s present, and click **Remove Items** (-).
3.  In **Build Settings**, search for “Info.plist File”.
4.  Set **Generate Info.plist File** to **No**.
5.  Set **Info.plist File** to the file’s path in your project (for example, “MyMobileSDKApp/Info.plist”.)

    ![Build Settings configuration for Info.plist](/docs/resources/img/en-us/noversion?doc_id=dev_guides%2Fmobile_sdk%2Fimages%2Finfo-plist-build-settings.png&folder=mobile_sdk)


## Add bootconfig.plist

Mobile SDK looks for a bootconfig.plist file to help your app start with the correct connected app values. You can copy this file to your project from a Mobile SDK iOS template project, but be sure to reset the values to your app’s preferences—especially remoteAccessConsumerKey and oauthRedirectURI.

1.  In an external text editor, create an empty text file.
2.  Copy the following text into the new file:

    ```

    ```

3.  Save the file as bootconfig.plist in your MyMobileSDKApp project's local disk directory.
4.  In Xcode’s Project Explorer, control-click **MyMobileSDKApp** | **MyMobileSDKApp** and select **Add Files to “MyMobileSDKApp”**.
5.  Select bootconfig.plist.
6.  To do now (if your connected app is available) or before you release your app:
    1.  Open bootconfig.plist in the Xcode editor.
    2.  Replace the remoteAccessConsumerKey value with the Consumer Key from your org's connected app.
    3.  Replace the oauthRedirectURI value with the Callback URL from your org’s connected app.

## Add a main.swift File

Mobile SDK requires its own UIApplication\-based object, SFApplication, to monitor user event notifications. This class must be instantiated when iOS first initializes the main application object. To use this class instead of the default UIApplication class, you add a custom main.swift file to your project. You can then call the UIApplicationMain constructor with custom arguments.

1.  In your project, control-click **MyMobileSDKApp** | **MyMobileSDKApp** and select **New File**.
2.  Select **Swift File**, name it “main.swift”, and then click **Create**. Xcode creates a file with one line:

    ```

    ```

3.  Import SalesforceSDKCore.

    ```

    ```

4.  Create an instance of UIApplicationMain, passing in

    -   “SFApplication” for the principalClassName argument
    -   “AppDelegate” for the delegateClassName argument

    ```

    ```


See [**UIApplicationMain(\_:\_:\_:\_:)**](https://developer.apple.com/documentation/uikit/1622933-uiapplicationmain "HTML (New Window)") in the Apple Developer documentation.

## Customize or Create the AppDelegate Class

If you tell the Xcode 12.4 app wizard to create a UIKit App Delegate lifecycle, it creates AppDelegate and SceneDelegate classes. The Xcode 13 app wizard doesn’t offer a lifecycle choice and doesn’t create an AppDelegate class. However, you can create the basic minimal version from scratch using the following instructions.

1.  **Xcode 12.4:** Start with the AppDelegate class in your project, keeping the three standard lifecycle functions.

    **Xcode 13:**

    1.  In your project's **MyMobileSDKApp** | **MyMobileSDKApp** folder, control-click the MyMobileSDKAppApp.swift file and click **Delete**.
    2.  Click **Move to Trash**.
    3.  Control-click **MyMobileSDKApp** | **MyMobileSDKApp** and select **New File**.
    4.  Select **Swift File**, name it “AppDelegate”, and then click **Create**. Xcode creates a file with one line:

        ```

        ```

2.  Paste the following boilerplate implementation of the AppDelegate life cycle methods.

    ```

    ```

3.  Remove the @main attribute above the AppDelegate class declaration. The main.swift file has assumed the role of main.
4.  Import all Mobile SDK modules.

    ```

    ```

5.  At the top of the class, override the init() method to initialize Mobile SDK. For example, to initialize all Mobile SDK libraries, call initializeSDK() on MobileSyncSDKManager:

    ```

    ```


## Add an InitialViewController Class

To access Salesforce data, your app’s users must authenticate with a Salesforce org. Salesforce sends a login screen to your app to collect the user’s credentials and then returns OAuth tokens to your app.

Your app must include a view controller whose sole purpose is to host the Salesforce login screen. When no customer is logged in, your app sets this view controller as the root view. Traditionally, Mobile SDK apps name this view controller class InitialViewController. It requires only a stub implementation.

1.  In your project, control-click **MyMobileSDKApp** | **MyMobileSDKApp** and select **New File**.
2.  Select **Swift File**, name it “InitialViewController”, and then click **Create**.
3.  Add the following body:

    ```

    ```


## Customize or Create the SceneDelegate Class

Use the SceneDelegate class to handle Salesforce logins, user switching, and root view instantiation. Login is required when no user is logged in—when the app originally launches, and when the current user logs out. User changes occur between users who have logged in previously and remain authenticated. Mobile SDK AuthHelper functions simplify how these cases are handled:

-   AuthHelper.loginIfRequired(\_:) decides for you whether login is needed
-   AuthHelper.registerBlock(forCurrentUserChangeNotifications:) listens for user change events.

These functions let you determine what happens after the login or change occurs. Typically, you respond by setting your app’s main view as the root view.

In the scene lifecycle, specific junctures are ideal for each of these AuthHelper calls. For example, register the block that handles user changes only one time, when the scene is first initialized. Also, call AuthHelper.loginIfRequired(\_:\_:) whenever the scene comes to the foreground. If the current user remains logged in, Mobile SDK merely executes your completion block.

At app startup, you set InitialViewController as the first root view controller. This view hosts the Salesforce login screen and, after a successful login, is replaced by your app’s root view controller. At runtime, if the current user logs out, you dismiss the current root view controller and replace it with InitialViewController. In both cases, after a new user logs in, you dismiss InitialViewController and set your app’s first view as the root view controller.

**Xcode 13 only:** In Xcode 13, the SwiftUI interface no longer uses SceneDelegate. However, iOS still supports it, and Mobile SDK currently uses it. Follow these steps to create it.

1.  In your project, control-click **MyMobileSDKApp** | **MyMobileSDKApp** and select **New File**.
2.  Select **Swift File**, name it “SceneDelegate”, and then click **Create**.
3.  Copy the following implementation into your new file.

    ```

    ```


**Xcode 12.4 and Xcode 13:**

1.  At the top of your project’s SceneDelegate class, be sure that you’ve declared a UIWindow variable:

    ```

    ```

2.  At the bottom of the SceneDelegate class body, implement a private function named resetViewState(\_:) that takes an escaping closure as its sole parameter. This function dismisses the current root view controller and then executes the given closure:

    ```

    ```

3.  Implement a private function named setupRootViewController() that launches your app’s custom views. For this simple exercise, you can set the root view to the SwiftUI ContentView provided by the Xcode template.

    ```

    ```

    ![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

    #### Note

    The Xcode template’s ContentView requires no additional setup or cleanup. For a more elaborate example, see setupRootViewController(\_:) in the [MobileSyncExplorerSwift](https://github.com/forcedotcom/SalesforceMobileSDK-Templates/blob/master/MobileSyncExplorerSwift/MobileSyncExplorerSwift/SceneDelegate.swift) template.

4.  In the scene(\_:willConnectTo:options:) function, provide code that sets up the window scene. Replace all existing code with the following lines:

    ```

    ```

5.  Register a callback block for user change events. Using the private functions you added, provide a closure that resets the view state and then presents your app’s root view.

    ```

    ```

6.  Implement a private function named initializeAppViewState() that sets InitialViewController as the root view. Notice that this function first makes sure that the app is on the main UI thread. If the app is on some other thread, it switches to the main thread and calls itself recursively.

    ```

    ```

7.  In the sceneWillEnterForeground(\_:) listener function:

    1.  To set the root view to InitialViewController, call initializeAppViewState().
    2.  Call AuthHelper.loginIfRequired(\_:) with a closure that sets the root view controller to your app’s main view.

    ```

    ```


## Build Your New Mobile SDK App

1.  In Xcode, select **Product** | **Run** (⌘R).
2.  If the Salesforce login screen appears, you’re done!

Your new project is ready for customization. You can now add your own assets and set up your scene flow. You can also add optional push notification and IDP features, as follows.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=mobile_sdk)

#### Important

Another reminder! Before posting your app to the App Store, be sure to update the remoteAccessConsumerKey and oauthRedirectURI in the bootconfig.plist file with settings from your connected app. See [Get Started with Native iOS Development](https://trailhead.salesforce.com/content/learn/modules/mobile_sdk_native_ios/mobilesdk_ios_getting_started?trail_id=mobile_sdk_intro "HTML (New Window)").

## Add Push Notification Support

1.  To support Salesforce push notifications, add code to register and handle them. You can copy boilerplate implementations of the following methods from the AppDelegate class of [the Mobile SDK iOSNativeSwiftTemplate app](https://github.com/forcedotcom/SalesforceMobileSDK-Templates/blob/dev/iOSNativeSwiftTemplate/iOSNativeSwiftTemplate/AppDelegate.swift "HTML (New Window)"):
    -   registerForRemotePushNotifications()
    -   application(\_:didRegisterForRemoteNotificationsWithDeviceToken:)—**Be sure to uncomment the one line of implementation code!**
    -   didRegisterForRemoteNotifications(\_:)
    -   application(\_:didFailToRegisterForRemoteNotificationsWithError:)
2.  Salesforce uses encryption on notifications, which requires you to implement a decryption extension and then to request authorization through the UNUserNotificationCenter object. See [Code Modifications (iOS)](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/push_ios_code.htm "To handle notifications in iOS apps, you register in the AppDelegate class using the provided template code. In Swift apps, you must add an extension to decrypt incoming Notification Builder notifications.").

## Add Identity Provider Support

Mobile SDK supports configuration of identity provider (IDP) apps. See [Identity Provider Apps](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/auth_identity_providers.htm "Identity providers help known users avoid reentering their Salesforce credentials every time they log in to a Mobile SDK app. At the same time, it preserves the stringent security level of previous Mobile SDK releases."). If you’ve implemented IDP functionality, you enable it by customizing AppDelegate and SceneDelegate.

1.  In your AppDelegate class, add the following boilerplate functions from the AppDelegate class of [the Mobile SDK iOSNativeSwiftTemplate app](https://github.com/forcedotcom/SalesforceMobileSDK-Templates/blob/dev/iOSNativeSwiftTemplate/iOSNativeSwiftTemplate/AppDelegate.swift "HTML (New Window)"):
    -   application(\_:open:\_:)
    -   enableIDPLoginFlowForURL(\_:\_:)
2.  In your SceneDelegate class, add the following functions.

    ```

    ```


## Customize the Pre-Login Screen

You can use the InitialViewController class to cosmetically customize the login view before the login screen appears. Here’s an [example](https://github.com/forcedotcom/SalesforceMobileSDK-Templates/blob/master/MobileSyncExplorerSwift/MobileSyncExplorerSwift/ViewControllers/InitialViewController.swift "HTML (New Window)") that brands the pre-login screen with your app’s name, using the default Salesforce background color. If you use this class to create resources that can be recreated, be sure to implement the didReceiveMemoryWarning() override to dispose of them. See the Xcode [UIViewController](https://developer.apple.com/documentation/uikit/uiviewcontroller/1621409-didreceivememorywarning "HTML (New Window)") documentation.

```

```

## Include SmartStore and Mobile Sync Configuration Files

Offline configuration files let you define your SmartStore and Mobile Sync setups in static XML files instead of code. These files must be named userstore.json and usersyncs.json and be referenced in your Xcode project. You can then load them by calling the following methods:

```

```

Your main consideration for these files is to be sure to load them only one time in each session. In a SceneDelegate flow, for example, loads the config files when

-   Salesforce login is required, or
-   When a change of users occurs

The Mobile SDK native Swift template keeps things simple by calling the two setup functions whenever it sets the root view controller. This task falls to a private function, setupRootViewController(), that in turn is called as follows:

-   In sceneWillEnterForeground(\_:), where it’s called in a block that runs after a Salesforce login occurs.
-   In scene(\_:willConnectTo:options:), where it’s called in a block that handles current user change notifications.

Mobile SDK defines a utility class, AuthHelper, that coordinates the internal moving parts for login and user change events. For a complete example, see [the SceneDelegate class in the Mobile Sync Explorer Swift template](https://github.com/forcedotcom/SalesforceMobileSDK-Templates/blob/dev/MobileSyncExplorerSwift/MobileSyncExplorerSwift/SceneDelegate.swift).

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

If your app defers login, where and when you call AuthHelper.loginIfRequired(\_:) is up to you. In all cases, be sure to precede the call by setting the root view controller to IntialViewController, as shown here.

## Code Examples

```
<key>SFDCOAuthLoginHost</key>
<string>login.salesforce.com</string>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" 
    "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>remoteAccessConsumerKey</key>
    <string>3MVG9Iu66FKeHhINkB1l7xt7kR8czFcCTUhgoA8Ol2Ltf1eYHOU4SqQRSEitYFDUpqRWcoQ2.dBv_a1Dyu5xa</string>
    <key>oauthRedirectURI</key>
    <string>testsfdc:///mobilesdk/detect/oauth/done</string>
    <key>oauthScopes</key>
    <array>
        <string>web</string>
        <string>api</string>
    </array>
    <key>shouldAuthenticate</key>
    <true/>
</dict>
</plist>
```

```
import Foundation
```

```
import Foundation
import SalesforceSDKCore
```

```
UIApplicationMain(
    CommandLine.argc,
    CommandLine.unsafeArgv,
    NSStringFromClass(SFApplication.self), //principalClassName
    NSStringFromClass(AppDelegate.self)    //delegateClassName
)
```

## Related Topics

- Create an Xcode Swift Project (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_new_native_manual_create_xcode_project.htm)
- Add Mobile SDK Libraries to Your Project (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_new_native_manual_clone_sdk.htm)
- Configure Your Project’s Build Settings (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_new_native_manual_configure_build.htm)
- Code Modifications (iOS) (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/push_ios_code.htm)
- Identity Provider Apps (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/auth_identity_providers.htm)
