---
title: "TenantSecurityFeature"
domain: object-reference
topic: tenantsecurityfeature
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.922Z
estimatedTokens: 993
keywords: [TenantSecurityFeature, Stores, org, features, across, tenants, Security, Center, API, version, 57.0, later, Calls, Special, Access]
---

# TenantSecurityFeature

> Stores org features across all tenants in Security Center. This object
      is available in API version 57.0 and later.

# TenantSecurityFeature

Stores org features across all tenants in Security Center. This object is available in API version 57.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

This object is read-only.

## Fields

| Field | Details |
| --- | --- |
| DetailIdentifier | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe ID of the individual detail record. This field is unique across all tenants. |
| FeatureDescription | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe description of the feature. |
| FeatureName | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe name of the feature. |
| IsEnabled | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the feature is enabled or disabled.The default value is false. |
| MetricIdentifier | TypestringPropertiesFilter, Group, SortDescriptionThe ID of the type of metric counted. This field is unique within your organization. |
| MetricsType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of feature collected by this metric. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the feature for which data is being collected. |
| Tenant | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe ID of the tenant where the feature was applied. |
| TenantName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the connected tenant where the feature was enabled or disabled. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[TenantSecurityFeatureChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[TenantSecurityFeatureFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[TenantSecurityFeatureHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[TenantSecurityFeatureOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[TenantSecurityFeatureShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- TenantSecurityFeatureChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- TenantSecurityFeatureFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- TenantSecurityFeatureHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- TenantSecurityFeatureOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- TenantSecurityFeatureShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
