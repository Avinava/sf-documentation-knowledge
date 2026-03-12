---
title: "QuotLineItmUsageRsrcPlcy"
domain: revenue-cloud
topic: quotlineitmusagersrcplcy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:12.368Z
estimatedTokens: 918
keywords: [QuotLineItmUsageRsrcPlcy, policies, usage, resource, that's, associated, product, added, quote, line, item, API, version, 65.0, later]
---

# QuotLineItmUsageRsrcPlcy

> Represents the policies that are used for the usage resource that's
         associated with the usage product added in the quote line item. This object is
      available in API version 65.0 and later.

# QuotLineItmUsageRsrcPlcy

Represents the policies that are used for the usage resource that's associated with the usage product added in the quote line item. This object is available in API version 65.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DrawdownOrder | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the order that's used to debit consumption of entitlements related to the usage resource from the usage entitlement bucket.Valid values are:ExpiringFirstGrantedFirstGrantedLast |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when this record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe auto-generated identifier for the quote line item usage resource policy record. For example, QLIURP-00004 or QLIURP-4567. |
| ProductUsageResourcePolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product usage resource policy associated with the quote line item.This field is a relationship field.Relationship NameProductUsageResourcePolicyRefers ToProductUsageResourcePolicy |
| QuoteLineItemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe quote line item associated with the usage product.This field is a relationship field.Relationship NameQuoteLineItemRelationship TypeMaster-detailRefers ToQuoteLineItem (the master object) |
| RatingFrequencyPolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe rating frequency policy associated with the usage resource related to the usage product added in the quote line item.This field is a relationship field.Relationship NameRatingFrequencyPolicyRefers ToRatingFrequencyPolicy |
| UsageAggregationPolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe usage aggregation policy associated with the usage resource related to the usage product added in the quote line item.This field is a relationship field.Relationship NameUsageAggregationPolicyRefers ToUsageResourceBillingPolicy |
| UsageCommitmentPolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe usage commitment policy associated with the usage resource related to the usage product added in the quote line item.This field is a relationship field.Relationship NameUsageCommitmentPolicyRefers ToUsageCommitmentPolicy |
| UsageOveragePolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe usage overage policy associated with the quote line item.This field is a relationship field.Relationship NameUsageOveragePolicyRefers ToUsageOveragePolicy |
| UsageResourceId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe usage resource associated with the usage product that's added in the quote line item.This field is a relationship field.Relationship NameUsageResourceRefers ToUsageResource |
