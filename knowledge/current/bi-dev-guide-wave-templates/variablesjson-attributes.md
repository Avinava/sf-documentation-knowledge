---
title: "variables.json Attributes"
domain: bi-dev-guide-wave-templates
topic: variablesjson-attributes
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.715Z
estimatedTokens: 772
keywords: [variables.json, Attributes, Named, nodes, representing, variable, node, variableType]
---

# variables.json Attributes

> Named nodes, each representing a single variable. Each node contains the following
    attributes:

# variables.json Attributes

Named nodes, each representing a single variable. Each node contains the following attributes:

## variable Attributes

| Attribute | Required | Description |
| --- | --- | --- |
| computedValue | No | The computed value for the variable. The computed value is set by the WaveTemplateConfigurationModifier implementation. |
| description | No | Additional text that appears under the label for more information. |
| defaultValue | No | The default value for the variable, if the user doesn’t change the value in the wizard. Can be the most likely value a user would use. |
| excludeSelected | No | Indicates whether values selected for another variable are excluded from the list of values for this variable () or not (). For use with variable types like SObjectType or SObjectFieldType. The default is false. |
| excludes | No | Allows specific values to be excluded from the picker selections |
| label | No | The visible label for the variable in the UI wizard. The format is typically a question like “Do you use product?”. |
| required | No | Indicates whether the variable value required in the UI. The default is false. |
| variableType | No | The variable type. |

## variableType Attributes

| Attribute | Required | Description |
| --- | --- | --- |
| dataType | No | Specifies the data type for a FieldType variable types.The data type value format for SObjectFieldType is xsd:string. See Primitive Data Types in the Salesforce Object Reference for more values.For DataLakeObjectFieldType and DataModelObjectFieldType, valid values are string, number, date, and date_time. |
| fieldType | No | Specifies the field type for a CalculatedInsightsFieldType variable. Valid values are dimension and measure. |
| enums | No | Specifies a list of values for an enumerated variable type for a StringType or NumberType variable type. |
| enumsLabels | No | Specifies a list of labels for the enumerated values of a StringType or NumberType variable only. |
| itemsType | No | Specifies the items type for an ArrayType variable. The items type must be a valid variable type. |
| max | No | Specifies the maximum value for a NumberType variable only. |
| min | No | Specifies the minimum value for a NumberType variable only. |
| type | Yes | The type of the variable. Valid types are:ArrayType (Enumerated)BooleanType (Enumerated)CalculatedInsightFieldType (Object)CalculatedInsightType (Object)ConnectorType (String)DataLakeFieldObjectType (Object)DataLakeObjectType (Object)DataModelFieldObjectType (Object)DataModelObjectType (Object)DatasetAnyFieldType (Object)DatasetDateType (Object)DatasetDimensionType (Object)DatasetMeasureType (Object)DatasetType (Object)DateTimeTypeNumberType (Enumerated)SObjectFieldType (Object)SObjectType (Object)StringType (Enumerated) |

#### See Also

-   [Edit variables.json](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_edit_variables_json.htm "The variables.json file describes all the variables used in the template-info.json, ui.json, and the different rules.json files.")

## Related Topics

- Edit variables.json (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_edit_variables_json.htm)
