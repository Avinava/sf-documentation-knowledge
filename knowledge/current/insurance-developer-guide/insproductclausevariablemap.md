---
title: "InsProductClauseVariableMap"
domain: insurance-developer-guide
topic: insproductclausevariablemap
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:41.121Z
estimatedTokens: 513
keywords: [InsProductClauseVariableMap, mapping, token, defined, insurance, clause, product, attributes, populate, runtime, Free, Look, customer, cancel, policy]
---

# InsProductClauseVariableMap

> Represents the mapping between a token defined in an insurance clause and the
         product attributes that populate the token value at runtime. For example, a Free Look
         clause allows a customer to cancel a policy within a certain number of days. The number of
         days is a variable (or, token) that's populated using product-specific attributes. 
      This object is available in API version 65.0 and later.

# InsProductClauseVariableMap

Represents the mapping between a token defined in an insurance clause and the product attributes that populate the token value at runtime. For example, a Free Look clause allows a customer to cancel a policy within a certain number of days. The number of days is a variable (or, token) that's populated using product-specific attributes. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Attribute | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the context attribute that's mapped to the variable. |
| InsuranceProductClauseId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThis field is a relationship field.Relationship NameInsuranceProductClauseRelationship TypeMaster-detailRefers ToInsuranceProductClause (the master object) |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate), but not viewed it. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the insurance product clause mapping. |
| VariableDataType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of the variable used in the clause template. Possible values are:booleancurrencydatedatetimenumberpercentpicklistreferencestring |
| VariableName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the variable used in the clause template. |
