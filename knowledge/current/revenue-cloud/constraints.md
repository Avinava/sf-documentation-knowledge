---
title: "Constraints"
domain: revenue-cloud
topic: constraints
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-05-10T00:39:02.491Z
estimatedTokens: 2677
keywords: [Constraints, enforce, conditions, variables, relationships, define, logical, restrictions, ensure, consistency, model, Logic, Operators, Arithmetic, Relational, Equality, Operator, Precedence, Constraint, Annotation]
---

> Constraints enforce rules and conditions on types, variables, and relationships. Use
    constraints to define logical restrictions and ensure consistency within the
    model.

# Constraints

Constraints enforce rules and conditions on types, variables, and relationships. Use constraints to define logical restrictions and ensure consistency within the model.

For more information about the supported constraints, see:

-   [Logical Constraints](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_logical_constraints.htm "A logical constraint defines a statement that must hold true logically. The constraint can be any logical expression by using a logical operator.")
-   [Table Constraints](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_table_constraints.htm "The table constraint in Constraint Modeling Language (CML) is used to define a set of valid combinations of values for two or more attributes. These combinations are specified in rows within the constraint definition.")
-   [Using Proxy Variables with Constraints on Types and Relationships](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_using_proxy_variables_constraints.htm "Use proxy variables to reference the variables of related types, including parent, root, and sibling types.")
-   [Group Type](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_group_type.htm "In Constraint Modeling Language (CML), a Group Type is used to logically containerize related components within a bundle configuration, primarily when product component groups are imported from Product Catalog Management (PCM).")
-   [Message Rule](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_message_rule.htm "The message rule displays a message to users based on specified conditions.")
-   [Preference Rule](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_preference_rule.htm "The preference rule encourages the constraint solver to satisfy the condition, but doesn't enforce it if the condition can't be met.")
-   [Require Rule](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_require_rule.htm "The require rule requires certain components to be included in a relationship when specified conditions are met.")
-   [Require Rule vs Constraint](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_require_rule_vs_constraint.htm "In Constraint Modeling Language (CML), constraint() and require() can both enforce behavior, but they operate differently: constraint focuses on logical consistency, require focuses on physical presence of products.")
-   [SetDefault Rule](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_setdefault_rule.htm "The setDefault rule allows component selection with attribute values and quantity, similar to the require rule.")
-   [Exclude Rule](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_exclude_rule.htm "The exclude rule is used to automatically remove a specific type in a relationship if a certain condition is met.")
-   [Action Rule](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_action_rule.htm "The CML Action Rule is defined using the rule() keyword. Its primary purpose is to execute a designated action, specified as a string literal, when a condition is met.")
-   [Hide/Disable Rule](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_hide_disable_rule.htm "The Hide or Disable Rule uses the rule() keyword to conditionally remove an element from the selection menu (hide) or preserve it in the menu while preventing user selection (disable).")
-   [Recommendation Rule](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_recommendation_rule.htm "The recommend keyword is used within a Constraint Modeling Language (CML) rule to display suggestions for related products in the Product Configurator. The rule defines the condition under which a specific product type or relation should be suggested to the user.")
-   [Set Product Selling Model in a Constraint](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_set_product_selling_model_constraint.htm "Use the productSellingModel tagname to write a constraint that sets the Product Selling Model (PSM) for a type. You can define a PSM as one time, time-deferred (subscription with end date), or evergreen (recurring subscription with no preset end date). The PSM is updated for new line items at runtime, based on the constraint.")

## Supported Logic Operators

These logic operators are supported in CML.

## Arithmetic Operators

-   Multiplication (\*)
-   Division (/)
-   Remainder (%)
-   Addition (+)
-   Subtraction (-)

## Relational Operators

-   Greater than (>)
-   Greater than or equal to (>=)
-   Less than (<)
-   Less than or equal to (<=)

## Equality Operators

-   Equal (==)
-   Not equal (!=)

## Logic Operators

-   Not (!)
-   And (&&)
-   XOR/Exclusive or (^)
-   Or (||)
-   Bi-conditional (<->)
-   Conditional (?:)
-   Implication (->)

## Operator Precedence

In resolving equations, operator precedence determines the order in which operations are performed. Operators in CML have precedence in this order:

-   Arithmetic operators have the first precedence.
-   Relational operators have the second precedence.
-   Equality operators have the third precedence.
-   Logic operators have a lower precedence than equality operators, in decreasing order as listed, with Implication having the lowest precedence.

## Constraint Annotation

Here are the details of abort, a constraint annotation.

| Annotation | Possible Values | Description |
| --- | --- | --- |
| abort | true, false | Specifies that, if this constraint fails, abort search and return false for configuration. |

-   **[Logical Constraints](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_logical_constraints.htm)**
    A logical constraint defines a statement that must hold true logically. The constraint can be any logical expression by using a logical operator.
-   **[Table Constraints](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_table_constraints.htm)**
    The table constraint in Constraint Modeling Language (CML) is used to define a set of valid combinations of values for two or more attributes. These combinations are specified in rows within the constraint definition.
-   **[Proxy Variables with Constraints on Types and Relationships](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_using_proxy_variables_constraints.htm)**
    Use proxy variables to reference the variables of related types, including parent, root, and sibling types.
-   **[Group Type](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_group_type.htm)**
    In Constraint Modeling Language (CML), a Group Type is used to logically containerize related components within a bundle configuration, primarily when product component groups are imported from Product Catalog Management (PCM).
-   **[Message Rule](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_message_rule.htm)**
    The message rule displays a message to users based on specified conditions.
-   **[Preference Rule](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_preference_rule.htm)**
    The preference rule encourages the constraint solver to satisfy the condition, but doesn't enforce it if the condition can't be met.
-   **[Require Rule](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_require_rule.htm)**
    The require rule requires certain components to be included in a relationship when specified conditions are met.
-   **[Require Rule vs Constraint](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_require_rule_vs_constraint.htm)**
    In Constraint Modeling Language (CML), constraint() and require() can both enforce behavior, but they operate differently: constraint focuses on logical consistency, require focuses on physical presence of products.
-   **[SetDefault Rule](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_setdefault_rule.htm)**
    The setDefault rule allows component selection with attribute values and quantity, similar to the require rule.
-   **[Exclude Rule](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_exclude_rule.htm)**
    The exclude rule is used to automatically remove a specific type in a relationship if a certain condition is met.
-   **[Action Rule](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_action_rule.htm)**
    The CML Action Rule is defined using the rule() keyword. Its primary purpose is to execute a designated action, specified as a string literal, when a condition is met.
-   **[Hide or Disable Rule](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_hide_disable_rule.htm)**
    The Hide or Disable Rule uses the rule() keyword to conditionally remove an element from the selection menu (hide) or preserve it in the menu while preventing user selection (disable).
-   **[Recommendation Rule](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_recommendation_rule.htm)**
    The recommend keyword is used within a Constraint Modeling Language (CML) rule to display suggestions for related products in the Product Configurator. The rule defines the condition under which a specific product type or relation should be suggested to the user.
-   **[Set Product Selling Model in a Constraint](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_set_product_selling_model_constraint.htm)**
    Use the productSellingModel tagname to write a constraint that sets the Product Selling Model (PSM) for a type. You can define a PSM as one time, time-deferred (subscription with end date), or evergreen (recurring subscription with no preset end date). The PSM is updated for new line items at runtime, based on the constraint.

## Related Topics

- Logical
            Constraints (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_logical_constraints.htm)
- Table
            Constraints (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_table_constraints.htm)
- Using Proxy Variables with Constraints on Types and Relationships (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_using_proxy_variables_constraints.htm)
- Group Type (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_group_type.htm)
- Message Rule (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_message_rule.htm)
- Preference Rule (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_preference_rule.htm)
- Require Rule (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_require_rule.htm)
- Require Rule vs Constraint (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_require_rule_vs_constraint.htm)
- SetDefault Rule (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_setdefault_rule.htm)
- Exclude Rule (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_exclude_rule.htm)
