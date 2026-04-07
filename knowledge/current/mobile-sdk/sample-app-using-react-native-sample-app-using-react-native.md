---
title: "Sample App Using React Native Sample App Using React Native"
domain: mobile-sdk
topic: sample-app-using-react-native-sample-app-using-react-native
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:27.209Z
estimatedTokens: 545
keywords: [Sample, App, React, Native, best, way, up-to-speed, Mobile, SDK, study, code]
---

> The best way to get up-to-speed on React Native in Mobile SDK is to study the sample
  code.

# Sample App Using React Native Sample App Using React Native

The best way to get up-to-speed on React Native in Mobile SDK is to study the sample code.

Mobile SDK provides four implementations of the MobileSyncExplorer application, including a React Native version. To use MobileSyncExplorerReactNative, follow the instructions in the [MobileSyncExplorerReactNative README.md](https://github.com/forcedotcom/SalesforceMobileSDK-Templates/tree/v9.0.0/MobileSyncExplorerReactNative/README.md "HTML (New Window)") file.

Here are a few notes about the MobileSyncExplorerReactNative files.

| Path | Description |
| --- | --- |
| README.md | Instructions to get started |
| installandroid.js | Use this script to install the Android sample. See README.md for details. |
| installios.js | Use this script to install the iOS sample. See README.md for details. |
| ios | The iOS application |
| android | The Android application |
| js | The JavaScript source files for the application |
| index.js | App start page |

| File | Component | Description |
| --- | --- | --- |
| js/events.js |  | Event model |
| js/App.js | MobileSyncExplorerReactNative | Root component (the entire application) (iOS and Android) |
| js/SearchScreen.js | SearchScreen | Search screen (iOS and Android) |
| jsContactScreen.js | ContactScreen | Used for viewing and editing a single contact (iOS and Android) |
| js/ContactCell.js | ContactCell | A single row in the list of results in the search screen (iOS and Android) |
| js/ContactBadge.js | ContactBadge | Colored circle with initials used in the search results screen (iOS and Android) |
| js/Field.js | Field | A field name and value used in the contact screen (iOS and Android) |
| js/StoreMgr.js | StoreMgr | Interacts with SmartStore and the server (via Mobile Sync). |
| js/NavImgButton.js | NavImgButton | Navigation Bar button |

| File | Description |
| --- | --- |
| android/ | Android native project |
| ios/ | iOS native project |

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

Most components are shared between iOS and Android. However, some components are platform-specific.
