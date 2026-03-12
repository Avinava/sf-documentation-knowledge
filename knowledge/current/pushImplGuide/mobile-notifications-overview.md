---
title: "Mobile Notifications Overview"
domain: pushImplGuide
topic: mobile-notifications-overview
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:35.712Z
estimatedTokens: 1939
keywords: [Mobile, Notifications, Lightning, Platform, allow, app, developers, notify, their, customers, business, events, occur, customers’, orgs]
---

# Mobile Notifications Overview

> Mobile notifications on Lightning Platform allow mobile app developers to  notify their
      customers when business events occur in customers’ orgs. Salesforce provides
      considerable flexibility for using mobile notifications. You can push notifications to devices
      or deliver them within

# Mobile Notifications Overview

Mobile notifications on Lightning Platform allow mobile app developers to notify their customers when business events occur in customers’ orgs. Salesforce provides considerable flexibility for using mobile notifications. You can push notifications to devices or deliver them within an app.

All notifications sent from Salesforce can support both Salesforce apps and custom apps. You can define custom types to fit your own business needs. However, an org can limit the types it allows and their routings.

Lightning Platform provides two server-side notification systems:

Notification Builder

Full-featured, UI-centric platform. Notification Builder is integrated with the core notifications framework that powers Chatter and other Salesforce apps. As a result, you can use familiar Salesforce tools for creating, scheduling, and sending notifications. For example, you can send invocable action notifications through Process Builder, Flow, or REST API. You can also retrieve past notifications for use in custom in-app notification displays. You can send notifications to both Salesforce apps and customer apps.

Apex

Legacy code-based platform for push notifications only. With Apex notifications, Apex triggers capture business events in the customer’s org. Apps can then send push notifications with either Apex or Connect REST APIs. Apex push does not retain notification payloads for subsequent use.

A few considerations guide your choice of platform.

-   If you have an existing Apex push implementation, the legacy platform remains fully supported.
-   Consider which notification features suit your business needs. Types include:

    Mobile push notifications

    Notifications sent in reaction to an event. For example, push notifications usually arrive on mobile devices while the customer isn’t looking at the app. Salesforce supports two types of push: Apex push—traditional “send, fire, and forget” mechanism—and Notification Builder push, which boasts a richer feature set. Notification Builder push notifications require you to subscribe your external client app to the custom notification types you plan to send.

    In-app notifications

    Notifications sent to customers while they’re using either the Salesforce mobile app, another Salesforce app, or any properly configured custom app. In Salesforce mobile app, customers receive these notifications in the Notification Bell. Other client apps can implement their own notification displays using Notification Builder APIs.

    Custom notification types

    Notifications that you create through Notification Builder in Setup to suit your unique business needs. You can then send notifications of those types through Process Builder, Flow Builder, or the invocable action API.

    Configurable delivery settings and preferences

    For custom notifications types, you can select delivery channels—desktop, mobile, or both. You can choose to subscribe your external client apps to custom notification types to have them returned by the API to your custom in-app notification tray. If preferred, you can also send your subscribed notifications as push notifications.

    Invocable action notifications

    You can send custom notifications as invocable actions using the customNotificationAction API.

    Scheduled notifications

    In Process Builder, you can schedule a notification to be sent when triggered by a record change, platform event, or process. In Flow Builder, you can schedule the customNotificationAction API to send custom notifications at predefined intervals.

-   Notification platforms support the following types and features:

    | Type or Feature | Apex Push | Notification Builder Platform |
    | --- | --- | --- |
    | Push notifications | Supported | Supported |
    | Subscriptions | Not supported | Supported |
    | Scheduled notifications | Not supported | Supported |
    | Invocable action notifications | Not supported | Supported |
    | In-app notifications | Not supported | Supported |
    | Retrievable payloads | Not supported | Supported |
    | Custom notification types | Not supported | Supported |
    | Encryption | Not supported | Supported |

-   Notification systems deliver payloads and the list of recipients to services operated by device OS vendors—Apple, Google—for delivery to customers’ mobile devices. Salesforce preserves sent Notification Builder notifications and provides APIs for retrieving them.

    To handle events that Apex triggers can’t catch—for example, from sources outside of Salesforce—Connect REST API provides an [alternative sending mechanism](atlas.en-us.pushImplGuide.meta/pushImplGuide/pns_using_chatter_rest_api.htm). You can use Connect REST API to send either Apex push or Notification Builder invocable actions.


All apps that intend to receive mobile notifications require:

A Salesforce external client app configuration on the Salesforce server

All Salesforce mobile notifications use the external client app framework. They support customer apps built in-house; Mobile SDK apps distributed through the App Store or Google Play' and partner or ISV apps installed through managed packages.

Registration with targeted mobile OS vendors—Apple and Google

You must register as a developer of apps that are designed to receive notifications. This registration is separate from the runtime registration that an app performs to receive notifications.

Minimal coding in client apps

Mobile SDK provides boilerplate implementations for app notification registration. You can choose whether to go further with features such as in-app notifications.

Server-side coding

Depending on the mechanism used, sending push notifications can require coding of Apex triggers or REST API calls.

This guide covers these configuration tasks, and also testing and sending notifications. To learn how to use Notification Builder functionality in Salesforce, see [Manager Your Notifications with Notification Builder](https://help.salesforce.com/articleView?id=notif_builder.htm&language=en_US "HTML (New Window)"). For notification types, see [Salesforce App Notification Types](https://help.salesforce.com/articleView?id=salesforce_app_enable_push_notifications.htm&language=en_US "HTML (New Window)").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pushImplGuide)

#### Note

These instructions do not apply to Marketing Cloud apps. To implement Marketing Cloud MobilePush notifications, see [MobilePush and Journey Builder for Apps SDKs](https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-sdks.meta/mc-sdks/mobile-push-sdk.htm "HTML (New Window)").

## See Also

-   [Create a Custom Notification Type](https://help.salesforce.com/articleView?id=notif_builder_custom_type.htm&language=en_US "HTML (New Window)")
-   [Send Custom Notifications](https://help.salesforce.com/articleView?id=notif_builder_custom.htm&language=en_US "HTML (New Window)")
-   [Send Custom Notifications with Notification Builder Platform](https://help.salesforce.com/articleView?id=connected_app_notifications_custom.htm&language=en_US "HTML (New Window)")
-   [Send a Custom Notification from a Process](https://help.salesforce.com/articleView?id=notif_builder_custom_process.htm&language=en_US "HTML (New Window)")
-   [Flow Core Action: Send Custom Notification](https://help.salesforce.com/articleView?id=flow_ref_elements_actions_sendcustomnotification.htm&language=en_US "HTML (New Window)")

-   **[Push Notification Registration and Flow](atlas.en-us.pushImplGuide.meta/pushImplGuide/pns_registration_process.htm)**
    To enable push notifications, you register with several different entities and configure the required settings.

## Related Topics

- alternative sending mechanism (atlas.en-us.pushImplGuide.meta/pushImplGuide/pns_using_chatter_rest_api.htm)
- Push Notification Registration and Flow (atlas.en-us.pushImplGuide.meta/pushImplGuide/pns_registration_process.htm)
