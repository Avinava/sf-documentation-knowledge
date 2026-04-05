---
title: "Preference Rule"
domain: revenue-cloud
topic: preference-rule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-05T00:23:15.982Z
estimatedTokens: 170
keywords: [Preference, Rule, encourages, constraint, solver, satisfy, condition, doesn't, enforce, can't, met]
---

# Preference Rule

> The preference rule encourages the constraint solver to satisfy the condition, but
    doesn't enforce it if the condition can't be met.

# Preference Rule

The preference rule encourages the constraint solver to satisfy the condition, but doesn't enforce it if the condition can't be met.

The system tries to satisfy the condition in a preference rule, but if for some reason it can't, the system delivers a failure message to the user with Info severity.

The preference rule has this syntax.

```

```

A preference rule can include an optional explanation message for failure. The message is of Info severity, meaning it does not block the user from continuing with the action.

In this example, the preference rule encourages the user to mention the dBMax value as 90 and the requiredKW value as 500.

```

```

## Code Examples

```
preference(logic expression, string literal | string variable, argument, .., argument);
preference(logic expression, string literal | string variable);
preference(logic expression);
```

```
type GeneratorSet {
   int requiredKW = [101..10000];
   int dBMax = [0..140];
   preference(dBMax == 90, "90 preferred for dbMax");
   preference(requiredKW == 500,"50 preferred for requiredKW");
}
```
