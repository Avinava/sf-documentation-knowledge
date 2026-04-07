---
title: "Hybrid Sample Apps"
domain: mobile-sdk
topic: hybrid-sample-apps
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:26.127Z
estimatedTokens: 773
keywords: [Hybrid, Sample, Apps, Salesforce, Mobile, SDK, platform-agnostic, SalesforceMobileSDK-Shared, GitHub, repository, Android, Wrappers, iOS, Source-only]
---

> Salesforce Mobile SDK provides the following platform-agnostic hybrid sample apps in
    the the SalesforceMobileSDK-Shared GitHub repository.

# Hybrid Sample Apps

Salesforce Mobile SDK provides hybrid samples that demonstrate how to use Mobile SDK features in JavaScript. We provide hybrid samples two ways:

-   As platform-specific apps with native wrappers. We provide these wrappers for a limited subset of our hybrid samples. You can access the iOS samples through the Mobile SDK workspace (SalesforceMobileSDK.xcodeproj) in the root directory of the SalesforceMobileSDK-iOS GitHub repository. Also, you can access the Android samples from the hybrid/SampleApps directory of the SalesforceMobileSDK-Android repository.
-   As platform-agnostic web apps including only the HTML5, JavaScript, CSS source code. These apps include all of our hybrid samples and provide the basis for the platform-specific hybrid apps. You can download these sample apps from the SalesforceMobileSDK-Shared GitHub repo and build them using the Cordova command line.

## Android Hybrid Sample Wrappers

-   **AccountEditor**: Demonstrates how to synchronize offline data using the mobilesync.js library.
-   **MobileSyncExplorerHybrid**: Demonstrates how to synchronize offline data using the Mobile Sync plugin.
-   **NoteSync**: Demonstrates how to use non-REST APIs to retrieve Salesforce Notes.

## iOS Hybrid Sample Wrappers

-   **AccountEditor**: Demonstrates how to synchronize offline data using the mobilesync.js library.
-   **MobileSyncExplorer**: Demonstrates how to synchronize offline data using the Mobile Sync plugin.
-   **NoteSync**: Demonstrates how to use non-REST APIs to retrieve Salesforce Notes.

## Source-only Hybrid Sample Apps

Salesforce Mobile SDK provides the following platform-agnostic hybrid sample apps in the the SalesforceMobileSDK-Shared GitHub repository.

-   **accounteditor**: Uses the Mobile Sync to access Salesforce data.
-   **contactexplorer**: Uses Cordova to retrieve local device contacts. It also uses the force.js toolkit to implement REST transactions with the Salesforce REST API. The app uses the OAuth2 support in Salesforce SDK to obtain OAuth credentials and then propagates those credentials to force.js by sending a javascript event.
-   **fileexplorer**: Demonstrates the Files API.
-   **mobilesyncexplorer**: Demonstrates using mobilesync.js, rather than the Mobile Sync plug-in, for offline synchronization.
-   **notesync**: Uses non-REST APIs to retrieve Salesforce Notes.
-   **simplesyncreact:**: Demonstrates a React Native app that uses the Mobile Sync plug-in.
-   **smartstoreexplorer**: Lets you explore SmartStore APIs.
-   **userandgroupsearch**: Lets you search for users in groups.
-   **userlist**: Lists users in an organization. This is the simplest hybrid sample app.
-   **usersearch**: Lets you search for users in an organization.
-   **vfconnector**: Wraps a Visualforce page in a native container. This example assumes that your org has a Visualforce page called BasicVFTest. The app first obtains OAuth login credentials using the Salesforce SDK OAuth2 support and then uses those credentials to set appropriate webview cookies for accessing Visualforce pages.
