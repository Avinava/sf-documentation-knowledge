---
title: "Constraint Modeling Language (CML) Best Practices"
domain: revenue-cloud
topic: constraint-modeling-language-cml-best-practices
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-05-03T00:28:11.848Z
estimatedTokens: 2938
keywords: [Constraint, Modeling, Language, CML, Best, Practices, prevent, performance, degradation, unexpected, behaviors, engine, executes, code, follow, writing, Relationship, Cardinality, Specify, Smallest, Range, Decimals, Doubles, Consider, Impact, Scale, Variable, Domains, Keep, Small, Possible, Calculating, Put, Calculations, Inside, Constraints, Relationships, Combine, Reduce, Sequence, Annotation, Order, Execution, Configurable, Automatically, Add, Product, Define, Separate, Quantity, Attribute, Pricing, Configure, Child, Grandchild, Products, Parent, PCG, Group, Relations, Relation, Aggregates, Stabilize, Preferences, Staged, Variables, Dependent, Logic, Premature, Assignment]
---

> To prevent performance degradation or unexpected behaviors when the constraint engine
    executes CML code, follow these practices when writing code.

# Constraint Modeling Language (CML) Best Practices

To prevent performance degradation or unexpected behaviors when the constraint engine executes CML code, follow these practices when writing code.

For tips on troubleshooting, see [Debugging Constraint Modeling Language (CML)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_debugging_cml.htm "To debug constraint models and troubleshoot performance issues, enable debug logging in Apex and set the debug log level to FINE.").

## Relationship Cardinality: Specify the Smallest Range Required

In a relationship, cardinality is the quantity of instances of the same type. Specify the smallest required cardinality for a variable, to avoid testing unneeded combinations of values. If you specify a higher cardinality than required, or don't specify cardinality, the constraint engine tests more combinations, which impacts performance.

This example doesn't specify cardinality. The constraint engine tries to set a quantity with 1, 2, 3, all the way up to 9,999:

```

```

This example specifies minimum and maximum cardinality as 0 and 1, so the constraint engine sets the quantity to 1. The engine tests fewer combinations to find a solution.

```

```

## Decimals and Doubles: Consider the Impact of Scale on Performance

In a decimal or double, scale is the number of digits that follow the decimal point. Using decimals and doubles in expressions can cause performance problems due to the number of permutations.

In this example, myNumber is a double with a scale of 2. The value can be 0.00, 0.01, 0.02, all the way up to 2.99, which can impact constraint engine performance:

```

```

In this example, myNumber is an integer. The value can only be 0, 1, 2 or 3, which has less impact on constraint engine performance:

```

```

## Variable Domains: Keep Domains as Small as Possible

A variable domain is the set of all possible values that the variable can take. In this example, the variable color has a domain with three values:

```

```

The larger the domain, the more possible values for the variable, which means more combinations for the engine to test. A large domain can impact performance and lead to slower searches, errors, or unexpected behaviors.

## Calculating Values: Put Calculations Inside of Constraints

To calculate a value, put the calculation inside of a constraint, instead of in an inline expression.

For example, to calculate area, use this constraint:

```

```

Avoid this example, which calculates the area with an inline expression, and can impact performance:

```

```

## Relationships: Combine Relationships to Reduce Performance Impact

Creating multiple relationships on a type can impact performance. When possible, combine relationships to improve performance.

When possible, avoid this example, which includes separate relationships for Mouse and Keyboard, two accessories in a product bundle:

```

```

Follow this example, which uses one relationship for Accessories, which can include Mouse, Keyboard, and other accessories.

```

```

## Sequence: Use the Sequence Variable Annotation to Specify the Order of Execution

If a constraint model includes multiple attributes and relationships that should follow a certain order of execution, use the sequence variable annotation to specify the order. The constraint engine follows sequence designations in satisfying constraint requirements and resolving constraint violations.

In this example, for the Desktop type, the sequence annotation directs the constraint engine to set the default values for attributes in this order:

-   Display: sequence=1
-   Windows\_Processor: sequence=2
-   Display\_Size: sequence=3

```

```

For Desktop, Display is set to 1080p, Windows\_Processor to i5-CPU, and Display\_Size to 15 Inch.

The constraint specifies that a type with Display of 1080p and Display\_Size of 15 Inch must have a Windows\_Processor of i7-CPU.

```

```

The Windows\_Processor default value of i5-CPU for Desktop violates the constraint. In order to satisfy the constraint and resolve the violation, the constraint engine uses a different Display\_Size for Desktop, such as 24 Inch.

If the user manually updates Display\_Size for Desktop to 15 Inch in the Product Configurator, the constraint engine updates Windows\_Processor to i7-CPU to satisfy the constraint.

## Sequence and Configurable

Using the configurable property with the sequence variable affects how the solver handles attributes. When configurable is set to true, the user can set attribute values, and the solver doesn't override user input unless no other solution exists. When configurable is set to false, the solver sets attribute values.

In this example for type A, attribute1 is set to configurable = true. The user can set the value, and the solver doesn't override the user input unless no other solution exists. When the left-hand side of the rule is true, the constraint doesn't change attribute1 to "Enum3".

```

```

In this example for type B, attribute1 is set to configurable = false. The solver propagates values to satisfy constraints. When the left-hand side of the rule is true, the constraint automatically sets attribute1 to "Enum3".

```

```

Use mindful sequencing in CML to avoid backtracking by the solver when looking for a solution, as in this example.

```

```

## Automatically Add a Product: Define as a Separate Constraint

If you need to automatically add a product, and also set attributes on the product, define these procedures as separate constraints, as in this example.

```

```

Avoid this example, which automatically adds a product and sets attributes on the product, in the same constraint.

```

```

## Access Quantity in CML: Cardinality and Attribute Constraints

There are two ways to access quantity in CML:

A cardinality constraint creates or validates the presence of components. The constraint engine adds or removes instances to satisfy the conditions of the constraint.

An attribute constraint, such as lineItemQuantity or ItemEndQuantity, only reads or validates. The constraint engine validates the expression, but doesn't configure to satisfy the conditions of the constraint

For best performance, follow these guidelines:

-   Use a cardinality constraint whenever possible. Use lineItemQuantity or ItemEndQuantity only when a cardinality constraint can't meet the business need.
-   Treat lineItemQuantity and ItemEndQuantity as read-only. Use only in calculation or evaluation rules.
-   Keep scope in mind. When a product can have multiple instances, read lineItemQuantity or ItemEndQuantity per instance. Avoid reading the attribute at a parent or aggregate scope where it can be unbound or ambiguous.
-   Don't use lineItemQuantity or ItemEndQuantity to create components. Drive component creation by cardinality, not by attribute references.

Use constraint patterns similar to these examples. Do this.

```

```

Avoid this.

```

```

Do this.

```

```

Avoid this.

```

```

## Pricing Fields Not Supported in CML

Pricing fields, such as ListPrice, NetUnitPrice, and others, are not supported in CML and should not be used in constraint models. CML is designed to enforce configuration logic for products, not to perform pricing calculations. Attempting to reference or manipulate pricing fields in CML code leads to errors and unexpected behaviors in the constraint engine. Use dedicated pricing or calculation mechanisms outside of the CML constraint model for such functionality.

## Configure Child or Grandchild Products Based on Parent Product

Use the parent keyword to configure child and grandchild products dynamically based on the parent product. Control visibility or availability for the child or grandchild using the keyword.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=revenue_lifecycle_management_dev_guide)

#### Note

The parent keyword isn't supported with Group Type.

In this example, grandchild products are excluded based on which parent product they belong to.

```

```

## PCG Group Relations: Follow Order in Constraints

Order the Product Component Group (PCG) group relations in the way they appear in the constraints. Specify the groups used in the LHS of the constraints first, followed by those in the RHS.

In this example, the order of PCG groups is incorrect as Test1Group is part of the LHS and should be declared first.

```

```

This example shows the correct order of PCG groups, where Test1Group is declared first because it is part of the LHS.

```

```

## Relations Without PCG: Follow Order in Constraints

Order of relations matter for constraint evaluation. Specify the relations used in the LHS of the constraints first, followed by those in the RHS.

## Relation Aggregates: Stabilize Preferences Using Staged Variables

To improve solver stability and prevent backtracking, avoid referencing relation aggregates directly within preferences when the preferences also influence the same relation. Instead, stage these aggregates through local variables and state anchors.

In this example, the preferences and the calculated quantity depend directly on live relation aggregates.

```

```

When the solver evaluates preferences that depend directly on a relation's own aggregates, it creates a tight feedback loop:

Relation Quantity ⟶ Relation Aggregates ⟶ Preference Guards/Targets ⟶ Relation Quantity (loop repeats)

The feedback loop can cause the solver to oscillate or backtrack repeatedly before finding a stable solution.

This example shows the stabilized pattern. It introduces staged variables that act as anchors to separate the relation aggregates from the preference logic.

```

```

With this pattern, instead of solving everything simultaneously, the solver logic processes a pipeline:

Relation ⟶ Aggregates ⟶ Anchored State/Local Variables ⟶ Derived Calculations ⟶ Preferences

This process reduces oscillation and makes the solving path more deterministic.

## Dependent Logic: Use Configurable Variable Annotation to Prevent Premature Default Assignment

To ensure preference rules correctly set target attributes based on calculated values, use the @(configurable=false) annotation on the target attribute. This prevents a race condition where the engine assigns a default value during initialization before your calculation and preference rules execute.

When an inline expression is used, CML evaluates the model top-down. If the target attribute is declared before the inline calculation, the engine immediately assigns a default value to the attribute. As a result, any subsequent preference() rules are ignored because the engine treats the existing default value as an established selection and avoids overwriting it with the calculated value. Annotating the target attribute with @(configurable=false)) forces the engine to leave the variable as null until the calculation and preference rules are executed.

In this example, the engine processes ShippingMethod first and immediately assigns the default value "Standard" to it. Later, when the calculation for totalWeight returns a value high enough to require the “Freight” shipping method, the engine ignores this preference rule because the ShippingMethod variable is already bound to "Standard".

```

```

In this example, using the @(configurable=false) annotation ensures the ShippingMethod attribute remains as null until the calculation completes and the rules execute.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=revenue_lifecycle_management_dev_guide)

#### Note

Provide a second preference rule for the fallback condition (else) to ensure a value is always set.

```

```

## Code Examples

```
relation engine : Engine;
```

```
relation engine : Engine[0..1];
```

```
double(2) myNumber = [0..3];
```

```
int myNumber = [0..3];
```

```
string color = ["Red", "Yellow", "Green"];
```

## Related Topics

- Debugging Constraint Modeling Language (CML) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_debugging_cml.htm)
