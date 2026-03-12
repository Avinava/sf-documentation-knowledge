---
title: "VisibilityRule Class"
domain: revenue-cloud
topic: visibilityrule-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:07.038Z
estimatedTokens: 1660
keywords: [VisibilityRule, visibility, rule, evaluated, product, configuration, rules, control, products, attributes, elements, conditions, stiId, prcId, attributeId]
---

# VisibilityRule Class

> Represents a visibility rule that is evaluated during product configuration. Visibility rules control the visibility of products, attributes, or other UI elements based on configuration conditions.

# VisibilityRule Class

Represents a visibility rule that is evaluated during product configuration. Visibility rules control the visibility of products, attributes, or other UI elements based on configuration conditions.

## Namespace

[runtime\_industries\_cpq](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_runtime_industries_cpq.htm "The runtime_industries_cpq namespace provides classes and methods to search products or to manage products, catalogs, and categories.")

-   **[VisibilityRule Constructor](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_VisibilityRule.htm#apex_runtime_industries_cpq_VisibilityRule_constructors)**
    Learn more about the constructor that's available with the VisibilityRule class.
-   **[VisibilityRule Properties](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_VisibilityRule.htm#apex_runtime_industries_cpq_VisibilityRule_properties)**
    Contains properties to store visibility rule details from configuration rule evaluation.

## VisibilityRule Constructor

Learn more about the constructor that's available with the VisibilityRule class.

The VisibilityRule class includes this constructor.

-   **[VisibilityRule(stiId, prcId, attributeId, attributePicklistValueId, target, scope, type, productIds, message)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_VisibilityRule.htm#apex_runtime_industries_cpq_VisibilityRule_ctor)**
    Constructor to create a VisibilityRule instance with the specified visibility rule details.

### VisibilityRule(stiId, prcId, attributeId, attributePicklistValueId, target, scope, type, productIds, message)

Constructor to create a VisibilityRule instance with the specified visibility rule details.

#### Signature

public VisibilityRule(String stiId, String prcId, String attributeId, String attributePicklistValueId, String target, String scope, String type, List<String> productIds, String message)

#### Parameters

stiId

Type: String

The ID of the Sales Transaction Item (STI) associated with this visibility rule.

prcId

Type: String

The ID of the Product Relationship Configuration (PRC) associated with this visibility rule.

attributeId

Type: String

The ID of the attribute associated with this visibility rule.

attributePicklistValueId

Type: String

The ID of the attribute picklist value associated with this visibility rule.

target

Type: String

The target of the visibility rule (for example, product, attribute, or component).

scope

Type: String

The scope of the visibility rule.

type

Type: String

The type of visibility rule (for example, Show or Hide).

productIds

Type: List<String>

List of product IDs affected by this visibility rule.

message

Type: String

The message to display when the visibility rule is applied.

## VisibilityRule Properties

Contains properties to store visibility rule details from configuration rule evaluation.

The VisibilityRule class includes these properties.

-   **[attributeId](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_VisibilityRule.htm#apex_runtime_industries_cpq_VisibilityRule_attributeId)**
    Get the ID of the attribute.
-   **[attributePicklistValueId](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_VisibilityRule.htm#apex_runtime_industries_cpq_VisibilityRule_attributePicklistValueId)**
    Get the ID of the attributepicklistvalue.
-   **[message](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_VisibilityRule.htm#apex_runtime_industries_cpq_VisibilityRule_message)**
    Get the message value.
-   **[prcId](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_VisibilityRule.htm#apex_runtime_industries_cpq_VisibilityRule_prcId)**
    Get the ID of the prc.
-   **[productId](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_VisibilityRule.htm#apex_runtime_industries_cpq_VisibilityRule_productId)**
    Get the ID of the product.
-   **[scope](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_VisibilityRule.htm#apex_runtime_industries_cpq_VisibilityRule_scope)**
    Get the scope value.
-   **[stiId](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_VisibilityRule.htm#apex_runtime_industries_cpq_VisibilityRule_stiId)**
    Get the ID of the sti.
-   **[target](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_VisibilityRule.htm#apex_runtime_industries_cpq_VisibilityRule_target)**
    Get the target value.
-   **[type](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_VisibilityRule.htm#apex_runtime_industries_cpq_VisibilityRule_type)**
    Get the type value.

### attributeId

Get the ID of the attribute.

#### Signature

public String attributeId {get; set;}

#### Property Value

Type: String

### attributePicklistValueId

Get the ID of the attributepicklistvalue.

#### Signature

public String attributePicklistValueId {get; set;}

#### Property Value

Type: String

### message

Get the message value.

#### Signature

public String message {get; set;}

#### Property Value

Type: String

### prcId

Get the ID of the prc.

#### Signature

public String prcId {get; set;}

#### Property Value

Type: String

### productId

Get the ID of the product.

#### Signature

public List<String> productId {get; set;}

#### Property Value

Type: List<String>

### scope

Get the scope value.

#### Signature

public String scope {get; set;}

#### Property Value

Type: String

### stiId

Get the ID of the sti.

#### Signature

public String stiId {get; set;}

#### Property Value

Type: String

### target

Get the target value.

#### Signature

public String target {get; set;}

#### Property Value

Type: String

### type

Get the type value.

#### Signature

public String type {get; set;}

#### Property Value

Type: String

## Related Topics

- runtime_industries_cpq (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_runtime_industries_cpq.htm)
- VisibilityRule Constructor (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_VisibilityRule.htm)
- VisibilityRule Properties (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_VisibilityRule.htm)
- VisibilityRule(stiId, prcId, attributeId, attributePicklistValueId, target, scope, type, productIds, message) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_VisibilityRule.htm)
- attributeId (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_VisibilityRule.htm)
- attributePicklistValueId (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_VisibilityRule.htm)
- message (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_VisibilityRule.htm)
- prcId (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_VisibilityRule.htm)
- productId (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_VisibilityRule.htm)
- scope (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_VisibilityRule.htm)
