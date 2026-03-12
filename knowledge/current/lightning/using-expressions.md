---
title: "Using Expressions"
domain: lightning
topic: using-expressions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.004Z
estimatedTokens: 1110
keywords: [Expressions, allow, calculations, access, data, component, markup, dynamic, output, passing, components, assigning, attributes]
---

# Using Expressions

> Expressions allow you to make calculations and access property values and other data
      within component markup. Use expressions for dynamic output or passing values into components
      by assigning them to attributes.

# Using Expressions

Expressions allow you to make calculations and access property values and other data within component markup. Use expressions for dynamic output or passing values into components by assigning them to attributes.

An expression is any set of literal values, variables, sub-expressions, or operators that can be resolved to a single value. Method calls are not allowed in expressions.

The expression syntax is: {!expression}

expression is a placeholder for the expression.

Anything inside the {! } delimiters is evaluated and dynamically replaced when the component is rendered or when the value is used by the component. Whitespace is ignored.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

If you're familiar with other languages, you may be tempted to read the ! as the “bang” operator, which negates boolean values in many programming languages. In the Aura Components programming model, {! is simply the delimiter used to begin an expression.

If you're familiar with Visualforce, this syntax will look familiar.

Here’s an example in component markup.

```

```

In this expression, v represents the view, which is the set of component attributes, and firstName is an attribute of the component. The expression outputs the firstName attribute value for the component.

The resulting value of an expression can be a primitive, such as an integer, string, or boolean. It can also be a JavaScript object, a component or collection, a controller method such as an action method, and other useful results.

There is a second expression syntax: {#expression}. For more details on the difference between the two forms of expression syntax, see [Data Binding Between Components](atlas.en-us.lightning.meta/lightning/expr_data_binding.htm "When you add a component in markup, you can use an expression to initialize attribute values in the component based on attribute values of the container component. There are two forms of expression syntax, which exhibit different behaviors for data binding between the components.").

Identifiers in an expression, such as attribute names accessed through the view, controller values, or labels, must start with a letter or underscore. They can also contain numbers or hyphens after the first character. For example, {!v.2count} is not valid, but {!v.count} is.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=lightning)

#### Important

Only use the {! } syntax in markup in .app or .cmp files. In JavaScript, use string syntax to evaluate an expression. For example:

```

```

If you want to escape {!, use this syntax:

```

```

This renders {! in plain text because the aura:text component never interprets {! as the start of an expression.

-   **[Dynamic Output in Expressions](atlas.en-us.lightning.meta/lightning/expr_dynamic_output.htm)**
    The simplest way to use expressions is to output dynamic values.
-   **[Conditional Expressions](atlas.en-us.lightning.meta/lightning/expr_conditional.htm)**
    Here are examples of conditional expressions using the ternary operator and the <aura:if> tag.
-   **[Data Binding Between Components](atlas.en-us.lightning.meta/lightning/expr_data_binding.htm)**
    When you add a component in markup, you can use an expression to initialize attribute values in the component based on attribute values of the container component. There are two forms of expression syntax, which exhibit different behaviors for data binding between the components.
-   **[Value Providers](atlas.en-us.lightning.meta/lightning/expr_source.htm)**
    Value providers are a way to access data. Value providers encapsulate related values together, similar to how an object encapsulates properties and methods.
-   **[Expression Evaluation](atlas.en-us.lightning.meta/lightning/expr_eval.htm)**
    Expressions are evaluated much the same way that expressions in JavaScript or other programming languages are evaluated.
-   **[Expression Operators Reference](atlas.en-us.lightning.meta/lightning/expr_operators.htm)**
    The expression language supports operators to enable you to create more complex expressions.
-   **[Expression Functions Reference](atlas.en-us.lightning.meta/lightning/expr_functions.htm)**
    The expression language contains math, string, array, comparison, boolean, and conditional functions. All functions are case-sensitive.

## Code Examples

```
{!v.firstName}
```

```
var theLabel = cmp.get("v.label");
```

```
<aura:text value="{!"/>
```

## Related Topics

- Data Binding Between Components (atlas.en-us.lightning.meta/lightning/expr_data_binding.htm)
- Dynamic Output in Expressions (atlas.en-us.lightning.meta/lightning/expr_dynamic_output.htm)
- Conditional Expressions (atlas.en-us.lightning.meta/lightning/expr_conditional.htm)
- Value Providers (atlas.en-us.lightning.meta/lightning/expr_source.htm)
- Expression Evaluation (atlas.en-us.lightning.meta/lightning/expr_eval.htm)
- Expression Operators Reference (atlas.en-us.lightning.meta/lightning/expr_operators.htm)
- Expression Functions Reference (atlas.en-us.lightning.meta/lightning/expr_functions.htm)
