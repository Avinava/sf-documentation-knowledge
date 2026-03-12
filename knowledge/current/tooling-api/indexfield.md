---
title: "IndexField"
domain: tooling-api
topic: indexfield
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:45.036Z
estimatedTokens: 448
keywords: [IndexField, index, custom, big, Tooling, API, version, 41.0, later, SOAP, Calls, REST, HTTP, Limitations]
---

# IndexField

> Represents the fields in the index of a custom big
            object. Available in Tooling API version 41.0 and later.

# IndexField

Represents the fields in the index of a custom big object. Available in Tooling API version 41.0 and later.

## Supported SOAP Calls

query(), retrieve().

## Supported REST HTTP Methods

GET

## Limitations

[SOQL Limitations](atlas.en-us.api_tooling.meta/api_tooling/reference_objects_soql_limits.htm "Some Tooling API objects have SOQL limitations. These limitations apply to any Metadata Catalog query, which applies to all Custom Metadata Types and Metadata Catalog entities, not only the ones explicitly listed.")

[SOSL Limitations](atlas.en-us.api_tooling.meta/api_tooling/reference_objects_sosl_limits.htm "Two Tooling API objects, EntityDefinition and FieldDefinition, have some SOSL limitations. ExternalString and MetadataComponentDependency (Beta) don’t support SOSL searches.")

## Fields

| Field | Details |
| --- | --- |
| FieldId | TypereferencePropertiesFilter, Group, SortDescriptionID of the custom field definition. |
| Id | TypeIDPropertiesFilter, Group, SortDescriptionID of the custom index field. |
| IndexId | TypereferencePropertiesFilter, Group, SortDescriptionID of the custom index. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| Ordinal | TypeintPropertiesFilter, Group, SortDescriptionThe field’s position in the index. Used to determine the order of the fields in the index. |
| SortDirection | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe sort direction of the field in the index. Valid values are ASC for ascending order and DESC for descending order. |

## Related Topics

- SOQL Limitations (atlas.en-us.api_tooling.meta/api_tooling/reference_objects_soql_limits.htm)
- SOSL Limitations (atlas.en-us.api_tooling.meta/api_tooling/reference_objects_sosl_limits.htm)
