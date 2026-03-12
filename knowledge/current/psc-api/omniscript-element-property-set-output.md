---
title: "Omniscript Element Property Set Output"
domain: psc-api
topic: omniscript-element-property-set-output
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:31.148Z
estimatedTokens: 516
keywords: [Omniscript, Element, Output, representation, configuration, elements]
---

# Omniscript Element Property Set Output

> Output representation of the property set configuration of the Omniscript
    elements.

# Omniscript Element Property Set Output

Output representation of the property set configuration of the Omniscript elements.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| checkLabel | String | Label of the Omniscript element from the property set configuration. | Small, 60.0 | 60.0 |
| conditionType | String | Condition type of the Omniscript element from the property set configuration. | Small, 60.0 | 60.0 |
| dataType | String | Data type of the formula for the Omniscript element from the property set configuration. | Small, 60.0 | 60.0 |
| dateFormat | String | Date format of the Omniscript element from the property set configuration. | Small, 60.0 | 60.0 |
| expression | String | Formula expression of the Omniscript element from the property set configuration. | Small, 60.0 | 60.0 |
| help | String | Help details of the Omniscript element from the property set configuration. | Small, 60.0 | 60.0 |
| helpText | String | Help text of the Omniscript element from the property set configuration. | Small, 60.0 | 60.0 |
| label | String | Label of the Omniscript element from the property set configuration. | Small, 60.0 | 60.0 |
| options | List<Map<String, Object>> | Options of the Omniscript element from the property set configuration. | Small, 60.0 | 60.0 |
| radioLabels | List<Map<String, Object>> | Radio labels of the Omniscript element from the property set configuration for the radio group child questions. | Small, 60.0 | 60.0 |
| required | String | Specifies whether the Omniscript element is required to submit the form. | Small, 60.0 | 60.0 |
| show | Map<String, Object> | Display field details for the conditional rendering of the Omniscript element from the property set configuration. | Small, 60.0 | 60.0 |
| text | String | Text of the Omniscript element from the property set configuration. | Small, 60.0 | 60.0 |
| type | String | Type of the Omniscript element from the property set configuration. | Small, 60.0 | 60.0 |

## Code Examples

```
"PropertySetConfig": {
            "label": "Can you provide more details about the transaction",
            "defaultValue": null,
            "help": false,
            "helpText": "",
            "show": null,
            "conditionType": "Hide if False"
          }
```
