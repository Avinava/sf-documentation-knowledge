---
title: "Preview Components in the Salesforce Mobile App"
domain: mobile-offline
topic: preview-components-in-the-salesforce-mobile-app
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:56.577Z
estimatedTokens: 1549
keywords: [Preview, Components, Salesforce, Mobile, App, verify, Lightning, web, devices, virtual, device, builds, possible, run, iOS]
---

# Preview Components in the Salesforce Mobile App

> To verify your Lightning web components in Salesforce on many devices, use virtual
    device builds of the Salesforce mobile app. These builds make it possible to run Salesforce on
    iOS simulators and Android emulators.

# Preview Components in the Salesforce Mobile App

To verify your Lightning web components in Salesforce on many devices, use virtual device builds of the Salesforce mobile app. These builds make it possible to run Salesforce on iOS simulators and Android emulators.

You can always inspect your components in Salesforce on physical mobile devices. However, if you’re testing a great variety of models, you could quickly deplete your hardware budget. To test more efficiently, run Salesforce virtual device builds on virtual representations of iOS and Android devices.

Virtual device builds come in packages that you can drop onto a running instance of an iOS simulator or an Android emulator. To obtain simulators and emulators, install each platform’s development environment: Xcode for iOS, and Android Studio for Android. You can run Salesforce on any supported simulator or emulator provided with these environments. We recommend running the latest version of iOS or Android on your virtual device builds.

Salesforce has tested the Salesforce Android version on Google and Samsung devices, and the iOS version on iPhones and iPads. For a list of tested devices, see [“Requirements for the Salesforce App” in Salesforce Help](https://help.salesforce.com/articleView?id=salesforce_app_requirements.htm&language=en_US "HTML (New Window)").

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=mobile_offline)

#### Tip

Salesforce mobile app isn’t the only Salesforce app that supports virtual device builds. For example, you can also use the following instructions with Salesforce Field Service.

## Install Xcode and Simulators

If you haven’t installed Xcode, see [Install Xcode](atlas.en-us.mobile_offline.meta/mobile_offline/mobile_extensions_setup_ios_xcode.htm#install_xcode). We recommend installing the latest version of Xcode.

After you’ve installed Xcode, verify your system environment. See [Verify Your iOS Setup](atlas.en-us.mobile_offline.meta/mobile_offline/mobile_extensions_setup_ios_xcode.htm#verify_ios_setup).

## Install Android Studio and Emulators

If you haven’t installed Android Studio and Android emulators, see [Install Android Studio](atlas.en-us.mobile_offline.meta/mobile_offline/mobile_extensions_setup_android_studio.htm#install_android_studio).

After you’ve installed Android Studio, verify your system environment. See [Verify Your Android Studio Setup](atlas.en-us.mobile_offline.meta/mobile_offline/mobile_extensions_setup_android_studio.htm#verify_android_setup).

## Download iOS and Android Mobile App Packages

To obtain virtual device builds, you download the mobile app package files that contain them. For iOS, the package is a ZIP file. For Android, it’s an APK file. The packages are publicly available, don’t require you to log in, and don’t automatically expire.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=mobile_offline)

#### Note

To download packages for other apps (like Salesforce Field Service), substitute the package download URL and the iOS app file name as specified in the other app’s documentation.

iOS

Package (ZIP) file download: [sfdc.co/salesforce-mobile-app-ios-simulator](https://sfdc.co/salesforce-mobile-app-ios-simulator "executable (New Window)")

Extracted file name: Chatter.app

Android

Package (APK) file download: [sfdc.co/salesforce-mobile-app-android-emulator](https://sfdc.co/salesforce-mobile-app-android-emulator "executable (New Window)")

## Install iOS and Android Virtual Device Builds

You can use Android builds on Mac and Windows operating systems. You can use iOS builds on Mac. Install the virtual device build on each simulator or emulator you intend to use.

iOS

1.  In Finder, unzip the downloaded package file to extract the app file.
2.  Drag the app file from Finder and drop it on a running iOS simulator instance.
3.  On the simulator, find the app’s icon and launch the app.

Android

1.  Drag the downloaded APK file from Mac Finder or Windows Explorer and drop it on a running Android emulator instance.
2.  On the emulator, find the app’s icon and launch the app.

## Install Your Component in a Salesforce Org

You can develop Lightning web components in a Salesforce CLI (SFDX) project. If you’re new to SFDX projects for Lightning Web Components, get started quickly with [this Trailhead project](https://trailhead.salesforce.com/content/learn/projects/quick-start-lightning-web-components "HTML (New Window)").

From VS Code, it’s easy to install your component in a scratch org.

1.  In VS Code, enter Command-Shift-P or Ctrl-Shift-P to launch the Command Palette.
2.  If you don’t have a scratch org:
    1.  In the input field, enter SFDX: Create a Default Scratch Org, then click the matching VS Code listing.
    2.  Follow the prompts.
    3.  In the input field, enter SFDX: Push Source to Default Scratch Org, then click the matching VS Code listing.
    4.  As always, watch Output in the console panel to verify that everything goes smoothly.

## Verify Your Components

1.  Log in to the org where your component is installed.
2.  Inspect and verify your component’s visibility and appearance in relation to other components.
3.  Inspect the Salesforce web view by attaching Safari (iOS) or Chrome (Android) developer tools to the virtual device.

See [Debug Your Components with Virtual Device Builds](atlas.en-us.mobile_offline.meta/mobile_offline/dx_debug_mobile_components.htm "To debug your components, connect your desktop browsers to the Salesforce mobile app running on your virtual devices. Then use Safari (iOS) or Chrome (Android) developer tools to view and interact with HTML markup, step through JavaScript code, and see console logging and error messages.") for detailed instructions.

#### See Also

-   [Salesforce Help: Salesforce Mobile App](https://help.salesforce.com/articleView?id=salesforce_app.htm&language=en_US "Salesforce Help: Salesforce Mobile App - HTML (New Window)")

-   [Trailhead: Salesforce Mobile App Customization](https://trailhead.salesforce.com/en/content/learn/modules/salesforce1_mobile_app "Trailhead: Salesforce Mobile App Customization - HTML (New Window)")

## Related Topics

- Install Xcode (atlas.en-us.mobile_offline.meta/mobile_offline/mobile_extensions_setup_ios_xcode.htm)
- Verify Your iOS Setup (atlas.en-us.mobile_offline.meta/mobile_offline/mobile_extensions_setup_ios_xcode.htm)
- Install Android Studio (atlas.en-us.mobile_offline.meta/mobile_offline/mobile_extensions_setup_android_studio.htm)
- Verify Your Android Studio Setup (atlas.en-us.mobile_offline.meta/mobile_offline/mobile_extensions_setup_android_studio.htm)
- Debug Your Components with Virtual Device Builds (atlas.en-us.mobile_offline.meta/mobile_offline/dx_debug_mobile_components.htm)
