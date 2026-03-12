---
title: "ExpressionFilter"
domain: object-reference
topic: expressionfilter
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:09.843Z
estimatedTokens: 636
keywords: [ExpressionFilter, logical, expression, that’s, control, execution, macro, instructions, API, version, 46.0, later, Calls, Usage]
---

# ExpressionFilter

> Represents a logical expression that’s used to control the execution
         of macro instructions. This object is available in API version 46.0 and
      later.

# ExpressionFilter

Represents a logical expression that’s used to control the execution of macro instructions. This object is available in API version 46.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ContextId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The ID of the MacroInstruction object that contains the expression. |
| FilterConditionLogic | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionOptional. The filter conditions to use and the order in which to apply them. For example, ‘1 AND 2’ evaluates condition 1 and then condition 2. |
| FilterDescription | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionOptional. A description of the filter expression that helps to explain the logic to users. For example, ‘Applies to New cases.’ |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionOptional. A label for the expression. |

## Usage

The ExpressionFilter object is used with the IF and ELSEIF operations in a [MacroInstruction](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_macroinstruction.htm "Represents an instruction in a macro. An instruction can specify the object that the macro interacts with, the context or publisher that the macro works within, the operation or action that the macro performs, and the target of the macro’s actions."). It lets you specify a logical expression that determines whether macro instructions are executed. The object indicates whether any or all conditions must be true.

To represent the conditions that are evaluated, this object uses one or more [ExpressionFilterCriteria](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_expressionfiltercriteria.htm "Represents a condition in an expression that’s used to control the execution of macro instructions. This object is available in API version 46.0 and later.") child objects. The ExpressionFilter to be used with each criteria is specified in the ExpressionFilterCriteria’s ExpressionFilterId field.

For example, to represent the following conditional statement, the ExpressionFilter object specifies the FilterConditionLogic field as 1 AND 2, where 1 and 2 are ExpressionFilterCriteria objects. In this example, condition 1 is Case.Status EQUALS New, and condition 2 is Case.Origin EQUALS Phone.

```

```

## Code Examples

```
IF (Case.Status EQUALS New) AND (Case.Origin EQUALS Phone)
      Select Email QuickAction
      Set Subject…
      Set To…
      Set Body…
      Submit
ENDIF
```

## Related Topics

- MacroInstruction (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_macroinstruction.htm)
- ExpressionFilterCriteria (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_expressionfiltercriteria.htm)
