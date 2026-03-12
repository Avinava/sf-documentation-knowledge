---
title: "getPromotionTemplates"
domain: retail-api
topic: getpromotiontemplates
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.978Z
estimatedTokens: 113
keywords: [getPromotionTemplates, possible, Promotion, Templates, derive, workflow, Input, Sample, promotion, templates, along, additional, search, Display_In_MetadataWizard__c, unless]
---

# getPromotionTemplates

> This method returns the list of promotion templates along with
      additional information. The method will search for promotion templates where the
      "Display_In_MetadataWizard__c" field is set to true unless the "all" parameter is set to
      true.

# getPromotionTemplates

This method returns the list of promotion templates along with additional information. The method will search for promotion templates where the "Display\_In\_MetadataWizard\_\_c" field is set to true unless the "all" parameter is set to true.

## Input Parameters

Wizards are generated from a metadata JSON structure defining the list of components that will be part of a wizard along with some additional properties to define the available actions and the general layout.

| Name | Description |
| --- | --- |
| all | Boolean. If true, it will display all valid promotion templates. If false or not set, it will return only the templates with the flag "Display_In_MetadataWizard__c" as true. |

## Input Sample

```

```

## Response Sample

```

```

## Response Properties

This method will return a list of items with the following properties:

| Name | Description |
| --- | --- |
| AnchorType | Anchor Type for the Promotion. Possible values are "Customer", "CustomerSet" and null |
| HasTacticTemplates | Boolean value. True if the Promotion Template can have tactics because it has related Tactic Templates. |
| Id | SFDC Id of the Promotion template |
| Name | Description value of the promotion template. |
| NumberOfPromotionKPIs | Number of Editable and Editable Calculated Promotion Level KPI's the template has. |
| NumberOfTacticKPIs | Number of Editable and Editable Calculated Tactic Level KPI's the template has. |
| ProductDefinitionLevel | Product definition level for the template. Valid values are "Promotion" and "Tactic" |

## Code Examples

```
"source": {
    "class": "DerivePromotionWizardCallable",
    "method": "getPromotionTemplate",
    "cache": true,
    "params": {
        "promotionId": "{! promotionId }"
    }
}
```

```
[
    {
        "Name": "Customer Promotion",
        "Id": "a2a2X000004L7xPQAS"
    }
]
```

```
{
    "class": "NewPromotionWizardCallable",
    "method": "getPromotionTemplates",
    "cache": true
}
```

```
[
    {
        "NumberOfTacticKPIs": 0,
        "NumberOfPromotionKPIs": 0,
        "HasTacticTemplates": true,
        "ProductDefinitionLevel": "Tactic",
        "AnchorType": "Customer",
        "Name": "*BanTest_Tacticlevel",
        "Id": "a2a2X000004L7wPQAS"
    },
    {
        "NumberOfTacticKPIs": 0,
        "NumberOfPromotionKPIs": 1,
        "HasTacticTemplates": true,
        "ProductDefinitionLevel": "Tactic",
        "AnchorType": "Customer",
        "Name": "Customer Promotion",
        "Id": "a2a2X000004L7xPQAS"
    }
]
```
