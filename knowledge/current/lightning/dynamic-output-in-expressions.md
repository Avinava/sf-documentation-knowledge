---
title: "Dynamic Output in Expressions"
domain: lightning
topic: dynamic-output-in-expressions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.958Z
estimatedTokens: 329
keywords: [Dynamic, Output, Expressions, simplest, way]
---

# Dynamic Output in Expressions

> The simplest way to use expressions is to output dynamic values.

# Dynamic Output in Expressions

The simplest way to use expressions is to output dynamic values.

Values used in the expression can be from component attributes, literal values, booleans, and so on. For example:

```

```

In this expression, v represents the view, which is the set of component attributes, and desc is an attribute of the component. The expression is simply outputting the desc attribute value for the component that contains this markup.

If you're including literal values in expressions, enclose text values within single quotes, such as {!'Some text'}.

Include numbers without quotes, for example, {!123}.

For booleans, use {!true} for true and {!false} for false.

#### See Also

-   [Component Attributes](atlas.en-us.lightning.meta/lightning/components_attributes.htm "Component attributes are like member variables on a class in Apex. They are typed fields that are set on a specific instance of a component, and can be referenced from within the component's markup using an expression syntax. Attributes enable you to make components more dynamic.")

-   [Value Providers](atlas.en-us.lightning.meta/lightning/expr_source.htm "Value providers are a way to access data. Value providers encapsulate related values together, similar to how an object encapsulates properties and methods.")

## Related Topics

- Component Attributes (atlas.en-us.lightning.meta/lightning/components_attributes.htm)
- Value Providers (atlas.en-us.lightning.meta/lightning/expr_source.htm)
