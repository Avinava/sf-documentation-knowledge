---
title: "SceneDelegate Class"
domain: mobile-sdk
topic: scenedelegate-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:26.314Z
estimatedTokens: 810
keywords: [Initialization, SceneDelegate, handles, setup, life-cycle, management, scenes, Mobile, SDK, Swift, template, Salesforce, logins, app’s, root, view, controller, currently, doesn’t, Deferred, Login]
---

> The SceneDelegate class handles setup and life-cycle
            management for scenes. In the Mobile SDK
            Swift template, SceneDelegate also handles
            Salesforce logins and sets up your app’s root view controller. Mobile SDK
            currently doesn’t use SceneDelegate in it

# SceneDelegate Class

The SceneDelegate class handles setup and life-cycle management for scenes. In the Mobile SDK Swift template, SceneDelegate also handles Salesforce logins and sets up your app’s root view controller. Mobile SDK currently doesn’t use SceneDelegate in its Objective-C template.

OAuth resources reside in an independent module. This separation makes it possible for you to use Salesforce authentication on demand. You can start the login process from within your SceneDelegate implementation, or you can defer it until it’s actually required—for example, you can call OAuth from a scustom subview.

## Initialization

In the following code, you can see how the template app sets up a handler for current user change event notifications.

```

```

AuthHelper, a Mobile SDK shared object, registers the enclosed block to handle user change events. When this type of change occurs, Mobile SDK discards the former user’s data. Here, the registered handler block calls resetViewState() to unwind any existing view hierarchy. Finally, resetViewState() calls setupRootViewController() to restore the app’s original state.

```

```

Here, the template takes advantage of this execution point to set up SmartStore and Mobile Sync configurations—a one-time event per user. It then sets AccountsListView as the root view and creates a UIHostingController object based on it. This new object becomes the root view controller. Whenever your app enters the foreground—when it first loads or when a customer restores it from the background—, iOS calls sceneWillEnterForeground(\_:):

```

```

The initializeAppViewState() method initializes or resets the state of your app’s first screen. Before the call to setupRootViewcontroller(), you can customize the look and functionality of the login page’s navigation bar. For example, create a method that customizes the public properties of the SalesforceLoginViewControllerConfig class.

```

```

The loginIfRequired method takes a block argument that returns void and doesn’t have parameters. Use this block, as shown, to set up your root view controller. Here, the setupRootViewController method sets the rootViewController property of self.window to your app’s first custom view, thus launching your app’s custom behavior. In this template, that view is the Accounts list view.

## About Deferred Login

Beginning in Mobile SDK 7.0, you let Mobile SDK decide when it’s necessary to show the login dialog. By calling AuthHelper.loginIfRequired, you nudge the SDK to consider whether the user has valid OAuth tokens. If not, Mobile SDK takes your advice and prompts the user to log in.

You’re not required to call this method in your SceneDelegate implementation. You can defer login to any point after app initialization is completed. To defer authentication:

1.  In the Xcode editor, open the SceneDelegate class.
2.  In sceneWillEnterForeground(\_:) method, remove the loginIfRequired call, but *keep the code that’s inside the block*:

    ```

    ```

3.  Call AuthHelper.loginIfRequired { } at the desired point of deferred login. To ensure that operations occur in the proper order, put the code that requires authentication in the closure parameter of loginIfRequired:.

## Code Examples

```
func scene(_ scene: UIScene, willConnectTo session: UISceneSession, 
    options connectionOptions: UIScene.ConnectionOptions) {
    
    guard let windowScene = (scene as? UIWindowScene) else { return }
    self.window = UIWindow(frame: windowScene.coordinateSpace.bounds)
    self.window?.windowScene = windowScene
   
    AuthHelper.registerBlock(forCurrentUserChangeNotifications: {
       self.resetViewState {
           self.setupRootViewController()
       }
    })
}
```

```
func setupRootViewController() {
    // Setup store based on config userstore.json
    MobileSyncSDKManager.shared.setupUserStoreFromDefaultConfig()
    // Setup syncs based on config usersyncs.json
    MobileSyncSDKManager.shared.setupUserSyncsFromDefaultConfig()
 
    self.window?.rootViewController = UIHostingController(
        rootView: AccountsListView()
    )
}
```

```
func sceneWillEnterForeground(_ scene: UIScene) {
    // Called as the scene transitions from the background to the foreground.
    // Use this method to undo the changes made on entering the background.
    self.initializeAppViewState()
    AuthHelper.loginIfRequired {
        self.setupRootViewController()
    }
}
```

```
func customizeLoginView() {
    let loginViewConfig = SalesforceLoginViewControllerConfig()
    
    // Set showSettingsIcon to false if you want to hide the settings
    // icon on the nav bar
    loginViewConfig.showsSettingsIcon = false
    
    // Set showNavBar to false if you want to hide the top bar
    loginViewConfig.showsNavigationBar = true
    loginViewConfig.navigationBarColor = UIColor(red: 0.051, green: 0.765, blue: 0.733, alpha: 1.0)
    loginViewConfig.navigationTitleColor = UIColor.white
    loginViewConfig.navigationBarFont = UIFont(name: "Helvetica", size: 16.0)
    UserAccountManager.shared.loginViewControllerConfig = loginViewConfig
}
```

```
//AuthHelper.loginIfRequired {
    self.setupRootViewController() // Keep this call in sceneWillEnterForeground(_:)
//}
```
