---
title: "getSegmentsPaginated(batchSize, offset,
    orderBy)"
domain: apex-reference
topic: getsegmentspaginatedbatchsize-offset-orderby
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.189Z
keywords: [getSegmentsPaginated, batchSize, offset, orderBy, Get, ordered, batch, paginated, segments., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getSegmentsPaginated(batchSize, offset,
    orderBy)

> Get an ordered batch of paginated segments.

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