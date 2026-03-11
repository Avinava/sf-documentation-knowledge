---
title: "parseAsTemplate(templateMode)"
domain: apex-reference
topic: parseastemplatetemplatemode
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.487Z
keywords: [parseAsTemplate, templateMode, Optional., Indicates, whether, formula, expression, created, build, method, evaluated, template, mode., mode, values, interpolated, string, merge, field, syntax]
---

# parseAsTemplate(templateMode)

> Optional. Indicates whether a formula expression created with the build() method is evaluated in template mode. In template
    mode, values are interpolated into a string by using merge field syntax rather than by
    concatenating strings with the & operator. Merge
    fields use the syntax {!Object_Name.Field_Name}, where
    names are preceded by an exclamation mark and enclosed in curly braces.

### parseAsTemplate(templateMode)

Optional. Indicates whether a formula expression created with the build() method is evaluated in template mode. In template mode, values are interpolated into a string by using merge field syntax rather than by concatenating strings with the & operator. Merge fields use the syntax {!Object\_Name.Field\_Name}, where names are preceded by an exclamation mark and enclosed in curly braces.

#### Signature

public formulaeval.FormulaBuilder parseAsTemplate(Boolean templateMode)

#### Parameters

templateMode

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

If true, the formula expression is evaluated in template mode. The default value is false.

#### Return Value

Type: [FormulaEval.FormulaBuilder](#apex_class_formulaeval_FormulaBuilder "Contains methods to build and validate user-defined formulas.")

#### Usage

In template mode, the FormulaEval.FormulaReturnType value that’s set with withReturnType() must be STRING.

Template mode supports the same global variables, formula expressions, and context types as non-template mode, as long as they are correctly set using the FormulaBuilder methods.

#### Example

In this example, true is passed to parseAsTemplate(). The formula expression is evaluated in template mode, so the values of the name and website fields on the Account record are interpolated into the string using merge field syntax. The output is equal to the expression 'name & " (" & website & ")"'.

FormulaEval.FormulaInstance ff = Formula.builder() .withType(Schema.Account.class) .withReturnType(FormulaEval.FormulaReturnType.STRING) .withFormula('{!name} ({!website})') .parseAsTemplate(true) .build();