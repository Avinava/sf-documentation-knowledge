---
title: "SOQL Operation Limitations"
domain: tooling-api
topic: soql-operation-limitations
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:46:37.063Z
keywords: [SOQL, Operation, Limitations, Queries, Scratch, Orgs]
---

# SOQL Operation Limitations

# SOQL Operation Limitations

Some Tooling API objects have SOQL limitations. These limitations apply to any Metadata Catalog query, which applies to all Custom Metadata Types and Metadata Catalog entities, not only the ones explicitly listed.

These objects in Tooling API don’t support SOQL operations COUNT(), GROUP BY, LIMIT, LIMIT OFFSET, OR, NOT, and INCLUDES.

-   CompactLayoutInfo
-   CompactLayoutItemInfo
-   DataType
-   EntityDefinition
-   EntityLimit
-   EntityParticle
-   FieldDefinition
-   Publisher
-   RelationshipDomain
-   RelationshipInfo
-   SearchLayout
-   ServiceFieldDataType
-   StandardAction
-   TimeSheetTemplate
-   UserEntityAccess
-   UserFieldAccess

The unsupported operations for these objects return errors or incorrect results, as these examples illustrate.

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

ORDER BY

Example Query: SELECT EntityDefinition.DeveloperName, ValidationName, Active, Description, ErrorDisplayField, ErrorMessage FROM ValidationRule ORDER BY EntityDefinition.DeveloperName ASC, ValidationName ASC

Error Returned: ERROR: relation "core.virtual\_standard\_entity\_data\_template" does not exist

You can always order by fields of the object that you’re querying, but you can get an error when you order by the fields of a joined object.

INCLUDES

Example Query: SELECT ComplianceGroup FROM FieldDefinition WHERE EntityDefinitionId = 'Account' AND ComplianceGroup includes('GDPR')

Error Returned: Unsupported filter type

MetadataComponentDependency (Pilot) doesn’t support GROUP BY or aggregate functions other than COUNT().

## SOQL Queries in Scratch Orgs

When querying the Tooling API from a scratch org, up to 2,000 records may be returned. In all other types of orgs, a query returns a single record.