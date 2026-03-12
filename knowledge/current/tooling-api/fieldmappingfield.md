---
title: "FieldMappingField"
domain: tooling-api
topic: fieldmappingfield
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:44.772Z
estimatedTokens: 323
keywords: [FieldMappingField, org, maps, data, service, SOAP, Calls, REST, HTTP]
---

# FieldMappingField

> Represents a field in an object in the org
            that maps to a field in a data service.

# FieldMappingField

Represents a field in an object in the org that maps to a field in a data service.

This object is available in API version 38.0 and later.

## Supported SOAP Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST HTTP Methods

GET

## Fields

| Field | Details |
| --- | --- |
| DataServiceField | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe display name of the field in the data service that maps to this FieldMappingField. |
| FieldMappingRowId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionForeign key for the object associated with this FieldMappingField object. |
| DataServiceObjectName | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionA data service object that contains the field represented by this FieldMappingField. The set of picklist values includes all the object types defined in the data service. However, if you specify a non-existent object, the API call returns an error. |
| Priority | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the priority that the data service uses when it updates the field, relative to other update rules that exist for the same field. |
