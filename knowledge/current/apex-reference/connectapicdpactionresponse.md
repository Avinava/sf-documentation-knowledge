---
title: "ConnectApi.CdpActionResponse"
domain: apex-reference
topic: connectapicdpactionresponse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:38.184Z
keywords: [ConnectApi.CdpActionResponse]
---

# ConnectApi.CdpActionResponse

# ConnectApi.CdpActionResponse

Customer Data Platform action response.

This class is abstract.

Superclass of:

-   [ConnectApi.CdpCalculatedInsightStandardActionResponseRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_calculated_insight_action_run_response.htm "Response of the calculated insight run action.")
-   [ConnectApi.CdpSegmentActionOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_segment_action_output.htm "Segment action.") in API version 59.0 and later.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| errors | List<ConnectApi.​CdpErrorResponse> | List of errors that resulted from the action. | 57.0 |
| success | Boolean | Indicates whether the call was successful (true) or not (false). | 57.0 |