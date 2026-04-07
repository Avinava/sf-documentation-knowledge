---
title: "Modeling a Generator Set"
domain: revenue-cloud
topic: modeling-a-generator-set
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:01:57.517Z
estimatedTokens: 460
keywords: [Modeling, Generator, Constraint, Model, examples, CML, define, technical, power, configuration, illustrating, concepts, calculated, variables, enforcement]
---

# Modeling a Generator Set

> The Constraint Model for a Generator Set examples use CML to define a technical power
    configuration, illustrating concepts such as calculated variables, enforcement of external
    standards, and component selection based on requirements.

# Modeling a Generator Set

The Constraint Model for a Generator Set examples use CML to define a technical power configuration, illustrating concepts such as calculated variables, enforcement of external standards, and component selection based on requirements.

The [examples](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_core_concept_examples.htm "These examples illustrate core Constraint Modeling Language (CML) concepts including type, relationships, constraints, and so on.") correspond to the [CML core concepts](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_cml_core_concepts.htm "Constraint Modeling Language (CML) includes components that cover high-level global configurations to specific data types and constraints.") linked here. See the Generator Set examples for code samples that use the core concepts.

-   Global Properties and Settings—VOLTAGE\_REGEX is a global constant that defines a fixed regular expression pattern used for validation or parsing throughout the model.
-   Types—GeneratorSet is the root type that represents the main entity. GeneralModel represents a related component type.
-   Variables—The GeneratorSet type defines variables like requiredKW (the user's power requirement), Voltage, and calculated variables like surgeLoadKW and Voltage3 (derived from parsing the Voltage string).
-   Relationships—The GeneralModels relation connects the GeneratorSet type to its possible configurations (GeneralModel).
-   Constraints—Constraints enforce critical business rules and safety standards, such as ensuring the selected generator model's power meets the required threshold, or restricting configuration options (such as Voltage) based on the specified compliance standards (Listing-UL 2200).

## Related Topics

- examples (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_core_concept_examples.htm)
- CML core concepts (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_cml_core_concepts.htm)
