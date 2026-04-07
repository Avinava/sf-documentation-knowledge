---
title: "External Variables"
domain: revenue-cloud
topic: external-variables
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:01:57.553Z
estimatedTokens: 687
keywords: [External, Variables, Constraint, Modeling, Language, CML, defined, virtual, Context, Path, Annotation, Variable, Annotations]
---

# External Variables

> External variables are global Constraint Modeling Language (CML) variables defined
    within a virtual CML type.

# External Variables

External variables are global Constraint Modeling Language (CML) variables defined within a virtual CML type.

See virtual in [Type Annotations](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_type_annotations.htm "You can annotate types to add information. Type annotations are metadata applied to a type declaration to provide instructions to the constraint engine regarding how instances of that type should be handled, instantiated, or used in the configuration structure."). The values for external variables are usually set by the environment that launches the constraint solver engine. Use external variables to import runtime data from the context header (such as Quote or Sales Transaction) into the configuration model, with the contextPath annotation to denote header fields, or with tagName annotation to denote lineItem fields. See External Variable Annotations section.

If the external variable isn't mapped to any external data source, it must have a default value. Otherwise, it may remain unbound and cause errors.

Here's a basic declaration syntax.

```

```

## Example: Using External Variables with Context Path Annotation

In this example, the constraint engine needs access to the quote header (Sales Transaction) field, which defines the shipping location to enforce region-specific compliance requirements. The contextPath annotation is used to map the field (SalesTransaction.ShippingCountry) to an external CML variable (ShippingCountry).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=revenue_lifecycle_management_dev_guide)

#### Note

The CML variable name can be different from the context path value.

```

```

See the full example in [Using ContextPath and tagName annotations](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_core_concept_examples.htm "These examples illustrate core Constraint Modeling Language (CML) concepts including type, relationships, constraints, and so on.").

## External Variable Annotations

Here are the details of external variable annotations.

| Annotation | Possible Value | Description |
| --- | --- | --- |
| contextPath | "SalesTransaction.<ST_FIELD>", where the sales transaction field is pulled directly from the context definition. | References sales transaction values directly from their context definition, such as account name, sales transaction total, or address. The contextPath annotation can only be used for header fields.To create a variable linked to a SalesTransactionItem, use the tagName annotation to reference context tags on SalesTransactionItem within a type. See tagName in Variable Annotations. |

## Code Examples

```
extern int MAX_VALUE = 9999;
extern decimal(2) threshold = 1.5;
```

```
// External variable declaration with context path annotation
@(contextPath = "SalesTransaction.ShippingCountry")
extern string ShippingCountry; // ShippingCountry Value is pulled from the Quote/Order header
```

## Related Topics

- Type Annotations (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_type_annotations.htm)
- Using ContextPath and tagName annotations (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_core_concept_examples.htm)
- Variable Annotations (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_variable_annotations.htm)
