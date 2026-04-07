---
title: "Migrate All Apps from 9.0 to 9.1"
domain: mobile-sdk
topic: migrate-all-apps-from-90-to-91
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:26.597Z
estimatedTokens: 1981
keywords: [Migrate, Apps, 9.0, 9.1, Mobile, SDK, migration, easiest, Salesforce, CLI, plugin, npm, scripts]
---

> Mobile SDK 9.1
    migration is easiest if you use the Salesforce CLI plugin or the Mobile SDK npm
    scripts.

# Migrate All Apps from 9.0 to 9.1

Mobile SDK 9.1 migration is easiest if you use the Salesforce CLI plugin or the Mobile SDK npm scripts.

Before you begin upgrading, read about new 9.1 features in [What’s New in Mobile SDK 11.1](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/gs_whatsnew.htm).

Native iOS (Swift, Objective-C)

-   Make sure that you’ve installed the supported versions of iOS and Xcode. See [iOS Basic Requirements](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_requirements.htm), or use the [Set Up Your Mobile SDK Developer Tools](https://trailhead.salesforce.com/en/content/learn/projects/mobilesdk_setup_dev_tools "HTML (New Window)") Trailhead project.
-   Choose one of the following options.
    -   **Use the Salesforce CLI Mobile SDK plugin or the forceios npm script (recommended):** Recreate your app, and then migrate your app’s artifacts into the new template. For Saleforce CLI, follow the instructions at the command line by typing

        sf mobilesdk:ios:create help

        For forceios, follow the instructions in “Updating Native and React Native Apps” at [Updating Apps (5.0 and Later) Apps (5.0 and Later)](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/general_update_app.htm "Native and React native apps get an easier path to future Mobile SDK upgrades. Instead of creating an app and porting your app’s resources to it, you now update a simple configuration file and then run a script that regenerates your app with the new SDK libraries.").
    -   **Use CocoaPods:** If you created your app manually using CocoaPods, see [Refreshing Pods Pods](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_pods_refresh.htm "CocoaPods caches its pods in repos stored locally on your machine. If the pod repo gets out of sync with forceios, you can manually update it.").
    -   **Do it manually:** Manually create a new native template app in Swift, and then migrate your app’s artifacts into the new template. Follow the instructions in [Creating an iOS Swift Project Manually](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_new_native_project_manual.htm "If you prefer not to use forceios or CocoaPods, you can create Mobile SDK apps manually in Xcode.").

After you’ve recreated your app:

-   Migrate your app’s artifacts into the new template.
-   Review the list of APIs deprecated for future removal, and address any items that affect your codebase. See [iOS Current Deprecations](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/reference_current_deprecations_ios.htm "These lists show currently deprecated Mobile SDK objects and artifacts for iOS, as annotated in the source files. Use this information to prepare for the removal of these artifacts in the release indicated.").
-   After a successful build, check compiler warnings for deprecations or other Mobile SDK issues you’ve missed.
-   Consider adopting new features. See [What’s New in Mobile SDK 11.1](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/gs_whatsnew.htm).

Native Android (Java, Kotlin)

-   Make sure that you’ve installed the supported versions of Android SDK and Android Studio. See [Native Android Requirements](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/android_requirements.htm), or use the [Set Up Your Mobile SDK Developer Tools](https://trailhead.salesforce.com/en/content/learn/projects/mobilesdk_setup_dev_tools "HTML (New Window)") Trailhead project.
-   Choose one of the following options.
    -   **Use the Salesforce CLI Mobile SDK plugin or forcedroid npm script (recommended):** Recreate your app with the plugin or script, and then migrate your app’s artifacts into the new template. For Saleforce CLI, follow the instructions at the command line by typing

        sf mobilesdk:android:create help

        For forcedroid, follow the instructions in “Updating Native and React Native Apps” at [Updating Apps (5.0 and Later) Apps (5.0 and Later)](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/general_update_app.htm "Native and React native apps get an easier path to future Mobile SDK upgrades. Instead of creating an app and porting your app’s resources to it, you now update a simple configuration file and then run a script that regenerates your app with the new SDK libraries.").
    -   **Use Maven:** If you created your app manually using Maven, see [Using Maven to Update Libraries in Android Apps Libraries in Android Apps](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/android_update_maven.htm "Beginning in Mobile SDK 9.2.0, native Android libraries are available at Maven Central. To consume a Mobile SDK library, you add a single line to the dependencies section of your app’s build.gradle file.").

After you’ve recreated your app:

-   Migrate your app’s artifacts into the new template.
-   Review the list of APIs deprecated for future removal, and address any items that affect your codebase until your build succeeds. See [Android Current Deprecations](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/reference_current_deprecations_android.htm "These lists show currently deprecated Mobile SDK objects and artifacts for Android, as annotated in the source files. Use this information to prepare for the removal of these artifacts in the release indicated.").
-   After a successful build, check the compiler warnings for deprecations or other Mobile SDK issues you’ve missed.
-   Consider adopting new features. See [What’s New in Mobile SDK 11.1](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/gs_whatsnew.htm).

React Native

Mobile SDK 9.1 requires no code changes.

-   Migrate your app’s artifacts into the new template.
-   Recreate your app with the Salesforce CLI Mobile SDK plug-in or the forcereact npm script. For Saleforce CLI, follow the instructions at the command line by typing

    sf mobilesdk:reactnative:create help

    For forcereact, follow the instructions in “Updating Native and React Native Apps” at [Updating Apps (5.0 and Later) Apps (5.0 and Later)](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/general_update_app.htm "Native and React native apps get an easier path to future Mobile SDK upgrades. Instead of creating an app and porting your app’s resources to it, you now update a simple configuration file and then run a script that regenerates your app with the new SDK libraries.").
-   Make sure that you’ve installed the supported versions of the mobile platforms you’re targeting. See the [Set Up Your Mobile SDK Developer Tools](https://trailhead.salesforce.com/en/content/learn/projects/mobilesdk_setup_dev_tools "HTML (New Window)") Trailhead project.
-   Consider adopting new features. See [What’s New in Mobile SDK 11.1](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/gs_whatsnew.htm).

Hybrid

Mobile SDK 9.1 requires no code changes.

-   Migrate your app’s artifacts into the new template.
-   Make sure that you’ve installed the supported versions of the mobile platforms you’re targeting. See the [Set Up Your Mobile SDK Developer Tools](https://trailhead.salesforce.com/en/content/learn/projects/mobilesdk_setup_dev_tools "HTML (New Window)") Trailhead project.
-   Recreate your app with the Salesforce CLI Mobile SDK plug-in or the forcehybrid npm script. For Saleforce CLI, follow the instructions at the command line by typing

    sf mobilesdk:hybrid:create help

    For forcehybrid, follow the instructions in “Updating Hybrid Apps” at [Updating Apps (5.0 and Later) Apps (5.0 and Later)](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/general_update_app.htm "Native and React native apps get an easier path to future Mobile SDK upgrades. Instead of creating an app and porting your app’s resources to it, you now update a simple configuration file and then run a script that regenerates your app with the new SDK libraries.").

## See Also

-   [Set Up Salesforce DX](https://trailhead.salesforce.com/en/content/learn/modules/sfdx_app_dev/sfdx_app_dev_setup_dx)

## Related Topics

- What’s New in Mobile SDK 11.1 (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/gs_whatsnew.htm)
- iOS Basic Requirements (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_requirements.htm)
- Updating Apps (5.0 and Later) Apps (5.0 and Later) (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/general_update_app.htm)
- Refreshing Pods Pods (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_pods_refresh.htm)
- Creating an iOS Swift Project Manually (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_new_native_project_manual.htm)
- iOS Current Deprecations (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/reference_current_deprecations_ios.htm)
- Native Android Requirements (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/android_requirements.htm)
- Using Maven to Update Libraries in Android Apps Libraries in Android Apps (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/android_update_maven.htm)
- Android Current Deprecations (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/reference_current_deprecations_android.htm)
