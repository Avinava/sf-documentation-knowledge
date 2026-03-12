---
title: "DataType"
domain: tooling-api
topic: datatype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:44.275Z
estimatedTokens: 1018
keywords: [DataType, EntityDefinition, EntityParticle, FieldDefinition, simplify, queries, Tooling, API, version, 34.0, later, SOAP, Calls, REST, HTTP]
---

# DataType

> Represents the datatype of a field. Use this object with EntityDefinition,
        EntityParticle, or FieldDefinition to simplify queries. Available in Tooling API version
        34.0 and later.

# DataType

Represents the datatype of a field. Use this object with EntityDefinition, EntityParticle, or FieldDefinition to simplify queries. Available in Tooling API version 34.0 and later.

## Supported SOAP Calls

query()

## Supported REST HTTP Methods

GET

## Limitations

[SOQL Limitations](atlas.en-us.api_tooling.meta/api_tooling/reference_objects_soql_limits.htm "Some Tooling API objects have SOQL limitations. These limitations apply to any Metadata Catalog query, which applies to all Custom Metadata Types and Metadata Catalog entities, not only the ones explicitly listed.")

[SOSL Limitations](atlas.en-us.api_tooling.meta/api_tooling/reference_objects_sosl_limits.htm "Two Tooling API objects, EntityDefinition and FieldDefinition, have some SOSL limitations. ExternalString and MetadataComponentDependency (Beta) don’t support SOSL searches.")

## Special Access Rules

As of Spring ’20 and later, only authenticated internal and external users can access this object.

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Record Type Name. |
| ContextServiceDataTypeId | Don’t use this field. It’s reserved for future use. Properties and behavior are likely to change. |
| ContextWsdlDataTypeId | Don’t use this field. It’s reserved for future use. Properties and behavior are likely to change. |
| DurableId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUnique identifier for the field. Always retrieve this value before using it, as the value isn’t guaranteed to stay the same from one release to the next. To simplify queries, use this field. |
| IsComplex | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the datatype contains other datatypes, in contrast to a simple datatype like string. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

DataType fields are exposed in SOAP API version 45.0 and later. You can use Tooling API to query for DataType fields in guest user mode in API version 44.0 and earlier. In API version 45.0 and later, use SOAP API to get this data in guest user mode. DataType is still exposed in Tooling API to User Profiles with the ViewSetup permission.

## Example

From an object, retrieve all the fields of one datatype.

SELECT DataType, QualifiedApiName FROM EntityParticle WHERE DataType = 'phone' AND EntityDefinition.QualifiedApiName = 'Account'

## SOQL Limitations

This object doesn't support some SOQL operations.

GROUP BY

Example Query: SELECT COUNT(qualifiedapiname), isfeedenabled FROM EntityDefinition GROUP BY isfeedenabled

Error Returned: The requested operation is not yet supported by this SObject storage type, contact salesforce.com support for more information.

LIMIT, LIMIT OFFSET

Example Queries:

SELECT qualifiedapiname FROM EntityDefinition LIMIT 5

SELECT qualifiedapiname FROM EntityDefinition LIMIT 5 OFFSET 10

An incorrect result is returned because LIMIT and LIMIT OFFSET are ignored.

NOT

Example Query: SELECT qualifiedapiname FROM EntityDefinition WHERE qualifiedapiname!='Account'

Error Returned: Only equals comparisons permitted

OR

Example Query: SELECT qualifiedapiname, keyprefix FROM EntityDefinition WHERE isdeletable=true OR (isfeedenabled=false AND keyprefix='01j')

Error Returned: Disjunctions not supported

INCLUDES

Example Query: SELECT ComplianceGroup FROM FieldDefinition WHERE EntityDefinitionId = 'Account' AND ComplianceGroup includes('GDPR')

Error Returned: Unsupported filter type

## Related Topics

- SOQL Limitations (atlas.en-us.api_tooling.meta/api_tooling/reference_objects_soql_limits.htm)
- SOSL Limitations (atlas.en-us.api_tooling.meta/api_tooling/reference_objects_sosl_limits.htm)
