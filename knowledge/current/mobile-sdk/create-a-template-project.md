---
title: "Create a Template Project"
domain: mobile-sdk
topic: create-a-template-project
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:25.849Z
estimatedTokens: 612
keywords: [Template, Project, sure, you’ve, installed, Salesforce, Mobile, SDK, NPM, installer, iOS, instructions, Preparation, Android]
---

> First, make sure you’ve installed Salesforce Mobile SDK using the NPM installer. For iOS
                instructions, see iOS Preparation. For Android instructions, see
                    Android Preparation.

# Create a Template Project

First, make sure you’ve installed Salesforce Mobile SDK using the NPM installer. For iOS instructions, see [iOS Preparation](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/install_ios.htm "To create Mobile SDK apps for iOS, you must install the necessary Apple software. If you plan to use forceios, you also install CocoaPods."). For Android instructions, see [Android Preparation](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/install_android.htm "Before you try to create Mobile SDK apps for Android—native, hybrid, or React Native—install the Android native development environment.").

Also, download the ratchet.css file from [http://goratchet.com/](http://goratchet.com/ "HTML (New Window)").

Once you’ve installed Mobile SDK, create a local hybrid project for your platform.

1.  At a Terminal window or Windows command prompt, run the forcehybrid create command using the following values:

    | Prompt (or Parameter) | Value |
    | --- | --- |
    | Platform (--platform) | ios, android, or ios,android |
    | Application type (--apptype) | hybrid_local |
    | Application name (--appname) | UserSearch |
    | Package name (--packagename) | com.acme.usersearch |
    | Organization (--organization) | “Acme Widgets, Inc.” |
    | Output directory (--outputdir) | Leave blank for current directory, or enter a name to create a new subdirectory for the project |

    Here’s a command line example:

    ```

    ```

2.  Copy all files—actual and symbolic—from the samples/usersearch directory of the [https://github.com/forcedotcom/SalesforceMobileSDK-Shared/](https://github.com/forcedotcom/SalesforceMobileSDK-Shared "HTML (New Window)") repository into the www/ folder, as follows:

    -   In a Mac OS X terminal window, change to your project’s root directory—./UserSearch/—and type this command:

        ```

        ```

    -   In Windows, make sure that every file referenced in the <*shared repo*\>\\samples\\usersearch folder also appears in your <*project\_name*\>\\www folder. Resolve the symbolic links explicitly, as shown in the following script:

        ```

        ```


3.  Run the following command:

    ```

    ```

4.  Open the platforms/android/ project folder in Android Studio (for Android) or Xcode (for iOS) by following the onscreen instructions printed by forcehybrid.
5.  From the www folder, open UserSearch.html in your code editor and delete all its contents.

## Code Examples

```
forcehybrid create --platform=ios,android --apptype=hybrid_local 
    --appname=UserSearch --packagename=com.acme.usersearch 
    --organization="Acme Widgets, Inc." --outputdir=""
```

```
cp -RL <insert local path to SalesforceMobileSDK-Shared>/samples/UserSearch/* www/
```

```
cd <your project's root directory>
set SHARED_REPO=<insert local path to SalesforceMobileSDK-Shared>
copy %SHARED_REPO%\samples\usersearch\UserSearch.html www
copy %SHARED_REPO%\samples\usersearch\bootconfig.json www
copy %SHARED_REPO%\dependencies\ratchet\ratchet.css www
copy %SHARED_REPO%\samples\common\styles.css www
copy %SHARED_REPO%\test\MockCordova.js www
copy %SHARED_REPO%\samples\common\auth.js www
copy %SHARED_REPO%\dependencies\backbone\backbone-min.js www
copy %SHARED_REPO%\libs\cordova.force.js www
copy %SHARED_REPO%\dependencies\fastclick\fastclick.js www
copy %SHARED_REPO%\libs\force.js www
copy %SHARED_REPO%\libs\force+promise.js www
copy %SHARED_REPO%\dependencies\jquery\jquery.min.js www
copy %SHARED_REPO%\libs\mobilesync.js www
copy %SHARED_REPO%\samples\common\stackrouter.js www
copy %SHARED_REPO%\dependencies\underscore\underscore-min.js www
```

```
cordova prepare
```

## Related Topics

- iOS Preparation (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/install_ios.htm)
- Android Preparation (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/install_android.htm)
