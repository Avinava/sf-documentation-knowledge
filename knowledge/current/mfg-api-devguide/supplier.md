---
title: "Supplier"
domain: mfg-api-devguide
topic: supplier
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:56.293Z
estimatedTokens: 307
keywords: [Supplier, manufacturer, procures, product, parts, components, API, version, 59.0, later, Calls]
---

# Supplier

> Represents information about a supplier that a manufacturer procures product
         parts and components from. This object is available in API version 59.0 and later.

# Supplier

Represents information about a supplier that a manufacturer procures product parts and components from. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe account of the supplier.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDescription of the supplier. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the supplier. |
