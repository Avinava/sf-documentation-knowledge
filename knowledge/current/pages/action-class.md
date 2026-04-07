---
title: "Action Class"
domain: pages
topic: action-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:38:48.415Z
estimatedTokens: 156
namespace: ApexPages
keywords: [Instantiation, Action, ApexPages.Action, Visualforce, controller, extension]
---

> You can use ApexPages.Action to create an
        action method that you can use in a Visualforce custom controller or controller
        extension.

**Namespace:** `ApexPages`

# Action Class

You can use ApexPages.Action to create an action method that you can use in a Visualforce custom controller or controller extension.

## Namespace

ApexPages

## Usage

For example, you could create a saveOver method on a controller extension that performs a custom save.

## Instantiation

The following code snippet illustrates how to instantiate a new ApexPages.Action object that uses the save action:

```

```

-   **[Action Constructors](atlas.en-us.pages.meta/pages/apex_ApexPages_Action_constructors.htm)**

-   **[Action Methods](atlas.en-us.pages.meta/pages/apex_ApexPages_Action_methods.htm)**

## Code Examples

```
ApexPages.Action saveAction = new ApexPages.Action('{!save}');
```

## Related Topics

- Action Constructors (atlas.en-us.pages.meta/pages/apex_ApexPages_Action_constructors.htm)
- Action Methods (atlas.en-us.pages.meta/pages/apex_ApexPages_Action_methods.htm)
