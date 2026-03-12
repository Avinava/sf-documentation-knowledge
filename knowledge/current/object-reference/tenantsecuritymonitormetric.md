---
title: "TenantSecurityMonitorMetric"
domain: object-reference
topic: tenantsecuritymonitormetric
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.998Z
estimatedTokens: 983
keywords: [TenantSecurityMonitorMetric, Stores, daily, count, change, metric, Security, Center, subscribers, API, version, 53.0, later, Calls, Special]
---

# TenantSecurityMonitorMetric

> Stores the daily count and daily count change for a metric within
         Security Center. This object is available to Security Center subscribers in API version
         53.0 and later.

# TenantSecurityMonitorMetric

Stores the daily count and daily count change for a metric within Security Center. This object is available to Security Center subscribers in API version 53.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

This object is read-only.

## Fields

| Field | Details |
| --- | --- |
| ChangeCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionHow much the relevant metric changed. |
| Count | TypeintPropertiesFilter, Group, SortDescriptionThe current metric count. |
| EndProcessTime | TypedateTimePropertiesFilter, SortDescriptionThe date and time that the metric count process ended. |
| MetricIdentifier | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe ID of the type of metric counted. This field is unique within your organization. |
| MetricsType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of data collected. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the tenant. |
| PreviousMetricIdentifier | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe previous ID of the type of metric that was counted. This field is unique within your organization. |
| StartProcessTime | TypedateTimePropertiesFilter, SortDescriptionThe date and time that the metric count process started. |
| Tenant | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe ID of the tenant that was scored. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, it’s available in the same API versions as this object. Otherwise, it’s available in the specified API version and later.

[TenantSecurityMonitorMetricChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[TenantSecurityMonitorMetricFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[TenantSecurityMonitorMetricHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[TenantSecurityMonitorMetricOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[TenantSecurityMonitorMetricShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- TenantSecurityMonitorMetricChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- TenantSecurityMonitorMetricFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- TenantSecurityMonitorMetricHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- TenantSecurityMonitorMetricOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- TenantSecurityMonitorMetricShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
