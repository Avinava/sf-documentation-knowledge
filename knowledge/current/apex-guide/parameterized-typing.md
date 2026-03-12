---
title: "Parameterized Typing"
domain: apex-guide
topic: parameterized-typing
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:34.745Z
estimatedTokens: 171
keywords: [Parameterized, Typing, Apex, general, statically-typed, programming, language, means, users, specify, data, variable, Subtyping]
---

# Parameterized Typing

> Apex, in general, is a statically-typed programming language, which means users must
        specify the data type for a variable before that variable can be used.

# Parameterized Typing

Apex, in general, is a statically-typed programming language, which means users must specify the data type for a variable before that variable can be used.

This is legal in Apex:

```

```

This is not legal, if x has not been defined earlier:

```

```

Lists, maps and sets are parameterized in Apex: they take any data type Apex supports for them as an argument. That data type must be replaced with an actual data type upon construction of the list, map or set. For example:

```

```

## Subtyping with Parameterized Lists

In Apex, if type T is a subtype of U, then List<T> would be a subtype of List<U>. For example, the following is legal:

```

```

## Code Examples

```
Integer x = 1;
```

```apex
List<String> myList = new List<String>();
```

```apex
List<String> slst = new List<String> {'alpha', 'beta'};
List<Object> olst = slst;
```
