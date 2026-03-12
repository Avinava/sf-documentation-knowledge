---
title: "CPQ API ProductModel"
domain: cpq-dev-api
topic: cpq-api-productmodel
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:23.677Z
estimatedTokens: 293
keywords: [CPQ, API, ProductModel, Product, model, data, Salesforce]
---

# CPQ API ProductModel

> The Product model represents a product data model in Salesforce CPQ.

# CPQ API ProductModel

The Product model represents a product data model in Salesforce CPQ.

| Available in: Salesforce CPQ Summer ’16 and later |
| --- |


| Name | Type | Description |
| --- | --- | --- |
| record | Product2 | The record that this model represents. |
| upgradedAssetId | Id | Provides a source for SBQQ__QuoteLine__c.SBQQ__UpgradedAsset__c. |
| currencySymbol | String | The symbol for the currency in use. |
| currencyCode | String | The ISO code for the currency in use. |
| featureCategories | String[] | Allows users to sort product features by category. |
| options | OptionModel[] | A list of all available options for this product. |
| features | FeatureModel | All features available for this product |
| configuration | ConfigurationModel | An object representing this product’s current configuration. |
| configurationAttributes | ConfigAttributeModel[] | All configuration attributes available for this product. |
| inheritedConfigurationAttributes | ConfigAttributeModel[] | All configuration attributes that this product inherits from ancestor products. |
| constraints | ConstraintModel[] | Option constraints on this product. |

```

```

## Code Examples

```apex
public class ProductModel {
    public Product2 record;
    public Id upgradedAssetId;
    public String currencySymbol;
    public String currencyCode;
    public String[] featureCategories;
    public OptionModel[] options;
    public FeatureModel[] features;
    public ConfigurationModel configuration;
    public ConfigAttributeModel[] configurationAttributes;
    public ConfigAttributeModel[] inheritedConfigurationAttributes;
    public ConstraintModel[] constraints; 
}
```
