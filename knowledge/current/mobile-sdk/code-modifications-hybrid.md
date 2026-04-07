---
title: "Code Modifications (Hybrid)"
domain: mobile-sdk
topic: code-modifications-hybrid
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:31.900Z
estimatedTokens: 151
keywords: [Code, Modifications, Hybrid, project, number, Google, authorized, send, push, notifications, Android, device]
---

# Code Modifications (Hybrid)

> This value is the project number of
                        the Google project that is authorized to send push notifications to an
                        Android device.

# Code Modifications (Hybrid)

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
