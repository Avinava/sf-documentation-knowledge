---
title: "RecordAggregationObjectFilter"
domain: omnistudio
topic: recordaggregationobjectfilter
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:12.621Z
keywords: [RecordAggregationObjectFilter, Supported, SOAP, API, Calls, REST, Methods, Special, Access, Rules, Fields]
---

# RecordAggregationObjectFilter

# RecordAggregationObjectFilter

Represents a filter that is applied to the records of an object in the record aggregation join sequence. This object is available in API version 60.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

To access this object, you must have the Record Aggregation permission set license and the Record Aggregation Access permission.

## Fields

| Field | Details |
| --- | --- |
| AssociatedObjectField | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionAPI name of the associated object's field whose value is used to filter the object's records. The associated object is specified in the record aggregation object. |
| Operator | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionOperator used in the filter expression.Possible values are:ContainsEqualsGreaterThanGreaterThanOrEqualsInLessThanLessThanOrEqualsNotEqualsNotIn |
| RecordAggregationObjectId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe record aggregation object with which this record aggregation object filter is associated.This field is a relationship field.Relationship NameRecordAggregationObjectRelationship TypeLookupRefers ToRecordAggregationObject |
| SequenceNumber | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSequence number of this record aggregation object filter. |
| Value | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionReference value with which the designated field's values are compared when the filter is applied on the associated object's records. |