---
title: "MacroUsage"
domain: object-reference
topic: macrousage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:12.652Z
estimatedTokens: 904
keywords: [MacroUsage, macro, usage, record, including, how, they, API, version, 47.0, later, Calls, Special, Access, Rules]
---

# MacroUsage

> Represents macro usage on a record, including which macro was used,
         who used it, and how they used it. This object is available in API version 47.0
					and later.

# MacroUsage

Represents macro usage on a record, including which macro was used, who used it, and how they used it. This object is available in API version 47.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

delete() is supported in API version 55.0 and later.

## Special Access Rules

This object is always read-only. Only users with “Modify All Data” permission can delete MacroUsage records.

## Fields

| Field | Details |
| --- | --- |
| AppContext | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionContext in which the macro was run. Possible values are:Aloha—Salesforce ClassicLightning—Lightning ExperienceUnknown |
| ConditionCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionNumber of conditional instructions contained in the macro at execution. |
| ContextRecord | TypestringPropertiesFilter, Group, Nillable, SortDescriptionID of the record on which the macro was run. |
| DurationInMs | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe execution time, in milliseconds, for the macro. |
| ExecutedInstructionCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of macro instructions that ran successfully. If the macro completed successfully, this value is the same as InstructionCount. |
| ExecutionEndTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe time at which macro execution completed. |
| ExecutionState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe end state of macro execution. Possible values areSUCCESSFAILURECANCELED |
| FailureReason | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIf ExecutionState is failure, this field stores the reason for the failure. Possible values are:ACCESSGENERICTIMEOUTUNSUPPORTED |
| FolderId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the folder containing the macro at the time it was used. |
| InstructionCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of instructions in the macro at the start of execution. |
| IsFromBulk | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the macro was run as a bulk macro. When a bulk macro is run on multiple records, usage is recorded per record. |
| MacroID | TypereferencePropertiesFilter, Group, SortDescriptionID of the macro. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionName of the macro. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionID of the group or user that owns the macro. |
| UserId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the user that ran the macro. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[MacroUsageOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[MacroUsageShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- MacroUsageOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- MacroUsageShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
