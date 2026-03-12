---
title: "MLDataDefinition"
domain: metadata-api
topic: mldatadefinition
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:41.194Z
estimatedTokens: 1319
keywords: [MLDataDefinition, Represents, modeling, data, definition, which, specifies, used, create, model., Such, include, filters, fields, exclude, on., extends, Metadata, metadata, inherits]
---

# MLDataDefinition

> Represents a modeling data definition, which specifies the data used to create a model.
    Such data can include filters, fields to include, fields to exclude, and so on. This type
    extends the Metadata metadata type and inherits its fullName
    field.

# MLDataDefinition

Represents a modeling data definition, which specifies the data used to create a model. Such data can include filters, fields to include, fields to exclude, and so on. This type extends the Metadata metadata type and inherits its fullName field.

## File Suffix and Directory Location

MLDataDefinition components have the suffix .mlDataDefinition and are stored in the mlDataDefinitions folder.

## Version

MLDataDefinition is available in API version 50.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| developerName | string | Required. Represents the name of the data definition. Can contain only underscores and alphanumeric characters and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. Only users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| entityDeveloperName | string | Required. The developer name of the object from which the model data is retrieved. After the MLDataDefinition entity is created, entityDeveloperName can’t be updated. |
| excludedFields | string[] | Fields that are excluded from the model. |
| includedFields | string[] | Fields that are included in the model. |
| joinFields | MLField[] | Reserved for future use. |
| parentDefinitionDevName | string | Reserved for future use. |
| scoringFilter | MLFilter | Specifies records to which the prediction scores are written. |
| segmentFilter | MLFilter | This field further filters data used in training and scoring when segmentFilter is combined with both scoringFilter and trainingFilter. For example, select all records in a specific region. |
| trainingFilter | MLFilter | Specifies the records that make up the training set. |
| type | MLDataDefinitionType (enumeration of type string) | Required. Valid values are:CandidateInteractionPredictionRecipientAfter the model is created, type can’t be updated. |

## MLField

Represents a single field in the data definition. Available in API version 50.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| entity | string | Required. The object that contains the field. |
| field | string | Required. The name of the field. |
| relatedField | MLField | Reserved for future use. |
| relationType | MLRelationType (enumeration of type string) | Reserved for future use. Valid values are:FullInnerLeftinnerLeftouter |
| type | MLFieldType (enumeration of type string) | Required. How the field is used in a prediction. Valid values are:ExcludedExpressionIncludedJoinPredictionPushbackRelatedSourceDate |

## MLFilter

Represents a data filter based on a data comparison. For each comparison, there’s a left-hand element, an operator, and a right-hand element. For each record, only one of these left-hand elements is populated: lhFilter, lhPredictionField, or lhValue. Similarly, for each record, only one of these right-hand elements is populated: rhFilter, rhPredictionField, or rhValue. Available in API version 50.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| filterName | string | Required. Name of the filter. |
| lhFilter | MLFilter | Left-hand filter condition. |
| lhPredictionField | string | Left-hand prediction field. |
| lhType | AIValueType (enumeration of type string) | The value type if a left-hand value is specified. Valid values are:BooleanComparisonCurrencyDateDateTimeNumberStringSupplierVarchar |
| lhUnit | AIFilterUnit (enumeration of type string) | The unit if a left-hand filter is specified. Valid values are:MillisecondsSecondsMinutesHoursDaysWeeksMonthsYears |
| lhValue | string | The left-hand value. |
| operation | AIFilterOperation (enumeration of type string) | Required. Valid values are:AndOrNotLessThanLessThanOrEqualGreaterThanGreaterThanOrEqualEqualsNotEqualsAddSubtractMultiplyDivideIsNullIsNotNullStartsWithEndsWithContainsConcatDoesNotContainBetweenIn |
| rhFilter | MLFilter | Right-hand filter condition. |
| rhPredictionField | string | Right-hand prediction field. |
| rhType | AIValueType (enumeration of type string) | The value type if a right-hand value is specified. Valid values are:BooleanComparisonCurrencyDateDateTimeNumberStringSupplierVarchar |
| rhUnit | AIFilterUnit (enumeration of type string) | The unit if a right-hand filter is specified. Valid values are:MillisecondsSecondsMinutesHoursDaysWeeksMonthsYears |
| rhValue | string | The right-hand value. |
| sortOrder | int | Specifies the order of operations for evaluating the expressions. For example, if you have two conditions, this field specifies which condition is evaluated first. |

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Related Topics

- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
