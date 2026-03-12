---
title: "RelationshipInfo"
domain: tooling-api
topic: relationshipinfo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:45.762Z
estimatedTokens: 699
keywords: [RelationshipInfo, relationship, objects, Simplify, queries, answering, question, “which, parent, defined, ChildSobject, Tooling, API, version, 34.0]
---

# RelationshipInfo

> Represents the properties of a relationship between objects. Simplify queries with
        RelationshipInfo, such as answering the question “which objects are parent objects for the
        object defined in ChildSobject. Available in Tooling API version 34.0 and
        later.

# RelationshipInfo

Represents the properties of a relationship between objects. Simplify queries with RelationshipInfo, such as answering the question “which objects are parent objects for the object defined in ChildSobject. Available in Tooling API version 34.0 and later.

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
| ChildSobject | TypeEntityDefinitionPropertiesFilter, Group, SortDescriptionMetadata for the child object, if any. |
| ChildSobjectId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionID of the ChildSobject. |
| DurableId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUnique identifier for the field. Always retrieve this value before using it, as the value isn’t guaranteed to stay the same from one release to the next. To simplify queries, use this field. |
| Field | TypeFieldDefinitionPropertiesFilter, Group, SortDescriptionThe relationship field that defines the relationship to ChildSobject or ParentSobject. |
| FieldId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionID of Field. |
| IsCascadeDelete | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, this object’s parent can’t be deleted until all records for this object are deleted. Corresponds to Cascade value for DeleteConstraint in the Metadata API. |
| IsDeprecatedAndHidden | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, this object is unavailable for the current version. |
| IsRestrictedDelete | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, this object can’t be deleted. Corresponds to Restrict value for DeleteConstraint in the Metadata API. |
| JunctionIdListNames | TypecomplexvaluePropertiesNillableDescriptionThe names of the lists of junction IDs associated with an object. Each ID represents an object that has a relationship with the associated object. |
| RelationshipDomains | TypeQueryResultPropertiesFilter, Group, SortDescriptionThe RelationshipDomain records associated with this object. Because this field represents a relationship, use only in subqueries. |

## Related Topics

- SOQL Limitations (atlas.en-us.api_tooling.meta/api_tooling/reference_objects_soql_limits.htm)
- SOSL Limitations (atlas.en-us.api_tooling.meta/api_tooling/reference_objects_sosl_limits.htm)
- EntityDefinition (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_entitydefinition.htm)
- FieldDefinition (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_fielddefinition.htm)
- QueryResult (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_queryresult.htm)
