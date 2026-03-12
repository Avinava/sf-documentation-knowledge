---
title: "CatalogOutputRepresentation Class"
domain: revenue-cloud
topic: catalogoutputrepresentation-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:06.771Z
estimatedTokens: 1474
keywords: [CatalogOutputRepresentation, store, catalog, definition, catalogCode, catalogType, customFields, effectiveEndDate, effectiveStartDate, numberOfCategories, status]
---

# CatalogOutputRepresentation Class

> Contains properties to store details of a catalog definition.

# CatalogOutputRepresentation Class

Contains properties to store details of a catalog definition.

## Namespace

[runtime\_industries\_cpq](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_runtime_industries_cpq.htm "The runtime_industries_cpq namespace provides classes and methods to search products or to manage products, catalogs, and categories.")

-   **[CatalogOutputRepresentation Properties](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_CatalogOutputRepresentation.htm#apex_runtime_industries_cpq_CatalogOutputRepresentation_properties)**
    Contains properties to include details of a catalog definition.

## CatalogOutputRepresentation Properties

Contains properties to include details of a catalog definition.

The CatalogOutputRepresentation class includes these properties.

-   **[catalogCode](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_CatalogOutputRepresentation.htm#apex_runtime_industries_cpq_CatalogOutputRepresentation_catalogCode)**
    Get the unique ID associated with the catalog.
-   **[catalogType](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_CatalogOutputRepresentation.htm#apex_runtime_industries_cpq_CatalogOutputRepresentation_catalogType)**
    Get the category of an entry in the catalog, which is customizable. For example, catalog types, such as sellable products, services, parts, technical services, or technical resources.
-   **[customFields](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_CatalogOutputRepresentation.htm#apex_runtime_industries_cpq_CatalogOutputRepresentation_customFields)**
    Get details of the custom fields associated with a catalog.
-   **[description](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_CatalogOutputRepresentation.htm#apex_runtime_industries_cpq_CatalogOutputRepresentation_description)**
    Get the description of the catalog.
-   **[effectiveEndDate](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_CatalogOutputRepresentation.htm#apex_runtime_industries_cpq_CatalogOutputRepresentation_effectiveEndDate)**
    Get the date and time from when the catalog isn't available to the end users.
-   **[effectiveStartDate](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_CatalogOutputRepresentation.htm#apex_runtime_industries_cpq_CatalogOutputRepresentation_effectiveStartDate)**
    Get the date and time from when the catalog is available to the end users.
-   **[id](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_CatalogOutputRepresentation.htm#apex_runtime_industries_cpq_CatalogOutputRepresentation_id)**
    Get the ID of the catalog.
-   **[name](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_CatalogOutputRepresentation.htm#apex_runtime_industries_cpq_CatalogOutputRepresentation_name)**
    Get the name of the catalog.
-   **[numberOfCategories](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_CatalogOutputRepresentation.htm#apex_runtime_industries_cpq_CatalogOutputRepresentation_numberOfCategories)**
    Get the number of categories in the catalog.
-   **[status](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_CatalogOutputRepresentation.htm#apex_runtime_industries_cpq_CatalogOutputRepresentation_status)**
    Get the status of the catalog.

### catalogCode

Get the unique ID associated with the catalog.

#### Signature

public String catalogCode {get; set;}

#### Property Value

Type: String

### catalogType

Get the category of an entry in the catalog, which is customizable. For example, catalog types, such as sellable products, services, parts, technical services, or technical resources.

#### Signature

public String catalogType {get; set;}

#### Property Value

Type: String

### customFields

Get details of the custom fields associated with a catalog.

#### Signature

public List<runtime\_industries\_cpq.AdditionalFieldsWrapper> customFields {get; set;}

#### Property Value

Type: List<runtime\_industries\_cpq.AdditionalFieldsWrapper>

### description

Get the description of the catalog.

#### Signature

public String description {get; set;}

#### Property Value

Type: String

### effectiveEndDate

Get the date and time from when the catalog isn't available to the end users.

#### Signature

public String effectiveEndDate {get; set;}

#### Property Value

Type: String

### effectiveStartDate

Get the date and time from when the catalog is available to the end users.

#### Signature

public String effectiveStartDate {get; set;}

#### Property Value

Type: String

### id

Get the ID of the catalog.

#### Signature

public String id {get; set;}

#### Property Value

Type: String

### name

Get the name of the catalog.

#### Signature

public String name {get; set;}

#### Property Value

Type: String

### numberOfCategories

Get the number of categories in the catalog.

#### Signature

public Integer numberOfCategories {get; set;}

#### Property Value

Type: Integer

### status

Get the status of the catalog.

#### Signature

public String status {get; set;}

#### Property Value

Type: String

## Related Topics

- runtime_industries_cpq (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_runtime_industries_cpq.htm)
- CatalogOutputRepresentation Properties (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_CatalogOutputRepresentation.htm)
- catalogCode (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_CatalogOutputRepresentation.htm)
- catalogType (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_CatalogOutputRepresentation.htm)
- customFields (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_CatalogOutputRepresentation.htm)
- description (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_CatalogOutputRepresentation.htm)
- effectiveEndDate (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_CatalogOutputRepresentation.htm)
- effectiveStartDate (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_CatalogOutputRepresentation.htm)
- name (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_CatalogOutputRepresentation.htm)
- numberOfCategories (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_CatalogOutputRepresentation.htm)
