---
title: "TenantSecurityHealthCheckBaselineTrend"
domain: object-reference
topic: tenantsecurityhealthcheckbaselinetrend
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.940Z
estimatedTokens: 1305
keywords: [TenantSecurityHealthCheckBaselineTrend, Stores, metric, Health, Check, baseline, settings, detail, Security, Center, displays, scores, tenants, place, metrics]
---

# TenantSecurityHealthCheckBaselineTrend

> Stores metric details related to Health Check baseline settings. The Health Check
      detail page in Security Center displays scores and settings for all your tenants in one place.
      Use this object to get details about which metrics are collected and for which tenants, and
      changes made to the Health Check baseline. This object is available to Security Center
      subscribers in API version 54.0 and later.

# TenantSecurityHealthCheckBaselineTrend

Stores metric details related to Health Check baseline settings. The Health Check detail page in Security Center displays scores and settings for all your tenants in one place. Use this object to get details about which metrics are collected and for which tenants, and changes made to the Health Check baseline. This object is available to Security Center subscribers in API version 54.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This object is read-only.

## Fields

| Field | Details |
| --- | --- |
| Action | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe type of action. For example, added, updated, or removed. |
| ActionBy | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user or admin that made the change. |
| ActionDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time of the change. |
| ApiName | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the metric used by the API and managed packages. |
| BaselineDescription | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFor custom baselines, the name of the custom baseline file. |
| BaselineIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the baseline. |
| BaselineName | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the baseline. |
| DetailIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe ID of the individual detail record. This field is unique across all tenants. |
| IsDefault | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionWhether the baseline is default or custom. The default is false. |
| MetricIdentifier | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the type of metric collected. |
| MetricsType | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe type of data collected. For example, SecurityHealthCheckBaselineMetric. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the metric for the data collected. |
| Tenant | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe ID of the tenant that was scored by the Security Health Check. |
| TenantName | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the tenant that was scored by the Security Health Check. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, it’s available in the same API versions as this object. Otherwise, it’s available in the specified API version and later.

[TenantSecurityHealthCheckBaselineTrendChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[TenantSecurityHealthCheckBaselineTrendFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[TenantSecurityHealthCheckBaselineTrendHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[TenantSecurityHealthCheckBaselineTrendOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[TenantSecurityHealthCheckBaselineTrendShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- TenantSecurityHealthCheckBaselineTrendChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- TenantSecurityHealthCheckBaselineTrendFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- TenantSecurityHealthCheckBaselineTrendHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- TenantSecurityHealthCheckBaselineTrendOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- TenantSecurityHealthCheckBaselineTrendShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
