---
title: "ConnectApi.QuerySqlMetadataItem"
domain: apex-reference
topic: connectapiquerysqlmetadataitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.816Z
keywords: [ConnectApi.QuerySqlMetadataItem]
---

# ConnectApi.QuerySqlMetadataItem

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