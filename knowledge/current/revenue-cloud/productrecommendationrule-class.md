---
title: "ProductRecommendationRule Class"
domain: revenue-cloud
topic: productrecommendationrule-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:06.963Z
estimatedTokens: 1332
keywords: [ProductRecommendationRule, product, recommendation, rule, evaluated, configuration, rules, suggest, additional, products, users, conditions, referenceId, productIds, message]
---

# ProductRecommendationRule Class

> Represents a product recommendation rule that is evaluated during product configuration. Product recommendation rules suggest additional products to users based on configuration conditions.

# ProductRecommendationRule Class

Represents a product recommendation rule that is evaluated during product configuration. Product recommendation rules suggest additional products to users based on configuration conditions.

## Namespace

[runtime\_industries\_cpq](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_runtime_industries_cpq.htm "The runtime_industries_cpq namespace provides classes and methods to search products or to manage products, catalogs, and categories.")

-   **[ProductRecommendationRule Constructor](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductRecommendationRule.htm#apex_runtime_industries_cpq_ProductRecommendationRule_constructors)**
    Learn more about the constructor that's available with the ProductRecommendationRule class.
-   **[ProductRecommendationRule Properties](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductRecommendationRule.htm#apex_runtime_industries_cpq_ProductRecommendationRule_properties)**
    Contains properties to store product recommendation rule details from configuration rule evaluation.

## ProductRecommendationRule Constructor

Learn more about the constructor that's available with the ProductRecommendationRule class.

The ProductRecommendationRule class includes this constructor.

-   **[ProductRecommendationRule(referenceId, productIds, message, recordType, target, scope)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductRecommendationRule.htm#apex_runtime_industries_cpq_ProductRecommendationRule_ctor)**
    Constructor to create a ProductRecommendationRule instance with the specified recommendation details.

### ProductRecommendationRule(referenceId, productIds, message, recordType, target, scope)

Constructor to create a ProductRecommendationRule instance with the specified recommendation details.

#### Signature

public ProductRecommendationRule(String referenceId, List<String> productIds, String message, String recordType, String target, String scope)

#### Parameters

referenceId

Type: String

The reference ID of the product recommendation rule.

productIds

Type: List<String>

List of product IDs that are recommended.

message

Type: String

The message to display with the product recommendation.

recordType

Type: String

The record type associated with the recommendation.

target

Type: String

The target of the recommendation rule.

scope

Type: String

The scope of the recommendation rule.

## ProductRecommendationRule Properties

Contains properties to store product recommendation rule details from configuration rule evaluation.

The ProductRecommendationRule class includes these properties.

-   **[message](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductRecommendationRule.htm#apex_runtime_industries_cpq_ProductRecommendationRule_message)**
    Get the message value.
-   **[productIds](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductRecommendationRule.htm#apex_runtime_industries_cpq_ProductRecommendationRule_productIds)**
    Get the list of productid.
-   **[recordType](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductRecommendationRule.htm#apex_runtime_industries_cpq_ProductRecommendationRule_recordType)**
    Get the recordtype value.
-   **[referenceId](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductRecommendationRule.htm#apex_runtime_industries_cpq_ProductRecommendationRule_referenceId)**
    Get the ID of the reference.
-   **[scope](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductRecommendationRule.htm#apex_runtime_industries_cpq_ProductRecommendationRule_scope)**
    Get the scope value.
-   **[target](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductRecommendationRule.htm#apex_runtime_industries_cpq_ProductRecommendationRule_target)**
    Get the target value.

### message

Get the message value.

#### Signature

public String message {get; set;}

#### Property Value

Type: String

### productIds

Get the list of productid.

#### Signature

public List<String> productIds {get; set;}

#### Property Value

Type: List<String>

### recordType

Get the recordtype value.

#### Signature

public String recordType {get; set;}

#### Property Value

Type: String

### referenceId

Get the ID of the reference.

#### Signature

public String referenceId {get; set;}

#### Property Value

Type: String

### scope

Get the scope value.

#### Signature

public String scope {get; set;}

#### Property Value

Type: String

### target

Get the target value.

#### Signature

public String target {get; set;}

#### Property Value

Type: String

## Related Topics

- runtime_industries_cpq (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_runtime_industries_cpq.htm)
- ProductRecommendationRule Constructor (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductRecommendationRule.htm)
- ProductRecommendationRule Properties (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductRecommendationRule.htm)
- ProductRecommendationRule(referenceId, productIds, message, recordType, target, scope) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductRecommendationRule.htm)
- message (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductRecommendationRule.htm)
- productIds (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductRecommendationRule.htm)
- recordType (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductRecommendationRule.htm)
- referenceId (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductRecommendationRule.htm)
- scope (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductRecommendationRule.htm)
- target (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductRecommendationRule.htm)
