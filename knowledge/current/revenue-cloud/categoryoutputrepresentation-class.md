---
title: "CategoryOutputRepresentation Class"
domain: revenue-cloud
topic: categoryoutputrepresentation-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:06.777Z
estimatedTokens: 1678
keywords: [CategoryOutputRepresentation, store, category, catalogId, hasSubCategories, isNavigational, parentCategoryId, qualificationContext, sortOrder, childCategories]
---

# CategoryOutputRepresentation Class

> Contains properties to store details of a category.

# CategoryOutputRepresentation Class

Contains properties to store details of a category.

## Namespace

[runtime\_industries\_cpq](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_runtime_industries_cpq.htm "The runtime_industries_cpq namespace provides classes and methods to search products or to manage products, catalogs, and categories.")

-   **[CategoryOutputRepresentation Properties](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_CategoryOutputRepresentation.htm#apex_runtime_industries_cpq_CategoryOutputRepresentation_properties)**
    Learn more about the properties available with the CategoryOutputRepresentation class.

## CategoryOutputRepresentation Properties

Learn more about the properties available with the CategoryOutputRepresentation class.

The CategoryOutputRepresentation class includes these properties.

-   **[catalogId](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_CategoryOutputRepresentation.htm#apex_runtime_industries_cpq_CategoryOutputRepresentation_catalogId)**
    Get the ID of the catalog that the category is associated with.
-   **[description](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_CategoryOutputRepresentation.htm#apex_runtime_industries_cpq_CategoryOutputRepresentation_description)**
    Get the description of a catalog.
-   **[hasSubCategories](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_CategoryOutputRepresentation.htm#apex_runtime_industries_cpq_CategoryOutputRepresentation_hasSubCategories)**
    Indicates whether the subcategories are available (true) or not (false).
-   **[id](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_CategoryOutputRepresentation.htm#apex_runtime_industries_cpq_CategoryOutputRepresentation_id)**
    Get the ID of the category.
-   **[isNavigational](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_CategoryOutputRepresentation.htm#apex_runtime_industries_cpq_CategoryOutputRepresentation_isNavigational)**
    Indicates whether the category node is navigational (true) or not (false).
-   **[name](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_CategoryOutputRepresentation.htm#apex_runtime_industries_cpq_CategoryOutputRepresentation_name)**
    Get the name of the category. If data translation is set up and specified in the org, the translated name is available.
-   **[parentCategoryId](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_CategoryOutputRepresentation.htm#apex_runtime_industries_cpq_CategoryOutputRepresentation_parentCategoryId)**
    Get the ID of the parent category.
-   **[qualificationContext](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_CategoryOutputRepresentation.htm#apex_runtime_industries_cpq_CategoryOutputRepresentation_qualificationContext)**
    Get the context details of a user, which are used for qualification rules.
-   **[sortOrder](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_CategoryOutputRepresentation.htm#apex_runtime_industries_cpq_CategoryOutputRepresentation_sortOrder)**
    Get the display order of the product category relative to the siblings with the same parent category.
-   **[childCategories](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_CategoryOutputRepresentation.htm#apex_runtime_industries_cpq_CategoryOutputRepresentation_childCategories)**
    Get the list of childcategorie.

### catalogId

Get the ID of the catalog that the category is associated with.

#### Signature

public String catalogId {get; set;}

#### Property Value

Type: String

### description

Get the description of a catalog.

#### Signature

public String description {get; set;}

#### Property Value

Type: String

### hasSubCategories

Indicates whether the subcategories are available (true) or not (false).

#### Signature

public Boolean hasSubCategories {get; set;}

#### Property Value

Type: Boolean

### id

Get the ID of the category.

#### Signature

public String id {get; set;}

#### Property Value

Type: String

### isNavigational

Indicates whether the category node is navigational (true) or not (false).

#### Signature

public Boolean isNavigational {get; set;}

#### Property Value

Type: Boolean

### name

Get the name of the category. If data translation is set up and specified in the org, the translated name is available.

#### Signature

public String name {get; set;}

#### Property Value

Type: String

### parentCategoryId

Get the ID of the parent category.

#### Signature

public String parentCategoryId {get; set;}

#### Property Value

Type: String

### qualificationContext

Get the context details of a user, which are used for qualification rules.

#### Signature

public runtime\_industries\_cpq.QualificationContextOutputRepresentation qualificationContext {get; set;}

#### Property Value

Type: [runtime\_industries\_cpq.QualificationContextOutputRepresentation](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_QualificationContextOutputRepresentation.htm#apex_class_runtime_industries_cpq_QualificationContextOutputRepresentation "Represents the context information used for product qualification, including account, opportunity, and other relevant context data for determining product eligibility.")

### sortOrder

Get the display order of the product category relative to the siblings with the same parent category.

#### Signature

public Integer sortOrder {get; set;}

#### Property Value

Type: Integer

### childCategories

Get the list of childcategorie.

#### Signature

public List<runtime\_industries\_cpq.CategoryOutputRepresentation> childCategories {get; set;}

#### Property Value

Type: List<[runtime\_industries\_cpq.CategoryOutputRepresentation](#apex_class_runtime_industries_cpq_CategoryOutputRepresentation "Contains properties to store details of a category.")\>

## Related Topics

- runtime_industries_cpq (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_runtime_industries_cpq.htm)
- CategoryOutputRepresentation Properties (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_CategoryOutputRepresentation.htm)
- catalogId (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_CategoryOutputRepresentation.htm)
- description (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_CategoryOutputRepresentation.htm)
- hasSubCategories (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_CategoryOutputRepresentation.htm)
- isNavigational (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_CategoryOutputRepresentation.htm)
- name (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_CategoryOutputRepresentation.htm)
- parentCategoryId (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_CategoryOutputRepresentation.htm)
- qualificationContext (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_CategoryOutputRepresentation.htm)
- sortOrder (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_CategoryOutputRepresentation.htm)
