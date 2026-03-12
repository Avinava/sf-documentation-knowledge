---
title: "TenantSecurityNotificationRule"
domain: object-reference
topic: tenantsecuritynotificationrule
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:18.014Z
estimatedTokens: 1209
keywords: [TenantSecurityNotificationRule, Stores, alert, configured, Security, Center, Alerts, feature, notify, recipients, changes, made, settings, subscribers, API]
---

# TenantSecurityNotificationRule

> Stores an alert configured in the Security Center Alerts feature to
         notify recipients of changes made to security settings. For more information, see Create Alerts for Security Changes. This object is
         available to Security Center subscribers in API version 53.0 and later.

# TenantSecurityNotificationRule

Stores an alert configured in the Security Center Alerts feature to notify recipients of changes made to security settings. For more information, see [Create Alerts for Security Changes](https://help.salesforce.com/s/articleView?id=xcloud.security_center_create_alerts.htm&type=5&language=en_US). This object is available to Security Center subscribers in API version 53.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This object is read/write.

## Fields

| Field | Details |
| --- | --- |
| MetricsType | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe type of data being collected. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the metric for which data is being collected. |
| NotificationRuleIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe ID of the alert that was triggered. This field is unique within your organization. |
| NotificationType | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe type of notification used for the alert. The options are:EmailIn-App |
| Operator | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe operator for the change that triggered the alert. For example, greater than. |
| RecipientEmails | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe email addresses for the recipients of the alert details. |
| RuleName | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the custom alert that triggered the notification. This field is unique within your organization. |
| Status | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe status of the alert setting. The options are:ActiveDraftInactive |
| Threshold | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe threshold value that triggered the alert. |
| TriggerType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of trigger used for the alert. The values are:AlwaysOn Change |
| Version | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe version number of the custom alert. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, it’s available in the same API versions as this object. Otherwise, it’s available in the specified API version and later.

[TenantSecurityNotificationRuleChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[TenantSecurityNotificationRuleFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[TenantSecurityNotificationRuleHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[TenantSecurityNotificationRuleOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[TenantSecurityNotificationRuleShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- TenantSecurityNotificationRuleChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- TenantSecurityNotificationRuleFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- TenantSecurityNotificationRuleHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- TenantSecurityNotificationRuleOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- TenantSecurityNotificationRuleShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
