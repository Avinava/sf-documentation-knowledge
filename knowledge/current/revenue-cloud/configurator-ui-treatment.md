---
title: "Configurator UI Treatment"
domain: revenue-cloud
topic: configurator-ui-treatment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:07.563Z
estimatedTokens: 364
keywords: [Configurator, Treatment, Output, representation, details, treatments, product, configurator., include, configuration, rule, actions, override, disable, hide, behavior, options, attributes, attribute, picklist]
---

# Configurator UI Treatment

> Output representation of the details of the UI treatments of a product configurator. The
    details include the product configuration rule actions to override the disable or hide behavior
    in the UI for product options, product attributes, and attribute picklist values.

# Configurator UI Treatment

Output representation of the details of the UI treatments of a product configurator. The details include the product configuration rule actions to override the disable or hide behavior in the UI for product options, product attributes, and attribute picklist values.

JSON Example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| details | Map<String, Object> | Key-value pair that specifies the items to apply the rules on, which includes these details.ID of the sales transaction itemID of the product-related componentID of the attributeID of the attribute picklist value | Small, 62.0 | 62.0 |
| uiTreatment​Scope | String | Type of the UI treatment to be performed. Valid values are:Product—UI treatment is applicable to a certain product only.Bundle—UI treatment is applicable to the whole bundle. | Small, 62.0 | 62.0 |
| uiTreatment​Target | String | Target of the UI treatment. Valid values are:Component—Represents a product option or bundle component.Quantity—Represents a quantity field.Attribute—Represents a certain attribute of the product.Attribute_Picklist_Value—Represents one of the picklist values of a product attribute. | Small, 62.0 | 62.0 |
| uiTreatment​Type | String | Type of UI treatment to be performed. Valid values are:Hide—Hide the associated target.Disable—Disable the associated target. | Small, 62.0 | 62.0 |

## Code Examples

```
[
  {
    "details": {
      "attributeId": "0tjxx0000000007AAA",
      "prcId": "0dSxx0000000007EAA",
      "stiId": "0QLxx0000004CU0GAM",
      "attributePicklistValueId": "0v6xx0000000005AAA"
    },
    "uiTreatmentScope": "Bundle",
    "uiTreatmentTarget": "Attribute_Picklist_Value",
    "uiTreatmentType": "Hide"
  },
  {
    "details": {
      "stiId": "ref_f0f2da7b_c431_482d_bf4b_599052f3a2e1"
    },
    "uiTreatmentScope": "Product",
    "uiTreatmentTarget": "Component",
    "uiTreatmentType": "Disable"
  }
]
```
