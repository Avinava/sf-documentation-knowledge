---
title: "RelationshipDomain"
domain: tooling-api
topic: relationshipdomain
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:45.755Z
estimatedTokens: 806
keywords: [RelationshipDomain, relationship, objects, write, simpler, queries, “which, child, defined, ParentSobject”, easier, Tooling, API, version, 34.0]
---

# RelationshipDomain

> Represents the relationship an object has with other objects. RelationshipDomain
        allows you to write simpler queries. For example, “which objects are the child objects for
        the object defined in ParentSobject” is easier using
        RelationshipDomain. Available in Tooling API version 34.0 and
        later.

# RelationshipDomain

Represents the relationship an object has with other objects. RelationshipDomain allows you to write simpler queries. For example, “which objects are the child objects for the object defined in ParentSobject” is easier using RelationshipDomain. Available in Tooling API version 34.0 and later.

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
| ChildSobject | TypeEntityDefinitionPropertiesFilter, Group, SortDescriptionMetadata for the child object, if any. |
| ChildSobjectId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionID of the ChildSobject. |
| DurableId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUnique identifier for the field. Always retrieve this value before using it, as the value isn’t guaranteed to stay the same from one release to the next. To simplify queries, use this field. |
| Field | TypeFieldDefinitionPropertiesFilter, Group, SortDescriptionThe relationship field on this object that defines the relationship to ChildSobject or ParentSobject. |
| FieldId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionID of Field. |
| IsCascadeDelete | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, this object’s parent can’t be deleted until all records for this object are deleted. Corresponds to Cascade value for DeleteConstraint in the Metadata API. |
| IsDeprecatedAndHidden | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, this object is unavailable for the current version. |
| IsRestrictedDelete | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, this object can’t be deleted. Corresponds to Restrict value for DeleteConstraint in the Metadata API. |
| JunctionIdListNames | TypecomplexvaluePropertiesNillableDescriptionThe names of the lists of junction IDs associated with an object. Each ID represents an object that has a relationship with the associated object. |
| ParentSobject | TypeEntityDefinitionPropertiesFilter, Group, SortDescriptionMetadata for the parent object, if any. |
| ParentSobjectId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionID of the ParentSobject. |
| RelationshipInfo | TypeRelationshipInfoPropertiesFilter, Group, SortDescriptionProperties about the relationship. |
| RelationshipInfoId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionID of RelationshipInfo for this relationship domain. |
| RelationshipName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionName of this relationship. |

## Related Topics

- SOQL Limitations (atlas.en-us.api_tooling.meta/api_tooling/reference_objects_soql_limits.htm)
- SOSL Limitations (atlas.en-us.api_tooling.meta/api_tooling/reference_objects_sosl_limits.htm)
- EntityDefinition (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_entitydefinition.htm)
- FieldDefinition (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_fielddefinition.htm)
- RelationshipInfo (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_relationshipinfo.htm)
