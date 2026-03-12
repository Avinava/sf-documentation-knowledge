---
title: "ProductUsageResourcePolicy"
domain: revenue-cloud
topic: productusageresourcepolicy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:12.287Z
estimatedTokens: 903
keywords: [ProductUsageResourcePolicy, policies, applicable, usage, resource, it’s, associated, sellable, product, derived, parent, overridden, setting, modeling.This, API]
---

# ProductUsageResourcePolicy

> Represents the policies applicable to the usage resource when it’s
         associated with a sellable product. These policies are derived from the parent usage
         resource and can be overridden when setting up usage modeling.This object is available
      in API version 65 and later.

# ProductUsageResourcePolicy

Represents the policies applicable to the usage resource when it’s associated with a sellable product. These policies are derived from the parent usage resource and can be overridden when setting up usage modeling.This object is available in API version 65 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate and time when the current user last viewed or modified this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate and time when the current user last viewed or modified this record. |
| ProductSellingModelId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product selling model associated with this policy.This field is a relationship field.Relationship NameProductSellingModelRefers ToProductSellingModel |
| ProductUsageResourceId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe product usage resource associated with this policy.This field is a relationship field.Relationship NameProductUsageResourceRelationship TypeMaster-detailRefers ToProductUsageResource (the master object) |
| RatingFrequencyPolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe rating frequency policy associated with the usage resource.This field is a relationship field.Relationship NameRatingFrequencyPolicyRefers ToRatingFrequencyPolicy |
| UsageAggregationPolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe usage aggregation policy associated with the usage resource.This field is a relationship field.Relationship NameUsageAggregationPolicyRefers ToUsageResourceBillingPolicy |
| UsageCommitmentPolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe usage commitment policy associated with the usage resource.This field is a relationship field.Relationship NameUsageCommitmentPolicyRefers ToUsageCommitmentPolicy |
| UsageOveragePolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe usage overage policy associated with the usage resource.This field is a relationship field.Relationship NameUsageOveragePolicyRefers ToUsageOveragePolicy |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProductUsageResourcePolicyFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[ProductUsageResourcePolicyHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
