---
title: "CPQ API OptionModel"
domain: cpq-dev-api
topic: cpq-api-optionmodel
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:23.670Z
estimatedTokens: 447
keywords: [CPQ, API, OptionModel, Option, model, product, data, Salesforce]
---

# CPQ API OptionModel

> The Option model represents a product option data model in Salesforce CPQ.

# CPQ API OptionModel

The Option model represents a product option data model in Salesforce CPQ.

| Available in: Salesforce CPQ Summer ’16 and later |
| --- |


| Name | Type | Description |
| --- | --- | --- |
| record | SBQQ__ProductOption__c | The record that this model represents. |
| externalConfigurationData | Map<String,String> | Internal property for the external configurator feature. |
| configurable | Boolean | Indicates whether the option is configurable. |
| configurationRequired | Boolean | Indicates whether the configuration of the option is required. |
| quantityEditable | Boolean | Indicates whether the quantity is editable. Editability is determined by the quantity and bundled fields on the option record. |
| priceEditable | Boolean | Indicates whether the price is editable. Editability is determined by the price editable field on the product record and the bundled field on the option record. |
| productQuantityScale | Decimal | Returns the value of the quantity scale field for the product being configured. |
| priorOptionExists | Boolean | Checks if this option is an asset on the account that the quote is associated with. |
| dependentIds | Set<Id> | The option IDs that depend on this option. |
| controllingGroups | Map<String,Set<Id>> | The option IDs that this option depends on. |
| exclusionGroups | Map<String,Set<Id>> | The option IDs that this option is exclusive with. |
| reconfigureDimensionWarning | String | Reconfigures the warning label for an option with segments. |
| hasDimension | Boolean | Indicates whether this option has dimensions or segments. |
| isUpgrade | Boolean | Indicates whether the product option is related to an upgrade product. |
| dynamicOptionKey | String | Internal property for dynamic options. |

```

```

## Code Examples

```apex
public class OptionModel { 
    public SBQQ__ProductOption__c record; 
    public Map<String,String> externalConfigurationData; 
    public Boolean configurable; 
    public Boolean configurationRequired; 
    public Boolean quantityEditable; 
    public Boolean priceEditable; 
    public Decimal productQuantityScale; 
    public Boolean priorOptionExists; 
    public Set<Id> dependentIds; 
    public Map<String,Set<Id>> controllingGroups; 
    public Map<String,Set<Id>> exclusionGroups; 
    public String reconfigureDimensionWarning; 
    public Boolean hasDimension; 
    public Boolean isUpgrade; 
    public String dynamicOptionKey; 
}
```
