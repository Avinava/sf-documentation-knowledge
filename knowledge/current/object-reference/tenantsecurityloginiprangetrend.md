---
title: "TenantSecurityLoginIpRangeTrend"
domain: object-reference
topic: tenantsecurityloginiprangetrend
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.979Z
estimatedTokens: 1243
keywords: [TenantSecurityLoginIpRangeTrend, Stores, changes, login, ranges, Security, Center, API, version, 59.0, later, Calls, Special, Access, Rules]
---

# TenantSecurityLoginIpRangeTrend

> Stores details of changes related to login IP ranges in Security Center.
      This object is available in API version 59.0 and later.

# TenantSecurityLoginIpRangeTrend

Stores details of changes related to login IP ranges in Security Center. This object is available in API version 59.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

This object is available only for Security Center subscribers. This object is read-only.

## Fields

| Field | Details |
| --- | --- |
| Action | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe type of change made to the login IP range. Possible values are:ADDEDREMOVEDUPDATED |
| ActionBy | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe name of the person who made this change. |
| ActionDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when this change was made. |
| Description | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe description of the login IP range record. |
| DetailIdentifier | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe unique identifier for this detail record. |
| IpEndAddress | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe end IP address of the login IP range. For example, 10.0.0.0 – 10.255.255.255. |
| IpRangeIdentifier | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionUnique identifier of the IP range. |
| IpStartAddress | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe start IP address of the login IP range. For example, 10.0.0.0 – 10.255.255.255. |
| MetricIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the corresponding TenantSecurityMonitorMetric. |
| MetricsType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of metric for the data collected. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the metric for the data collected. |
| ProfileIdentifier | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe ID of the profile that is assigned to this login IP range. |
| ProfileName | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe name of the profile that is assigned to this login IP range. |
| Tenant | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe ID of the tenant (org) that this record is for. |
| TenantName | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe name of the tenant (org) that this record is for. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[TenantSecurityLoginIpRangeTrendChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[TenantSecurityLoginIpRangeTrendFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[TenantSecurityLoginIpRangeTrendHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[TenantSecurityLoginIpRangeTrendOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[TenantSecurityLoginIpRangeTrendShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- TenantSecurityLoginIpRangeTrendChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- TenantSecurityLoginIpRangeTrendFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- TenantSecurityLoginIpRangeTrendHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- TenantSecurityLoginIpRangeTrendOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- TenantSecurityLoginIpRangeTrendShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
