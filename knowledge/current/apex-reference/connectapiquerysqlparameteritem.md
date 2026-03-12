---
title: "ConnectApi.QuerySqlParameterItem"
domain: apex-reference
topic: connectapiquerysqlparameteritem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:25.426Z
estimatedTokens: 126
keywords: [ConnectApi.QuerySqlParameterItem, Represents, fields, SQL, query, input.]
---

# ConnectApi.QuerySqlParameterItem

> Represents the parameter fields for an SQL query input.

# ConnectApi.QuerySqlParameterItem

Represents the parameter fields for an SQL query input.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| name | String | Name of the SQL parameter. | Required | 62.0 |
| type | TypeEnum | Type of the SQL parameter.ArrayOfXBigIntBoolCharDateDoubleFoatIntegerNumericOidSmallIntTimeTimestampTimestampTZUnspecifiedVarchar | Required | 62.0 |
| value | String | Value of the SQL parameter. | Required | 62.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- TypeEnum (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
