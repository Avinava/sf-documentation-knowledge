---
title: "UsageGrantRenewalPolicy"
domain: revenue-cloud
topic: usagegrantrenewalpolicy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:12.685Z
estimatedTokens: 647
keywords: [UsageGrantRenewalPolicy, policy, rollover, usage, grant, API, version, 62.0, later, Calls, Associated, Objects]
---

# UsageGrantRenewalPolicy

> Represents a policy about the rollover of a usage grant. This
      object is available in API version 62.0 and later.

# UsageGrantRenewalPolicy

Represents a policy about the rollover of a usage grant. This object is available in API version 62.0 and later.

A usage grant renewal policy is used if you want to never renew a usage grant or renew on a specific frequency.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Code | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionA unique user-defined string for the usage grant renewal policy. |
| IsRenewalAllowed | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the policy renewal is allowed (true) or not (false). If true, then the policy can be renewed.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when this record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the renewal policy record. |
| RenewalFrequency | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe frequency of the policy renewals, when used with the RenewalFrequencyUnit field. |
| RenewalFrequencyUnit | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe renewal duration for a policy.Valid values are:MonthQuarterYear |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the renewal policy.Valid values are:ActiveDraftInactive |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[UsageGrantRenewalPolicyFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[UsageGrantRenewalPolicyHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
