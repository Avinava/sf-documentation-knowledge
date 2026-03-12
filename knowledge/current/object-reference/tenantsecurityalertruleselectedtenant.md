---
title: "TenantSecurityAlertRuleSelectedTenant"
domain: object-reference
topic: tenantsecurityalertruleselectedtenant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.839Z
estimatedTokens: 832
keywords: [TenantSecurityAlertRuleSelectedTenant, Stores, Security, Center, alert, rule, tenants, subscribers, API, version, 55.0, later, Calls, Special, Access]
---

# TenantSecurityAlertRuleSelectedTenant

> Stores information about a Security Center alert rule for tenants.
		This object is available for Security Center subscribers in API version 55.0 and
		later.

# TenantSecurityAlertRuleSelectedTenant

Stores information about a Security Center alert rule for tenants. This object is available for Security Center subscribers in API version 55.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This object is read-only.

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the metric for the data collected. |
| NotificationRuleIdentifier | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the corresponding TenantSecurityNotificationRule. |
| Tenant | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe ID of the tenant (org) that this record is for. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[TenantSecurityAlertRuleSelectedTenantChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[TenantSecurityAlertRuleSelectedTenantFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[TenantSecurityAlertRuleSelectedTenantHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[TenantSecurityAlertRuleSelectedTenantOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[TenantSecurityAlertRuleSelectedTenantShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- TenantSecurityAlertRuleSelectedTenantChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- TenantSecurityAlertRuleSelectedTenantFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- TenantSecurityAlertRuleSelectedTenantHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- TenantSecurityAlertRuleSelectedTenantOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- TenantSecurityAlertRuleSelectedTenantShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
