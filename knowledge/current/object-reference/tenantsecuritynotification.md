---
title: "TenantSecurityNotification"
domain: object-reference
topic: tenantsecuritynotification
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:18.007Z
estimatedTokens: 1240
keywords: [TenantSecurityNotification, Stores, notifications, were, triggered, Security, Center, function, Alerts, feature, Changes, subscribers, API, version, 54.0]
---

# TenantSecurityNotification

> Stores information about notifications that were triggered in
         Security Center as a function of the Alerts feature. For more information, see Create Alerts for Security Changes. This
      object is available to Security Center subscribers in API version 54.0 and later.

# TenantSecurityNotification

Stores information about notifications that were triggered in Security Center as a function of the Alerts feature. For more information, see [Create Alerts for Security Changes](https://help.salesforce.com/s/articleView?id=xcloud.security_center_create_alerts.htm&type=5&language=en_US). This object is available to Security Center subscribers in API version 54.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This object is read-only.

## Fields

| Field | Details |
| --- | --- |
| MetricCount | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe metric count that triggered the notification. |
| MetricIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe ID of the type of metric that was counted. |
| MetricsType | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe metric for which the notification was sent. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the triggered notification rule. |
| NotificationDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time that the notification was sent. |
| NotificationType | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe type of notification sent. For example, a Chatter feed or push notification. |
| Operator | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe quantity of metrics used to measure. |
| RecipientEmails | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe email addresses of the recipients who receive security notifications. |
| RuleName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the notification rule. |
| Tenant | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe ID of the tenant for which the notification was triggered. |
| TenantName | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe org name of the tenant for which the notification was triggered. |
| Threshold | TypeintPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe threshold value that triggered the notification. |
| TriggerType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of trigger that set off the notification. For example, a security change was made. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, it’s available in the same API versions as this object. Otherwise, it’s available in the specified API version and later.

[TenantSecurityNotificationChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[TenantSecurityNotificationFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[TenantSecurityNotificationHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[TenantSecurityNotificationOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[TenantSecurityNotificationShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- TenantSecurityNotificationChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- TenantSecurityNotificationFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- TenantSecurityNotificationHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- TenantSecurityNotificationOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- TenantSecurityNotificationShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
