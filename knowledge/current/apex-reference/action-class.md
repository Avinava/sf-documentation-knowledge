---
title: "Action Class"
domain: apex-reference
topic: action-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-05T00:23:53.212Z
estimatedTokens: 628
namespace: ApexPages
keywords: [Action, ApexPages.Action, Visualforce, custom, controller, extension, Usage, Instantiation, getExpression, invoke]
---

# Action Class

> You can use ApexPages.Action to create an
        action method that you can use in a Visualforce custom controller or controller
        extension.

**Namespace:** `ApexPages`

# Action Class

You can use ApexPages.Action to create an action method that you can use in a Visualforce custom controller or controller extension.

## Namespace

[ApexPages](atlas.en-us.apexref.meta/apexref/apex_namespace_ApexPages.htm "The ApexPages namespace provides classes used in Visualforce controllers.")

## Usage

For example, you could create a saveOver method on a controller extension that performs a custom save.

## Instantiation

The following code snippet illustrates how to instantiate a new ApexPages.Action object that uses the save action:

```

```

-   **[Action Constructors](atlas.en-us.apexref.meta/apexref/apex_pages_action.htm#apex_ApexPages_Action_constructors)**

-   **[Action Methods](atlas.en-us.apexref.meta/apexref/apex_pages_action.htm#apex_ApexPages_Action_methods)**


## Action Constructors

The following are constructors for Action.

-   **[Action(action)](atlas.en-us.apexref.meta/apexref/apex_pages_action.htm#apex_ApexPages_Action_ctor)**
    Creates a new instance of the ApexPages.Action class using the specified action.

### Action(action)

Creates a new instance of the ApexPages.Action class using the specified action.

#### Signature

public Action(String action)

#### Parameters

action

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The action.

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

## Code Examples

```
ApexPages.Action saveAction = new ApexPages.Action('{!save}');
```

## Related Topics

- ApexPages (atlas.en-us.apexref.meta/apexref/apex_namespace_ApexPages.htm)
- Action Constructors (atlas.en-us.apexref.meta/apexref/apex_pages_action.htm)
- Action Methods (atlas.en-us.apexref.meta/apexref/apex_pages_action.htm)
- Action(action) (atlas.en-us.apexref.meta/apexref/apex_pages_action.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- getExpression() (atlas.en-us.apexref.meta/apexref/apex_pages_action.htm)
- invoke() (atlas.en-us.apexref.meta/apexref/apex_pages_action.htm)
- System.PageReference (atlas.en-us.apexref.meta/apexref/apex_system_pagereference.htm)
