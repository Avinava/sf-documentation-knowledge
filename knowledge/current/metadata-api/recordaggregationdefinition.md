---
title: "RecordAggregationDefinition"
domain: metadata-api
topic: recordaggregationdefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:54.288Z
keywords: [RecordAggregationDefinition, Important, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, RecordAggregationObject, RecordAggregationJoinCondition, RecordAggregationObjectFilter, Declarative, Metadata, Sample, Definition]
---

# RecordAggregationDefinition

# RecordAggregationDefinition

Represents a data aggregation from one object to another object to which it is connected by other objects in the data model.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

RecordAggregationDefinition components have the suffix .RecordAggregationDefinition and are stored in the RecordAggregationDefinitions folder.

## Version

RecordAggregationDefinition components are available in API version 59.0 and later.

## Special Access Rules

To access the RecordAggregationDefinition metadata type, you must have the Record Aggregation permission set license and the Record Aggregation Access permission.

## Fields

| Field Name | Description |
| --- | --- |
| aggregateFromObject | Field TypestringDescriptionRequired.API name of the object from which data is aggregated. |
| aggregateToObject | Field TypestringDescriptionRequired.API name of the object to which data is aggregated. |
| aggregationType | Field TypeRecordAggregationDefinitionAggregationType (enumeration of type string)DescriptionRequired.Type of the data aggregation.Valid value is:Record |
| batchProcessingDefinition | Field TypestringDescriptionData Processing Engine definition that aggregates data from one record to another. |
| description | Field TypestringDescriptionDescription for this record aggregation definition. |
| displayName | Field TypestringDescriptionRequired.Name of the record aggregation definition that's displayed in the record page. |
| onDemandProcDefinition | Field TypestringDescriptionData Processing Engine definition that aggregates data from one record to another on demand. Available in API version 63.0 and later. |
| recordAggregationObject | Field TypeRecordAggregationObject[]DescriptionList of record aggregation objects in the record aggregation join sequence. |
| status | Field TypeRecordAggregationDefinitionStatus (enumeration of type string)DescriptionRequired.Status of this record aggregation definition.Values are:ActiveDraftInactive |

## RecordAggregationObject

Represents an object in the record aggregation join sequence.

| Field Name | Description |
| --- | --- |
| associatedObject | Field TypestringDescriptionRequired.API name of the object associated with this record aggregation object. |
| developerName | Field TypestringDescriptionDeveloper name of the record aggregation object. May contain only underscores and alphanumeric characters and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. |
| filterLogic | Field TypestringDescriptionLogical sequence in which the record aggregation object filters associated with this record aggregation object are applied to the associated object's records. If you define two or more record aggregation object filters, but don’t specify the sequence in which to apply the filters, the filters are applied by using a logical AND expression.Available in API version 60.0 and later. |
| masterLabel | Field TypestringDescriptionRequired.A user-friendly name for RecordAggregationDefinition, which is defined when the RecordAggregationDefinition is created. |
| recordAggregationJoinCondition | Field TypeRecordAggregationJoinCondition[]DescriptionList of join conditions that apply to this record aggregation object. |
| recordAggregationObjectFilter | Field TypeRecordAggregationObjectFilter[]DescriptionList of filters that are applied to the records of this record aggregation object.Available in API version 60.0 and later. |

## RecordAggregationJoinCondition

Represents a condition in a join between two record aggregation objects.

| Field Name | Description |
| --- | --- |
| joinField | Field TypestringDescriptionRequired.API name of the field on the record aggregation object's associated object that is used in the join condition. |
| navigationSequenceNumber | Field TypeintDescriptionRequired.Sequence number corresponding to this join in the join sequence from the object to which the data is aggregated to the object that contains the data being aggregated. |
| relatedJoinField | Field TypestringDescriptionRequired.API name of the field on the related record aggregation object's associated object that is used in the join condition. |
| relatedRecordAggregationObject | Field TypestringDescriptionRequired.Second record aggregation object in the join condition. |
| type | Field TypeRecordAggregationJoinConditionType (enumeration of type string)DescriptionRequired.Type of this record aggregation join in the join path from the object to which the data is aggregated to the object that contains the data being aggregated.Valid values are:AggregateFromAggregateToIntermediate |

## RecordAggregationObjectFilter

Represents a filter that is applied to the records of an object in the record aggregation join sequence. Available in API version 60.0 and later.

| Field Name | Description |
| --- | --- |
| associatedObjectField | Field TypestringDescriptionRequired.API name of the associated object's field whose value is used to filter the object's records. The associated object is specified in the record aggregation object. |
| operator | Field TypeRecordAggregationObjectFilterOperator (enumeration of type string)DescriptionRequired.Operator used in the filter expression.Values are:ContainsEqualsGreaterThanGreaterThanOrEqualsInLessThanLessThanOrEqualsNotEqualsNotIn |
| sequenceNumber | Field TypeintDescriptionRequired.Sequence number of this record aggregation object filter. |
| value | Field TypestringDescriptionRequired.Reference value with which the designated field's values are compared when the filter is applied on the associated object's records. |

## Declarative Metadata Sample Definition

The following is an example of a RecordAggregationDefinition component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based.htm "HTML (New Window)").