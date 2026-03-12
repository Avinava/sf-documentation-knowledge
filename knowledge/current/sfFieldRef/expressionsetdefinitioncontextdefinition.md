---
title: "ExpressionSetDefinitionContextDefinition"
domain: sfFieldRef
topic: expressionsetdefinitioncontextdefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:57.660Z
estimatedTokens: 338
keywords: [relationship, expression, definition, context, API, version, 58.0, later]
---

# ExpressionSetDefinitionContextDefinition

> Represents a relationship between an expression set definition and a
         context definition. This object is available in API version 58.0 and
      later.

# ExpressionSetDefinitionContextDefinition

Represents a relationship between an expression set definition and a context definition. This object is available in API version 58.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ExpressionSetDefinitionContextDefinition in the Expression Set Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ContextDefinitionApiName | Context Definition API Name | string |  | 255 |  |  |
| ContextDefinitionId | ContextDefinition ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| ExecutableContextDefinition | Executable Context Definition | string |  | 255 |  |  |
| ExpressionSetApiName | Expression Set Definition API Name | string |  | 255 |  |  |
| ExpressionSetDefinitionId | ExpressionSetDefinition ID | reference |  | 18 |  |  |
| Id | ExpressionSetDefinitionContextDefinition ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
