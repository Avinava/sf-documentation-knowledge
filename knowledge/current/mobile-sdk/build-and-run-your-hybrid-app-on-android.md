---
title: "Build and Run Your Hybrid App on Android"
domain: mobile-sdk
topic: build-and-run-your-hybrid-app-on-android
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:30.789Z
estimatedTokens: 296
keywords: [Build, Run, Hybrid, App, Android, you’ve, cordova, prepare, project]
---

# Build and Run Your Hybrid App on Android

> After you’ve run cordova prepare, build and run
                the project.

# Build and Run Your Hybrid App on Android

Before building, be sure that you’ve installed Android Studio, including Android SDK and at least one Android emulator. Refer to the Android requirements for Mobile SDK to make sure you install the correct versions of the Android components.

After you’ve run cordova prepare, build and run the project.

To run the app in Android Studio:

1.  Launch Android Studio.
2.  From the welcome screen, select **Import project (Eclipse ADT, Gradle, etc.)**. Or, if Android Studio is already running, select **File** | **New** | **Import Project**.
3.  Select <*your\_project\_dir*\>/platforms/android and click **OK**. If you’re prompted to use the Gradle wrapper, accept the prompt.
4.  After the build finishes, select the android target and click **Run ‘android’** from either the menu or the toolbar.
5.  Select a connected Android device or emulator.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=mobile_sdk)

#### Important

If Android Studio offers to update your Gradle wrapper version, accept the offer. After the process finishes, Android Studio automatically re-imports your project.
