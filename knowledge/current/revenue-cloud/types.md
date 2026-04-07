---
title: "Types"
domain: revenue-cloud
topic: types
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:35:42.572Z
estimatedTokens: 790
keywords: [Constraint, Modeling, Language, CML, define, represent, entities, model, foundational, building, blocks, encapsulates, relationships, entity, Generic, Structure, Basic, Declaration, Variables]
---

> In Constraint Modeling Language (CML), you define types to represent entities or
    objects in the model. Types are the foundational building blocks of CML. A type encapsulates the
    property, relationships, constraint, and rules for the entity.

# Types

In Constraint Modeling Language (CML), you define types to represent entities or objects in the model. Types are the foundational building blocks of CML. A type encapsulates the property, relationships, constraint, and rules for the entity.

A type is similar to a class in object-oriented programming. You can define relationships that represent associations between different types. See [Relationships](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_relationships.htm "Relationships in Constraint Modeling Language (CML) define how different product types are associated with each other, forming the structural hierarchy of a product bundle. Relationships are also referred to as ports.").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=revenue_lifecycle_management_dev_guide)

#### Note

To define a constraint for a child product in a bundle, you must include the entire bundle in the constraint model. For example, if you define a constraint for a laptop, and the laptop is a child product in the Laptop Pro Bundle, you must include the Laptop Pro Bundle in the constraint model for the constraint on the laptop to run.

## Generic Structure of a Type

This table explains the generic structure of types with examples.

| Element | Purpose | Example |
| --- | --- | --- |
| Declaration | Defines the entity name, optionally preceded by annotations and optionally followed by inheritance, if applicable. | type Product {}Or optionally: @annotation_name("annotation parameters") type Product: BaseProduct {} |
| Variables (Attributes) | Defines the properties or characteristics of the entity, including data type and domain. | int requiredKW = [101..10000]; string color = ["Red", "Blue"]; |
| Relations | Defines one-to-many associations with other types, specifying cardinality (the quantity range) and optionally, the configuration order. | relation items : LineItem[1..10] {} |
| Constraints and Rules | Enforces business logic and restrictions that must be satisfied by the entity's variables and relationships. | constraint(condition); require(condition, items [type]); |

## Example: Basic Type Declaration with Variables

This example shows the declaration of the main GeneratorSet type. It defines several core attributes (variables) that characterize the product.

```

```

-   **[Type Hierarchies](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_type_hierarchies.htm)**
    Constraint Modeling Language (CML) supports inheritance and overriding, which allow you to create hierarchies between types. By establishing these hierarchies, constraint models become more modular and efficient.
-   **[Type Annotations](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_type_annotations.htm)**
    You can annotate types to add information. Type annotations are metadata applied to a type declaration to provide instructions to the constraint engine regarding how instances of that type should be handled, instantiated, or used in the configuration structure.

## Code Examples

```
type GeneratorSet{
// Declaration only (inherits LineItem properties)
// Attributes with explicit domains
int requiredKW = [101..10000];
string Voltage = ["220/380", "240/416", "255/440", "277/480", "347/600", "2400/4160", "7200/12470", "7621/13200", "7976/13800];
string DutyRating = ["Prime Power (PRP)", "Continuous Power (COP)", "Data Center Continuous (DCC)", "Emergency Standby Power (ESP)"];
}
```

## Related Topics

- Relationships (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_relationships.htm)
- Type Hierarchies (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_type_hierarchies.htm)
- Type Annotations (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_type_annotations.htm)
