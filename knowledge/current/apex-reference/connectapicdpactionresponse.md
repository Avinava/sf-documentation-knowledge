---
title: "ConnectApi.CdpActionResponse"
domain: apex-reference
topic: connectapicdpactionresponse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:26.418Z
estimatedTokens: 201
keywords: [ConnectApi.CdpActionResponse, Customer, Data, Platform, action, response.]
---

# ConnectApi.CdpActionResponse

> Customer Data Platform action response.

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

## Related Topics

- ConnectApi.CdpCalculatedInsightStandardActionResponseRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_calculated_insight_action_run_response.htm)
- ConnectApi.CdpSegmentActionOutput (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_segment_action_output.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​CdpErrorResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_error.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
