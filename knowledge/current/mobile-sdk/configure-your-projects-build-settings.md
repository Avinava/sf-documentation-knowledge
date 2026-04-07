---
title: "Configure Your Project’s Build Settings"
domain: mobile-sdk
topic: configure-your-projects-build-settings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:31.045Z
estimatedTokens: 1097
keywords: [Configure, Project’s, Build, Settings, possible, changed, noninclusive, terms, align, company, Equality, maintained, certain, avoid, any]
---

# Configure Your Project’s Build Settings

> Where possible, we changed noninclusive terms to align with our company
      value of Equality. We maintained certain terms to avoid any effect on customer
      implementations.

# Configure Your Project’s Build Settings

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=mobile_sdk)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Prerequisites

1.  [Create an Xcode Swift Project](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_new_native_manual_create_xcode_project.htm)
2.  [Add Mobile SDK Libraries to Your Project](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_new_native_manual_clone_sdk.htm)

## Customize Your Project’s Build Configuration

1.  In Project Navigator, select the top-level project.
2.  In the Project Editor, select **Build Phases**.
3.  Under **Dependencies**, click **Add Items** (**+**).
4.  Use Command+Click to multi-select the gold briefcase icons for all five Mobile SDK libraries, then click **Add**.

    When you’ve finished, you see the following:

    ![Build Phases showing Mobile SDK libraries as target dependencies](/docs/resources/img/en-us/noversion?doc_id=dev_guides%2Fmobile_sdk%2Fimages%2Ftarget-dependencies.png&folder=mobile_sdk)

5.  In the Project Editor, select **General**.
6.  Scroll to **Frameworks, Binaries, and Embedded Content**.
7.  Click **Add items** (**+**) and add the following frameworks:

    -   SalesforceSDKCommon.framework
    -   SalesforceAnalytics.framework
    -   SalesforceSDKCore.framework
    -   SmartStore.framework
    -   MobileSync.framework

    ![List of Mobile SDK frameworks under Embedded Binaries](/docs/resources/img/en-us/noversion?doc_id=dev_guides%2Fmobile_sdk%2Fimages%2Fxcode-embedded-items.png&folder=mobile_sdk)

    ![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=mobile_sdk)

    #### Important

    Be sure to add each framework only once. If you accidentally add duplicates, select the extraneous ones and click **Remove items** (**\-**).

8.  Run a test build.

    ![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

    #### Note

    -   The result of this build isn’t a functional Mobile SDK app. You’re only checking to see if the libraries built properly. When the app runs, you still see just a blank white screen that says “Hello, world!”
    -   If you get a warning about a missing image file:
        1.  In Terminal, navigate to <*your selected local path*\>/MyMobileSDKApp/SalesforceMobileSDK-iOS/
        2.  Run ./install.sh

9.  In Xcode, click **Stop**.

At this point, Mobile SDK is available in your app, but your app can’t yet use it. Using Mobile SDK requires coding to initialize the SDK and integrate its services into your app’s sessions. To finish setting up Mobile SDK, you have a choice of two options:

[Option 1: Import Mobile SDK Template Files](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_new_native_manual_details.htm "In this option, you replace files from the Xcode Swift template with files from the Mobile SDK native Swift template—work that otherwise would be done by forceios. A few drags and drops, and the app is ready to connect to Salesforce and display org data.")

This option is the quicker, easier route. In your project you remove certain Xcode template files and add files from the [iOS native Swift template](https://github.com/forcedotcom/SalesforceMobileSDK-Templates/tree/master/iOSNativeSwiftTemplate). Voilà! Your app is ready to use Mobile SDK.

[Option 2: Add Mobile SDK Setup Code Manually](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_new_native_no_template.htm "If you prefer the freedom of writing all your code from scratch, you can create a project without copying Mobile SDK template files into your workspace. You can—and should—consult the template code to pick up boilerplate implementations for certain features.")

This hands-on coding option gives you a front-row seat to the code changes required for Mobile SDK integration. Along the way, you also might discover some useful customization opportunities. This option doesn’t ask you to import template files into your project. However, you’ll still benefit from copying a few boilerplate functions found in the [iOS native Swift template](https://github.com/forcedotcom/SalesforceMobileSDK-Templates/tree/master/iOSNativeSwiftTemplate).

## Related Topics

- Create an Xcode Swift Project (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_new_native_manual_create_xcode_project.htm)
- Add Mobile SDK Libraries to Your Project (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_new_native_manual_clone_sdk.htm)
- Option 1: Import Mobile SDK Template Files (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_new_native_manual_details.htm)
- Option 2: Add Mobile SDK Setup Code Manually (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_new_native_no_template.htm)
