---
title: "GuidedSelectionSearchTerm Class"
domain: revenue-cloud
topic: guidedselectionsearchterm-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:04.776Z
estimatedTokens: 950
keywords: [GuidedSelectionSearchTerm, Represents, search, term, used, guided, product, selection., Contains, text, associated, tags, filtering, searching, products, Product, Discovery., apexObj]
---

# GuidedSelectionSearchTerm Class

> Represents a search term used in guided product selection. Contains the search term text and associated tags for filtering and searching products in Product Discovery.

# GuidedSelectionSearchTerm Class

Represents a search term used in guided product selection. Contains the search term text and associated tags for filtering and searching products in Product Discovery.

## Namespace

[runtime\_industries\_cpq](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_runtime_industries_cpq.htm "The runtime_industries_cpq namespace provides classes and methods to search products or to manage products, catalogs, and categories.")

-   **[GuidedSelectionSearchTerm Constructor](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_GuidedSelectionSearchTerm.htm#apex_runtime_industries_cpq_GuidedSelectionSearchTerm_constructors)**
    Learn more about the constructors that are available with the GuidedSelectionSearchTerm class.
-   **[GuidedSelectionSearchTerm Properties](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_GuidedSelectionSearchTerm.htm#apex_runtime_industries_cpq_GuidedSelectionSearchTerm_properties)**
    Contains properties to include search term details for guided product selection.

## GuidedSelectionSearchTerm Constructor

Learn more about the constructors that are available with the GuidedSelectionSearchTerm class.

The GuidedSelectionSearchTerm class includes these constructors.

-   **[GuidedSelectionSearchTerm(apexObj)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_GuidedSelectionSearchTerm.htm#apex_runtime_industries_cpq_GuidedSelectionSearchTerm_ctor)**
    Constructor to create a GuidedSelectionSearchTerm instance from a ConnectApi CPQGuidedSelectionSearchTermOutputRepresentation object.
-   **[GuidedSelectionSearchTerm()](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_GuidedSelectionSearchTerm.htm#apex_runtime_industries_cpq_GuidedSelectionSearchTerm_ctor_2)**
    Default constructor to create an empty GuidedSelectionSearchTerm instance.

### GuidedSelectionSearchTerm(apexObj)

Constructor to create a GuidedSelectionSearchTerm instance from a ConnectApi CPQGuidedSelectionSearchTermOutputRepresentation object.

#### Signature

public GuidedSelectionSearchTerm(ConnectApi.CPQGuidedSelectionSearchTermOutputRepresentation apexObj)

#### Parameters

apexObj

Type: ConnectApi.CPQGuidedSelectionSearchTermOutputRepresentation

The ConnectApi guided selection search term representation object to convert to GuidedSelectionSearchTerm.

### GuidedSelectionSearchTerm()

Default constructor to create an empty GuidedSelectionSearchTerm instance.

#### Signature

public GuidedSelectionSearchTerm()

## GuidedSelectionSearchTerm Properties

Contains properties to include search term details for guided product selection.

The GuidedSelectionSearchTerm class includes these properties.

-   **[tags](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_GuidedSelectionSearchTerm.htm#apex_runtime_industries_cpq_GuidedSelectionSearchTerm_tags)**
    Get the list of tags.
-   **[term](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_GuidedSelectionSearchTerm.htm#apex_runtime_industries_cpq_GuidedSelectionSearchTerm_term)**
    Get the term value.

### tags

Get the list of tags.

#### Signature

public List<String> tags {get; set;}

#### Property Value

Type: List<String>

### term

Get the term value.

#### Signature

public String term {get; set;}

#### Property Value

Type: String

## Related Topics

- runtime_industries_cpq (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_runtime_industries_cpq.htm)
- GuidedSelectionSearchTerm Constructor (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_GuidedSelectionSearchTerm.htm)
- GuidedSelectionSearchTerm Properties (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_GuidedSelectionSearchTerm.htm)
- GuidedSelectionSearchTerm(apexObj) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_GuidedSelectionSearchTerm.htm)
- GuidedSelectionSearchTerm() (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_GuidedSelectionSearchTerm.htm)
- tags (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_GuidedSelectionSearchTerm.htm)
- term (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_GuidedSelectionSearchTerm.htm)
