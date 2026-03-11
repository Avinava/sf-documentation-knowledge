---
title: "ConnectApi.CdpSegmentActionOutput"
domain: apex-reference
topic: connectapicdpsegmentactionoutput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:38.276Z
keywords: [ConnectApi.CdpSegmentActionOutput]
---

# ConnectApi.CdpSegmentActionOutput

# ConnectApi.CdpSegmentActionOutput

Segment action.

Subclass of [ConnectApi.CdpActionResponse](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_action_response_base.htm "Customer Data Platform action response.") in API version 59.0 and later.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| errorCode | String | Error code associated with the action, if any. | 57.0 |
| errorMessage | String | Error message associated with the action, if any. | 57.0 |
| jobId | String | Job ID for the publish job. | 56.0 |
| partitionId | String | ID of the partition. | 56.0 |
| publishStatus | String | Publish status of the segment. | 57.0 |
| segmentApiName | String | API name of the segment. | 59.0 |
| segmentId | String | ID of the segment. | 56.0 |