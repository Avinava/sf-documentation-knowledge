---
title: "CPQ API FeatureModel"
domain: cpq-dev-api
topic: cpq-api-featuremodel
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:27.279Z
estimatedTokens: 113
keywords: [CPQ, API, FeatureModel, Feature, model, product, Salesforce]
---

> The Feature model represents a product feature data model in Salesforce CPQ.

# CPQ API FeatureModel

The Feature model represents a product feature data model in Salesforce CPQ.

| Available in: Salesforce CPQ Summer ’16 and later |
| --- |


| Name | Type | Description |
| --- | --- | --- |
| record | SBQQ__ProductFeature__c | The record that this model represents. |
| instructionsText | String | Instruction label for the feature. |
| containsUpgrades | Boolean | This feature is related to an upgrade product. |

```

```

## Code Examples

```apex
public class FeatureModel { 
    public SBQQ__ProductFeature__c record; 
    public String instructionsText; 
    public Boolean containsUpgrades; 
}
```
