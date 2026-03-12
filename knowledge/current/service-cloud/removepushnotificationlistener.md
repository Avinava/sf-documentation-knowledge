---
title: "removePushNotificationListener()"
domain: service-cloud
topic: removepushnotificationlistener
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:58.350Z
estimatedTokens: 218
keywords: [removePushNotificationListener, Removes, listener, added, push, notification., only, API, version, 26.0, later., Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# removePushNotificationListener()

> Removes a listener that gets added for a
            push notification. This method is only available in
                API version 26.0 or later.

# removePushNotificationListener()

Removes a listener that gets added for a push notification. This method is only available in API version 26.0 or later.

For more information on push notifications, see [Methods for Push Notifications](atlas.en-us.api_console.meta/api_console/sforce_api_console_methods_push_notifications.htm).

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| callback | function | A function called when the removal of the push notification listener completes. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method.

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | true if removing the push notification listener was successful; false if removing the push notification listener wasn’t successful. |

## Code Examples

```
sforce.console.removePushNotificationListener((optional) callback:Function )
```

```
<apex:page standardController="Case">

     <A HREF="#" onClick="testRemovePushNotification();return false">
         Click here to remove push notification</A>

<apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">

        function testRemovePushNotification() {
            sforce.console.removePushNotificationListener(removeSuccess);
         }
        var removeSuccess = function removeSuccess(result) {
            //Report whether removing the push notification listener is successful
            if (result.success == true) {
                alert('Removing push notification was successful');
            } else {
                alert('Removing push notification wasn't successful');
            }
         };
    </script>
</apex:page>
```

## Related Topics

- Methods for Push Notifications (atlas.en-us.api_console.meta/api_console/sforce_api_console_methods_push_notifications.htm)
