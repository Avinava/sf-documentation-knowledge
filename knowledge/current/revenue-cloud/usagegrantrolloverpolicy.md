---
title: "UsageGrantRolloverPolicy"
domain: revenue-cloud
topic: usagegrantrolloverpolicy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:12.691Z
estimatedTokens: 618
keywords: [UsageGrantRolloverPolicy, policy, rollover, usage, grant.This, API, version, 62.0, later, Calls, Associated, Objects]
---

# UsageGrantRolloverPolicy

> Represents a policy about the rollover of a usage grant.This object is
      available in API version 62.0 and later.

# UsageGrantRolloverPolicy

Represents a policy about the rollover of a usage grant.This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Code | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionA unique user-defined string for the usage grant rollover policy. |
| IsRolloverAllowed | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the policy allows the rollover of the usage grant.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when this record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| MaximumRolloverCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum number of times that the usage grant can roll over. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the rollover policy record. |
| ShouldAllowRolloverExpiry | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the rollover for the associated usage grant is allowed to expire.The default value is false. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the rollover policy.Possible values are:ActiveDraftInactive |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[UsageGrantRolloverPolicyFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[UsageGrantRolloverPolicyHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
