---
title: "WorkSkillRouting"
domain: tooling-api
topic: workskillrouting
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:46.227Z
estimatedTokens: 548
keywords: [WorkSkillRouting, setup, stores, WorkSkillRoutingAttribute, objects, route, work, item, agent, skills, necessary, take, API, version, 46.0]
---

# WorkSkillRouting

> Represents a setup object that stores a set of
        WorkSkillRoutingAttribute objects used to route a work item to an agent who has the skills
        necessary to take the work. Available in API version 46.0 and later.

# WorkSkillRouting

Represents a setup object that stores a set of WorkSkillRoutingAttribute objects used to route a work item to an agent who has the skills necessary to take the work. Available in API version 46.0 and later.

## Supported SOAP Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST HTTP Methods

DELETE, GET, PATCH, POST

## Limitations

[SOQL Limitations](atlas.en-us.api_tooling.meta/api_tooling/reference_objects_soql_limits.htm "Some Tooling API objects have SOQL limitations. These limitations apply to any Metadata Catalog query, which applies to all Custom Metadata Types and Metadata Catalog entities, not only the ones explicitly listed.")

[SOSL Limitations](atlas.en-us.api_tooling.meta/api_tooling/reference_objects_sosl_limits.htm "Two Tooling API objects, EntityDefinition and FieldDefinition, have some SOSL limitations. ExternalString and MetadataComponentDependency (Beta) don’t support SOSL searches.")

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe developer name for the WorkSkillRouting.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated metadata type in Metadata API. |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether assignment rules are active and can be evaluated. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language in the user’s personal settings. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionMaster label for this object. This display value is the internal label that is not translated. |
| Metadata | Typemns:WorkSkillRoutingPropertiesCreate, Nillable, UpdateDescriptionThe associated metadata type in Metadata API. |
| RelatedEntity | TypepicklistPropertiesFilter, Group, Restricted picklist, Sort, UniqueDescriptionType of Salesforce object that the attributes are associated with. |

## Related Topics

- SOQL Limitations (atlas.en-us.api_tooling.meta/api_tooling/reference_objects_soql_limits.htm)
- SOSL Limitations (atlas.en-us.api_tooling.meta/api_tooling/reference_objects_sosl_limits.htm)
