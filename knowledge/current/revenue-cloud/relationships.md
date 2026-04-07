---
title: "Relationships"
domain: revenue-cloud
topic: relationships
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:35:42.516Z
estimatedTokens: 1119
keywords: [Relationships, Constraint, Modeling, Language, CML, define, how, different, product, forming, structural, hierarchy, bundle, referred, ports, Definition, Omit, Unnecessary, Order, Keyword, Relationship, Ordering]
---

> Relationships in Constraint Modeling Language (CML) define how different product types
    are associated with each other, forming the structural hierarchy of a product bundle.
    Relationships are also referred to as ports.

# Relationships

Relationships in Constraint Modeling Language (CML) define how different product types are associated with each other, forming the structural hierarchy of a product bundle. Relationships are also referred to as ports.

Here is a comprehensive overview of relationships, their syntax, purpose, and key features, particularly utilizing examples relevant to the Generator Set model.

## Definition and Syntax of Relationships

Relationships define the one-to-many connections between a parent type (such as a bundle) and its component types (children).

-   Keyword: The keyword used is relation.
-   Syntax: A basic relationship declaration includes the relation name, the target type, and cardinality bounds.

    ```

    ```

-   Purpose: Relationships represent the product structure in a bundle. For example, the root product (GeneratorSet) has relationships with its components (MainAlternators, TemperatureSensors).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=revenue_lifecycle_management_dev_guide)

#### Note

Specifying the smallest required cardinality (quantity range) is a best practice to avoid unnecessary testing of value combinations, which improves performance.

## Omit Unnecessary Relationships

When using the [visual builder](https://help.salesforce.com/s/articleView?id=ind.product_configurator_use_the_visual_builder.htm&language=en_US "HTML (New Window)") or the [CML editor](https://help.salesforce.com/s/articleView?id=ind.product_configurator_use_the_cml_editor.htm&language=en_US "HTML (New Window)") to create a CML code for a bundle, the system by default imports all the relationships for the selected bundle from the structure defined in Product Catalog Management (PCM). In large and complex CML code, some of these relationships may not be relevant to any constraint and can be potentially omitted.

To enable import of a subset of bundle components, add this property at the top of the constraint model CML file.

```

```

If your PCM bundle contains many different relations but your CML code defines only one, the engine will validate the model but this often results in a configuration run-time failure. By setting allowMissingRelations = "true", you do not have to define every relation found in the PCM (such as GeneralModels in the Relationship Ordering example) if they do not require specific configuration logic in your CML file.

Here’s an example with allowMissingRelations property.

```

```

For more information, see [Constraints](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_constraints.htm "Constraints enforce rules and conditions on types, variables, and relationships. Use constraints to define logical restrictions and ensure consistency within the model.").

To ensure run-time stability without the allowMissingRelations property, you must manually define every single relation and type present in the PCM bundle, even if you don't intend to write logic for them. This creates large CML files with a high number of variables and components, which lead to performance degradation, and even timeout issues.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=revenue_lifecycle_management_dev_guide)

#### Note

This code isn’t recommended.

```

```

## Order Keyword

The order() keyword is used within a relation declaration to define the specific sequence in which the constraint engine evaluates and attempts to instantiate the child subtypes available in that relationship. This controls the prioritization of component selection.

## Example: Relationship Ordering

```

```

-   **[Relationship Variable Functions](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_relationship_variable_functions.htm)**
    CML variable functions are fundamental tools used to perform both aggregation (summarizing data from related components) and complex mathematical calculations on attribute values (variables) within a configuration model. These functions are crucial for enforcing dimensional validity and calculating derived attributes.
-   **[Relationship Annotations](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_relationship_annotations.htm)**
    You can annotate relationships by using annotations, such as configurable, allowNewInstance, closeRelation, sourceContextNode, and so on.

## Code Examples

```
relation <relation name> : <Target Type>[min..max] { /* Optional content */ }
```

```
property allowMissingRelations = "true";
```

```
// 1. Enable skipping of unneeded relations from the Product Catalog (PCM)
property allowMissingRelations = "true";

type ConciseGeneratorBundle  {
    // Define only the specific accessory needed for this logic
    relation enclosures : Enclosure;

    // A simple variable to trigger the logic
    int requiredKW = [100..5000];

    // Logic: High power requirements force a specific enclosure type
    // This omits other accessories like filters, batteries, and heaters [2, 3].
    constraint(requiredKW > 2000 -> enclosures[ReinforcedEnclosure] == 1, 
               "Power levels above 2000kW require a Reinforced Enclosure.");
}

// 2. Define the accessory and its specific subtype
type Enclosure ;
type ReinforcedEnclosure : Enclosure;
```

```
// EXPENSIVE FIX: Mirroring everything
type GeneratorSet {
    relation engineModels : EngineModel; // Unused in CML logic
    relation alternators : Alternator;    // Unused in CML logic
    relation fuelFilters : FuelFilter;    // Unused in CML logic
    relation starterMotors : StarterMotor; // Unused in CML logic
    relation enclosures : Enclosure;      // The only one we need
    // ... potentially 15+ more relations ...

    constraint(requiredKW > 2000 -> enclosures[ReinforcedEnclosure] == 1);
}
type Enclosure ;
type ReinforcedEnclosure : Enclosure;
```

```
// --- Component Subtypes (Specific Generator Models) ---
// Define a base type for generator models with a power attribute
type GeneralModel {
int powerKW = [0..3000]; // Explicit domain
}
// Specific subtypes that inherit from GeneralModel
type GeneralModel2500 : GeneralModel {
int powerKW = 2500;
}
type GeneralModel1750 : GeneralModel {
int powerKW = 1750;
}
type GeneralModel900 : GeneralModel {
int powerKW = 900;
}
// --- Parent Type (GeneratorSet) ---
type GeneratorSet {
// Required power defined by the parent (non-configurable)
@(configurable = false)
int requiredKW = [100..3000];
// Relation Declaration using order()
// Cardinality requires exactly one model to be selected.
// order() sets the selection priority (2500 KW model is checked before 1750 KW model).
relation GeneralModels : GeneralModel  order(GeneralModel2500, GeneralModel1750, GeneralModel900);
}
```

## Related Topics

- Constraints (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_constraints.htm)
- Relationship Variable Functions (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_relationship_variable_functions.htm)
- Relationship Annotations (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_relationship_annotations.htm)
