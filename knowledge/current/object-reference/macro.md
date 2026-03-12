---
title: "Macro"
domain: object-reference
topic: macro
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:12.635Z
estimatedTokens: 1759
keywords: [Macro, instructions, tells, system, perform, tasks, API, version, 32.0, later, Calls, Usage, Associated, Objects]
---

# Macro

> Represents a macro, which is a set of instructions that tells the
			system to perform one or more tasks. This object is available in API version 32.0
		and later.

# Macro

Represents a macro, which is a set of instructions that tells the system to perform one or more tasks. This object is available in API version 32.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription of what this macro does. |
| FolderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReturns the ID of the folder that contains the macro. Available in API version 44.0 and later. |
| FolderName | TypestringPropertiesFilter, Nillable, SortDescriptionName of the folder that contains the macro. Available in API version 44.0 and later. |
| IsAlohaSupported | TypebooleanPropertiesDefaulted on create, FilterDescriptionSpecifies whether the macro is supported in Salesforce Classic. |
| IsLightningSupported | TypebooleanPropertiesDefaulted on create, FilterDescriptionSpecifies whether the macro is supported in Lightning Experience. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time that the macro record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time that the macro record was last viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the macro. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of the session record. |
| StartingContext | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe object the macro performs actions on. In Salesforce Classic, macros are supported on objects with both feed-based layouts and quick actions. In Lightning Experience, macros are supported on standard and custom objects that allow quick actions and have a customizable page layout. |

## Usage

A macro definition consists of a Macro object and several associated [MacroInstruction](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_macroinstruction.htm#sforce_api_objects_MacroInstruction "Represents an instruction in a macro. An instruction can specify the object that the macro interacts with, the context or publisher that the macro works within, the operation or action that the macro performs, and the target of the macro’s actions.") objects.

First, create a Macro object. Then, create MacroInstructions that specify objects, operations, conditions, and targets for the macro.

A macro contains an ordered list of macro instructions whose index field, sortOrder, is 0-based. If there’s an incorrect sequence of macro instructions, the macro doesn’t execute.

If you update a macro definition or add or remove instructions from a macro, make sure that the sortOrder field that defines the execution order is correct. To delete an entire macro definition, invoke the delete operation on the Macro object.

The table describes the supported macro instruction targets and how they relate to each other.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

Strings indicated by <brackets> are variables. The variable description describes the required type. For example, Tab.<EntityApiName> requires the entity name. If your custom entity name is MyCustomObject, your target API is Tab.MyCustomObject\_\_c.

If a macro instruction listed in the table supports an implicit operation, you can use that operation as a direct child instruction without explicitly specifying a target. The hyphens used in the table illustrate the hierarchical relationship between targets. A target isn't available if its parent isn’t.

| Target API Name | Supported Operations |
| --- | --- |
| Tab.<EntityApiName> | SELECT, CLOSE (implicit) |
| - QuickAction.<EntityApiName>.<QuickActionName> | SELECT, SUBMIT (implicit) |
| - - Field.<QATargetEntityApiName>.<FieldApiName> | SET |
| - - Field.<QATargetEntityApiName>.<MultilineTextFieldApiName>.cursor | INSERT |
| - - Field.<QATargetEntityApiName>.<SinglelineTextFieldApiName>.end | INSERT |
| - QuickAction.Case.Email | SELECT, SUBMIT (implicit) |
| - - Field.EmailMessage.<FieldApiName> | SET |
| - - Field.EmailMessage.<MultilineTextFieldApiName>.cursor | INSERT |
| - - Field.EmailMessage.<SinglelineTextFieldApiName>.end | INSERT |
| - - Field.EmailTemplate | SET |
| - SidebarCmp.Knowledge | SELECT |
| - - SearchAction.KnowledgeArticle | SELECT |
| - - - Field.SearchString | SET, INSERT |
| - - - Command.Search | SUBMIT |
| - - SearchResult.KnowledgeArticle.MostRecentItem | SELECT |
| - - - Command.AttachToRecord | SUBMIT |
| - - - Command.InsertToEmail | SUBMIT |
| - - - Command.AttachToEmailAsPDF | SUBMIT |

## Example

This example describes a macro that opens a quick action, sets some fields in the quick action, and submits the quick action.

```

```

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[MacroChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 48.0)

Change events are available for the object.

[MacroHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[MacroOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[MacroShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Code Examples

```
0. SELECT Tab.Case
1.   SELECT QuickAction.Case.Email
2.     SET Field.EmailMessage.Subject
3.     SET Field.EmailMessage.ToAddress
4.     INSERT Field.EmailMessage.HtmlBody.cursor
5.     SUBMIT
```

## Related Topics

- MacroInstruction (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_macroinstruction.htm)
- MacroChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- MacroHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- MacroOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- MacroShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
