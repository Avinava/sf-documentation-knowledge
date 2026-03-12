---
title: "CompactLayoutInfo"
domain: tooling-api
topic: compactlayoutinfo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:44.891Z
estimatedTokens: 1067
keywords: [CompactLayoutInfo, Represents, metadata, custom, standard, compact, layout., Supported, SOAP, Calls, REST, HTTP, Limitations, Fields, Note]
---

# CompactLayoutInfo

> Represents the metadata for a
            custom or standard compact layout.

# CompactLayoutInfo

Represents the metadata for a custom or standard compact layout.

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
| DeveloperName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe developer’s internal name for the compact layout (for example, CL_c) used in the API. |
| DurableId | TypestringPropertiesFilter, Group, SortDescriptionUnique identifier for the field. Always retrieve this value before using it, as the value isn’t guaranteed to stay the same from one release to the next. To simplify queries, use this field. |
| EntityDefinition | TypeEntityDefinitionPropertiesFilter, Group, SortDescriptionRequired. Available starting with version 32.0. The entity definition for the object associated with this CompactLayoutInfo. |
| EntityDefinitionId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionRequired. ID of the record associated with this CompactLayoutInfo. The record’s object type is in EntityDefinition. |
| FullName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name used as the compact layout identifier for API access. The fullName can contain only underscores and alphanumeric characters. It must be unique, begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| IsDefault | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, this compact layout is the default for the associated object. |
| Items | TypeQueryResultPropertiesFilter, Group, SortDescriptionA foreign key field pointing to CompactLayoutItemsInfo. Because this field represents a relationship, use only in subqueries. |
| Label | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe compact layout’s label. |
| Metadata | Typemns: CompactLayoutPropertiesCreate, Nillable, UpdateDescriptionMetadata that defines compact layouts.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| NamespacePrefix | TypestringPropertiesFilter, Group, SortDescriptionThe namespace prefix associated with this object. Each Developer Edition organization that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values:In Developer Edition organizations, the namespace prefix is set to the namespace prefix of the organization for all objects that support it. There is an exception if an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition organization of the package developer.In organizations that are not Developer Edition organizations, NamespacePrefix is only set for objects that are part of an installed managed package. There is no namespace prefix for all other objects. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

CompactLayoutInfo is exposed in Tooling API to user profiles with the View Setup and Configuration permission.

## Related Topics

- SOQL Limitations (atlas.en-us.api_tooling.meta/api_tooling/reference_objects_soql_limits.htm)
- SOSL Limitations (atlas.en-us.api_tooling.meta/api_tooling/reference_objects_sosl_limits.htm)
- QueryResult (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_queryresult.htm)
- CompactLayout (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_compactlayout.htm)
