---
title: "ConfigRuleResult Class"
domain: revenue-cloud
topic: configruleresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:04.728Z
estimatedTokens: 1675
keywords: [ConfigRuleResult, Contains, results, configuration, rule, evaluation, including, message, rules, product, recommendation, visibility, applied, during, configuration., transactionContextId, messageRules, productRecommendationRules, visibilityRules, errors]
---

# ConfigRuleResult Class

> Contains the results of configuration rule evaluation, including message rules, product recommendation rules, and visibility rules that are applied during product configuration.

# ConfigRuleResult Class

Contains the results of configuration rule evaluation, including message rules, product recommendation rules, and visibility rules that are applied during product configuration.

## Namespace

[runtime\_industries\_cpq](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_runtime_industries_cpq.htm "The runtime_industries_cpq namespace provides classes and methods to search products or to manage products, catalogs, and categories.")

-   **[ConfigRuleResult Constructor](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ConfigRuleResult.htm#apex_runtime_industries_cpq_ConfigRuleResult_constructors)**
    Learn more about the constructor that's available with the ConfigRuleResult class.
-   **[ConfigRuleResult Properties](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ConfigRuleResult.htm#apex_runtime_industries_cpq_ConfigRuleResult_properties)**
    Contains properties to store configuration rule evaluation results.

## ConfigRuleResult Constructor

Learn more about the constructor that's available with the ConfigRuleResult class.

The ConfigRuleResult class includes this constructor.

-   **[ConfigRuleResult(transactionContextId, messageRules, productRecommendationRules, visibilityRules, errors)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ConfigRuleResult.htm#apex_runtime_industries_cpq_ConfigRuleResult_ctor)**
    Constructor to create a ConfigRuleResult instance with configuration rule evaluation results.

### ConfigRuleResult(transactionContextId, messageRules, productRecommendationRules, visibilityRules, errors)

Constructor to create a ConfigRuleResult instance with configuration rule evaluation results.

#### Signature

public ConfigRuleResult(String transactionContextId, List<runtime\_industries\_cpq.MessageRule> messageRules, List<runtime\_industries\_cpq.ProductRecommendationRule> productRecommendationRules, List<runtime\_industries\_cpq.VisibilityRule> visibilityRules, List<String> errors)

#### Parameters

transactionContextId

Type: String

The ID of the transaction context for this configuration rule evaluation.

messageRules

Type: List<runtime\_industries\_cpq.MessageRule>

List of message rules that were evaluated during configuration.

productRecommendationRules

Type: List<runtime\_industries\_cpq.ProductRecommendationRule>

List of product recommendation rules that were evaluated during configuration.

visibilityRules

Type: List<runtime\_industries\_cpq.VisibilityRule>

List of visibility rules that were evaluated during configuration.

errors

Type: List<String>

List of error messages from the configuration rule evaluation, if any.

## ConfigRuleResult Properties

Contains properties to store configuration rule evaluation results.

The ConfigRuleResult class includes these properties.

-   **[errors](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ConfigRuleResult.htm#apex_runtime_industries_cpq_ConfigRuleResult_errors)**
    Get the list of error messages.
-   **[messageRules](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ConfigRuleResult.htm#apex_runtime_industries_cpq_ConfigRuleResult_messageRules)**
    Get the list of messagerule.
-   **[productRecommendationRules](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ConfigRuleResult.htm#apex_runtime_industries_cpq_ConfigRuleResult_productRecommendationRules)**
    Get the list of productrecommendationrule.
-   **[transactionContextId](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ConfigRuleResult.htm#apex_runtime_industries_cpq_ConfigRuleResult_transactionContextId)**
    Get the ID of the transactioncontext.
-   **[visibilityRules](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ConfigRuleResult.htm#apex_runtime_industries_cpq_ConfigRuleResult_visibilityRules)**
    Get the list of visibilityrule.

### errors

Get the list of error messages.

#### Signature

public List<String> errors {get; set;}

#### Property Value

Type: List<String>

### messageRules

Get the list of messagerule.

#### Signature

public List<runtime\_industries\_cpq.MessageRule> messageRules {get; set;}

#### Property Value

Type: List<[runtime\_industries\_cpq.MessageRule](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_MessageRule.htm#apex_class_runtime_industries_cpq_MessageRule "Represents a message rule that is evaluated during product configuration. Message rules display informational, warning, or error messages to users based on configuration conditions.")\>

### productRecommendationRules

Get the list of productrecommendationrule.

#### Signature

public List<runtime\_industries\_cpq.ProductRecommendationRule> productRecommendationRules {get; set;}

#### Property Value

Type: List<[runtime\_industries\_cpq.ProductRecommendationRule](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductRecommendationRule.htm#apex_class_runtime_industries_cpq_ProductRecommendationRule "Represents a product recommendation rule that is evaluated during product configuration. Product recommendation rules suggest additional products to users based on configuration conditions.")\>

### transactionContextId

Get the ID of the transactioncontext.

#### Signature

public String transactionContextId {get; set;}

#### Property Value

Type: String

### visibilityRules

Get the list of visibilityrule.

#### Signature

public List<runtime\_industries\_cpq.VisibilityRule> visibilityRules {get; set;}

#### Property Value

Type: List<[runtime\_industries\_cpq.VisibilityRule](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_VisibilityRule.htm#apex_class_runtime_industries_cpq_VisibilityRule "Represents a visibility rule that is evaluated during product configuration. Visibility rules control the visibility of products, attributes, or other UI elements based on configuration conditions.")\>

## Related Topics

- runtime_industries_cpq (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_runtime_industries_cpq.htm)
- ConfigRuleResult Constructor (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ConfigRuleResult.htm)
- ConfigRuleResult Properties (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ConfigRuleResult.htm)
- ConfigRuleResult(transactionContextId, messageRules, productRecommendationRules, visibilityRules, errors) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ConfigRuleResult.htm)
- errors (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ConfigRuleResult.htm)
- messageRules (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ConfigRuleResult.htm)
- productRecommendationRules (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ConfigRuleResult.htm)
- transactionContextId (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ConfigRuleResult.htm)
- visibilityRules (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ConfigRuleResult.htm)
- runtime_industries_cpq.MessageRule (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_MessageRule.htm)
