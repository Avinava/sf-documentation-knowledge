---
title: "ExpressionSetView"
domain: sfFieldRef
topic: expressionsetview
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:57.703Z
estimatedTokens: 340
namespace: NamespacePrefix
keywords: [ExpressionSetView, virtual, consolidated, view, file-based, expression, read-only, templates, able, modify, clone, API, version, 55.0, later]
---

# ExpressionSetView

> Represents a virtual object that provides a consolidated view of
         file-based expression set. File-based expression sets are read-only templates. To be able
         to modify file-based expression sets, you must clone them first.  This object is
      available in API version 55.0 and later.

**Namespace:** `NamespacePrefix`

# ExpressionSetView

Represents a virtual object that provides a consolidated view of file-based expression set. File-based expression sets are read-only templates. To be able to modify file-based expression sets, you must clone them first. This object is available in API version 55.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ExpressionSetView in the Expression Set Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Description | Description | string |  | 255 |  |  |
| DurableId | Durable ID | string |  | 255 |  |  |
| ExpressionSetDetails | Expression Set Details | textarea |  | 32000 |  |  |
| HasContextDefinitionRef | Context Definition Reference | boolean |  |  |  |  |
| Id | Expression Set Template ID | id |  | 18 |  |  |
| IsExecutable | Executable | boolean |  |  |  |  |
| IsTemplate | Is Template | boolean |  |  |  |  |
| LastModifiedBy | Last Modified By | string |  | 255 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 255 |  |  |
| UsageType | Usage Type | picklist |  | 255 |  |  |
| UsageTypeLabel | Usage Type | string |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
