---
title: "ConnectApi.QuerySqlMetadataItem"
domain: apex-reference
topic: connectapiquerysqlmetadataitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:28.717Z
estimatedTokens: 171
keywords: [ConnectApi.QuerySqlMetadataItem, Represents, metadata, associated, SQL, query, output.]
---

# ConnectApi.QuerySqlMetadataItem

> Represents the metadata associated with an SQL query output.

# ConnectApi.QuerySqlMetadataItem

Represents the metadata associated with an SQL query output.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| innerElement | ConnectApi.QuerySqlMetadataItem | Description of array fields. | 62.0 |
| name | String | Name of the field. | 62.0 |
| nullable | Boolean | Indicates if the field is nullable (true) or not (false). | 62.0 |
| precision | Integer | Precision for numeric fields. | 62.0 |
| scale | Integer | Scale for numeric fields. | 62.0 |
| type | TypeEnum | Type of the SQL parameter.ArrayOfXBigIntBoolCharDateDoubleFoatIntegerNumericOidSmallIntTimeTimestampTimestampTZUnspecifiedVarchar | 62.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- TypeEnum (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
