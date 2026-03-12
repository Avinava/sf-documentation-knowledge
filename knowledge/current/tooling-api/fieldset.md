---
title: "FieldSet"
domain: tooling-api
topic: fieldset
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:44.801Z
estimatedTokens: 272
keywords: [FieldSet, metadata, group, API, version, 33.0, later, SOAP, Calls, REST, HTTP]
---

# FieldSet

> Represents the metadata for a group of fields. Available
    from API version 33.0 or later.

# FieldSet

Represents the metadata for a group of fields. Available from API version 33.0 or later.

## Supported SOAP Calls

create(), query(), retrieve(), update(), upsert()

## Supported REST HTTP Methods

GET, HEAD

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe field set description. This can be useful to describe the reason for creating the set or its intended use. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe API name of the field set. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe set’s label. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace of the package of which the field set is a part. |
