---
title: "Configurator Update Nodes"
domain: revenue-cloud
topic: configurator-update-nodes
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.601Z
estimatedTokens: 297
keywords: [Configurator, Update, Nodes, Output, representation, configuration, request, details, update, nodes.]
---

# Configurator Update Nodes

> Output representation of the configuration request details to update nodes.

# Configurator Update Nodes

Output representation of the configuration request details to update nodes.

JSON Example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| configurator​Messages | Map<String, Configurator Message> | Map of the product IDs to the list of configurator messages. Configurator messages are results from any validations, Business Rules Engines (BRE) calls, or Salesforce Pricing calls. | Small, 60.0 | 60.0 |
| configurator​UITreatments | Configurator UI Treatment[] | Details of the UI treatments that specify the product configuration rule actions to override the disable or hide behavior in the UI for product options, product attributes, and attribute picklist values. | Small, 62.0 | 62.0 |
| errors | Error Response | List of errors, which contains an error code and a message. | Small, 60.0 | 60.0 |
| product​Qualifications | Map<String, Configurator Qualification Context> | Map of the product IDs to the qualification rule execution results. | Small, 60.0 | 60.0 |
| success | Boolean | Indicates whether the call was successful (true) not (false). | Small, 60.0 | 60.0 |

## Code Examples

```
{
  "configuratorMessages": {},
  "configuratorUITreatments": [
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
  ],
  "errors": [],
  "productQualifications": {
    "01tDU000000EOTCYA4": {
      "isQualified": true
    }
  },
  "success": true
}
```

## Related Topics

- Configurator Message (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_configurator_message_output.htm)
- Configurator UI Treatment (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_configurator_u_i_treatment_output.htm)
- Configurator Qualification Context (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_configurator_qualification_context_output.htm)
