---
title: "OrderItemUsageRsrcPlcy"
domain: revenue-cloud
topic: orderitemusagersrcplcy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:10.720Z
estimatedTokens: 854
keywords: [OrderItemUsageRsrcPlcy, Represents, policies, used, usage, resource, that's, associated, product, added, order, item., API, version, 65.0, later., Important, Supported, Calls, Fields]
---

# OrderItemUsageRsrcPlcy

> Represents the policies that are used for the usage resource that's
         associated with the usage product added in the order item. This object is available in
      API version 65.0 and later.

# OrderItemUsageRsrcPlcy

Represents the policies that are used for the usage resource that's associated with the usage product added in the order item. This object is available in API version 65.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DrawdownOrder | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the order that's used to debit consumption of entitlements related to the usage resource from the usage entitlement bucket.Valid values are:ExpiringFirstGrantedFirstGrantedLast |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-generated number assigned to the order item for usage product grant record. For example, OIURG-4567 |
| OrderItemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe order item associated with the usage product.This field is a relationship field.Relationship NameOrderItemRelationship TypeMaster-detailRefers ToOrderItem (the master object) |
| ProductUsageResourcePolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product usage resource policy associated with the usage resource related to the usage product added in the order item.This field is a relationship field.Relationship NameProductUsageResourcePolicyRefers ToProductUsageResourcePolicy |
| RatingFrequencyPolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe rating frequency policy associated with the usage resource related to the usage product added in the order item.This field is a relationship field.Relationship NameRatingFrequencyPolicyRefers ToRatingFrequencyPolicy |
| UsageAggregationPolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe usage aggregation policy associated with the usage resource related to the usage product added in the order item.This field is a relationship field.Relationship NameUsageAggregationPolicyRefers ToUsageResourceBillingPolicy |
| UsageCommitmentPolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe usage commitment policy associated with the usage resource related to the usage product added in the order item.This field is a relationship field.Relationship NameUsageCommitmentPolicyRefers ToUsageCommitmentPolicy |
| UsageOveragePolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe usage overage policy associated with the usage resource related to the usage product added in the order item.This field is a relationship field.Relationship NameUsageOveragePolicyRefers ToUsageOveragePolicy |
| UsageResourceId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe usage resource associated with the usage product that's added in the order item.This field is a relationship field.Relationship NameUsageResourceRefers ToUsageResource |
