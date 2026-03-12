---
title: "HangupResult"
domain: service-connector-api-developer-guide
topic: hangupresult
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.547Z
estimatedTokens: 142
keywords: [HangupResult, result, ended, call, Functions]
---

# HangupResult

> Represents a result type for an ended call.

# HangupResult

Represents a result type for an ended call.

## Constructor

new HangupResult(param)

## Functions Where Used

-   [endcall()](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_endcall.htm "End a call.")

## Parameters

| Field | Details |
| --- | --- |
| param | TypeobjectDescriptionParameters associated with the result. |
| param.calls | TypeArray<PhoneCall>DescriptionOne or more phone calls that ended. This value can be more than one when a rep ends the call or hangs up. |

## Related Topics

- endcall() (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_endcall.htm)
- PhoneCall (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_phonecall.htm)
