---
title: "Configuration Set Instance"
domain: revenue-cloud
topic: configuration-set-instance
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.486Z
estimatedTokens: 329
keywords: [Configuration, Set, Instance, Output, representation, details, context, session, returned, set, configuration, request.]
---

# Configuration Set Instance

> Output representation of the details of the context or session that are returned with a
    set configuration request.

# Configuration Set Instance

Output representation of the details of the context or session that are returned with a set configuration request.

JSON Example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| configurator​Messages | Map<String, <Configurator Message>> | Map of the product IDs to the list of configurator messages. Configurator messages are results from any validations, Business Rules Engines (BRE) calls, or Salesforce Pricing calls. | Small, 60.0 | 60.0 |
| configurator​UITreatments | Configurator UI Treatment[] | Details of the UI treatments that specify the product configuration rule actions to override the disable or hide behavior in the UI for product options, product attributes, and attribute picklist values. | Small, 62.0 | 62.0 |
| context​Id | String | ID of the transaction context. | Small, 60.0 | 60.0 |
| errors | Error Response | List of errors, which contains an error code and a message. | Small, 60.0 | 60.0 |
| product​Qualifications | Map<String, Configurator Qualification Context> | Map of the product IDs to the execution results from qualification rules. | Small, 60.0 | 60.0 |
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
  "contextId": "831f07b01cf0cbd2d046adf5350420f85f0611b4b1e22e183921a063857a1377",
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
