---
title: "Install the Service SDK for Android"
domain: service-sdk-android
topic: install-the-service-sdk-for-android
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:32.602Z
estimatedTokens: 636
keywords: [Install, Service, SDK, Android, Gradle]
---

# Install the Service SDK for Android

> Install the Service SDK for Android using Gradle.

# Install the Service SDK for Android

Install the Service SDK for Android using Gradle.

Before running through these steps, be sure you’ve checked the [Requirements for the for Android for Android](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_sdk_prereqs.htm#android_sdk_prereq "The Salesforce org, SDK development, and mobile app requirements for using the Service Chat SDK.").

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_android)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

To get started with the Service SDK for Android:

1.  Install the SDK using [Gradle](https://gradle.org/).

    The Service SDK is hosted in a maven repository.

    | Feature | Dependency Name | Maven Repository URL |
    | --- | --- | --- |
    | All Features | com.salesforce.service:servicesdk:Service Chat SDK | https://s3.amazonaws.com/salesforcesos.com/android/maven/release |
    | Chat | com.salesforce.service:chat-ui:Service Chat SDK(if you're only using Chat Core, then use com.salesforce.service:chat-core:Service Chat SDK) | https://s3.amazonaws.com/salesforcesos.com/android/maven/release |

    To install **all** the Service SDK features, add the following maven repositories to your project's build.gradle file.

    ```

    ```

    ![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=service_sdk_android)

    #### Note

    Be sure to put the repositories list in the allprojects section.

    And add the following dependency to your module's build.gradle file.

    ```

    ```

2.  Declare permissions.

    You must declare the following permissions in your AndroidManifest.xml.

    ```

    ```


You can now start using the Service SDK for Android.

## Code Examples

```
allprojects {
  repositories {
    google()
    mavenCentral()
    maven {
      url 'https://s3.amazonaws.com/salesforcesos.com/android/maven/release'
    }
  }
}
```

```
dependencies {
  implementation 'com.salesforce.service:servicesdk:224.2.6'
}
```

```
<uses-permission android:name="android.permission.INTERNET"/>
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
```

## Related Topics

- Requirements for the for Android for Android (atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_sdk_prereqs.htm)
