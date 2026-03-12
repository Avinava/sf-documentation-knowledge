---
title: "ExtlClntAppNotificationSettings"
domain: metadata-api
topic: extlclntappnotificationsettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:39.735Z
estimatedTokens: 770
keywords: [ExtlClntAppNotificationSettings, Represents, external, client, app’s, notification, subscriptions, mobile., Note, Parent, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, ExtlClntAppNotificationType]
---

# ExtlClntAppNotificationSettings

> Represents an external client app’s notification subscriptions for mobile.

# ExtlClntAppNotificationSettings

Represents an external client app’s notification subscriptions for mobile.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

The ExtlClntAppNotificationSettings metadata type is a pilot or beta service that is subject to the Beta Services Terms at [Agreements - Salesforce.com](https://www.salesforce.com/company/legal/agreements/ "HTML (New Window)") or a written Unified Pilot Agreement if executed by Customer, and applicable terms in the [Product Terms Directory](https://ptd.salesforce.com/ "HTML (New Window)"). Use of this pilot or beta service is at the Customer's sole discretion.

The ExtlClntAppNotificationSettings metadata type requires the OAuth plugin for External Client Apps. See [OAuth Plugin Enablement with Metadata API](https://help.salesforce.com/s/articleView?id=xcloud.meta_enable_oauth_plugin.htm&type=5&language=en_US) in Salesforce Help.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

ExtlClntAppNotificationSettings components have the suffix .ecaNotifications and are stored in the extlClntAppNotifSettings folder.

## Version

ExtlClntAppNotificationSettings components are available in API version 64.0 and later.

## Special Access Rules

There are no additional access requirements that are specific to this type.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| externalClientApplication | string | Required. The name of the associated external client app. |
| label | string | Label for the external client app’s notification settings configuration. |
| notificationTypes | ExtlClntAppNotificationType[] | A list of notification types the external client app is subscribed to. Only notifications of these types are returned to the associated external client app via API or sent as push notifications. |

## ExtlClntAppNotificationType

Represents a notification type that an external client app is subscribed to. Only custom notification types enabled for the mobile delivery channel are supported.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

You can use Notification Builder in Setup to configure a notification type for the mobile delivery channel. See [Manage Notification Delivery Settings](https://help.salesforce.com/s/articleView?id=platform.notif_builder_delivery_settings.htm&type=5&language=en_US) in Salesforce Help.

| Field Name | Field Type | Description |
| --- | --- | --- |
| notificationType | string | Required. The API name of the notification type. |
| pushByDefault | boolean | Required. Indicates whether the notification type is sent as a push notification on mobile devices.To send a notification type as a push notification, you must also configure the ExtlClntAppPushSettings metadata type. |

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
