---
title: "EntityLimit"
domain: tooling-api
topic: entitylimit
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:44.512Z
estimatedTokens: 521
keywords: [EntityLimit, limits, Setup, SOAP, Calls, REST, HTTP, Limitations]
---

# EntityLimit

> Represents the limits for an object as
            displayed in the Setup UI.

# EntityLimit

Represents the limits for an object as displayed in the Setup UI.

This object is available in API version 34.0 and later.

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
| DurableId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUnique identifier for the field. Always retrieve this value before using it, as the value isn’t guaranteed to stay the same from one release to the next. Use this field to simplify queries. |
| EntityDefinition | TypeEntityDefinitionPropertiesFilter, Group, SortDescriptionThe object to which these limits apply. |
| EntityDefinitionId | TypestringPropertiesFilter, Group, SortDescriptionID of the object to which these limits apply. |
| Label | TypestringPropertiesFilter, Group, SortDescriptionThe label of the object to which these limits apply. |
| Max | TypeintPropertiesFilter, Group, SortDescriptionThe maximum number of objects that the organization is allowed to have. |
| Remaining | TypeintPropertiesFilter, Group, SortDescriptionThe number of objects still available. For example, if the limit on custom objects is 100, and you create 75, this value is 25. |
| Type | TypestringPropertiesFilter, Group, Restricted picklist, SortDescriptionWhat type of component the limit applies to:ActiveLookupFiltersActiveRulesActiveValidationRulesApprovalProcessesCbsSharingRulesCustomFieldsCustomRelationshipRollupSummarySharingRulesTotalRulesVLookup |

## Related Topics

- SOQL Limitations (atlas.en-us.api_tooling.meta/api_tooling/reference_objects_soql_limits.htm)
- SOSL Limitations (atlas.en-us.api_tooling.meta/api_tooling/reference_objects_sosl_limits.htm)
