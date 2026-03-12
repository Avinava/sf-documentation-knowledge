---
title: "Testing Your External Client App Push Configuration"
domain: pushImplGuide
topic: testing-your-external-client-app-push-configuration
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:35.728Z
estimatedTokens: 732
keywords: [Testing, External, Client, App, Push, Configuration, run, quick, test, notification, setup, Send, Troubleshoot, round-trip, notifications]
---

# Testing Your External Client App Push Configuration

> To run a quick test of your push notification setup, use the Send Test Notification page.
        Troubleshoot round-trip push notifications in a synchronous mechanism without having to
        configure custom notification types, Apex calls, or REST calls. You can also gain insights
        into what’s going on behind the scenes in the asynchronous environment of real-world push
        notifications.

# Testing Your External Client App Push Configuration

To run a quick test of your push notification setup, use the Send Test Notification page. Troubleshoot round-trip push notifications in a synchronous mechanism without having to configure custom notification types, Apex calls, or REST calls. You can also gain insights into what’s going on behind the scenes in the asynchronous environment of real-world push notifications.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| External client apps can be created in: Group, Professional, Enterprise, Essentials, Performance, Unlimited, and Developer EditionsConnected Apps can be installed in: All Editions |


| User Permissions Needed |
| --- |
| To send a push notification from the Test Push Notifications page: | Author ApexANDCreate, edit, and delete External Client Apps |

## About the Send Test Notification Page

The Send Test Notification page uses information from your Apple Push Notification Service (APNS) or Firebase Cloud Messaging (FCM) for Android setup to configure a synchronous push mechanism. You select a device to receive the push notification by entering a connection token string. If you don’t know the token string, you can use the Search tool to select from the list of devices that are registered for your external client app. The Search tool automatically displays the five most recently registered devices. You can also enter a user’s name to search for devices that are registered to that user.

For Android FCM push notifications, you can select the Dry Run option to test your FCM setup. This option sends the notification to the FCM server but doesn’t forward it to a device.

You can use any JSON-formatted payload for a dry-run test. For example, you can start with something as simple as {"alert": "test"}.

Each push attempt returns a status message that indicates success or failure.

To reach the test page:

1.  In Setup, enter External Client App in the Quick Find box, then select **External Client App Manager**.
2.  Click **Edit Settings** in the action menu for your external client app.
3.  Click **Send test notification** next to Supported Push Platform. This link appears only if you’ve configured your external client app to support mobile push notifications.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=pushImplGuide)

#### Important

Successful test push notifications apply against the push notification daily limits for your organization.

-   **[Check a User's Mobile Push Registrations](atlas.en-us.pushImplGuide.meta/pushImplGuide/pns_check_user_device_registrations.htm)**
    From a User page in your organization, an administrator can easily check which of the user’s devices are currently registered for push notifications. Checking the registrations may help you troubleshoot push notification failures.

## Related Topics

- Check a User's Mobile Push Registrations (atlas.en-us.pushImplGuide.meta/pushImplGuide/pns_check_user_device_registrations.htm)
