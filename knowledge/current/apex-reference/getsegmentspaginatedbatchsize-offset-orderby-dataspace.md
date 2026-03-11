---
title: "getSegmentsPaginated(batchSize, offset, orderBy,
      dataspace)"
domain: apex-reference
topic: getsegmentspaginatedbatchsize-offset-orderby-dataspace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.189Z
keywords: [getSegmentsPaginated, batchSize, offset, orderBy, dataspace, Get, ordered, batch, paginated, segments, dataspace., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getSegmentsPaginated(batchSize, offset, orderBy,
      dataspace)

> Get an ordered batch of paginated segments in a dataspace.

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