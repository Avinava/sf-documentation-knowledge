---
title: "TimeSheetTemplateAssignment"
domain: tooling-api
topic: timesheettemplateassignment
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:46.045Z
estimatedTokens: 353
keywords: [TimeSheetTemplateAssignment, assignment, time, sheet, template, profile, API, version, 48.0, later, SOAP, Calls, REST, HTTP, Limitations]
---

# TimeSheetTemplateAssignment

> Represents the assignment of a time sheet template to a
        profile. Available in API version 48.0 and later.

# TimeSheetTemplateAssignment

Represents the assignment of a time sheet template to a profile. Available in API version 48.0 and later.

## Supported SOAP Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST HTTP Methods

GET

## Limitations

[SOQL Limitations](atlas.en-us.api_tooling.meta/api_tooling/reference_objects_soql_limits.htm "Some Tooling API objects have SOQL limitations. These limitations apply to any Metadata Catalog query, which applies to all Custom Metadata Types and Metadata Catalog entities, not only the ones explicitly listed.")

[SOSL Limitations](atlas.en-us.api_tooling.meta/api_tooling/reference_objects_sosl_limits.htm "Two Tooling API objects, EntityDefinition and FieldDefinition, have some SOSL limitations. ExternalString and MetadataComponentDependency (Beta) don’t support SOSL searches.")

## Special Access Rules

Field Service must be enabled to access TimeSheetTemplateAssignment. Users must have the Customize Application and Time Sheet Template permissions.

## Fields

| Field | Details |
| --- | --- |
| AssignedToId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, Unique, UpdateDescriptionThe ID of the user profile assigned to the time sheet template. |
| TimeSheetTemplateId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the associated time sheet template. |

## Related Topics

- SOQL Limitations (atlas.en-us.api_tooling.meta/api_tooling/reference_objects_soql_limits.htm)
- SOSL Limitations (atlas.en-us.api_tooling.meta/api_tooling/reference_objects_sosl_limits.htm)
