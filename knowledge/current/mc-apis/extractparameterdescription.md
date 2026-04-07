---
title: "ExtractParameterDescription"
domain: mc-apis
topic: extractparameterdescription
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:21.804Z
estimatedTokens: 264
keywords: [ExtractParameterDescription]
---

# ExtractParameterDescription

# ExtractParameterDescription

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| DataType | ExtractParameterDataType | This has been deprecated. Use ValueType. (PropertyDefinition) The data type of the parameter to pass to the Data Extract. Use the data type to dynamically build a user interface with some basic data validation. (ExtractParameterDescription) |
| DefaultValue | xsd:string | The default value for a data extension field if no value is supplied (Include Now() as the default value if you wish to have a field default to today's date). Used by ExtractParameterDescription as the default value for the parameter if not suppliedwhen a data extract is executed. Used by PropertyDefinition if the default value for the attribute if not suppliedfor a data profile attribute. |
| DropDownList | xsd:string | Specifies the multiple potential values for a dropdown list in an extract parameter. |
| IsOptional | xsd:boolean | Indicates whether a parameter is optional. |
| Name | xsd:string | Name of the object or property. |
