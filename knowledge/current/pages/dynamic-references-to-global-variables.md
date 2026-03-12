---
title: "Dynamic References to Global Variables"
domain: pages
topic: dynamic-references-to-global-variables
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.475Z
estimatedTokens: 247
keywords: [Dynamic, References, Variables, Visualforce, pages, bindings, their, markup, allow, access, current, user, organization, schema, data]
---

# Dynamic References to Global Variables

> Visualforce pages can use dynamic
   bindings to reference global variables in their markup. Global variables allow you to access
   information about the current user, your organization, and schema details about your data. The
   list of global variables is available in the Global Variables, Functi

# Dynamic References to Global Variables

Visualforce pages can use dynamic bindings to reference global variables in their markup. Global variables allow you to access information about the current user, your organization, and schema details about your data. The list of global variables is available in the [Global Variables, Functions, and Expression Operators appendix](atlas.en-us.pages.meta/pages/pages_variables.htm "Visualforce pages use the same expression language as formulas—that is, anything inside {! } is evaluated as an expression that can access values from records that are currently in context.").

Referencing a global variable is the same as referencing sObjects and Apex classes—you use the same basic pattern, where reference is a global variable:

```

```

#### See Also

-   [Global Variables](atlas.en-us.pages.meta/pages/pages_variables_global.htm "Use global variables to reference general information about the current user and your organization on a page.")

## Code Examples

```
reference[expression]
```

## Related Topics

- Global Variables, Functions, and Expression Operators appendix (atlas.en-us.pages.meta/pages/pages_variables.htm)
- Global Variables (atlas.en-us.pages.meta/pages/pages_variables_global.htm)
