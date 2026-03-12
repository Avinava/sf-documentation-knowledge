---
title: "RecAlrtDataSrcExpSetDef"
domain: sfFieldRef
topic: recalrtdatasrcexpsetdef
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:11.650Z
estimatedTokens: 367
namespace: NamespacePrefix
keywords: [RecAlrtDataSrcExpSetDef, data, source, record, alert, association, expression, definition, API, version, 58.0, later]
---

# RecAlrtDataSrcExpSetDef

> Represents information about the data source for a record alert and the
         association with an expression set definition. This object is available in API version
      58.0 and later.

**Namespace:** `NamespacePrefix`

# RecAlrtDataSrcExpSetDef

Represents information about the data source for a record alert and the association with an expression set definition. This object is available in API version 58.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see RecAlrtDataSrcExpSetDef in the Industries Common Resources Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeveloperName | Name | string |  | 80 |  |  |
| ExpressionSetDefinitionId | Expression Set Definition ID | reference |  | 18 |  |  |
| ExpressionSetObject | Expression Set Object | picklist |  | 255 |  |  |
| Id | Record Alert Data Source Expression Set Definition ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| RecordAlertDataSourceId | Record Alert Data Source ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
