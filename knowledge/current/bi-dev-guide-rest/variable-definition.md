---
title: "Variable Definition"
domain: bi-dev-guide-rest
topic: variable-definition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:03:11.408Z
estimatedTokens: 1733
keywords: [Variable, Definition, Analytics, template, Specific, responses, listed]
---

# Variable Definition

> The variable definition for an Analytics template. Specific variable type responses are
    listed here.

# Variable Definition

The variable definition for an Analytics template. Specific variable type responses are listed here.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| computed​Value | Object | The computed value of the variable. This value is set by integrated apex implementations. | Small, 38.0 | 38.0 |
| default​Value | Object | The default value of the variable. | Small, 36.0 | 36.0 |
| description | String | The description of the variable. | Small, 36.0 | 36.0 |
| exclude​Selected | Boolean | Indicates whether this variable excludes already selected values or not. | Small, 36.0 | 36.0 |
| excludes | String[] | The list of values to exclude from the variable selection. | Small, 36.0 | 36.0 |
| label | String | The label for the variable. | Small, 36.0 | 36.0 |
| most​Recent​Value | Object | The value specified in the most recent app creation process. | Small, 36.0 | 36.0 |
| required | Boolean | Indicates whether the variable is required or not. | Small, 36.0 | 36.0 |
| variable​Type | Variable​Type | The type of the variable. Valid variable types are:Array​TypeBoolean​TypeCalculated​Insight​Field​TypeCalculated​Insight​TypeConnector​TypeData​Lake​Object​Field​TypeData​Lake​Object​TypeData​Model​Object​Field​TypeData​Model​Object​TypeDataset​Any​Field​TypeDataset​Date​TypeDataset​Dimension​TypeDataset​Measure​TypeDataset​TypeDate​Time​TypeNumber​TypeObject​TypeSObject​Field​TypeSObject​TypeString​Type | Small, 36.0 | 36.0 |

Array Type

ArrayType inherits properties from the abstract [VariableType](#VariableType). These base properties appear in ArrayType alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| enums | Object | The restricted list of enumerated values for the array. | Small, 36.0 | 36.0 |
| items​Type | Variable​Type | The variable type contents of the array variable type. | Small, 36.0 | 36.0 |
| size​Limit | Size​Limit | The size limit of the array. | Small, 36.0 | 36.0 |

Boolean Type

BooleanType inherits properties from the abstract [VariableType](#VariableType). These base properties appear in BooleanType alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| enums | Boolean[] | The restricted list of enumerated values for the boolean variable type. | Small, 36.0 | 36.0 |

Connector Type

ConnectorType inherits properties from the abstract [VariableType](#VariableType). These base properties appear in ConnectorType alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| enums | String[] | The restricted list of enumerated string values for the connector variable type. | Small, 48.0 | 48.0 |

Dataset Any Field Type

DatasetAnyFieldType inherits properties from the abstract [BaseObjectType](#BaseObjectType).

Dataset Date Type

DatasetDateType inherits properties from the abstract [BaseObjectType](#BaseObjectType).

Dataset Dimension Type

DatasetDimensionType inherits properties from the abstract [BaseObjectType](#BaseObjectType).

Dataset Measure Type

DatasetMeasureType inherits properties from the abstract [BaseObjectType](#BaseObjectType).

Dataset Type

DatasetType inherits properties from the abstract [BaseObjectType](#BaseObjectType).

Date Time Type

DateTimeType inherits properties from the abstract [VariableType](#VariableType).

Number Type

NumberType inherits properties from the abstract [VariableType](#VariableType). These base properties appear in NumberType alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| enums | Double[] | The restricted list of enumerated double values for the numeric variable type. | Small, 36.0 | 36.0 |
| max | Double | The maximum allowed value of the number. | Small, 36.0 | 36.0 |
| min | Double | The minimum allowed value of the number. | Small, 36.0 | 36.0 |

Object Type

ObjectType inherits properties from the abstract [BaseObjectType](#BaseObjectType).

SObject Field Type

SObjectFieldType inherits properties from the abstract [BaseObjectType](#BaseObjectType). These base properties appear in SObjectFieldType alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| data​Type | String | The sObject field data type when a default field is not supplied. The valid data types are XSD data types, for example: xsd:string | Small, 36.0 | 36.0 |

SObject Type

SObjectType inherits properties from the abstract [BaseObjectType](#BaseObjectType).

String Type

StringType inherits properties from the abstract [VariableType](#VariableType). These base properties appear in StringType alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| enums | String[] | The restricted list of enumerated values for the string variable type. | Small, 36.0 | 36.0 |

Base Object Type

BaseObjectType inherits properties from the abstract [VariableType](#VariableType). These base properties appear in BaseObjectType alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| properties | Map<String, Variable​Type> | The defined properties and types of the object variable type. | Small, 36.0 | 36.0 |
| required | String[] | The required properties of the object variable type. | Small, 36.0 | 36.0 |
| strict​Validation | Boolean | Indicates whether to use strict validation when unexpected properties exist in the object's payload or not. | Small, 36.0 | 36.0 |

Variable Type

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| type | Variable​Type​Enum | The type of the variable. Valid values are:ArrayTypeBooleanTypeConnectorTypeDatasetAnyFieldTypeDatasetDateTypeDatasetDimensionTypeDatasetMeasureTypeDatasetTypeDateTimeTypeNumberTypeObjectTypeSobjectFieldTypeSobjectTypeStringType | Small, 36.0 | 36.0 |

Size Limit

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| min | Integer | The minimum number of elements in the array. | Small, 37.0 | 37.0 |
| max | Integer | The maximum number of elements in the array. | Small, 37.0 | 37.0 |

## Related Topics

- Variable​Type (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_variable_type.htm)
- Array​Type (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_array_type.htm)
- Boolean​Type (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_boolean_type.htm)
- Calculated​Insight​Field​Type (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_sobject_field_type.htm)
- Calculated​Insight​Type (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_sobject_type.htm)
- Connector​Type (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_connector_type.htm)
- Data​Lake​Object​Field​Type (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_sobject_field_type.htm)
- Data​Lake​Object​Type (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_sobject_type.htm)
- Data​Model​Object​Field​Type (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_sobject_field_type.htm)
- Data​Model​Object​Type (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_sobject_type.htm)
