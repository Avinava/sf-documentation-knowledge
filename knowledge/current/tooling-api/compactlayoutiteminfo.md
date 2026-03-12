---
title: "CompactLayoutItemInfo"
domain: tooling-api
topic: compactlayoutiteminfo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:44.049Z
estimatedTokens: 423
keywords: [CompactLayoutItemInfo, selected, compact, layout, order, SOAP, Calls, REST, HTTP, Limitations]
---

# CompactLayoutItemInfo

> Represents a field selected for
            a compact layout, and the order of that field in the compact layout.

# CompactLayoutItemInfo

Represents a field selected for a compact layout, and the order of that field in the compact layout.

This object is available in API version 32.0 and later.

## Supported SOAP Calls

query()

## Supported REST HTTP Methods

GET

## Limitations

[SOQL Limitations](atlas.en-us.api_tooling.meta/api_tooling/reference_objects_soql_limits.htm "Some Tooling API objects have SOQL limitations. These limitations apply to any Metadata Catalog query, which applies to all Custom Metadata Types and Metadata Catalog entities, not only the ones explicitly listed.")

[SOSL Limitations](atlas.en-us.api_tooling.meta/api_tooling/reference_objects_sosl_limits.htm "Two Tooling API objects, EntityDefinition and FieldDefinition, have some SOSL limitations. ExternalString and MetadataComponentDependency (Beta) don’t support SOSL searches.")

## Fields

| Field | Details |
| --- | --- |
| CompactLayoutInfo | TypeCompactLayoutInfoPropertiesFilter, Group, Nillable, SortDescriptionThe compact layout associated with this CompactLayoutItemInfo. |
| CompactLayoutInfoId | TypeIdPropertiesFilter, Group, Nillable, SortDescriptionID of the compact layout associated with this field. |
| DurableId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThis field reserved for future use. Do not use. |
| FieldDefinition | TypeFieldDefinitionPropertiesFilter, Group, Nillable, SortDescriptionRequired. The definition of this field. |
| FieldDefinitionId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionRequired. ID of this field. |
| SortOrder | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe order of the field in the compact layout. 1 is first. |

## Related Topics

- SOQL Limitations (atlas.en-us.api_tooling.meta/api_tooling/reference_objects_soql_limits.htm)
- SOSL Limitations (atlas.en-us.api_tooling.meta/api_tooling/reference_objects_sosl_limits.htm)
- FieldDefinition (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_fielddefinition.htm)
