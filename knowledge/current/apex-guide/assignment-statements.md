---
title: "Assignment Statements"
domain: apex-guide
topic: assignment-statements
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:43:48.011Z
keywords: [Assignment, Statements]
---

# Assignment Statements

# Assignment Statements

An assignment statement is any statement that places a value into a variable.

An assignment statement generally takes one of two forms:

```

```

In the forms above, \[LValue\] stands for any expression that can be placed on the left side of an assignment operator. These include:

-   A simple variable. For example:
    
    ```
    
    ```
    
-   A de-referenced list element. For example:
    
    ```
    
    ```
    
-   An sObject field reference that the context user has permission to edit. For example:
    
    ```
    
    ```
    

Assignment is always done by reference. For example:

```

```

Similarly, two lists can point at the same value in memory. For example:

```

```

In addition to \=, other valid assignment operators include +=, \*=, /=, |=, &=, ++, and \--. See [Expression Operators](atlas.en-us.apexcode.meta/apexcode/langCon_apex_expressions_operators_understanding.htm "Expressions can be joined to one another with operators to create compound expressions.").

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/langCon_apex_expressions.htm "Expressions and Operators")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/langCon_apex_rules_of_conversion.htm "Rules of Conversion")