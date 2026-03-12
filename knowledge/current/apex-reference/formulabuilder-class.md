---
title: "FormulaBuilder Class"
domain: apex-reference
topic: formulabuilder-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:22.554Z
estimatedTokens: 2473
namespace: FormulaEval
keywords: [FormulaBuilder, Contains, build, validate, user-defined, formulas., Usage, parseAsTemplate, templateMode, Example, treatNumericNullAsZero, isNumericNullZero, withFormula, formulaText, withGlobalVariables, formulaGlobals, withReturnType, returnType, withType, contextType]
---

# FormulaBuilder Class

> Contains methods to build and validate user-defined formulas.

**Namespace:** `FormulaEval`

# FormulaBuilder Class

Contains methods to build and validate user-defined formulas.

## Namespace

[FormulaEval](atlas.en-us.apexref.meta/apexref/apex_namespace_formulaeval.htm "The FormulaEval namespace provides classes and methods to evaluate dynamic formulas for SObjects and Apex objects. Use the methods to avoid unnecessary DML statements to recalculate formula field values or evaluate dynamic formula expressions.")

## Usage

The context type that corresponds to the Apex class used in the builder withType() method must be a global, user-defined Apex class. Any fields or properties that the formula references must also be global.

-   **[FormulaBuilder Methods](atlas.en-us.apexref.meta/apexref/apex_class_formulaeval_FormulaBuilder.htm#apex_formulaeval_FormulaBuilder_methods)**


## FormulaBuilder Methods

The following are methods for FormulaBuilder.

-   **[build()](atlas.en-us.apexref.meta/apexref/apex_class_formulaeval_FormulaBuilder.htm#apex_formulaeval_FormulaBuilder_build)**
    Validates and returns the formula instance created using the FormulaBuilder methods.
-   **[parseAsTemplate(templateMode)](atlas.en-us.apexref.meta/apexref/apex_class_formulaeval_FormulaBuilder.htm#apex_formulaeval_FormulaBuilder_parseAsTemplate)**
    Optional. Indicates whether a formula expression created with the build() method is evaluated in template mode. In template mode, values are interpolated into a string by using merge field syntax rather than by concatenating strings with the & operator. Merge fields use the syntax {!Object\_Name.Field\_Name}, where names are preceded by an exclamation mark and enclosed in curly braces.
-   **[treatNumericNullAsZero(isNumericNullZero)](atlas.en-us.apexref.meta/apexref/apex_class_formulaeval_FormulaBuilder.htm#apex_formulaeval_FormulaBuilder_treatNumericNullAsZero)**
    Optional. Indicates whether a null for a numeric data type is treated as zero while evaluating the formula with the build() method.
-   **[withFormula(formulaText)](atlas.en-us.apexref.meta/apexref/apex_class_formulaeval_FormulaBuilder.htm#apex_formulaeval_FormulaBuilder_withFormula)**
    Required. Sets the formula expression that the build() method uses to create the formula instance.
-   **[withGlobalVariables(formulaGlobals)](atlas.en-us.apexref.meta/apexref/apex_class_formulaeval_FormulaBuilder.htm#apex_formulaeval_FormulaBuilder_withGlobalVariables)**
    Optional. Sets the list of global variables that can be referenced in the formula expression created with the build() method.
-   **[withReturnType(returnType)](atlas.en-us.apexref.meta/apexref/apex_class_formulaeval_FormulaBuilder.htm#apex_formulaeval_FormulaBuilder_withReturnType)**
    Required. Sets the formula output data type for the formula instance created with the build() method.
-   **[withType(contextType)](atlas.en-us.apexref.meta/apexref/apex_class_formulaeval_FormulaBuilder.htm#apex_formulaeval_FormulaBuilder_withType_2)**
    Sets the Apex type that corresponds to the Apex class used with the build() method.
-   **[withType(contextType)](atlas.en-us.apexref.meta/apexref/apex_class_formulaeval_FormulaBuilder.htm#apex_formulaeval_FormulaBuilder_withType)**
    Sets the Apex type that corresponds to the Apex class used with the build() method to SObject type.

### build()

Validates and returns the formula instance created using the FormulaBuilder methods.

#### Signature

public FormulaEval.FormulaInstance build()

#### Return Value

Type: [FormulaEval.FormulaInstance](atlas.en-us.apexref.meta/apexref/apex_class_formulaeval_FormulaInstance.htm#apex_class_formulaeval_FormulaInstance "Contains a method to evaluate the formula instance.")

Returns an instance of the FormulaInstance object. If the formula validation such as field references, functions, or syntax, fails, the method throws a FormulaValidationException exception.

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

### treatNumericNullAsZero(isNumericNullZero)

Optional. Indicates whether a null for a numeric data type is treated as zero while evaluating the formula with the build() method.

#### Signature

public FormulaEval.FormulaBuilder treatNumericNullAsZero(Boolean isNumericNullZero)

#### Parameters

isNumericNullZero

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

If true, null for numeric is treated as zero. The default value is false.

#### Return Value

Type: [FormulaEval.FormulaBuilder](#apex_class_formulaeval_FormulaBuilder "Contains methods to build and validate user-defined formulas.")

### withFormula(formulaText)

Required. Sets the formula expression that the build() method uses to create the formula instance.

#### Signature

public FormulaEval.FormulaBuilder withFormula(String formulaText)

#### Parameters

formulaText

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [FormulaEval.FormulaBuilder](#apex_class_formulaeval_FormulaBuilder "Contains methods to build and validate user-defined formulas.")

### withGlobalVariables(formulaGlobals)

Optional. Sets the list of global variables that can be referenced in the formula expression created with the build() method.

#### Signature

public FormulaEval.FormulaBuilder withGlobalVariables(List<formulaeval.FormulaGlobal> formulaGlobals)

#### Parameters

formulaGlobals

Type: List<FormulaEval.[FormulaGlobal](atlas.en-us.apexref.meta/apexref/apex_enum_formulaeval_FormulaGlobal.htm "Specifies a global variable that references data in your organization in the withGlobalVariables(formulaGlobals) method.")\>

Uses values from the FormulaGlobal enum.

#### Return Value

Type: [FormulaEval.FormulaBuilder](#apex_class_formulaeval_FormulaBuilder "Contains methods to build and validate user-defined formulas.")

### withReturnType(returnType)

Required. Sets the formula output data type for the formula instance created with the build() method.

#### Signature

public FormulaEval.FormulaBuilder withReturnType(formulaeval.FormulaReturnType returnType)

#### Parameters

returnType

Type: [FormulaEval.FormulaReturnType](atlas.en-us.apexref.meta/apexref/apex_enum_formulaeval_FormulaReturnType.htm "Specifies the return type for the withReturnType(returnType) method.")

Uses values from the FormulaReturnType enum.

#### Return Value

Type: [FormulaEval.FormulaBuilder](#apex_class_formulaeval_FormulaBuilder "Contains methods to build and validate user-defined formulas.")

### withType(contextType)

Sets the Apex type that corresponds to the Apex class used with the build() method.

#### Signature

public formulaeval.FormulaBuilder withType(System.Type contextType)

#### Parameters

contextType

Type: [System.Type](atlas.en-us.apexref.meta/apexref/apex_methods_system_type.htm#apex_methods_system_type "Contains methods for getting the Apex type that corresponds to an Apex class and for instantiating new types.")

An instance of the Apex class type.

#### Return Value

Type: [FormulaEval.FormulaBuilder](#apex_class_formulaeval_FormulaBuilder "Contains methods to build and validate user-defined formulas.")

### withType(contextType)

Sets the Apex type that corresponds to the Apex class used with the build() method to SObject type.

#### Signature

public formulaeval.FormulaBuilder withType(Schema.SObjectType contextSObjectType)

#### Parameters

contextSObjectType

Type: [Schema.SObjectType](atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectType.htm#apex_class_Schema_SObjectType "A Schema.sObjectType object is returned from the field describe result using the getReferenceTo method, or from the sObject describe result using the getSObjectType method.")

An instance of the SObject type.

#### Return Value

Type: [FormulaEval.FormulaBuilder](#apex_class_formulaeval_FormulaBuilder "Contains methods to build and validate user-defined formulas.")

#### Example

This example uses an SObject type as an input in the withType() method to build and evaluate a formula.

```

```

## Related Topics

- FormulaEval (atlas.en-us.apexref.meta/apexref/apex_namespace_formulaeval.htm)
- FormulaBuilder Methods (atlas.en-us.apexref.meta/apexref/apex_class_formulaeval_FormulaBuilder.htm)
- build() (atlas.en-us.apexref.meta/apexref/apex_class_formulaeval_FormulaBuilder.htm)
- parseAsTemplate(templateMode) (atlas.en-us.apexref.meta/apexref/apex_class_formulaeval_FormulaBuilder.htm)
- treatNumericNullAsZero(isNumericNullZero) (atlas.en-us.apexref.meta/apexref/apex_class_formulaeval_FormulaBuilder.htm)
- withFormula(formulaText) (atlas.en-us.apexref.meta/apexref/apex_class_formulaeval_FormulaBuilder.htm)
- withGlobalVariables(formulaGlobals) (atlas.en-us.apexref.meta/apexref/apex_class_formulaeval_FormulaBuilder.htm)
- withReturnType(returnType) (atlas.en-us.apexref.meta/apexref/apex_class_formulaeval_FormulaBuilder.htm)
- withType(contextType) (atlas.en-us.apexref.meta/apexref/apex_class_formulaeval_FormulaBuilder.htm)
- FormulaEval.FormulaInstance (atlas.en-us.apexref.meta/apexref/apex_class_formulaeval_FormulaInstance.htm)
