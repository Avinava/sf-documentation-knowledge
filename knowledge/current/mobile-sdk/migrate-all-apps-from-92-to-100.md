---
title: "Migrate All Apps from 9.2 to 10.0"
domain: mobile-sdk
topic: migrate-all-apps-from-92-to-100
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:26.617Z
estimatedTokens: 1961
keywords: [Migrate, Apps, 9.2, 10.0, Mobile, SDK, migration, easiest, Salesforce, CLI, plugin, npm, scripts]
---

> Mobile SDK 10.0
    migration is easiest if you use the Salesforce CLI plugin or the Mobile SDK npm
    scripts.

# Migrate All Apps from 9.2 to 10.0

Mobile SDK 10.0 migration is easiest if you use the Salesforce CLI plugin or the Mobile SDK npm scripts.

Before you begin upgrading, read about new 10.0 features in [What’s New in Mobile SDK 11.1](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/gs_whatsnew.htm).

Native iOS (Swift, Objective-C)

-   Make sure that you’ve installed the supported versions of iOS and Xcode. See [iOS Basic Requirements](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_requirements.htm), or [Supported Versions of Tools and Components for](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/reference_current_versions.htm).
-   Choose one of the following options.
    -   **Use the Salesforce CLI Mobile SDK plugin or the forceios npm script (recommended):** Recreate your app, and then migrate your app’s artifacts into the new template. For Salesforce CLI, follow the instructions at the command line by typing

        sf mobilesdk:ios:create help

        For forceios, follow the instructions in “Updating Native and React Native Apps” at [Updating Apps (5.0 and Later) Apps (5.0 and Later)](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/general_update_app.htm "Native and React native apps get an easier path to future Mobile SDK upgrades. Instead of creating an app and porting your app’s resources to it, you now update a simple configuration file and then run a script that regenerates your app with the new SDK libraries.").
    -   **Use CocoaPods:** If you created your app manually using CocoaPods, see [Refreshing Pods Pods](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_pods_refresh.htm "CocoaPods caches its pods in repos stored locally on your machine. If the pod repo gets out of sync with forceios, you can manually update it.").
    -   **Do it manually:** Manually create a new native template app in Swift, and then migrate your app’s artifacts into the new template. Follow the instructions in [Creating an iOS Swift Project Manually](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_new_native_project_manual.htm "If you prefer not to use forceios or CocoaPods, you can create Mobile SDK apps manually in Xcode.").

After you’ve recreated your app:

-   Migrate your app’s artifacts into the new template.
-   Review the list of APIs removed in Mobile SDK 10.0, and address any items that affect your code base. See [iOS APIs Removed in Mobile SDK 11.0](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/reference_current_removed_ios.htm "These lists show Mobile SDK objects and artifacts for iOS that were removed in Mobile SDK 10.0.").
-   Review the list of APIs deprecated for future removal, and address any items that affect your code base. See [iOS Current Deprecations](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/reference_current_deprecations_ios.htm "These lists show currently deprecated Mobile SDK objects and artifacts for iOS, as annotated in the source files. Use this information to prepare for the removal of these artifacts in the release indicated.").
-   After a successful build, check compiler warnings for deprecations or other Mobile SDK issues you’ve missed.
-   Consider adopting new features. See [What’s New in Mobile SDK 11.1](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/gs_whatsnew.htm).

Native Android (Java, Kotlin)

-   Make sure that you’ve installed the supported versions of Android SDK and Android Studio. See [Native Android Requirements](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/android_requirements.htm), or [Supported Versions of Tools and Components for](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/reference_current_versions.htm).
-   Choose one of the following options.
    -   **Use the Salesforce CLI Mobile SDK plugin or forcedroid npm script (recommended):** Recreate your app with the plugin or script, and then migrate your app’s artifacts into the new template. For Salesforce CLI, follow the instructions at the command line by typing

        sf mobilesdk:android:create help

        For forcedroid, follow the instructions in “Updating Native and React Native Apps” at [Updating Apps (5.0 and Later) Apps (5.0 and Later)](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/general_update_app.htm "Native and React native apps get an easier path to future Mobile SDK upgrades. Instead of creating an app and porting your app’s resources to it, you now update a simple configuration file and then run a script that regenerates your app with the new SDK libraries.").
    -   **Use Maven:** If you created your app manually using Maven, see [Using Maven to Update Libraries in Android Apps Libraries in Android Apps](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/android_update_maven.htm "Beginning in Mobile SDK 9.2.0, native Android libraries are available at Maven Central. To consume a Mobile SDK library, you add a single line to the dependencies section of your app’s build.gradle file.").

After you’ve recreated your app:

-   Migrate your app’s artifacts into the new template.
-   Review the list of APIs removed in Mobile SDK 10.0, and address any items that affect your code base. See [Android APIs Removed in Mobile SDK 11.0](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/reference_current_removed_android.htm "These lists show Mobile SDK objects and artifacts for Android that were removed in Mobile SDK 10.0.").
-   Review the list of APIs deprecated for future removal, and address any items that affect your codebase until your build succeeds. See [Android Current Deprecations](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/reference_current_deprecations_android.htm "These lists show currently deprecated Mobile SDK objects and artifacts for Android, as annotated in the source files. Use this information to prepare for the removal of these artifacts in the release indicated.").
-   After a successful build, check the compiler warnings for deprecations or other Mobile SDK issues you’ve missed.
-   Consider adopting new features. See [What’s New in Mobile SDK 11.1](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/gs_whatsnew.htm).

React Native

Mobile SDK 10.0 requires no code changes.

-   Make sure that you’ve installed the supported versions of the mobile platforms you’re targeting. See [Supported Versions of Tools and Components for](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/reference_current_versions.htm).
-   Recreate your app with the Salesforce CLI Mobile SDK plug-in or the forcereact npm script. For Salesforce CLI, follow the instructions at the command line by typing

    sf mobilesdk:reactnative:create help

    For forcereact help, type

    forcereact

-   After you’ve recreated your app, migrate your app’s artifacts into the new template.

Hybrid

Mobile SDK 10.0 requires no code changes.

-   Make sure that you’ve installed the supported versions of the mobile platforms you’re targeting. See [Supported Versions of Tools and Components for](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/reference_current_versions.htm).
-   Recreate your app with the Salesforce CLI Mobile SDK plug-in or the forcehybrid npm script. For Salesforce CLI, follow the instructions at the command line by typing

    sf mobilesdk:hybrid:create help

    For forcehybrid, follow the instructions in “Updating Hybrid Apps” at [Updating Apps (5.0 and Later) Apps (5.0 and Later)](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/general_update_app.htm "Native and React native apps get an easier path to future Mobile SDK upgrades. Instead of creating an app and porting your app’s resources to it, you now update a simple configuration file and then run a script that regenerates your app with the new SDK libraries.").

## See Also

-   [Set Up Salesforce DX](https://trailhead.salesforce.com/en/content/learn/modules/sfdx_app_dev/sfdx_app_dev_setup_dx)

## Related Topics

- What’s New in Mobile SDK 11.1 (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/gs_whatsnew.htm)
- iOS Basic Requirements (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_requirements.htm)
- Supported Versions of Tools and Components for (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/reference_current_versions.htm)
- Updating Apps (5.0 and Later) Apps (5.0 and Later) (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/general_update_app.htm)
- Refreshing Pods Pods (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_pods_refresh.htm)
- Creating an iOS Swift Project Manually (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_new_native_project_manual.htm)
- iOS APIs Removed in Mobile SDK 11.0 (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/reference_current_removed_ios.htm)
- iOS Current Deprecations (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/reference_current_deprecations_ios.htm)
- Native Android Requirements (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/android_requirements.htm)
- Using Maven to Update Libraries in Android Apps Libraries in Android Apps (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/android_update_maven.htm)
