---
title: "TenantSecurityTrustedIpRangeTrend"
domain: object-reference
topic: tenantsecuritytrustediprangetrend
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:18.095Z
estimatedTokens: 1196
keywords: [TenantSecurityTrustedIpRangeTrend, Stores, changes, trusted, ranges, Security, Center.This, Center, subscribers, API, version, 54.0, later, Calls, Special]
---

# TenantSecurityTrustedIpRangeTrend

> Stores details of changes related to trusted IP ranges in Security
			Center.This object is available for Security Center subscribers in API version 54.0
		and later.

# TenantSecurityTrustedIpRangeTrend

Stores details of changes related to trusted IP ranges in Security Center.This object is available for Security Center subscribers in API version 54.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

This object is read-only.

## Fields

| Field | Details |
| --- | --- |
| Action | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionStores information on a change to the policy. Available options include:ADDEDREMOVEDUPDATED |
| ActionBy | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe name of the person who made this change. |
| ActionDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionWhen this change was made. |
| Description | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionA description of the trusted IP range. For example, "Trusting the IP addresses from NA-West region". |
| DetailIdentifier | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionUnique identifier for this detail record. |
| IpEndAddress | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe end IP address of a trusted IP range. For example, 10.0.0.0 – 10.255.255.255. |
| IpRangeIdentifier | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionUnique identifier of the IP range. |
| IpStartAddress | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe start IP address of a trusted IP range. For example, 10.0.0.0 – 10.255.255.255. |
| MetricIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the corresponding TenantSecurityMonitorMetric. |
| MetricsType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of metric for the data collected. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the metric for the data collected. |
| Tenant | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe ID of the tenant (org) that this record is for. |
| TenantName | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe name of the tenant (org) that this record is for. |
| UsageOptions | TypestringPropertiesFilter, Group, Nillable, SortDescriptionFor internal use only. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[TenantSecurityTrustedIpRangeTrendChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[TenantSecurityTrustedIpRangeTrendFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[TenantSecurityTrustedIpRangeTrendHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[TenantSecurityTrustedIpRangeTrendOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[TenantSecurityTrustedIpRangeTrendShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- TenantSecurityTrustedIpRangeTrendChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- TenantSecurityTrustedIpRangeTrendFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- TenantSecurityTrustedIpRangeTrendHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- TenantSecurityTrustedIpRangeTrendOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- TenantSecurityTrustedIpRangeTrendShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
