---
title: "CPQ API ConstraintModel"
domain: cpq-dev-api
topic: cpq-api-constraintmodel
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:23.632Z
estimatedTokens: 108
keywords: [CPQ, API, ConstraintModel, Constraint, model, option, Salesforce]
---

# CPQ API ConstraintModel

> The Constraint model represents the option constraint object in Salesforce
  CPQ.

# CPQ API ConstraintModel

The Constraint model represents the option constraint object in Salesforce CPQ.

| Available in: Salesforce CPQ Summer ’16 and later |
| --- |


| Name | Type | Description |
| --- | --- | --- |
| record | SBQQ__OptionConstraint__c | The record that this model represents. |
| priorOptionExists | Boolean | Checks if this option is an asset on the account that the quote is associated with. |

```

```

## Code Examples

```apex
public class ConstraintModel { 
    public SBQQ__OptionConstraint__c record; 
    public Boolean priorOptionExists; 
}
```
