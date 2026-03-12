---
title: "Enable Push Notifications in a Salesforce Mobile SDK Hybrid App"
domain: pushImplGuide
topic: enable-push-notifications-in-a-salesforce-mobile-sdk-hybrid-app
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:35.669Z
estimatedTokens: 160
keywords: [Enable, Push, Notifications, Salesforce, Mobile, SDK, Hybrid, App, project, number, Google, authorized, send, Android, device]
---

# Enable Push Notifications in a Salesforce Mobile SDK Hybrid App

> This value is the project number of
                        the Google project that is authorized to send push notifications to an
                        Android device.

# Enable Push Notifications in a Salesforce Mobile SDK Hybrid App

1.  (Android only) If your target platform is Android:
    1.  Add an entry for androidPushNotificationClientId. In assets/www/bootconfig.json:

        ```

        ```

        This value is the project number of the Google project that is authorized to send push notifications to an Android device.

2.  In your callback for cordova.require("com.salesforce.plugin.oauth").getAuthCredentials(), add the following code:

    ```

    ```


## Example

This code demonstrates how you might handle messages. The server delivers the payload in message\["payload"\].

```

```

## Code Examples

```
"androidPushNotificationClientId": "33333344444"
```

```
cordova.require("com.salesforce.util.push").registerPushNotificationHandler(
    function(message) {
        // add code to handle notifications
    },
    function(error) {
        // add code to handle errors
    }
);
```

```
function(message) {
    var payload = message["payload"];
    if (message["foreground"]) {
        // Notification is received while the app is in 
        // the foreground
        // Do something appropriate with payload
    }
    if (!message["foreground"]) {
        // Notification was received while the app was in 
        // the background, and the notification was clicked, 
        // bringing the app to the foreground
        // Do something appropriate with payload
    }
}
```
