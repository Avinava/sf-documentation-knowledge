---
title: "Dynamically Populating Label Parameters"
domain: lightning
topic: dynamically-populating-label-parameters
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.218Z
estimatedTokens: 306
keywords: [Dynamically, Populating, Label, Output, labels, expression, function]
---

# Dynamically Populating Label Parameters

> Output and update labels using the format()
        expression function.

# Dynamically Populating Label Parameters

Output and update labels using the format() expression function.

You can provide a string with placeholders, which are replaced by the substitution values at runtime.

Add as many parameters as you need. The parameters are numbered and are zero-based. For example, if you have three parameters, they will be named {0}, {1}, and {2}, and they will be substituted in the order they're specified.

Let's look at a custom label, $Label.mySection.myLabel, with a value of Hello {0} and {1}, where $Label is the global value provider that accesses your labels.

This expression dynamically populates the placeholder parameters with the values of the supplied attributes.

```

```

The label is automatically refreshed if one of the attribute values changes.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Always use the $Label global value provider to reference a label with placeholder parameters. You can't set a string with placeholder parameters as the first argument for format(). For example, this syntax doesn't work:

```

```

Use this expression instead.

```

```

where $Label.mySection.salutation is set to Hello {0}.

## Code Examples

```
{!format($Label.mySection.myLabel, v.attribute1, v.attribute2)}
```

```
{!format('Hello {0}', v.name)}
```

```
{!format($Label.mySection.salutation, v.name)}
```
