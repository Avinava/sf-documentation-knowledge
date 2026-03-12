---
title: "RatingFrequencyPolicy"
domain: revenue-cloud
topic: ratingfrequencypolicy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:12.426Z
estimatedTokens: 813
keywords: [RatingFrequencyPolicy, policy, frequency, rating, triggered, ratable, summary, records, API, version, 62.0, later, Calls, Associated, Objects]
---

# RatingFrequencyPolicy

> Represents the policy that defines the frequency at which rating is
         triggered for the ratable summary records. This object is available in API version
      62.0 and later.

# RatingFrequencyPolicy

Represents the policy that defines the frequency at which rating is triggered for the ratable summary records. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp for when the current user last referred to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp for when the current user last viewed a record related to this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAuto-generated identifier for the rating frequency policy record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who created the record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the product for which the rating policy is defined.This field is a relationship field. This field is deprecated and will be retired in a future version.Relationship NameProductRefers ToProduct2 |
| RatingDelayDuration | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDuration of delay—in hours—post the billing period after which the rating is to be triggered. |
| RatingDelayDurationUnit | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the unit for the specified rating delay duration. Available in API version 65.0 and later.Valid values are:DaysHours |
| RatingPeriod | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionPeriod for which the usage of a product and usage resource combination are to be rated.Valid values are:DailyMonthly |
| UsageResourceId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the usage resource for which the rating policy is defined.This field is a relationship field. This field is deprecated and will be retired in a future version.Relationship NameUsageResourceRefers ToUsageResource |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[RatingFrequencyPolicyFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[RatingFrequencyPolicyHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[RatingFrequencyPolicyShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
