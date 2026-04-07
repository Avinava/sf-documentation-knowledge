---
title: "Supporting iPadOS in  Apps Apps"
domain: mobile-sdk
topic: supporting-ipados-in-apps-apps
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:30.953Z
estimatedTokens: 560
keywords: [Supporting, iPadOS, Apps, Mobile, SDK, 9.0, enhances, iPad, customer, experience, Landscape, mode, now, functions, expected]
---

# Supporting iPadOS in  Apps Apps

> Mobile SDK 9.0
        enhances the iPad customer experience. Landscape mode now functions as expected, and Mobile SDK now
        supports multiple windows.

# Supporting iPadOS in Apps Apps

Mobile SDK 9.0 enhances the iPad customer experience. Landscape mode now functions as expected, and Mobile SDK now supports multiple windows.

| Swift | Objective-C |
| --- | --- |
| AuthHelper | SFSDKAuthHelper |

While Mobile SDK apps for iPad aren’t required to explicitly enable multiple windows, use of this feature does require changes to your SceneDelegate code. New methods on AuthHelper add a UIScene parameter to existing methods of the same name. To Mobile SDK, the scene clarifies the login flow, allowing SDK objects to adjust to the shifting customer focus. When a user logs in or logs out in one scene, the change applies to all scenes. You can handle each case after the fact by defining the completion callback blocks in the loginIfRequired(\_:completion:) and handleLogout(\_:completion:) methods.

To see the new methods in action, study the updated SceneDelegate class in the [RestAPIExplorer](https://github.com/forcedotcom/SalesforceMobileSDK-iOS/tree/v9.0.0/native/SampleApps/RestAPIExplorer) sample app. The registerBlock(forCurrentUserChangeNotifications:) and loginIfRequired(\_:completion:) methods of the AuthHelper class now accept a UIWindowScene argument.

```

```

In the completion block of loginIfRequired(\_:completion:), this sample app calls code that resets the scene to its beginning state—in this case, an instance of RootViewController. The registerBlock(forCurrentUserChangeNotifications:completion:) completion block first discards the view stack of the outgoing user, then resets the scene to RootViewController. To support multiple windows, copy these two calls into the scene(\_:willConnectTo:\_:) method of your Swift app’s SceneDelegate instance. Replace the existing AuthHelper.registerBlock(\_:) call with the scene-enabled version.

## IDP Apps

Similarly to AppDelegate, SceneDelegate provides a method for opening URLs. To support multiple windows, Mobile SDK IDP client apps must use the scene delegate and pass in the scene’s persistent identifier.

```

```

```

```

## AuthHelper Scene-Enabled Methods

The following AuthHelper methods are new overloads that add a UIScene parameter to existing methods.

Swift

```

```

Objective-C

```

```

## Code Examples

```
func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
    guard let windowScene = (scene as? UIWindowScene) else { return }
    self.window = UIWindow(frame: windowScene.coordinateSpace.bounds)
    self.window?.windowScene = windowScene

    AuthHelper.registerBlock(forCurrentUserChangeNotifications: scene) {
        self.resetViewState {
            self.setupRootViewController()
        }
    }
    self.initializeAppViewState()

    AuthHelper.loginIfRequired(scene) {
        self.setupRootViewController()
    }
}
```

```
func scene(_ scene: UIScene, openURLContexts URLContexts:
```

```
Set<UIOpenURLContext>) {

    if let urlContext = URLContexts.first {
        UserAccountManager.shared.handleIdentityProviderResponse(
            from: urlContext.url, 
            with: [UserAccountManager.IDPSceneKey: 
                scene.session.persistentIdentifier])
    }
}
```

```
func loginIfRequired(_ scene: UIScene, completion completionBlock: (() -> Void)?)

func handleLogout(_ scene: UIScene, completion completionBlock: (() → Void)?)

func registerBlock(forCurrentUserChangeNotifications scene: UIScene completion completionBlock: () → Void)

func registerBlock(forLogoutNotifications scene:UIScene, completion completionBlock: () → Void)
```

```
+ (void)loginIfRequired:(UIScene *)scene completion:
    (nullable void (^)(void))completionBlock;

+ (void)handleLogout:(UIScene *)scene completion:
    (nullable void (^)(void))completionBlock;

+ (void)registerBlockForCurrentUserChangeNotifications:
    (UIScene *)scene completion:(void (^)(void))completionBlock;

+ (void)registerBlockForLogoutNotifications:
    (UIScene *)scene completion:(void (^)(void))completionBlock;
```
