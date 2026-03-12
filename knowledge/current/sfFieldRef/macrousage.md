---
title: "MacroUsage"
domain: sfFieldRef
topic: macrousage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:03.540Z
estimatedTokens: 492
keywords: [MacroUsage, macro, usage, record, including, how, they, API, version, 47.0, later]
---

# MacroUsage

> Represents macro usage on a record, including which macro was used,
         who used it, and how they used it. This object is available in API version 47.0
					and later.

# MacroUsage

Represents macro usage on a record, including which macro was used, who used it, and how they used it. This object is available in API version 47.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [MacroUsage](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_macrousage.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AppContext | App Context | picklist |  | 255 |  |  |
| ConditionCount | Condition Count | int | 9 |  |  |  |
| ContextRecord | Context Record | string |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DurationInMs | Duration In Milliseconds | int | 9 |  |  |  |
| ExecutedInstructionCount | Executed Instruction Count | int | 9 |  |  |  |
| ExecutionEndTime | Execution End Time | datetime |  |  |  |  |
| ExecutionState | Execution State | picklist |  | 255 |  |  |
| FailureReason | Failure Reason | picklist |  | 255 |  |  |
| FolderId | Folder ID | reference |  | 18 |  |  |
| Id | Macro Usage ID | id |  | 18 |  |  |
| InstructionCount | Instruction Count | int | 9 |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsFromBulk | From Bulk Execution | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MacroId | Macro ID | reference |  | 18 |  |  |
| Name | Macro Usage Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UserId | User ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
