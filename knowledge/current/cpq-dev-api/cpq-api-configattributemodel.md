---
title: "CPQ API ConfigAttributeModel"
domain: cpq-dev-api
topic: cpq-api-configattributemodel
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:23.627Z
estimatedTokens: 448
keywords: [CPQ, API, ConfigAttributeModel, ConfigAttribute, model, configuration, attribute, Salesforce]
---

# CPQ API ConfigAttributeModel

> The ConfigAttribute model represents the configuration attribute object in Salesforce
  CPQ.

# CPQ API ConfigAttributeModel

The ConfigAttribute model represents the configuration attribute object in Salesforce CPQ.

| Available in: Salesforce CPQ Summer ’16 and later |
| --- |


| Name | Type | Description |
| --- | --- | --- |
| name | String | Corresponds directly to SBQQ__ConfigurationAttribute__c.Name. |
| targetFieldName | String | Corresponds directly to SBQQ__ConfigurationAttribute__c.SBQQ__TargetField__c. |
| displayOrder | Decimal | Corresponds directly to SBQQ__ConfigurationAttribute__c.SBQQ__DisplayOrder__c. |
| columnOrder | String | Corresponds directly to SBQQ__ConfigurationAttribute__c.SBQQ__ColumnOrder__c. |
| required | Boolean | Corresponds directly to SBQQ__ConfigurationAttribute__c.SBQQ__Required__c. |
| featureId | Id | Corresponds directly to SBQQ__ConfigurationAttribute__c.SBQQ__Feature__c. |
| position | String | Corresponds directly to SBQQ__ConfigurationAttribute__c.SBQQ__Position__c. |
| appliedImmediately | Boolean | Corresponds directly to SBQQ__ConfigurationAttribute__c.SBQQ__AppliedImmediately__c. |
| applyToProductOptions | Boolean | Corresponds directly to SBQQ__ConfigurationAttribute__c.SBQQ__ApplyToProductOptions__c. |
| autoSelect | Boolean | Corresponds directly to SBQQ__ConfigurationAttribute__c.SBQQ__AutoSelect__c. |
| shownValues | String[] | Corresponds directly to SBQQ__ConfigurationAttribute__c.SBQQ__ShownValues__c. |
| hiddenValues | String[] | Corresponds directly to SBQQ__ConfigurationAttribute__c.SBQQ__HiddenValues__c. |
| hidden | Boolean | Corresponds directly to SBQQ__ConfigurationAttribute__c.SBQQ__Hidden__c. |
| noSuchFieldName | String | If no field with the target name exists, the target name is stored here. |
| myId | String | Corresponds directly to SBQQ__ConfigurationAttribute__c.Id. |

```

```

## Code Examples

```apex
public class ConfigAttributeModel { 
    public String name; 
    public String targetFieldName; 
    public Decimal displayOrder; 
    public String colmnOrder;
    public Boolean required;
    public Id featureId;
    public String position;
    public Boolean appliedImmediately;
    public Boolean applyToProductOptions;
    public Boolean autoSelect;
    public String[] shownValues;
    public String[] hiddenValues;
    public Boolean hidden;
    public String noSuchFieldName;
    public Id myId;
}
```
