---
title: "Attribute Definition"
domain: revenue-cloud
topic: attribute-definition
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T14:37:50.363Z
keywords: [Attribute, Definition]
---

# Attribute Definition

# Attribute Definition

Output representation of the attribute definition.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| additional​Fields | Map<String, Additional Fields Input> | Key-value pair of additional standard or custom fields to include in the response. | Small, 61.0 | 61.0 |
| attribute​Name​Override | String | Name to display for the attribute, which overrides the name on the attribute. For example, the Color attribute is overridden to display as Laptop Color. | Small, 60.0 | 60.0 |
| code | String | Unique code of the attribute definition. | Small, 60.0 | 60.0 |
| dataType | String | Data type of the attribute definition value. | Small, 60.0 | 60.0 |
| default​Value | String | Default value of the attribute. | Small, 60.0 | 60.0 |
| description | String | Description of the attribute. | Small, 60.0 | 60.0 |
| display​Type | String | Display types of the attribute. Valid values are:Radio ButtonCheckboxToggleInput DateDateTimeCurrency SymbolCurrency CodeCurrency NamePercentageTextComboboxRadio ButtonMultiSelectMultiSelectCheckboxes | Small, 60.0 | 60.0 |
| help​Text | String | Help text that appears at run time for the attribute. If data translation is set up and specified in the org, the translated description is available. | Small, 60.0 | 60.0 |
| id | String | ID of the attribute definition. | Small, 60.0 | 60.0 |
| is​Configurable | Boolean | Reserved for future use. | Small, 60.0 | 60.0 |
| is​Hidden | Boolean | Indicates whether to hide the attribute from the users in the order capture interface (true) or not (false). | Small, 60.0 | 60.0 |
| isPrice​Impacting | Boolean | Indicates whether the attribute impacts the product price (true) or not (false). | Small, 60.0 | 60.0 |
| isRead​Only | Boolean | Indicates whether the product attribute is read-only for the end users in the order capture page (true) or not (false). | Small, 60.0 | 60.0 |
| is​Required | Boolean | Indicates whether a value for the attribute is required for the assigned parent object (true) or not (false). | Small, 60.0 | 60.0 |
| is​Value​Cloneable | Boolean | Reserved for future use. | Small, 60.0 | 60.0 |
| label | String | Label of the attribute. If data translation is set up and specified in the org, the translated description is available. | Small, 60.0 | 60.0 |
| maximum​Character​Count | Integer | Maximum number of alphanumeric characters that can be entered for attributes of type number and text in run time. | Small, 60.0 | 60.0 |
| maximum​Value | String | Maximum value that can be entered for attributes of type number, currency, and percent in run time. | Small, 60.0 | 60.0 |
| minimum​Character​Count | Integer | Minimum number of alphanumeric characters that can be entered for attributes of type number and text in run time. The minimum character count must be less than or equal to the maximum character count. | Small, 60.0 | 60.0 |
| minimum​Value | String | Minimum value that can be entered for attributes of type number, currency, and percent in run time. The minimum value must be less than or equal to the maximum value. | Small, 60.0 | 60.0 |
| name | String | Name of the attribute. | Small, 60.0 | 60.0 |
| picklist | Attribute Picklist | ID of the attribute picklist that provides the valid values for the attribute. | Small, 60.0 | 60.0 |
| sequence | Integer | Order in which the attribute values appear in the attribute definition when the product is configured at run time. | Small, 60.0 | 60.0 |
| status | String | Lifecycle state of the attribute picklist. Valid values are:ActiveDraftInactive | Small, 60.0 | 60.0 |
| step​Value | String | Reserved for future use. | Small, 60.0 | 60.0 |
| value​Decoder | String | Reserved for future use. | Small, 60.0 | 60.0 |
| value​Description | String | Description of the value assigned to the attribute. | Small, 60.0 | 60.0 |