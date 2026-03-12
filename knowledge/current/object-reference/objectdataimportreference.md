---
title: "ObjectDataImportReference"
domain: object-reference
topic: objectdataimportreference
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:13.340Z
estimatedTokens: 219
keywords: [ObjectDataImportReference, relationships, associated, objects, showing, source, data, imported, API, version, 57.0, later, Calls, Special, Access]
---

# ObjectDataImportReference

> Represents the relationships to the associated reference objects showing the
         source from which the data is imported. This object is available in API version 57.0
      and later.

# ObjectDataImportReference

Represents the relationships to the associated reference objects showing the source from which the data is imported. This object is available in API version 57.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

ObjectDataImportReference is read only and can only be queried.

## Fields

| Field | Details |
| --- | --- |
| ObjectDataImportId | TypereferencePropertiesFilter, Group, SortDescriptionForeign key to the ObjectDataImport object.This field is a relationship field.Relationship NameObjectDataImportRelationship TypeLookupRefers ToObjectDataImport |
| ObjectDataImportReferenceNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionForeign key to the reference object. For example, AsyncApiJob or DatasetImportRequest. |
