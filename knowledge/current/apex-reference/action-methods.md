---
title: "Action Methods"
domain: apex-reference
topic: action-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:42.212Z
keywords: [Action, Methods, Returns, expression, evaluated, action, invoked., getExpression, Signature, Return, Value, invoke]
---

# Action Methods

> Returns the expression that is evaluated when the action
is invoked.

## Action Methods

The following are methods for Action. All are instance methods.

-   **[getExpression()](atlas.en-us.apexref.meta/apexref/apex_pages_action.htm#apex_ApexPages_Action_getExpression)**  
    Returns the expression that is evaluated when the action is invoked.
-   **[invoke()](atlas.en-us.apexref.meta/apexref/apex_pages_action.htm#apex_ApexPages_Action_invoke)**  
    Invokes the action.

### getExpression()

Returns the expression that is evaluated when the action is invoked.

#### Signature

public String getExpression()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### invoke()

Invokes the action.

#### Signature

public System.PageReference invoke()

#### Return Value

Type: [System.PageReference](atlas.en-us.apexref.meta/apexref/apex_system_pagereference.htm "A PageReference is a reference to an instantiation of a page. Among other attributes, PageReferences consist of a URL and a set of query parameter names and values.")