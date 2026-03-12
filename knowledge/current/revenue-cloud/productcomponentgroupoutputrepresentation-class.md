---
title: "ProductComponentGroupOutputRepresentation Class"
domain: revenue-cloud
topic: productcomponentgroupoutputrepresentation-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:04.819Z
estimatedTokens: 1780
keywords: [ProductComponentGroupOutputRepresentation, Get, details, product, component, group, classification., childGroups, classifications, code, components, description, name, parentGroupId, parentProductId, sequence]
---

# ProductComponentGroupOutputRepresentation Class

> Get details of the product component group in a product classification.

# ProductComponentGroupOutputRepresentation Class

Get details of the product component group in a product classification.

## Namespace

[runtime\_industries\_cpq](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_runtime_industries_cpq.htm "The runtime_industries_cpq namespace provides classes and methods to search products or to manage products, catalogs, and categories.")

-   **[ProductComponentGroupOutputRepresentation Properties](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductComponentGroupOutputRepresentation.htm#apex_runtime_industries_cpq_ProductComponentGroupOutputRepresentation_properties)**
    Learn more about the properties available with the ProductComponentGroupOutputRepresentation class.

## ProductComponentGroupOutputRepresentation Properties

Learn more about the properties available with the ProductComponentGroupOutputRepresentation class.

The ProductComponentGroupOutputRepresentation class includes these properties.

-   **[childGroups](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductComponentGroupOutputRepresentation.htm#apex_runtime_industries_cpq_ProductComponentGroupOutputRepresentation_childGroups)**
    Get the child groups associated with a product component group.
-   **[classifications](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductComponentGroupOutputRepresentation.htm#apex_runtime_industries_cpq_ProductComponentGroupOutputRepresentation_classifications)**
    Get the list of classifications for the product component group.
-   **[code](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductComponentGroupOutputRepresentation.htm#apex_runtime_industries_cpq_ProductComponentGroupOutputRepresentation_code)**
    Get the code of the product component group.
-   **[components](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductComponentGroupOutputRepresentation.htm#apex_runtime_industries_cpq_ProductComponentGroupOutputRepresentation_components)**
    Get the details of components within the product component group.
-   **[description](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductComponentGroupOutputRepresentation.htm#apex_runtime_industries_cpq_ProductComponentGroupOutputRepresentation_description)**
    Get the description of the product component group.
-   **[id](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductComponentGroupOutputRepresentation.htm#apex_runtime_industries_cpq_ProductComponentGroupOutputRepresentation_id)**
    Get the ID of the product component group.
-   **[name](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductComponentGroupOutputRepresentation.htm#apex_runtime_industries_cpq_ProductComponentGroupOutputRepresentation_name)**
    Get the name of the product component group.
-   **[parentGroupId](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductComponentGroupOutputRepresentation.htm#apex_runtime_industries_cpq_ProductComponentGroupOutputRepresentation_parentGroupId)**
    Get the ID of the parent group.
-   **[parentProductId](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductComponentGroupOutputRepresentation.htm#apex_runtime_industries_cpq_ProductComponentGroupOutputRepresentation_parentProductId)**
    Get the parent Product2 ID of the product component group.
-   **[sequence](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductComponentGroupOutputRepresentation.htm#apex_runtime_industries_cpq_ProductComponentGroupOutputRepresentation_sequence)**
    Get the sequence of the product component group.

### childGroups

Get the child groups associated with a product component group.

#### Signature

public List<runtime\_industries\_cpq.ProductComponentGroupOutputRepresentation> childGroups {get; set;}

#### Property Value

Type: List<[runtime\_industries\_cpq.ProductComponentGroupOutputRepresentation](#apex_class_runtime_industries_cpq_ProductComponentGroupOutputRepresentation "Get details of the product component group in a product classification.")\>

### classifications

Get the list of classifications for the product component group.

#### Signature

public List<runtime\_industries\_cpq.ProductClassificationOutputRepresentation> classifications {get; set;}

#### Property Value

Type: List<[runtime\_industries\_cpq.ProductClassificationOutputRepresentation](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductClassificationOutputRepresentation.htm#apex_class_runtime_industries_cpq_ProductClassificationOutputRepresentation "Get details of the product classification in a product configuration.")\>

### code

Get the code of the product component group.

#### Signature

public String code {get; set;}

#### Property Value

Type: String

### components

Get the details of components within the product component group.

#### Signature

public List<runtime\_industries\_cpq.ProductDetailsRepresentation> components {get; set;}

#### Property Value

Type: List<[runtime\_industries\_cpq.ProductDetailsRepresentation](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductDetailsRepresentation.htm#apex_class_runtime_industries_cpq_ProductDetailsRepresentation "Get the details of a product definition.")\>

### description

Get the description of the product component group.

#### Signature

public String description {get; set;}

#### Property Value

Type: String

### id

Get the ID of the product component group.

#### Signature

public String id {get; set;}

#### Property Value

Type: String

### name

Get the name of the product component group.

#### Signature

public String name {get; set;}

#### Property Value

Type: String

### parentGroupId

Get the ID of the parent group.

#### Signature

public String parentGroupId {get; set;}

#### Property Value

Type: String

### parentProductId

Get the parent Product2 ID of the product component group.

#### Signature

public String parentProductId {get; set;}

#### Property Value

Type: String

### sequence

Get the sequence of the product component group.

#### Signature

public Integer sequence {get; set;}

#### Property Value

Type: Integer

## Related Topics

- runtime_industries_cpq (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_runtime_industries_cpq.htm)
- ProductComponentGroupOutputRepresentation Properties (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductComponentGroupOutputRepresentation.htm)
- childGroups (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductComponentGroupOutputRepresentation.htm)
- classifications (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductComponentGroupOutputRepresentation.htm)
- code (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductComponentGroupOutputRepresentation.htm)
- components (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductComponentGroupOutputRepresentation.htm)
- description (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductComponentGroupOutputRepresentation.htm)
- name (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductComponentGroupOutputRepresentation.htm)
- parentGroupId (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductComponentGroupOutputRepresentation.htm)
- parentProductId (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductComponentGroupOutputRepresentation.htm)
