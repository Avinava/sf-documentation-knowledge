---
title: "Creating an Android Project with Forcedroid"
domain: mobile-sdk
topic: creating-an-android-project-with-forcedroid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:24.994Z
estimatedTokens: 1496
keywords: [Creating, Android, Project, Forcedroid, Interactively, Script, Mode, App, Template, Checking, Import, Build, Studio, Building, Running, Command, Line, How, Generates, New, Apps]
---

# Creating an Android Project with Forcedroid

To create an app, use forcedroid in a terminal window or at a Windows command prompt. The forcedroid utility gives you two ways to create your app.

-   Specify the type of application you want, along with basic configuration data.

    OR

-   Use an existing Mobile SDK app as a template. You still provide the basic configuration data.

You can use forcedroid in interactive mode with command-line prompts, or in script mode with command-line arguments. To see command usage information, type forcedroid without arguments.

## Forcedroid Project Types

The forcedroid create command requires you to specify one of the following project types:

| App Type | Architecture | Language |
| --- | --- | --- |
| native | Native | Java |
| native_kotlin (or just press RETURN) | Native | Kotlin |

To develop a native Android app in Java, specify native.

## Using forcedroid create Interactively

To enter application options interactively at a command prompt, type forcedroid create. The forcedroid utility then prompts you for each configuration option. For example:

```

```

This command creates a native Kotlin Android app named “testNative” in the testNative\\ subdirectory of your current directory.

## Using forcedroid create in Script Mode

In script mode, you can use forcedroid without interactive prompts. For example, to create a native app written in Java:

```

```

Or, to create a native app written in Kotlin:

```

```

Each of these calls creates a native app named “package-test” and places it in the PackageTest/ subdirectory of your current directory.

## Creating an App from a Template

The forcedroid createWithTemplate command is identical to forcedroid create except that it asks for a GitHub repo URI instead of an app type. You set this URI to point to any repo directory that contains a Mobile SDK app that can be used as a template. Your template app can be any supported Mobile SDK app type. The script changes the template’s identifiers and configuration to match the values you provide for the other parameters.

Before you use createWithTemplate, it's helpful to know which templates are available. To find out, type forcedroid listtemplates. This command prints a list of templates provided by Mobile SDK. Each listing includes a brief description of the template and its GitHub URI. For example:

```

```

Once you've found a template's URI, you can plug it into the forcedroid command line. Here’s command-line usage information for forcedroid createWithTemplate:

```

```

For any template in the SalesforceMobileSDK-Templates repo, you can drop the path for templaterepouri—just the template name will do. For example:

```

```

You can use forcedroid createWithTemplate interactively or in script mode. For example, here’s a script mode call:

```

```

This call creates an Android identity provider app with the same source code and resources as the Android IdP sample app. Forcedroid places the new app in the testWithTemplate/ subdirectory of your current directory. It also changes the app name to “MyIDP-Android” throughout the project.

## Checking the Forcedroid Version

To find out which version of forcedroid you’ve installed, run the following command:

```

```

## Import and Build Your App in Android Studio

1.  Open the project in Android Studio.

    -   From the Welcome screen, click **Import Project (Eclipse ADT, Gradle, etc.)**.

        OR

    -   From the File menu, click **File** | **New** | **Import Project...**.


2.  Browse to your project directory and click **OK**.

    Android Studio automatically builds your workspace. This process can take several minutes. When the status bar reports “Gradle build successful”, you’re ready to run the project.

3.  Click **Run <*project\_name*\>**, or press SHIFT+F10. For native projects, the project name is the app name that you specified.

    Android Studio launches your app in the emulator or on your connected Android device.


## Building and Running Your App from the Command Line

After the command-line returns to the command prompt, the forcedroid script prints instructions for running Android utilities to configure and clean your project. Follow these instructions if you want to build and run your app from the command line.

1.  Build the new application.

    -   **Windows:**

        ```

        ```

    -   **Mac:**

        ```

        ```


    When the build completes successfully, you can find your signed APK debug file in the project’s build/outputs/apk directory.

2.  If you’re using an emulator that isn’t running, use the Android AVD Manager to start it. If you’re using a physical device, connect it.
3.  Install the APK file on the emulator or device.
    -   **Windows:**

        ```

        ```

    -   **Mac:**

        ```

        ```


If you can’t find your newly installed app, try restarting your emulator or device. For more information, search “Build your app from the command line” at [developer.android.com](https://developer.android.com/ "HTML (New Window)").

## How the Forcedroid Script Generates New Apps

-   The script downloads templates at runtime from a GitHub repo.
-   The forcedroid create command uses the default Kotlin template in the [SalesforceMobileSDK-Templates](https://github.com/forcedotcom/SalesforceMobileSDK-Templates ":HTML (New Window)") GitHub repo.
-   Generated apps use Gradle.
-   The script uses npm at runtime to download Mobile SDK libraries. The settings.gradle file points to these libraries under node\_modules.

#### See Also

-   [Updating Apps (5.0 and Later) Apps (5.0 and Later)](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/general_update_app.htm "Native and React native apps get an easier path to future Mobile SDK upgrades. Instead of creating an app and porting your app’s resources to it, you now update a simple configuration file and then run a script that regenerates your app with the new SDK libraries.")

## Code Examples

```
$ forcedroid create
Enter your application type (native, native_kotlin): <press RETURN>
Enter your application name: testNative
Enter the package name for your app (com.mycompany.myapp): com.bestapps.android
Enter your organization name (Acme, Inc.): BestApps
Enter output directory for your app (leave empty for the current directory): testNative
```

```
$ forcedroid create --apptype="native" --appname="package-test" --packagename="com.acme.mobile_apps" 
    --organization="Acme Widgets, Inc." --outputdir="PackageTest"
```

```
$ forcedroid create --apptype="native_kotlin" --appname="package-test" --packagename="com.acme.mobile_apps" 
    --organization="Acme Widgets, Inc." --outputdir="PackageTest"
```

```
Available templates:

1) Basic Kotlin application 
forcedroid createwithtemplate --templaterepouri=AndroidNativeKotlinTemplate
2) Basic Java application
forcedroid createwithtemplate --templaterepouri=AndroidNativeTemplate
3) Sample Kotlin Identity Provider application
forcedroid createwithtemplate --templaterepouri=AndroidIDPTemplate
```

```
Usage:
forcedroid createWithTemplate 
    --templaterepouri=<Template repo URI> (e.g. https://github.com/forcedotcom/SalesforceMobileSDK-Templates/MobileSyncExplorerReactNative)] 
    --appname=<Application Name> 
    --packagename=<App Package Identifier> (e.g. com.mycompany.myapp) 
    --organization=<Organization Name> (Your company's/organization's name) 
    --outputdir=<Output directory> (Leave empty for current directory)]
```

## Related Topics

- Updating Apps (5.0 and Later) Apps (5.0 and Later) (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/general_update_app.htm)
