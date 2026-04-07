---
title: "Code Modifications (Android)"
domain: mobile-sdk
topic: code-modifications-android
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:27.110Z
estimatedTokens: 396
keywords: [Code, Modifications, Android, project, number, Google, authorized, send, push, notifications, device]
---

> This value is the project number of
                        the Google project that is authorized to send push notifications to an
                        Android device.

# Code Modifications (Android)

To configure your Mobile SDK app to support push notifications:

1.  Add an entry for androidPushNotificationClientId.

    -   In res/values/bootconfig.xml (for native apps):

        ```

        ```

    -   In assets/www/bootconfig.json (for hybrid apps):

        ```

        ```


    This value is the project number of the Google project that is authorized to send push notifications to an Android device.

    Behind the scenes, Mobile SDK automatically reads this value and uses it to register the device against the Salesforce connected app. This validation allows Salesforce to send notifications to the connected app. At logout, Mobile SDK also automatically unregisters the device for push notifications.

2.  Create a class in your app that implements PushNotificationInterface. PushNotificationInterface is a Mobile SDK Android interface for handling push notifications. PushNotificationInterface has a single method, onPushMessageReceived(Bundle message):

    ```

    ```

    In this method you implement your custom functionality for displaying, or otherwise disposing of, push notifications.

3.  In the onCreate() method of your Application subclass, call the SalesforceSDKManager.setPushNotificationReceiver() method, passing in your implementation of PushNotificationInterface. Call this method immediately after the SalesforceSDKManager.initNative() call. For example:

    ```

    ```


In Android apps, decryption of Notification Builder push notifications occurs automatically. Apex push notifications are not encrypted.

## Code Examples

```
<string name="androidPushNotificationClientId">33333344444</string>
```

```
"androidPushNotificationClientId": "33333344444"
```

```apex
public interface PushNotificationInterface {
    public void onPushMessageReceived(Bundle message);
}
```

```apex
@Override
public void onCreate() {
   super.onCreate();
   SalesforceSDKManager.initNative(getApplicationContext(), 
      new KeyImpl(), MainActivity.class);
   SalesforceSDKManager.getInstance().
      setPushNotificationReceiver(myPushNotificationInterface);
}
```
