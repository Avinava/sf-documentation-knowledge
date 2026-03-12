---
title: "Omniscript Elements List"
domain: psc-api
topic: omniscript-elements-list
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:31.132Z
estimatedTokens: 388
keywords: [Omniscript, Elements, Output, representation]
---

# Omniscript Elements List

> Output representation of the details of the Omniscript elements.

# Omniscript Elements List

Output representation of the details of the Omniscript elements.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| custom​Type​Details | Custom Type Details[] | Custom type details for the Omniscript element. | Small, 60.0 | 60.0 |
| description | String | Description of the Omniscript element. | Small, 60.0 | 60.0 |
| designer​Customization​Type | String | The customization type of the Omniscript element. | Small, 60.0 | 60.0 |
| discovery​Framework​UsageType | String | Discovery framework usage type of the Omniscript element. | Small, 60.0 | 60.0 |
| elements | Omniscript Elements List[] | Elements within the Omniscript element. | Small, 60.0 | 60.0 |
| level | String | Level of the Omniscript element. | Small, 60.0 | 60.0 |
| name | String | Name of the Omniscript element. | Small, 60.0 | 60.0 |
| omniProcess​Version​Number | String | OmniProcess version number of the Omniscript element. | Small, 60.0 | 60.0 |
| parent​Element​Name | String | Parent element name of the Omniscript element. | Small, 60.0 | 60.0 |
| parent​Element​Type | String | Parent element type of the Omniscript element. | Small, 60.0 | 60.0 |
| property​Set​Config | OS Element Property Set[] | Property set configuration of the Omniscript element. | Small, 60.0 | 60.0 |
| sequence​Number | String | Sequence number of the Omniscript element. | Small, 60.0 | 60.0 |
| type | String | Type of the Omniscript element. | Small, 60.0 | 60.0 |

## Code Examples

```
"elements": [
    {
      "DiscoveryFrameworkUsageType": "Default",
      "DesignerCustomizationType": "Discovery Framework",
      "Type": "Step",
      "PropertySetConfig": {
        "label": "Card Details",
        "show": null,
        "conditionType": "Hide if False"
      },
      "ParentElementType": null,
      "ParentElementName": null,
      "SequenceNumber": 0,
      "OmniProcessVersionNumber": 1,
      "Level": 0,
      "Description": null,
      "Name": "Step1",
      "elements": [
        {
          "DiscoveryFrameworkUsageType": "Default",
          "DesignerCustomizationType": "Discovery Framework",
          "Type": "Radio",
          "PropertySetConfig": {
            "label": "Was the card in your possession at the time of the disputed transactions?",
            "defaultValue": null,
            "help": false,
            "helpText": "",
            "options": [
              {
                "name": "Yes",
                "developerName": "Yes",
                "value": "Yes",
                "setAll": false
              },
              {
                "name": "No",
                "developerName": "No",
                "value": "No",
                "setAll": false
              }
            ],
            "show": null,
            "conditionType": "Hide if False"
          },
          "ParentElementType": "Step",
          "ParentElementName": "Step1",
          "SequenceNumber": 0,
          "OmniProcessVersionNumber": 1,
          "Level": 1,
          "Description": null,
          "Name": "FSC_DM_v1_CardRelatedQ1",
          "elements": [],
          "customTypeDetails" : {
            "discoveryFramework": {
                "questionText": "Was the card in your possession at the time of the disputed transactions?"
            }
          }
        },
        {
          "DiscoveryFrameworkUsageType": "Default",
          "DesignerCustomizationType": "Discovery Framework",
          "Type": "Radio",
          "PropertySetConfig": {
            "label": "Was the card lost or stolen at the time of the disputed transactions?",
            "defaultValue": null,
            "help": false,
            "helpText": "",
            "options": [
              {
                "name": "Yes",
                "developerName": "Yes",
                "value": "Yes",
                "setAll": false
              },
              {
                "name": "No",
                "developerName": "No",
                "value": "No",
                "setAll": false
              }
            ],
            "show": {
              "group": {
                "operator": "AND",
                "rules": [
                  {
                    "data": "Yes",
                    "condition": "=",
                    "field": "FSC_DM_v1_CardRelatedQ1"
                  }
                ]
              }
            },
            "conditionType": "Hide if False"
          },
          "ParentElementType": "Step",
          "ParentElementName": "Step1",
          "SequenceNumber": 1,
          "OmniProcessVersionNumber": 1,
          "Level": 1,
          "Description": null,
          "Name": "FSC_DM_v1_CardRelatedQ2",
          "elements": [],
          "customTypeDetails" : {
            "discoveryFramework": {
                "questionText": "Was the card lost or stolen at the time of the disputed transactions?"
            }
          }
        },
        {
          "DiscoveryFrameworkUsageType": "Default",
          "DesignerCustomizationType": "Discovery Framework",
          "Type": "Radio",
          "PropertySetConfig": {
            "label": "Did you provide your card details on any unfamiliar or suspicious websites?",
            "defaultValue": null,
            "help": false,
            "helpText": "",
            "options": [
              {
                "name": "Yes",
                "developerName": "Yes",
                "value": "Yes",
                "setAll": false
              },
              {
                "name": "No",
                "developerName": "No",
                "value": "No",
                "setAll": false
              }
            ],
            "show": null,
            "conditionType": "Hide if False"
          },
          "ParentElementType": "Step",
          "ParentElementName": "Step1",
          "SequenceNumber": 2,
          "OmniProcessVersionNumber": 1,
          "Level": 1,
          "Description": null,
          "Name": "FSC_DM_v1_FraudRelatedQ4",
          "elements": [],
          "customTypeDetails" : {
            "discoveryFramework": {
                "questionText": "Did you provide your card details on any unfamiliar or suspicious websites?"
            }
          }
        }
      ]
    },
    {
      "DiscoveryFrameworkUsageType": "Default",
      "DesignerCustomizationType": "Discovery Framework",
      "Type": "Step",
      "PropertySetConfig": {
        "label": "Additional Details",
        "show": null,
        "conditionType": "Hide if False"
      },
      "ParentElementType": null,
      "ParentElementName": null,
      "SequenceNumber": 2,
      "OmniProcessVersionNumber": 1,
      "Level": 0,
      "Description": null,
      "Name": "Step2",
      "elements": [
        {
          "DiscoveryFrameworkUsageType": "Default",
          "DesignerCustomizationType": "Discovery Framework",
          "Type": "Text Area",
          "PropertySetConfig": {
            "label": "Can you provide more details about the transaction",
            "defaultValue": null,
            "help": false,
            "helpText": "",
            "show": null,
            "conditionType": "Hide if False"
          },
          "ParentElementType": "Step",
          "ParentElementName": "Step2",
          "SequenceNumber": 2,
          "OmniProcessVersionNumber": 1,
          "Level": 1,
          "Description": null,
          "Name": "FSC_DM_v1_AdditionalQ2",
          "elements": [],
          "customTypeDetails" : {
            "discoveryFramework": {
                "questionText": "Can you provide more details about the transaction"
            }
          }
        }
      ]
    }
  ]
```

## Related Topics

- Custom Type Details (atlas.en-us.psc_api.meta/psc_api/connect_responses_custom_type_details.htm)
- OS Element Property Set (atlas.en-us.psc_api.meta/psc_api/connect_responses_os_element_property_set_output.htm)
