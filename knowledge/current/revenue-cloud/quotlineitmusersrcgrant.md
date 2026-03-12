---
title: "QuotLineItmUseRsrcGrant"
domain: revenue-cloud
topic: quotlineitmusersrcgrant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:11.395Z
estimatedTokens: 985
keywords: [QuotLineItmUseRsrcGrant, Represents, negotiated, grants, usage, resource, that's, associated, product, added, quote, line, item., API, version, 65.0, later., Important, Supported, Calls]
---

# QuotLineItmUseRsrcGrant

> Represents the negotiated grants for the usage resource that's
         associated with the usage product added in the quote line item. This object is
      available in API version 65.0 and later.

# QuotLineItmUseRsrcGrant

Represents the negotiated grants for the usage resource that's associated with the usage product added in the quote line item. This object is available in API version 65.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| GrantQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe granted or negotiated quantity of a usage resource associated with the usage product. |
| GrantType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of model that defines how the usage resource is consumed.Valid values are:CommitGrantThe default value is Grant. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when this record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe auto-generated identifier for the quote line item usage resource grant record. For example, QLIURG-00004 or QLIURG-4567. |
| ProductUsageGrantId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product usage grant associated with the quote line item.This field is a relationship field.Relationship NameProductUsageGrantRefers ToProductUsageGrant |
| QuoteLineItemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe quote line item associated with the usage product.This field is a relationship field.Relationship NameQuoteLineItemRelationship TypeMaster-detailRefers ToQuoteLineItem (the master object) |
| TokenResourceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe usage resource of category Token associated with the usage resource related to the usage product added in the order item.This field is a relationship field.Relationship NameTokenResourceRefers ToUsageResource |
| UsageGrantRefreshPolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe usage grant refresh policy associated with the usage resource related to the usage product added in the quote line item.This field is a relationship field.Relationship NameUsageGrantRefreshPolicyRefers ToUsageGrantRenewalPolicy |
| UsageGrantRolloverPolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe usage grant rollover policy associated with the usage resource related to the usage product added in the quote line item.This field is a relationship field.Relationship NameUsageGrantRolloverPolicyRefers ToUsageGrantRolloverPolicy |
| UsageResourceId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe usage resource associated with the usage product that's added as the quote line item.This field is a relationship field.Relationship NameUsageResourceRefers ToUsageResource |
| ValidityPeriodTerm | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe duration for which the usage resource grant is valid, when used with the validity period units. |
| ValidityPeriodUnit | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe length of a validity period for the usage resource grant, when used with the validity period term.Valid values are:MonthNoneYear |
