---
title: "WorkflowFieldUpdate"
domain: tooling-api
topic: workflowfieldupdate
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:47.131Z
estimatedTokens: 656
keywords: [WorkflowFieldUpdate, Represents, workflow, field, update., Supported, SOAP, Calls, REST, HTTP, Fields]
---

# WorkflowFieldUpdate

> Represents a workflow field
            update.

# WorkflowFieldUpdate

Represents a workflow field update.

This object is available in API version 32.0 and later.

## Supported SOAP Calls

create(), delete(), query(), retrieve(), search(), update(), upsert()

## Supported REST HTTP Methods

DELETE, GET, PATCH, POST

## Fields

| Field | Details |
| --- | --- |
| EntityDefinition | TypeEntityDefinitionPropertiesFilter, Group, Sort.DescriptionRequired. Available in API version 34.0. The entity definition for the object associated with this workflow field update. |
| EntityDefinitionId | TypestringPropertiesFilter, Group, SortDescriptionThe ID of the entity containing the workflow field update. |
| FieldDefinition | TypeFieldDefinitionPropertiesFilter, Group, SortDescriptionRequired. The definition of this field. |
| FieldDefinitionId | TypestringPropertiesFilter, Group, SortDescriptionThe ID of the field for the workflow field update. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated metadata object in Metadata API.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| LiteralValue | TypestringPropertiesFilter, Group, Nillable, SortDescriptionIf the update uses a literal value, this is that value. |
| LookupValueId | TypeIDPropertiesFilter, Group, Nillable, SortDescriptionIf the update looks up a value, this lookup value is referenced. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| Metadata | Typemns:WorkflowFieldUpdatePropertiesCreate, Nillable, UpdateDescriptionThe workflow field update metadata.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the workflow field update. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace of the package containing the workflow field update object. |
| SourceTableEnumOrId | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe enum (for example, Account) or ID of the object this workflow field update is on. |

## Related Topics

- EntityDefinition (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_entitydefinition.htm)
- FieldDefinition (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_fielddefinition.htm)
