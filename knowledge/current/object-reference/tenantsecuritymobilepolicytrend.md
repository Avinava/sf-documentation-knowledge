---
title: "TenantSecurityMobilePolicyTrend"
domain: object-reference
topic: tenantsecuritymobilepolicytrend
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.993Z
estimatedTokens: 1347
keywords: [TenantSecurityMobilePolicyTrend, Stores, metrics, changes, mobile, security, policies, across, tenants, Center, subscribers, API, version, 54.0, later]
---

# TenantSecurityMobilePolicyTrend

> Stores metrics related to changes in mobile security policies across
         all tenants in Security Center. This object is available to Security Center
      subscribers in API version 54.0 and later.

# TenantSecurityMobilePolicyTrend

Stores metrics related to changes in mobile security policies across all tenants in Security Center. This object is available to Security Center subscribers in API version 54.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

This object can only be read and queried.

## Fields

| Field | Details |
| --- | --- |
| Action | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe change made to the mobile security policy. For example, a new policy was added, updated, or removed. |
| ActionBy | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe user who made the change. |
| ActionDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time of the mobile security policy change. |
| ConnectedApp | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe app that is associated with the mobile security policy. |
| DetailIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe ID of the individual detail record. This field is unique across all tenants. |
| EffectiveDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date a mobile security policy is enforced. |
| IsEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionA value indicating whether the mobile security policy is enabled. The default is false, which means policies are disabled. |
| MetricIdentifier | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe foreign key of the metric. |
| MetricsType | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe type of mobile security policy data collected. |
| MobilePlatform | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe mobile operating system of the mobile security policy. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the metric for which data is collected. |
| PolicyType | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe type of mobile security policy. For example, Block Calendar. |
| RuleValue | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe value of the security notification rule. |
| RuleValueType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of rule value. For example, boolean or text. |
| SeverityLevel | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe severity level of the security threat. For example, CRITICAL. |
| Tenant | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe ID of the tenant. |
| TenantName | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the tenant. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, it’s available in the same API versions as this object. Otherwise, it’s available in the specified API version and later.

[TenantSecurityPackageChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[TenantSecurityPackageFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[TenantSecurityPackageHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[TenantSecurityPackageOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[TenantSecurityPackageShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- TenantSecurityPackageChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- TenantSecurityPackageFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- TenantSecurityPackageHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- TenantSecurityPackageOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- TenantSecurityPackageShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
