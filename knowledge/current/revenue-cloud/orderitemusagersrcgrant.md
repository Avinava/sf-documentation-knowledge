---
title: "OrderItemUsageRsrcGrant"
domain: revenue-cloud
topic: orderitemusagersrcgrant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:11.771Z
estimatedTokens: 899
keywords: [OrderItemUsageRsrcGrant, negotiated, grants, usage, resource, that's, associated, product, added, order, item, API, version, 65.0, later]
---

# OrderItemUsageRsrcGrant

> Represents the negotiated grants for the usage resource that's
         associated with the usage product added in the order item. This object is available in
      API version 65.0 and later.

# OrderItemUsageRsrcGrant

Represents the negotiated grants for the usage resource that's associated with the usage product added in the order item. This object is available in API version 65.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| GrantQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe granted or negotiated quantity of a usage resource associated with the usage product. |
| GrantType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of model that defines how the usage resource is consumed.Valid values are:CommitGrantThe default value is Grant. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe auto-generated identifier for the order item usage resource grant record. For example, OIURG-00004 or OIURG-4567. |
| OrderItemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe order item associated with the usage product.This field is a relationship field.Relationship NameOrderItemRelationship TypeMaster-detailRefers ToOrderItem (the master object) |
| ProductUsageGrantId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product usage grant associated with the order item.This field is a relationship field.Relationship NameProductUsageGrantRefers ToProductUsageGrant |
| TokenResourceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe usage resource of category Token associated with the usage resource related to the usage product added in the order item.This field is a relationship field.Relationship NameTokenResourceRefers ToUsageResource |
| UsageGrantRefreshPolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe usage grant refresh policy associated with the usage resource related to the usage product added in the order item.This field is a relationship field.Relationship NameUsageGrantRefreshPolicyRefers ToUsageGrantRenewalPolicy |
| UsageGrantRolloverPolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe usage grant rollover policy associated with the usage resource related to the usage product added in the order item.This field is a relationship field.Relationship NameUsageGrantRolloverPolicyRefers ToUsageGrantRolloverPolicy |
| UsageResourceId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe usage resource associated with the usage product that's added in the order item.This field is a relationship field.Relationship NameUsageResourceRefers ToUsageResource |
| ValidityPeriodTerm | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe duration for which the usage resource grant is valid, when used with the validity period units. |
| ValidityPeriodUnit | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe length of a validity period for the usage resource grant, when used with the validity period term.Valid values are:MonthNoneYear |
