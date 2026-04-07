---
title: "AppDelegate Class"
domain: mobile-sdk
topic: appdelegate-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:26.279Z
estimatedTokens: 834
keywords: [Initialization, AppDelegate, init, iOS, application, didFinishLaunchingWithOptions, call, simply, unless, you’ve, uncommented, line, registers, app, push, notifications, Objective-C, UIApplication, Event, Handlers]
---

> After init() returns, iOS calls application(_:didFinishLaunchingWithOptions:_:).
                This call simply returns unless you’ve uncommented the line in it that registers
                your app for push notifications.

# AppDelegate Class

The AppDelegate class is the true entry point for an iOS app. In Mobile SDK template apps, AppDelegate implements a portion of the iOS UIApplicationDelegate interface. In a Mobile SDK Swift app with SwiftUI, AppDelegate performs these tasks:

-   Initializes Mobile SDK through the MobileSyncSDKManager object
-   Hands off control to SceneDelegate for Salesforce login and root view instantiation
-   Optionally, registers your app for push notifications and sets up identity provider (IDP) functionality

## Initialization

In the init() method of AppDelegate, the SalesforceManager object initializes Mobile SDK. The following code shows the init method as implemented by the template app.

```

```

After init() returns, iOS calls application(\_:didFinishLaunchingWithOptions:\_:). This call simply returns unless you’ve uncommented the line in it that registers your app for push notifications.

iOS next calls application(\_:configurationForConnecting:\_:) on AppDelegate. This method passes control to the SceneDelegate instance running on the UI thread. While SceneDelegate is launching the app’s UI, AppDelegate continues to call push notification protocol methods. These notifications culminate in a prompt that asks the customer to allow or deny notifications.

If the app is currently active in the background, on foregrounding iOS performs an abbreviated version of this initialization process.

## Initialization (Objective-C)

The following listing shows the init method as implemented by the template app. It is followed by a call to the loginIfRequired: method of SalesforceSDKManager in the application:didFinishLaunchingWithOptions: method.

```

```

In the init method, the SalesforceSDKManager object

-   Initializes Mobile SDK.
-   Registers a block to handle user change notifications. This block configures the app to call your setupRootViewController method to reset the view for the new user.

In your AppDelegate class, implement setupRootViewController to display your app’s first screen after authentication. The self.window object must have a valid rootViewController by the time application:didFinishLaunchingWithOptions: completes. Here’s the Mobile SDK Objective-C template’s implementation.

```

```

## UIApplication Event Handlers

You can also use the UIApplicationDelegate protocol to implement UIApplication event handlers. Important event handlers that you might consider implementing or customizing include:

-   application(\_:didFinishLaunchingWithOptions:)

    Called at the beginning of your app’s life-cycle. The template app implementation simply returns. Optionally, you can use this method to register the app for push notifications.

-   applicationDidBecomeActive(\_:)

    Called after the application is foregrounded.

-   application(\_:didRegisterForRemoteNotificationsWithDeviceToken:)

    Used for handling incoming push notifications from Salesforce. Follow the commented instructions and code in the template app’s stub implementations.


For a list of all UIApplication event handlers, see the [UIApplicationDelegate](https://developer.apple.com/documentation/uikit/uiapplicationdelegate "HTML (New Window)") documentation.

#### See Also

-   [Using Push Notifications in iOS](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/push_using_ios.htm)

## Code Examples

```
override
init()
{
    super.init()
    MobileSyncSDKManager.initializeSDK
}
```

```
- (instancetype)init
{
    self = [super init];
    if (self) {
        [MobileSyncSDKManager initializeSDK];
        
        //App Setup for any changes to the current authenticated user

        [SFSDKAuthHelper registerBlockForCurrentUserChangeNotifications:^{
            [self resetViewState:^{
                [self setupRootViewController];
            }];
        }];
    }
    return self;
}
```

```
- (void)setupRootViewController
{
    RootViewController *rootVC = 
        [[RootViewController alloc] initWithNibName:nil bundle:nil];
    UINavigationController *navVC = 
        [[UINavigationController alloc] initWithRootViewController:rootVC];
    self.window.rootViewController = navVC;
}
```

## Related Topics

- Using Push Notifications in iOS (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/push_using_ios.htm)
