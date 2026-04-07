---
title: "Creating an iOS Swift Project Manually"
domain: mobile-sdk
topic: creating-an-ios-swift-project-manually
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:31.092Z
estimatedTokens: 794
keywords: [Creating, iOS, Swift, Project, Manually, prefer, forceios, CocoaPods, Mobile, SDK, apps, Xcode]
---

# Creating an iOS Swift Project Manually

> If you prefer not to use forceios or CocoaPods, you can create Mobile SDK apps manually in
    Xcode.

# Creating an iOS Swift Project Manually

If you prefer not to use forceios or CocoaPods, you can create Mobile SDK apps manually in Xcode.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=mobile_sdk)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

The following tutorial shows two ways to create a native iOS Swift project:

-   Borrowing source files from the Mobile SDK Swift template app
-   Using Swift Package Manager.

Instructions fall into four sections that must be performed in the sequence shown:

1.  [Create an Xcode Swift Project](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_new_native_manual_create_xcode_project.htm)
2.  [Add Mobile SDK Libraries to Your Project](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_new_native_manual_clone_sdk.htm)
3.  [Configure Your Project’s Build Settings](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_new_native_manual_configure_build.htm)
4.  Choose an option:
    -   [Option 1: Import Mobile SDK Template Files](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_new_native_manual_details.htm "In this option, you replace files from the Xcode Swift template with files from the Mobile SDK native Swift template—work that otherwise would be done by forceios. A few drags and drops, and the app is ready to connect to Salesforce and display org data.")
    -   [Option 2: Add Mobile SDK Setup Code Manually](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_new_native_no_template.htm "If you prefer the freedom of writing all your code from scratch, you can create a project without copying Mobile SDK template files into your workspace. You can—and should—consult the template code to pick up boilerplate implementations for certain features.")

All sections support Xcode 12.4 and Xcode 13.

-   **[Create an Xcode Swift Project](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_new_native_manual_create_xcode_project.htm)**

-   **[Add Mobile SDK Libraries to Your Project](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_new_native_manual_clone_sdk.htm)**

-   **[Configure Your Project’s Build Settings](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_new_native_manual_configure_build.htm)**

-   **[Option 1: Import Mobile SDK Template Files](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_new_native_manual_details.htm)**
    In this option, you replace files from the Xcode Swift template with files from the Mobile SDK native Swift template—work that otherwise would be done by forceios. A few drags and drops, and the app is ready to connect to Salesforce and display org data.
-   **[Option 2: Add Mobile SDK Setup Code Manually](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_new_native_no_template.htm)**
    If you prefer the freedom of writing all your code from scratch, you can create a project without copying Mobile SDK template files into your workspace. You can—and should—consult the template code to pick up boilerplate implementations for certain features.

## Related Topics

- Create an Xcode Swift Project (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_new_native_manual_create_xcode_project.htm)
- Add Mobile SDK Libraries to Your Project (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_new_native_manual_clone_sdk.htm)
- Configure Your Project’s Build Settings (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_new_native_manual_configure_build.htm)
- Option 1: Import Mobile SDK Template Files (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_new_native_manual_details.htm)
- Option 2: Add Mobile SDK Setup Code Manually (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_new_native_no_template.htm)
