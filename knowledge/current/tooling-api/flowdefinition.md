---
title: "FlowDefinition"
domain: tooling-api
topic: flowdefinition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:38.009Z
keywords: [FlowDefinition, Important, Note, Supported, SOAP, API, Calls, REST, HTTP, Methods, Fields]
---

# FlowDefinition

# FlowDefinition

The parent of a set of flow versions.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_tooling)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. Because changing terms in our code can break current implementations, we maintained this object’s name.

When using the Tooling API to work with flow definitions, consider that:

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

Legacy flows created with the Desktop Flow Designer can’t be modified with the API. Update your flow by recreating it with Flow Builder.

-   You can activate and deactivate flows with the Metadata field.
    
    ![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_tooling)
    
    #### Important
    
    In API version 44.0, we recommend upgrading your flows to flow metadata file names without version numbers and discontinue using the FlowDefinition object to activate or deactivate a flow. Then use the Flow object to activate or deactivate a flow. For more information, see [Upgrade Flow Files to API Version 44.0](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_visual_workflow.htm "HTML (New Window)").
    
    If you deploy with flow definitions, the active version numbers in the flow definitions override the status fields in the flows. For example, the active version number in the flow definition is version 3, and the latest version of the flow is version 4 with the status field as Active. After you deploy your flow, the active version is version 3.
    
-   You can update masterlabel and description of a FlowDefinition.
-   FlowDefinition are implicitly created when the Flow object is created, which means FlowDefinition objects can only be updated.

This object is available in API version 34.0 and later.

## Supported SOAP API Calls

query(), retrieve(), update()

## Supported REST API HTTP Methods

GET, HEAD, PATCH, POST

## Fields

| Field Name | Details |
| --- | --- |
| ActiveVersion | TypeFlowPropertiesFilter, Group, Nillable, SortDescriptionThe active flow version object. |
| ActiveVersionId | TypeIDPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the active flow version. |
| Description | TypestringPropertiesNillableDescriptionFlow definition information, specified by the org’s admin. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionDeveloper name of this flow definition. In the UI, the label is Flow API Name. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the flow definition in the Metadata API.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| LatestVersion | TypeFlowPropertiesFilter, Group, Nillable, SortDescriptionThe latest flow version object, regardless of the status. |
| LatestVersionId | TypeIDPropertiesFilter, Group, Nillable, SortDescriptionID of the latest flow version, regardless of the flow’s status. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanagedThis field is available in API version 38.0 and later. |
| MasterLabel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionLabel for the flow definition. In the UI, this field’s label is Flow Label. |
| Metadata | Typemns:FlowDefinitionPropertiesCreate, Nillable, UpdateDescriptionThe flow definition’s metadata object, containing information about which flow version is active and the flow definition’s description.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace associated with this flow definition. |