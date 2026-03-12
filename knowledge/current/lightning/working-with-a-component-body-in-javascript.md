---
title: "Working with a Component Body in JavaScript"
domain: lightning
topic: working-with-a-component-body-in-javascript
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.113Z
estimatedTokens: 396
keywords: [Working, Component, JavaScript, useful, common, patterns, component’s, Replace, Component's, Clear, Append, Prepend, Remove]
---

# Working with a Component Body in JavaScript

> These are useful and common patterns for working with a
component’s body in JavaScript.

# Working with a Component Body in JavaScript

These are useful and common patterns for working with a component’s body in JavaScript.

In these examples, cmp is a reference to a component in your JavaScript code. It’s usually easy to get a reference to a component in JavaScript code. Remember that the body attribute is an array of components, so you can use the JavaScript Array methods on it.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

When you use cmp.set("v.body", ...) to set the component body, you must explicitly include {!v.body} in your component markup.

## Replace a Component's Body

To replace the current value of a component’s body with another component:

```

```

## Clear a Component's Body

To clear or empty the current value of a component’s body:

```

```

## Append a Component to a Component's Body

To append a newCmp component to a component’s body:

```

```

## Prepend a Component to a Component's Body

To prepend a newCmp component to a component’s body:

```

```

## Remove a Component from a Component's Body

To remove an indexed entry from a component’s body:

```

```

#### See Also

-   [Component Body](atlas.en-us.lightning.meta/lightning/components_body.htm "The root-level tag of every component is <aura:component>. Every component inherits the body attribute from <aura:component>.")

-   [Working with Attribute Values in JavaScript](atlas.en-us.lightning.meta/lightning/js_attr_values.htm "These common patterns are useful for working with attribute values in JavaScript.")

## Code Examples

```
// newCmp is a reference to another component
cmp.set("v.body", newCmp);
```

```
cmp.set("v.body", []);
```

```
var body = cmp.get("v.body");
// newCmp is a reference to another component
body.push(newCmp);
cmp.set("v.body", body);
```

```
var body = cmp.get("v.body");
body.unshift(newCmp);
cmp.set("v.body", body);
```

```
var body = cmp.get("v.body");
// Index (3) is zero-based so remove the fourth component in the body
body.splice(3, 1);
cmp.set("v.body", body);
```

## Related Topics

- Component Body (atlas.en-us.lightning.meta/lightning/components_body.htm)
- Working with Attribute Values in JavaScript (atlas.en-us.lightning.meta/lightning/js_attr_values.htm)
