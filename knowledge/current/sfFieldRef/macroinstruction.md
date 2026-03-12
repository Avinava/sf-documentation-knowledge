---
title: "MacroInstruction"
domain: sfFieldRef
topic: macroinstruction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:03.527Z
estimatedTokens: 392
keywords: [MacroInstruction, instruction, macro, specify, interacts, context, publisher, works, operation, action, performs, target, macro’s, actions]
---

# MacroInstruction

> Represents an instruction in a macro. An instruction can
				specify the object that the macro interacts with, the context or publisher that the
				macro works within, the operation or action that the macro performs, and the target
				of the macro’s actions.

# MacroInstruction

Represents an instruction in a macro. An instruction can specify the object that the macro interacts with, the context or publisher that the macro works within, the operation or action that the macro performs, and the target of the macro’s actions.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [MacroInstruction](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_macroinstruction.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Macro Instruction ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MacroId | Macro ID | reference |  | 18 |  |  |
| Name | Macro Instruction Name | string |  | 255 |  |  |
| Operation | Operation | picklist |  | 255 |  |  |
| SortOrder | Sort Order | int | 9 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Target | Target | picklist |  | 255 |  |  |
| Value | Value | textarea |  | 4000 |  |  |
| ValueRecord | Value Record ID | string |  | 15 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
