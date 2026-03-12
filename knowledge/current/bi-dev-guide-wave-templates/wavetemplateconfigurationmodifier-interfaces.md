---
title: "WaveTemplateConfigurationModifier
  Interfaces"
domain: bi-dev-guide-wave-templates
topic: wavetemplateconfigurationmodifier-interfaces
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.410Z
estimatedTokens: 1312
keywords: [WaveTemplateConfigurationModifier, Interfaces, main, supporting, classes, their, WaveTemplateInfo, ReleaseInfo, UIPage, Answers, Variable, VariableDefinition, VariableType]
---

# WaveTemplateConfigurationModifier
  Interfaces

> The main class is WaveTemplateConfigurationModifier with these supporting classes and their methods.

# WaveTemplateConfigurationModifier Interfaces

The main class is WaveTemplateConfigurationModifier with these supporting classes and their methods.

## WaveTemplateInfo

Provides access to a template's release information, UI information, and variable definitions

| Method | Description |
| --- | --- |
| ReleaseInfo getReleaseInfo(); | Gets the release information for the template. |
| UI getUI(); | Gets the UI information for the template configuration wizard. |
| Map<String, VariableDefinition> getVariables(); | Gets the variable definitions for the template. |

## ReleaseInfo

The release information for a template.

| Method | Description |
| --- | --- |
| String getTemplateVersion(); | Gets the version of the template. |

## UI

The UI information used to dynamically build the configuration wizard for the template.

| Method | Description |
| --- | --- |
| List<UIPage> getPages(); | Gets a list of all the pages for the configuration wizard. |

## UIPage

The information for a page in the configuration wizard.

| Method | Description |
| --- | --- |
| String getTitle(); | Gets the title of the configuration wizard page. |
| String getCondition(); | Gets the condition expression of the configuration wizard page. |
| Map<String, Variable> getVariables(); | Gets the variables for the configuration wizard page. |
| void setTitle(String title); | Set the title for the configuration wizard page. This value overrides the value specified in the JSON file. |

## Answers

Contains a collection of all the answers to the variables.

| Method | Description |
| --- | --- |
| Object get(String name); | Get the value (answer) of a specific variable (question). |
| void put(String name, Object obj); | Update the value (answer) for a specific variable (question). |

## Variable

Represents a template variable on a template configuration page.

| Method | Description |
| --- | --- |
| String getName(); | Get the name of the variable. |
| String getVisibility(); | Get the visibility of the variable in the configuration wizard. Returns a string as the value can contain a ternary operator. |
| void setVisibility(VisibilityEnum visibility); | Set the visibility of the variable in the configuration wizard. This value overrides the value specified in the JSON file. Valid values are:DisabledHiddenVisible |

## VariableDefinition

Represents a template variable definition.

| Method | Description |
| --- | --- |
| String getName(); | Get the name for the variable definition. |
| String getLabel(); | Get the label for the variable definition. |
| String getDescription(); | Get the description for the variable definition. |
| Object getDefaultValue(); | Get the default value for the variable definition. |
| VariableType getVariableType(); | Get the variable type information for the variable definition. |
| Boolean isRequired(); | Indicates whether a variable value is required for this variable definition (true) or not (false). |
| Boolean isExcludeSelected(); | Indicates whether values selected in other variables should be excluded from this variable definition (true) or not (false). |
| Set<String> getExcludes(); | Return a list of variable values to be excluded from the pick list displayed to the user. This can be a single regex. |
| void setLabel(String label); | Set the label for the variable definition. This value overrides the label specified in the JSON file. |
| void setDescription(String description); | Set the description for the variable definition. This value overrides the description specified in the JSON file. |
| void setComputedValue(String Object); | Set the computed value for the variable definition. This value overrides the value specified in the JSON file and replaces the defaultValue. |
| void setRequired(Boolean required); | Set the isRequired value for the variable definition. This value overrides the value specified in the JSON file. |
| void setExcludes(Set<String> excludes); | Set the excludes list value for the variable definition. This value overrides the value specified in the JSON file. |

## VariableType

The variable type of a variable definition.

| Method | Description |
| --- | --- |
| VariableTypeEnum getType(); | Gets the variable type for the variable definition. Valid values are:BooleanTypeStringTypeNumberTypeArrayTypeDateTimeTypeObjectTypeSobjectTypeSobjectFieldTypeDatasetTypeDatasetDimensionTypeDatasetMeasureTypeDatasetDateType |
| String getDataType(); | Gets the SOAP data type for a SObjectFieldType variable definition. Valid values are:xsd:intxsd:stringxsd:datetime,xsd:booleanxsd:any |
| VariableTypeEnum getType(); | Gets the variable type for the variable definition. Valid values are:BooleanTypeStringTypeNumberTypeArrayTypeDateTimeTypeObjectTypeSobjectTypeSobjectFieldTypeDatasetTypeDatasetDimensionTypeDatasetMeasureTypeDatasetDateType |
| VariableType getItemsType(); | Gets the variable type for each entry in an ArrayType variable definition. |
| Set<Object> getEnums(); | Gets the enumerated values for a StringType or NumberType variable definition. |
| void setEnums(Set<Object> enums); | Set the enumerated values for a StringType or NumberType variable definition. These values overrides the values specified in the JSON file. |
