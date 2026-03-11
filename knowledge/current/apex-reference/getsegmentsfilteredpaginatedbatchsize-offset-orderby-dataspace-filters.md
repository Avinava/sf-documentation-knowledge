---
title: "getSegmentsFilteredPaginated(batchSize, offset, orderBy,
  dataspace, filters)"
domain: apex-reference
topic: getsegmentsfilteredpaginatedbatchsize-offset-orderby-dataspace-filters
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.189Z
keywords: [getSegmentsFilteredPaginated, batchSize, offset, orderBy, dataspace, filters, Get, ordered, filtered, batch, paginated, segments, dataspace., API, Version, Requires, Chatter, Signature, Parameters, Return]
---

# getSegmentsFilteredPaginated(batchSize, offset, orderBy,
  dataspace, filters)

> Get an ordered and filtered batch of paginated segments in a dataspace.

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