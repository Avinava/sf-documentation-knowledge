---
title: "Constraint Modeling Language"
domain: revenue-cloud
topic: constraint-modeling-language
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-05-10T00:39:02.872Z
estimatedTokens: 1452
keywords: [Constraint, Modeling, Language, CML, domain-specific, models, complex, systems, product, configuration, describe, real-world, entities, their, relationships]
---

> Constraint Modeling Language (CML) is a domain-specific language that defines models
    for complex systems. For product configuration, constraint models describe real-world entities
    and their relationships to each other.

# Constraint Modeling Language

Constraint Modeling Language (CML) is a domain-specific language that defines models for complex systems. For product configuration, constraint models describe real-world entities and their relationships to each other.

Constraint models enforce business logic declaratively, without the need for extensive code in a general-purpose programming language. In Product Configurator, a product designers or admin create a constraint model in CML, then Constraint Rules Engine compiles the CML code. The constraint model enforces requirements in a product configuration to comply with the specified constraints.

To build a constraint model in CML, use this basic workflow.

-   Create global properties and settings that are header-level declarations in CML that define the foundational, fixed values for the entire constraint model. They’re crucial for setting up the core configuration environment and ensuring reusability across the model.
-   Create variables to define the properties or characteristics of a type. Variables can hold different kinds of data, such as strings, numbers, or lists, and can be calculated from other variables and values. In Revenue Cloud, variables represent product fields, product attributes, and sometimes context tags. See [Create a Context Definition](https://help.salesforce.com/s/articleView?id=ind.context_service_create_context_definitions.htm&language=en_US "HTML (New Window)") in Salesforce Help.
-   Define types, which represent entities or objects in the model. Types are the building blocks of CML. They're similar to classes in object-oriented programming. In Revenue Cloud, types represent standalone products, bundles, product components, and product classes.
-   Define relationships that describe how different types are associated with each other. In Revenue Cloud, relationships represent the product structure in a bundle. For example, the root product has a relationship with its components.
-   Apply constraints to define logical restrictions, and enforce rules and conditions on types, variables, and relationships.

In Product Configurator, use the Visual Builder and CML Editor in Constraint Builder to create constraint models with CML.

-   [Use Constraint Builder With Constraint Rules Engine](https://help.salesforce.com/s/articleView?id=ind.product_configurator_constraint_builder.htm&language=en_US "HTML (New Window)")
-   [Define Constraints and Rules with the Visual Builder](https://help.salesforce.com/s/articleView?id=ind.product_configurator_use_the_visual_builder.htm&language=en_US "HTML (New Window)")
-   [Use Code to Define Constraints and Rules in the CML Editor](https://help.salesforce.com/s/articleView?id=ind.product_configurator_use_the_cml_editor.htm&language=en_US "HTML (New Window)")

See the linked topics for information on working with CML, including detailed code examples.

-   **[Modeling a Generator Set](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_constraint_model_example_modeling_a_generator_set.htm)**
    The Constraint Model for a Generator Set examples use CML to define a technical power configuration, illustrating concepts such as calculated variables, enforcement of external standards, and component selection based on requirements.
-   **[Core Concepts](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_cml_core_concepts.htm)**
    Constraint Modeling Language (CML) includes components that cover high-level global configurations to specific data types and constraints.
-   **[Core Concept Examples](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_core_concept_examples.htm)**
    These examples illustrate core Constraint Modeling Language (CML) concepts including type, relationships, constraints, and so on.
-   **[Annotation Examples](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_annotation_examples.htm)**
    Constraint Modeling Language (CML) annotations are labels that you add to parts of a model, such as types, variables, relationships, and constraints. Annotations control how these elements are shown and how they behave in the configurator. Annotations help fine-tune the configurator and the constraint engine without changing the actual structure of the model.
-   **[Constraint Modeling Language (CML) Best Practices](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_cml_best_practices.htm)**
    To prevent performance degradation or unexpected behaviors when the constraint engine executes CML code, follow these practices when writing code.
-   **[Business-Centric Constraint Modeling Language (CML) Guidelines](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_business-centric_cml_guidelines_quantity_and_aggregation_fun.htm)**
    Constraint Modeling Language (CML) must accurately calculate the total sum or aggregate of specific attributes like quantity or userCount across child components, especially in complex configurations requiring group-level aggregation
-   **[Debugging Constraint Modeling Language (CML)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_debugging_cml.htm)**
    To debug constraint models and troubleshoot performance issues, enable debug logging in Apex and set the debug log level to FINE.
-   **[Model Structure](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_appendix_model_structure.htm)**
    The tables on the following pages show the structure for the constraint model in Core Concept Examples.

## Related Topics

- Modeling a Generator Set (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_constraint_model_example_modeling_a_generator_set.htm)
- Core Concepts (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_cml_core_concepts.htm)
- Core Concept Examples (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_core_concept_examples.htm)
- Annotation Examples (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_annotation_examples.htm)
- Constraint Modeling Language (CML) Best Practices (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_cml_best_practices.htm)
- Business-Centric Constraint Modeling Language (CML) Guidelines (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_business-centric_cml_guidelines_quantity_and_aggregation_fun.htm)
- Debugging Constraint Modeling Language (CML) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_debugging_cml.htm)
- Model Structure (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_appendix_model_structure.htm)
