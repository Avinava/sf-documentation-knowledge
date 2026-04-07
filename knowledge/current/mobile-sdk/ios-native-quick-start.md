---
title: "iOS Native Quick Start"
domain: mobile-sdk
topic: ios-native-quick-start
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:31.119Z
estimatedTokens: 468
keywords: [iOS, Native, Quick, Start, help, setup, installation, check, Mobile, SDK, Developer, Tools, Trailhead]
---

# iOS Native Quick Start

> For help with setup and installation, check out Set Up
                Your Mobile SDK Developer Tools in Trailhead.

# iOS Native Quick Start

1.  Make sure you meet the [native iOS requirements](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_requirements.htm).
2.  Create a project in the style that you prefer:

    Wizard Style (Recommended)

    To create a project with forceios, CocoaPods, node.js, and npm:

    -   Install nodejs (includes npm)—[https://nodejs.org](https://nodejs.org "HTML (New Window)")
    -   Install CocoaPods, latest version—[https://www.cocoapods.org](https://www.cocoapods.org "HTML (New Window)").
    -   Using npm, install forceios. (npm is automatically installed with nodejs).

        ```

        ```

    -   In a Terminal window, use forceios to create an app.

        ```

        ```


    Semi-Manually

    To add Mobile SDK Swift template files, libraries, and settings to an Xcode template project without using forceios and its third-party dependencies, see [Creating an iOS Swift Project Manually](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_new_native_project_manual.htm "If you prefer not to use forceios or CocoaPods, you can create Mobile SDK apps manually in Xcode."), option 1.

    Fully Manually

    To manually recode an Xcode Swift template project as a Mobile SDK project, without using forceios and its third-party dependencies, see [Creating an iOS Swift Project Manually](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_new_native_project_manual.htm "If you prefer not to use forceios or CocoaPods, you can create Mobile SDK apps manually in Xcode."), option 2.


![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

For help with setup and installation, check out [Set Up Your Mobile SDK Developer Tools](https://trailhead.salesforce.com/content/learn/projects/mobilesdk_setup_dev_tools?trail_id=mobile_sdk_intro "HTML (New Window)") in Trailhead.

## Code Examples

```
sudo npm install -g forceios
```

```
forceios create
```

## Related Topics

- native iOS requirements (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_requirements.htm)
- Creating an iOS Swift Project Manually (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_new_native_project_manual.htm)
