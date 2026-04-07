---
title: "Android Project Files"
domain: mobile-sdk
topic: android-project-files
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:29.618Z
estimatedTokens: 198
keywords: [Android, Project, Files, browse, native, app, window, Studio, library, projects]
---

# Android Project Files

> When you browse a native app in the Project window of Android Studio, you can find
      these library projects:

# Android Project Files

When you browse a native app in the Project window of Android Studio, you can find these library projects:

-   libs/SalesforceAnalytics—Analytics project. Reports non-sensitive data on Mobile SDK app usage to Salesforce.
-   libs/SalesforceSDK—Salesforce Mobile SDK project. Provides support for OAuth2 and REST API calls
-   libs/SmartStore—SmartStore project. Provides an offline storage solution
-   libs/MobileSync—Mobile Sync project. Implements offline data synchronization tools

Mobile SDK libraries reference each other in a dependency hierarchy, as shown in the following diagram.

![Mobile SDK for Android library dependency chain](/docs/resources/img/en-us/noversion?doc_id=dev_guides%2Fmobile_sdk%2Fimages%2FAndroidDependencies.png&folder=mobile_sdk)
