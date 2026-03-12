---
title: "TenantUsageEntitlement"
domain: object-reference
topic: tenantusageentitlement
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:18.118Z
estimatedTokens: 1308
keywords: [TenantUsageEntitlement, data, structure, features, functionalities, Salesforce, org, access, API, version, 28.0, later, Calls, Associated, Objects]
---

# TenantUsageEntitlement

> Represents a data structure that contains information about the features or
   functionalities that a Salesforce org has access to. This object is available in API version
  28.0 and later.

# TenantUsageEntitlement

Represents a data structure that contains information about the features or functionalities that a Salesforce org has access to. This object is available in API version 28.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| AmountUsed | TypedoublePropertiesFilter, Nillable, SortDescriptionThe quantity of an entitlement that has been used. |
| CurrentAmountAllowed | TypedoublePropertiesFilter, SortDescriptionThe amount of an entitlement that a tenant is allowed to use. |
| EndDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe end date of the setting, based on license end dates that entitle the org to that setting. |
| Frequency | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionHow often the tenant's entitlement data is automatically reviewed to see how much of the entitlement has been used.Possible values are:DailyFortnightlyMonthlyOnceQuarterlyWeeklyYearly |
| HasRollover | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates that a certain amount of a customer's unused entitlements from a set time period can be added to the next set time period. This field is reserved for future use.The default value is false. |
| IsPersistentResource | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates that the data that will be saved and available for future use even after closing a session.The default value is false. |
| MasterLabel | TypestringPropertiesGroup, NillableDescriptionThe overarching name of an element in your organization. A MasterLabel is visible to customers. |
| OverageGrace | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of the Allowed Amount that a customer can use without incurring an additional charge. The default value is 100% (no overage grace). This field is reserved for future use. |
| ResourceGroupKey | TypestringPropertiesFilter, Group, SortDescriptionTracks resource usage across different segments for the same setting. For example, a Messages entitlement that tracks email messages and SMS messages separately could have one ResourceGroupKey of SMS and another ResourceGroupKey of Email. In most cases though, TenantUsageEntitlements are configured for the org and not by segment. |
| Setting | TypestringPropertiesFilter, Group, SortDescriptionA rule or attribute that can be used to configure the appearance or actions in an organization. |
| StartDate | TypedatePropertiesFilter, Group, SortDescriptionThis date is the earliest start date of any license contributing to the provisioning aggregation output. |
| UsageDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date an event occurred that deducted from the tenant's entitlement. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[TenantUsageEntitlementChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[TenantUsageEntitlementFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[TenantUsageEntitlementHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[TenantUsageEntitlementOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[TenantUsageEntitlementShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- TenantUsageEntitlementChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- TenantUsageEntitlementFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- TenantUsageEntitlementHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- TenantUsageEntitlementOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- TenantUsageEntitlementShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
