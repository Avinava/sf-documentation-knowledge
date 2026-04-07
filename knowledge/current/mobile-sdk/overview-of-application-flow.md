---
title: "Overview of Application Flow"
domain: mobile-sdk
topic: overview-of-application-flow
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:30.974Z
estimatedTokens: 711
keywords: [Application, Flow, Native, iOS, apps, Mobile, SDK, whether, Objective-C, Swift, follow, similar, designs, main.swift, source]
---

# Overview of Application Flow

> Native iOS apps for Mobile SDK, whether
        Objective-C and Swift, follow similar designs. The main.swift source
        file (main.m in Objective-C) creates a UIApplicationMain object that is the root object for the rest of the
        application. The UIApplicationMain constructor
      instan

# Overview of Application Flow

Native iOS apps for Mobile SDK, whether Objective-C and Swift, follow similar designs. The main.swift source file (main.m in Objective-C) creates a UIApplicationMain object that is the root object for the rest of the application. The UIApplicationMain constructor instantiates the Mobile SDK SFApplication object and spawns an AppDelegate object that manages the application lifecycle.

AppDelegate uses a Mobile SDK service object, SalesforceSDKManager, to initialize SDK objects. After successful initialization, the Objective-C and Swift flows diverge slightly.

## Swift Flow

The native iOS Swift template for Mobile SDK defines four main classes: AppDelegate, InitialViewController, SceneDelegate, and a root view controller. The AppDelegate object calls SalesforceSDKManager or one of its extensions to initialize the SDK. It then passes control to a SceneDelegate instance. When a new scene is about to enter the foreground, SceneDelegate loads InitialViewController—an empty UIViewController object that’s a container for the Salesforce login and authorization screens. SceneDelegate then calls AuthHelper to begin the authentication process if necessary. After authentication succeeds, SceneDelegate launches your app by passing control to its custom root view controller. For this template, the root view controller is the AccountsListView class.

![Swift application flow diagram](/docs/resources/img/en-us/noversion?doc_id=dev_guides%2Fmobile_sdk%2Fimages%2FApplicationFlow-iOS-Swift.png&folder=mobile_sdk)

## Objective-C Flow

The Objective-C native iOS template defines three classes: AppDelegate, InitialViewController, and RootViewController. The AppDelegate object calls SFSDKAuthHelper to load InitialViewController for its first view—the login screen. After authentication succeeds, the AppDelegate object displays the view associated with RootViewController as the entry point to your app.

![Objective-C application flow diagram](/docs/resources/img/en-us/noversion?doc_id=dev_guides%2Fmobile_sdk%2Fimages%2FApplicationFlow-iOS.png&folder=mobile_sdk)

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

The workflow demonstrated by the template app is just an example. You can tailor your AppDelegate and supporting classes to enable extra features or refine the workflow. For example, you can postpone Salesforce authentication until it’s required. You can retrieve data through REST API calls and display it, launch other views, perform services, and so on. Mobile SDK templates also provide commented-out boilerplate code that you can reinstate to handle push notifications and initialize IDP app services.

#### See Also

-   [SDK Manager Classes](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/salesforce_sdk_manager_ios.htm)

## Related Topics

- SDK Manager Classes (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/salesforce_sdk_manager_ios.htm)
