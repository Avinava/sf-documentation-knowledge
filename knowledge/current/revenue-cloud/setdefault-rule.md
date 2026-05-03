---
title: "SetDefault Rule"
domain: revenue-cloud
topic: setdefault-rule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-05-03T00:28:12.055Z
estimatedTokens: 415
keywords: [SetDefault, Rule, selection, attribute, quantity, similar, require]
---

> The setDefault rule allows component selection with attribute values and quantity,
    similar to the require rule.

# SetDefault Rule

The setDefault rule allows component selection with attribute values and quantity, similar to the require rule.

Unlike the require rule, the setDefault rule applies a default configuration status and uses a triggering mechanism to control when the solver attempts to satisfy the rule. The setDefault rule can include an optional explanation message.

The setDefault has this syntax, similar to the require rule.

```

```

When the setDefault rule evaluates the condition:

-   If the condition is false, the solver ignores the expression and doesn't display a message, regardless of whether any part of the condition is changed.
-   If the condition is true, the solver performs one of these actions.
-   If any part of the condition is changed or the parent component is new, the solver attempts to satisfy the expression. If the solver can't satisfy the expression, an explanation message is displayed (if included).
-   If no part of the condition is changed, the solver evaluates the expression without attempting to satisfy it. If the expression evaluates to false, an explanation message is displayed (if included).

The key difference between the setDefault rule and the require rule is that the setDefault rule attempts to satisfy the expression only when a condition is changed. If no condition is changed, the setDefault rule performs a passive evaluation. The require rule always attempts to satisfy the expression when the condition is true.

In this scenario, we use the requiredKW attribute (the user's power requirement) as the condition and the Accessories relation as the target for the recommended cardinality.

```

```

## Code Examples

```
setDefault(condition, expression, message);
```

```
type Accessory;
type GeneratorSet  {
int requiredKW = [101..10000];
relation Accessories : Accessory[1..99];
/**
* @Title High Power Accessory Recommendation
* The setDefault constraint specifies that 2 accessory units are
* recommended when the required power capacity is greater than 2000 kW.
*/
setdefault(
requiredKW > 2000,
Accessories[Accessory] == 2,
"2 specialized accessory kits are recommended for power levels above 2000 kW"
);
}
```
