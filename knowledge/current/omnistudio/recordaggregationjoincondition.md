---
title: "RecordAggregationJoinCondition"
domain: omnistudio
topic: recordaggregationjoincondition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:12.612Z
keywords: [RecordAggregationJoinCondition, Supported, SOAP, API, Calls, REST, Methods, Special, Access, Rules, Fields]
---

# RecordAggregationJoinCondition

# RecordAggregationJoinCondition

Represents a condition in a join between two record aggregation objects. This object is available in API version 59.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

To access this object, you must have the Record Aggregation permission set license and the Record Aggregation Access permission.

## Fields

| Field | Details |
| --- | --- |
| JoinField | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe API name of the field on the record aggregation object's associated object that is used in the join condition. |
| NavigationSequenceNumber | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe sequence number corresponding to this join in the join sequence from the object to which the data is aggregated to the object that contains the data being aggregated. |
| RecordAggregationObjectId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe record aggregation object with which this record aggregation join condition is associated.This field is a relationship field.Relationship NameRecordAggregationObjectRelationship TypeLookupRefers ToRecordAggregationObject |
| RelatedJoinField | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe API name of the field on the related record aggregation object's associated object that is used in the join condition. |
| RelatedRecordAggrObjectId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe second record aggregation object in the join condition.This field is a relationship field.Relationship NameRelatedRecordAggrObjectRelationship TypeLookupRefers ToRecordAggregationObject |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of this record aggregation join in the join path from the object to which the data is aggregated to the object that contains the data being aggregated.Possible values are:AggregateFromAggregateToIntermediate |