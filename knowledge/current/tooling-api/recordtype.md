---
title: "RecordType"
domain: tooling-api
topic: recordtype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:38.629Z
keywords: [RecordType, Supported, SOAP, Calls, REST, HTTP, Methods, Fields]
---

# RecordType

# RecordType

Represents a custom record type.

This object is available in API version 32.0 and later.

## Supported SOAP Calls

create(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Supported REST HTTP Methods

GET, PATCH, POST

## Fields

| Field | Details |
| --- | --- |
| BusinessProcessId | TypeIDPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of an associated BusinessProcess. |
| Description | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe record type description, limited to 255 characters. |
| EntityDefinitionId | TypestringPropertiesFilter, Group, SortDescriptionThe ID of the entity containing the record. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated metadata object in Metadata API.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this record is active (true) or not (false). Only active record types can be applied to records. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| Metadata | TypeRecordTypeMetadataPropertiesCreate, Nillable, UpdateDescriptionRecord metadata.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| Name | TypestringPropertiesNillableDescriptionThe record type name. |
| NamespacePrefix | TypestringPropertiesNillableDescriptionA unique string to distinguish this type from any others. |
| SobjectType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of standard object that this record type is derived from. |