---
title: "ConnectApi.CdpSegmentContainerOutput"
domain: apex-reference
topic: connectapicdpsegmentcontaineroutput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:26.704Z
estimatedTokens: 509
keywords: [ConnectApi.CdpSegmentContainerOutput, Segment, container]
---

# ConnectApi.CdpSegmentContainerOutput

> Segment container.

# ConnectApi.CdpSegmentContainerOutput

Segment container.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| batchSize | Integer | Number of items returned. | 56.0 |
| offset | Integer | Number of rows skipped before returning results. | 56.0 |
| orderByExpression | String | Expression indicating how results are ordered. | 56.0 |
| segments | List<ConnectApi.​CdpSegmentOutput> | List of segments. | 55.0 |

#### See Also

-   [getSegment(segmentApiName)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpSegment_static_methods.htm#apex_ConnectAPI_CdpSegment_getSegment_3 "Get a segment by API name.")

-   [getSegmentById(segmentId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpSegment_static_methods.htm#apex_ConnectAPI_CdpSegment_getSegmentById "Get a segment by ID.")

-   [getSegments()](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpSegment_static_methods.htm#apex_ConnectAPI_CdpSegment_getSegments_2 "Get segments.")

-   [getSegmentsPaginated(batchSize, offset, orderBy)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpSegment_static_methods.htm#apex_ConnectAPI_CdpSegment_getSegmentsPaginated_4 "Get an ordered batch of paginated segments.")

-   [getSegmentsPaginated(batchSize, offset, orderBy, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpSegment_static_methods.htm#apex_ConnectAPI_CdpSegment_getSegmentsPaginated_5 "Get an ordered batch of paginated segments in a dataspace.")

-   [getSegmentsFilteredPaginated(batchSize, offset, orderBy, filters)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpSegment_static_methods.htm#apex_ConnectAPI_CdpSegment_getSegmentsFilteredPaginated_6 "Get an ordered and filtered batch of paginated segments.")

-   [getSegmentsFilteredPaginated(batchSize, offset, orderBy, dataspace, filters)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpSegment_static_methods.htm#apex_ConnectAPI_CdpSegment_getSegmentsFilteredPaginated_7 "Get an ordered and filtered batch of paginated segments in a dataspace.")

## Related Topics

- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​CdpSegmentOutput (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_segment_output.htm)
- getSegment(segmentApiName) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpSegment_static_methods.htm)
- getSegmentById(segmentId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpSegment_static_methods.htm)
- getSegments() (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpSegment_static_methods.htm)
- getSegmentsPaginated(batchSize, offset, orderBy) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpSegment_static_methods.htm)
- getSegmentsPaginated(batchSize, offset, orderBy, dataspace) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpSegment_static_methods.htm)
- getSegmentsFilteredPaginated(batchSize, offset, orderBy, filters) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpSegment_static_methods.htm)
