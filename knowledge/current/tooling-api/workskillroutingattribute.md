---
title: "WorkSkillRoutingAttribute"
domain: tooling-api
topic: workskillroutingattribute
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:39.005Z
keywords: [WorkSkillRoutingAttribute, Supported, SOAP, Calls, REST, HTTP, Methods, Limitations, Fields]
---

# WorkSkillRoutingAttribute

# WorkSkillRoutingAttribute

Represents a setup object that stores metadata related to the routing assignments between object field values and skills. Field values are used to route a work item to an agent who has the skills necessary to take the work. Available in API version 46.0 and later.

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
| Field | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe field corresponding to the field values that the skill is mapped to. Skills-Based Routing Rules support fields of type picklist, lookup, and checkbox. For example, Case Reason, Case Type, and Escalated. To see the complete list of valid values representing supported fields, see the Tooling API WSDL. |
| IsAdditionalSkill | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIn skills-based routing, you can set some skills to additional. After a designated timeout period, a skill marked as additional is dropped from Omni-Channel routing. The case is then routed to the best-matched agent, even if the agent doesn’t have all the skills. |
| RelatedEntity | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of object being routed. Valid values are:CaseContactRequestLeadOrderSocialPostCustom |
| SkillLevel | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionLevel of the skill required. This value can range from 0 to 10. |
| SkillPriority | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFor additional skills, specify the order in which a skill is dropped if after the Drop Additional Skills Timeout on the routing configuration, no agent with that skill is available. Skills with a lower priority rank (9 or 10) are dropped first. Skills with a higher priority rank (0 or 1) are dropped last. Skills with the same priority value are dropped as a group. You can set skill priority using skills-based routing rules or Apex code. Available in API version 49.0 and later. |
| Value | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe field value that is mapped to the selected skill. |
| WorkSkillRoutingId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the WorkSkillRouting object with which this field value is associated. |