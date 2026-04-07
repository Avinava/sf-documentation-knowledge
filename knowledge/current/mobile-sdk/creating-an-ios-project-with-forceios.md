---
title: "Creating an iOS Project with Forceios"
domain: mobile-sdk
topic: creating-an-ios-project-with-forceios
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:26.343Z
estimatedTokens: 1318
keywords: [Creating, iOS, Project, Forceios, Application, Interactively, Script, Mode, App, Template, Checking, Running, New, How, Generates, Apps]
---

# Creating an iOS Project with Forceios

To create an app, use forceios in a terminal window. The forceios utility gives you two ways to create your app.

-   Specify the type of application you want, along with basic configuration data.

    or

-   Use an existing Mobile SDK app as a template. You still provide the basic configuration data.

You can use forceios in interactive mode with command-line prompts, or in script mode with command-line arguments. To see command usage information, type forceios without arguments.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

Be sure to install CocoaPods before using forceios. See [iOS Preparation](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/install_ios.htm#install_ios "To create Mobile SDK apps for iOS, you must install the necessary Apple software. If you plan to use forceios, you also install CocoaPods.").

## Forceios Application Types

For application type, the forceios create command accepts either of the following input values:

| App Type | Language |
| --- | --- |
| Type native_swift (or press RETURN) | Swift |
| Type native | Objective-C |

## Using forceios create Interactively

To use interactive prompts to create an app, open a Terminal window and type forceios create. For example:

```

```

This command creates a native iOS Swift app named “testSwift” in the testSwift/ subdirectory of your current directory.

## Using forceios create in Script Mode

In script mode, you can use forceios without interactive prompts. For example, to create a native app written in Swift:

```

```

Or, to create a native app written in Objective-C:

```

```

Each of these calls creates a native app named “package-test” and places it in the PackageTest/ subdirectory of your current directory.

## Creating an App from a Template

The forceios createWithTemplate command is identical to forceios create except that it asks for a GitHub repo URI instead of an app type. You set this URI to point to any repo directory that contains a Mobile SDK app that can be used as a template. Your template app can be any supported Mobile SDK app type. The script changes the template’s identifiers and configuration to match the values you provide for the other parameters.

Before you use createWithTemplate, it's helpful to know which templates are available. To find out, type forceios listtemplates. This command prints a list of templates provided by Mobile SDK. Each listing includes a brief description of the template and its GitHub URI. For example:

```

```

Once you've found a template's URI, you can plug it into the forceios command line. Here’s command-line usage information for forceios createWithTemplate:

```

```

For any template in the SalesforceMobileSDK-Templates repo, you can drop the path for templaterepouri—just the template name will do. For example:

```

```

You can use forceios createWithTemplate interactively or in script mode. For example, here’s a script mode call that uses a specific tag for the template:

```

```

This call creates a native Swift app with the same source code and resources as the MobileSyncExplorerSwift sample app. Forceios places the new app in the testWithTemplate/ subdirectory of your current directory. It also changes the app name to “MyMobileSyncExplorer” throughout the project.

## Checking the Forceios Version

To find out which version of forceios you’ve installed, run the following command:

```

```

## Running Your New forceios Project

Apps created with forceios are ready to run, right out of the box. After forceios finishes, it prints instructions for opening and running the project from the command line.

If you prefer, you can leave the command line and open your new project manually in Xcode.

1.  In Xcode, select **File** | **Open**.
2.  Navigate to the output folder you specified.
3.  Open the workspace file (<*project\_name*\>.xcworkspace).
4.  When Xcode finishes building, click the **Run** button.

 .

## How the Forceios Script Generates New Apps

-   Apps are based on CocoaPods or Swift Package Manager.
-   The script downloads templates at runtime from a GitHub repo.
-   For the forceios create command, the script uses the default templates in the [SalesforceMobileSDK-Templates](https://github.com/forcedotcom/SalesforceMobileSDK-Templates ":HTML (New Window)") GitHub repo.
-   For templates based on CocoaPods, the script uses npm at runtime to download Mobile SDK libraries. The podfile refers to these libraries with :path => node\_modules/... directives.
-   For projects built with Swift Package Manager, the script configures the Xcode project to use the Salesforce Mobile SDK Swift Package published on [https://github.com/forcedotcom/SalesfoceMobileSDK-iOS-SPM](https://github.com/forcedotcom/SalesfoceMobileSDK-iOS-SPM).

#### See Also

-   [Updating Apps (5.0 and Later) Apps (5.0 and Later)](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/general_update_app.htm "Native and React native apps get an easier path to future Mobile SDK upgrades. Instead of creating an app and porting your app’s resources to it, you now update a simple configuration file and then run a script that regenerates your app with the new SDK libraries.")

## Code Examples

```
$ forceios create
Enter your application type (native, native_swift): <press RETURN>
Enter your application name: testSwift
Enter the package name for your app (com.mycompany.myapp): com.bestapps.ios
Enter your organization name (Acme, Inc.): BestApps.com
Enter output directory for your app (leave empty for the current directory): testSwift
```

```
$ forceios create --apptype="native_swift" --appname="package-test" --packagename="com.acme.mobile_apps" 
    --organization="Acme Widgets, Inc." --outputdir="PackageTest"
```

```
$ forceios create --apptype="native" --appname="package-test" --packagename="com.acme.mobile_apps" 
    --organization="Acme Widgets, Inc." --outputdir="PackageTest"
```

```
Available templates:

1) Swift application using MobileSync, SwiftUI and Combine
forceios createwithtemplate --templaterepouri=iOSNativeSwiftTemplate

2) Swift application using MobileSync, SwiftUI and Combine (pulled in using Swift Package Manager)
forceios createwithtemplate --templaterepouri=iOSNativeSwiftPackageManagerTemplate

3) Basic Swift application with notification service extension
forceios createwithtemplate --templaterepouri=iOSNativeSwiftEncryptedNotificationTemplate

4) Basic Objective-C application
forceios createwithtemplate --templaterepouri=iOSNativeTemplate

5) Sample Swift Identity Provider application
forceios createwithtemplate --templaterepouri=iOSIDPTemplate

6) Sample Swift application using MobileSync data framework
forceios createwithtemplate --templaterepouri=MobileSyncExplorerSwift
```

```
Usage:
forceios createWithTemplate 
    --templaterepouri=<Template repo URI> (e.g., MobileSyncExplorerReactNative)] 
    --appname=<Application Name> 
    --packagename=<App Package Identifier> (e.g. com.mycompany.myapp) 
    --organization=<Organization Name> (Your company's/organization's name) 
    --outputdir=<Output directory> (Leave empty for current directory)]
```

## Related Topics

- iOS Preparation (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/install_ios.htm)
- Updating Apps (5.0 and Later) Apps (5.0 and Later) (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/general_update_app.htm)
