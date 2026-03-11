---
title: "Safe Navigation Operator"
domain: apex-guide
topic: safe-navigation-operator
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:48.007Z
keywords: [Safe, Navigation, Operator, Important, Note, Examples]
---

# Safe Navigation Operator

# Safe Navigation Operator

Use the safe navigation operator (?.) to replace explicit, sequential checks for null references. This operator short-circuits expressions that attempt to operate on a null value and returns null instead of throwing a NullPointerException.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexcode)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

If the left-hand-side of the chain expression evaluates to null, the right-hand-side isn’t evaluated. Use the safe navigation operator (?.) in method, variable, and property chaining. The part of the expression that isn’t evaluated can include variable references, method references, or array expressions.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

All Apex types are implicitly nullable and can hold a null value returned from the operator.

## Examples

-   This example first evaluates a, and returns null if a is null. Otherwise the return value is a.b.
    
    ```
    
    ```
    
-   This example returns null if a\[x\] evaluates to null. If a\[x\] doesn’t evaluate to null and aMethod() returns null, then this expression throws a NullPointerException.
    
    ```
    
    ```
    
-   This example returns null if a\[x\].aMethod() evaluates to null.
    
    ```
    
    ```
    
-   This example indicates that the type of the expression is the same whether the safe navigation operator is used in the expression or not.
    
    ```
    
    ```
    
-   This example shows a single statement replacing a block of code that checks for nulls.
    
    ```
    
    ```
    
    ```
    
    ```
    
-   This example shows a single-row SOQL query using the safe navigation operator.
    
    ```
    
    ```
    
    ```
    
    ```
    

| Allowed use-case | Example | More information |
| --- | --- | --- |
| Method or variable or parameter chains | aObject?.aMethod(); | Can be used as a top-level statement. |
| Using parentheses, for example in a cast. | ((T)a1?.b1)?.c1() | The operator skips the method chain up to the first closing parenthesis. By adding the operator after the parenthesis, the code safeguards the whole expression. If the operator is used elsewhere, and not after the parenthesis, the whole cast expression isn’t be safeguarded. For example, the behavior of//Incorrect use of safe navigation operator ((T)a1?.b1).c1()is equivalent to:T ref = null; if (a1 != null) { ref = (T)a1.b1; } result = ref.c1(); |
| SObject chaining | String s = contact.Account?.BillingCity; | An SObject expression evaluates to null when the relationship is null. The behavior is equivalent to String s = contact.Account.BillingCity. |
| SOQL Queries | String s = [SELECT LastName FROM Contact]?.LastName; | If the SOQL query returns no objects, then the expression evaluates to null. The behavior is equivalent to:List<Contact> contacts = [SELECT LastName FROM Contact];  String s;  if (contacts.size() == 0) {     s = null; // New behavior when using Safe Navigation. Earlier, this would throw an exception. }  else if (contacts.size() == 1) {     s = contacts.get(0).LastName; }  else { // contacts.size() > 1 throw new QueryException(...); } |

You can’t use the Safe Navigation Operator in certain cases. Attempting to use the operator in these ways causes an error during compilation:

-   Types and static expressions with dots. For example:
    -   Namespaces
    -   {Namespace}.{Class}
    -   Trigger.new
    -   Flow.interview.{flowName}
    -   {Type}.class
-   Static variable access, method calls, and expressions. For example:
    -   AClass.AStaticMethodCall()
    -   AClass.AStaticVariable
    -   String.format('{0}', 'hello world')
    -   Page.{pageName}
-   Assignable expressions. For example:
    -   foo?.bar = 42;
    -   ++foo?.bar;
-   SOQL bind expressions. For example:
    
    ```
    
    ```
    
-   With addError() on SObject scalar fields. For example:
    
    ```
    
    ```
    
    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)
    
    #### Note
    
    You can use the operator with addError() on SObjects, including lookup and master-detail fields.