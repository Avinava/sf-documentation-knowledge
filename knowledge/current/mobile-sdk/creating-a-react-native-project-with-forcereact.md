---
title: "Creating a React Native Project with Forcereact"
domain: mobile-sdk
topic: creating-a-react-native-project-with-forcereact
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:27.196Z
estimatedTokens: 1183
keywords: [Creating, React, Native, Project, Forcereact, you’ve, successfully, installed, Mobile, SDK, environment, begin, apps, Interactively, Command-Line, Options, Specifying, Template, Build, Run, App, Android, Studio, Xcode, How, Script, Generates, New]
---

> After you’ve successfully installed a native Mobile SDK
        environment, you can begin creating React Native apps.

# Creating a React Native Project with Forcereact

After you’ve successfully installed a native Mobile SDK environment, you can begin creating React Native apps.

To create an app, use forcereact in a terminal window or at a Windows command prompt. The forcereact utility gives you two ways to create your app.

-   Specify the type of application you want, along with basic configuration data.

    OR

-   Use an existing Mobile SDK app as a template. You still provide the basic configuration data.

In Mobile SDK 9.0, forcereact adds an app type option to support TypeScript: react\_native\_typescript. This type becomes the default for the forcereact create command. To instead use standard JavaScript, you specify the react\_native app type.

You can use forcereact in interactive mode with command-line prompts, or in scripted mode with the parameterized command-line version.

## Using Forcereact Interactively

To enter application options interactively at a command prompt, type forcereact create. The forcereact utility then prompts you for each configuration option.

## Using Forcereact with Command-Line Options

If you prefer, you can specify forcereact parameters directly at the command line. To see usage information, type forcereact without arguments. The list of available options displays:

```

```

Using this information, type forcereact create, followed by your options and values. For example, to create a React Native app that supports TypeScript:

```

```

## Specifying a Template

forcereact createWithTemplate is identical to forcereact create except that it also asks for a template repo URI. You set this path to point to any repo directory that contains a Mobile SDK app that can be used as a template. Your template app can be any supported Mobile SDK app type—react\_native or react\_native\_typescript. The force script changes the template’s identifiers and configuration to match the values you provide for the other parameters.

Before you use createWithTemplate, it's helpful to know which templates are available. To find out, type forcereact listtemplates. This command prints a list of templates provided by Mobile SDK. Each listing includes a brief description of the template and its GitHub URI. For example:

```

```

After you've found a template's URI, you can plug it into the forcereact command line. Here’s command-line usage information for creating a TypeScript project with forcereact createWithTemplate:

```

```

For any template in the SalesforceMobileSDK-Templates repo, you can drop the path for templaterepouri—just the template name will do. For example, consider the following command-line call:

```

```

This call creates a React Native app in the current directory that supports both iOS and Android. It uses the same source code and resources as the MobileSyncExplorerReactNative sample app. Forcereact changes the app name to “MyReact” throughout the project.

## Build and Run Your App with Android Studio

For React Native, Mobile SDK supports both npm and yarn for package management. When you see both options, the choice is yours.

1.  In a Terminal window or at Windows command prompt, change to your project’s root directory.

    ```

    ```

2.  Run the following command:
    -   npm start

        OR

    -   yarn start
3.  Open your project in Android Studio.
    -   From the Welcome screen, click **Import Project (Eclipse ADT, Gradle, etc.)**.

        OR

    -   From the File menu, click **File** | **New** | **Import Project...**.

4.  Browse to your <*project\_ root*\>/android/ directory and click **OK**.

    Android Studio automatically builds your workspace. This process can take several minutes. When the status bar reports “Gradle build successful”, you’re ready to run the project.

5.  Click **Run 'app'**, or press SHIFT+F10.

    Android Studio launches your app in the emulator or on your connected Android device.


## Build and Run Your App in Xcode

1.  In a Terminal window, change to your project’s root directory.

    ```

    ```

2.  Type npm start, then press Return.
3.  In Xcode, open <*project\_ root*\>/ios/<*project\_name*\>.xcworkspace.
4.  Click **Run**.

    Xcode launches your app in the simulator or on your connected iOS device.


## How the Forcereact Script Generates New Apps

-   The script downloads templates at runtime from a GitHub repo. For the forcereact create command, the script uses the default templates in the [SalesforceMobileSDK-Templates](https://github.com/forcedotcom/SalesforceMobileSDK-Templates ":HTML (New Window)") GitHub repo.
-   The script uses npm to download React Native dependencies.
-   The script uses git (Android) or CocoaPods (iOS) to download Mobile SDK libraries.

## Code Examples

```
$ forcereact

forcereact: Tool for building a React Native mobile application 
            using Salesforce Mobile SDK

Usage:

# create a React Native mobile application
forcereact create
    --platform=comma-separated list of platforms (ios, android)
    [--apptype=application type (react_native_typescript or react_native, 
        leave empty for react_native_typescript)]
    --appname=application name
    --packagename=app package identifier (e.g. com.mycompany.myapp)
    --organization=organization name (your company's/organization's name)
    [--outputdir=output directory (leave empty for current directory)]
```

```
$ forcereact create 
--platform=ios,android
--appname=CoolReact 
--packagename=com.test.my_new_app 
--organization="Acme Widgets, Inc." 
--outputdir=CoolReact
```

```
Available templates:

1) Basic React Native application: 
    forcereact createwithtemplate --templaterepouri=ReactNativeTemplate
2) Basic React Native application that uses deferred login
    forcereact createwithtemplate --templaterepouri=ReactNativeDeferredTemplate
3) Basic React Native application written in TypeScript
    forcereact createwithtemplate --templaterepouri=ReactNativeTypeScriptTemplate
4) Sample application using MobileSync data framework
   forcereact createwithtemplate --templaterepouri=MobileSyncExplorerReactNative
```

```
forcereact createWithTemplate
    --platform=Comma separated platforms (ios, android)
    --templaterepouri=Template repo URI
    --appname=Application Name
    --packagename=App Package Identifier (e.g. com.mycompany.myapp)
    --organization=Organization Name (Your company's/organization's name)
    [--outputdir=Output Directory (Leave empty for current directory)]
```

```
forcereact createWithTemplate
--platform=ios,android 
--templaterepouri=MobileSyncExplorerReactNative 
--appname=MyReact 
-—packagename=com.mycompany.react 
--organization="Acme Software, Inc." 
-—outputdir=""
```
