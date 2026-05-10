---
title: "Exclude Rule"
domain: revenue-cloud
topic: exclude-rule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-05-10T00:39:02.533Z
estimatedTokens: 286
keywords: [Exclude, Rule, automatically, remove, specific, relationship, certain, condition, met]
---

> The exclude rule is used to automatically remove a specific type in a relationship if a
    certain condition is met.

# Exclude Rule

The exclude rule is used to automatically remove a specific type in a relationship if a certain condition is met.

The exclude rule has this syntax.

```

```

The type must be leaf type, a node without children.

In the exclude rule, if a user sets attribute values in Product Catalog Management (PCM) that violate the rule requirements, the constraint engine overrides the user input in order to validate the constraint. This behavior is different than other constraints, in which the constraint engine doesn't override user input, but displays an error if user input violates the constraint. See How User Input Order Affects Constraint Engine Behavior section in [Logical Constraints](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_logical_constraints.htm "A logical constraint defines a statement that must hold true logically. The constraint can be any logical expression by using a logical operator.").

In this example, the exclude rule automatically removes the Heater\_120 heater from the type GeneratorSet if the Voltage3 is greater than or equal to 4160.

```

```

## Code Examples

```
exclude(logic expression, relationship[type],"Explanation message");
```

```
type GeneratorSet {
int Voltage3 = [120..13800];
relation Heaters : Heater_120 [1..3];
exclude(Voltage3 >= 4160, Heaters[Heater_120]);
}
type Heater_120 {}
```

## Related Topics

- Logical Constraints (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_logical_constraints.htm)
