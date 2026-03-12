---
title: "ProductLaborCode"
domain: mfg-api-devguide
topic: productlaborcode
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.983Z
estimatedTokens: 366
keywords: [ProductLaborCode, junction, labor, code, that's, applicable, product, family, standard, effort, API, version, 58.0, later, Calls]
---

# ProductLaborCode

> Represents a junction between the labor code that's applicable to a
         product or product family and the required standard effort. This object is available
      in API version 58.0 and later.

# ProductLaborCode

Represents a junction between the labor code that's applicable to a product or product family and the required standard effort. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LaborCodeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe labor code associated with the product or product family.This field is a relationship field.Relationship NameLaborCodeRelationship TypeLookupRefers ToCodeSet |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe auto-generated number for the name of the product labor code. |
| ProductFamily | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product family associated with the labor code.Possible value is:None |
