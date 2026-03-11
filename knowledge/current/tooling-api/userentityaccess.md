---
title: "UserEntityAccess"
domain: tooling-api
topic: userentityaccess
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:38.929Z
keywords: [UserEntityAccess, Supported, SOAP, Calls, REST, HTTP, Methods, Limitations, Fields, Usage]
---

# UserEntityAccess

# UserEntityAccess

Represents the access that the current user has to an object. Available in Tooling API version 34.0 and later.

## Supported SOAP Calls

query(), search()

## Supported REST HTTP Methods

GET

## Limitations

[SOQL Limitations](atlas.en-us.api_tooling.meta/api_tooling/reference_objects_soql_limits.htm "Some Tooling API objects have SOQL limitations. These limitations apply to any Metadata Catalog query, which applies to all Custom Metadata Types and Metadata Catalog entities, not only the ones explicitly listed.")

[SOSL Limitations](atlas.en-us.api_tooling.meta/api_tooling/reference_objects_sosl_limits.htm "Two Tooling API objects, EntityDefinition and FieldDefinition, have some SOSL limitations. ExternalString and MetadataComponentDependency (Beta) don’t support SOSL searches.")

## Fields

| Field | Details |
| --- | --- |
| DurableId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUnique identifier for the field. Always retrieve this value before using it, as the value isn’t guaranteed to stay the same from one release to the next. To simplify queries, use this field. |
| EntityDefinition | TypeEntityDefinitionPropertiesFilter, Group, Nillable, SortDescriptionThe entity definition for the object associated with this user entity access record. Because this field represents a relationship, use only in subqueries. |
| EntityDefinitionId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionID of the EntityDefinition. |
| IsActivateable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the user specified in the User field has access to activate records of the associated object type if the User owns them. For example, a user owns an Apex trigger or workflow rule, and can activate them if this field is true for ApexTrigger or WorkflowRule. |
| IsCreatable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the user specified in the User field has access to create records of the associated object type. |
| IsDeletable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the user specified in the User field has access to delete records of the associated object type. |
| IsEditable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the user specified in the User field has access to edit records of the associated object type. |
| IsFlsUpdatable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the user specified in the User field has access to change field-level security settings on appropriate fields of the associated object type. For example, an administrator could deny a group of users access to the Type field on Account. |
| IsMergeable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the user specified in the User field has access to merge records of the associated object type. |
| IsReadable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the user specified in the User field has access to view records of the associated object type. |
| IsUndeletable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the user specified in the User field has access to undelete records of the associated object type. |
| IsUpdatable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the user specified in the User field has access to edit records of the associated object type. |
| User | TypeUserPropertiesFilter, Group, Nillable, SortDescriptionThe user who has the access defined in this user entity access record, for the entity specified in the EntityDefinition field. Because this field represents a relationship, use only in subqueries. |
| UserId | TypeIDPropertiesFilter, Group, Nillable, SortDescriptionID of the user specified in the User field. |

## Usage

Queries on UserEntityAcces need filters on both the entity side and the user side.

Example: Entity Side

SELECT EntityDefinition.QualifiedApiName, EntityDefinition.MasterLabel FROM UserEntityAccess WHERE UserId={current\_user\_id} AND IsCreateable=true AND EntityDefinition.IsCustomizable=true

Example: User Side

UserId={current\_user\_id}