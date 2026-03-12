---
title: "DescribeCompactLayoutsResult"
domain: api
topic: describecompactlayoutsresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.002Z
estimatedTokens: 664
keywords: [DescribeCompactLayoutsResult, containing, top-level, record, DescribeCompactLayout, RecordTypeCompactLayoutMapping]
---

# DescribeCompactLayoutsResult

> Returns a DescribeCompactLayoutsResult object containing top-level record type
    information.

# DescribeCompactLayoutsResult

Returns a DescribeCompactLayoutsResult object containing top-level record type information.

The describeCompactLayouts() call returns a DescribeCompactLayoutsResult object containing top-level record type information about the passed-in sObjectType, as well as a mapping of record types to compact layouts. Your client application can traverse this object to retrieve detailed metadata about the compact layout.

| Name | Type | Description |
| --- | --- | --- |
| compactLayouts | DescribeCompactLayout[] | List of all the compact layouts in use by the object. |
| defaultCompactLayoutId | ID | ID of the primary compact layout assigned to the object. The system default compact layout ID has a value of null. |
| recordTypeCompactLayoutMappings | RecordTypeCompactLayoutMapping[] | Record type mapping(s) for the object. The compact layouts associated with the object may be mapped to more than one record type. |

## DescribeCompactLayout

Represents an individual item in the DescribeCompactLayout list.

| Name | Type | Description |
| --- | --- | --- |
| actions | DescribeLayoutButtonSection[] | Array of one or more DescribeLayoutButtonSection items assigned to the compact layout. This list is set by Salesforce and is read-only. |
| fieldItems | DescribeLayoutItem[] | Array of one or more fields assigned to the compact layout. |
| id | ID | Unique ID of this CompactLayout. For information on IDs, see ID Field Type. |
| imageItems | DescribeLayoutItem[] | Array of one or more images assigned to the compact layout. This list is set by Salesforce and is read-only. |
| label | string | Label of the compact layout. |
| name | string | API name of the compact layout. |
| objectType | string | The name of the object to which the compact layout is assigned. |

## RecordTypeCompactLayoutMapping

Represents a single record type mapping in the recordTypeCompactLayoutMappings field in a DescribeCompactLayoutsResult object. This object is a map of valid recordTypeId to compactLayoutId.

| Name | Type | Description |
| --- | --- | --- |
| available | boolean | Indicates whether this record type is available (true) or not (false). Availability is used to display a list of available record types to the user when they are creating a new record. |
| compactLayoutId | ID | ID of the compact layout associated with this record type. This field has a value of null if the record type is associated with the system default compact layout. |
| compactLayoutName | string | API name of the compact layout. |
| recordTypeName | string | API name of the record type. |
| recordTypeId | ID | ID of the record type. |
