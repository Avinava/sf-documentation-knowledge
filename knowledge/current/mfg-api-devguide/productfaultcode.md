---
title: "ProductFaultCode"
domain: mfg-api-devguide
topic: productfaultcode
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.921Z
estimatedTokens: 411
keywords: [ProductFaultCode, relationship, product, family, fault, code, API, version, 58.0, later, Calls]
---

# ProductFaultCode

> Represents a relationship between a product or product family and the
         fault code. This object is available in API version 58.0 and later.

# ProductFaultCode

Represents a relationship between a product or product family and the fault code. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| FaultCodeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe fault code associated with the product or product family.This field is a relationship field.Relationship NameFaultCodeRelationship TypeLookupRefers ToCodeSet |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe auto-generated number for the name of the product fault code. |
| ProductFamily | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product family associated with the fault code.Possible value is:None |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the product associated with the fault code.This field is a relationship field.Relationship NameProductRefers ToProduct2 |
