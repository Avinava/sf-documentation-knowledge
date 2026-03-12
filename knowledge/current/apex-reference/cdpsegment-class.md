---
title: "CdpSegment Class"
domain: apex-reference
topic: cdpsegment-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:15.927Z
estimatedTokens: 4982
namespace: ConnectApi
keywords: [CdpSegment, Create, segment., createSegment, input, API, Version, Requires, Chatter, dataspace, deactivateSegmentByApiName, segmentApiName, deactivateSegmentById, segmentId, deleteSegment, executePublishAdhoc, getSegment, getSegmentById, getSegments, getSegmentsPaginated]
---

# CdpSegment Class

> Create a segment.

**Namespace:** `ConnectApi`

# CdpSegment Class

Create, delete, get, publish, and update Data 360 segments.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## CdpSegment Methods

These methods are for CdpSegment. All methods are static.

-   **[createSegment(input)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpSegment_static_methods.htm#apex_ConnectAPI_CdpSegment_createSegment_4)**
    Create a segment.
-   **[createSegment(input, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpSegment_static_methods.htm#apex_ConnectAPI_CdpSegment_createSegment_8)**
    Create a segment in a dataspace.
-   **[deactivateSegmentByApiName(segmentApiName)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpSegment_static_methods.htm#apex_ConnectAPI_CdpSegment_deactivateSegmentByApiName_1)**
    Deactivate a segment by API name.
-   **[deactivateSegmentById(segmentId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpSegment_static_methods.htm#apex_ConnectAPI_CdpSegment_deactivateSegmentById_1)**
    Deactivate a segment by ID.
-   **[deleteSegment(segmentApiName)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpSegment_static_methods.htm#apex_ConnectAPI_CdpSegment_deleteSegment_1)**
    Delete a segment.
-   **[executePublishAdhoc(segmentId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpSegment_static_methods.htm#apex_ConnectAPI_CdpSegment_executePublishAdhoc_1)**
    Publish a segment.
-   **[getSegment(segmentApiName)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpSegment_static_methods.htm#apex_ConnectAPI_CdpSegment_getSegment_3)**
    Get a segment by API name.
-   **[getSegmentById(segmentId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpSegment_static_methods.htm#apex_ConnectAPI_CdpSegment_getSegmentById)**
    Get a segment by ID.
-   **[getSegments()](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpSegment_static_methods.htm#apex_ConnectAPI_CdpSegment_getSegments_2)**
    Get segments.
-   **[getSegmentsPaginated(batchSize, offset, orderBy)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpSegment_static_methods.htm#apex_ConnectAPI_CdpSegment_getSegmentsPaginated_4)**
    Get an ordered batch of paginated segments.
-   **[getSegmentsPaginated(batchSize, offset, orderBy, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpSegment_static_methods.htm#apex_ConnectAPI_CdpSegment_getSegmentsPaginated_5)**
    Get an ordered batch of paginated segments in a dataspace.
-   **[getSegmentsFilteredPaginated(batchSize, offset, orderBy, filters)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpSegment_static_methods.htm#apex_ConnectAPI_CdpSegment_getSegmentsFilteredPaginated_6)**
    Get an ordered and filtered batch of paginated segments.
-   **[getSegmentsFilteredPaginated(batchSize, offset, orderBy, dataspace, filters)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpSegment_static_methods.htm#apex_ConnectAPI_CdpSegment_getSegmentsFilteredPaginated_7)**
    Get an ordered and filtered batch of paginated segments in a dataspace.
-   **[updateSegment(segmentApiName, input)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpSegment_static_methods.htm#apex_ConnectAPI_CdpSegment_updateSegment_4)**
    Update a segment.

### createSegment(input)

Create a segment.

#### API Version

55.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpSegmentOutput createSegment(ConnectApi.CdpSegmentInput input)

#### Parameters

input

Type: [ConnectApi.CdpSegmentInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_segment.htm "Segment input.")

A ConnectApi.CdpSegmentInput class.

#### Return Value

Type: [ConnectApi.CdpSegmentOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_segment_output.htm "Segment.")

### createSegment(input, dataspace)

Create a segment in a dataspace.

#### API Version

58.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpSegmentOutput createSegment(ConnectApi.CdpSegmentInput input, String dataspace)

#### Parameters

input

Type: [ConnectApi.CdpSegmentInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_segment.htm "Segment input.")

A ConnectApi.CdpSegmentInput class.

dataspace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the dataspace in which to perform the action. The user must have permission to the specified dataspace. Specify default to use the default dataspace.

#### Return Value

Type: [ConnectApi.CdpSegmentOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_segment_output.htm "Segment.")

### deactivateSegmentByApiName(segmentApiName)

Deactivate a segment by API name.

#### API Version

59.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpSegmentActionOutput deactivateSegmentByApiName(String segmentApiName)

#### Parameters

segmentApiName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

API name of the segment.

#### Return Value

Type: [ConnectApi.CdpSegmentActionOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_segment_action_output.htm "Segment action.")

### deactivateSegmentById(segmentId)

Deactivate a segment by ID.

#### API Version

59.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpSegmentActionOutput deactivateSegmentById(String segmentId)

#### Parameters

segmentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the segment.

#### Return Value

Type: [ConnectApi.CdpSegmentActionOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_segment_action_output.htm "Segment action.")

### deleteSegment(segmentApiName)

Delete a segment.

#### API Version

56.0

#### Requires Chatter

No

#### Signature

public static Void deleteSegment(String segmentApiName)

#### Parameters

segmentApiName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

API name of the segment.

#### Return Value

Type: Void

### executePublishAdhoc(segmentId)

Publish a segment.

#### API Version

56.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpSegmentActionOutput executePublishAdhoc(String segmentId)

#### Parameters

segmentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the segment to publish.

#### Return Value

Type: [ConnectApi.CdpSegmentActionOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_segment_action_output.htm "Segment action.")

### getSegment(segmentApiName)

Get a segment by API name.

#### API Version

56.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpSegmentContainerOutput getSegment(String segmentApiName)

#### Parameters

segmentApiName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

API name of the segment.

#### Return Value

Type: [ConnectApi.CdpSegmentContainerOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_segment_container_output.htm "Segment container.")

### getSegmentById(segmentId)

Get a segment by ID.

#### API Version

65.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpSegmentContainerOutput getSegmentById(String segmentId)

#### Parameters

segmentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the segment.

#### Return Value

Type: [ConnectApi.CdpSegmentContainerOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_segment_container_output.htm "Segment container.")

### getSegments()

Get segments.

#### API Version

55.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpSegmentContainerOutput getSegments()

#### Return Value

Type: [ConnectApi.CdpSegmentContainerOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_segment_container_output.htm "Segment container.")

### getSegmentsPaginated(batchSize, offset, orderBy)

Get an ordered batch of paginated segments.

#### API Version

56.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpSegmentContainerOutput getSegmentsPaginated(Integer batchSize, Integer offset, String orderBy)

#### Parameters

batchSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of segments to return at one time. Values are from 1 through 200. For example, specify 20 to return 20 segments.

offset

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of segments to skip before returning results. Specify 0 to skip no segments.

orderBy

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Sort order for the result set. Specify a field value followed by an optional sort order, ASC or DESC. For example, Name ASC sorts results by Name in ascending order, and MarketSegmentType DESC sorts results by MarketSegmentType in descending order. Omit ASC and DESC to return results in ascending order by default.

#### Return Value

Type: [ConnectApi.CdpSegmentContainerOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_segment_container_output.htm "Segment container.")

### getSegmentsPaginated(batchSize, offset, orderBy, dataspace)

Get an ordered batch of paginated segments in a dataspace.

#### API Version

58.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpSegmentContainerOutput getSegmentsPaginated(Integer batchSize, Integer offset, String orderBy, String dataspace)

#### Parameters

batchSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of segments to return at one time. Values are from 1 through 200. For example, specify 20 to return 20 segments.

offset

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of segments to skip before returning results. Specify 0 to skip no segments.

orderBy

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Sort order for the result set. Specify a field value followed by an optional sort order, ASC or DESC. For example, Name ASC sorts results by Name in ascending order, and MarketSegmentType DESC sorts results by MarketSegmentType in descending order. Omit ASC and DESC to return results in ascending order by default.

dataspace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the dataspace in which to perform the action. The user must have permission to the specified dataspace. Specify default to use the default dataspace.

#### Return Value

Type: [ConnectApi.CdpSegmentContainerOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_segment_container_output.htm "Segment container.")

### getSegmentsFilteredPaginated(batchSize, offset, orderBy, filters)

Get an ordered and filtered batch of paginated segments.

#### API Version

65.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpSegmentContainerOutput getSegmentsFilteredPaginated(Integer batchSize, Integer offset, String orderBy, String filters)

#### Parameters

batchSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of segments to return at one time. Values are from 1 through 200. For example, specify 20 to return 20 segments.

offset

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of segments to skip before returning results. Specify 0 to skip no segments.

orderBy

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Sort order for the result set. Specify a field value followed by an optional sort order, ASC or DESC. For example, Name ASC sorts results by Name in ascending order, and MarketSegmentType DESC sorts results by MarketSegmentType in descending order. Omit ASC and DESC to return results in ascending order by default.

filters

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Filter the result set to a more narrow scope based on segment attributes. Specify a maximum of 10 filters. Separate each filter by an AND logical operator.

These values are supported:

-   LastPublishedEndDateTime - Not present in the output type. Indicates the end date and time when the segment was last published. Use only the != operator with this value.
-   MarketSegmentType - Matches field segmentType.
-   Name - Matches field disaplyName.
-   SegmentOn - Matches field segmentOnApiName.
-   SegmentStatus - Matches field segmentStatus.

These operators are supported:

-   contains - Search operator for identifying strings or substrings within a field.
-   eq - Equality operator for identifying values that match exactly.
-   in - Comparison operator for determining whether a field matches one or more specified values.
-   != - Inequality operator for determining values that don't match.

These are examples of filter parameter specifications:

-   Name != NULL AND Name In Seg 01,seg 02 AND Name contains seg AND Name eq seg 01
-   SegmentStatus != NULL AND SegmentStatus In Processing,Active AND SegmentStatus contains ive AND SegmentStatus eq active
-   MarketSegmentType != NULL AND MarketSegmentType In UI,Dbt AND MarketSegmentType contains i AND MarketSegmentType eq UI
-   SegmentOn != NULL AND SegmentOn In individual,account AND SegmentOn contains ual AND SegmentOn eq Account
-   SegmentOn != NULL AND SegmentOn In individual,account AND SegmentOn contains nt AND SegmentOn eq Account
-   LastPublishedEndDateTime != NULL

#### Return Value

Type: [ConnectApi.CdpSegmentContainerOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_segment_container_output.htm "Segment container.")

### getSegmentsFilteredPaginated(batchSize, offset, orderBy, dataspace, filters)

Get an ordered and filtered batch of paginated segments in a dataspace.

#### API Version

65.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpSegmentContainerOutput getSegmentsFilteredPaginated(Integer batchSize, Integer offset, String orderBy, String dataspace, String filters)

#### Parameters

batchSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of segments to return at one time. Values are from 1 through 200. For example, specify 20 to return 20 segments.

offset

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of segments to skip before returning results. Specify 0 to skip no segments.

orderBy

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Sort order for the result set. Specify a field value followed by an optional sort order, ASC or DESC. For example, Name ASC sorts results by Name in ascending order, and MarketSegmentType DESC sorts results by MarketSegmentType in descending order. Omit ASC and DESC to return results in ascending order by default.

dataspace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the dataspace in which to perform the action. The user must have permission to the specified dataspace. Specify default to use the default dataspace.

filters

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Filter the result set to a more narrow scope based on segment attributes. Specify a maximum of 10 filters. Separate each filter by an AND logical operator.

These values are supported:

-   LastPublishedEndDateTime - Not present in the output type. Indicates the end date and time when the segment was last published. Use only the != operator with this value.
-   MarketSegmentType - Matches field segmentType.
-   Name - Matches field disaplyName.
-   SegmentOn - Matches field segmentOnApiName.
-   SegmentStatus - Matches field segmentStatus.

These operators are supported:

-   contains - Search operator for identifying strings or substrings within a field.
-   eq - Equality operator for identifying values that match exactly.
-   in - Comparison operator for determining whether a field matches one or more specified values.
-   != - Inequality operator for determining values that don't match.

These are examples of filter parameter specifications:

-   Name != NULL AND Name In Seg 01,seg 02 AND Name contains seg AND Name eq seg 01
-   SegmentStatus != NULL AND SegmentStatus In Processing,Active AND SegmentStatus contains ive AND SegmentStatus eq active
-   MarketSegmentType != NULL AND MarketSegmentType In UI,Dbt AND MarketSegmentType contains i AND MarketSegmentType eq UI
-   SegmentOn != NULL AND SegmentOn In individual,account AND SegmentOn contains ual AND SegmentOn eq Account
-   SegmentOn != NULL AND SegmentOn In individual,account AND SegmentOn contains nt AND SegmentOn eq Account
-   LastPublishedEndDateTime != NULL

#### Return Value

Type: [ConnectApi.CdpSegmentContainerOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_segment_container_output.htm "Segment container.")

### updateSegment(segmentApiName, input)

Update a segment.

#### API Version

56.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpSegmentOutput updateSegment(String segmentApiName, ConnectApi.CdpSegmentInput input)

#### Parameters

segmentApiName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

API name of the segment.

input

Type: [ConnectApi.CdpSegmentInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_segment.htm "Segment input.")

A ConnectApi.CdpSegmentInput class with the updates.

#### Return Value

Type: [ConnectApi.CdpSegmentOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_segment_output.htm "Segment.")

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- createSegment(input) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpSegment_static_methods.htm)
- createSegment(input, dataspace) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpSegment_static_methods.htm)
- deactivateSegmentByApiName(segmentApiName) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpSegment_static_methods.htm)
- deactivateSegmentById(segmentId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpSegment_static_methods.htm)
- deleteSegment(segmentApiName) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpSegment_static_methods.htm)
- executePublishAdhoc(segmentId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpSegment_static_methods.htm)
- getSegment(segmentApiName) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpSegment_static_methods.htm)
- getSegmentById(segmentId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpSegment_static_methods.htm)
- getSegments() (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpSegment_static_methods.htm)
