---
title: "Rule Macro And Macro Definition Attributes"
domain: bi-dev-guide-wave-templates
topic: rule-macro-and-macro-definition-attributes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.621Z
estimatedTokens: 384
keywords: [Rule, Macro, Definition, Attributes, collection, objects, define, logic, macros, their]
---

# Rule Macro And Macro Definition Attributes

> A rule macro object contains a collection of macro definition objects. Macro definition
  objects define the logic of macros and their return values.

# Rule Macro And Macro Definition Attributes

A rule macro object contains a collection of macro definition objects. Macro definition objects define the logic of macros and their return values.

Macro object attributes are as follows:

-   namespace: A unique string identifier (to the template) used to scope the collection of macro definitions.
-   definitions: Array of macro definition objects defined within the rule macro..

Macro definition object attributes are as follows:

-   name: The name of the macro.
-   description: A string that describes what the macro does.
-   parameters: An array of zero or more parameter names that the macro expects.
-   actions: An array of zero or more rule actions to perform as part of the macro.
-   returns: An expression or literal value to be returned from the macro.

## Macro Definition Parameters

The number of parameters passed in the macro function call must match the number of parameters defined in the macro. They’re passed in the order defined in the macro definition. You can use a maximum of 10 parameters per macro.

Parameters can be referenced in the body of the macro using standard expression syntax: ${p.<parameter\_name>}. Parameters can be referenced in any action that accepts expressions. Macros in actions support “path” statements so that expressions can be used for more dynamic JSON path handling. See Macro Examples.

Parameters are scoped to the execution of the macro call and any references to ${p.<parameter\_name>) fails outside the scope of the macro.
