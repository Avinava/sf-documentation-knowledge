---
title: "UserFieldAccess"
domain: tooling-api
topic: userfieldaccess
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:47.054Z
estimatedTokens: 687
keywords: [UserFieldAccess, Represents, access, current, user, field., Tooling, API, version, 34.0, later., Fields, SOQL, Limitations]
---

# UserFieldAccess

> Represents the access that the current user has to a field.
        Available in Tooling API version 34.0 and later.

# UserFieldAccess

Represents the access that the current user has to a field. Available in Tooling API version 34.0 and later.

## Fields

| Field | Details |
| --- | --- |
| DurableId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUnique identifier for the field. Always retrieve this value before using it, as the value isn’t guaranteed to stay the same from one release to the next. To simplify queries, use this field. |
| EntityDefinition | TypeEntityDefinitionPropertiesFilter, Group, Nillable, SortDescriptionThe entity definition for the object associated with this user entity access record. |
| EntityDefinitionId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionID of the EntityDefinition. |
| IsAccessible | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the user specified in the User field has access to view the associated field. |
| IsCreatable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the user specified in the User field has access to create records of the associated field. |
| IsUpdatable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the user specified in the User field has access to edit the associated field. |
| User | TypeUserPropertiesFilter, Group, Nillable, SortDescriptionThe user who has access defined in this user field access record, for the entity specified in the EntityDefinition field. Because this field represents a relationship, use only in subqueries. |
| UserId | TypeIDPropertiesFilter, Group, Nillable, SortDescriptionID of the user specified in the User field. |

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

- User (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_user.htm)
