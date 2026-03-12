---
title: "Insurance UI Treatments"
domain: insurance-developer-guide
topic: insurance-ui-treatments
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.688Z
estimatedTokens: 259
keywords: [Insurance, Treatments, Output, representation]
---

# Insurance UI Treatments

> Output representation for the details of the insurance UI treatments.

# Insurance UI Treatments

Output representation for the details of the insurance UI treatments.

JSON example

This example shows a sample success response.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| details | Map<String, String> | Key-value pair that specifies the items to apply the rules on, which includes these details.ID of the sales transaction itemID of the attributeID of the attribute picklist value | Small, 66.0 | 66.0 |
| uiTreatmentTarget | String | Target of the UI treatment. Valid values are:Component—Represents a product option or bundle component.Quantity—Represents a quantity field.Attribute—Represents a certain attribute of the product.Attribute_Picklist_Value—Represents one of the picklist values of a product attribute. | Small, 66.0 | 66.0 |
| uiTreatmentType | String | Type of UI treatment to be performed. Valid values are:Hide—Hide the associated target.Disable—Disable the associated target. | Small, 66.0 | 66.0 |

## Code Examples

```
{
  "uiTreatments": [
    {
      "details": {
        "attributeId": "0tjxx0000000007AAA",
        "stiId": "0QLxx0000004CU0GAM",
        "attributePicklistValueId": "0v6xx0000000005AAA"
      },
      
      "uiTreatmentTarget": "Attribute_Picklist_Value",
      "uiTreatmentType": "Hide"
    },
    {
      "details": {
        "stiId": "ref_f0f2da7b_c431_482d_bf4b_599052f3a2e1"
      },
      
      "uiTreatmentTarget": "Component",
      "uiTreatmentType": "Disable"
    }
  ]
}
```
