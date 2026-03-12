---
title: "Enable Push Notifications in a Salesforce Mobile SDK Android App"
domain: pushImplGuide
topic: enable-push-notifications-in-a-salesforce-mobile-sdk-android-app
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:35.665Z
estimatedTokens: 423
keywords: [Enable, Push, Notifications, Salesforce, Mobile, SDK, Android, App, project, number, Google, authorized, send, devices]
---

# Enable Push Notifications in a Salesforce Mobile SDK Android App

> This example value represents the project number of the Google
project that is authorized to send push notifications to Android devices.

# Enable Push Notifications in a Salesforce Mobile SDK Android App

1.  Add an entry for androidPushNotificationClientId.

    1.  In res/values/bootconfig.xml (for native apps):

        ```

        ```

    2.  In assets/www/bootconfig.json (for hybrid apps):

        ```

        ```


    This example value represents the project number of the Google project that is authorized to send push notifications to Android devices.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pushImplGuide)

    #### Note

    Behind the scenes, Mobile SDK automatically reads this value and uses it to register the device against the Salesforce external client app. Each time the user re-opens the app, Mobile SDK automatically renews the registration. This validation allows Salesforce to send notifications to the external client app.

    A device becomes unregistered if:

    -   The app goes unused for an extended period of time

        OR

    -   The user logs out of the app


2.  Create a class in your app that implements PushNotificationInterface. PushNotificationInterface is a Mobile SDK Android interface for handling push notifications. PushNotificationInterface has a single method, onPushMessageReceived(Bundle message).

    ```

    ```

    In this method you implement your custom functionality for displaying, or otherwise disposing of, push notifications.

3.  In the onCreate() method of your Application subclass, call the SalesforceSDKManager.setPushNotificationReceiver() method, passing in your implementation of PushNotificationInterface. Call this method immediately after the SalesforceSDKManager.initNative() call.

    ```

    ```

## Code Examples

```
<string name="androidPushNotificationClientId">1234567890</string>
```

```
"androidPushNotificationClientId": "1234567890"
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
