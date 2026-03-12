---
title: "InsuranceProductClause"
domain: insurance-developer-guide
topic: insuranceproductclause
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:41.150Z
estimatedTokens: 671
keywords: [InsuranceProductClause, junction, product, insurance, clause, association, clauses, applicable, specific, products, Excluded, Driver, auto, motorcycle, home]
---

# InsuranceProductClause

> Represents a junction between a product and an insurance clause. This
         association defines the clauses applicable for the specific products. For example, an
         Excluded Driver clause applies to auto and motorcycle insurance products, but not to home
         insurance products.  This object is available in API version 65.0 and later.

# InsuranceProductClause

Represents a junction between a product and an insurance clause. This association defines the clauses applicable for the specific products. For example, an Excluded Driver clause applies to auto and motorcycle insurance products, but not to home insurance products. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApiName | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe API name of the insurance product clause. |
| EffectiveDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe insurance clause associated with the insurance product clause. |
| ExpirationDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date when the insurance clause becomes active. |
| InsuranceClauseId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThis field is a relationship field.Relationship NameInsuranceClauseRelationship TypeMaster-detailRefers ToInsuranceClause (the master object) |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate), but not viewed it. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, SortDescriptionThe name of the insurance product clause. |
| ProductPath | TypestringPropertiesCreate, Filter, Group, SortDescriptionThe path that contains the product IDs that roll up to the parent product. |
| ProductRelatedComponentId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe product-related component associated with the insurance product clause. This field is a relationship field.Relationship NameProductRelatedComponentRefers ToProductRelatedComponent |
| RootProductId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the parent (root) product that this product rolls up to. This field is a relationship field.Relationship NameRootProductRefers ToProduct2 |
| RuleKey | TypestringPropertiesCreate, Filter, Nillable, SortDescriptionThe key of the variable defined in CML (Constraint Modeling Language) that represents the constraint for the insurance product clause. |
