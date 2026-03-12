---
title: "ConnectApi.CdpSegmentOutput"
domain: apex-reference
topic: connectapicdpsegmentoutput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:26.589Z
estimatedTokens: 449
keywords: [ConnectApi.CdpSegmentOutput, Segment.]
---

# ConnectApi.CdpSegmentOutput

> Segment.

# ConnectApi.CdpSegmentOutput

Segment.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| apiName | String | API name of the segment. | 56.0 |
| dataSpace | String | Data space of the segment. | 57.0 |
| description | String | Segment description. | 55.0 |
| developerName | String | Segment developer name. | 55.0 |
| displayName | String | Segment display name. | 57.0 |
| excludeCriteria | String | Segment exclude criteria. | 57.0 |
| includeCriteria | String | Segment include criteria. | 57.0 |
| includeDbt | ConnectApi.​CdpSegment​DbtPipeline | Segment dbt pipeline. | 55.0 |
| lookalikeCriteria |  | Reserved for future use. | 56.0 |
| marketSegment​DefinitionId | String | ID of the market segment definition. | 55.0 |
| marketSegmentId | String | ID of the market segment. | 56.0 |
| nextPublish​DateTime | String | Date and time of the next segment publish. | 57.0 |
| publishInterval | String | Segment publish interval. | 55.0 |
| publishSchedule​EndDate | String | Publish schedule end date. | 55.0 |
| publishSchedule​StartDateTime | String | Publish schedule start date time. | 55.0 |
| publishStatus | String | Segment publish status. | 55.0 |
| segmentMembership​Dmo | ConnectApi.​CdpSegmentMembership​TableOutput | Segment membership tables. | 58.0 |
| segmentMembership​Table | String | Name of the segment membership table. | 56.0 |
| segmentOnApiName | String | API name of the SegmentOn entity. | 56.0 |
| segmentOnId | String | ID of the DMO segment. | 55.0 |
| segmentStatus | String | Segment status. | 55.0 |
| segmentType | String | Type of segment. | 56.0 |

#### See Also

-   [ConnectApi.CdpSegmentContainerOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_segment_container_output.htm "Segment container.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​CdpSegment​DbtPipeline (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_segment_dbt_pipeline_output.htm)
- ConnectApi.​CdpSegmentMembership​TableOutput (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_segment_membership_table_output.htm)
- ConnectApi.CdpSegmentContainerOutput (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_segment_container_output.htm)
