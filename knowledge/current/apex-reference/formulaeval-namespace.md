---
title: "FormulaEval Namespace"
domain: apex-reference
topic: formulaeval-namespace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:42.173Z
keywords: [FormulaEval, Namespace]
---

# FormulaEval Namespace

# FormulaEval Namespace

The FormulaEval namespace provides classes and methods to evaluate dynamic formulas for SObjects and Apex objects. Use the methods to avoid unnecessary DML statements to recalculate formula field values or evaluate dynamic formula expressions.

When using a formula against an SObject or Apex object as the context object, the class methods or properties referenced by the formula must be global.

Account myAcc = new Account(Name='123'); FormulaEval.FormulaInstance ff = Formula.builder() .withType(Schema.Account.class) .withReturnType(FormulaEval.FormulaReturnType.STRING) .withFormula('name & " (" & website & ")"') .build(); //Use the list of field names returned by the getReferenced method to generate dynamic soql String fieldNameList = String.join(ff.getReferencedFields(),','); String queryStr = 'select ' + fieldNameList + ' from Account LIMIT 1'; //select name, website from Account Account s = Database.query(queryStr); system.debug(ff.evaluate(s));

For usage notes, see [Formula Evaluation in Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_formulaeval.htm "HTML (New Window)").

The following are the classes and enums in the FormulaEval namespace.

-   **[FormulaBuilder Class](atlas.en-us.apexref.meta/apexref/apex_class_formulaeval_FormulaBuilder.htm#apex_class_formulaeval_FormulaBuilder)**  
    Contains methods to build and validate user-defined formulas.
-   **[FormulaGlobal Enum](atlas.en-us.apexref.meta/apexref/apex_enum_formulaeval_FormulaGlobal.htm)**  
    Specifies a global variable that references data in your organization in the withGlobalVariables(formulaGlobals) method.
-   **[FormulaInstance Class](atlas.en-us.apexref.meta/apexref/apex_class_formulaeval_FormulaInstance.htm#apex_class_formulaeval_FormulaInstance)**  
    Contains a method to evaluate the formula instance.
-   **[FormulaReturnType Enum](atlas.en-us.apexref.meta/apexref/apex_enum_formulaeval_FormulaReturnType.htm)**  
    Specifies the return type for the withReturnType(returnType) method.