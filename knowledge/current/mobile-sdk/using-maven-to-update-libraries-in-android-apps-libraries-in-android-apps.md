---
title: "Using Maven to Update  Libraries in Android Apps Libraries in Android
   Apps"
domain: mobile-sdk
topic: using-maven-to-update-libraries-in-android-apps-libraries-in-android-apps
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:29.699Z
estimatedTokens: 557
keywords: [Maven, Libraries, Android, Apps, Beginning, Mobile, SDK, 9.2.0, native, Central, consume, library, add, line, dependencies]
---

# Using Maven to Update  Libraries in Android Apps Libraries in Android
   Apps

> Beginning in Mobile SDK 9.2.0, native
  Android libraries are available at Maven Central. To consume a Mobile SDK library, you add a
  single line to the dependencies section of your app’s build.gradle file.

# Using Maven to Update Libraries in Android Apps Libraries in Android Apps

Beginning in Mobile SDK 9.2.0, native Android libraries are available at Maven Central. To consume a Mobile SDK library, you add a single line to the dependencies section of your app’s build.gradle file.

To import a library from [Maven Central](https://search.maven.org/search?q=SalesforceSDK) with Gradle, you add a implementation statement to the dependencies section of your project’s build.gradle file. To update a library with Gradle, you simply change its version number in the implementation statement to the updated version, and then resync your libraries.

## The Details

Here’s what a typical Gradle dependencies section looks like:

```

```

An implementation statement takes the form

```

```

For Mobile SDK libraries:

-   *groupID* is “com.salesforce.mobilesdk”
-   *artifactID* is “SalesforceSDK”, “SalesforceHybrid”, “SmartStore”, or “MobileSync”
-   *version* is “*x.x.x*” (for example, “9.2.0”)

The implementation statement imports not only the specified library, but also all its dependencies. As a result, you never have to explicitly compile SalesforceAnalytics, for example, because every other library depends on it. It also means that you can get everything you need with just one statement.

To import Mobile SDK 9.2.0 libraries, add one of the following lines:

-   For the SalesforceSDK library:

    ```

    ```

-   For the SmartStore library (also imports the SalesforceSDK library):

    ```

    ```

-   For the Mobile Sync library (also imports the SalesforceSDK and SmartStore libraries):

    ```

    ```

-   For the SalesforceHybrid library (imports the SalesforceSDK, SmartStore, Mobile Sync, and Apache Cordova libraries):

    ```

    ```

-   For the SalesforceReact library (imports the SalesforceSDK, SmartStore, and Mobile Sync libraries):

    ```

    ```


![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

-   Mobile SDK enforces a few coding requirements for proper initialization and configuration. To get started, see [Android Application Structure](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/android_application_structure.htm).

## Code Examples

```
dependencies { 
    classpath 'com.android.tools.build:gradle:7.0.2' 
}
```

```
implementation '<groupID>:<artifactID>:<version>'
```

```
implementation 'com.salesforce.mobilesdk:SalesforceSDK:9.2.0'
```

```
implementation 'com.salesforce.mobilesdk:SmartStore:9.2.0'
```

```
implementation 'com.salesforce.mobilesdk:MobileSync:9.2.0'
```

## Related Topics

- Android Application Structure (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/android_application_structure.htm)
