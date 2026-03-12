---
title: "QocQualificationOutputRepresentation Class"
domain: revenue-cloud
topic: qocqualificationoutputrepresentation-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:04.942Z
estimatedTokens: 830
keywords: [QocQualificationOutputRepresentation, Represents, quote, order, contract, qualification, determines, whether, product, sold, based, specific, business, rules, conditions., productId, qualificationContext]
---

# QocQualificationOutputRepresentation Class

> Represents a quote, order, or contract qualification that determines whether a product
    can be sold based on specific business rules and conditions.

# QocQualificationOutputRepresentation Class

Represents a quote, order, or contract qualification that determines whether a product can be sold based on specific business rules and conditions.

## Namespace

[runtime\_industries\_cpq](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_runtime_industries_cpq.htm "The runtime_industries_cpq namespace provides classes and methods to search products or to manage products, catalogs, and categories.")

-   **[QocQualificationOutputRepresentation Constructors](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_QocQualificationOutputRepresentation.htm#apex_runtime_industries_cpq_QocQualificationOutputRepresentation_constructors)**

-   **[QocQualificationOutputRepresentation Properties](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_QocQualificationOutputRepresentation.htm#apex_runtime_industries_cpq_QocQualificationOutputRepresentation_properties)**
    Learn more about the properties available with the QocQualificationOutputRepresentation class.

## QocQualificationOutputRepresentation Constructors

The following are constructors for QocQualificationOutputRepresentation.

-   **[QocQualificationOutputRepresentation()](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_QocQualificationOutputRepresentation.htm#apex_runtime_industries_cpq_QocQualificationOutputRepresentation_ctor_2)**
    Constructs an empty QocQualificationOutputRepresentation instance.

### QocQualificationOutputRepresentation()

Constructs an empty QocQualificationOutputRepresentation instance.

#### Signature

public QocQualificationOutputRepresentation()

## QocQualificationOutputRepresentation Properties

Learn more about the properties available with the QocQualificationOutputRepresentation class.

The QocQualificationOutputRepresentation class includes these properties.

-   **[productId](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_QocQualificationOutputRepresentation.htm#apex_runtime_industries_cpq_QocQualificationOutputRepresentation_productId)**
    Get or set the identifier of the product being qualified.
-   **[qualificationContext](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_QocQualificationOutputRepresentation.htm#apex_runtime_industries_cpq_QocQualificationOutputRepresentation_qualificationContext)**
    Get or set the qualification context that contains the qualification result and reason.

### productId

Get or set the identifier of the product being qualified.

#### Signature

public String productId {get; set;}

#### Property Value

Type: String

### qualificationContext

Get or set the qualification context that contains the qualification result and reason.

#### Signature

public runtime\_industries\_cpq.QualificationContextOutputRepresentation qualificationContext {get; set;}

#### Property Value

Type: runtime\_industries\_cpq.QualificationContextOutputRepresentation

## Related Topics

- runtime_industries_cpq (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_runtime_industries_cpq.htm)
- QocQualificationOutputRepresentation Constructors (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_QocQualificationOutputRepresentation.htm)
- QocQualificationOutputRepresentation Properties (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_QocQualificationOutputRepresentation.htm)
- QocQualificationOutputRepresentation() (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_QocQualificationOutputRepresentation.htm)
- productId (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_QocQualificationOutputRepresentation.htm)
- qualificationContext (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_QocQualificationOutputRepresentation.htm)
