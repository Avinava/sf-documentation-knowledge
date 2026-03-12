---
title: "UsageResourceBillingPolicy"
domain: revenue-cloud
topic: usageresourcebillingpolicy
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:12.741Z
estimatedTokens: 652
keywords: [UsageResourceBillingPolicy, how, usage, accumulated, rating, resource.This, API, version, 62.0, later, Calls, Associated, Objects]
---

# UsageResourceBillingPolicy

> Represents information about how the usage is accumulated before
         rating a usage resource.This object is available in API version 62.0 and
      later.

# UsageResourceBillingPolicy

Represents information about how the usage is accumulated before rating a usage resource.This object is available in API version 62.0 and later.

A usage resource billing policy object is used to configure the properties of usage resources related to how aggregation is performed on the usage records before rating. Usage resource billing policies are defined at the usage resource level and can be reused across multiple usage resources.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Code | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionA unique user-defined string for the usage resource billing policy. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when this record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the usage resource billing policy record. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the policy.Valid values are:ActiveDraftInactive |
| UsageAccumulationMethod | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, Update, Defaulted On CreateDescriptionThe method used to accumulate the usage.Valid values are:PeakSum |
| UsageAccumulationPeriod | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe duration for which the usage is accumulated.Valid values are:DailyMonthly |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[UsageResourceBillingPolicyFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[UsageResourceBillingPolicyHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
