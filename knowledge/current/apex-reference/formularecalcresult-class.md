---
title: "FormulaRecalcResult Class"
domain: apex-reference
topic: formularecalcresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:21.176Z
estimatedTokens: 681
namespace: System
keywords: [FormulaRecalcResult, Formula.recalculateFormulas, method., Usage, Example, getErrors, getSObject, isSuccess]
---

# FormulaRecalcResult Class

> The return type of the Formula.recalculateFormulas method.

**Namespace:** `System`

# FormulaRecalcResult Class

The return type of the Formula.recalculateFormulas method.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

Indicates the result and status of recalculating formulas on a single sObject. Holds a reference to the sObject and a list of all the fields that were recalculated.

## Example

This example assumes that you have a formula field called divide\_\_c with formula “1 / LEN(Name).

```

```

-   **[FormulaRecalcResult Methods](atlas.en-us.apexref.meta/apexref/apex_class_System_FormulaRecalcResult.htm#apex_System_FormulaRecalcResult_methods)**


## FormulaRecalcResult Methods

The following are methods for FormulaRecalcResult.

-   **[getErrors()](atlas.en-us.apexref.meta/apexref/apex_class_System_FormulaRecalcResult.htm#apex_System_FormulaRecalcResult_getErrors)**
    If an error occurs during formula recalculation, an array of one or more database error objects, along with error codes and descriptions, is returned.
-   **[getSObject()](atlas.en-us.apexref.meta/apexref/apex_class_System_FormulaRecalcResult.htm#apex_System_FormulaRecalcResult_getSObject)**
    Returns the sObject with formulas recalculated.
-   **[isSuccess()](atlas.en-us.apexref.meta/apexref/apex_class_System_FormulaRecalcResult.htm#apex_System_FormulaRecalcResult_isSuccess)**
    Returns a Boolean value that is set to true if the formula recalculation process completed successfully; otherwise, it is set to false.

### getErrors()

If an error occurs during formula recalculation, an array of one or more database error objects, along with error codes and descriptions, is returned.

#### Signature

public List<System.FormulaRecalcFieldError> getErrors()

#### Return Value

Type: List<[FormulaRecalcFieldError Class](atlas.en-us.apexref.meta/apexref/apex_class_System_FormulaRecalcFieldError.htm#apex_class_System_FormulaRecalcFieldError "The return type of the FormulaRecalcResult.getErrors method.")\>

### getSObject()

Returns the sObject with formulas recalculated.

#### Signature

public SObject getSObject()

#### Return Value

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

### isSuccess()

Returns a Boolean value that is set to true if the formula recalculation process completed successfully; otherwise, it is set to false.

#### Signature

public Boolean isSuccess()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

## Code Examples

```apex
List<Account> accounts = [SELECT Name FROM Account WHERE Name='Acme'];
accounts[0].Name = '';
List<FormulaRecalcResult> results = Formula.recalculateFormulas(accounts);
FormulaRecalcResult result0 = results[0];
FormulaRecalcFieldError fieldError = result0.getErrors()[0];
System.debug(fieldError.getFieldName()); // 'divide'
System.debug(fieldError.getFieldError()); // 'Division by zero'
```

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- FormulaRecalcResult Methods (atlas.en-us.apexref.meta/apexref/apex_class_System_FormulaRecalcResult.htm)
- getErrors() (atlas.en-us.apexref.meta/apexref/apex_class_System_FormulaRecalcResult.htm)
- getSObject() (atlas.en-us.apexref.meta/apexref/apex_class_System_FormulaRecalcResult.htm)
- isSuccess() (atlas.en-us.apexref.meta/apexref/apex_class_System_FormulaRecalcResult.htm)
- FormulaRecalcFieldError Class (atlas.en-us.apexref.meta/apexref/apex_class_System_FormulaRecalcFieldError.htm)
- SObject (atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
