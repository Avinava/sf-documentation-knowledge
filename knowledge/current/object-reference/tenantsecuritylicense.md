---
title: "TenantSecurityLicense"
domain: object-reference
topic: tenantsecuritylicense
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.963Z
estimatedTokens: 1097
keywords: [TenantSecurityLicense, Stores, license, usage, Security, Center, API, version, 59.0, later, Calls, Special, Access, Rules, Associated]
---

# TenantSecurityLicense

> Stores license usage information within Security Center. This object is
      available in API version 59.0 and later.

# TenantSecurityLicense

Stores license usage information within Security Center. This object is available in API version 59.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

This object is available only for Security Center subscribers. This object is read-only.

## Fields

| Field | Details |
| --- | --- |
| Action | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe type of change made to the license. Possible values are:ADDEDREMOVEDUPDATED |
| ActionDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when this change was made. |
| DetailIdentifier | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe unique identifier for this detail record. |
| ExpirationDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date on which this license expires. |
| MetricIdentifier | TypestringPropertiesFilter, Group, SortDescriptionThe ID of the corresponding TenantSecurityMonitorMetric. |
| MetricsType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of license collected by this metric. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the license. |
| Status | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe status of the license. |
| Tenant | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe ID of the tenant with this license. |
| TenantName | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe name of the tenant with this license. |
| TotalLicenses | TypeintPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe total number of licenses. |
| UsedLicenses | TypeintPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe number of used licenses. |
| UsedLicensesLastUpdated | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date that the used licenses were last updated for this tenant. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[TenantSecurityLicenseChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[TenantSecurityLicenseFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[TenantSecurityLicenseHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[TenantSecurityLicenseOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[TenantSecurityLicenseShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- TenantSecurityLicenseChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- TenantSecurityLicenseFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- TenantSecurityLicenseHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- TenantSecurityLicenseOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- TenantSecurityLicenseShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
