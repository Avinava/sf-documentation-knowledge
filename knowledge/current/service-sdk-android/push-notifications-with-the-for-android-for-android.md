---
title: "Push Notifications with the  for Android for
      Android"
domain: service-sdk-android
topic: push-notifications-with-the-for-android-for-android
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:32.619Z
estimatedTokens: 1097
keywords: [Push, Notifications, Android, take, advantage, org, app, Apex, trigger, configure, Pass, relevant, notification, case, feed]
---

# Push Notifications with the  for Android for
      Android

> To take advantage of push notifications from your org to your app, set up an Apex
    trigger and configure your app for notifications. Pass relevant notification information, such
    as case feed activity, to the Service Chat SDK using your PushNotificationListener implementation.

# Push Notifications with the for Android for Android

To take advantage of push notifications from your org to your app, set up an Apex trigger and configure your app for notifications. Pass relevant notification information, such as case feed activity, to the Service Chat SDK using your PushNotificationListener implementation.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_android)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

The following activities can cause notifications:

-   Agent has connected
-   Agent sent a message
-   Agent requested a file transfer
-   Agent canceled a file transfer
-   Agent ended a session

To implement notifications, follow these steps:

1.  Set up authentication in your app. To learn more, see [Authentication with the for Android for Android](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_authentication.htm "The Service Chat SDK provides an authentication mechanism that allows your users to access user-specific information in Service Cloud. To authenticate, implement two interfaces and provide an access token to the SDK.").
2.  Add FCM (Firebase Cloud Messaging) to your app. To learn more, see Google's documentation, [Add Firebase to Your Android Project](https://firebase.google.com/docs/android/setup).

    ![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=service_sdk_android)

    #### Note

    Avoid any references to GCM (Google Cloud Messaging) in your build dependencies and your AndroidManifest.xml files. If you experience a NoClassDefError which claims that GcmReceiver is missing, it may be included in your final merged manifest by one of your dependencies, such as the Salesforce Mobile SDK. To resolve the error, add the following remove instruction to your AndroidManifest.xml: <receiver android:name="com.google.android.gms.gcm.GcmReceiver" tools:node="remove"/>.

3.  Add a connected-app dependency in your module's build.gradle file.

    Service Chat SDK

    ```

    ```

    ![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=service_sdk_android)

    #### Note

    The version of the connected-app is the same as the version of the Common module used by the Service Chat SDK.

4.  Create a connected app and an Apex trigger to send a notification from your org. Follow the instructions in the [Salesforce Mobile Push Notifications Implementation Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.pushImplGuide.meta/pushImplGuide/pns_overview.htm) for [Creating a Connected App](https://developer.salesforce.com/docs/atlas.en-us.260.0.pushImplGuide.meta/pushImplGuide/pns_create_connected_app_overview.htm).
5.  Implement [PushNotificationListener](https://forcedotcom.github.io/ServiceSDK-Android/releases/common/8.0.5/api/reference/com/salesforce/android/connectedapp/PushNotificationListener.html) and handle the push notification event in the [onPushNotificationReceived](https://forcedotcom.github.io/ServiceSDK-Android/releases/common/8.0.5/api/reference/com/salesforce/android/connectedapp/PushNotificationListener.html#onPushNotificationReceived\(android.os.Bundle\)) method.
6.  Configure using the Sender ID, [AuthTokenProvider](https://forcedotcom.github.io/ServiceSDK-Android/releases/common/8.0.5/api/reference/com/salesforce/android/service/common/http/AuthTokenProvider.html), and the site URL.

    Pass this object your push notification listener and then register your device for push notifications.

    In Java:

    ```

    ```

    In Kotlin:

    ```

    ```

## Code Examples

```
dependencies {
            
  // Add the connected-app dependency
  implementation "com.salesforce.service:connected-app:8.0.6"

  // ... your other dependencies go here too ...
}
```

```apex
// Create a connected app object
SalesforceConnectedApp connectedApp = 
  SalesforceConnectedApp.create(this, new ConnectedAppConfiguration.Builder()
    .gcmSenderId(uniqueProjectId)
    .salesforceInstanceURL(siteUrl)
    .authTokenProvider(authProvider)
    .build());

// Add the push notification listener
connectedApp.addPushNotificationListener(myPushNotificationListener);

// Register for push notifications
connectedApp.registerDeviceForPushNotifications().onError(new Async.ErrorHandler() {
  @Override public void handleError (Async<?> operation, @NonNull Throwable throwable) {
    // TO DO: Handle error
  }
});
```

```
// Create a connected app object
val connectedApp = SalesforceConnectedApp.create(this, ConnectedAppConfiguration.Builder()
    .gcmSenderId(uniqueProjectId)
    .salesforceInstanceURL(siteUrl)
    .authTokenProvider(authProvider)
    .build())

// Add the push notification listener
connectedApp.addPushNotificationListener(myPushNotificationListener)

// Register for push notifications
connectedApp.registerDeviceForPushNotifications().onError(object: Async.ErrorHandler {
  override fun handleError(operation: Async<*>?, throwable: Throwable) {
    // TO DO: Handle error
  }
})
```

## Related Topics

- Authentication with the for Android for Android (atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_authentication.htm)
