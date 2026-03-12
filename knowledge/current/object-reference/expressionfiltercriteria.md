---
title: "ExpressionFilterCriteria"
domain: object-reference
topic: expressionfiltercriteria
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:09.848Z
estimatedTokens: 672
keywords: [ExpressionFilterCriteria, condition, expression, that’s, control, execution, macro, instructions, API, version, 46.0, later, Calls, Usage]
---

# ExpressionFilterCriteria

> Represents a condition in an expression that’s used to control the
         execution of macro instructions. This object is available in API version 46.0 and
      later.

# ExpressionFilterCriteria

Represents a condition in an expression that’s used to control the execution of macro instructions. This object is available in API version 46.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ExpressionFilterId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The ID of the ExpressionFilter object that references this condition. |
| FilterTarget | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequired. The target object or field used in the condition. For example, to create a condition that applies to new cases, use Case.Status as the FilterTarget. |
| FilterTargetValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionOptional. The value that’s compared to the value of the FilterTarget. For example, to create a condition that applies to new cases, use New as the FilterTargetValue. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionOptional. A label for the condition. |
| Operation | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Specifies the operator used to compare the target field and the target value. For example, to create a condition that applies to new cases, use EQUALS for the Operation field, as in Case.Status EQUALS New.EQUALSNOTEQUALSCONTAINSNOTCONTAIN |
| SortOrder | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequired. The order in which the criteria are evaluated. |

## Usage

ExpressionFilterCriteria is a child object of the [ExpressionFilter](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_expressionfilter.htm "Represents a logical expression that’s used to control the execution of macro instructions. This object is available in API version 46.0 and later.") object. Use these objects with the IF and ELSEIF operations in a [MacroInstruction](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_macroinstruction.htm#sforce_api_objects_MacroInstruction "Represents an instruction in a macro. An instruction can specify the object that the macro interacts with, the context or publisher that the macro works within, the operation or action that the macro performs, and the target of the macro’s actions.") to control instruction execution. Each condition in a ExpressionFilterCriteria compares a target object or field to a value using a condition operator; for example, Case.Status EQUALS New.

## Related Topics

- ExpressionFilter (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_expressionfilter.htm)
- MacroInstruction (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_macroinstruction.htm)
