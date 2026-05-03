---
title: "Annotation Examples"
domain: revenue-cloud
topic: annotation-examples
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-05-03T00:28:11.763Z
estimatedTokens: 844
keywords: [Annotation, Examples, Constraint, Modeling, Language, CML, annotations, labels, add, parts, model, variables, relationships, constraints, control, how, shown, they, behave, configurator, help, fine-tune, engine, changing, actual, structure]
---

> Constraint Modeling Language (CML) annotations are labels that you add to parts of a
    model, such as types, variables, relationships, and constraints. Annotations control how these
    elements are shown and how they behave in the configurator. Annotations help fine-tune the
    configurator and the constraint engine without changing the actual structure of the
    model.

# Annotation Examples

Constraint Modeling Language (CML) annotations are labels that you add to parts of a model, such as types, variables, relationships, and constraints. Annotations control how these elements are shown and how they behave in the configurator. Annotations help fine-tune the configurator and the constraint engine without changing the actual structure of the model.

The examples explain what each annotation does, where it can be used in the model, what kinds of values it supports, and how it behaves when the configurator runs and evaluates constraints. CML code samples show how the annotation works in practice.

-   **[closeRelation Annotation](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_annotation_example_closeRelation.htm)**
    closeRelation is a CML annotation that controls addition of new line items to the relationship by the engine.
-   **[configurable Annotation](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_annotation_example_configurable.htm)**
    configurable is a CML annotation that controls whether a model element can be configured.
-   **[defaultValue Annotation](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_annotation_example_defaultValue.htm)**
    The defaultValue annotation is used on a variable to define the value it should start with when configuration begins.
-   **[domainComputation Annotation](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_annotation_example_domainComputation.htm)**
    domainComputation is a CML annotation that specifies how the domain of a model element is determined, either by using a fixed domain or by computing the domain dynamically during configuration.
-   **[peelable Annotation](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_annotation_example_peelable.htm)**
    The peelable annotation is used to create soft selection values and allow the engine to modify these selections to satisfy a constraint.
-   **[propagateUp Annotation](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_annotation_example_propagateUp.htm)**
    propagateUp is a Constraint Modeling Language (CML) annotation that controls aggregation propagation between children and parent elements.
-   **[relatedAttributes Annotation](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_annotation_example_relatedAttributes.htm)**
    relatedAttributes is a Constraint Modeling Language (CML) annotation that resets the domain to the original one for domainComputation.
-   **[sequence Annotation](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_annotation_example_sequence.htm)**
    The sequence annotation defines the execution and configuration order of elements in a Constraint Modeling Language (CML) model.
-   **[split Annotation](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_annotation_example_split.htm)**
    split is a Constraint Modeling Language (CML) annotation that specifies whether the instances of the type should be split or not.

## Related Topics

- closeRelation Annotation (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_annotation_example_closeRelation.htm)
- configurable Annotation (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_annotation_example_configurable.htm)
- defaultValue Annotation (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_annotation_example_defaultValue.htm)
- domainComputation Annotation (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_annotation_example_domainComputation.htm)
- peelable Annotation (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_annotation_example_peelable.htm)
- propagateUp Annotation (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_annotation_example_propagateUp.htm)
- relatedAttributes Annotation (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_annotation_example_relatedAttributes.htm)
- sequence Annotation (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_annotation_example_sequence.htm)
- split Annotation (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_annotation_example_split.htm)
