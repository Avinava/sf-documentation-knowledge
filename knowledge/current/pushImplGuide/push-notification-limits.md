---
title: "Push Notification Limits"
domain: pushImplGuide
topic: push-notification-limits
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:35.705Z
estimatedTokens: 496
keywords: [Push, Notification, Limits, apply, test, notifications, well, production]
---

# Push Notification Limits

> Push notification limits apply to test push notifications as well as to production
    notifications.

# Push Notification Limits

Push notification limits apply to test push notifications as well as to production notifications.

An org can send up to 20,000 iOS and 10,000 Android push notifications per hour (for example, 4:00 to 4:59 UTC).Only *deliverable* notifications count toward this limit. For example, a notification is sent to 1,000 employees in your company, but 100 employees haven’t installed the mobile app yet. Only the notifications sent to the 900 employees who have installed the mobile app count toward this limit.Each test push notification that is generated through the Test Push Notification page is limited to a single recipient. Test push notifications count toward an org’s hourly push notification limit.When an org's hourly push notification limit is met, any additional notifications are still created for in-app display and retrieval via REST API.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pushImplGuide)

#### Note

-   For Flow Builder notification limits, see [https://help.salesforce.com/articleView?id=flow\_ref\_elements\_actions\_sendcustomnotification.htm](https://help.salesforce.com/articleView?id=flow_ref_elements_actions_sendcustomnotification.htm&language=en_US "HTML (New Window)")
-   The limits described here are for core Salesforce push notifications. They do not apply to Marketing Cloud MobilePush notifications. For further information on Marketing Cloud usage, see [developer.salesforce.com/docs/atlas.en-us.mc-sdks.meta/mc-sdks/mobile-push-sdk.htm](https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-sdks.meta/mc-sdks/mobile-push-sdk.htm "HTML (New Window)").

#### See Also

-   [Error Messages for Push Notifications](https://help.salesforce.com/apex/HTViewHelpDoc?id=connected_app_push_errors.htm&language=en_US "If you get an error message while sending a push notification from the Send Test Notification page, check the following table for suggestions on how to fix the error.")
