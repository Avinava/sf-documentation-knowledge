---
title: "MetadataComponentDependency (Beta)"
domain: tooling-api
topic: metadatacomponentdependency-beta
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:45.187Z
estimatedTokens: 1730
namespace: Type
keywords: [MetadataComponentDependency, Beta, dependency, relationships, metadata, components, org, query, Tooling, API, version, 43.0, later, Bulk, 2.0]
---

# MetadataComponentDependency (Beta)

> Represents dependency relationships between the metadata components in
            your org. You can query MetadataComponentDependency using Tooling API in API
        version 43.0 and later or using Bulk API 2.0 in API 49.0 and later.

**Namespace:** `Type`

# MetadataComponentDependency (Beta)

Represents dependency relationships between the metadata components in your org. You can query MetadataComponentDependency using Tooling API in API version 43.0 and later or using Bulk API 2.0 in API 49.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

As a Beta feature, MetadataComponentDependency (Dependency API) is a preview and isn’t part of the “Services” under your Main Services Agreement with Salesforce. Use this feature at your sole discretion, and make your purchase decisions based on the generally available products and features. Salesforce doesn’t guarantee general availability of this feature within any particular time frame or at all, and we can discontinue it at any time. This feature is for evaluation purposes only, not for production use. It’s offered as is and isn’t supported. Salesforce has no liability for any harm or damage arising out of the use of this feature. All restrictions, Salesforce reservation of rights, obligations concerning the Services, and terms for related Non-Salesforce Applications and Content apply equally to your use of this feature. You can provide feedback and suggestions in the [Dependency API/Field Usage (Beta)](https://success.salesforce.com/_ui/core/chatter/groups/GroupProfilePage?g=0F93A00000020Vu "HTML (New Window)") Trailblazer Community group page.

## Supported SOAP Calls

query()

## Supported REST HTTP Methods

Tooling API—GET

Bulk API 2.0—POST, GET, PATCH, DELETE

## Limitations

Tooling API

-   No more than 2000 records in a single query.
-   Reports are not included in MetadataComponentDependency queries. Use Bulk API 2.0 for dependency relationships that include reports.

Bulk API 2.0

-   No more than 100,000 records in a single query.

The following SOQL queries are not supported in both Tooling API and Bulk API 2.0

-   SOQL ORDER BY clause
-   SOQL SELECT clause: count() function
-   SOQL queryMore()
-   SOQL WHERE clause: any type of filter with MetadataComponentName
-   SOQL WHERE clause: any type of filter with RefMetadataComponentName
-   SOQL WHERE clause: contains operators *other* than \=, !=, AND, or OR
-   SOQL WHERE clause: filter by (RefMetadataComponentType = ‘StandardEntity’)
-   SOQL WHERE clause: use of the LIKE operator with either the MetadataComponentType field or the RefMetadataComponentType field
-   SOQL OFFSET clause

[SOQL Limitations](atlas.en-us.api_tooling.meta/api_tooling/reference_objects_soql_limits.htm "Some Tooling API objects have SOQL limitations. These limitations apply to any Metadata Catalog query, which applies to all Custom Metadata Types and Metadata Catalog entities, not only the ones explicitly listed.")

[SOSL Limitations](atlas.en-us.api_tooling.meta/api_tooling/reference_objects_sosl_limits.htm "Two Tooling API objects, EntityDefinition and FieldDefinition, have some SOSL limitations. ExternalString and MetadataComponentDependency (Beta) don’t support SOSL searches.")

## Fields

| Field | Details |
| --- | --- |
| MetadataComponentId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of a metadata component that depends on another component.The component with the ID listed in the output as MetadataComponentId has a reference to the component with its ID listed as RefMetadataComponentId.MetadataComponentId is a string field that usually contains either an 18-character ID or a standard object name. Use 18-character IDs, not 15-character IDs, in your queries of this field. |
| MetadataComponentName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of a metadata component that depends on another component. For example, YourClass for an Apex class or yourField (without the __c suffix) for a custom field.The component with the name listed in the output as MetadataComponentName has a reference to the component with its name listed as RefMetadataComponentName. |
| MetadataComponentNamespace | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace of a metadata component that depends on another component.The component with the namespace listed in the output as MetadataComponentNamespace has a reference to the component with its namespace listed as RefMetadataComponentNamespace. |
| MetadataComponentType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of a metadata component that depends on another component.The component with the type listed in the output as MetadataComponentType has a reference to the component with its type listed as RefMetadataComponentType. |
| RefMetadataComponentId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of a metadata component that another component depends on.The component with the ID listed in the output as RefMetadataComponentId is referenced by the component with its ID listed as MetadataComponentId.RefMetadataComponentId is a string field that usually contains either an 18-character ID or a standard object name. Use 18-character IDs, not 15-character IDs, in your queries of this field. |
| RefMetadataComponentName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of a metadata component that another component depends on. For example, YourClass for an Apex class or yourField (without the __c suffix) for a custom field.The component with the name listed in the output as RefMetadataComponentName is referenced by the component with its name listed as MetadataComponentName. |
| RefMetadataComponentNamespace | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace of a metadata component that another component depends on.The component with the namespace listed in the output as RefMetadataComponentNamespace is referenced by the component with its namespace listed as MetadataComponentNamespace. |
| RefMetadataComponentType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of a metadata component that another component depends on.The component with the type listed in the output as RefMetadataComponentType is referenced by the component with its type listed as MetadataComponentType. |

-   **[Tooling API Usage](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_metadatacomponentdependency_tooling_usage.htm)**
    Use SOQL queries to list the relationships between the metadata components in your org. The query results include one row for each relationship. Each relationship is a directional dependency between two metadata components.
-   **[Bulk API 2.0 Usage](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_metadatacomponentdependency_bulk2_usage.htm)**
    Using Bulk API 2.0, you can query the MetadataComponentDependency Tooling API object and retrieve up to 100,000 records in a single query. Use SOQL queries to list the relationships between the metadata components in your org.

## Related Topics

- SOQL Limitations (atlas.en-us.api_tooling.meta/api_tooling/reference_objects_soql_limits.htm)
- SOSL Limitations (atlas.en-us.api_tooling.meta/api_tooling/reference_objects_sosl_limits.htm)
- Tooling API Usage (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_metadatacomponentdependency_tooling_usage.htm)
- Bulk API 2.0 Usage (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_metadatacomponentdependency_bulk2_usage.htm)
