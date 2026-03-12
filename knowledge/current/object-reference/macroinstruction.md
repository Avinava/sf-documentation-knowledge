---
title: "MacroInstruction"
domain: object-reference
topic: macroinstruction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:12.643Z
estimatedTokens: 1416
keywords: [MacroInstruction, instruction, macro, specify, interacts, context, publisher, works, operation, action, performs, target, macro’s, actions, Calls]
---

# MacroInstruction

> Represents an instruction in a macro. An instruction can
				specify the object that the macro interacts with, the context or publisher that the
				macro works within, the operation or action that the macro performs, and the target
				of the macro’s actions.

# MacroInstruction

Represents an instruction in a macro. An instruction can specify the object that the macro interacts with, the context or publisher that the macro works within, the operation or action that the macro performs, and the target of the macro’s actions.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| MacroId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the macro that contains this instruction. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, SortDescriptionName of the instruction. |
| Operation | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe action that the macro instruction performs. Valid values are:SelectSetInsertSubmitCloseTo create macro instructions that execute conditionally, these values are available in API version 46.0 and later.IFELSEIFELSEENDIF |
| SortOrder | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionOrder of this instruction in the macro. |
| Target | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe object that’s the target of the operation. For example, the target for the active case tab (Tab.Case) or a quick action, like the Send Email action on the case object (QuickAction.Case.SendEmail).In Lightning Experience, macros are supported on standard and custom objects that allow quick actions and have a customizable page layout.In Salesforce Classic, macros are supported on objects with feed-based layouts and quick actions.You can specify relative dates and times for the following targets.DateTimeDateTimeDueDateBirthday |
| Value | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionValue of a field. If the operation is Select, then the value is null, because the operation selects the object on which the macro performs an action. An instruction can contain both a Value field and a ValueRecord field, but only one of these fields can have a value. The other field value must be null.To create relative dates and times, specify a valid Salesforce formula, prefaced by MacroFormula. For example, the following formula creates a date that is 1 day from now:MacroFormula:NOW() + 1You can’t edit custom relative formulas in the Macro Builder. |
| ValueRecord | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the value or record. The ValueRecord can be either a value or a record, but not both. An instruction can contain both a Value field and a ValueRecord field, but only one of these fields can have a value. The other field value must be null. |

## Usage

MacroInstructions can specify objects, operations, conditions, and targets. For example, a macro containing these instructions performs a quick action that sends an email.

```

```

You can create conditional macros using IF, ELSEIF, ELSE, and ENDIF as operations. In a conditional statement, the [ExpressionFilter](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_expressionfilter.htm "Represents a logical expression that’s used to control the execution of macro instructions. This object is available in API version 46.0 and later.") and [ExpressionFilterCriteria](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_expressionfiltercriteria.htm "Represents a condition in an expression that’s used to control the execution of macro instructions. This object is available in API version 46.0 and later.") objects are used to control which instructions execute. The ExpressionFilter object lets you define a logical expression with one or more conditions. It uses a child object, ExpressionFilterCriteria, to represent each condition that is evaluated.

For example, consider the following conditional statement and macro instructions.

```

```

The ExpressionFilter object includes a FilterConditionLogic field containing 1 AND 2, where 1 and 2 are ExpressionFilterCriteria objects. The SortOrder field in the ExpressionFilterCriteria object maps condition 1 to Case.Status EQUALS New, and condition 2 to Case.Origin EQUALS Phone. If the conditional statement evaluates to true, then the instructions in the IF block are executed; otherwise, the instructions in the ELSE block are executed.

Any number of macro instructions can be present inside an IF, ELSEIF, or ELSE block. In addition, conditions can be nested.

## Data Model

![The MacroInstruction data model.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi%2Fimages%2FSforce_macroinstruction.png&folder=object_reference)

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[MacroInstructionChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 48.0)

Change events are available for the object.

## Code Examples

```
Select Email QuickAction
      Set Subject…
      Set To…
      Set Body…
      Submit
```

```
IF (Case.Status EQUALS New) AND (Case.Origin EQUALS Phone)
      Select Email QuickAction
      Set Subject…
      Set To…
      Set Body…
      Submit
ELSE
      Select Update Case Detail
      Update Case Description…
      Submit
ENDIF
```

## Related Topics

- ExpressionFilter (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_expressionfilter.htm)
- ExpressionFilterCriteria (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_expressionfiltercriteria.htm)
- MacroInstructionChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
