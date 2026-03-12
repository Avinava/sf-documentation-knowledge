---
title: "Formula Class"
domain: apex-reference
topic: formula-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:21.615Z
estimatedTokens: 937
namespace: System
keywords: [Formula, Updates, recalculates, input, SObjects, Usage, builder, recalculateFormulas]
---

# Formula Class

> Updates (recalculates) all formula fields on the input
    SObjects

**Namespace:** `System`

# Formula Class

Contains methods to get a builder for creating a formula instance and to update all formula fields on the input SObjects.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

Use the Formula class in conjunction with the [FormulaBuilder](atlas.en-us.apexref.meta/apexref/apex_class_formulaeval_FormulaBuilder.htm#apex_class_formulaeval_FormulaBuilder "Contains methods to build and validate user-defined formulas.") and [FormulaInstance](atlas.en-us.apexref.meta/apexref/apex_class_formulaeval_FormulaInstance.htm#apex_class_formulaeval_FormulaInstance "Contains a method to evaluate the formula instance.") classes in the [FormulaEval](atlas.en-us.apexref.meta/apexref/apex_namespace_formulaeval.htm "The FormulaEval namespace provides classes and methods to evaluate dynamic formulas for SObjects and Apex objects. Use the methods to avoid unnecessary DML statements to recalculate formula field values or evaluate dynamic formula expressions.") namespace.

See [Formula Evaluation in Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_formulaeval.htm "HTML (New Window)").

## Example

This example creates a formula instance using Formula.builder() and the [FormulaBuilder](atlas.en-us.apexref.meta/apexref/apex_class_formulaeval_FormulaBuilder.htm#apex_class_formulaeval_FormulaBuilder "Contains methods to build and validate user-defined formulas.") methods.

```

```

-   **[Formula Methods](atlas.en-us.apexref.meta/apexref/apex_class_System_Formula.htm#apex_System_Formula_methods)**


## Formula Methods

The following are methods for Formula.

-   **[builder()](atlas.en-us.apexref.meta/apexref/apex_class_System_Formula.htm#apex_System_Formula_builder)**
    Creates an instance of FormulaBuilder for configuring the formula with formula expression, context type, and output data type as inputs.
-   **[recalculateFormulas(sobjects)](atlas.en-us.apexref.meta/apexref/apex_class_System_Formula.htm#apex_System_Formula_recalculateFormulas)**
    Updates (recalculates) all formula fields on the input SObjects.

### builder()

Creates an instance of FormulaBuilder for configuring the formula with formula expression, context type, and output data type as inputs.

#### Signature

public static formulaeval.FormulaBuilder builder()

#### Return Value

Type: [FormulaEval.FormulaBuilder](atlas.en-us.apexref.meta/apexref/apex_class_formulaeval_FormulaBuilder.htm#apex_class_formulaeval_FormulaBuilder "Contains methods to build and validate user-defined formulas.")

### recalculateFormulas(sobjects)

Updates (recalculates) all formula fields on the input SObjects.

#### Signature

public static List<System.FormulaRecalcResult> recalculateFormulas(List<SObject> sobjects)

#### Parameters

sobjects

Type: List<[SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")\>

List of sObjects whose formula fields are to be recalculated.

#### Return Value

Type: List<[FormulaRecalcResult Class](atlas.en-us.apexref.meta/apexref/apex_class_System_FormulaRecalcResult.htm#apex_class_System_FormulaRecalcResult "The return type of the Formula.recalculateFormulas method.")\>

#### Usage

Recalculate formula fields on new or queried SObjects. If all data is present on the SObjects, SOQL limits are not affected. If the data required to evaluate a formula field is missing, that data is retrieved and limits are changed accordingly.

The new formula values are stored in the SObjects themselves and overwrite previous values of formula fields.

#### Example

```

```

## Code Examples

```
FormulaEval.FormulaInstance ff = Formula.builder()
    .withType(Account.SObjectType)
    .withReturnType(FormulaEval.FormulaReturnType.STRING)
    .withFormula('{!name} ({!website})')
    .parseAsTemplate(true)
    .build();
```

```apex
Account a = new Account();
a.Name = 'Salesforce';
a.BillingCity = 'San Francisco';
List<Account> accounts = new List<Account>{a};

List<FormulaRecalcResult> results = Formula.recalculateFormulas(accounts);
System.assert(results[0].isSuccess());
// Option 1
System.debug('New value: ' + accounts[0].get('My_Formula_Field__c'));
// Option 2
System.debug('New value: ' + results[0].getSObject().get(‘My_Formula_Field__c’));
```

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- FormulaBuilder (atlas.en-us.apexref.meta/apexref/apex_class_formulaeval_FormulaBuilder.htm)
- FormulaInstance (atlas.en-us.apexref.meta/apexref/apex_class_formulaeval_FormulaInstance.htm)
- FormulaEval (atlas.en-us.apexref.meta/apexref/apex_namespace_formulaeval.htm)
- Formula Methods (atlas.en-us.apexref.meta/apexref/apex_class_System_Formula.htm)
- builder() (atlas.en-us.apexref.meta/apexref/apex_class_System_Formula.htm)
- recalculateFormulas(sobjects) (atlas.en-us.apexref.meta/apexref/apex_class_System_Formula.htm)
- FormulaEval.FormulaBuilder (atlas.en-us.apexref.meta/apexref/apex_class_formulaeval_FormulaBuilder.htm)
- SObject (atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm)
- FormulaRecalcResult Class (atlas.en-us.apexref.meta/apexref/apex_class_System_FormulaRecalcResult.htm)
