---
title: "CPQ API ConfigurationModel"
domain: cpq-dev-api
topic: cpq-api-configurationmodel
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:23.615Z
estimatedTokens: 370
keywords: [CPQ, API, ConfigurationModel, Configuration, model, bundle, product, Salesforce]
---

# CPQ API ConfigurationModel

> The
  Configuration
  model represents a bundle product in Salesforce CPQ.

# CPQ API ConfigurationModel

The Configuration model represents a bundle product in Salesforce CPQ.

| Available in: Salesforce CPQ Summer ’16 and later |
| --- |


| Name | Type | Description |
| --- | --- | --- |
| configuredProductId | Id | The Product2.Id. |
| optionId | Id | The SBQQ__ProductOption__c.Id. |
| optionData | SBQQ__ProductOption__c | Editable data about the option, such as quantity or discount. |
| configurationData | SBQQ__ProductOption__c | Stores the values of the configuration attributes. |
| inheritedConfigurationData | SBQQ__ProductOption__c | Stores the values of the inherited configuration attributes. |
| optionConfigurations | ConfigurationModel | Stores the options selected on this product. |
| configured | Boolean | Indicates whether the product has been configured. |
| changedByProductActions | Boolean | Indicates whether a product action changed the configuration of this bundle. |
| isDynamicOption | Boolean | Indicates whether the product was configured using a dynamic lookup. |
| isUpgrade | Boolean | Queries whether this product is an upgrade. |
| disabledOptionIds | Set<Id> | The option IDs that are disabled. |
| hiddenOptionIds | Set<Id> | The option IDs that are hidden. |
| listPrice | Decimal | The list price. |
| priceEditable | Boolean | Indicates whether the price is editable. |
| validationMessages | String[] | Validation messages. |
| dynamicOptionKey | String | Internal property for dynamic options. |

```

```

## Code Examples

```apex
public class ConfigurationModel { 
    public Id configuredProductId; 
    public Id optionId; 
    public SBQQ__ProductOption__c optionData; // Editable data about the option in question, such as quantity or discount 
    public SBQQ__ProductOption__c configurationData; 
    public SBQQ__ProductOption__c inheritedConfigurationData; 
    public ConfigurationModel[] optionConfigurations; 
    public Boolean configured; 
    public Boolean changedByProductActions; 
    public Boolean isDynamicOption; 
    public Boolean isUpgrade; 
    public Set<Id> disabledOptionIds; 
    public Set<Id> hiddenOptionIds; 
    public Decimal listPrice; 
    public Boolean priceEditable; 
    public String[] validationMessages; 
    public String dynamicOptionKey; 
}
```
