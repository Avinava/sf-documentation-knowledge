---
title: "BindingObjUsageRsrcPlcy"
domain: revenue-cloud
topic: bindingobjusagersrcplcy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:09.885Z
estimatedTokens: 848
keywords: [BindingObjUsageRsrcPlcy, Represents, policies, used, usage, resource, that's, associated, asset, binding, object., API, version, 65.0, later., Supported, Calls, Fields]
---

# BindingObjUsageRsrcPlcy

> Represents the policies that are used for the usage resource that's
         associated with an asset or a binding object. This object is available in API version
      65.0 and later.

# BindingObjUsageRsrcPlcy

Represents the policies that are used for the usage resource that's associated with an asset or a binding object. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BindingObjectId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe object that's bounded with the quote line policy or order policy.This field is a polymorphic relationship field.Relationship NameBindingObjectRefers ToAccount, Asset, BindingObjectCustomExt, Contract |
| DrawdownOrder | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the order that's used to debit consumption of entitlements related to the usage resource from the usage entitlement bucket.Valid values are:ExpiringFirstGrantedFirstGrantedLast |
| EffectiveEndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time until when the policy remains effective. |
| EffectiveStartDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time when the policy becomes effective. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when this record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe auto-generated identifier for the quote line item usage resource policy record. For example, BOURP-000004. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the binding object usage resource policy.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| RatingFrequencyPolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe rating frequency policy associated with the usage resource.This field is a relationship field.Relationship NameRatingFrequencyPolicyRefers ToRatingFrequencyPolicy |
| UsageAggregationPolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe usage aggregation policy associated with the usage resource.This field is a relationship field.Relationship NameUsageAggregationPolicyRefers ToUsageResourceBillingPolicy |
| UsageCommitmentPolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe usage commitment policy associated with the usage resource.This field is a relationship field.Relationship NameUsageCommitmentPolicyRefers ToUsageCommitmentPolicy |
| UsageOveragePolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe usage overage policy associated with the usage resource.This field is a relationship field.Relationship NameUsageOveragePolicyRefers ToUsageOveragePolicy |
| UsageResourceId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe usage resource associated with the usage product.This field is a relationship field.Relationship NameUsageResourceRefers ToUsageResource |
