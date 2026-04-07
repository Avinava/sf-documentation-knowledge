---
title: "Updating  Apps (5.0 and Later) Apps (5.0 and
   Later)"
domain: mobile-sdk
topic: updating-apps-50-and-later-apps-50-and-later
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:30.573Z
estimatedTokens: 1093
keywords: [Updating, Apps, 5.0, Later, Native, React, easier, path, future, Mobile, SDK, upgrades, Instead, creating, app]
---

# Updating  Apps (5.0 and Later) Apps (5.0 and
   Later)

> Native and React native apps get an easier path to future Mobile SDK upgrades. Instead
  of creating an app and porting your app’s resources to it, you now update a simple configuration
  file and then run a script that regenerates your app with the new SDK libraries.

# Updating Apps (5.0 and Later) Apps (5.0 and Later)

Native and React native apps get an easier path to future Mobile SDK upgrades. Instead of creating an app and porting your app’s resources to it, you now update a simple configuration file and then run a script that regenerates your app with the new SDK libraries.

## Updating Native and React Native Apps

Each native and React native app directory contains a package.json file at its root level. This JSON file contains a “dependencies” object that includes a list of name-value pairs describing Mobile SDK source paths. You can set these values to any local or network path that points to a valid copy of the platform’s Mobile SDK. After you’ve updated this file, perform the update by running:

-   install.js for Android native, iOS native, and native Swift apps
-   installandroid.js for React native apps on Android
-   installios.js for React native apps on iOS

You can find the appropriate file in your app’s root folder.

For example, here’s the dependencies section of a native Android package.json file:

```

```

This path points to the current release branch of the SalesforceMobileSDK-Android repo.

For iOS, it’s the same idea:

```

```

For React native, you can set targets for both iOS and Android, as well as React native versions:

```

```

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=mobile_sdk)

#### Important

Remember that your React native version must be paired with compatible Mobile SDK versions.

To point to the development branch of any Mobile SDK repo—that is, the branch where the upcoming release is being developed—append “#dev” to the URL. For example:

```

```

After you’ve changed the package.json file, don’t forget to run the Mobile SDK git installer script as shown in the example.

## Example

To upgrade an app to a different version of Mobile SDK for iOS:

1.  From your app directory, open package.json for editing.
2.  In the “sdkDependencies” section, change the value for “SalesforceMobileSDK-iOS” to point a different version of the SalesforceMobileSDK-iOS repo. You can point to the development branch or a different tag of the master branch (5.x or later).
3.  From the repo root directory, run the appropriate installer script for your app:
    -   For native apps: install.js
    -   For React Native apps: installios.js

The steps for Android are identical except for the iOS labels:

1.  From your app directory, open package.json for editing.
2.  In the “sdkDependencies” section, change the value for “SalesforceMobileSDK-Android” to point a different version of the SalesforceMobileSDK-Android repo. You can point to the development branch or a different tag of the master branch (5.x or later).
3.  From the repo root directory, run the appropriate installer script for your app:
    -   For native apps: install.js
    -   For React Native apps: installandroid.js

## Updating Hybrid Apps

For hybrid apps, Mobile SDK libraries are delivered through the Mobile SDK Cordova plug-in. However, with a major release, we recommend that you start with a new template app.

1.  Run: forcehybrid create
2.  Create the same type of hybrid project with the same name as your existing project, but in a different folder.
3.  When the script finishes, cd to your new project folder.
4.  Add any third-party Cordova plug-ins that your original app used. For example, if your app uses the Cordova status bar plug-in, type:

    ```

    ```

5.  Copy your web app resources—JavaScript, HTML5, and CSS files, and so on—from the original project into your new project’s www/ folder. For example, on Mac OS X:

    ```

    ```

6.  Run: cordova prepare

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

For details on required changes for specific releases, see [Migrating from the Previous Release](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/migration_migrating_from_previous.htm).

-   **[Using Maven to Update Libraries in Android Apps Libraries in Android Apps](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/android_update_maven.htm)**
    Beginning in Mobile SDK 9.2.0, native Android libraries are available at Maven Central. To consume a Mobile SDK library, you add a single line to the dependencies section of your app’s build.gradle file.

## Code Examples

```
"dependencies": {
    "salesforcemobilesdk-android": "https://github.com/forcedotcom/SalesforceMobileSDK-Android.git"
}
```

```
"dependencies": {
    "salesforcemobilesdk-ios": "https://github.com/forcedotcom/SalesforceMobileSDK-iOS.git"
}
```

```
"sdkDependencies": {
    "SalesforceMobileSDK-Android": "https://github.com/forcedotcom/SalesforceMobileSDK-Android.git",
    "SalesforceMobileSDK-iOS": "https://github.com/forcedotcom/SalesforceMobileSDK-iOS.git"
},
"dependencies": {
    "@react-native-community/masked-view": "^0.1.10",
    "@react-navigation/native": "^6.0.2",
    "@react-navigation/stack": "^6.0.7",
    "react": "17.0.2",
    "react-native-force": "git+https://github.com/forcedotcom/SalesforceMobileSDK-ReactNative.git",
    "react-native": "0.65.1",
    "react-native-gesture-handler": "^1.10.3",
    "react-native-safe-area-context": "^3.3.0",
    "react-native-screens": "^3.6.0",
    "create-react-class": "^15.7.0"
},
```

```
"dependencies": {
    "salesforcemobilesdk-android": "https://github.com/forcedotcom/SalesforceMobileSDK-Android.git#dev"
    "SalesforceMobileSDK-iOS": "https://github.com/forcedotcom/SalesforceMobileSDK-iOS.git#dev"
},
"dependencies": {
    "@react-native-community/masked-view": "^0.1.10",
    "@react-navigation/native": "^6.0.2",
    "@react-navigation/stack": "^6.0.7",
    "react": "17.0.2",
    "react-native-force": "git+https://github.com/forcedotcom/SalesforceMobileSDK-ReactNative.git#dev",
    "react-native": "0.65.1",
    ...
}
```

```
cordova plugin add cordova-plugin-statusbar
```

## Related Topics

- Migrating from the Previous Release (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/migration_migrating_from_previous.htm)
- Using Maven to Update Libraries in Android Apps Libraries in Android Apps (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/android_update_maven.htm)
