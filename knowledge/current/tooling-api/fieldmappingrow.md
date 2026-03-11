---
title: "FieldMappingRow"
domain: tooling-api
topic: fieldmappingrow
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:37.969Z
keywords: [FieldMappingRow, Supported, SOAP, Calls, REST, HTTP, Methods, Fields]
---

# FieldMappingRow

# FieldMappingRow

Represents a field in a data service record that maps to a field in an object record in the org.

This object is available in API version 38.0 and later.

## Supported SOAP Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST HTTP Methods

GET

## Fields

| Field | Details |
| --- | --- |
| FieldMappingID | TypereferencePropertiesCreate, Filter, Group, SortDescriptionA foreign key reference to the parent FieldMapping for this FieldMappingRow. |
| FieldName | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe set of picklist values includes all the standard and custom object types in your org. |
| Operation | TypepicklistPropertiesCreate (reserved for future use), Defaulted on create (reserved for future use), Filter, Group, Nillable (reserved for future use), Restricted picklist (reserved for future use), Sort, Update (reserved for future use)DescriptionThe comparison operation that the data service applies when it compares the value of this FieldMappingRow to the mapped field in the object specified in SObjectType. The following values are supported.Autofill fills empty fields and keeps values of fields that already contain data.Overwrite fills empty fields and updates fields that already contain data. History tracking is required for fields set to Overwrite. |
| SobjectType | TypepicklistPropertiesCreateFilter, Group, Nillable, Restricted picklist, SortDescriptionThe standard or custom object in your org that contains the field mapped by this FieldMappingRow. The set of picklist values includes all the standard and custom object types in your org. However, if you specify an object that the data service doesn’t support, the API call returns an error. |