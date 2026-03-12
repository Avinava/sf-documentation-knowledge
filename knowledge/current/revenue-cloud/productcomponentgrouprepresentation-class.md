---
title: "ProductComponentGroupRepresentation Class"
domain: revenue-cloud
topic: productcomponentgrouprepresentation-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:04.828Z
estimatedTokens: 2188
keywords: [ProductComponentGroupRepresentation, Represents, product, component, group, used, bulk, operations., similar, ProductComponentGroupOutputRepresentation, specifically, detail, representations, where, components, represented, BulkProductDetailsRepresentation, objects., apexObj, childGroups]
---

# ProductComponentGroupRepresentation Class

> Represents a product component group used in bulk product operations. This class is similar to ProductComponentGroupOutputRepresentation but is used specifically for bulk product detail representations where components are represented as BulkProductDetailsRepresentation objects.

# ProductComponentGroupRepresentation Class

Represents a product component group used in bulk product operations. This class is similar to ProductComponentGroupOutputRepresentation but is used specifically for bulk product detail representations where components are represented as BulkProductDetailsRepresentation objects.

## Namespace

[runtime\_industries\_cpq](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_runtime_industries_cpq.htm "The runtime_industries_cpq namespace provides classes and methods to search products or to manage products, catalogs, and categories.")

-   **[ProductComponentGroupRepresentation Constructor](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductComponentGroupRepresentation.htm#apex_runtime_industries_cpq_ProductComponentGroupRepresentation_constructors)**
    Learn more about the constructor that's available with the ProductComponentGroupRepresentation class.
-   **[ProductComponentGroupRepresentation Properties](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductComponentGroupRepresentation.htm#apex_runtime_industries_cpq_ProductComponentGroupRepresentation_properties)**
    Contains properties to include details of a product component group used in bulk operations.

## ProductComponentGroupRepresentation Constructor

Learn more about the constructor that's available with the ProductComponentGroupRepresentation class.

The ProductComponentGroupRepresentation class includes this constructor.

-   **[ProductComponentGroupRepresentation(apexObj)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductComponentGroupRepresentation.htm#apex_runtime_industries_cpq_ProductComponentGroupRepresentation_ctor)**
    Constructor to create a ProductComponentGroupRepresentation instance from a ConnectApi CPQProductComponentGroupOutputRepresentation object.

### ProductComponentGroupRepresentation(apexObj)

Constructor to create a ProductComponentGroupRepresentation instance from a ConnectApi CPQProductComponentGroupOutputRepresentation object.

#### Signature

public ProductComponentGroupRepresentation(ConnectApi.CPQProductComponentGroupOutputRepresentation apexObj)

#### Parameters

apexObj

Type: ConnectApi.CPQProductComponentGroupOutputRepresentation

The ConnectApi product component group representation object to convert to ProductComponentGroupRepresentation.

## ProductComponentGroupRepresentation Properties

Contains properties to include details of a product component group used in bulk operations.

The ProductComponentGroupRepresentation class includes these properties.

-   **[childGroups](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductComponentGroupRepresentation.htm#apex_runtime_industries_cpq_ProductComponentGroupRepresentation_childGroups)**
    Get the list of childgroup.
-   **[classifications](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductComponentGroupRepresentation.htm#apex_runtime_industries_cpq_ProductComponentGroupRepresentation_classifications)**
    Get the list of product classifications.
-   **[code](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductComponentGroupRepresentation.htm#apex_runtime_industries_cpq_ProductComponentGroupRepresentation_code)**
    Get the code of the productcomponentgroup.
-   **[components](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductComponentGroupRepresentation.htm#apex_runtime_industries_cpq_ProductComponentGroupRepresentation_components)**
    Get the list of component.
-   **[description](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductComponentGroupRepresentation.htm#apex_runtime_industries_cpq_ProductComponentGroupRepresentation_description)**
    Get the description of the productcomponentgroup.
-   **[id](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductComponentGroupRepresentation.htm#apex_runtime_industries_cpq_ProductComponentGroupRepresentation_id)**
    Get the ID of the productcomponentgroup.
-   **[name](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductComponentGroupRepresentation.htm#apex_runtime_industries_cpq_ProductComponentGroupRepresentation_name)**
    Get the name of the productcomponentgroup.
-   **[parentGroupId](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductComponentGroupRepresentation.htm#apex_runtime_industries_cpq_ProductComponentGroupRepresentation_parentGroupId)**
    Get the ID of the parentgroup.
-   **[parentProductId](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductComponentGroupRepresentation.htm#apex_runtime_industries_cpq_ProductComponentGroupRepresentation_parentProductId)**
    Get the ID of the parentproduct.
-   **[sequence](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductComponentGroupRepresentation.htm#apex_runtime_industries_cpq_ProductComponentGroupRepresentation_sequence)**
    Get the sequence value.

### childGroups

Get the list of childgroup.

#### Signature

public List<runtime\_industries\_cpq.ProductComponentGroupRepresentation> childGroups {get; set;}

#### Property Value

Type: List<[runtime\_industries\_cpq.ProductComponentGroupRepresentation](#apex_class_runtime_industries_cpq_ProductComponentGroupRepresentation "Represents a product component group used in bulk product operations. This class is similar to ProductComponentGroupOutputRepresentation but is used specifically for bulk product detail representations where components are represented as BulkProductDetailsRepresentation objects.")\>

### classifications

Get the list of product classifications.

#### Signature

public List<runtime\_industries\_cpq.ProductClassificationOutputRepresentation> classifications {get; set;}

#### Property Value

Type: List<[runtime\_industries\_cpq.ProductClassificationOutputRepresentation](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductClassificationOutputRepresentation.htm#apex_class_runtime_industries_cpq_ProductClassificationOutputRepresentation "Get details of the product classification in a product configuration.")\>

### code

Get the code of the productcomponentgroup.

#### Signature

public String code {get; set;}

#### Property Value

Type: String

### components

Get the list of component.

#### Signature

public List<runtime\_industries\_cpq.BulkProductDetailsRepresentation> components {get; set;}

#### Property Value

Type: List<[runtime\_industries\_cpq.BulkProductDetailsRepresentation](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_BulkProductDetailsRepresentation.htm#apex_class_runtime_industries_cpq_BulkProductDetailsRepresentation "Get the details of multiple product definitions in a single request. This class is used for bulk product retrieval operations in Product Discovery.")\>

### description

Get the description of the productcomponentgroup.

#### Signature

public String description {get; set;}

#### Property Value

Type: String

### id

Get the ID of the productcomponentgroup.

#### Signature

public String id {get; set;}

#### Property Value

Type: String

### name

Get the name of the productcomponentgroup.

#### Signature

public String name {get; set;}

#### Property Value

Type: String

### parentGroupId

Get the ID of the parentgroup.

#### Signature

public String parentGroupId {get; set;}

#### Property Value

Type: String

### parentProductId

Get the ID of the parentproduct.

#### Signature

public String parentProductId {get; set;}

#### Property Value

Type: String

### sequence

Get the sequence value.

#### Signature

public Integer sequence {get; set;}

#### Property Value

Type: Integer

## Related Topics

- runtime_industries_cpq (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_runtime_industries_cpq.htm)
- ProductComponentGroupRepresentation Constructor (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductComponentGroupRepresentation.htm)
- ProductComponentGroupRepresentation Properties (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductComponentGroupRepresentation.htm)
- ProductComponentGroupRepresentation(apexObj) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductComponentGroupRepresentation.htm)
- childGroups (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductComponentGroupRepresentation.htm)
- classifications (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductComponentGroupRepresentation.htm)
- code (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductComponentGroupRepresentation.htm)
- components (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductComponentGroupRepresentation.htm)
- description (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductComponentGroupRepresentation.htm)
- name (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductComponentGroupRepresentation.htm)
